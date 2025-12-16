import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { MdClose, MdChevronRight, MdExpandLess } from 'react-icons/md';
import { getIcon } from '../../utils/iconMapper';

interface Page {
  page: string;
  route: string;
}

interface SubModule {
  subModule: string;
  route: string;
  pages?: Page[];
}

interface Module {
  module: string;
  icon: string;
  route: string;
  subModules?: SubModule[];
}

interface SidebarConfig {
  sidebarMenu: Module[];
}



interface SidebarItemProps {
  name: string;
  Icon: React.ElementType; 
  active?: boolean;
  collapsed?: boolean;
  onClick?: () => void;
  hasChildren?: boolean;
  isExpanded?: boolean;
  onToggle?: () => void;
}

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
    } else if (onClick) {
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
      {/* Icon Wrapper: Handles the circular border when active */}
      <div 
        className={`
          flex items-center justify-center rounded-full transition-all duration-300
          ${active ? 'w-8 h-8 bg-white/20 backdrop-blur-sm' : 'w-5 h-5'}
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

interface SubModuleItemProps {
  subModule: SubModule;
  collapsed?: boolean;
  onNavigate?: (route: string) => void;
}

const SubModuleItem: React.FC<SubModuleItemProps> = ({ subModule, collapsed, onNavigate }) => {
  const location = useLocation();
  const [isExpanded, setIsExpanded] = useState(false);

  // Auto-expand if current route matches this submodule or its pages
  useEffect(() => {
    if (subModule.pages) {
      const shouldExpand = subModule.pages.some(page => location.pathname === page.route);
      setIsExpanded(shouldExpand);
    } else {
      const shouldExpand = location.pathname === subModule.route || location.pathname.startsWith(subModule.route + '/');
      setIsExpanded(shouldExpand);
    }
  }, [location.pathname, subModule.route, subModule.pages]);

  if (collapsed) return null;

  const handleClick = () => {
    if (subModule.pages && subModule.pages.length > 0) {
      setIsExpanded(!isExpanded);
    } else if (onNavigate) {
      onNavigate(subModule.route);
    }
  };

  const hasPages = subModule.pages && subModule.pages.length > 0;
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
      
      {/* Pages list with animation */}
      {hasPages && (
        <div 
          className={`overflow-hidden transition-all duration-300 ${
            isExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="ml-4 space-y-1 pt-1">
            {subModule.pages.map((page) => {
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
        </div>
      )}
    </div>
  );
};



type SidebarProps = {
  isOpen: boolean;
  collapsed: boolean;
  onClose: () => void;
};

const Sidebar: React.FC<SidebarProps> = ({ isOpen, collapsed, onClose }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [sidebarModules, setSidebarModules] = useState<Module[]>([]);
  const [expandedModules, setExpandedModules] = useState<Set<string>>(new Set());

  useEffect(() => {
    // Load sidebar configuration from config file
    const loadSidebarConfig = async () => {
      try {
        const response = await fetch('/config/modules.json');
        const data: SidebarConfig = await response.json();
        setSidebarModules(data.sidebarMenu || []);
        
        // Auto-expand modules that contain the current route
        const currentPath = location.pathname;
        const modulesToExpand = new Set<string>();
        
        data.sidebarMenu.forEach((module) => {
          if (currentPath.startsWith(module.route)) {
            modulesToExpand.add(module.module);
          }
        });
        
        if (modulesToExpand.size > 0) {
          setExpandedModules(modulesToExpand);
        }
      } catch (error) {
        console.error('Failed to load sidebar config:', error);
        setSidebarModules([]);
      }
    };

    loadSidebarConfig();
  }, [location.pathname]);

  const toggleModule = (moduleName: string) => {
    setExpandedModules((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(moduleName)) {
        newSet.delete(moduleName);
      } else {
        newSet.add(moduleName);
      }
      return newSet;
    });
  };

  const handleNavigate = (route: string) => {
    navigate(route);
    if (window.innerWidth < 1024) {
      onClose();
    }
  };
  
  // Check if a route is active (exact match or is a parent of current route)
  const isRouteActive = (route: string): boolean => {
    const currentPath = location.pathname;
    // Exact match
    if (currentPath === route) return true;
    // Is parent route (current path starts with route + '/')
    if (currentPath.startsWith(route + '/')) return true;
    return false;
  };

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
          {sidebarModules.map((module) => {
            const Icon = getIcon(module.icon);
            const hasSubModules = module.subModules && module.subModules.length > 0;
            const isExpanded = expandedModules.has(module.module);
            
            // Check if module is active - either exact match or any child route matches
            const isModuleActive = (() => {
              const currentPath = location.pathname;
              // Exact match
              if (currentPath === module.route) return true;
              // Check if any submodule or page under this module is active
              if (hasSubModules && module.subModules) {
                return module.subModules.some(subModule => {
                  if (currentPath === subModule.route) return true;
                  if (currentPath.startsWith(subModule.route + '/')) return true;
                  if (subModule.pages) {
                    return subModule.pages.some(page => currentPath === page.route);
                  }
                  return false;
                });
              }
              return false;
            })();
            
            return (
              <div key={module.module} className="mb-2">
                <SidebarItem
                  name={module.module}
                  Icon={Icon}
                  active={isModuleActive}
                  collapsed={collapsed}
                  hasChildren={hasSubModules}
                  isExpanded={isExpanded}
                  onToggle={() => toggleModule(module.module)}
                  onClick={() => {
                    if (!hasSubModules) {
                      handleNavigate(module.route);
                    }
                  }}
                />
                
                {/* SubModules - only show when expanded and not collapsed */}
                {hasSubModules && !collapsed && (
                  <div 
                    className={`overflow-hidden transition-all duration-300 ${
                      isExpanded ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="mt-1 space-y-1">
                      {module.subModules!.map((subModule) => (
                        <SubModuleItem
                          key={subModule.route}
                          subModule={subModule}
                          collapsed={collapsed}
                          onNavigate={handleNavigate}
                        />
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
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