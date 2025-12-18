import { Route, Routes } from 'react-router-dom';
import Registrationform from './registration-form';
import UploadDocument from './upload-document';



export default function Admissonmanagementsystem() {
  return (
    <Routes>
      <Route path="registration-form/*" element={< Registrationform/>} />
      <Route path="upload-document/*" element={< UploadDocument/>} />
    
    </Routes>
  );
}
