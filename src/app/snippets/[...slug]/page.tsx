import SnippetDetail from '@/components/snippets/SnippetDetail';
import { getMDXFileList, getSnippetDetail } from '@/utils/post';

type Props = {
  params: Promise<{ slug: string[] }>;
};

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL;

export async function generateStaticParams() {
  const snippetList = await getMDXFileList('snippets');

  return snippetList.map((snippet) => ({
    slug: [snippet.data.fileName],
  }));
}

export const generateMetadata = async ({ params }: Props) => {
  const slug = (await params).slug;
  const fileName = slug[0];

  const { data } = await getSnippetDetail(fileName);

  return {
    title: data.title,
    description: data.description,
    keywords: data.tags.join(', '),
    openGraph: {
      type: 'article',
      title: data.title,
      description: data.description,
      url: `${baseUrl}/snippets/${fileName}`,
      tags: data.tags,
    },
  };
};

const SnippetDetailPage = async ({ params }: Props) => {
  const slug = (await params).slug;
  const fileName = slug[0];

  return <SnippetDetail fileName={fileName}></SnippetDetail>;
};

export default SnippetDetailPage;
