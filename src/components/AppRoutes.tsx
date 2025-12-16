import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import GenericPage from '../pages/GenericPage';

// User Management Pages
import CreateUserLevel from '../pages/user-management/CreateUserLevel';
import ModuleMapping from '../pages/user-management/ModuleMapping';
import ParentMenuCreation from '../pages/user-management/ParentMenuCreation';
import SubMenuCreation from '../pages/user-management/SubMenuCreation';
import RoleCreation from '../pages/user-management/RoleCreation';
import RoleWiseModuleMapping from '../pages/user-management/RoleWiseModuleMapping';
import InchargeMapping from '../pages/user-management/InchargeMapping';
import FormWiseRightsAssign from '../pages/user-management/FormWiseRightsAssign';
import RoleWiseRightsAssign from '../pages/user-management/RoleWiseRightsAssign';

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      {/* Redirect root to a default route */}
      <Route path="/" element={<Navigate to="/masters" replace />} />
      
      {/* User Management Routes */}
      <Route path="/masters/user-management/create-user-level" element={<CreateUserLevel />} />
      <Route path="/masters/user-management/module-mapping" element={<ModuleMapping />} />
      <Route path="/masters/user-management/parent-menu-creation" element={<ParentMenuCreation />} />
      <Route path="/masters/user-management/sub-menu-creation" element={<SubMenuCreation />} />
      <Route path="/masters/user-management/role-creation" element={<RoleCreation />} />
      <Route path="/masters/user-management/role-wise-module-mapping" element={<RoleWiseModuleMapping />} />
      <Route path="/masters/user-management/incharge-mapping" element={<InchargeMapping />} />
      <Route path="/masters/user-management/form-wise-rights-assign" element={<FormWiseRightsAssign />} />
      <Route path="/masters/user-management/role-wise-rights-assign" element={<RoleWiseRightsAssign />} />
      
      {/* Catch all route - handles all routes dynamically */}
      <Route path="*" element={<GenericPage />} />
    </Routes>
  );  
};

export default AppRoutes;
