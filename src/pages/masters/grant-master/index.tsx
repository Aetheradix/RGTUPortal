import { Navigate, Route, Routes } from 'react-router-dom';
import GrantTypeMaster from './GrantTypeMaster';
import GrantCategoryMaster from './GrantCategoryMaster';

export default function GrantMaster() {
  return (
    <Routes>
      <Route index element={<Navigate to="grant-type" replace />} />

      <Route path="grant-type" element={<GrantTypeMaster />} />
      <Route path="grant-category" element={<GrantCategoryMaster />} />

      <Route path="*" element={<Navigate to="grant-type" replace />} />
    </Routes>
  );
}


