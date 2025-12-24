import { Route, Routes } from "react-router-dom";
import ExpensesSubReport from "./ExpensesReport";
import OfficeWiseBudgetAllocationReport from "./OfficeWiseBudgetAllocationReport";
import DayBookSingle from "./DayBookSingle";
import CustomDayBook from "./CustomDayBook";
import LedgerReport from "./LedgerReport";
import CashBankBook from "./CashBankBook";
import Statistics from "./Statistics";
import AlphabeticalLedgerReport from "./AlphabeticalLedgerReport";

export default function FinanceReports() {
  return (
    <Routes>
      <Route path="expenses-report" element={<ExpensesSubReport />} />
      <Route
        path="office-wise-budget-allocation-report"
        element={<OfficeWiseBudgetAllocationReport />}
      />
      <Route path="day-book-single" element={<DayBookSingle />} />
      <Route path="custom-day-book" element={<CustomDayBook />} />
      <Route path="ledger-report" element={<LedgerReport />} />
      <Route path="cash-bank-book" element={<CashBankBook />} />
      <Route path="statistics" element={<Statistics />} />
      <Route
        path="alphabetical-ledger-report"
        element={<AlphabeticalLedgerReport />}
      />
    </Routes>
  );
}
