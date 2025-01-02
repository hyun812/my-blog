import { getSnippetDetail, parseContents } from '@/utils/post';
import PostHeader from '../mdx/PostHeader';
import PostBody from '../mdx/PostBody';
import PostTableOfContent from '../mdx/PostTableOfContent';

interface ISnippetDetailProps {
  fileName: string;
}

const SnippetDetail = async ({ fileName }: ISnippetDetailProps) => {
  const { data, content } = await getSnippetDetail(fileName);
  const tableOfContent = parseContents(content);

  return (
    <div className="h-full relative">
      <PostHeader data={data} />
      <PostBody content={content} />
      <PostTableOfContent tableOfContent={tableOfContent} />
    </div>
  );
};

export default SnippetDetail;
