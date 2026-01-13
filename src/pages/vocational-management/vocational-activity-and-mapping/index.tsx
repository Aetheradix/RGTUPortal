import {  Route, Routes } from "react-router-dom"
import VocationalTeacherClassMapping from "./VocationalTeacherClassMapping"
import VocationalStudentActivity from "./VocationalStudentActivity"

export default function VocationalActivityMapping(){
    return(
        <Routes>
            <Route path="vocational-teacher-class-mapping" element={<VocationalTeacherClassMapping/>} />
            <Route path="vocational-student-activity" element={<VocationalStudentActivity/>} />
        </Routes>
    )
}