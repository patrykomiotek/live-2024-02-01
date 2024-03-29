import { inter } from '../components/fonts';

import '../components/global.css';

export const metadata = {
  title: 'Welcome to jobboard',
  description: 'Generated by create-nx-workspace',
};

type Props = { children: React.ReactNode };

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en" className="h-full">
      <body className={`${inter.className} h-full`}>{children}</body>
    </html>
  );
}
