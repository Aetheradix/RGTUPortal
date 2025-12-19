import { Route, Routes } from "react-router-dom";
import VehicleMaintenance from "./VehicleMaintenance";
import VehicleAllotment from "./VehicleAllotment";
import VehicaleMaintenanceType from "./VehicleMaintenanceTypeMaster";
import VehicleRegistration from "./VehicleRegistration";
import VehicleInsurance from "./VehicleInsurance";
import VehicleDeallocationTransfer from "./VehicleDeallocationTransfer";
import VehicleDispose from "./VehicleDispose";
import VehicleMaintenanceApproval from "./VehicleMaintenanceApproval";
import VehicleMaintenanceRequest from "./VehicleMaintenanceRequest";

export default function TransportManagementSystemRoutes(){
    return(
        <Routes>            
            <Route path="vehicle-maintenance-type-master" element={<VehicaleMaintenanceType/>}/>
            <Route path="vehicle-registration" element={<VehicleRegistration/>}/>
            <Route path="vehicle-maintenance" element={<VehicleMaintenance/>}/>
            <Route path="vehicle-allotment" element={<VehicleAllotment/>}/>
            <Route path="vehicle-insurance" element={<VehicleInsurance/>}/>
            <Route path="vehicle-deallocation-transfer" element={<VehicleDeallocationTransfer/>}/>
            <Route path="vehicle-dispose" element={<VehicleDispose/>}/>
            <Route path="vehicle-maintenance-request" element={<VehicleMaintenanceRequest/>}/>
            <Route path="vehicle-maintenance-approval" element={<VehicleMaintenanceApproval/>}/>
            </Routes>
    )
}