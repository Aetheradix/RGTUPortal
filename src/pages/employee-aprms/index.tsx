import { Route, Routes } from "react-router-dom";
import EmployeeAPRMS from "./aprms";

export default function APRMS(){
    return (
        <Routes>
            <Route path="employee-aprms/*" element={<EmployeeAPRMS/>}/>
        </Routes>
    )
}