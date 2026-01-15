/* eslint-disable @typescript-eslint/no-explicit-any */
import  { useState } from "react";
import { Card } from "primereact/card";
import { Dropdown } from "primereact/dropdown";
import { Button } from "primereact/button";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";

const districtOptions = [
  { label: "Bhopal", value: "Bhopal" },
  { label: "Indore", value: "Indore" },
  { label: "Ujjain", value: "Ujjain" },
  { label: "Jabalpur", value: "Jabalpur" }
];

export default function NocStatisticalCountReport() {
  const [district, setDistrict] = useState<any>(null);
  const [showTable, setShowTable] = useState(false);

  const data = [
    {
      id: 1,
      division: "Ujjain",
      district: "Agar Malwa",
      received: 0,
      forwardDist: 0,
      forwardDiv: 0,
      sentToHO: 0,
      approved: 0,
      disposed: 0,
      sentCollector: 0,
      sentCollectorHO: 0,
      rejected: 0
    },
    {
      id: 2,
      division: "Bhopal",
      district: "Bhopal",
      received: 8,
      forwardDist: 7,
      forwardDiv: 2,
      sentToHO: 4,
      approved: 4,
      disposed: 8,
      sentCollector: 3,
      sentCollectorHO: 0,
      rejected: 0
    }
  ];

  const handleSearch = () => {
    if (!district) return alert("Please Select District");
    setShowTable(true);
  };

  const handleClear = () => {
    setDistrict(null);
    setShowTable(false);
  };

  return (
    <Card title="NOC Statistical Count Report (District Wise)">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-3 mb-3">
        <div>
          <label>District *</label>
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
      {showTable && (
        <DataTable value={data} paginator rows={10} className="p-datatable-sm">
  <Column field="division" header="Division Name" sortable style={{ whiteSpace: "nowrap" }} />
  <Column field="district" header="District Name" sortable style={{ whiteSpace: "nowrap" }} />
  <Column field="received" header="Received Application" sortable style={{ whiteSpace: "nowrap" }} />
  <Column field="forwardDist" header="Forward to District" sortable style={{ whiteSpace: "nowrap" }} />
  <Column field="forwardDiv" header="Forward to Division" sortable style={{ whiteSpace: "nowrap" }} />
  <Column field="sentToHO" header="Sent to HO" sortable style={{ whiteSpace: "nowrap" }} />
  <Column field="approved" header="Approved by HO" sortable style={{ whiteSpace: "nowrap" }} />
  <Column field="disposed" header="Disposed Application" sortable style={{ whiteSpace: "nowrap" }} />
  <Column field="sentCollector" header="Sending Collector" sortable style={{ whiteSpace: "nowrap" }} />
  <Column field="sentCollectorHO" header="Sending Collector to HO" sortable style={{ whiteSpace: "nowrap" }} />
  <Column field="rejected" header="Rejected" sortable style={{ whiteSpace: "nowrap" }} />
</DataTable>

      )}
    </Card>
  );
}
