/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { Card } from "primereact/card";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Dialog } from "primereact/dialog";

export default function CompassionVerification() {
  const [empCode, setEmpCode] = useState("");
  const [tableData, setTableData] = useState<any[]>([]);
  const [showForm, setShowForm] = useState(false);
  const dummyDB = [
    {
      district: "Bhopal",
      appNo: "CA/AA4880/25/01",
      deceasedCode: "",
      deceasedName: "Hemlata Singh",
      designation: "Prathmik Shikshak",
      deathDate: "05/08/2025",
      applicantName: "ARJUN SINGH",
      caste: "OBC",
      relation: "Son",
      status: "Objection on application"
    }
  ];

  const handleSearch = () => {
    setTableData(dummyDB);
  };

  const handleClear = () => {
    setEmpCode("");
    setTableData([]);
  };
  const actionTemplate = () => (
    <div className="flex justify-center">
      <Button
        icon="pi pi-eye"
        tooltip="View Details"
        className="p-button-rounded p-button-info p-button-text"
        onClick={() => setShowForm(true)}
      />
    </div>
  );
  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      <Card title="Search Deceased Employee" className="mb-4 shadow-sm">
        <div className="flex flex-wrap items-start gap-4">
          <div className="flex flex-col gap-2 min-w-[300px]">
            <label htmlFor="empCode" className="font-semibold text-sm">
              Deceased Employee Code <span className="text-red-500">*</span>
            </label>
            <InputText
              id="empCode"
              value={empCode}
              onChange={(e) => setEmpCode(e.target.value)}
              placeholder="Enter Employee Code"
              className="w-full"
            />
            <small className="text-gray-500 -mt-1">Information Required.</small>
          </div>
          <div className="flex gap-2 pt-[26px]"> 
            <Button 
              label="Search" 
              icon="pi pi-search" 
              onClick={handleSearch} 
              className="p-button-primary"
            />
            <Button
              label="Clear"
              icon="pi pi-times"
              className="p-button-outlined p-button-secondary"
              onClick={handleClear}
            />
          </div>
        </div>
      </Card>
      {tableData.length > 0 && (
        <Card title="Compassion Application Details" className="shadow-sm">
          <DataTable 
            value={tableData} 
            stripedRows 
            className="p-datatable-sm"
          >
            <Column field="district" header="District" sortable />
            <Column field="appNo" header="Application No."sortable />
            <Column field="deceasedName" header="Deceased Name" sortable/>
            <Column field="designation" header="Designation"sortable />
            <Column field="deathDate" header="Date of Death" sortable/>
            <Column field="applicantName" header="Applicant Name" sortable/>
            <Column field="caste" header="Caste" sortable/>
            <Column field="relation" header="Relation" sortable/>
            <Column field="status" header="Status" sortable/>
            <Column 
              header="Action" 
              body={actionTemplate} 
              headerStyle={{ textAlign: 'center', width: '80px' }} 
              bodyStyle={{ textAlign: 'center' }} 
            />
          </DataTable>
        </Card>
      )}

      <Dialog
        header="Compassion Application Detail"
        visible={showForm}
        style={{ width: "450px" }}
        onHide={() => setShowForm(false)}
        footer={
          <div className="flex justify-end">
             <Button label="Close" icon="pi pi-check" onClick={() => setShowForm(false)} />
          </div>
        }
      >
        <div className="flex flex-col gap-3 py-2">
            <p className="m-0 text-gray-700"><b>Applicant Name:</b> Arjun Singh</p>
            <p className="m-0 text-gray-700"><b>Status:</b> <span className="text-orange-600 font-medium">Objection on application</span></p>
        </div>
      </Dialog>
    </div>
  );
}
