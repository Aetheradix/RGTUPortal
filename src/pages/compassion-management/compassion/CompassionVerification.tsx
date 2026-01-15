/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import PageLayout from "@/components/PageLayout";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import { Table, Input, Dropdown } from "@/ui/shared";

export default function CompassionVerification() {
  const [showForm, setShowForm] = useState(false);
  const [selectedRow, setSelectedRow] = useState<any>(null);

  const reportData = [
    {
      id: 1,
      district: "Bhopal",
      appNo: "CA/AA4880/25/01",
      deceasedName: "Hemlata Singh (AA4880)",
      designation: "Prathmik Shikshak",
      deathDate: "05/08/2025",
      applicantName: "ARJUN SINGH",
      caste: "OBC",
      relation: "Son",
      status: "Objection on application",
    },
  ];

  const handleAction = (rowData: any) => {
    setSelectedRow(rowData);
    setShowForm(true);
  };

  const tableColumns = [
    { field: "district", header: "District Name", sortable: true },
    { field: "appNo", header: "Application No.", sortable: true },
    { field: "deceasedName", header: "Name of Deceased", sortable: true },
    { field: "designation", header: "Designation", sortable: true },
    { field: "deathDate", header: "Date of Death", sortable: true },
    { field: "applicantName", header: "Applicant Name", sortable: true },
    { field: "caste", header: "Caste", sortable: true },
    { field: "relation", header: "Relation", sortable: true },
    {
      field: "status",
      header: "Application Status",
      sortable: true,
      body: (row: any) => (
        <span className="text-orange-600 font-semibold">{row.status}</span>
      ),
    },
    {
      header: "Action",
      style: { textAlign: "center" as const, width: "100px" },
      body: (row: any) => (
        <Button
          icon="pi pi-pencil"
          className="p-button-rounded p-button-warning p-button-sm"
          onClick={() => handleAction(row)}
          tooltip="Verify Application"
        />
      ),
    },
  ];

  return (
    <PageLayout title="Action Report on Compassionate Appointment / अनुकंपा नियुक्ति कार्रवाई रिपोर्ट">
      <div className="animate-fadein">
        <Card>
          <Table
            columns={tableColumns}
            data={reportData}
            showPagination={true}
            className="p-datatable-sm shadow-sm b"
          />
        </Card>

        <Dialog
          header="Compassion Verification Details / अनुकंपा सत्यापन विवरण"
          visible={showForm}
          style={{ width: "95vw" }}
          onHide={() => setShowForm(false)}
          maximized
          modal
        >
          <div className="flex flex-col gap-6 p-2">

            <Card className="border-l-4 border-l-orange-400 shadow-sm">
              <h4 className="text-lg font-bold mb-4 text-orange-700 underline underline-offset-4">
                Details of Deceased Employee
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <Input label="Employee Code" value="AA4880" readOnly />
                <Input label="Name of Servant" value={selectedRow?.deceasedName} readOnly />
                <Input label="Gender" value="Female" readOnly />
                <Input label="Caste" value={selectedRow?.caste} readOnly />
                <Input label="Posting District" value={selectedRow?.district} readOnly />
                <Input label="Cadre" value="Teaching" readOnly />
                <Input label="Designation" value={selectedRow?.designation} readOnly />
                <Input label="Cause of Death" value="HEART ATTACK" readOnly />
              </div>
            </Card>
            <Table
              title="Family Members Information"
              columns={[
                { field: "sr", header: "Sr.No.", style: { width: "50px" } },
                { field: "name", header: "Name of Member" },
                { field: "gender", header: "Gender" },
                { field: "dob", header: "Date of Birth" },
                { field: "relation", header: "Relationship" },
                { field: "occupation", header: "Occupation" },
              ]}
              data={[
                {
                  sr: 1,
                  name: "ARJUN SINGH",
                  gender: "Male",
                  dob: "26/07/1998",
                  relation: "Son",
                  occupation: "No Occupation",
                },
              ]}
            />


            <Table
              title="Applicant's Uploaded Documents"
              columns={[
                { field: "id", header: "Sr.No.", style: { width: "50px" } },
                { field: "name", header: "Document Name" },
                {
                  header: "Action",
                  body: () => (
                    <Button
                      label="View"
                      icon="pi pi-eye"
                      text
                      className="p-button-sm"
                    />
                  ),
                },
              ]}
              data={[
                { id: 1, name: "Death Certificate" },
                { id: 2, name: "Birth Certificate" },
                { id: 3, name: "Caste Certificate" },
                { id: 4, name: "Family Samagra ID" },
              ]}
            />
            <Card className="bg-orange-50 border border-orange-200">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-end">
                <Dropdown
                  label="Proceeding / कार्रवाई"
                  required
                  options={[
                    { label: "Approve", value: "approve" },
                    { label: "Reject", value: "reject" },
                    { label: "Send for Clarification", value: "clarify" },
                  ]}
                  placeholder="Select Decision"
                />
                <Input label="Verification Remark" placeholder="Enter comments" className="md:col-span-2" />
              </div>
            </Card>
            <div className="flex justify-end gap-3 mt-4 pb-6">
              <Button
                label="Save Verification"
                icon="pi pi-check"
                className="bg-green-600 px-8"
                onClick={() => setShowForm(false)}
              />
              <Button
                label="Close"
                icon="pi pi-times"
                severity="secondary"
                outlined
                onClick={() => setShowForm(false)}
              />
            </div>
          </div>
        </Dialog>
      </div>
    </PageLayout>
  );
}