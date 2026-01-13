import { Route, Routes } from "react-router-dom";
import PayrollReports from "./payroll-reports";
import Gratuity from "./gratuity";
import LeaveEncashment from "./leave-encashment";
import PayrollBaselineData from "./payroll-baseline-data";
import SalaryProcess from "./salary-process";
import SetHeadValue from "./set-head-value";

export default function Payroll(){
    return(
     <Routes>
        <Route path="payroll-reports/*" element={<PayrollReports/>}/>
        <Route path="gratuity/*" element={<Gratuity/>}/>
        <Route path="leave-encashment/*" element={<LeaveEncashment/>}/>
        <Route path="payroll-baseline-data/*" element={<PayrollBaselineData/>}/>
        <Route path="salary-process/*" element={<SalaryProcess/>}/>
        <Route path="set-head-value/*" element={<SetHeadValue/>}/>
     </Routes>
    )
}