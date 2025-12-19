import { Route, Routes } from 'react-router-dom';
import Dashboard from './Dashboard';
import GenericPage from './GenericPage';
import Master from './masters';
import Admissonmanagementsystem from './admission-management-system';

export default function AppFeature() {
  return (
    <Routes>
      <Route index element={<Dashboard />} />
      <Route path="masters/*" element={<Master />} />
      <Route path="admission-management-system/*" element={<Admissonmanagementsystem />} />
      <Route path="*" element={<GenericPage />} />
    </Routes>
  );
}
