import { ReactNode } from 'react';
import Header from './Header';

interface LayoutProps {
  children: ReactNode;
  className?: string;
}

const Layout = ({ children, className = '' }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-gradient-hero">
      <Header />
      <main className={`pt-20 ${className}`}>
        {children}
      </main>
    </div>
  );
};

export default Layout;