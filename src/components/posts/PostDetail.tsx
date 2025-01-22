import { getAdjacentPosts, getPostDetail } from '@/utils/post';
import PostBody from '../mdx/PostBody';
import PostHeader from '../mdx/PostHeader';
import PostTableOfContent from '../mdx/PostTableOfContent';
import PostNavigation from './PostNavigation';
import Giscus from './Giscus';

interface IPostDetailProps {
  category: string;
  fileName: string;
}

const PostDetail = async ({ category, fileName }: IPostDetailProps) => {
  const [post, adjacent] = await Promise.all([getPostDetail(category, fileName), getAdjacentPosts(fileName)]);

  return (
    <>
      <article className="h-full relative">
        <PostHeader data={post.data} />
        <PostBody content={post.content} />
        <PostTableOfContent />
      </article>
      <section>
        <PostNavigation adjacent={adjacent} />
        <Giscus />
      </section>
    </>
  );
};

export default PostDetail;
