import { Route, Routes } from "react-router-dom";
import StudentRegistrationForm from "./StudentRegistration";
import ProfileLock from "./ProfileLock";

export default function StudentRegistration() {
  return (
    <Routes>
      <Route path="registration/" element={<StudentRegistrationForm />} />
      <Route path="profile-lock/" element={<ProfileLock />} />
    </Routes>
  );
}
