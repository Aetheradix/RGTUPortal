import { Route, Routes } from "react-router-dom";
import ClassMaster from "./ClassMaster";
import DesignationTypeMaster from "./DesignationTypeMasterData";
import DesignationMaster from "./DesignationMaster";
import SectionMaster from "./SectionMaster";
import PayCommissionMaster from "./PayCommissionMasterData";
import PayScaleMaster from "./PayScaleMasterData";
import GradePayMaster from "./GradePayMasterData";
import LevelMaster from "./LevelMasterData";
import LevelBasicPayMaster from "./LevelBasicPayMasterData";
import AppointmentDepartmentMaster from "./AppointmentDepartmentMaster";
import BloodGroupMaster from "./BloodGroupMasterData";
import CasteMaster from "./CasteMasterData";
import QualificationMaster from "./QualificationMasterData";
import SubCasteMaster from "./SubCasteMasterData";
import OtherDepartmentMaster from "./OtherDepartmentMaster";
import PostMaster from "./PostMasterData";
import SubCategoryMappingMaster from "./SubCategoryToClassMapping";
import HandicappedTypeMaster from "./HandicappedTypeMaster";
import CriticalIllnessMaster from "./CriticalIllnessMaster";

export default function HRMaster() {
  return (
    <Routes>
      <Route path="class-master/" element={<ClassMaster />} />
      <Route path="designation-type/" element={<DesignationTypeMaster />} />
      <Route path="designation-master/" element={<DesignationMaster />} />
      <Route path="section-master/" element={<SectionMaster />} />
      <Route path="pay-commission/" element={<PayCommissionMaster />} />
      <Route path="pay-scale/" element={<PayScaleMaster />} />
      <Route path="grade-pay/" element={<GradePayMaster />} />
      <Route path="level-master/" element={<LevelMaster />} />
      <Route path="level-basic-pay/" element={<LevelBasicPayMaster />} />
      <Route
        path="appointment-dept/"
        element={<AppointmentDepartmentMaster />}
      />
      <Route path="caste-master/" element={<CasteMaster />} />
      <Route path="blood-group/" element={<BloodGroupMaster />} />
      <Route path="qualification/" element={<QualificationMaster />} />
      <Route path="sub-caste/" element={<SubCasteMaster />} />
      <Route path="other-dept/" element={<OtherDepartmentMaster />} />
      <Route path="post-master/" element={<PostMaster />} />
      <Route
        path="sub-cat-class-mapping/"
        element={<SubCategoryMappingMaster />}
      />
      <Route path="handicapped-type/" element={<HandicappedTypeMaster />} />
      <Route path="critical-illness/" element={<CriticalIllnessMaster />} />
    </Routes>
  );
}
