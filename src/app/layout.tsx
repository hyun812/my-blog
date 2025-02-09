import type { Metadata } from 'next';
import '@/styles/globals.css';
import { GoogleAnalytics } from '@next/third-parties/google';
import HeaderNavigation from '@/components/common/HeaderNavigation';
import ThemeProvider from '@/components/common/ThemeProvider';
import Footer from '@/components/common/Footer';
import localFont from 'next/font/local';
import { siteConfig } from '@/constants/site';

export const metadata: Metadata = {
  title: {
    template: `%s - ${siteConfig.name}`,
    default: `${siteConfig.name}`,
  },
  description: `${siteConfig.description}`,
  openGraph: {
    type: 'website',
    locale: 'ko_KR',
    url: siteConfig.url,
    title: `${siteConfig.name}`,
    siteName: `${siteConfig.name}`,
    description: `${siteConfig.description}`,
    images: [
      {
        url: `${siteConfig.url}/profile.png`,
        width: 1200,
        height: 630,
        alt: `${siteConfig.name}`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${siteConfig.name}`,
    description: `${siteConfig.description}`,
    images: [`${siteConfig.url}/profile.png`],
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
