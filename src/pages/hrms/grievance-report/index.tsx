import { Route, Routes } from "react-router-dom";
import GrievanceDisposedReport from "./GrivenceDisposedReport";
import RejectedComplaintReport from "./RejectedComplaintReport";
import DistrictForwardedGrievances from "./DistrictWiseForwardedComplaint";
import GrievancesForwardedCPI from "./ComplaintForwardedFromCPI";
import DistrictProgressReport from "./DistrictWiseProgressReport";
import SectionWiseProgressReport from "./SectionWisePendingReport";

export default function GrievanceReport() {
  return (
    <Routes>
      <Route
        path="grivence-disposed-report/"
        element={<GrievanceDisposedReport />}
      />
      <Route
        path="rejected-complaint-report/"
        element={<RejectedComplaintReport />}
      />
      <Route
        path="district-wise-complaint-report/"
        element={<DistrictForwardedGrievances />}
      />
      <Route
        path="complaint-forwarded-from-cpi/"
        element={<GrievancesForwardedCPI />}
      />
      <Route
        path="district-wise-progress-report/"
        element={<DistrictProgressReport />}
      />
      <Route
        path="section-wise-pending-report/"
        element={<SectionWiseProgressReport />}
      />
    </Routes>
  );
}
