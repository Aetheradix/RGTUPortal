import { Route, Routes } from "react-router-dom";
import ApplyForDuplicateMarksheet from "./AppyForDuplicateMarksheet";
import FilterDownloadDuplicateMarksheet from "./DownloadDuplicateMarksheet";
import GenerateDuplicateMarksheet from "./GenrateDuplicateMarksheet";
import DuplicateMarksheetApplications from "./DuplicateMarksheetApplications";


export default function DuplicateMarksheet() {
  return (
    <Routes>
      <Route path="apply-for-duplicate-marksheet/*" element={<ApplyForDuplicateMarksheet/>} />
      <Route path="download-duplicate-marksheet/*" element={<FilterDownloadDuplicateMarksheet/>} />
      <Route path="generate-duplicate-marksheet/*" element={<GenerateDuplicateMarksheet/>} />
      <Route path="duplicate-marksheet-applications/*" element={<DuplicateMarksheetApplications/>} />
    </Routes>
  );
}