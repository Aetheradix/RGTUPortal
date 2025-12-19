import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { MdChevronRight } from 'react-icons/md';
import type { SubModuleItemProps } from '../types';


const SubModuleItem: React.FC<SubModuleItemProps> = ({ subModule, collapsed, onNavigate }) => {
  const location = useLocation();
  const [isExpanded, setIsExpanded] = useState(false);

  // Auto-expand if current route matches this submodule or its pages
  useEffect(() => {
    const currentPath = location.pathname;
    let shouldExpand = false;
    
    if (subModule.pages) {
      shouldExpand = subModule.pages.some(page => currentPath === page.route);
    } 
    
    // Check if the current route is the submodule route itself or starts with it
    if (!shouldExpand) {
      shouldExpand = currentPath === subModule.route || currentPath.startsWith(subModule.route + '/');
    }
    
    setIsExpanded(shouldExpand);
  }, [location.pathname, subModule.route, subModule.pages]);

  if (collapsed) return null; // Should be handled by parent, but good for safety

  const hasPages = subModule.pages && subModule.pages.length > 0;

  const handleClick = () => {
    if (hasPages) {
      setIsExpanded(!isExpanded);
    } else if (onNavigate) {
      onNavigate(subModule.route);
    }
  };

  const isSubModuleActive = (() => {
    const currentPath = location.pathname;
    // Exact match with submodule route
    if (currentPath === subModule.route) return true;
    // Check if any page under this submodule is active
    if (hasPages && subModule.pages) {
      return subModule.pages.some(page => currentPath === page.route);
    }
    return false;
  })();

  return (
    <div className="ml-4 mb-1">
      <button
        onClick={handleClick}
        className={`w-full text-left py-2 px-4 rounded-lg transition-all duration-200 flex items-center justify-between group ${
          isSubModuleActive 
            ? 'text-white bg-slate-700/50' 
            : 'text-gray-400 hover:text-white hover:bg-slate-700/30'
        }`}
      >
        <span className="text-sm font-medium">{subModule.subModule}</span>
        {hasPages && (
          <MdChevronRight 
            className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${isExpanded ? 'rotate-90' : ''}`}
          />
        )}
      </button>
      
      {/* Pages list */}
      {hasPages && isExpanded && (
        <div className="ml-4 space-y-1 pt-1">
          {subModule.pages!.map((page) => {
            const isPageActive = location.pathname === page.route;
            return (
              <button
                key={page.route}
                onClick={() => onNavigate && onNavigate(page.route)}
                className={`w-full text-left py-1.5 px-4 rounded-lg transition-all duration-200 text-xs ${
                  isPageActive
                    ? 'text-white bg-slate-700/40'
                    : 'text-gray-500 hover:text-white hover:bg-slate-700/20'
                }`}
              >
                {page.page}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default SubModuleItem;