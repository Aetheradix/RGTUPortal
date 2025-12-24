import { Navigate, Route, Routes } from "react-router-dom";
import CollegeAllotmentStatus from "./College-wise-Allotment-Status";
import GenerateAllotmentLetters from "./Generate-Allotment-Letters";
import GetAllotmentLetter from "./Get-Allotment-Letter";
import ManageAllotmentStatus from "./Manage-Allotment-Status";



export default function 
AllotmentLetter() {
  return (
    <Routes>
      <Route path="get-allotment-letter" element={<GetAllotmentLetter />} />
      <Route index element={<Navigate to="get-allotment-letter" replace />} />
      <Route path="college-wise-allotment-status" element={<CollegeAllotmentStatus />} />
      <Route path="generate-allotment-letters" element={<GenerateAllotmentLetters />} />
      <Route path="manage-allotment-status" element={<ManageAllotmentStatus />} />
      
    
    
     
      <Route path="*" element={<Navigate to="get-allotment-letter" replace />} />
    </Routes>
  );
}
