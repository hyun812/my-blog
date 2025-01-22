import { Post } from '@/types/post';
import SnippetItem from './SnippetItem';

const SnippetList = ({ snippetList }: { snippetList: Post[] }) => {
  return (
    <ul className="w-full grid grid-cols-1 sm:grid-cols-2 gap-3">
      {snippetList.map((snippet) => (
        <SnippetItem
          key={snippet.data.date}
          snippet={snippet}
        />
      ))}
    </ul>
  );
};

export default SnippetList;
