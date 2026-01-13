import { Navigate, Route, Routes } from "react-router-dom";
import PaymentHistoryReceipt from "./Payment-History-And-Receipt-Download";
import PaymentReport from "./Payment-Report";
import PaymentVerification from "./Payment-Verification";
import ViewFeeStructure from "./View-Fee-Structure";
import ApplyForScheme from "./Make-Payment";
import SetAdmissionFee from "./Set-Admission-Fee";

export default function AdmissionFee() {
  return (
    <Routes>
      <Route index element={<Navigate to="set-admission-fee" replace />} />
      <Route path="set-admission-fee" element={<SetAdmissionFee />} />
      <Route
        path="payment-history-and-receipt-download"
        element={<PaymentHistoryReceipt />}
      />
      <Route path="payment-report" element={<PaymentReport />} />
      <Route path="payment-verification" element={<PaymentVerification />} />
      <Route path="view-fee-structure" element={<ViewFeeStructure />} />
      <Route path="make-payment" element={<ApplyForScheme />} />

      <Route path="*" element={<Navigate to="set-admission-fee" replace />} />
    </Routes>
  );
}
