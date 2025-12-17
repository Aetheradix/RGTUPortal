import { Route } from 'react-router-dom';
import SubMenuCreation from '../../../../pages/user-management/SubMenuCreation';

export const subMenuCreationRoute = (
  <Route 
    path="sub-menu-creation" 
    element={<SubMenuCreation />} 
  />
);
