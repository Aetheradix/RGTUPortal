import { Route, Routes } from "react-router-dom";
import DistrictWiseStatisticReport from "./DistrictWiseStatisticalCountReport";
import NocReport from "./NocReport";
import NocStatisticalCountReport from "./NocStatisticalCountReport";
import DisposedApplicationReport from "./DispossedApplicationReport";

export default function CompassionReport() {
  return (
    <Routes>
      <Route path="dispossed-application-report/*" element={<DisposedApplicationReport/>} />
      <Route path="district-wise-statistical-count-report/*" element={<DistrictWiseStatisticReport/>} />
      <Route path="noc-report/*" element={<NocReport/>} />
      <Route path="noc-statistical-count-report/*" element={<NocStatisticalCountReport/>} />
    </Routes>
  );
}