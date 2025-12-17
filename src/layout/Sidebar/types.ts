// --- Data Structure Interfaces ---

export interface Page {
  page: string;
  route: string;
}

export interface SubModule {
  subModule: string;
  route: string;
  pages?: Page[];
}

export interface Module {
  module: string;
  icon: string;
  route: string;
  subModules?: SubModule[];
}

export interface SidebarConfig {
  sidebarMenu: Module[];
}

// --- Component Props Interfaces ---

export interface SidebarItemProps {
  name: string;
  Icon: React.ElementType; 
  active?: boolean;
  collapsed?: boolean;
  onClick?: () => void;
  hasChildren?: boolean;
  isExpanded?: boolean;
  onToggle?: () => void;
}

export interface SubModuleItemProps {
  subModule: SubModule;
  collapsed?: boolean;
  onNavigate?: (route: string) => void;
}

export interface SidebarProps {
  isOpen: boolean;
  collapsed: boolean;
  onClose: () => void;
}