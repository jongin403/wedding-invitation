import './globals.css';

import NavigationMenu from '../components/NavigationMenu';
import GlobalNavigation from '../components/GlobalNavigation';
import '../styles/reset.css';

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
        <GlobalNavigation />
        <NavigationMenu />
        <div>{children}</div>
      </body>
    </html>
  );
}
