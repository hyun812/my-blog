import type { Metadata } from 'next';
import '@/styles/globals.css';
import { GoogleAnalytics } from '@next/third-parties/google';
import HeaderNavigation from '@/components/common/HeaderNavigation';
import ThemeProvider from '@/components/common/ThemeProvider';
import Footer from '@/components/common/Footer';
import localFont from 'next/font/local';
import { siteConfig } from '@/constants/site';

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    images: [`${siteConfig.url}/image/profile.png`],
    locale: 'ko_KR',
    type: 'website',
  },
  alternates: {
    canonical: siteConfig.url,
    types: {
      'application/rss+xml': `${siteConfig.url}/feed.xml`,
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  twitter: {
    title: siteConfig.name,
    description: siteConfig.description,
    card: 'summary_large_image',
    images: [`${siteConfig.url}/image/profile.png`],
  },
  verification: {
    google: 't29XaUESiJ2TKT7JtnuW1w9Pl0R1prya8W8xh6T6crc',
    other: {
      'naver-site-verification': '53a920b235d61ec40c1a14f9488d8c13ad72c659',
    },
  },
};

const pretendard = localFont({
  src: '../assets/fonts/PretendardVariable.woff2',
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
      <link
        rel="alternate"
        type="application/rss+xml"
        href="/feed.xml"
        title="RSS Feed"
      />
      <link
        rel="alternate"
        type="application/atom+xml"
        href="/atom.xml"
        title="Atom Feed"
      />
      <link
        rel="alternate"
        type="application/json"
        href="/feed.json"
        title="JSON Feed"
      />

      <body className={`${pretendard.className}`}>
        <ThemeProvider>
          <HeaderNavigation />
          <main className="mx-auto max-w-4xl lg:max-w-2xl px-6 lg:px-0">{children}</main>
          <Footer />
        </ThemeProvider>
        {gaId && <GoogleAnalytics gaId={gaId} />}
      </body>
    </html>
  );
}
