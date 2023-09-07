import React from 'react';
import Header from '@/components/Header';
import { Outlet } from 'react-router-dom';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';

function Layout() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <div className="min-vh-100">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default Layout;
