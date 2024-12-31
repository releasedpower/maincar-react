import React from 'react';
import Sidebar from '../components/Sidebar';
import '../assets/styles/MainLayout.scss';
import Topbar from '../components/Topbar';
import Footer from '../components/Footer';

function MainLayout({ children }) {
  return (
    <div className="layout">
      <Sidebar />
      <main className="content">
        <Topbar />
        {children}
        <Footer />
      </main>
    </div>
  );
}

export default MainLayout;