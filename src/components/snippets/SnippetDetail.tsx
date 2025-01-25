import { getAdjacentSnippets, getSnippetDetail } from '@/utils/post';
import PostHeader from '../mdx/PostHeader';
import PostBody from '../mdx/PostBody';
import PostTableOfContent from '../mdx/PostTableOfContent';
import PostNavigation from '../posts/PostNavigation';
import Giscus from '../posts/Giscus';

interface ISnippetDetailProps {
  fileName: string;
}

const SnippetDetail = async ({ fileName }: ISnippetDetailProps) => {
  const [snippet, adjacent] = await Promise.all([getSnippetDetail(fileName), getAdjacentSnippets(fileName)]);

  return (
    <>
      <article className="h-full relative">
        <PostHeader data={snippet.data} />
        <PostBody content={snippet.content} />
        <PostTableOfContent />
      </article>
      <section>
        <PostNavigation adjacent={adjacent} />
        <Giscus />
      </section>
    </>
  );
};

export default SnippetDetail;
