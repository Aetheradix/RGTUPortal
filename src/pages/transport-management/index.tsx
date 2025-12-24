import { Route, Routes } from "react-router-dom";
import TransportManagementSystemRoutes from "./transport-management-system";
import UniversityManagementSystem from "./university-management-system";
import DriverAttenderRoutes from "./driver-attender-process";
import ParentProcess from "./parent-process";
import GeteKeeperTransportRoutes from "./gatekeeper-transport-system";

export default function TransportManagementSYS(){
    return (
        <Routes>
            <Route path="transport-management-system/*" element={<TransportManagementSystemRoutes/>}/>
            <Route path="university-management-system/*" element={<UniversityManagementSystem/>}/>
            <Route path="driver-attender-process/*" element={<DriverAttenderRoutes/>}/>
            <Route path="parent-process/*" element={<ParentProcess/>}/>
            <Route path="gatekeeper-transport-system/*" element={<GeteKeeperTransportRoutes/>}/>
        </Routes>
    )
}