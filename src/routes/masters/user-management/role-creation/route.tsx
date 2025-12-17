import { Route } from 'react-router-dom';
import RoleCreation from '../../../../pages/user-management/RoleCreation';

export const roleCreationRoute = (
  <Route 
    path="role-creation" 
    element={<RoleCreation />} 
  />
);
