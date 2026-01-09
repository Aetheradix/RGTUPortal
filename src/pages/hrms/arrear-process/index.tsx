import { Route, Routes } from "react-router-dom";
import ArrearSalaryDetails from "./LevelSalaryArrearProcess";
import DearnessAllowanceArrear from "./DAArrearProcess";
import ArrearFinalPaymentProcess from "./ArrearFinalGenerateProcess";
import ArrearReport from "./ArrearReport";

export default function ArrearProcess() {
  return (
    <Routes>
      <Route path="salary-process/" element={<ArrearSalaryDetails />} />
      <Route path="da-process/" element={<DearnessAllowanceArrear />} />
      <Route path="final-generate/" element={<ArrearFinalPaymentProcess />} />
      <Route path="arrear-report/" element={<ArrearReport />} />
    </Routes>
  );
}
