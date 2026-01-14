import {  Route, Routes } from "react-router-dom";
import DepartmentWiseSchemeReport from "./DepartmentWiseSchemeReport";
import DistrictWiseApplySchemeReport from "./DistrictWiseApplySchemeReport";
import DistrictWiseEligibleStudentsReport from "./DistrictWiseEligibleStudentsReport";
import SchemeApplicationsRejectListReport from "./SchemeApplicationsRejectListReport";
import SchemeApplicationStudentStatusReport from "./SchemeApplicationStudentStatusReport";
import SchemePaymentReport from "./SchemePaymentReport";
import SchemeStatusReport from "./SchemeStatusReport";
import SchemeWiseEligibleStudentListReports from "./SchemeWiseEligibleStudentListReports";
import SpecialSchemeStudentData from "./SpecialSchemeStudentData";


export default function SchemeManagementReports() {
  return (
    <Routes>
     <Route path="departmentwise-scheme-report/*" element={<DepartmentWiseSchemeReport/>} />
     <Route path="districtwise-apply-scheme-report/*" element={<DistrictWiseApplySchemeReport/>} />
     <Route path="districtwise-eligible-students-report/*" element={<DistrictWiseEligibleStudentsReport/>} />
     <Route path="scheme-applications-reject-list-report/*" element={<SchemeApplicationsRejectListReport/>} />
     <Route path="scheme-application-student-status-report/*" element={<SchemeApplicationStudentStatusReport/>} />
     <Route path="scheme-payment-report/*" element={<SchemePaymentReport/>} />
     <Route path="scheme-status-report/*" element={<SchemeStatusReport/>} />
     <Route path="schemeWise-eligible-student-list-reports/*" element={<SchemeWiseEligibleStudentListReports/>} />
     <Route path="special-scheme-student-data/*" element={<SpecialSchemeStudentData/>} />
    </Routes>
  );
}
