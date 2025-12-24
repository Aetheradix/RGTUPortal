import { Route, Routes } from "react-router-dom";
import EChallanProcess from "./EChallanProcess";
import CheckVehicleDetails from "./CheckVehicleDetails";

export default function GeteKeeperTransportRoutes(){
    return(
        <Routes>
            <Route path="e-challan-process" element={<EChallanProcess />} />
            <Route path="check-vehicle-details" element={<CheckVehicleDetails />} />
        </Routes>
    )
}