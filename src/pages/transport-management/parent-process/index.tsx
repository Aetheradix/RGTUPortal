import { Route, Routes } from "react-router-dom";
import InformToStudent from "./InformtoStudent";
import BusRouteDetails from "./BusRouteDetails";
import PickupDropDetails from "./PickupDropDetails";

export default function ParentProcess(){
    return(
        <Routes>
            <Route path="inform-to-student" element={<InformToStudent/>}/>
            <Route path="bus-route-details" element={<BusRouteDetails/>}/>
            <Route path="pickup-drop-details" element={<PickupDropDetails/>}/>
        </Routes>
    )
}