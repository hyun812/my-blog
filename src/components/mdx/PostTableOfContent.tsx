'use client';

import useTableOfContent from '@/hooks/useTableOfContent';
import Link from 'next/link';

const PostTableOfContent = () => {
  const { tableOfContent, currentHeading } = useTableOfContent();

  return (
    <aside className="absolute top-0 left-[calc(50%+380px)] h-full w-56 hidden xl:block">
      <div className="sticky top-[130px] text-sm border-l  p-5">
        <p className="font-bold pb-2">목차</p>
        <ul className="w-full flex flex-col gap-1 text-basic-400 dark:text-basic-500">
          {tableOfContent.map((toc, index) => {
            const { id, level, textContent } = toc;

            const isCurHeading = currentHeading === id;
            const leftPadding = `pl-${(level - 1) * 2}`;

            return (
              <Link
                key={index}
                href={`#${id}`}
                className={`py-1 ${leftPadding}`}
              >
                <li
                  className={` ${isCurHeading ? 'font-semibold text-basic-900 dark:text-basic-200' : 'pointerHover:hover:text-primary-400'}`}
                >
                  {textContent}
                </li>
              </Link>
            );
          })}
        </ul>
      </div>
    </aside>
  );
};

export default PostTableOfContent;
