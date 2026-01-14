import { Route, Routes } from "react-router-dom";
import TransferRequest from "./transfer-request/Index";
import AdministrativeLevelTransfer from "./administrative/Index";
import HodTransferApproval from "./hod-transfer-approval";
import TransferApprovalHeadOffice from "./transfer-approval-by-head-office";
import DashboardDisplayOrders from "./dashboard-display-circulars-orders";
import PunishmentSystem from "./punishment-system";
import HrmsReports from "./hrms-reports";
import GrievanceReport from "./grievance-report";
import GrievanceManagementSystem from "./grievance-management-system";
import ArrearProcess from "./arrear-process";
import Bonus from "./bonus";
import APRManagement from "./employee-apr-management-system";
import HigherDesignationCounselling from "./higher-designation-counselling";
import AutomaticTransferSystem from "./automatic-transfer-system";
import AnnualConfidentialReport from "./annual-confidential-report";
import CancelTransferOrder from "./cancel-transfer-order";
import DepartmentalEnquiry from "./departmental-enquiry";
import EServiceBook from "./e-Service-book";
import EmployeeAnukampaApplication from "./employee-anukampa-application";
import EmployeeJoiningInOffice from "./employee-joining-In-office";
import Promotion from "./promotion";
import Tour from "./tour";
import DirectorAnukampaapplicationapproval from "./director-anukampa-application-approval";
import HODAnukampaapplicationapproval from "./hod-anukampa-application-approval";
import HeadAnukampaapplicationapproval from "./head-office-anukampa-application-approval";

export default function Hrms() {
  return (
    <Routes>
      <Route path="transfer-request/*" element={<TransferRequest />} />
      <Route
        path="administrative-level-transfer/*"
        element={<AdministrativeLevelTransfer />}
      />
      <Route path="hod-transfer-approval/*" element={<HodTransferApproval />} />
      <Route
        path="transfer-approval-head-office/*"
        element={<TransferApprovalHeadOffice />}
      />
      <Route
        path="dashboard-display-orders/*"
        element={<DashboardDisplayOrders />}
      />
      <Route path="punishment-system/*" element={<PunishmentSystem />} />
      <Route path="hrms-reports/*" element={<HrmsReports />} />
      <Route
        path="grievance-management-system/*"
        element={<GrievanceManagementSystem />}
      />
      <Route path="grievance-report/*" element={<GrievanceReport />} />
      <Route path="arrear-process/*" element={<ArrearProcess />} />
      <Route path="bonus/*" element={<Bonus />} />
      <Route path="apr-management/*" element={<APRManagement />} />

      {/*newwwww*/}

      <Route
        path="higher-designation-counselling/*"
        element={<HigherDesignationCounselling />}
      />
      <Route
        path="automatic-transfer-system/*"
        element={<AutomaticTransferSystem />}
      />
      <Route path="cancel-transfer-order/*" element={<CancelTransferOrder />} />
      <Route
        path="employee-joining-In-office/*"
        element={<EmployeeJoiningInOffice />}
      />
      <Route path="tour/*" element={<Tour />} />
      <Route path="promotion/*" element={<Promotion />} />
      <Route path="e-Service-book/*" element={<EServiceBook />} />
      <Route path="departmental-enquiry/*" element={<DepartmentalEnquiry />} />
      <Route
        path="employee-anukampa-application/*"
        element={<EmployeeAnukampaApplication />}
      />
      <Route
        path="annual-confidential-report/*"
        element={<AnnualConfidentialReport />}
      />

      {/*newwwww 2*/}

      <Route
        path="director-anukampa-application-approval/*"
        element={<DirectorAnukampaapplicationapproval />}
      />
      <Route
        path="hod-anukampa-application-approval/*"
        element={<HODAnukampaapplicationapproval />}
      />
      <Route
        path="head-office-anukampa-application-approval/*"
        element={<HeadAnukampaapplicationapproval />}
      />
    </Routes>
  );
}
