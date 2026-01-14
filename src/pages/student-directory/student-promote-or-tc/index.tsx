import { Route, Routes } from "react-router-dom";
import PrintTC from "./PrintTc";
import GenerateTC from "./GenerateTc";
import StudentPromotionTC from "./StudentPromoteInNextClass";
import GenerateMigration from "./GenerateMigrationCertificate";
import PrintMigration from "./PrintMigration";

export default function StudentPromoteOrTc() {
  return (
    <Routes>
      <Route path="print-tc-list/" element={<PrintTC />} />
      <Route path="generate-tc/" element={<GenerateTC />} />
      <Route path="promote-student/" element={<StudentPromotionTC />} />
      <Route path="generate-migration/" element={<GenerateMigration />} />
      <Route path="print-migration/" element={<PrintMigration />} />
    </Routes>
  );
}
