import { Route, Routes } from 'react-router-dom';
import Report from './DepartmentEnquiryReport';

export default function DepartmentEnquiryReport() {
  return (
    <Routes>
      <Route path="report" element={<Report />} />
    </Routes>
  );
}
