import { Route } from 'react-router-dom';
import AboutVoluntaryMutualTransfer from '../../../pages/hrms/transfer-request/AboutVoluntaryMutualTransfer';
import ApplyVoluntaryTransfer from '../../../pages/hrms/transfer-request/ApplyVoluntaryTransfer';
import ApplyMutualTransfer from '../../../pages/hrms/transfer-request/ApplyMutualTransfer';
import PrintDraftApplication from '../../../pages/hrms/transfer-request/PrintDraftApplication';
import LockApplication from '../../../pages/hrms/transfer-request/LockApplication';

export const transferRequestRoutes = (
  <>
    <Route path="about-voluntary-mutual-transfer" element={<AboutVoluntaryMutualTransfer />} />
    <Route path="apply-voluntary-transfer" element={<ApplyVoluntaryTransfer />} />
    <Route path="apply-mutual-transfer" element={<ApplyMutualTransfer />} />
    <Route path="print-draft-application" element={<PrintDraftApplication />} />
    <Route path="lock-application" element={<LockApplication />} />
  </>
);
