import PostDetailSkeleton from '@/components/common/PostDetailSkeleton';
import SnippetDetail from '@/components/snippets/SnippetDetail';
import { getSnippetDetail } from '@/utils/post';
import { Suspense } from 'react';

type Props = {
  params: Promise<{ slug: string[] }>;
};

export const generateMetadata = async ({ params }: Props) => {
  const slug = (await params).slug;
  const fileName = slug[0];

  const { data } = await getSnippetDetail(fileName);

  return {
    title: data.title,
    description: data.description,
  };
};

const SnippetDetailPage = async ({ params }: Props) => {
  const slug = (await params).slug;
  const fileName = slug[0];

  return (
    <Suspense fallback={<PostDetailSkeleton />}>
      <SnippetDetail fileName={fileName}></SnippetDetail>;
    </Suspense>
  );
};

export default SnippetDetailPage;
