import React from 'react';
import { MdMenu, MdNotifications, MdSettings, MdSearch } from 'react-icons/md';

type HeaderProps = {
  onToggleSidebar: () => void;
};

const Header: React.FC<HeaderProps> = ({ onToggleSidebar }) => {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-10">
      <div className="flex items-center justify-between px-4 py-3 md:px-6">
        {/* Left side - Menu button and search */}
        <div className="flex items-center gap-4 flex-1">
          {/* Hamburger menu button */}
          <button
            onClick={onToggleSidebar}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Toggle sidebar"
          >
            <MdMenu className="w-6 h-6 text-gray-700" />
          </button>

          {/* Desktop menu button */}
          <button
            onClick={onToggleSidebar}
            className="hidden lg:block p-2 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Toggle sidebar"
          >
            <MdMenu className="w-6 h-6 text-gray-700" />
          </button>

          {/* Search bar */}
          <div className="hidden md:flex items-center flex-1 max-w-md">
            <div className="relative w-full">
              <MdSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>
        </div>

        {/* Right side - Actions */}
        <div className="flex items-center gap-2 md:gap-4">
          {/* Mobile search button */}
          <button className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors">
            <MdSearch className="w-6 h-6 text-gray-600" />
          </button>

          {/* Notifications */}
          <button className="relative p-2 rounded-lg hover:bg-gray-100 transition-colors">
            <MdNotifications className="w-6 h-6 text-gray-600" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>

          {/* Settings */}
          <button className="p-2 rounded-lg hover:bg-gray-100 transition-colors">
            <MdSettings className="w-6 h-6 text-gray-600" />
          </button>

          {/* User avatar */}
          <button className="hidden md:flex items-center gap-2 p-2 rounded-lg hover:bg-gray-100 transition-colors">
            <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
              <span className="text-white font-semibold text-sm">A</span>
            </div>
            <span className="text-sm font-medium text-gray-700">Admin</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;