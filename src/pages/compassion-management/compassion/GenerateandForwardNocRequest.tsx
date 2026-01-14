/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { Card } from "primereact/card";
import { Dropdown } from "primereact/dropdown";
import { Button } from "primereact/button";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Dialog } from "primereact/dialog";

export default function GenerateForwardNocRequest() {
  const [district, setDistrict] = useState<any>(null);
  const [tableData, setTableData] = useState<any[]>([]);
  const [showDialog, setShowDialog] = useState(false);
  const [selectedRow, setSelectedRow] = useState<any>(null);
  const districtList = [
    { label: "All", value: "All" },
    { label: "Bhopal", value: "Bhopal" },
    { label: "Indore", value: "Indore" },
    { label: "Gwalior", value: "Gwalior" }
  ];

  const dummyDB = [
    {
      district: "Bhopal",
      applicationNo: "CA/AA4880/25/01",
      deceasedName: "Hemlata Singh",
      applicantName: "Arjun Singh",
      status: "Pending for NOC"
    }
  ];

  const handleSearch = () => {
    setTableData(dummyDB);
  };

  const handleClear = () => {
    setDistrict(null);
    setTableData([]);
  };

  const forwardNoc = (row: any) => {
    setSelectedRow(row);
    setShowDialog(true);
  };

  const confirmForward = () => {
    const updated = tableData.map((item) =>
      item.applicationNo === selectedRow.applicationNo
        ? { ...item, status: "Forwarded to DEO" }
        : item
    );
    setTableData(updated);
    setShowDialog(false);
  };
  const actionTemplate = (row: any) => (
    <div className="flex justify-center">
      <Button
        label="Forward"
        icon="pi pi-send"
        className="p-button-info p-button-sm p-button-raised"
        onClick={() => forwardNoc(row)}
        disabled={row.status === "Forwarded to DEO"}
      />
    </div>
  );
  const dialogFooter = (
    <div className="flex justify-end gap-2">
      <Button 
        label="Cancel" 
        icon="pi pi-times" 
        className="p-button-text p-button-secondary" 
        onClick={() => setShowDialog(false)} 
      />
      <Button 
        label="Confirm Forward" 
        icon="pi pi-send" 
        className="p-button-info"
        onClick={confirmForward} 
      />
    </div>
  );
  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      <Card title="Generate & Forward NOC Request" className="mb-4 shadow-sm">
        <div className="flex flex-wrap items-start gap-4">
          <div className="flex flex-col gap-2 min-w-[250px]">
            <label htmlFor="district" className="font-semibold text-sm">District</label>
            <Dropdown
              id="district"
              value={district}
              options={districtList}
              onChange={(e) => setDistrict(e.value)}
              placeholder="Select District"
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
        <Card title="NOC Request List" className="shadow-sm">
          <DataTable value={tableData} stripedRows className="p-datatable-sm">
            <Column field="district" header="District" sortable/>
            <Column field="applicationNo" header="Application No." sortable/>
            <Column field="deceasedName" header="Deceased Name" sortable/>
            <Column field="applicantName" header="Applicant Name" sortable/>
            <Column field="status" header="Status" sortable/>
            <Column 
                header="Action" 
                body={actionTemplate} 
                headerStyle={{ textAlign: 'center', width: '150px' }} 
                bodyStyle={{ textAlign: 'center' }} 
            />
          </DataTable>
        </Card>
      )}
      <Dialog
        header="Forward NOC Request"
        visible={showDialog}
        style={{ width: "400px" }}
        modal
        onHide={() => setShowDialog(false)}
        footer={dialogFooter}
      >
        {selectedRow && (
          <div className="flex flex-col gap-3 py-2">
            <div className="flex justify-between border-b pb-1">
                <span className="text-gray-600">Application:</span>
                <span className="font-bold">{selectedRow.applicationNo}</span>
            </div>
            <div className="flex justify-between border-b pb-1">
                <span className="text-gray-600">Applicant:</span>
                <span className="font-bold">{selectedRow.applicantName}</span>
            </div>
            <div className="flex justify-between">
                <span className="text-gray-600">Status:</span>
                <span className="text-blue-600 font-medium">{selectedRow.status}</span>
            </div>
          </div>
        )}
      </Dialog>
    </div>
  );
}