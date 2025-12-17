import { Route } from 'react-router-dom';
import ParentMenuCreation from '../../../../pages/masters/user-management/ParentMenuCreation';

export const parentMenuCreationRoute = (
  <Route 
    path="parent-menu-creation" 
    element={<ParentMenuCreation />} 
  />
);

