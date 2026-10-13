import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';

const root=process.cwd();
const read=p=>fs.readFileSync(path.join(root,p),'utf8');
const parse=p=>JSON.parse(read(p).replace(/^.*?=\s*/s,'').replace(/\s+as const;\s*$/,''));
const blog=parse('lib/october12-blog.ts'),research=parse('lib/october12-research.ts');
const manifest=JSON.parse(read('publishing/2026-10-12/manifest.json'));
const errors=[];const check=(ok,message)=>{if(!ok)errors.push(message)};
const all=[...blog,...research];
check(blog.length===12,'Expected exactly 12 Blog items');
check(research.length===5,'Expected exactly 5 Research items');
check(manifest.articles.length===17,'Manifest must contain 17 items');
check(new Set(all.map(x=>x.slug)).size===17,'Slugs must be unique');
check(new Set(all.map(x=>x.title)).size===17,'Titles must be unique');
check(all.every(x=>x.publishedAt==='2026-10-12'),'Publication dates must be exact');
check(all.every(x=>!/2026|october\s+12/i.test(x.title)),'Titles must be date-free');
const paragraphs=[];
for(const item of all){
  const words=item.sections.flatMap(x=>x.paragraphs).join(' ').split(/\s+/).length;
  check(words>=(item.sources?640:600),`${item.slug} is too short: ${words} words`);
  check(item.sections.length>=(item.sources?7:6),`${item.slug} lacks section depth`);
  for(const section of item.sections)for(const paragraph of section.paragraphs)if(paragraph.length>=120)paragraphs.push({slug:item.slug,text:paragraph.replace(/\s+/g,' ').trim()});
  const svg=read(`public/thumbnails/october-12/${item.slug}.svg`);
  check(svg.includes('width="1200" height="630"'),`${item.slug} thumbnail dimensions invalid`);
  check(svg.includes(item.title),`${item.slug} exact title missing from thumbnail`);
}
const duplicate=paragraphs.filter((x,i,a)=>a.findIndex(y=>y.text===x.text)!==i);
check(duplicate.length===0,`Duplicate substantive paragraphs: ${[...new Set(duplicate.map(x=>x.slug))].join(', ')}`);
const hashes=all.map(x=>crypto.createHash('sha256').update(read(`public/thumbnails/october-12/${x.slug}.svg`)).digest('hex'));
check(new Set(hashes).size===17,'Thumbnails must be unique');
const authority=['ledes.org','americanbar.org','nist.gov','ftc.gov','cisa.gov','uscourts.gov','dol.gov','archives.gov'];
for(const item of research){
  check(item.sources.length===10,`${item.slug} must have 10 sources`);
  check(new Set(item.sources.map(x=>x.url)).size===10,`${item.slug} sources must be unique`);
  check(item.sources.every(x=>{try{const u=new URL(x.url);return u.protocol==='https:'&&authority.some(h=>u.hostname===h||u.hostname.endsWith('.'+h))}catch{return false}}),`${item.slug} source authority invalid`);
}
const blogIndex=read('app/blog/page.tsx'),blogRoute=read('app/blog/[slug]/page.tsx'),researchIndex=read('app/research/page.tsx'),researchRoute=read('app/research/[slug]/page.tsx'),component=read('components/October12Article.tsx');
check(blogIndex.includes('october12Blog')&&blogRoute.includes('October12BlogArticle'),'Blog registry/index/route integration missing');
check(researchIndex.includes('october12Research')&&researchRoute.includes('October12ResearchArticle'),'Research registry/index/route integration missing');
check(component.includes('className="sidebar"')&&component.includes('Related articles')&&component.includes('Related research'),'Sidebar or related-content behavior missing');
check(component.includes('<time dateTime={post.publishedAt}>{post.publishedAt}</time>'),'Visible semantic date missing');
check(manifest.systems.blog.registry!==manifest.systems.research.registry,'Blog and Research registries must be separate');
if(errors.length){console.error(errors.map(x=>'FAIL: '+x).join('\n'));process.exit(1)}
console.log('PASS: 12 Blog + 5 Research; publication depth; exact visible date; date-free titles; 17 unique exact-title thumbnails; 10 authoritative sources per Research item; separate registries/routes/indexes; sidebar and related content; no duplicate substantive paragraphs.');
