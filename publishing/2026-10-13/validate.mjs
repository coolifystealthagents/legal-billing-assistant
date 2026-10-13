import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import {execFileSync} from 'node:child_process';

const root=path.resolve(import.meta.dirname,'../..');
const read=p=>fs.readFileSync(path.join(root,p),'utf8');
const git=(...args)=>execFileSync('git',args,{cwd:root,encoding:'utf8'}).trim();
const parse=p=>JSON.parse(read(p).replace(/^.*?=\s*/s,'').replace(/\s+as const;\s*$/,''));
const blog=parse('lib/october13-blog.ts');
const research=parse('lib/october13-research.ts');
const manifest=JSON.parse(read('publishing/2026-10-13/manifest.json'));
const errors=[];
const check=(condition,message)=>{if(!condition)errors.push(message)};
const all=[...blog,...research];

check(manifest.baseSha==='9e2ae2ef36e9e32d93689240ec13d385fd517f8b','Immutable base SHA differs from re-resolved origin/main');
check(git('merge-base','--is-ancestor',manifest.baseSha,'HEAD')==='', 'Base SHA is not an ancestor of HEAD');
check(blog.length===12,'Expected exactly 12 October 13 Blog items');
check(research.length===5,'Expected exactly 5 October 13 Research items');
check(manifest.items.length===17,'Manifest must contain exactly 17 items');
check(new Set(all.map(x=>x.slug)).size===17,'October 13 slugs must be unique');
check(new Set(all.map(x=>x.title)).size===17,'October 13 titles must be unique');
check(all.every(x=>x.publishedAt==='2026-10-13'),'Publication date must be 2026-10-13');
check(all.every(x=>!/2026|october\s+13/i.test(x.title)),'Titles must be date-free');

const paragraphs=[];
for(const item of all){
  const words=item.sections.flatMap(section=>section.paragraphs).join(' ').split(/\s+/).filter(Boolean).length;
  check(words>=600,`${item.slug} has only ${words} substantive words`);
  check(item.sections.length===8,`${item.slug} must have eight substantive sections`);
  check(item.sources.length===10,`${item.slug} must have exactly ten sources`);
  check(new Set(item.sources.map(source=>source.url)).size===10,`${item.slug} sources must be unique`);
  check(item.sources.every(source=>{try{return new URL(source.url).protocol==='https:'}catch{return false}}),`${item.slug} sources must be valid HTTPS URLs`);
  const authority=['ledes.org','utbms.com','americanbar.org','nist.gov','ftc.gov','cisa.gov','archives.gov','uscourts.gov'];
  check(item.sources.every(source=>{const host=new URL(source.url).hostname;return authority.some(domain=>host===domain||host.endsWith(`.${domain}`))}),`${item.slug} contains a non-authoritative source`);
  for(const section of item.sections)for(const paragraph of section.paragraphs){
    check(paragraph.length>=120,`${item.slug}/${section.heading} has a thin paragraph`);
    paragraphs.push({slug:item.slug,text:paragraph.replace(/\s+/g,' ').trim().toLowerCase()});
  }
  const svg=read(`public/thumbnails/october-13/${item.slug}.svg`);
  check(svg.includes('width="1200" height="630"'),`${item.slug} thumbnail is not 1200x630`);
  check(svg.includes(`<title id="title">${item.title.replaceAll('&','&amp;')}</title>`),`${item.slug} thumbnail lacks its exact title`);
}

const duplicate=paragraphs.filter((entry,index,array)=>array.findIndex(other=>other.text===entry.text)!==index);
check(duplicate.length===0,`Duplicate October 13 substantive paragraphs: ${[...new Set(duplicate.map(x=>x.slug))].join(', ')}`);
const baseText=['lib/content.ts','lib/october12-blog.ts','lib/october12-research.ts'].map(file=>git('show',`${manifest.baseSha}:${file}`)).join('\n').replace(/\s+/g,' ').toLowerCase();
const baseMatches=paragraphs.filter(entry=>baseText.includes(entry.text));
check(baseMatches.length===0,`October 13 paragraphs duplicated from immutable base: ${[...new Set(baseMatches.map(x=>x.slug))].join(', ')}`);

const thumbnailHashes=all.map(item=>crypto.createHash('sha256').update(read(`public/thumbnails/october-13/${item.slug}.svg`)).digest('hex'));
check(new Set(thumbnailHashes).size===17,'All 17 thumbnail files must be unique');
check(manifest.items.every(item=>fs.existsSync(path.join(root,item.thumbnailPath))), 'A manifest thumbnail is missing');
check(manifest.items.every(item=>item.publicationDate==='2026-10-13'), 'Manifest publication dates must be exact');
check(manifest.registryPaths[0]!==manifest.registryPaths[1], 'Blog and Research must use separate registries');

const blogIndex=read('app/blog/page.tsx'),blogRoute=read('app/blog/[slug]/page.tsx');
const researchIndex=read('app/research/page.tsx'),researchRoute=read('app/research/[slug]/page.tsx');
const component=read('components/October13Article.tsx'),sitemap=read('app/sitemap.ts');
check(blogIndex.includes('october13Blog')&&blogRoute.includes('October13BlogArticle'),'October 13 Blog index or route integration is missing');
check(researchIndex.includes('october13Research')&&researchRoute.includes('October13ResearchArticle'),'October 13 Research index or route integration is missing');
check(component.includes('className="sidebar"')&&component.includes('Related articles')&&component.includes('Related research'),'Sidebar or same-section related-content behavior is missing');
check(component.includes('<time dateTime={post.publishedAt}>{post.publishedAt}</time>'),'Visible semantic publication date is missing');
check(component.includes('Authoritative sources'),'Rendered source section is missing');
check(sitemap.includes('october13Blog')&&sitemap.includes('october13Research'),'Sitemap discovery is missing');

for(const stable of ['lib/content.ts','lib/october12-blog.ts','lib/october12-research.ts','components/October12Article.tsx']){
  check(read(stable).trimEnd()===git('show',`${manifest.baseSha}:${stable}`).trimEnd(),`Immutable base content changed: ${stable}`);
}
const allowed=[
  /^app\/blog\/\[slug\]\/page\.tsx$/,/^app\/blog\/page\.tsx$/,/^app\/research\/\[slug\]\/page\.tsx$/,/^app\/research\/page\.tsx$/,/^app\/sitemap\.ts$/,
  /^components\/October13Article\.tsx$/,/^lib\/october13-(blog|research)\.ts$/,/^public\/thumbnails\/october-13\/[^/]+\.svg$/,/^publishing\/2026-10-13\/(generate|validate)\.mjs$/,/^publishing\/2026-10-13\/manifest\.json$/
];
const changed=[...new Set([...git('diff','--name-only',manifest.baseSha).split('\n'),...git('ls-files','--others','--exclude-standard').split('\n')].filter(Boolean))];
check(changed.every(file=>allowed.some(pattern=>pattern.test(file))),`Out-of-scope changed paths: ${changed.filter(file=>!allowed.some(pattern=>pattern.test(file))).join(', ')}`);

if(errors.length){console.error(errors.map(error=>`FAIL: ${error}`).join('\n'));process.exit(1)}
console.log('PASS: immutable base; 12 Blog + 5 Research; 10 authoritative HTTPS sources each; exact date and date-free titles; 17 unique exact-title thumbnails; separate registries, routes, indexes, sidebars and related content; sitemap; duplicate and base-prose audits; scoped diff.');
