import { Route, Routes } from "react-router-dom";
import LeavePendencyMonitorReport from "./LeavePendencyMonitorReport";
import DEOMonitoringGridReport from "./DEOMonitoringGridReport";
import DistrictWiseLeaveTypeReport from "./DistrictWiseLeaveTypeReport";
import TeacherWiseDetailsReports from "./TeacherwisedetailsReports";
import ViewLeaveRequest from "./ViewLeaveRequest";
import LeaveHistoryReport from "./LeaveHistoryReport";

export default function LeaveReport(){
    return(
        <Routes>
            <Route path="leave-pendency-monitor-report" element={<LeavePendencyMonitorReport/>}/>
            <Route path="deo-monitoring-grid-report" element={<DEOMonitoringGridReport/>}/>
            <Route path="district-wise-leave-type-report" element={<DistrictWiseLeaveTypeReport/>}/>
            <Route path="teacher-wise-details-reports" element={<TeacherWiseDetailsReports/>}/>
            <Route path="view-leave-request" element={<ViewLeaveRequest/>}/>
            <Route path="leave-history-report" element={<LeaveHistoryReport/>}/>
        </Routes>
    )
}