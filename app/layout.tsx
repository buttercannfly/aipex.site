import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'AIPex - Best Tabs Extension for Google Chrome',
  description: 'AIPex: Manage tabs, history, and bookmarks with AI-powered features. The ultimate productivity booster for Google Chrome.',
  keywords: 'AIPex, Chrome extension, tab management, productivity, AI, ChatGPT',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}