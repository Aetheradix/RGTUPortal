import { Route, Routes } from "react-router-dom"
import IncrementManagementt from "./increment-managementt"

export default function IncrementManagement(){
    return(
        <Routes>
            <Route path="increment-managementt/*" element={<IncrementManagementt/>}/>
        </Routes>
    )
}