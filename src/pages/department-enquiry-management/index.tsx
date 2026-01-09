import { Route, Routes } from 'react-router-dom';
import DepartmentalEnquiry from './department-enquiry';
import DepartmentEnquiryReport from './department-enquiry-report';

export default function DepartmentEnquiryManagement() {
  return (
    <Routes>
      <Route path="department-enquiry/*" element={<DepartmentalEnquiry />} />
      <Route path="department-enquiry-report/*" element={<DepartmentEnquiryReport />} />
    </Routes>
  );
}
