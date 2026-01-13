import { Route, Routes } from "react-router-dom";
import AboutUs from "./about-us";
import Infrastructure from "./infrastructure";
import Academic from "./academics";
import NationalAssessmentAndAccreditionCouncil from "./national-assessment-and-accredition-council";
import Others from "./others";
import Students from "./students";

export default function CmsPortal() {
  return (
    <Routes>
      <Route path="about-us/*" element={<AboutUs />} />
      <Route path="academics/*" element={<Academic />} />
      <Route path="infrastructure/*" element={<Infrastructure />} />
      <Route path="students/*" element={<Students />} />
      <Route
        path="national-assessment-and-accredition-council/*"
        element={<NationalAssessmentAndAccreditionCouncil />}
      />
      <Route path="others/*" element={<Others />} />
    </Routes>
  );
}
