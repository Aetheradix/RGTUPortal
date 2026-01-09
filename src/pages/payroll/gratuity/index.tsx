import { Route, Routes } from "react-router-dom";
import GratuityFile from "./GratuityFile";

export default function Gratuity(){
    return(
        <Routes>
            <Route path="gratuity-file/*" element={<GratuityFile/>}/>
        </Routes>
    )
}