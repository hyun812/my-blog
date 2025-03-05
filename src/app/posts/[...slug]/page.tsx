import Giscus from '@/components/post_detail/Giscus';
import PostBody from '@/components/post_detail/PostBody';
import PostHeader from '@/components/post_detail/PostHeader';
import PostNavigation from '@/components/post_detail/PostNavigation';
import PostTableOfContent from '@/components/post_detail/PostTableOfContent';
import Tags from '@/components/post_detail/Tags';
import { siteConfig } from '@/constants/site';
import { getMDXFileList, getContentDetail, getAdjacentContent } from '@/utils/post';
import Head from 'next/head';
import { notFound } from 'next/navigation';

type Props = {
  params: Promise<{ slug: string[] }>;
};

export async function generateStaticParams() {
  const postList = await getMDXFileList('posts');

  return postList.map((post) => ({
    slug: [post.data.category, post.data.fileName],
  }));
}

export const generateMetadata = async ({ params }: Props) => {
  const slug = (await params).slug;
  const [category, fileName] = slug;

  const { data } = await getContentDetail('posts', fileName, category);

  if (!data.fileName) return { title: 'Page Not Found', description: '요청하신 페이지를 찾을 수 없습니다.' };

  return {
    title: data.title,
    description: data.description,
    keywords: data.tags.join(', '),
    openGraph: {
      type: 'article',
      title: data.title,
      description: data.description,
      url: `${siteConfig.url}/posts/${category}/${fileName}`,
      tags: data.tags,
    },
  };
};

const PostDetailPage = async ({ params }: Props) => {
  const slug = (await params).slug;
  const [category, fileName] = slug;

  const [post, adjacent] = await Promise.all([
    getContentDetail('posts', fileName, category),
    getAdjacentContent('posts', fileName),
  ]);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.data.title,
    description: post.data.description,
    url: `${siteConfig.url}/posts/${category}/${fileName}`,
    author: {
      '@type': 'Person',
      name: siteConfig.author,
      logo: {
        '@type': 'ImageObject',
        url: `${siteConfig.url}/image/logo.png`,
      },
    },
    publisher: {
      '@type': 'Organization',
      name: siteConfig.author,
    },
    keywords: post.data.tags.join(', '),
    datePublished: post.data.date,
    dateModified: post.data.date,
    articleSection: 'Technology',
    articleTag: category,
  };

  if (!post.content || !adjacent.nextPost.content) return notFound();

  return (
    <>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </Head>
      <article className="h-full relative border-b pb-8">
        <PostHeader data={post.data} />
        <PostBody content={post.content} />
        <PostTableOfContent />
        <Tags tags={post.data.tags} />
      </article>
      <section>
        <PostNavigation
          content="posts"
          adjacent={adjacent}
        />
        <Giscus />
      </section>
    </>
  );
};

export default PostDetailPage;
