import type { Metadata, Viewport } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import AppBar from './components/AppBar';
import { GoogleTagManager } from '@next/third-parties/google';
import Head from 'next/head';
import Script from 'next/script';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin']
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin']
});

export const metadata: Metadata = {
  title: 'Cricket Match & Toss Winning Possibilities by Experts',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-32x32.png',
    apple: '/apple-touch-icon.png'
  },
  description:
    'Get expert insights on cricket matches and toss winning possibilities. Explore team performance reviews, player form analysis, and match-winning chances with detailed forecasts and updates.',
  keywords:
    'cricket match forecasts, toss winning possibilities, cricket winning chances, IPL match analysis, today match preview, expert cricket opinions, team performance review, IPL strategy guide, cricket news updates, match forecast, fantasy cricket suggestions, IPL fan discussions, Indian team updates, T20 match possibilities, expert cricket analysis, live cricket coverage, cricket fan community, cricket score updates, match highlights, IPL team opinions, cricket chances and forecasts, accurate cricket analysis, cricket game discussions, today IPL match insights, team performance insights, toss analysis, cricket match probabilities, fantasy cricket strategies'
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#1f2937' },
    { media: '(prefers-color-scheme: dark)', color: '#1f2937' }
  ]
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <GoogleTagManager gtmId={process.env.GMT_ID!} />

        <Script id="meta-pixel" strategy="beforeInteractive">
          {`!function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1157619862731129');
            fbq('track', 'PageView');`}
        </Script>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=1157619862731129&ev=PageView&noscript=1"
          />
        </noscript>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen antialiased transition-colors duration-300`}
      >
        {/* App Bar */}
        <AppBar />

        {/* Main Content */}
        <main className="p-4 md:p-6 min-h-[calc(100vh-144px)]">{children}</main>

        {/* Footer */}
        <footer className="text-center p-6">
          <p>© 2025 Cricket Prediction. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}
