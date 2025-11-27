import type {Metadata} from 'next';
import './globals.css';
import { MetaPixel } from '@/components/meta-pixel';

export const metadata: Metadata = {
  title: 'ElectroFix Landing',
  description: 'Aprenda a consertar eletrodomésticos',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased">
        <MetaPixel />
        {children}
      </body>
    </html>
  );
}
