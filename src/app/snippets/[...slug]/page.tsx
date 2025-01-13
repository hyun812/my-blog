import SnippetDetail from '@/components/snippets/SnippetDetail';

const SnippetDetailPage = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;
  const [fileName] = slug;

  return <SnippetDetail fileName={fileName}></SnippetDetail>;
};

export default SnippetDetailPage;
