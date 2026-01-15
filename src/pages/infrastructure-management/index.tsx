import { Route, Routes } from "react-router-dom";
import AddInfrastructure from "./add-infrastructure";
import Infrastructure from "./infrastructure";
import InfrastructureMaster from "./infrastructure-master";
import InfrastructureReport from "./infrastructure-report";

export default function InfrastructureManagement(){
    return(
        <Routes>
             <Route path="add-infrastructure/*" element={<AddInfrastructure />} />
             <Route path="infrastructure/*" element={<Infrastructure />} />
             <Route path="infrastructure-master/*" element={<InfrastructureMaster />} />
             <Route path="infrastructure-report/*" element={<InfrastructureReport />} />
        </Routes>
    )
}