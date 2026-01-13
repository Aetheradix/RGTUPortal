import { Route, Routes } from "react-router-dom";
import SetAttendance from "./SetAttendance";
import GenerateSalary from "./GenerateSalary";
import SalaryProccess from "./SalaryProcess";

export default function SalaryProcess(){
    return(
        <Routes>
            <Route path="set-attendance/*" element={<SetAttendance/>}/>
            <Route path="generate-salary/*" element={<GenerateSalary/>}/>
            <Route path="salary-proccess/*" element={<SalaryProccess/>}/>
        </Routes>
    )
}