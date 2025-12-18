import { Navigate, Route, Routes } from "react-router-dom";
import AddDocumentRequirement from "./ConfigureDocumentRequirement";
import UploadDocuments from "./UploadDocuments";
import UploadedDocumentsList from "./UploadedDocuments";



export default function 
UploadDocument() {
  return (
    <Routes>
      <Route index element={<Navigate to="configure-document-requirement" replace />} />
      <Route path="configure-document-requirement" element={<AddDocumentRequirement />} />
      <Route path="upload-documents" element={<UploadDocuments />} />
      <Route path="uploaded-documents" element={< UploadedDocumentsList/>} />
    
    
     
      <Route path="*" element={<Navigate to="configure-document-requirement" replace />} />
    </Routes>
  );
}
