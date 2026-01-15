import { Route, Routes } from "react-router-dom"
import GradationProcess from "./gradation-process"

export default function GradationManagement(){
    return(
        <Routes>
            <Route path="gradation-process/*" element={<GradationProcess/>}/>
        </Routes>
    )
}