import { PropsWithChildren } from 'react';
import { LinkProps } from 'next/link';

const MDXLink = ({ children, href, ...props }: PropsWithChildren<LinkProps>) => {
  return (
    <a
      {...props}
      target="_blank"
      rel="noopener noreferrer"
      href={href.toString() || ''}
      className="break-words text-cyan-600 no-underline underline-offset-4 hover:underline"
    >
      {children}
    </a>
  );
};

export default MDXLink;
