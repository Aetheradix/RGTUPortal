import { Navigate, Route, Routes } from "react-router-dom";
import HeadCompassionateAppointmentDashboard from "./HeadOfficeAnukampaApplicationApprovalHome";
import ActionAnukampaAppointmentHo from "./ActiononAnukampaAppointment";
import HoAnukampaAppointmentReport from "./AnukampaAppointmentReport";
import HoBlockWiseCountingReport from "./BlockWiseStatistics";
import DecisionOnPendingApplicationsHo from "./DecisionOnApplication";
import DisposeCasesDetailsHoLevel from "./DisposeCases";
import DistrictWiseCountingReportHoLevel from "./DistrictWiseStatistics";
import HoLevelNocReport from "./NOCReport";
import DecidePendingHoLevel from "./NOCReportSenttoDistrictCollector";
import PrintAnukampaApplicationHoLevel from "./PrintApplication";
import AnukampaApplicationRegisterHO from "./RegisterCorrectApplicationforAnukampaAppointment";


export default function HeadAnukampaapplicationapproval() {
  return (
    <Routes>
      <Route index element={<Navigate to="head-anukampa-application-approval-home" replace />} />
      <Route path="head-anukampa-application-approval-home" element={<HeadCompassionateAppointmentDashboard />} />
      <Route path="action-on-anukampa-appointment" element={<ActionAnukampaAppointmentHo />} />
      <Route path="anukampa-appointment-report" element={<HoAnukampaAppointmentReport />} />
      <Route path="block-wise-statistics" element={<HoBlockWiseCountingReport />} />
      <Route path="decision-on-application" element={<DecisionOnPendingApplicationsHo />} />
      <Route path="dispose-cases" element={<DisposeCasesDetailsHoLevel />} />
      <Route path="district-wise-statistics" element={<DistrictWiseCountingReportHoLevel />} />
      <Route path="noc-report" element={<HoLevelNocReport />} />
      <Route path="noc-report-sent-to-district-collector" element={<DecidePendingHoLevel />} />
      <Route path="print-application" element={<PrintAnukampaApplicationHoLevel />} />
      <Route path="register-correct-application-for-anukampa-appointment" element={<AnukampaApplicationRegisterHO />} />
      <Route path="*" element={<Navigate to="head-anukampa-application-approval-home" replace />} />
    </Routes>
  );
}
