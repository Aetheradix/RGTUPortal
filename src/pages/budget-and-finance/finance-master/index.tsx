import { Route, Routes } from "react-router-dom";
import GroupManagement from "./GroupManagement";
import LedgerCreationManagement from "./LedgerCreationManagement";
import HSNSACMaster from "./HSNSACMaster";
import GroupWiseLedgerList from "./GroupWiseLedgerList";
import OfficeWiseLedger from "./OfficeWiseLedgerListDetails";
import LedgerForOfficeMapping from "./LedgerForOfficeMapping";
import LedgerAltercation from "./LedgerAltercation";

export default function FinanceMaster() {
  return (
    <Routes>
      <Route path="group-management" element={<GroupManagement />} />
      <Route path="hsn-sac-master" element={<HSNSACMaster />} />
      <Route path="group-wise-ledger-list" element={<GroupWiseLedgerList />} />
      <Route path="office-wise-ledger" element={<OfficeWiseLedger />} />
      <Route path="ledger-altercation" element={<LedgerAltercation />} />
      <Route
        path="ledger-for-office-mapping"
        element={<LedgerForOfficeMapping />}
      />
      <Route
        path="ledger-creation-management"
        element={<LedgerCreationManagement />}
      />
    </Routes>
  );
}
