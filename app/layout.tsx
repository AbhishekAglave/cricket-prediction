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
  description: 'Cricket Prediction By Expert'
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
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased transition-colors duration-300`}>
        {/* App Bar */}
        <AppBar />

        {/* Main Content */}
        <main className="p-4 md:p-6">{children}</main>

        {/* Footer */}
        <footer className="text-center p-6 mt-8">
          <p>© 2025 Cricket Prediction. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}
