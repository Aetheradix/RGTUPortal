import { Route, Routes } from "react-router-dom";
import AnukampaAppointment from "./AnukampaAppointmentHome";
import PrintAnukampaAppointmentApplication from "./PrintStatusAnukampaAppointmentApplication";
import ApplyForAnukampaAppointment from "./ApplyAnukampaAppointment";


export default function EmployeeAnukampaApplication(){
    return (
        <Routes>
            <Route path="anukampa-appointment-home" element={<AnukampaAppointment />} />
            <Route path="print-status-anukampa-appointment-application" element={<PrintAnukampaAppointmentApplication />} />
            <Route path="apply-anukampa-appointment" element={<ApplyForAnukampaAppointment />} />
        </Routes>
    )
}