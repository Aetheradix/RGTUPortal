import { Route, Routes } from 'react-router-dom';
import HostelManagement from './hostel-management';

export default function HostelManagementSystem() {
  return (
    <Routes>
       <Route path="hostel-management/*" element={<HostelManagement />} />
    </Routes>
  );
}
    