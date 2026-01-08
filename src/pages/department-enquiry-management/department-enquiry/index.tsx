import { Route, Routes } from 'react-router-dom';
import DepartmentEnquiryForm from './FillDepartmentEnquiryDetails';
import UpdateDepartmentEnquiry from './UpdateDepartmentEnquiry';

export default function DepartmentalEnquiry() {
  return (
    <Routes>
        <Route path='fill-department-enquiry-details' element={<DepartmentEnquiryForm />} />
        <Route path='update-department-enquiry' element={<UpdateDepartmentEnquiry />} />
    </Routes>
  );
}
