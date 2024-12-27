import { getPostDetail } from '@/utils/post';
import PostBody from './PostBody';

interface IPostDetailProps {
  category: string;
  fileName: string;
}

const PostDetail = async ({ category, fileName }: IPostDetailProps) => {
  const { data, content } = await getPostDetail(category, fileName);

  console.log(data);

  return (
    <>
      <PostBody content={content} />
    </>
  );
};

export default PostDetail;
