import { Route, Routes } from 'react-router-dom';
import StudyMaterialMaster from './AddStudyMaterials';
import SavedNotesAndVideos from './SavedNotesAndVideos';
import ViewStudyMaterials from './ViewStudyMaterials';

export default function SyllabusAndStudyMaterial() {
  return (
    <Routes>
      <Route path="study-material-list/*" element={<StudyMaterialMaster />} />
      <Route path="saved-notes-and-videos/*" element={<SavedNotesAndVideos />} />
      <Route path="view-study-materials/*" element={<ViewStudyMaterials />} />
    </Routes>
  );
}
