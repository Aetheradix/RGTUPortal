import { Route, Routes } from "react-router-dom";
import ViewRouteLocation from "./ViewRoutelocation";
import RouteDetails from "./RouteDetails";
import RouteWisePickupDrop from "./RouteWisePickupDrop";

export default function DriverAttenderRoutes(){
    return (
        <Routes>
            <Route path="view-route-location" element={<ViewRouteLocation/>}/>
            <Route path="route-details" element={<RouteDetails/>}/>
            <Route path="route-wise-pickup-drop" element={<RouteWisePickupDrop/>}/>
        </Routes>
    )
}