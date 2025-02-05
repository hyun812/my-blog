import type { Metadata } from 'next';
import '@/styles/globals.css';
import { GoogleAnalytics } from '@next/third-parties/google';
import HeaderNavigation from '@/components/common/HeaderNavigation';
import ThemeProvider from '@/components/common/ThemeProvider';
import Footer from '@/components/common/Footer';
import localFont from 'next/font/local';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL;

export const metadata: Metadata = {
  title: {
    template: '%s - 승현이의 개발 블로그',
    default: '승현이의 개발 블로그',
  },
  description: '웹 프론트엔드 개발과 관련한 포스트를 작성하고 있습니다.',
  openGraph: {
    type: 'website',
    locale: 'ko_KR',
    url: baseUrl,
    title: '승현이의 개발 블로그',
    siteName: '승현이의 개발 블로그',
    description: '웹 프론트엔드 개발과 관련한 포스트를 작성하고 있습니다.',
    images: [
      {
        url: `${baseUrl}/profile.png`,
        width: 1200,
        height: 630,
        alt: '승현이의 개발 블로그',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '승현이의 개발 블로그',
    description: '웹 프론트엔드 개발과 관련한 포스트를 작성하고 있습니다.',
    images: [`${baseUrl}/profile.png`],
  },
  verification: {
    google: 't29XaUESiJ2TKT7JtnuW1w9Pl0R1prya8W8xh6T6crc',
    other: {
      'naver-site-verification': '53a920b235d61ec40c1a14f9488d8c13ad72c659',
    },
  },
};

const pretendard = localFont({
  src: './PretendardVariable.woff2',
  display: 'swap',
  weight: '45 920',
  variable: '--font-pretendard',
});

const gaId = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
    >
      <body className={`${pretendard.className}`}>
        <ThemeProvider>
          <HeaderNavigation />
          <main className="mx-auto max-w-4xl lg:max-w-2xl px-6 lg:px-0">{children}</main>
          {gaId && <GoogleAnalytics gaId={gaId} />}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
