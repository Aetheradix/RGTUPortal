import { Navigate, Route, Routes } from 'react-router-dom';
import ViewAllocationStatus from './ViewAllocationStatus';
import AcceptRejectAllocation from './AcceptRejectAllocation';
import AllocationReport from './AllocationReport';
import SeatAcceptanceQuota from './ReservedCategoriesQuota';
import SetCategoryQuota from './SetCategoriesQuotaPercentages';
import ViewAvailableSeats from './ViewAvailableSeats';
import SeatAllocationPerCourse from './SeatAllocationperCourse';
import SeatAcceptanceWindow from './SeatAcceptanceWindow';


export default function 
SeatAllocationSubModule() {
  return (
    <Routes>
      <Route index element={<Navigate to="view-allocation-status" replace />} />
      <Route path="view-allocation-status" element={<ViewAllocationStatus />} />
      <Route path="accept-reject-allocation" element={<AcceptRejectAllocation />} />
      <Route path="allocation-report" element={<AllocationReport />} />
      <Route path="reserved-categories-quota" element={<SeatAcceptanceQuota />} />
      <Route path="set-categories-quota-percentages" element={<SetCategoryQuota />} />
      <Route path="view-available-seats" element={<ViewAvailableSeats />} />
      <Route path="seat-allocation-per-course" element={<SeatAllocationPerCourse />} />
      <Route path="seat-acceptance-window" element={<SeatAcceptanceWindow />} />
      <Route path="*" element={<Navigate to="view-allocation-status" replace />} />
    </Routes>
  );
}

