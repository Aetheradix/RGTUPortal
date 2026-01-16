import { Navigate, Route, Routes } from "react-router-dom";
import TransporterBillUpload from "./Transporter-Bill-Upload";
import VendorPaymentProcess from "./Vendor-Payment-Process";

export default function Billpaymentpro() {
  return (
    <Routes>
      <Route index element={<Navigate to="transporter-bill-upload" replace />} />
      <Route path="transporter-bill-upload" element={<TransporterBillUpload />} />
      <Route path="vendor-payment-process" element={<VendorPaymentProcess />} />
     
      <Route path="*" element={<Navigate to="transporter-bill-upload" replace />} />
    </Routes>
  );
}
