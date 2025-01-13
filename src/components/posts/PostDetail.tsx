import { getPostDetail } from '@/utils/post';
import PostBody from '../mdx/PostBody';
import PostHeader from '../mdx/PostHeader';
import PostTableOfContent from '../mdx/PostTableOfContent';
import { Suspense } from 'react';

interface IPostDetailProps {
  category: string;
  fileName: string;
}

const PostDetail = async ({ category, fileName }: IPostDetailProps) => {
  const { data, content } = await getPostDetail(category, fileName);

  return (
    <div className="h-full relative">
      <Suspense>
        <PostHeader data={data} />
        <PostBody content={content} />
        <PostTableOfContent />
      </Suspense>
    </div>
  );
};

export default PostDetail;
