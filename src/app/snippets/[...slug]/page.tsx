import SnippetDetail from '@/components/snippets/SnippetDetail';
import { Suspense } from 'react';

const SnippetDetailPage = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;
  const [fileName] = slug;

  return (
    <Suspense>
      <SnippetDetail fileName={fileName}></SnippetDetail>;
    </Suspense>
  );
};

export default SnippetDetailPage;
