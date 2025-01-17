import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About',
  description: '저에 대해 소개합니다.',
};

export default function AboutLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div>{children}</div>;
}
