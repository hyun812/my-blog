import PostDetailSkeleton from '@/components/common/PostDetailSkeleton';
import PostDetail from '@/components/posts/PostDetail';
import { getMDXFileList, getPostDetail } from '@/utils/post';
import { Suspense } from 'react';

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

  const { data } = await getPostDetail(category, fileName);

  return {
    title: data.title,
    description: data.description,
  };
};

const PostDetailPage = async ({ params }: Props) => {
  const slug = (await params).slug;
  const [category, fileName] = slug;

  return (
    <Suspense fallback={<PostDetailSkeleton />}>
      <PostDetail
        category={category}
        fileName={fileName}
      ></PostDetail>
    </Suspense>
  );
};

export default PostDetailPage;
