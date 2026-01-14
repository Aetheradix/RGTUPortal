import { Route, Routes } from "react-router-dom";
import SalaryHead from "./SalaryHead";
import SalaryMonthlyHead from "./SalaryMonthlyHead";
import SalaryOptionalHead from "./SalaryOptionalhead";
import InsurancePolicy from "./InsurancePolicy";
import LoanInformation from "./LoanInformation";



export default function SetHeadValue(){
    return(
        <Routes>
            <Route path="salary-head/*" element={<SalaryHead/>}/>
            <Route path="salary-monthly-head/*" element={<SalaryMonthlyHead/>}/>
            <Route path="salary-optional-head/*" element={<SalaryOptionalHead/>}/>
            <Route path="insurance-policy/*" element={<InsurancePolicy/>}/>
            <Route path="loan-information/*" element={<LoanInformation/>}/>
        </Routes>
    )
}