import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import GenericPage from '../pages/GenericPage';

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      {/* Redirect root to a default route */}
      <Route path="/" element={<Navigate to="/masters" replace />} />
      
      {/* Catch all route - handles all routes dynamically */}
      <Route path="*" element={<GenericPage />} />
    </Routes>
  );
};

export default AppRoutes;
