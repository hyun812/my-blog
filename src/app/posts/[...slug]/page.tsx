import Giscus from '@/components/post_detail/Giscus';
import PostBody from '@/components/post_detail/PostBody';
import PostHeader from '@/components/post_detail/PostHeader';
import PostNavigation from '@/components/post_detail/PostNavigation';
import PostTableOfContent from '@/components/post_detail/PostTableOfContent';
import Tags from '@/components/post_detail/Tags';
import { siteConfig } from '@/constants/site';
import { getMDXFileList, getContentDetail, getAdjacentContent } from '@/utils/post';
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

  if (!post.content || !adjacent.nextPost.content) return notFound();

  return (
    <>
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
