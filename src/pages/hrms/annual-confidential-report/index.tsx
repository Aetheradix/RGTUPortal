import { Route, Routes } from "react-router-dom"
import AboutACR from "./AboutACR"
import ResendEmployeeACRApplication from "./EmployeeACRResendEditApplication"
import ACRApply from "./EmployeeApplyACR"
import ACRReportReviewing from "./ACRReportReviewingFillAcceptingAuthority"
import AcrReportReview from "./ACRReportFillByReportingOfficer"
import EmployeeACRReport from "./EmployeeACRReport"
import ReportingOfficerACRReport from "./ReportingOfficerACRReport"
import AcceptingAuthorityACRReport from "./AcceptingAuthorityACRReport"
import DistrictWiseACRReport from "./DistrictWiseACRReport"

export default function AnnualConfidentialReport(){
    return(
        <Routes>
            <Route path="aboutACR" element={<AboutACR />} />
            <Route path="employee-apply-acr" element={<ACRApply />} />
            <Route path="employee-acr-resend-edit-application" element={<ResendEmployeeACRApplication />} />
            <Route path="acr-report-reviewing-fill-accepting-authority" element={<ACRReportReviewing />} />
            <Route path="acr-report-fill-by-reporting-officer" element={<AcrReportReview />} />
            <Route path="employee-acr-report" element={<EmployeeACRReport />} />
            <Route path="reportin-officer-acr-report" element={<ReportingOfficerACRReport />} />
            <Route path="accepting-authority-acr-report" element={<AcceptingAuthorityACRReport />} />
            <Route path="district-wise-acr-report" element={<DistrictWiseACRReport />} />
        </Routes>
    )
}