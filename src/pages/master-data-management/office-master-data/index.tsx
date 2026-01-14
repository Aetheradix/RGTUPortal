import { Route, Routes } from "react-router-dom";
import OfficeTypeMaster from "./OfficeTypeMaster";
import SchoolTypeMaster from "./SchoolTypeMaster";
import SchoolManagementGroupMaster from "./SchoolManagementGroup";
import ManagementGroupDetailMaster from "./ManagementGroupDetail";
import SchoolBoardMaster from "./SchoolBoardMaster";
import SchoolCategoryMaster from "./SchoolCategoryMaster";
import SchoolSubCategoryMaster from "./SchoolSubCategoryDetails";
import SchoolInchargeTypeMaster from "./SchoolInchargeMaster";
import SchoolMediumMaster from "./SchoolMediumMaster";
import SubjectMaster from "./SubjectMasterData";
import SpecialSchoolMaster from "./SpecialSchoolMasterData";
import SchoolClassNameMaster from "./SchoolClassNameMaster";
import JSKMaster from "./JSKMasterData";
import ClassToSubjectMaster from "./ClassToSubjectMaster";
import SchoolMappingMaster from "./SchoolSubCategoryToClassMapping";
import DesignationMappingMaster from "./OfficeLevelToDesignationMapping";

export default function OfficeMaster() {
  return (
    <Routes>
      <Route path="office-type/" element={<OfficeTypeMaster />} />
      <Route path="school-type/" element={<SchoolTypeMaster />} />
      <Route
        path="school-management-group/"
        element={<SchoolManagementGroupMaster />}
      />
      <Route
        path="/management-detail"
        element={<ManagementGroupDetailMaster />}
      />
      <Route path="/school-board" element={<SchoolBoardMaster />} />
      <Route path="/school-category" element={<SchoolCategoryMaster />} />
      <Route
        path="/school-sub-category"
        element={<SchoolSubCategoryMaster />}
      />
      <Route path="/incharge-type" element={<SchoolInchargeTypeMaster />} />
      <Route path="/school-medium" element={<SchoolMediumMaster />} />
      <Route path="/subject-master" element={<SubjectMaster />} />
      <Route path="/special-school" element={<SpecialSchoolMaster />} />
      <Route path="/class-name" element={<SchoolClassNameMaster />} />
      <Route path="/jsk-master" element={<JSKMaster />} />
      <Route path="/class-to-subject" element={<ClassToSubjectMaster />} />
      <Route path="/sub-category-mapping" element={<SchoolMappingMaster />} />
      <Route
        path="/designation-mapping"
        element={<DesignationMappingMaster />}
      />
    </Routes>
  );
}
