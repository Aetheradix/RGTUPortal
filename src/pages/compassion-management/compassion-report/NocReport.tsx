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
  { label: "Ujjain", value: "Ujjain" }
];

export default function NocReport() {
  const [district, setDistrict] = useState<any>(null);
  const [showTable, setShowTable] = useState(false);
  const data = [
    {
      id: 1,
      deceased: "Leokadiya Ekka (BN9613)",
      appNo: "CA/BN9613/25/01",
      designation: "Madhyamik Shikshak",
      deathDate: "01/09/2025",
      applicant: "Mohit",
      gender: "Male",
      dob: "01/03/2001",
      caste: "ST",
      mobile: "9879465646",
      relation: "Son",
      post: "लिपिक संवर्ग",
      status: "NOC has been released, the case has been sent to the District Collector"
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
    <Card title="Final NOC Report">
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
  <Column field="deceased" header="Name of the Deceased Employee Officer" sortable style={{ whiteSpace: "nowrap" }} />
  <Column field="appNo" header="Application Number" sortable style={{ whiteSpace: "nowrap" }} />
  <Column field="designation" header="Designation" sortable style={{ whiteSpace: "nowrap" }} />
  <Column field="deathDate" header="Date Of Death" sortable style={{ whiteSpace: "nowrap" }} />
  <Column field="applicant" header="Name of the Applicant" sortable style={{ whiteSpace: "nowrap" }} />
  <Column field="gender" header="Gender" sortable style={{ whiteSpace: "nowrap" }} />
  <Column field="dob" header="Date Of Birth" sortable style={{ whiteSpace: "nowrap" }} />
  <Column field="caste" header="Caste" sortable style={{ whiteSpace: "nowrap" }} />
  <Column field="mobile" header="Mobile No." sortable style={{ whiteSpace: "nowrap" }} />
  <Column field="relation" header="Relationship with Deceased Employee" sortable style={{ whiteSpace: "nowrap" }} />
  <Column field="post" header="To which Post Applicant Want to be Appointed" sortable style={{ whiteSpace: "nowrap" }} />
  <Column field="status" header="Application Status" sortable style={{ whiteSpace: "nowrap" }} />
  <Column
    header="Print / Notesheet"
    body={() => <Button icon="pi pi-eye" className="p-button-rounded p-button-text" />}
    style={{ whiteSpace: "nowrap" }}
  />
</DataTable>

      )}
    </Card>
  );
}
