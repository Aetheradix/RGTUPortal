import { Navigate, Route, Routes } from 'react-router-dom';
import SectionMaster from './SectionMaster';
import OptionalHeadValueMaster from './OptionalHeadValueMaster';
import FixedHeadValueMaster from './FixedHeadValueMaster';
import AllEmployeeHeadWiseMaster from './AllEmployeeHeadWiseMaster';
import LoanMasterData from './LoanMasterData';
import PolicyMasterData from './PolicyMasterData';
import ChallanDetailsMasterData from './ChallanDetailsMasterData';
import SchemeDepartmentMaster from '../scheme-master/SchemeDepartmentMaster';

export default function PayrollMaster() {
  return (
    <Routes>
      <Route index element={<Navigate to="section-master" replace />} />

      <Route path="section-master" element={<SectionMaster />} />
      <Route
        path="self-earning-deduction-optional-head-value"
        element={<OptionalHeadValueMaster />}
      />
      <Route
        path="self-earning-deduction-fixed-head-value"
        element={<FixedHeadValueMaster />}
      />
      <Route
        path="all-earning-all-employee-wise-head-wise"
        element={<AllEmployeeHeadWiseMaster />}
      />
      <Route path="loan-master" element={<LoanMasterData />} />
      <Route path="policy-master" element={<PolicyMasterData />} />
      <Route path="challan-details-master" element={<ChallanDetailsMasterData />} />
      <Route path="scheme-department-master" element={<SchemeDepartmentMaster />} />

      <Route path="*" element={<Navigate to="section-master" replace />} />
    </Routes>
  );
}


