'use client';

import useTableOfContent from '@/hooks/useTableOfContent';
import { motion } from 'motion/react';
import Link from 'next/link';
import { useMemo } from 'react';

const PostTableOfContent = () => {
  const { tableOfContent, currentHeading } = useTableOfContent();

  // 목차 아이템 스타일 메모이제이션
  const getItemStyle = useMemo(
    () => (level: number) => ({
      paddingLeft: `${(level - 1) * 0.6}rem`,
    }),
    [],
  );

  return (
    <aside className="absolute top-0 left-[calc(50%+380px)] h-full w-60 hidden lg:block">
      <nav
        aria-label="Table of contents"
        className="sticky top-[130px] text-sm border-l p-5"
      >
        <p className="font-bold pb-2">목차</p>
        <ul className="space-y-1 text-basic-400 dark:text-basic-500">
          {tableOfContent.map((toc) => {
            const { id, level, textContent } = toc;
            const isActive = currentHeading === id;

            return (
              <li
                key={id}
                style={getItemStyle(level)}
              >
                <Link
                  href={`#${id}`}
                  className={`
                    block py-1 transition-colors duration-200
                    hover:text-primary-500 dark:hover:text-primary-400
                    ${isActive && 'text-primary-600 dark:text-primary-500 font-semibold'}
                  `}
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector(`#${id}`)?.scrollIntoView({
                      behavior: 'smooth',
                    });
                  }}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeHeading"
                      className="absolute left-0 w-0.5 h-5 bg-primary-500"
                      initial={false}
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span>{textContent}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
};

export default PostTableOfContent;
