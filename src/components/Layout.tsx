
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { Toaster } from '@/components/ui/sonner';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Toaster position="top-right" />
      <Header />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
