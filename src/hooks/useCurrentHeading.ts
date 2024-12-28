import { useEffect, useState } from 'react';

const useCurrentHeading = () => {
  const [currentHeading, setCurrentHeading] = useState<string | null>(null);

  useEffect(() => {
    const updateCurrentHeading = () => {
      const headingElements = Array.from(document.querySelectorAll<HTMLElement>('.prose > :is(h1, h2)')).map((e) => ({
        id: e.id,
        top: e.offsetTop,
      }));

      const scrollPosition = window.scrollY + 200;

      const current = headingElements.find(
        (heading, index) =>
          scrollPosition >= heading.top &&
          (index === headingElements.length - 1 || scrollPosition < headingElements[index + 1].top),
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
  }, []);

  return currentHeading;
};

export default useCurrentHeading;
