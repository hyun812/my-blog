'use client';
import useCurrentHeading from '@/hooks/useCurrentHeading';
import { ITableOfContent } from '@/types/post';
import Link from 'next/link';

const PostTableOfContent = ({ tableOfContent }: { tableOfContent: ITableOfContent[] }) => {
  const currentHeading = useCurrentHeading();

  return (
    <aside className="absolute top-0 left-[calc(50%+380px)] h-full w-56 hidden xl:block">
      <div className="sticky top-[200px] text-sm border rounded-lg p-5">
        <p className="font-bold pb-2">목차</p>
        <ul className="w-full flex flex-col gap-1 text-basic-400 dark:text-basic-500">
          {tableOfContent.map((toc, index) => (
            <Link
              key={index}
              href={`#${toc.slug}`}
              className=" p-1 pl-2 rounded-lg"
            >
              <li className={`${currentHeading === toc.slug && 'font-bold text-basic-900 dark:text-basic-200'} `}>
                {toc.text}
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default PostTableOfContent;
