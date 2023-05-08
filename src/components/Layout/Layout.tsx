import { ReactNode } from 'react';
import { Footer } from './Footer';

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="container flex- flex-column justify-around mx-auto">
      <main>{children}</main>
      <Footer />
    </div>
  );
};
