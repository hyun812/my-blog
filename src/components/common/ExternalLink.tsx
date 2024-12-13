import React from 'react';

const ExternalLink = ({ children, ...props }: React.ComponentProps<'a'>) => {
  return (
    <a
      {...props}
      className="p-2 rounded-full"
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
};

export default ExternalLink;
