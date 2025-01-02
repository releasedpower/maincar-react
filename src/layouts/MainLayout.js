import React, { useState } from 'react';
import '../assets/styles/MainLayout.scss';
import Topbar from '../components/Topbar';
import Footer from '../components/Footer';
import Sidebar from '../components/Sidebar';

function MainLayout({ children }) {
  const [isSidebarActive, setIsSidebarActive] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarActive((prevState) => !prevState);
  };

  return (
    <div className="layout">
      <Sidebar isActive={isSidebarActive}/>
      <main className="content">
        <Topbar toggleSidebar={toggleSidebar} />
        {children}
        <Footer />
      </main>
    </div>
  );
}

export default MainLayout;