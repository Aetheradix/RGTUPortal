import { Route, Routes } from "react-router-dom";
import TransportManagementSystemRoutes from "./transport-management-system";
import UniversityManagementSystem from "./university-management-system";

export default function TransportManagementSYS(){
    return (
        <Routes>
            <Route path="transport-management-system/*" element={<TransportManagementSystemRoutes/>}/>
            <Route path="university-management-system/*" element={<UniversityManagementSystem/>}/>
        </Routes>
    )
}