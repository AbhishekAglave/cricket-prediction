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
  description: 'Cricket Prediction By Expert',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-32x32.png',
    apple: '/apple-touch-icon.png'
  }
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
