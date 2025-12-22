import { Navigate, Route, Routes } from 'react-router-dom';
import EligibilityPage from './EligibilityPage';
import ApplicationProcessPage from './ApplicationProcessPage';
import ApprovalProcessPage from './ApprovalProcessPage';

export default function GrantApplication() {
  return (
    <Routes>
      <Route index element={<Navigate to="eligibility" replace />} />

      <Route path="eligibility" element={<EligibilityPage />} />
      <Route path="application-process" element={<ApplicationProcessPage />} />
      <Route path="application-status" element={<ApprovalProcessPage />} />

      <Route path="*" element={<Navigate to="eligibility" replace />} />
    </Routes>
  );
}


