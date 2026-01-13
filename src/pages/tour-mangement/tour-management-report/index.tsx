import { Route, Routes } from "react-router-dom";
import TourReport from "./TourReport";
export default function TourManagementReport(){
    return (
        <Routes>
            <Route path="report" element={<TourReport/>}/>
        </Routes>
    )
}