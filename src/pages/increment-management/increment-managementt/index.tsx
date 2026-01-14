import { Route, Routes } from "react-router-dom"
import AddIncrement from "./AddIncrement"
import IncrementReport from "./IncrementReport"

export default function IncrementManagementt(){
    return(
        <Routes>
            <Route path="add-increment" element={<AddIncrement/>}/>
            <Route path="increment-report" element={<IncrementReport/>}/>
        </Routes>
    )
}
