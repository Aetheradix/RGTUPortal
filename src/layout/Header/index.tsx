import { useAuth } from '@/context/AuthContext';
import { Logo } from '@/ui/shared';
import { Bell, LogOut, Menu, Settings } from 'lucide-react';
import React, { Suspense, useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SearchBar = React.lazy(() => import('./SearchBar'));

type HeaderProps = {
  onToggleSidebar: () => void;
};

const Header: React.FC<HeaderProps> = ({ onToggleSidebar }) => {
  const { logout, user } = useAuth();
  const navigate = useNavigate();

  const [showDropdown, setShowDropdown] = useState(false);


  const handleLogout = useCallback(() => {
    logout();
    navigate('/login');
  }, [logout, navigate]);

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-40">
      <div className="flex items-center justify-between h-16 px-4 gap-4">
        <div className="flex items-center gap-4 flex-1">
          <button onClick={onToggleSidebar} className="p-2 rounded-lg hover:bg-gray-100">
            <Menu className="w-6 h-6 text-gray-600" />
          </button>

          <div className="flex items-center gap-2 lg:hidden">
            <Logo size="sm" showText={false} variant="light" className="bg-transparent" />
            <span className="font-bold text-gray-800 text-sm">DAVV ERP</span>
          </div>

          <Suspense fallback={<div className="flex-1 max-w-2xl h-10 bg-gray-100 animate-pulse rounded-lg" />}>
            <SearchBar />
          </Suspense>
        </div>

        <div className="flex items-center gap-2">
          <button className="p-2 rounded-lg hover:bg-gray-100 relative lg:flex hidden">
            <Bell className="w-6 h-6 text-gray-600" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>
          <button className="p-2 rounded-lg hover:bg-gray-100 lg:flex hidden">
            <Settings className="w-6 h-6 text-gray-600" />
          </button>

          <div className="relative cursor-pointer">
            <button onClick={() => setShowDropdown(!showDropdown)} className="flex cursor-pointer items-center gap-2 p-2 rounded-lg hover:bg-gray-100">
              <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold">
                {user?.email?.charAt(0).toUpperCase() || 'A'}
              </div>
              <span className="hidden md:block text-sm font-medium text-gray-700">
                {user?.email?.split('@')[0] || 'Admin'}
              </span>
            </button>

            {showDropdown && (
              <>
                <div className="fixed inset-0 z-40" onClick={() => setShowDropdown(false)} />
                <div className="absolute right-0 mt-2 w-48 bg-white border rounded-lg shadow-lg py-1 z-50">
                  <div className="px-4 py-2 border-b">
                    <p className="text-sm font-medium">{user?.email || 'Admin'}</p>
                  </div>
                  <button onClick={handleLogout} className="w-full px-4 py-2 text-left text-sm hover:bg-gray-100 flex items-center gap-2">
                    <LogOut className="w-4 h-4" />
                    Logout
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
