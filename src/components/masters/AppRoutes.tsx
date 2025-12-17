import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import GenericPage from '../../pages/GenericPage';
import { mastersRoutes } from '../../routes/masters/route';
import { locationMasterRoutes } from '../../routes/masters/location-master/route';

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      {/* Redirect root directly to default user-management screen */}
      <Route path="/" element={<Navigate to="/masters/user-management/create-user-level" replace />} />

      {/* Masters Routes - includes all nested routes */}
      {mastersRoutes}
      {/* Location Master Routes */}
      {locationMasterRoutes}

      {/* Catch all route - handles all routes dynamically */}
      <Route path="*" element={<GenericPage />} />
    </Routes>
  );
};

export default AppRoutes;
