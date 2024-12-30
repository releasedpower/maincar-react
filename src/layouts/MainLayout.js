import React from 'react';
import Sidebar from '../components/Sidebar';
import '../assets/styles/MainLayout.css';
import Topbar from '../components/Topbar';

function MainLayout({ children }) {
  return (
    <div className="layout">
      <Sidebar />
      <main className="content">
        <Topbar />
        {children}
      </main>
    </div>
  );
}

export default MainLayout;