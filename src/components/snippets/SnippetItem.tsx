import { Post } from '@/types/post';
import Link from 'next/link';

interface SnippetItemProps {
  snippet: Post;
}

const SnippetItem = ({ snippet }: SnippetItemProps) => {
  const { title, date, fileName } = snippet.data;

  return (
    <Link
      key={date}
      href={`/snippets/${fileName}`}
    >
      <li className="border rounded-lg hover:bg-neutral-100 cursor-pointer dark:hover:bg-neutral-800 p-5">
        <h2 className="font-bold pb-1">{title}</h2>
        <p className="text-sm text-neutral-400">{date}</p>
      </li>
    </Link>
  );
};

export default SnippetItem;
