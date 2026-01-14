import { Route, Routes } from "react-router-dom";
import AboutTour from "./AboutTour";
import ApproveTour from "./TourApprove";
import ApplyTour from "./TourApply";
import TourReport from "./TourReport";

export default function Tour(){
    return (
        <Routes>
            <Route path="about-tour" element={<AboutTour />} />
            <Route path="tour-approve" element={<ApproveTour />} />
            <Route path="tour-apply" element={<ApplyTour />} />
            <Route path="tour-report" element={<TourReport />} />
        </Routes>
    )
}