import './globals.css';

import NavigationMenu from './components/NavigationMenu';

export const metadata = {
  title: '청첩장',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <NavigationMenu />
        <div>{children}</div>
      </body>
    </html>
  );
}
