import { Route, Routes } from "react-router-dom"
import EmployeeRetirementReport from "./EmployeeRetirementReport"
import UpcomingRetirementReport from "./UpcomingRetirementReport"

export default function RetirementSeparationReport(){
    return(
        <Routes>
            <Route path="employee-retirement-report" element={<EmployeeRetirementReport/>}/>
            <Route path="upcoming-retirement-report" element={<UpcomingRetirementReport/>}/>
        </Routes>
    )
}