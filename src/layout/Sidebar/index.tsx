import sidebarMenu, { type SidebarMenu } from '@/config/sidebar';
import { useAuth } from '@/context/AuthContext';
import { Logo } from '@/ui/shared';
import React, { useEffect, useState } from 'react';
import { FaHome } from 'react-icons/fa';
import { MdClose } from 'react-icons/md';
import { useLocation, useNavigate } from 'react-router-dom';
import { getIcon } from '../../utils/iconMapper';
import SidebarItem from './components/SidebarItems';
import SubModuleItem from './components/SubModuleItems';
import type { Module, SidebarProps } from './types';

const Sidebar: React.FC<SidebarProps> = ({ isOpen, collapsed, onClose }) => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [sidebarModules, setSidebarModules] = useState<Module[]>([]);
  const [expandedModules, setExpandedModules] = useState<Set<string>>(new Set());
  const [clickedModule, setClickedModule] = useState<string | null>(null);

  useEffect(() => {

    const modules: Module[] = (sidebarMenu as SidebarMenu).sidebar || [];
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
          ${collapsed ? 'lg:w-20' : 'lg:w-80'}
          w-80
        `}
      >
        {/* Header with logo and close button */}
        <div className={`
          flex items-center p-6 transition-all duration-300
          ${collapsed ? 'lg:justify-center lg:px-0' : 'justify-between'}
        `}>
          <div className={`flex items-center gap-3 ${collapsed ? 'lg:flex-col lg:gap-2' : ''}`}>
            <Logo
              size="md"
              variant="light"
              showText={!collapsed}
              text="DAVV ERP SYSTEM"
              textClassName={`${collapsed ? 'lg:opacity-0 lg:w-0 lg:overflow-hidden lg:hidden' : 'opacity-100'}`}
            />
          </div>

          {/* Close button - only visible on mobile */}
          <button
            onClick={onClose}
            className="lg:hidden text-gray-400 hover:text-white transition-colors cursor-pointer"
          >
            <MdClose className="w-6 h-6" />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 py-6 overflow-y-auto overflow-x-hidden scrollbar-hide px-0 ">
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
          <div
            className="p-6 border-t border-slate-700/50 cursor-pointer hover:bg-slate-800/50 transition-colors"
            onClick={() => handleNavigate('/profile')}
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-slate-700 rounded-full flex items-center justify-center shrink-0">
                <span className="text-white font-semibold text-sm">A</span>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-white font-medium text-sm truncate">{user?.name}</p>
                <p className="text-gray-400 text-xs truncate">{user?.email}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Sidebar;
