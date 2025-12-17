import React from 'react';
import { MdChevronRight, MdExpandLess } from 'react-icons/md';
import type { SidebarItemProps } from '../types';


const SidebarItem: React.FC<SidebarItemProps> = ({ 
  name, 
  Icon, 
  active, 
  collapsed, 
  onClick,
  hasChildren,
  isExpanded,
  onToggle
}) => {
  const handleClick = (e: React.MouseEvent) => {
    
    if (hasChildren && !collapsed && onToggle) {
      e.stopPropagation();
      onToggle();
    } 
    
    else if (onClick) {
      onClick();
    }
  };

  return (
    <button
      onClick={handleClick}
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
      {/* Icon Wrapper */}
      <div 
        className={`

        `}
      >
        <Icon 
          className={`
            transition-all duration-300 text-current
            ${active ? 'w-5 h-5' : collapsed ? 'w-5 h-5' : 'w-5 h-5'}
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

      {/* Chevron Icon for expandable items */}
      {hasChildren && !collapsed && (
        <div className="ml-auto">
          {isExpanded ? (
            <MdExpandLess className="w-5 h-5 text-gray-400" />
          ) : (
            <MdChevronRight className="w-5 h-5 text-gray-400" />
          )}
        </div>
      )}

      {/* Tooltip for collapsed state */}
      {collapsed && (
        <div className="absolute left-full ml-4 px-3 py-2 bg-[#1c1f3b] text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity whitespace-nowrap z-50 shadow-xl border border-purple-500/20">
          {name}
        </div>
      )}
    </button>
  );
};

export default SidebarItem;