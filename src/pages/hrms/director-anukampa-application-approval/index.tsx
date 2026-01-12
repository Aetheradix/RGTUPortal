import { Navigate, Route, Routes } from "react-router-dom";
import CompassionateAppointmentDashboard from "./JDAnukampaApplicationApprovalHome";
import ActionAnukampaAppointment from "./ActiononAnukampaAppointment";
import BlockWiseCountingReport from "./BlockWiseStatistics";
import DecisionOnPendingApplications from "./DecisionOnApplication";
import DisposeCasesDetails from "./DisposeCases";
import DistrictWiseCountingReport from "./DistrictWiseStatistics";
import DirectorNocReport from "./NOCReport";
import NOCReportDistrictCollector from "./NOCReportSenttoDistrictCollector";
import PrintAnukampaApplication from "./PrintApplication";
import AnukampaApplicationRegister from "./RegisterCorrectApplicationforAnukampaAppointment";

export default function DirectorAnukampaapplicationapproval() {
  return (
    <Routes>
      <Route index element={<Navigate to="jd-anukampa-application-approval-home" replace />} />
      <Route path="jd-anukampa-application-approval-home" element={<CompassionateAppointmentDashboard />} />
      <Route path="action-on-anukampa-appointment" element={<ActionAnukampaAppointment />} />
      <Route path="block-wise-statistics" element={<BlockWiseCountingReport />} />
      <Route path="decision-on-application" element={<DecisionOnPendingApplications />} />
      <Route path="dispose-cases" element={<DisposeCasesDetails />} />
      <Route path="district-wise-statistics" element={<DistrictWiseCountingReport />} />
      <Route path="noc-report" element={<DirectorNocReport />} />
      <Route path="noc-report-sent-to-district-collector" element={<NOCReportDistrictCollector />} />
      <Route path="print-application" element={<PrintAnukampaApplication />} />
      <Route path="register-correct-application-for-anukampa-appointment" element={<AnukampaApplicationRegister />} />
      <Route path="*" element={<Navigate to="jd-anukampa-application-approval-home" replace />} />
    </Routes>
  );
}
