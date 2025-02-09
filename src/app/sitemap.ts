import { siteConfig } from '@/constants/site';
import { getMDXFileList } from '@/utils/post';
import { MetadataRoute } from 'next';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const postList = await getMDXFileList('posts');
  const snippetList = await getMDXFileList('snippets');

  const posts: MetadataRoute.Sitemap = postList.map((post) => ({
    url: `${siteConfig.url}/posts/${post.data.category}/${post.data.fileName}`,
    lastModified: new Date(post.data.date),
    changeFrequency: 'daily',
  }));

  const snippets: MetadataRoute.Sitemap = snippetList.map((snippet) => ({
    url: `${siteConfig.url}/snippets/${snippet.data.fileName}`,
    lastModified: new Date(snippet.data.date),
    changeFrequency: 'daily',
  }));

  return [
    {
      url: `${siteConfig.url}`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${siteConfig.url}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${siteConfig.url}/posts`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.8,
    },
    {
      url: `${siteConfig.url}/snippets`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.5,
    },
    ...posts,
    ...snippets,
  ];
}
