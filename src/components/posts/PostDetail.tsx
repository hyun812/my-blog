import { getPostDetail, parseContents } from '@/utils/post';
import PostBody from './PostBody';
import PostHeader from './PostHeader';
import PostTableOfContent from './PostTableOfContent';

interface IPostDetailProps {
  category: string;
  fileName: string;
}

const PostDetail = async ({ category, fileName }: IPostDetailProps) => {
  const { data, content } = await getPostDetail(category, fileName);
  const tableOfContent = parseContents(content);

  return (
    <div className="h-full relative">
      <PostHeader data={data} />
      <PostBody content={content} />
      <PostTableOfContent tableOfContent={tableOfContent} />
    </div>
  );
};

export default PostDetail;
