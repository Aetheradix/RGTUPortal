import { Route, Routes } from "react-router-dom";
import AboutCancelTransferOrder from "./AboutCancelTransferOrder";
import CancelTransferOrderr from "./CancelTransferOrder";
import PrintCancelTransferOrder from "./PrintCancelTransferOrder";
import CancelTransferReport from "./Report";

export default function CancelTransferOrder(){
    return (
        <Routes>
            <Route path="about-cancel-transfer-order" element={<AboutCancelTransferOrder/>} />
            <Route path="cancel-transfer-order" element={<CancelTransferOrderr/>} />
            <Route path="print-cancel-transfer-order" element={<PrintCancelTransferOrder/>} />
            <Route path="report" element={<CancelTransferReport/>} />
        </Routes>
    )
}