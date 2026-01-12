/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { Card } from "primereact/card";
import { InputText } from "primereact/inputtext";
import { Dropdown } from "primereact/dropdown";
import { Button } from "primereact/button";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Dialog } from "primereact/dialog";

export default function UpdateNocJobStatus() {
  const [appNo, setAppNo] = useState("");
  const [tableData, setTableData] = useState<any[]>([]);
  const [showDialog, setShowDialog] = useState(false);
  const [selectedRow, setSelectedRow] = useState<any>(null);
  const [jobStatus, setJobStatus] = useState("");

  const statusList = [
    { label: "NOC Issued", value: "NOC Issued" },
    { label: "Objection Raised", value: "Objection Raised" },
    { label: "Pending", value: "Pending" }
  ];

  const dummyDB = [
    {
      district: "Bhopal",
      applicationNo: "CA/AA4880/25/01",
      deceasedName: "Hemlata Singh",
      applicantName: "ARJUN SINGH",
      designation: "Prathmik Shikshak",
      status: "Pending"
    }
  ];

  const handleSearch = () => {
    setTableData(dummyDB);
  };

  const openDialog = (row: any) => {
    setSelectedRow(row);
    setJobStatus(row.status);
    setShowDialog(true);
  };

  const updateStatus = () => {
    const updated = tableData.map((item) =>
      item.applicationNo === selectedRow.applicationNo
        ? { ...item, status: jobStatus }
        : item
    );
    setTableData(updated);
    setShowDialog(false);
  };

  const actionTemplate = (row: any) => (
    <Button
      icon="pi pi-pencil"
      className="p-button-warning p-button-sm"
      onClick={() => openDialog(row)}
    />
  );

  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      <Card title="Issue NOC Application - Search" className="mb-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
          <div>
            <label className="font-medium">
              Application No. <span className="text-red-500">*</span>
            </label>
            <InputText
              value={appNo}
              onChange={(e) => setAppNo(e.target.value)}
              placeholder="Enter Application No"
              className="w-full"
            />
          </div>

          <div className="flex gap-2">
            <Button label="Search" icon="pi pi-search" onClick={handleSearch} />
          </div>
        </div>
      </Card>
      {tableData.length > 0 && (
        <Card title="Issue NOC Application List">
          <DataTable value={tableData} stripedRows>
            <Column field="district" header="District" sortable/>
            <Column field="applicationNo" header="Application No." sortable/>
            <Column field="deceasedName" header="Deceased Name"sortable />
            <Column field="applicantName" header="Applicant Name" sortable/>
            <Column field="designation" header="Designation" sortable/>
            <Column field="status" header="Job Status" sortable/>
            <Column header="Action" body={actionTemplate} />
          </DataTable>
        </Card>
      )}
      <Dialog
        header="Update Job Status - Issue NOC"
        visible={showDialog}
        style={{ width: "40vw" }}
        modal
        onHide={() => setShowDialog(false)}
      >
        {selectedRow && (
          <>
            <p><b>Application No:</b> {selectedRow.applicationNo}</p>
            <p><b>Applicant Name:</b> {selectedRow.applicantName}</p>

            <div className="mt-3">
              <label className="font-medium">Select Job Status</label>
              <Dropdown
                value={jobStatus}
                options={statusList}
                onChange={(e) => setJobStatus(e.value)}
                placeholder="Select Status"
                className="w-full"
              />
            </div>

            <div className="flex justify-end gap-2 mt-4">
              <Button label="Update Status" icon="pi pi-save" onClick={updateStatus} />
              <Button label="Cancel" icon="pi pi-times" className="p-button-secondary" onClick={() => setShowDialog(false)} />
            </div>
          </>
        )}
      </Dialog>
    </div>
  );
}
