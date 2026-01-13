import { Route, Routes } from "react-router-dom";
import VocationalCertificateDistributionGoogleLink from "./VocationalCertificateDistributionGooglelink";
import VocationalCertificateDownload from "./VocationalCertificateDownload";

export default function CertificateDistribution(){
    return (
        <Routes>
            <Route path="vocational-certificate-distribution-google-link" element={<VocationalCertificateDistributionGoogleLink/>}/>
            <Route path="vocational-certificate-download" element={<VocationalCertificateDownload/>}/>
        </Routes>
    )
}