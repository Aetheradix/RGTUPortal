import { Route, Routes } from "react-router-dom";
import Infrastructuree from "./Infrastructure";

export default function Infrastructure(){
    return(
        <Routes>
            <Route path="Infrastructure" element={<Infrastructuree/>} />
        </Routes>
    )
}