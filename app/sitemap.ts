import type { MetadataRoute } from 'next';
import { site } from '@/lib/site';
import { blogPosts,researchPosts } from '@/lib/content';
import { october12Blog } from '@/lib/october12-blog';
import { october12Research } from '@/lib/october12-research';
import { october13Blog } from '@/lib/october13-blog';
import { october13Research } from '@/lib/october13-research';
export default function sitemap():MetadataRoute.Sitemap{const base=`https://${site.domain}`;const staticRoutes=['','/about','/services','/contact-us','/blog','/research','/privacy','/terms'];return[...staticRoutes.map((path)=>({url:`${base}${path}`,lastModified:new Date('2026-10-13')})),...site.services.map((s)=>({url:`${base}/services/${s.slug}`,lastModified:new Date('2026-10-13')})),...[...october13Blog,...october12Blog,...blogPosts].map((p)=>({url:`${base}/blog/${p.slug}`,lastModified:new Date(p.publishedAt)})),...[...october13Research,...october12Research,...researchPosts].map((p)=>({url:`${base}/research/${p.slug}`,lastModified:new Date(p.publishedAt)}))]}
