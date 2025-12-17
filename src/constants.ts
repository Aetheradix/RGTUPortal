
export interface ParentMenu {
  id: number;
  menuName: string;
  menuCode: string;
  description: string;
  order: number;
  status: 'Active' | 'Inactive';
}

export const DUMMY_PARENT_MENUS: ParentMenu[] = [
  {
    id: 1,
    menuName: 'Dashboard',
    menuCode: 'DASH',
    description: 'Main dashboard overview with KPIs',
    order: 1,
    status: 'Active',
  },
  {
    id: 2,
    menuName: 'Masters',
    menuCode: 'MAST',
    description: 'Master data configuration and setup',
    order: 2,
    status: 'Active',
  },
  {
    id: 3,
    menuName: 'Reports',
    menuCode: 'REPT',
    description: 'All standard and custom reports',
    order: 3,
    status: 'Active',
  },
  {
    id: 4,
    menuName: 'User Management',
    menuCode: 'USER',
    description: 'Roles, users, and permissions',
    order: 4,
    status: 'Active',
  },
  {
    id: 5,
    menuName: 'Finance',
    menuCode: 'FIN',
    description: 'Finance and accounting modules',
    order: 5,
    status: 'Inactive',
  },
];
