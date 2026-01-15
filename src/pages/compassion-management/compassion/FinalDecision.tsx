/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import PageLayout from "@/components/PageLayout";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";

import { Table, Input } from "@/ui/shared";

export default function FinalDecision() {
  const [showForm, setShowForm] = useState(false);
  const [selectedData, setSelectedData] = useState<any>(null);

  const reportData = [
    {
      id: 1, 
      district: "Bhopal",
      appNo: "CA/AA4880/25/01",
      deceasedName: "Hemlata Singh (AA4880)",
      designation: "Prathmik Shikshak",
      deathDate: "05/08/2025",
      applicantName: "ARJUN SINGH",
      dob: "26/07/1998",
      caste: "OBC",
      mobile: "9999999999",
      relation: "Son",
      maritalStatus: "Un-Married",
      postApplied: "Academic Cadre",
      qualification: "Graduation",
      status: "Objection on application",
      reason: "Applicant not having educational qualification",
      actionDate: "09/01/2026",
      remark: "lmkk",
    },
  ];

  const handleEdit = (rowData: any) => {
    setSelectedData(rowData);
    setShowForm(true);
  };

  const tableColumns = [
    { field: "district", header: "District", sortable: true },
    { field: "appNo", header: "Application No.", sortable: true },
    { field: "deceasedName", header: "Name Of Deceased Employee", sortable: true },
    { field: "designation", header: "Designation", sortable: true },
    { field: "deathDate", header: "Date of Death", sortable: true },
    { field: "applicantName", header: "Applicant Name", sortable: true },
    { field: "dob", header: "Date of Birth", sortable: true },
    { field: "mobile", header: "Mobile No.", sortable: true },
    { field: "relation", header: "Relationship", sortable: true },
    { field: "caste", header: "Caste", sortable: true },
    { field: "maritalStatus", header: "Marital Status", sortable: true },
    { 
        field: "status", 
        header: "Application Status", 
        sortable: true,
        body: (row: any) => (
            <span className={`px-2 py-1 rounded text-xs font-bold ${row.status.includes('Objection') ? 'bg-orange-100 text-orange-700 border border-orange-200' : 'bg-blue-100 text-blue-700'}`}>
                {row.status}
            </span>
        )
    },
    {
      header: "Action",
      style: { textAlign: "center" as const, width: "80px" },
      body: (rowData: any) => (
        <Button
          icon="pi pi-pencil"
          className="p-button-rounded p-button-warning p-button-sm"
          onClick={() => handleEdit(rowData)}
          tooltip="View / Edit Application"
        />
      ),
    },
  ];

  return (
    <PageLayout title="Final Decision / अंतिम निर्णय">
      <div className="animate-fadein">
        <Card>
          <Table
            columns={tableColumns}
            data={reportData}
            showPagination={true}
            rowsPerPage={10}
            className="p-datatable-sm shadow-sm "
          />
        </Card>

        <Dialog
          header="Compassionate Application Details"
          visible={showForm}
          style={{ width: "60vw" }}
          modal
          onHide={() => setShowForm(false)}
          className="shadow-lg"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-2">
            <Input 
                label="Applicant Name" 
                value={selectedData?.applicantName || ""} 
                readOnly 
            />
            <Input 
                label="Mobile No." 
                value={selectedData?.mobile || ""} 
                readOnly 
            />
            <Input 
                label="Post Applied" 
                value={selectedData?.postApplied || ""} 
                readOnly 
            />
            <Input 
                label="Qualification" 
                value={selectedData?.qualification || ""} 
                readOnly 
            />
            <div className="md:col-span-2">
              <Input
                label="Remark / Reason"
                value={selectedData?.reason || ""}
                required
                placeholder="Enter final decision remark"
              />
            </div>
          </div>

          <div className="flex justify-end gap-3 ">
            <Button 
                label="Close" 
                icon="pi pi-times" 
                className="p-button-text p-button-secondary" 
                onClick={() => setShowForm(false)} 
            />
            <Button 
                label="Save Decision" 
                icon="pi pi-check" 
                className="bg-blue-600 px-6" 
                onClick={() => setShowForm(false)} 
            />
          </div>
        </Dialog>
      </div>
    </PageLayout>
  );
}