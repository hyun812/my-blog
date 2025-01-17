import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Snippets',
  description: '개발하면서 유용하게 사용했던 코드조각 모음입니다.',
};

export default function SnippetsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div>{children}</div>;
}
