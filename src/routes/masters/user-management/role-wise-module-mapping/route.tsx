import { Route } from 'react-router-dom';
import RoleWiseModuleMapping from '../../../../pages/user-management/RoleWiseModuleMapping';

export const roleWiseModuleMappingRoute = (
  <Route 
    path="role-wise-module-mapping" 
    element={<RoleWiseModuleMapping />} 
  />
);

