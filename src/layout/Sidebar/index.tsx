import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { MdClose } from 'react-icons/md';
import { FaHome } from 'react-icons/fa';
import { getIcon } from '../../utils/iconMapper'; 
import type { Module, SidebarProps } from './types';
import SidebarItem from './components/SidebarItems';
import SubModuleItem from './components/SubModuleItems';
import sidebarMenu from '@/config/sidebar';
; 

const Sidebar: React.FC<SidebarProps> = ({ isOpen, collapsed, onClose }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [sidebarModules, setSidebarModules] = useState<Module[]>([]);
  const [expandedModules, setExpandedModules] = useState<Set<string>>(new Set());
  const [clickedModule, setClickedModule] = useState<string | null>(null);

  useEffect(() => {
   
    const modules: Module[] = (sidebarMenu as any)?.sidebar || [];
    setSidebarModules(modules);

    const currentPath = location.pathname;
    const modulesToExpand = new Set<string>();

    modules.forEach((module) => {
      if (
        currentPath === module.route ||
        (module.subModules && module.subModules.some(subModule => {
          const isSubModuleRoute = currentPath === subModule.route || currentPath.startsWith(subModule.route + '/');
          const isPageRoute = subModule.pages?.some(page => currentPath === page.route);
          return isSubModuleRoute || isPageRoute;
        }))
      ) {
        modulesToExpand.add(module.module);
      }
    });

    if (modulesToExpand.size > 0) {
      setExpandedModules(modulesToExpand);
      
      const firstExpanded = Array.from(modulesToExpand)[0];
      if (firstExpanded && clickedModule === null) {
        setClickedModule(firstExpanded);
      } else if (firstExpanded) {
       
        setClickedModule(firstExpanded);
      }
    } else {
      setClickedModule(null);
    }
  }, [location.pathname]);

  
  const toggleModule = (moduleName: string) => {
    
    setClickedModule(moduleName);
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
   
    setClickedModule(null);
  
    if (window.innerWidth < 1024) {
      onClose();
    }
  };


  const isModuleActive = (module: Module): boolean => {
    
    if (clickedModule !== null) {
      return clickedModule === module.module;
    }
    
    
    const currentPath = location.pathname;
    
    
    if (currentPath === module.route) return true;

   
    if (module.subModules) {
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
              {/* Logo SVG */}
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
            const IconFromString = typeof module.icon === 'string' ? getIcon(module.icon) : null;
            const Icon = (typeof module.icon === 'string' ? IconFromString : module.icon) || FaHome;
            const hasSubModules = module.subModules && module.subModules.length > 0;
            const isExpanded = expandedModules.has(module.module);

            return (
              <div key={module.module} className="mb-2">
                <SidebarItem
                  name={module.module}
                  Icon={Icon}
                  active={isModuleActive(module)}
                  collapsed={collapsed}
                  hasChildren={hasSubModules}
                  isExpanded={isExpanded}
                  onToggle={() => toggleModule(module.module)}
                  onClick={() => {
                   
                    setClickedModule(module.module);
                    
                    if (!hasSubModules || collapsed) {
                      handleNavigate(module.route);
                    }
                  }}
                />

                {/* SubModules - only show when expanded and not collapsed */}
                {hasSubModules && !collapsed && (
                  <div
                    className={`overflow-hidden transition-all duration-300 ${isExpanded ? 'max-h-500 opacity-100' : 'max-h-0 opacity-0'
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