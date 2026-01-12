import { useState } from "react";
import { Card } from "primereact/card";
import { Dropdown } from "primereact/dropdown";
import { Button } from "primereact/button";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Dialog } from "primereact/dialog";

const districtOptions = [
  { label: "Bhopal", value: "Bhopal" },
  { label: "Indore", value: "Indore" },
  { label: "Ujjain", value: "Ujjain" }
];

export default function DisposedApplicationReport() {
  const [district, setDistrict] = useState<string | null>(null);
  const [showTable, setShowTable] = useState(false);
  const [pdfDialog, setPdfDialog] = useState(false);
  const tableData = [
    {
      id: 1,
      district: "Bhopal",
      appNo: "CAC/1053/25/01",
      deceased: "Ashok Kumar Ghotre (CA1053)",
      applicant: "Danish",
      gender: "Male",
      school: "GHSS HAREKHERI (10-12)",
      dob: "01/01/2000",
      mobile: "8120720864",
      occupation: "There is no business",
      relation: "Son",
      marital: "Un-Married",
      qualification: "Post Graduation",
      cadre: "Academic Cadre"
    }
  ];

  const handleSearch = () => {
    if (!district) return alert("Select District");
    setShowTable(true);
  };

  const handleClear = () => {
    setDistrict(null);
    setShowTable(false);
  };

  const eyeTemplate = () => (
    <Button
      icon="pi pi-eye"
      className="p-button-rounded p-button-text"
      onClick={() => setPdfDialog(true)}
    />
  );

  return (
    <Card title="Disposed Application Report">
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
        <DataTable value={tableData} paginator rows={5}>
          <Column field="district" header="District Name"sortable />
          <Column field="appNo" header="Application Number" sortable/>
          <Column field="deceased" header="Name Of Deceased Person" sortable/>
          <Column field="applicant" header="Name Of Applicant"sortable />
          <Column field="gender" header="Gender" sortable/>
          <Column field="school" header="OIS Name (Code)" sortable/>
          <Column field="dob" header="Date Of Birth" sortable/>
          <Column field="mobile" header="Mobile No." sortable/>
          <Column field="occupation" header="Occupation" sortable/>
          <Column field="relation" header="Relationship With Deceased" sortable/>
          <Column field="marital" header="Marital Status" sortable/>
          <Column field="qualification" header="Educational Qualification" sortable/>
          <Column field="cadre" header="Cadre for Appointment" sortable/>
          <Column body={eyeTemplate} header="View Appointment Document" sortable/>
        </DataTable>
      )}
      <Dialog
        header="Appointment Document"
        visible={pdfDialog}
        style={{ width: "70vw" }}
        onHide={() => setPdfDialog(false)}
      >
        <iframe
          src="/sample.pdf"
          title="PDF"
          width="100%"
          height="500px"
        />
      </Dialog>
    </Card>
  );
}
