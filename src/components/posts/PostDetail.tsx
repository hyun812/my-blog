import { getAdjacentContent, getContentDetail } from '@/utils/post';
import PostBody from '../mdx/PostBody';
import PostHeader from '../mdx/PostHeader';
import PostTableOfContent from '../mdx/PostTableOfContent';
import PostNavigation from './PostNavigation';
import Giscus from './Giscus';
import Tags from './Tags';
import { notFound } from 'next/navigation';

interface IPostDetailProps {
  category: string;
  fileName: string;
}

const PostDetail = async ({ category, fileName }: IPostDetailProps) => {
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

export default PostDetail;
