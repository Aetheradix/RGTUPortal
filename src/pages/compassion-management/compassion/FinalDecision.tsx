import { useState } from "react";
import { Card } from "primereact/card";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Dialog } from "primereact/dialog";

export default function FinalDecision() {
  const [showForm, setShowForm] = useState(false);
  const [globalFilter] = useState("");
  const reportData = [
    {
      srNo: 1,
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

  const actionBodyTemplate = () => (
    <Button
      icon="pi pi-pencil"
      className="p-button-rounded p-button-warning p-button-sm"
      onClick={() => setShowForm(true)}
      tooltip="View / Edit Application"
    />
  );

  return (
    <div className="p-4 bg-gray-50 min-h-screen">
      <Card title="Final Decision">
        <div className="flex justify-end mb-3"></div>
        <DataTable
          value={reportData}
          paginator
          rows={10}
          globalFilter={globalFilter}
          className="p-datatable-sm"
          stripedRows
        >
          <Column field="district" header="District" sortable />
          <Column field="appNo" header="Application No." sortable />
          <Column
            field="nameOfDeceasedEmployeeOfficer"
            header="Name Of Deceased Employee Officer"
            sortable
          />
          <Column field="designation" header="Designation" sortable />
          <Column field="deathDate" header="Date of Death" sortable />
          <Column field="district" header="District" sortable />
          <Column
            field="compassionateAppointmentApplicationName"
            header="Compassionate Appointment Application Name"
            sortable
          />
          <Column field="birthDate" header="Date of Birth" sortable />
          <Column field="mobileNo" header="Mobile No." sortable />
          <Column
            field="relationshipoftheApplicantwiththeDeceasedPublicServant"
            header="Relationship of the Applicant with the Deceased Public Servant"
            sortable
          />
          <Column field="caste" header="Caste" sortable />
          <Column field="maritalStatus" header="Marital Status" sortable />
          <Column field="status" header="Application Status" sortable />
          <Column
            header="Action"
            body={actionBodyTemplate}
            style={{ textAlign: "center" }}
          />
        </DataTable>
      </Card>
      <Dialog
        header="Compassionate Application Details"
        visible={showForm}
        style={{ width: "60vw" }}
        modal
        onHide={() => setShowForm(false)}
      >
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label>Applicant Name</label>
            <InputText value="ARJUN SINGH" className="w-full" />
          </div>
          <div>
            <label>Mobile No.</label>
            <InputText value="9999999999" className="w-full" />
          </div>
          <div>
            <label>Post Applied</label>
            <InputText value="Academic Cadre" className="w-full" />
          </div>
          <div>
            <label>Qualification</label>
            <InputText value="Graduation" className="w-full" />
          </div>
          <div className="col-span-2">
            <label>Remark</label>
            <InputText
              value="Applicant not having educational qualification"
              className="w-full"
            />
          </div>
        </div>

        <div className="flex justify-end gap-2 mt-4">
          <Button label="Save" icon="pi pi-check" />
          <Button
            label="Close"
            icon="pi pi-times"
            className="p-button-secondary"
            onClick={() => setShowForm(false)}
          />
        </div>
      </Dialog>
    </div>
  );
}
