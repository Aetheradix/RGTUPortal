import { Route, Routes } from "react-router-dom";
import ApplyTour from "./ApplyTour";
import ApproveTour from "./ApproveTour";
export default function TourManagement(){
    return (
        <Routes>
            <Route path="apply-tour" element={<ApplyTour/>}/>
            <Route path="approve-tour" element={<ApproveTour/>}/>
        </Routes>
    )
}