import { Route, Routes } from "react-router-dom";
import LeaveEncashments from "./LeaveEncashments";

export default function LeaveEncashment(){
    return(
        <Routes>
            <Route path="leave-encashments/*" element={<LeaveEncashments/>}/>
        </Routes>
    )
}