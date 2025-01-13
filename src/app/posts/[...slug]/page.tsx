import PostDetail from '@/components/posts/PostDetail';

const PostDetailPage = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;
  const [category, fileName] = slug;

  return (
    <PostDetail
      category={category}
      fileName={fileName}
    ></PostDetail>
  );
};

export default PostDetailPage;
