import { Route, Routes } from "react-router-dom";
import LeaveTypeMaster from "./LeaveType";
import LeaveStatus from "./LeaveStatus";
import LeaveAllocation from "./LeaveAllocation";
import DepartmentWiseLeaveApproval from "./DepartmentWiseLeaveApproval";
import ApplyLeave from "./ApplyLeave";
import BalanceLeave from "./BalanceLeave";
import LeaveApprover from "./LeaveApprover";
import EmployeeLeaveOpeningBalance from "./EmployeeLeaveOpeningBalance";

export default function LeaveProcess(){
    return(
    <Routes>
        <Route path="leave-type" element={<LeaveTypeMaster/>}/>
        <Route path="leave-status" element={<LeaveStatus/>}/>
        <Route path="leave-allocation" element={<LeaveAllocation/>}/>
        <Route path="department-wise-leave-approval" element={<DepartmentWiseLeaveApproval/>}/>
        <Route path="apply-leave" element={<ApplyLeave/>}/>
        <Route path="balance-leave" element={<BalanceLeave/>}/>
        <Route path="leave-approver" element={<LeaveApprover/>}/>
        <Route path="employee-leave-opening-balance" element={<EmployeeLeaveOpeningBalance/>}/>
    </Routes>
    )

}