import { Route, Routes } from "react-router-dom";
import AllOrders from "./AllOrders";
import CircularOrder from "./CircularOrder";
import OrderMaster from "./OrderMaster";
import TenderMaster from "./TenderMaster";
import PhotoMaster from "./PhotoMaster";
import NewsMaster from "./NewsMaster";
import EventInformationMaster from "./EventInformationMaster";
import MessageInformationMaster from "./MessageInformationMaster";

export default function DashboardDisplayOrders() {
  return (
    <Routes>
      <Route path="all-orders/" element={<AllOrders />} />
      <Route path="circular-order/" element={<CircularOrder />} />
      <Route path="order-master/" element={<OrderMaster />} />
      <Route path="tender-master/" element={<TenderMaster />} />
      <Route path="photo-master/" element={<PhotoMaster />} />
      <Route path="news-master/" element={<NewsMaster />} />
      <Route path="event-master/" element={<EventInformationMaster />} />
      <Route
        path="message-information-master/"
        element={<MessageInformationMaster />}
      />
    </Routes>
  );
}
