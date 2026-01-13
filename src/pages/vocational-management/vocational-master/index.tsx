import { Route, Routes } from "react-router-dom";
import VocationalTradeMaster from "./VocationalTradeMaster";
import JobRoleMaster from "./JobRoleMaster";
import VocationalSchemeMaster from "./VocationalSchemeMaster";

export default function VocationalMaster(){
    return(
         <Routes>
      <Route path="vocational-trade-master" element={<VocationalTradeMaster/>} />
      <Route path="job-role-master" element={<JobRoleMaster/>} />
      <Route path="vocational-scheme-master" element={<VocationalSchemeMaster/>} />
    </Routes>
    )
}