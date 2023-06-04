import './globals.css';

import GlobalNavigation from '../components/GlobalNavigation';
import Footer from '../components/Footer';
import '../styles/init.scss';

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
        <div>{children}</div>
        <Footer />
      </body>
    </html>
  );
}
