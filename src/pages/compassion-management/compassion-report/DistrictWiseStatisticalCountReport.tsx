import{ useState } from "react";
import { Card } from "primereact/card";
import { Dropdown } from "primereact/dropdown";
import { Button } from "primereact/button";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";

const districtOptions = [
  { label: "Agar Malwa", value: "Agar Malwa" },
  { label: "Bhopal", value: "Bhopal" },
  { label: "Indore", value: "Indore" }
];

export default function DistrictWiseStatisticReport() {
  const [district, setDistrict] = useState<string | null>(null);
  const [showReport, setShowReport] = useState(false);
  const reportData = [
    {
      sr: 1,
      division: "Ujjain",
      district: "Agar Malwa",
      received: 1,
      pending: 0,
      accepted: 0,
      forwarded: 0,
      rejected: 0,
      objection: 1,
      disposed: 1
    },
    {
      sr: 2,
      division: "Bhopal",
      district: "Bhopal",
      received: 20,
      pending: 12,
      accepted: 7,
      forwarded: 1,
      rejected: 2,
      objection: 10,
      disposed: 20
    }
  ];

  const handleSearch = () => {
    if (!district) {
      alert("Please select District");
      return;
    }
    setShowReport(true);
  };

  const handleClear = () => {
    setDistrict(null);
    setShowReport(false);
  };

  return (
    <Card title="District-wise Statistic Count Report">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-3 mb-3">
        <div>
          <label className="block mb-1">District *</label>
          <Dropdown
            value={district}
            options={districtOptions}
            onChange={(e) => setDistrict(e.value)}
            placeholder="Select District"
            className="w-full"
          />
        </div>
      </div>

      <div className="flex gap-3 mb-4">
        <Button label="Search" icon="pi pi-search" onClick={handleSearch} />
        <Button label="Clear" icon="pi pi-times" severity="secondary" onClick={handleClear} />
      </div>
      {showReport && (
        <Card title="District-wise Application Statistics">
          <DataTable value={reportData} paginator rows={5}>
            <Column field="division" header="Division Name" sortable/>
            <Column field="district" header="District Name"sortable />
            <Column field="received" header="Received Application"sortable />
            <Column field="pending" header="Pending Application"sortable />
            <Column field="accepted" header="Accepted Application" sortable/>
            <Column field="forwarded" header="Forwarded to Senior Level" sortable/>
            <Column field="rejected" header="Rejected Application"sortable />
            <Column field="objection" header="Objection on Application" sortable/>
            <Column field="disposed" header="Disposed Application"sortable />
          </DataTable>
        </Card>
      )}
    </Card>
  );
}
