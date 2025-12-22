/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import PageLayout from "@/components/PageLayout";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Dropdown } from "primereact/dropdown";
import { InputText } from "primereact/inputtext";
import { Calendar } from "primereact/calendar";
import { InputTextarea } from "primereact/inputtextarea";
import { Dialog } from "primereact/dialog";


const admitList = [
  { id: 1, exam: "Mid-Term Exams", course: "B.Tech", semester: "1st" },
  { id: 2, exam: "Final Exams", course: "M.Tech", semester: "2nd" },
  { id: 3, exam: "Quarterly Tests", course: "BCA", semester: "3rd" },
];

const GenerateAdmitCards: React.FC = () => {
  const [addMode, setAddMode] = useState(false);
  const [selectedRow, setSelectedRow] = useState<any>(null);
  const [confirm, setConfirm] = useState(false);
  const [success, setSuccess] = useState(false);

  return (
    <PageLayout title="Generate Admit Cards">
  
      {!addMode && (
        <Card className="shadow-sm border rounded-lg">
       
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold">Generate Admit Cards List</h3>
            <Button
              label="Add Generate Admit Card"
              icon="pi pi-plus"
              className="p-button-sm"
              onClick={() => setAddMode(true)}
            />
          </div>

          <DataTable
            value={admitList}
            paginator
            rows={10}
            showGridlines
            selectionMode="single"
            selection={selectedRow}
            onSelectionChange={(e: { value: unknown }) => setSelectedRow(e.value)}  
          >
            <Column header="Sr No." body={(_, o) => o.rowIndex + 1} />
            <Column field="exam" header="Exam Name" />
            <Column field="course" header="Course" />
            <Column field="semester" header="Semester" />
          </DataTable>

          {selectedRow && (
            <Card className="mt-5 bg-gray-50 border rounded-lg">
              <h4 className="font-semibold mb-3">Admit Card Details</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <p><strong>Practical Center:</strong> Government Engineering College, Rewa</p>
                <p><strong>Exam Center:</strong> Shri Vaishnav Institute of Technology and Science, Indore</p>
                <p><strong>Exam Date:</strong> 25/12/2024</p>
                <p><strong>Status:</strong> Active</p>
                <p><strong>Authority Signature:</strong> Uploaded</p>
                <p><strong>Remark:</strong> Please ensure all arrangements are completed.</p>
              </div>
            </Card>
          )}
        </Card>
      )}

    
      {addMode && (
        <Card className="shadow-sm border rounded-lg">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold">Add Generate Admit Cards</h3>
            <Button
              label="Go Back"
              icon="pi pi-arrow-left"
              className="p-button-text"
              onClick={() => setAddMode(false)}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            {["Exam Name*", "Course*", "Semester*", "Practical Center*", "Exam Center*"].map((label) => (
              <div key={label}>
                <label className="block text-sm font-medium mb-2">{label}</label>
                <Dropdown placeholder="Select" options={[]} className="w-full" />
              </div>
            ))}

            <div>
              <label className="block text-sm font-medium mb-2">Exam Date*</label>
              <Calendar placeholder="dd/mm/yyyy" className="w-full" showIcon />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Upload Student List*</label>
              <InputText type="file" className="w-full" />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Upload Signature of Authority*</label>
              <InputText type="file" className="w-full" />
            </div>

            <div className="md:col-span-3">
              <label className="block text-sm font-medium mb-2">Remark</label>
              <InputTextarea rows={3} className="w-full" placeholder="Enter your remarks here..." />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Status*</label>
              <Dropdown placeholder="Active" options={[{ label: "Active", value: "Active" }]} className="w-full" />
            </div>
          </div>

          <div className="flex gap-3">
            <Button label="Generate" icon="pi pi-check" onClick={() => setConfirm(true)} />
            <Button label="Clear" className="p-button-secondary" />
          </div>
        </Card>
      )}

    
      <Dialog
        header="Are you sure?"
        visible={confirm}
        onHide={() => setConfirm(false)}
        style={{ width: "30vw" }}
        modal
      >
        <p>Do you want to save this record?</p>
        <div className="flex justify-end gap-3 mt-4">
          <Button label="Cancel" className="p-button-text" onClick={() => setConfirm(false)} />
          <Button label="Yes" onClick={() => { setConfirm(false); setSuccess(true); }} />
        </div>
      </Dialog>


      <Dialog
        header="Success!"
        visible={success}
        onHide={() => setSuccess(false)}
        style={{ width: "30vw" }}
        modal
      >
        <p>Record Saved Successfully!</p>
        <div className="flex justify-end mt-4">
          <Button label="OK" onClick={() => { setSuccess(false); setAddMode(false); }} />
        </div>
      </Dialog>
    </PageLayout>
  );
};

export default GenerateAdmitCards;
