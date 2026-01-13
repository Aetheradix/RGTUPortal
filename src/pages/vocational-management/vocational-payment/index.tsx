import { Route, Routes } from "react-router-dom";
import VTPPayment from "./VTPPayment";
import VTPPaymentGenerate from "./VTPPaymentGenerate";
import VTPPaymentStatus from "./VTPPaymentStatus";

export default function VocationalPayment(){
    return(
         <Routes>
      <Route path="vtp-payment" element={<VTPPayment/>} />
      <Route path="vtp-payment-generate" element={<VTPPaymentGenerate/>} />
      <Route path="vtp-payment-status" element={<VTPPaymentStatus/>} />
    </Routes>
    )
}
    