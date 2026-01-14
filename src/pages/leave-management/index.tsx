import { Route, Routes } from "react-router-dom";
import LeaveProcess from "./leave-process";
import LeaveReport from "./leave-report";

export default function LeaveManagement(){
    return(
        <Routes>
            <Route path="leave-process/*" element={<LeaveProcess />} />
            <Route path="leave-report/*" element={<LeaveReport />} />
        </Routes>
    )
}