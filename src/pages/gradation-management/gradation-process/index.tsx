import { Route, Routes } from "react-router-dom"
import EmployeeGradation from "./EmployeeGradation"

export default function GradationProcess(){
    return(
        <Routes>
            <Route path="employee-gradation" element={<EmployeeGradation/>} />
        </Routes>
    )
}