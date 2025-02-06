import { getAdjacentContent, getContentDetail } from '@/utils/post';
import PostHeader from '../mdx/PostHeader';
import PostBody from '../mdx/PostBody';
import PostTableOfContent from '../mdx/PostTableOfContent';
import PostNavigation from '../posts/PostNavigation';
import Giscus from '../posts/Giscus';
import Tags from '../posts/Tags';
import { notFound } from 'next/navigation';

interface ISnippetDetailProps {
  fileName: string;
}

const SnippetDetail = async ({ fileName }: ISnippetDetailProps) => {
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

export default SnippetDetail;
