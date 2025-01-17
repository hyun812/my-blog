import { getMDXFileList } from '@/utils/post';
import { MetadataRoute } from 'next';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL;

  const postList = await getMDXFileList('posts');
  const snippetList = await getMDXFileList('snippets');

  const posts: MetadataRoute.Sitemap = postList.map((post) => ({
    url: `${baseUrl}/posts/${post.data.category}/${post.data.fileName}`,
    lastModified: new Date(post.data.date),
    changeFrequency: 'daily',
  }));

  const snippets: MetadataRoute.Sitemap = snippetList.map((snippet) => ({
    url: `${baseUrl}/snippets/${snippet.data.fileName}`,
    lastModified: new Date(snippet.data.date),
    changeFrequency: 'daily',
  }));

  return [
    {
      url: `${baseUrl}`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/posts`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/snippets`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.5,
    },
    ...posts,
    ...snippets,
  ];
}
