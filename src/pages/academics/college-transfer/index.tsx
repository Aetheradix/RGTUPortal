import { Route, Routes } from 'react-router-dom';
import ApplyCollegeTransfer from './ApplyCollegeTransfer';
import ApproveTransferRequest from './ApproveTransferRequest';
import AddTransferIn from './TransferIn';
import AddTransferOut from './TransferOut';
import AddCreditTransfer from './CreditTransferToNewCollegeUniversity';

export default function CollegeTransfer() {
  return (
    <Routes>
      <Route path="apply-college-transfer" element={<ApplyCollegeTransfer />} />
      <Route path="approve-transfer-request" element={<ApproveTransferRequest />} />
      <Route path="add-transfer-in" element={<AddTransferIn />} />
      <Route path="add-transfer-out" element={<AddTransferOut />} />
      <Route path="add-credit-transfer" element={<AddCreditTransfer />} />
    </Routes>
  );
}
