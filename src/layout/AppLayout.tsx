import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Header from './Header';

export type AppLayoutProps = {
  children: React.ReactNode;
};

const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [collapsed, setCollapsed] = useState(false);

  const handleToggleSidebar = () => {
    // Mobile: toggle drawer open/close
    // Desktop: toggle collapsed state
    if (window.innerWidth < 1024) {
      setSidebarOpen((prev) => !prev);
    } else {
      setCollapsed((prev) => !prev);
    }
  };

  return (
    <div className="h-screen flex overflow-hidden bg-gray-50">
      {/* Sidebar - slides in from left on mobile, collapses on desktop */}
      <Sidebar 
        isOpen={sidebarOpen} 
        collapsed={collapsed}
        onClose={() => setSidebarOpen(false)} 
      />

      {/* Overlay for mobile when sidebar is open */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-20 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Main content area */}
      <div className="flex-1 flex flex-col min-w-0">
        <Header onToggleSidebar={handleToggleSidebar} />

        <main className="flex-1 overflow-auto p-4 md:p-6">
          {children}
        </main>
      </div>
    </div>
  );
};

export default AppLayout;