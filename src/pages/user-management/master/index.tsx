import { Route, Routes } from "react-router-dom";
import CreateUserType from "./CreateUserType";
import CreateUserLevel from "./CreateUserLevel";
import ModuleMapping from "./ModuleMapping";
import MainMenuCreation from "./MainMenuCreation";
export default function Master(){
    return (
        <Routes>
            <Route path="create-user-type" element={<CreateUserType/>}/>
            <Route path="create-user-level" element={<CreateUserLevel/>}/>
            <Route path="module-mapping" element={<ModuleMapping/>}/>
            <Route path="main-menu-creation" element={<MainMenuCreation/>}/>
        </Routes>
    )
}