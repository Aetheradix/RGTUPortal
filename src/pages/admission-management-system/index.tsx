import { Route, Routes } from 'react-router-dom';
import Registrationform from './registration-form';
import UploadDocument from './upload-document';
import Choicefilling from './choices-filling';
import Documentvarificationmaster from './document-verification';



export default function Admissonmanagementsystem() {
  return (
    <Routes>
      <Route path="registration-form/*" element={< Registrationform/>} />
      <Route path="upload-document/*" element={< UploadDocument/>} />
      <Route path="choices-filling/*" element={< Choicefilling/>} />
      <Route path="document-verification/*" element={< Documentvarificationmaster/>} />
    
    </Routes>
  );
}
