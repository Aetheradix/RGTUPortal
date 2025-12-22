import { Route, Routes } from 'react-router-dom';
import GenerateMigrationCertificate from './GenerateMigrationCertificate';
import GenerateTC from './GenerateTC';
import PrintMigrationCertificate from './PrintMigrationCertificate';
import PrintTC from './PrintTC';
import StudentDetail from './StudentDetail';
import StudentPromotionTC from './StudentPromotionTC';
import StudentRegistration from './StudentRegistration';

export default function StudentDirectory() {
  return (
    <Routes>
        <Route path="student-registration" element={<StudentRegistration />} />
        <Route path="detail" element={<StudentDetail />} />
        <Route path="promotion-tc" element={<StudentPromotionTC />} />
        <Route path="generate-tc" element={<GenerateTC />} />
        <Route path="print-tc" element={<PrintTC />} />
        <Route path="generate-migration-certificate" element={<GenerateMigrationCertificate />} />
        <Route path="print-migration" element={<PrintMigrationCertificate />} />
    </Routes>
  );
}
    