'use client';

import { ICONS } from '@/constants/Icons';
import { DetailedHTMLProps, HTMLAttributes, useRef, useState } from 'react';

const CodeBlock = ({ children, ...props }: DetailedHTMLProps<HTMLAttributes<HTMLPreElement>, HTMLPreElement>) => {
  const [isCopied, setIsCopied] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const preRef = useRef<HTMLPreElement>(null);

  // 코드 복사 버튼 이벤트 핸들러
  const handleClickCopy = async () => {
    const code = preRef.current?.textContent; // 코드 블록 내용 추출

    if (code) {
      setIsLoading(true);
      await navigator.clipboard.writeText(code); // 클립보드에 복사
      setIsLoading(false);

      setIsCopied(true);

      setTimeout(() => {
        setIsCopied(false);
      }, 1500);
    }
  };

  return (
    <div className="relative group">
      <pre
        ref={preRef}
        {...props}
      >
        {children}
      </pre>
      <button
        disabled={isCopied || isLoading}
        aria-label={isCopied ? 'Copied!' : 'Copy code'}
        onClick={handleClickCopy}
        className="absolute right-3 bottom-3 h-8 w-8 flex-center rounded-lg 
        bg-basic-700 text-basic-400 hover:text-basic-200 opacity-0 group-hover:opacity-100"
      >
        <span>{isCopied ? ICONS.CHECK : ICONS.CLIP_BOARD}</span>
      </button>
    </div>
  );
};

export default CodeBlock;
