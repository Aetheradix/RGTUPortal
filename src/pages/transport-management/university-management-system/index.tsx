import { Route, Routes } from "react-router-dom";
import RouteRegistration from "./RouteRegistration";

export default function UniversityManagementSystem(){
    return (
        <Routes>
            <Route path="route-registration" element={<RouteRegistration/>}/>
        </Routes>
    )
}