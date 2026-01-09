import { Route, Routes } from "react-router-dom";
import EmployeeAPRForm from "./EmployeeAPRForm";
import EmployeeAPRFormPrint from "./EmployeeAPRFormReportPrint";
import UploadAPRFormDocument from "./UploadAPRFormDocument";
import EmployeeAPRReport from "./EmployeeAPrFormReport";
import APRMSDistrictWiseReport from "./APRMSDistrictWiseReport";

export default function EmployeeAPRMS(){
    return (
        <Routes>
            <Route path="employee-apr-form" element={<EmployeeAPRForm/>}/>
            <Route path="employee-apr-form-print" element={<EmployeeAPRFormPrint/>}/>
            <Route path="upload-apr-form-document" element={<UploadAPRFormDocument/>}/>
            <Route path="employee-apr-report" element={<EmployeeAPRReport/>}/>
            <Route path="aprms-district-wise-report" element={<APRMSDistrictWiseReport/>}/>
        </Routes>
    )
}