import { Route, Routes } from "react-router-dom";
import AdministrativeTransfer from "./Transfer";
import PrintDraftTransferLetter from "./PrintDraft";
import GenerateTransferOrder from "./GenerateTransferOrder";
import PrintTransferOrder from "./PrintTransferOrder";
import ViewPostCodeVacancies from "./ViewPostCodeVacancies";
import DistrictCountingReport from "./DistrictWiseCountingReport";
import BlockCountingReport from "./BlockWiseCountingReport";
import AdministrativeTransferReport from "./TransferReport";

export default function AdministrativeLevelTransfer() {
  return (
    <Routes>
      <Route path="transfer/" element={<AdministrativeTransfer />} />
      <Route
        path="print-draft-letter/"
        element={<PrintDraftTransferLetter />}
      />
      <Route
        path="generate-transfer-order/"
        element={<GenerateTransferOrder />}
      />
      <Route path="print-transfer-order/" element={<PrintTransferOrder />} />
      <Route
        path="view-post-code-vacancies/"
        element={<ViewPostCodeVacancies />}
      />
      <Route
        path="district-counting-report/"
        element={<DistrictCountingReport />}
      />
      <Route path="block-counting-report/" element={<BlockCountingReport />} />
      <Route
        path="transfer-report/"
        element={<AdministrativeTransferReport />}
      />
    </Routes>
  );
}
