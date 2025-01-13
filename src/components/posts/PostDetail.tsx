import { getPostDetail } from '@/utils/post';
import PostBody from '../mdx/PostBody';
import PostHeader from '../mdx/PostHeader';
import PostTableOfContent from '../mdx/PostTableOfContent';

interface IPostDetailProps {
  category: string;
  fileName: string;
}

const PostDetail = async ({ category, fileName }: IPostDetailProps) => {
  const { data, content } = await getPostDetail(category, fileName);

  return (
    <div className="h-full relative">
      <PostHeader data={data} />
      <PostBody content={content} />
      <PostTableOfContent />
    </div>
  );
};

export default PostDetail;
