import { Route, Routes } from "react-router-dom";
import TourManagement from "./tour-management";
import TourManagementReport from "./tour-management-report";
export default function TourManagementSystem(){
    return (
        <Routes>
            <Route path="tour-management/*" element={<TourManagement/>}/>
            <Route path="tour-report/*" element={<TourManagementReport/>}/>
        </Routes>
    )
}