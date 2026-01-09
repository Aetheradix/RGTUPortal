import { Route, Routes } from "react-router-dom";
import EmployeeAPRForm from "./EmployeeAPRForm";
import EmployeeAPRFormPrint from "./EmployeeAPRFormPrint";
import UploadAPRDocument from "./UploadAPRFormDocument";
import EmployeePropertyDetailReport from "./EmployeeAPRFormReport";
import APRDistrictWiseReport from "./APRMSDistrictWiseReport";
import APRMSHome from "./EmployeeAPRMS";

export default function APRManagement() {
  return (
    <Routes>
      <Route path="aprms-home/" element={<APRMSHome />} />
      <Route path="apr-form/" element={<EmployeeAPRForm />} />
      <Route path="apr-form-print/" element={<EmployeeAPRFormPrint />} />
      <Route path="apr-dcoument-upload/" element={<UploadAPRDocument />} />
      <Route
        path="apr-form-report/"
        element={<EmployeePropertyDetailReport />}
      />
      <Route path="apr-district-report/" element={<APRDistrictWiseReport />} />
    </Routes>
  );
}
