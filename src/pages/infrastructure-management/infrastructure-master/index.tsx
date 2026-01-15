import { Route, Routes } from "react-router-dom";
import InfrastructureMasterr from "./InfrastructureMaster";

export default function InfrastructureMaster(){
    return(
        <Routes>
            <Route path="infrastructure-master" element={<InfrastructureMasterr/>} />
        </Routes>
    )
}