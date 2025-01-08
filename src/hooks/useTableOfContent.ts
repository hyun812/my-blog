import { ITableOfContent } from '@/types/post';
import { useEffect, useState } from 'react';

const useTableOfContent = () => {
  const [tableOfContent, setTableOfContent] = useState<ITableOfContent[]>([]);
  const [currentHeading, setCurrentHeading] = useState<string | null>(null);

  useEffect(() => {
    const headingElements = Array.from(document.querySelectorAll<HTMLElement>('.prose > :is(h1, h2, h3)'));

    const toc = headingElements.map((hElement) => {
      const { id, textContent, nodeName } = hElement;

      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const absoluteTop = hElement.getBoundingClientRect().top + scrollTop;
      const level = Number(nodeName.match(/\d+/)); // 숫자에 해당하는 정규식

      return {
        id,
        textContent,
        level,
        absoluteTop,
      };
    });

    if (toc.length !== 0) {
      setTableOfContent(toc);
    }
  }, []);

  useEffect(() => {
    const updateCurrentHeading = () => {
      if (!tableOfContent.length) return;

      const scrollPosition = window.scrollY + 10;

      const current = tableOfContent.find(
        (heading, index) =>
          scrollPosition >= heading.absoluteTop &&
          (index === tableOfContent.length - 1 || scrollPosition < tableOfContent[index + 1].absoluteTop),
      );

      if (current) {
        setCurrentHeading(current.id);
      }
    };

    window.addEventListener('scroll', updateCurrentHeading);
    updateCurrentHeading();

    return () => {
      window.removeEventListener('scroll', updateCurrentHeading);
    };
  }, [tableOfContent]);

  return { tableOfContent, currentHeading };
};

export default useTableOfContent;
