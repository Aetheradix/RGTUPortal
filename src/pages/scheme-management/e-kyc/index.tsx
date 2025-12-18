import { Navigate, Route, Routes } from "react-router-dom";
import EKycVerification from "./EKYC_Verification";
import StudentDetailsKYC from "./StudentDetailsKYC";
import EkycApproval from "./EKYC_Approval";
import StudentSamagraEkycApproval from "./StudentSamagraEKYCApproval";

export default function EKYC() {
  return (
    <Routes>
      <Route index element={<Navigate to="e-kyc-verification" replace />} />
      <Route path="e-kyc-verification" element={<EKycVerification />} />
      <Route path="student-details-kyc" element={<StudentDetailsKYC />} />
      <Route path="e-kyc-approval" element={<EkycApproval />} />
      <Route
        path="student-samagra-e-kyc-approval"
        element={<StudentSamagraEkycApproval />}
      />
      <Route path="*" element={<Navigate to="e-kyc-verification" replace />} />
    </Routes>
  );
}
