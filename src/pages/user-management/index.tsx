import { Route, Routes } from "react-router-dom";
import Master from "./master";
export default function UserManagement(){
    return (
        <Routes>
            <Route path="Master/*" element={<Master/>}/>
        </Routes>
    )
}