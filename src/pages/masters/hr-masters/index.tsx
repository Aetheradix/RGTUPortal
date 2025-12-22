import { Navigate, Route, Routes } from 'react-router-dom';
import PostMasterData from './PostMasterData';
import ClassMasterData from './ClassMasterData';
import DesignationTypeMaster from './DesignationTypeMaster';
import DesignationMasterData from './DesignationMasterData';
import SectionMasterData from './SectionMasterData';
import PayCommissionMasterData from './PayCommissionMasterData';
import PayScaleMasterData from './PayScaleMasterData';
import GradePayMasterData from './GradePayMasterData';
import LevelMasterData from './LevelMasterData';
import LevelBasicPayMasterData from './LevelBasicPayMasterData';
import AppointmentDepartmentMasterData from './AppointmentDepartmentMasterData';
import BloodMasterData from './BloodMasterData';
import ReligionMasterData from './ReligionMasterData';
import CasteMasterData from './CasteMasterData';
import QualificationMasterData from './QualificationMasterData';
import MasterPlaceholderPage from '../shared/MasterPlaceholderPage';

export default function HRMaster() {
  return (
    <Routes>
      {/* Default route inside /masters/hr-master-data */}
      <Route index element={<Navigate to="post-master-data" replace />} />

      {/* HR Master Data screens */}
      <Route path="post-master-data" element={<PostMasterData />} />
      <Route path="class-master-data" element={<ClassMasterData />} />
      <Route path="designation-type-master" element={<DesignationTypeMaster />} />
      <Route path="designation-master" element={<DesignationMasterData />} />
      <Route path="section-master" element={<SectionMasterData />} />
      <Route path="pay-commission-master" element={<PayCommissionMasterData />} />
      <Route path="pay-scale-master" element={<PayScaleMasterData />} />
      <Route path="grade-pay-master" element={<GradePayMasterData />} />
      <Route path="level-master" element={<LevelMasterData />} />
      <Route path="level-basic-pay-master" element={<LevelBasicPayMasterData />} />
      <Route
        path="appointment-department-master"
        element={<AppointmentDepartmentMasterData />}
      />
      <Route path="blood-master" element={<BloodMasterData />} />
      <Route path="religion-master" element={<ReligionMasterData />} />
      <Route path="caste-master" element={<CasteMasterData />} />
      <Route path="qualification-master" element={<QualificationMasterData />} />
      <Route
        path="designation-master"
        element={<MasterPlaceholderPage title="Designation Master Data" />}
      />
      <Route
        path="section-master"
        element={<MasterPlaceholderPage title="Section Master Data" />}
      />
      <Route
        path="pay-commission-master"
        element={<MasterPlaceholderPage title="Pay Commission Master Data" />}
      />
      <Route
        path="pay-scale-master"
        element={<MasterPlaceholderPage title="Pay Scale Master Data" />}
      />
      <Route
        path="grade-pay-master"
        element={<MasterPlaceholderPage title="Grade Pay Master Data" />}
      />
      <Route
        path="level-master"
        element={<MasterPlaceholderPage title="Level Master Data" />}
      />
      <Route
        path="level-basic-pay-master"
        element={<MasterPlaceholderPage title="Level Basic Pay Master Data" />}
      />
      <Route
        path="appointment-department-master"
        element={<MasterPlaceholderPage title="Appointment Department Master Data" />}
      />
      <Route
        path="blood-master"
        element={<MasterPlaceholderPage title="Blood Master Data" />}
      />
      <Route
        path="religion-master"
        element={<MasterPlaceholderPage title="Religion Master Data" />}
      />
      <Route
        path="caste-master"
        element={<MasterPlaceholderPage title="Caste Master Data" />}
      />
      <Route
        path="qualification-master"
        element={<MasterPlaceholderPage title="Qualification Master Data" />}
      />
      <Route
        path="other-department-master"
        element={<MasterPlaceholderPage title="Other Department Master Data" />}
      />

      {/* Fallback inside HR masters */}
      <Route path="*" element={<Navigate to="post-master-data" replace />} />
    </Routes>
  );
}
