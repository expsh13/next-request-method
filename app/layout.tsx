import { ReactNode } from 'react';

export const metadata = {
  title: 'Next.js Request Method Test',
  description: 'Testing request methods in Next.js API routes with TypeScript',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
