import { siteConfig } from '@/constants/site';
import { getMDXFileList } from '@/utils/post';
import { MetadataRoute } from 'next';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const postList = await getMDXFileList('posts');
  const snippetList = await getMDXFileList('snippets');

  const posts: MetadataRoute.Sitemap = postList.map((post) => ({
    url: `${siteConfig.url}/posts/${post.data.category}/${post.data.fileName}`,
    lastModified: new Date(post.data.date).toISOString().split('T')[0],
    changeFrequency: 'daily',
  }));

  const snippets: MetadataRoute.Sitemap = snippetList.map((snippet) => ({
    url: `${siteConfig.url}/snippets/${snippet.data.fileName}`,
    lastModified: new Date(snippet.data.date).toISOString().split('T')[0],
    changeFrequency: 'daily',
  }));

  const routes: MetadataRoute.Sitemap = ['', 'about', 'posts', 'snippets'].map((route) => ({
    url: `${siteConfig.url}/${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }));

  return [...routes, ...posts, ...snippets];
}
