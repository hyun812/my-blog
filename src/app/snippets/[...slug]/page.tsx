import Giscus from '@/components/post_detail/Giscus';
import PostBody from '@/components/post_detail/PostBody';
import PostHeader from '@/components/post_detail/PostHeader';
import PostNavigation from '@/components/post_detail/PostNavigation';
import PostTableOfContent from '@/components/post_detail/PostTableOfContent';
import Tags from '@/components/post_detail/Tags';
import { siteConfig } from '@/constants/site';
import { getMDXFileList, getContentDetail, getAdjacentContent } from '@/utils/post';
import { notFound } from 'next/navigation';

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
  const [snippet, adjacent] = await Promise.all([
    getContentDetail('snippets', fileName),
    getAdjacentContent('snippets', fileName),
  ]);

  if (!snippet.content || !adjacent.nextPost.content) return notFound();
  return (
    <>
      <article className="h-full relative border-b pb-8">
        <PostHeader data={snippet.data} />
        <PostBody content={snippet.content} />
        <PostTableOfContent />
        <Tags tags={snippet.data.tags} />
      </article>
      <section>
        <PostNavigation
          content="snippets"
          adjacent={adjacent}
        />
        <Giscus />
      </section>
    </>
  );
};

export default SnippetDetailPage;
