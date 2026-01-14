import { Route, Routes } from "react-router-dom";
import SchemeWiseDisbursementAmount from "./SchemeWiseDisbursementAmount";
import SchemeWiseGeneratePaymentFileModule from "./SchemeWiseGeneratePaymentFile";

export default function Payment() {
  return (
    <Routes>
      <Route path="schemewise-disbursement-amount/*" element={<SchemeWiseDisbursementAmount/>} />
      <Route path="schemewise-generate-paymentfile-module/*" element={<SchemeWiseGeneratePaymentFileModule/>} />
    </Routes>
  );
}
