import { Route, Navigate } from 'react-router-dom';
import { transferRequestRoutes } from './transfer-request/route';

export const hrmsRoutes = (
  <Route path="hrms">
    {/* Default HRMS landing → Transfer Request about page */}
    <Route index element={<Navigate to="transfer-request/about-voluntary-mutual-transfer" replace />} />

    <Route path="transfer-request">
      <Route index element={<Navigate to="about-voluntary-mutual-transfer" replace />} />
      {transferRequestRoutes}
    </Route>
  </Route>
);
