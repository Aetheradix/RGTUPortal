import { Navigate, Route, Routes } from "react-router-dom";
import ConfigureDocuments from "./ConfigureDocumentRequirementtoVerify ";
import DocumentVerification from "./DocumentsVerification";
import DocVerificationReport from "./DocumentVerificationReport";
import CollegeWiseReport from "./CollegewiseVerificationReport";

export default function 
Documentvarificationmaster() {
  return (
    <Routes>
      <Route index element={<Navigate to="configure-document-requirement-toVerify" replace />} />
      <Route path="configure-document-requirement-toVerify" element={<ConfigureDocuments />} />
      <Route path="documents-verification" element={<DocumentVerification />} />
      <Route path="document-verification-report" element={< DocVerificationReport/>} />
      <Route path="collegewise-verification-report" element={< CollegeWiseReport/>} />
      <Route path="*" element={<Navigate to="configure-document-requirement-toVerify" replace />} />
    </Routes>
  );
}
