import { Route, Routes } from "react-router-dom";
import EarningAndDeduction from "./EarningAndDeduction";

export default function PayrollBaselineData(){
    return(
        <Routes>
            <Route path="earning-and-deduction/*" element={<EarningAndDeduction/>}/>
        </Routes>
    )
}