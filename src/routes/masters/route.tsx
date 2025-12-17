import { Route } from 'react-router-dom';
import { userManagementRoutes } from './user-management/route';

export const mastersRoutes = (
  <Route path="masters">
    <Route path="user-management">
      {userManagementRoutes}
    </Route>
  </Route>
);
