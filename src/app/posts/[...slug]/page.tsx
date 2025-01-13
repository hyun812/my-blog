import PostDetail from '@/components/posts/PostDetail';
import { Suspense } from 'react';

const PostDetailPage = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;
  const [category, fileName] = slug;

  return (
    <Suspense>
      <PostDetail
        category={category}
        fileName={fileName}
      ></PostDetail>
    </Suspense>
  );
};

export default PostDetailPage;
