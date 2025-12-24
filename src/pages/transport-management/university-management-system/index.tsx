import { Route, Routes } from "react-router-dom";
import RouteRegistration from "./RouteRegistration";
import BusStopRegistration from "./BusStopRegistration";
import RouteToBusStopMapping from "./RouteToBusStopMapping";
import DriverAttenderRegistration from "./Driver_AttenderRegistration";
import DriverAttenderLeaveEntry from "./Driver_AttenderLeaveEntry";
import RouteToVehicleMapping from "./RouteToVehicleMapping";
import BusStopEnrollment from "./BusStopEnrollment";
import DriverAttenderRouteDetails from "./Driver_AttenderRouteDetails";

export default function UniversityManagementSystem(){
    return (
        <Routes>
            <Route path="route-registration" element={<RouteRegistration/>}/>
            <Route path="bus-stop-registration" element={<BusStopRegistration/>}/>
            <Route path="route-to-bus-stop-mapping" element={<RouteToBusStopMapping/>}/>
            <Route path="driver-attender-registration" element={<DriverAttenderRegistration/>}/>
            <Route path="driver-attender-leave-entry" element={<DriverAttenderLeaveEntry/>}/>
            <Route path="route-to-vehicle-mapping" element={<RouteToVehicleMapping/>}/>
            <Route path="bus-stop-enrollment" element={<BusStopEnrollment/>}/>
            <Route path="driver-attender-route-details" element={<DriverAttenderRouteDetails/>}/>

        </Routes>
    )
}