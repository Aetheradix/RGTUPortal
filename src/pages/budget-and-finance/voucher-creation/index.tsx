import { Route, Routes } from "react-router-dom";
import PaymentVoucher from "./PaymentVoucher";
import ReceiptVoucher from "./ReceiptVoucher";
import JournalVoucher from "./JournalVoucher";
import ServicePurchaseVoucher from "./ServicePurchaseVoucher";
import ContraVoucher from "./ContraVoucher";

export default function VoucherCreation() {
  return (
    <Routes>
      <Route path="payment-voucher" element={<PaymentVoucher />} />
      <Route path="receipt-voucher" element={<ReceiptVoucher />} />
      <Route path="journal-voucher" element={<JournalVoucher />} />
      <Route path="contra-voucher" element={<ContraVoucher />} />
      <Route
        path="service-purchase-voucher"
        element={<ServicePurchaseVoucher />}
      />
    </Routes>
  );
}
