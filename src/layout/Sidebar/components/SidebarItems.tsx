import React from 'react';
import { MdChevronRight, MdExpandLess } from 'react-icons/md';
import type { SidebarItemProps } from '../types';

const SidebarItem: React.FC<SidebarItemProps> = ({
  name,
  Icon,
  active = false,
  collapsed = false,
  onClick,
  hasChildren = false,
  isExpanded = false,
  onToggle,
}) => {
  const handleClick = (e: React.MouseEvent) => {
    if (hasChildren && !collapsed && onToggle) {
      e.stopPropagation();
      onToggle();
    } else if (onClick) {
      onClick();
    }
  };

  return (
    <button
      onClick={handleClick}
      title={collapsed ? name : undefined}
      className={`
        relative group mb-2 transition-all duration-300
        ${collapsed
          ? 'w-12 h-12 mx-auto rounded-full flex items-center justify-center'
          : 'w-[90%] mx-auto py-4 px-6 rounded-full flex items-center'
        }
        ${active
          ? 'bg-gradient-to-r from-[#1c1f3b] to-[#8b5cf6] text-white shadow-lg shadow-purple-900/20'
          : 'text-gray-400 hover:text-white hover:bg-slate-700/30'
        }
      `}
    >
      {/* Left content */}
      <div
        className={`flex items-center min-w-0 ${collapsed ? 'justify-center' : 'flex-1'
          }`}
      >
        {/* Icon */}
        <div className="flex items-center justify-center w-5 h-5">
          <Icon className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
        </div>

        {/* Text */}
        {!collapsed && (
          <span
            className={`ml-4 font-medium text-base tracking-wide truncate transition-colors duration-300 ${active ? 'text-white' : ''
              }`}
          >
            {name}
          </span>
        )}
      </div>

      {/* Chevron */}
      {hasChildren && !collapsed && (
        <div className="ml-2 flex-shrink-0">
          {isExpanded ? (
            <MdExpandLess className="w-5 h-5" />
          ) : (
            <MdChevronRight className="w-5 h-5" />
          )}
        </div>
      )}

      {/* Tooltip */}
      {collapsed && (
        <div className="absolute left-full ml-4 px-3 py-2 bg-[#1c1f3b] text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity whitespace-nowrap z-50 shadow-xl border border-purple-500/20">
          {name}
        </div>
      )}
    </button>
  );
};

export default SidebarItem;
