import { Route, Routes } from "react-router-dom";
import EmployeeEServiceBook from "./EServiceBook";
import EServiceBookReport from "./EServiceBookReport";

export default function EServiceBook (){
    return (
        <Routes>
            <Route path="e-service-book" element={<EmployeeEServiceBook />} />
            <Route path="e-service-book-report" element={<EServiceBookReport />} />
        </Routes>
    )
    
}