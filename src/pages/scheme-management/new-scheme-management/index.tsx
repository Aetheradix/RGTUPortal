import { Navigate, Route, Routes } from "react-router-dom";
import ApplyForScheme from "./ApplyForScheme";
import ViewSchemeWiseGenerateList from "./ViewSchemeWiseGenerateList";
import SchemeWiseGeneratePaymentFile from "./SchemeWiseGeneratePaymentFile";

export default function NewSchemeManagement() {
  return (
    <Routes>
      <Route index element={<Navigate to="apply-for-scheme" replace />} />
      <Route path="apply-for-scheme" element={<ApplyForScheme />} />
      <Route
        path="view-scheme-wise-generate-list"
        element={<ViewSchemeWiseGenerateList />}
      />
      <Route
        path="scheme-wise-generate-payment-file"
        element={<SchemeWiseGeneratePaymentFile />}
      />
      <Route path="*" element={<Navigate to="apply-for-scheme" replace />} />
    </Routes>
  );
}
