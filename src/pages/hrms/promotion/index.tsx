import { Route, Routes } from "react-router-dom";
import PromotionProcess from "./PromotionProcess";
import GeneratePromotionOrder from "./PromotionOrder";
import PrintPromotionOrder from "./PromotionWithTransferReport";
import PromotionOrderReport from "./PromotionOrderReport";
import CancelPromotionOrder from "./PromotionHoldOrders";

export default function Promotion(){
    return (
        <Routes>
           <Route path="promotion-process" element={<PromotionProcess />} />
           <Route path="promotion-order" element={<GeneratePromotionOrder />} />
           <Route path="promotion-with-transfer-report" element={<PrintPromotionOrder />} />
           <Route path="promotion-order-report" element={<PromotionOrderReport />} />
           <Route path="promotion-hold-orders" element={<CancelPromotionOrder />} />
        </Routes>
    )
}