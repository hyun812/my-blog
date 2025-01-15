import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Posts',
  description: '전체 포스트 목록을 확인해보세요.',
};

export default function PostsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div>{children}</div>;
}
