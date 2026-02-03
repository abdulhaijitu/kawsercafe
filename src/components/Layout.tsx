import Header from './Header';
import Footer from './Footer';
import PageTransition from './PageTransition';
import MobileBottomNav from './MobileBottomNav';
import FloatingButtons from './FloatingButtons';
import { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pb-16 md:pb-0">
        <PageTransition>
          {children}
        </PageTransition>
      </main>
      <Footer />
      <MobileBottomNav />
      <FloatingButtons />
    </div>
  );
};

export default Layout;
