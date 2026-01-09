import { Route, Routes } from "react-router-dom";
import TaxChallanReport from "./TaxChallanReport";
import BankWiseMonthlyPayBill from "./BankWiseMonthlyPayBill";
import EmployeeSalaryLedger from "./EmployeeSalaryLedger";
import EmployeeWiseSalarySlip from "./EmployeeWiseSalarySlip";
import FinalSummaryReport from "./FinalSummaryReport";
import FinancialYearEarnDeduction from "./FyEarnDeductionReport";
import MonthlyEarningDeductionReport from "./MonthlyEarningDeductionReport";
import MonthlyPayBill from "./MonthlyPayBill";
import MonthlyPolicyReport from "./MonthlyPolicyReport";
import OfficeSalarySlip from "./OfficeWiseSalarySlip";
import SalaryGenerationStatusReport from "./SalaryGenerationStatusReport";

export default function PayrollReports(){
    return(
        <Routes>
            <Route path="tax-challan-report/*" element={<TaxChallanReport/>}/>
            <Route path="salary-generation-status-report/*" element={<SalaryGenerationStatusReport/>}/>
            <Route path="bank-wise-monthly-pay-bill/*" element={<BankWiseMonthlyPayBill/>}/>
            <Route path="employee-salary-ledger/*" element={<EmployeeSalaryLedger/>}/>
            <Route path="employee-wise-salary-slip/*" element={<EmployeeWiseSalarySlip/>}/>
            <Route path="final-summary-report/*" element={<FinalSummaryReport/>}/>
            <Route path="financial-year-earn-deduction/*" element={<FinancialYearEarnDeduction/>}/>
            <Route path="monthly-earning-deduction-report/*" element={<MonthlyEarningDeductionReport/>}/>
            <Route path="monthly-pay-bill/*" element={<MonthlyPayBill/>}/>
            <Route path="monthly-policy-report/*" element={<MonthlyPolicyReport/>}/>
            <Route path="office-salary-slip/*" element={<OfficeSalarySlip/>}/>
        </Routes>
    )
}