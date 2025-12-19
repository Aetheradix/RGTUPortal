import { Route, Routes } from 'react-router-dom';
import ViewAttendanceRecords from '../attendance-management/ViewAttendanceRecords';
import MarkAttendance from './MarkAttendance';
import AttendancePolicyMaster from './AttendancePolicies';
import RequestLeaveMaster from './RequestLeave';
import AttendanceReport from './AttendanceReport';

export default function AttendanceManagement() {
  return (
    <Routes>
      <Route path="view-attendance-records" element={<ViewAttendanceRecords />} />
      <Route path="mark-attendance" element={<MarkAttendance />} />
      <Route path="attendance-policy-master" element={<AttendancePolicyMaster />} />
      <Route path="request-leave-master" element={<RequestLeaveMaster />} />
        <Route path="attendance-report" element={<AttendanceReport />} />
    </Routes>
  );
}
