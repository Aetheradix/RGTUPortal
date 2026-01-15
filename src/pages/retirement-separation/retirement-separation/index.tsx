import { Route, Routes } from "react-router-dom"
import EmployeeRetirementOrSeparation from "./RetirementOrSeparation"
import GenerateOrder from "./GenerateOrder"

export default function RetirementSeparationn(){
    return(
        <Routes>
            <Route path="employee-retirement-Or-separation" element={<EmployeeRetirementOrSeparation/>} />
            <Route path="generate-order" element={<GenerateOrder/>} />
        </Routes>
    )
}