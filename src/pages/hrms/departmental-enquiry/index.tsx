import { Route, Routes } from "react-router-dom";
import AboutDepartmentEnquiry from "./AboutDepartmentalEnquiry";
import AddDepartmentEnquiry from "./AddDepartmentalEnquiry";
import DepartmentEnquiryList from "./DepartmentalEnquiryList";
import DepartmentalEnquiryReport from "./DepartmentalEnquiryReport";

export default function DepartmentalEnquiry(){
    return(
        <Routes>
            <Route path="about-departmental-enquiry" element={<AboutDepartmentEnquiry />} />
            <Route path="add-departmental-enquiry" element={<AddDepartmentEnquiry />} />
            <Route path="departmental-enquiry-list" element={<DepartmentEnquiryList />} />
            <Route path="departmental-enquiry-report" element={<DepartmentalEnquiryReport />} />
        </Routes>
    )
}