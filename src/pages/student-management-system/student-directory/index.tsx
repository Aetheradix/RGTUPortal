import { Route, Routes } from 'react-router-dom';
import StudentRegistration from './StudentRegistration';
import StudentDetail from './StudentDetail';
import StudentPromotionTC from './StudentPromotionTC';
import GenerateTC from './GenerateTC';
import PrintTC from './PrintTC';
import GenerateMigrationCertificate from './GenerateMigrationCertificate';
import PrintMigrationCertificate from './PrintMigrationCertificate';

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
    