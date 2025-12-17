import { Navigate, Route, Routes } from 'react-router-dom';
import CreateUserLevel from './CreateUserLevel';
import FormWiseRightsAssign from './FormWiseRightsAssign';
import InchargeMapping from './InchargeMapping';
import ModuleMapping from './ModuleMapping';
import ParentMenuCreation from './ParentMenuCreation';
import RoleCreation from './RoleCreation';
import RoleWiseModuleMapping from './RoleWiseModuleMapping';
import RoleWiseRightsAssign from './RoleWiseRightsAssign';
import SubMenuCreation from './SubMenuCreation';

export default function 
UserMangement() {
  return (
    <Routes>
      <Route index element={<Navigate to="create-user-level" replace />} />
      <Route path="create-user-level" element={<CreateUserLevel />} />
      <Route path="module-mapping" element={<ModuleMapping />} />
      <Route path="parent-menu-creation" element={<ParentMenuCreation />} />
      <Route path="sub-menu-creation" element={<SubMenuCreation />} />
      <Route path="role-creation" element={<RoleCreation />} />
      <Route path="role-wise-module-mapping" element={<RoleWiseModuleMapping />} />
      <Route path="incharge-mapping" element={<InchargeMapping />} />
      <Route path="form-wise-rights-assign" element={<FormWiseRightsAssign />} />
      <Route path="role-wise-rights-assign" element={<RoleWiseRightsAssign />} />
      <Route path="*" element={<Navigate to="create-user-level" replace />} />
    </Routes>
  );
}
