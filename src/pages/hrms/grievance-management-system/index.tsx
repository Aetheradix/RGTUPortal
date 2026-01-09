import { Route, Routes } from "react-router-dom";
import GrievanceManagementSystemHome from "./GrievanceManagementSystemHome";
import AddEmployeeGrievanceDetails from "./AddEmployeeGrievanceDetails";
import GrievanceTrackingReport from "./ComplaintTrackingStatus";
import PrintComplaintReport from "./PrintComplaint";
import GrievanceProcessing from "./GrievancesProcessing";
import GrievanceComplaintResolution from "./GrievancesComplaintResolution";

export default function GrievanceManagementSystem() {
  return (
    <Routes>
      <Route
        path="grievance-management-system-home/"
        element={<GrievanceManagementSystemHome />}
      />
      <Route
        path="add-employee-grievance-details/"
        element={<AddEmployeeGrievanceDetails />}
      />
      <Route
        path="grievance-tracking-report/"
        element={<GrievanceTrackingReport />}
      />
      <Route
        path="print-complaint-report/"
        element={<PrintComplaintReport />}
      />
      <Route path="grievance-processing/" element={<GrievanceProcessing />} />
      <Route
        path="grievance-resolution/"
        element={<GrievanceComplaintResolution />}
      />
    </Routes>
  );
}
