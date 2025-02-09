import SnippetDetail from '@/components/snippets/SnippetDetail';
import { siteConfig } from '@/constants/site';
import { getMDXFileList, getContentDetail } from '@/utils/post';

type Props = {
  params: Promise<{ slug: string[] }>;
};

export async function generateStaticParams() {
  const snippetList = await getMDXFileList('snippets');

  return snippetList.map((snippet) => ({
    slug: [snippet.data.fileName],
  }));
}

export const generateMetadata = async ({ params }: Props) => {
  const slug = (await params).slug;
  const fileName = slug[0];

  const { data } = await getContentDetail('snippets', fileName);
  if (!data.fileName) return { title: 'Page Not Found', description: '요청하신 페이지를 찾을 수 없습니다.' };

  return {
    title: data.title,
    description: data.description,
    keywords: data.tags.join(', '),
    openGraph: {
      type: 'article',
      title: data.title,
      description: data.description,
      url: `${siteConfig.url}/snippets/${fileName}`,
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
