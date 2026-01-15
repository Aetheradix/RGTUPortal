import { Route, Routes } from "react-router-dom";
import DistrictWiseInfrastructureReport from "./DistrictWiseInfrastructureReport";
import InfrastructureReportt from "./InfrastructureReport";

export default function InfrastructureReport(){
    return(
        <Routes>
            <Route path="district-wise-infrastructure-report" element={<DistrictWiseInfrastructureReport/>} />
            <Route path="infrastructure-report" element={<InfrastructureReportt/>} />
        </Routes>
    )
}