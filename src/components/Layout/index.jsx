import React from 'react';
import Header from '@/components/Header';
import { Outlet } from 'react-router-dom';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import FacebookChat from '@/components/FacebookChat';

function Layout() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <div className="min-vh-100">
        <Outlet />
      </div>
      <FacebookChat />
      <Footer />
    </>
  );
}

export default Layout;
