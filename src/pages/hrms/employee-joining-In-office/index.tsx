import { Route, Routes } from "react-router-dom";
import AboutEmployeeJoining from "./AboutEmployeeJoining";
import EmployeeJoiningReport from "./Report";
import EmployeeJoiningInOfficee from "./AddEmployeetoOffice";

export default function EmployeeJoiningInOffice(){
    return (
        <Routes>
            <Route path="about-employee-joining" element={<AboutEmployeeJoining />} />
            <Route path="report" element={<EmployeeJoiningReport />} />
            <Route path="add-employee-to-office" element={<EmployeeJoiningInOfficee />} />
        
       
        </Routes>
    )
}