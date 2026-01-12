/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { Card } from "primereact/card";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Dialog } from "primereact/dialog";

export default function DEONocCertificateRelease() {
  const [appNo, setAppNo] = useState("");
  const [tableData, setTableData] = useState<any[]>([]);
  const [showDialog, setShowDialog] = useState(false);
  const [selectedRow, setSelectedRow] = useState<any>(null);
  const dummyDB = [
    {
      district: "Bhopal",
      applicationNo: "CA/AA4880/25/01",
      deceasedName: "Hemlata Singh",
      applicantName: "ARJUN SINGH",
      designation: "Prathmik Shikshak",
      status: "Pending for DEO NOC"
    }
  ];

  const handleSearch = () => {
    setTableData(dummyDB);
  };

  const handleClear = () => {
    setAppNo("");
    setTableData([]);
  };

  const openDialog = (row: any) => {
    setSelectedRow(row);
    setShowDialog(true);
  };

  const releaseNOC = () => {
    const updated = tableData.map((item) =>
      item.applicationNo === selectedRow.applicationNo
        ? { ...item, status: "NOC Released" }
        : item
    );
    setTableData(updated);
    setShowDialog(false);
  };

  const actionTemplate = (row: any) => (
    <div className="flex justify-center">
      <Button
        label="Release NOC"
        icon="pi pi-check"
        className="p-button-success p-button-sm"
        onClick={() => openDialog(row)}
        disabled={row.status === "NOC Released"}
      />
    </div>
  );
  const dialogFooter = (
    <div className="flex justify-end gap-2">
      <Button label="Cancel" icon="pi pi-times" className="p-button-text p-button-secondary" onClick={() => setShowDialog(false)} />
      <Button label="Confirm & Release NOC" icon="pi pi-check" className="p-button-success" onClick={releaseNOC} />
    </div>
  );
  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      <Card title="Search Compassion Application" className="mb-4 shadow-sm">
        <div className="flex flex-wrap items-start gap-4">
          <div className="flex flex-col gap-2 min-w-[250px] md:w-1/3">
            <label htmlFor="appNo" className="font-semibold text-sm">
              Application No. <span className="text-red-500">*</span>
            </label>
            <InputText
              id="appNo"
              value={appNo}
              onChange={(e) => setAppNo(e.target.value)}
              placeholder="Enter Application No."
              className="w-full"
            />
          </div>
          <div className="flex gap-2 pt-[28px]">
            <Button label="Search" icon="pi pi-search" onClick={handleSearch} />
            <Button 
              label="Clear" 
              icon="pi pi-refresh" 
              className="p-button-outlined p-button-secondary" 
              onClick={handleClear} 
            />
          </div>
        </div>
      </Card>
      {tableData.length > 0 && (
        <Card title="Pending DEO NOC Applications" className="shadow-sm">
          <DataTable value={tableData} stripedRows className="p-datatable-sm">
            <Column field="district" header="District" />
            <Column field="applicationNo" header="Application No." />
            <Column field="deceasedName" header="Deceased Name" />
            <Column field="applicantName" header="Applicant Name" />
            <Column field="designation" header="Designation" />
            <Column field="status" header="Status" />
            <Column 
              header="Action" 
              body={actionTemplate} 
              headerStyle={{ textAlign: 'center' }} 
              bodyStyle={{ textAlign: 'center' }} 
            />
          </DataTable>
        </Card>
      )}
      <Dialog
        header="Release DEO NOC Certificate"
        visible={showDialog}
        style={{ width: "400px" }}
        modal
        onHide={() => setShowDialog(false)}
        footer={dialogFooter}
      >
        {selectedRow && (
          <div className="flex flex-col gap-3 py-2">
            <div className="flex justify-between border-b pb-1">
              <span className="text-gray-600">Application No:</span>
              <span className="font-bold">{selectedRow.applicationNo}</span>
            </div>
            <div className="flex justify-between border-b pb-1">
              <span className="text-gray-600">Applicant:</span>
              <span className="font-bold">{selectedRow.applicantName}</span>
            </div>
            <div className="flex justify-between border-b pb-1">
              <span className="text-gray-600">Deceased:</span>
              <span className="font-bold">{selectedRow.deceasedName}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Status:</span>
              <span className="text-blue-600 font-semibold">{selectedRow.status}</span>
            </div>
            <p className="mt-4 text-sm text-red-500 italic">Are you sure you want to release the NOC for this applicant?</p>
          </div>
        )}
      </Dialog>
    </div>
  );
}