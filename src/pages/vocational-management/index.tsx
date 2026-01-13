import { Route, Routes } from "react-router-dom";
import VocationalMaster from "./vocational-master";
import Registration from "./registration";
import CertificateDistribution from "./certificate-distribution";
import VocationalManagementReport from "./vocational-management-reports";
import VocationalActivityMapping from "./vocational-activity-and-mapping";
import VocationalPayment from "./vocational-payment";


export default function VocationalManagement(){
    return(
         <Routes>
      <Route path="vocational-master/*" element={<VocationalMaster/>} />
      <Route path="registration/*" element={<Registration/>} />
      <Route path="certificate-distribution/*" element={<CertificateDistribution/>} />
      <Route path="vocational-management-reports/*" element={<VocationalManagementReport/>} />
      <Route path="vocational-activity-and-mapping/*" element={<VocationalActivityMapping/>} />
      <Route path="vocational-payment/*" element={<VocationalPayment/>} />
    </Routes>
    )
}