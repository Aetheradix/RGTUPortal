import { Route, Routes } from "react-router-dom";
import AboutAutomaticTransferSystem from "./AboutAutomaticTransferSystem";
import GenerateTransfer from "./GenerateTransfer";

export default function AutomaticTransferSystem(){
    return(
        <Routes>
          <Route path="about-automatic-transfer-system" element={<AboutAutomaticTransferSystem />} />
          <Route path="generate-transfer" element={<GenerateTransfer />} />
        </Routes>
    )
}