import { Route, Routes } from "react-router-dom";
import AddInfrastructureDetails from "./AddInfrastructureDetails";

export default function AddInfrastructure(){
    return(
        <Routes>
            <Route path="add-infrastructure-details" element={<AddInfrastructureDetails/>} />
        </Routes>
    )
}