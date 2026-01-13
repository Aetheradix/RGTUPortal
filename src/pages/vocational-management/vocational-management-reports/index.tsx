import { Route, Routes } from "react-router-dom";
import VocationalTeacherClassMappingReport from "./VocationalTeacherClassMappingReport";
import VocationalCertificateDistributionReport from "./VocationalCertificateDistributionReport";
import DistrictWiseVocationalCertificateDistribution from "./DistrictWiseVocationalCertificateDistribution";

export default function VocationalManagementReport(){
    return(
        <Routes>
            <Route path="vocational-teacher-class-mapping-report" element={<VocationalTeacherClassMappingReport/>}/>
            <Route path="vocational-certificate-distribution-report" element={<VocationalCertificateDistributionReport/>}/>
            <Route path="district-wise-vocational-certificate-distribution" element={<DistrictWiseVocationalCertificateDistribution/>}/>
        </Routes>
    )
}