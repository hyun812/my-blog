import { ITableOfContent } from '@/types/post';
import { useEffect, useRef, useState } from 'react';
import { debounce } from 'lodash';

const useTableOfContent = () => {
  const [tableOfContent, setTableOfContent] = useState<ITableOfContent[]>([]);
  const [currentHeading, setCurrentHeading] = useState<string | null>(null);
  const headingsRef = useRef<ITableOfContent[]>([]);

  useEffect(() => {
    const headingElements = Array.from(document.querySelectorAll<HTMLElement>('.prose > :is(h1, h2, h3)'));

    headingsRef.current = headingElements.map((element) => ({
      id: element.id,
      textContent: element.textContent || '',
      level: Number(element.nodeName.match(/\d+/)),
      absoluteTop: element.getBoundingClientRect().top + window.scrollY,
    }));

    setTableOfContent(headingsRef.current);
  }, []);

  const updateCurrentHeading = debounce(() => {
    if (!tableOfContent.length) return;

    const scrollPosition = window.scrollY + 10;

    const current = tableOfContent.find((heading, index) => {
      if (scrollPosition < tableOfContent[0].absoluteTop) {
        return index === 0; // 첫 번째 항목을 선택
      }

      return (
        scrollPosition >= heading.absoluteTop &&
        (index === tableOfContent.length - 1 || scrollPosition < tableOfContent[index + 1].absoluteTop)
      );
    });

    if (current) {
      setCurrentHeading(current.id);
    }
  }, 50);

  useEffect(() => {
    window.addEventListener('scroll', updateCurrentHeading);
    updateCurrentHeading();

    return () => {
      window.removeEventListener('scroll', updateCurrentHeading);
    };
  }, [updateCurrentHeading]);

  return { tableOfContent, currentHeading };
};

export default useTableOfContent;
