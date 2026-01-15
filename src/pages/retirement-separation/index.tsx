import { Route, Routes } from "react-router-dom"
import RetirementSeparationn from "./retirement-separation"
import RetirementSeparationReport from "./retirement-separation-report"

export default function RetirementSeparation(){
    return(
        <Routes>
            <Route path="retirement-separation/*" element={<RetirementSeparationn/>} />
            <Route path="retirement-separation-report/*" element={<RetirementSeparationReport/>} />
        </Routes>
    )
}