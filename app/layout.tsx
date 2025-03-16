import type { Metadata, Viewport } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import AppBar from './components/AppBar';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin']
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin']
});

export const metadata: Metadata = {
  title: 'Cricket Prediction By Expert',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-32x32.png',
    apple: '/apple-touch-icon.png'
  },
  description: "Expert insights for match predictions and betting strategies. Get today's match predictions on the go.",

  keywords:
    'cricket prediction, cricket guessing, IPL match prediction, today match prediction, expert cricket tips, cricket betting tips, IPL betting strategy, cricket analysis, match winner prediction, cricket toss prediction, live cricket updates, fantasy cricket tips, IPL fantasy prediction, Indian team prediction, T20 prediction, cricket expert advice, dream11 team prediction, cricket score prediction, cricket match analysis, cricket astrology prediction, IPL expert opinion, free cricket prediction tips, accurate cricket guessing tips, IPL cricket guessing guru, today IPL match prediction, who will win today match, free toss prediction today, 100% sure cricket prediction, best cricket betting tips, free fantasy cricket team'
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
