import { Route, Routes } from "react-router-dom";
import Compassion from "./compassion";
import CompassionReport from "./compassion-report";

export default function CompassionManagement(){
    return(
        <>
        <Routes>
            <Route path="compassion/*" element={<Compassion/>}/>
            <Route path="compassion-report/*" element={<CompassionReport/>}/>
        </Routes>
        </>
    );
}