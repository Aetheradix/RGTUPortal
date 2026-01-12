import { Navigate, Route, Routes } from "react-router-dom";
import HodCompassionateAppointmentDashboard from "./HODAnukampaApplicationApprovalHome";
import BlockWiseCountingReport from "./BlockWiseStatistics";
import HodDecisionPendingApps from "./DecisionOnApplication";
import HodDistrictWiseCountingReport from "./DistrictWiseStatistics";
import HODLevelNOCReport from "./NOCReport";
import HodNOCSentToCollector from "./NOCReportSenttoDistrictCollector";
import HodPrintAnukampaApplication from "./PrintApplication";
import HodAnukampaApplicationRegister from "./RegisterCorrectApplicationforAnukampaAppointment";
import HodAnukampaAction from "./ActiononAnukampaAppointment";
import HodDisposeCasesDetails from "./DisposeCases";

export default function HODAnukampaapplicationapproval() {
  return (
    <Routes>
      <Route index element={<Navigate to="hod-anukampa-application-approval-home" replace />} />
      <Route path="hod-anukampa-application-approval-home" element={<HodCompassionateAppointmentDashboard />} />
      <Route path="block-wise-statistics" element={<BlockWiseCountingReport />} />
      <Route path="decision-on-application" element={<HodDecisionPendingApps />} />
      <Route path="dispose-cases" element={<HodDisposeCasesDetails />} />
      <Route path="district-wise-statistics" element={<HodDistrictWiseCountingReport />} />
      <Route path="action-on-anukampa-appointment" element={<HodAnukampaAction />} />
      <Route path="noc-report" element={<HODLevelNOCReport />} />
      <Route path="noc-report-sent-to-district-collector" element={<HodNOCSentToCollector />} />
      <Route path="print-application" element={<HodPrintAnukampaApplication />} />
      <Route path="register-correct-application-for-anukampa-appointment" element={<HodAnukampaApplicationRegister />} />
      <Route path="*" element={<Navigate to="hod-anukampa-application-approval-home" replace />} />
    </Routes>
  );
}
