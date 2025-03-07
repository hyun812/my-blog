import { Post } from '@/types/post';
import Link from 'next/link';

interface SnippetItemProps {
  snippet: Post;
}

const SnippetItem = ({ snippet }: SnippetItemProps) => {
  const { title, date, fileName } = snippet.data;

  return (
    <li className="border rounded-lg pointerHover:hover:bg-basic-100 cursor-pointer dark:pointerHover:hover:bg-basic-800 p-5">
      <Link href={`/snippets/${fileName}`}>
        <h2 className="font-bold pb-1 line-clamp-1">{title}</h2>
        <p className="text-sm text-basic-400">{date}</p>
      </Link>
    </li>
  );
};

export default SnippetItem;
