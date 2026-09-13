import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';

export function Layout() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname]);

  return (
    <div className="flex flex-col min-h-screen bg-slate-950 font-sans text-slate-300 overflow-x-hidden selection:bg-indigo-500/30">
      <Header />
      <main className="flex-grow flex flex-col pt-[72px]">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
