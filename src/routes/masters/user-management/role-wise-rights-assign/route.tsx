import { Route } from 'react-router-dom';
import RoleWiseRightsAssign from '../../../../pages/user-management/RoleWiseRightsAssign';

export const roleWiseRightsAssignRoute = (
  <Route 
    path="role-wise-rights-assign" 
    element={<RoleWiseRightsAssign />} 
  />
);
