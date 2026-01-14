import { Route, Routes } from "react-router-dom";
import VTPRegistration from "./AddVTPRegistration";
import VocationalTeacherRegistration from "./VocationalTeacherRegistration";

export default function Registration(){
    return(
        <Routes>
            <Route path="add-vtp-registration" element={<VTPRegistration/>}/>
            <Route path="vocational-teacher-registration" element={<VocationalTeacherRegistration/>}/>
        </Routes>
    )
}