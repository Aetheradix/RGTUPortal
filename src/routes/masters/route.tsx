import { Route, Navigate } from 'react-router-dom';

import { userManagementRoutes } from './user-management/route';



export const mastersRoutes = (

  <Route path="masters">

    {/* When visiting /masters, redirect to default user-management screen */}
    <Route index element={<Navigate to="user-management/create-user-level" replace />} />



    <Route path="user-management">

      {/* When visiting /masters/user-management, redirect to create-user-level */}

      <Route index element={<Navigate to="create-user-level" replace />} />

      {userManagementRoutes}

    </Route>

  </Route>

);

