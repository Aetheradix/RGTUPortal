import { Route, Routes } from "react-router-dom";
import Billpaymentpro from "./bill-payment-process";
import Busdriveandattenderproc from "./bus-driver-and-attender-process";
import Gatekeeperpro from "./gate-keeper-process";
import Parentpro from "./parent-process";
import TranMaster from "./transport-master";
import TranReges from "./transport-registration";
import TranRegreport from "./transport-report";


export default function TransportMgm(){
    return (
        <Routes>
            <Route path="bill-payment-process/*" element={<Billpaymentpro/>}/>
            <Route path="bus-driver-and-attender-process/*" element={<Busdriveandattenderproc/>}/>
            <Route path="gate-keeper-process/*" element={<Gatekeeperpro/>}/>
            <Route path="parent-process/*" element={<Parentpro/>}/>
            <Route path="transport-master/*" element={<TranMaster/>}/>
            <Route path="transport-registration/*" element={<TranReges/>}/>
            <Route path="transport-report/*" element={<TranRegreport/>}/>
        </Routes>
    )
}