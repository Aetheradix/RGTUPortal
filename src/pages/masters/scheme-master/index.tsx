import { Navigate, Route, Routes } from 'react-router-dom';
import SchemeDepartmentMaster from './SchemeDepartmentMaster';
import SchemeMasterPage from './SchemeMasterPage';
import SchemeTypeMaster from './SchemeTypeMaster';
import SchemeCategoryMaster from './SchemeCategoryMaster';

export default function SchemeMaster() {
  return (
    <Routes>
      <Route index element={<Navigate to="scheme-master" replace />} />

      <Route path="scheme-department-master" element={<SchemeDepartmentMaster />} />
      <Route path="scheme-master" element={<SchemeMasterPage />} />
      <Route path="scheme-type-master" element={<SchemeTypeMaster />} />
      <Route path="scheme-master-duplicate" element={<SchemeMasterPage />} />
      <Route path="scheme-category-master" element={<SchemeCategoryMaster />} />

      <Route path="*" element={<Navigate to="scheme-master" replace />} />
    </Routes>
  );
}


