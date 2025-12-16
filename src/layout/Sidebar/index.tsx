import React from 'react';
import {
  MdAssignment,
  MdAttachMoney,
  MdBook,
  MdClose,
  MdDashboard,
  MdDirectionsBus,
  MdLocalLibrary,
  MdPeople,
  MdSchool,
} from 'react-icons/md';

const navItems = [
  { name: 'Dashboard', icon: MdDashboard, active: false },
  { name: 'Students', icon: MdPeople, active: true },
  { name: 'Faculty', icon: MdSchool, active: false },
  { name: 'Courses', icon: MdBook, active: false },
  { name: 'Examinations', icon: MdAssignment, active: false },
  { name: 'Finance', icon: MdAttachMoney, active: false },
  { name: 'Library', icon: MdLocalLibrary, active: false },
  { name: 'Transport', icon: MdDirectionsBus, active: false },
];



interface SidebarItemProps {
  name: string;
  Icon: React.ElementType; // Or the specific icon type you are using
  active?: boolean;
  collapsed?: boolean;
  onClick?: () => void;
}

const SidebarItem: React.FC<SidebarItemProps> = ({ name, Icon, active, collapsed, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`
        relative flex items-center transition-all duration-300 group mb-2
        ${collapsed ? 'justify-center w-12 h-12 mx-auto rounded-full' : 'w-[90%] mx-auto py-4 px-6 rounded-full'}
        ${
          active
            ? 'bg-gradient-to-r from-[#1c1f3b] to-[#8b5cf6] text-white shadow-lg shadow-purple-900/20'
            : 'text-gray-400 hover:text-white hover:bg-slate-700/30 rounded-full'
        }
      `}
      title={collapsed ? name : undefined}
    >
      {/* Icon Wrapper: Handles the circular border when active */}
      <div 
        className={`
          flex items-center justify-center rounded-full transition-all duration-300
          ${active ? ' w-8 h-8 p-1' : 'w-5 h-5 border-0 p-0'}
        `}
      >
        <Icon 
          className={`
            transition-all duration-300
            ${active ? 'w-6 h-6' : collapsed  && 'w-5 h-5'}
          `} 
        />
      </div>

      {/* Text Label */}
      <span 
        className={`
          font-medium whitespace-nowrap transition-all duration-300 overflow-hidden text-lg tracking-wide
          ${collapsed ? 'w-0 opacity-0 ml-0' : 'w-auto opacity-100 ml-4'}
          ${active ? 'text-white' : ''}
        `}
      >
        {name}
      </span>

      {/* Tooltip for collapsed state */}
      {collapsed && (
        <div className="absolute left-full ml-4 px-3 py-2 bg-[#1c1f3b] text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity whitespace-nowrap z-50 shadow-xl border border-purple-500/20">
          {name}
        </div>
      )}
    </button>
  );
};



type SidebarProps = {
  isOpen: boolean;
  collapsed: boolean;
  onClose: () => void;
};

const Sidebar: React.FC<SidebarProps> = ({ isOpen, collapsed, onClose }) => {
  return (
    <>
      {/* Sidebar drawer */}
      <div
        className={`
          fixed lg:static top-0 left-0 h-full bg-sidebar-bg z-30
          transform transition-all duration-300 ease-in-out
          flex flex-col
          ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
          ${collapsed ? 'lg:w-20' : 'lg:w-72'}
          w-72
        `}
      >
        {/* Header with logo and close button */}
        <div className={`
          flex items-center p-6 transition-all duration-300
          ${collapsed ? 'lg:justify-center lg:px-0' : 'justify-between'}
        `}>
          <div className={`flex items-center gap-3 ${collapsed ? 'lg:flex-col lg:gap-2' : ''}`}>
            <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shrink-0">
              <svg className="w-6 h-6 text-slate-800" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z" />
              </svg>
            </div>
            <h1
              className={`
                text-xl font-bold text-white transition-all duration-300
                ${collapsed ? 'lg:opacity-0 lg:w-0 lg:overflow-hidden lg:hidden' : 'opacity-100'}
              `}
            >
              NexusEdu
            </h1>
          </div>

          {/* Close button - only visible on mobile */}
          <button
            onClick={onClose}
            className="lg:hidden text-gray-400 hover:text-white transition-colors"
          >
            <MdClose className="w-6 h-6" />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 py-6 overflow-y-auto overflow-x-hidden scrollbar-hide px-0">
          {navItems.map((item) => (
            <SidebarItem
              key={item.name}
              name={item.name}
              Icon={item.icon}
              active={item.active}
              collapsed={collapsed}
              onClick={() => {

                if (window.innerWidth < 1024) {
                  onClose();
                }
              }}
            />
          ))}
        </nav>

        {/* Footer - hidden when collapsed */}
        {!collapsed && (
          <div className="p-6 border-t border-slate-700/50">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-slate-700 rounded-full flex items-center justify-center shrink-0">
                <span className="text-white font-semibold text-sm">A</span>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-white font-medium text-sm truncate">Admin User</p>
                <p className="text-gray-400 text-xs truncate">admin@nexusedu.com</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Sidebar;