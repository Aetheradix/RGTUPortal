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

/* -------------------- TABLE DATA -------------------- */
const admitList = [
  { id: 1, exam: "Mid-Term Exams", course: "B.Tech", semester: "1st" },
  { id: 2, exam: "Final Exams", course: "M.Tech", semester: "2nd" },
  { id: 3, exam: "Quarterly Tests", course: "BCA", semester: "3rd" },
];

/* -------------------- DROPDOWN DATA -------------------- */
const examOptions = [
  { label: "Mid-Term Exams", value: "Mid-Term Exams" },
  { label: "Final Exams", value: "Final Exams" },
  { label: "Quarterly Tests", value: "Quarterly Tests" },
];

const courseOptions = [
  { label: "B.Tech", value: "B.Tech" },
  { label: "M.Tech", value: "M.Tech" },
  { label: "BCA", value: "BCA" },
];

const semesterOptions = [
  { label: "1st", value: "1st" },
  { label: "2nd", value: "2nd" },
  { label: "3rd", value: "3rd" },
];

const centerOptions = [
  { label: "Government Engineering College, Rewa", value: "GEC Rewa" },
  {
    label: "Shri Vaishnav Institute of Technology and Science, Indore",
    value: "SVITS Indore",
  },
];

const statusOptions = [{ label: "Active", value: "Active" }];

/* ===================================================== */

const GenerateAdmitCards: React.FC = () => {
  const [addMode, setAddMode] = useState(false);
  const [expandedRows, setExpandedRows] = useState<any>(null);
  const [confirm, setConfirm] = useState(false);
  const [success, setSuccess] = useState(false);
  const [dueDate, setDueDate] = useState<Date | null | undefined>(null);

  /* -------- FORM STATE (IMPORTANT FIX) -------- */
  const [form, setForm] = useState({
    exam: null,
    course: null,
    semester: null,
    practicalCenter: null,
    examCenter: null,
    examDate: null,
    status: "Active",
  });

  /* -------------------- ROW EXPANSION -------------------- */
  const rowExpansionTemplate = () => (
    <div className="p-4 bg-gray-50 rounded-md text-sm">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        <p>
          <strong>Practical Center:</strong> Government Engineering College,
          Rewa
        </p>
        <p>
          <strong>Exam Center:</strong> Shri Vaishnav Institute of Technology
          and Science, Indore
        </p>
        <p>
          <strong>Exam Date:</strong> 25/12/2024
        </p>
        <p>
          <strong>Status:</strong> Active
        </p>
        <p>
          <strong>Authority Signature:</strong> Uploaded
        </p>
        <p>
          <strong>Remark:</strong> Please ensure all arrangements are completed.
        </p>
      </div>
    </div>
  );

  return (
    <PageLayout title="Generate Admit Cards">
      {/* ================= LIST PAGE ================= */}
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
            className="p-datatable-sm mt-4"
            dataKey="id"
            expandedRows={expandedRows}
            onRowToggle={(e) => setExpandedRows(e.data)}
            rowExpansionTemplate={rowExpansionTemplate}
          >
            <Column expander style={{ width: "3rem" }} />
            <Column
              header="Sr No."
              body={(_, options) => options.rowIndex + 1}
              style={{ width: "80px" }}
            />
            <Column field="exam" header="Exam Name" sortable />
            <Column field="course" header="Course" sortable />
            <Column field="semester" header="Semester" sortable />
          </DataTable>
        </Card>
      )}

      {/* ================= ADD PAGE ================= */}
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
            <div>
              <label className="block text-sm font-medium mb-2">
                Exam Name*
              </label>
              <Dropdown
                value={form.exam}
                options={examOptions}
                onChange={(e) => setForm({ ...form, exam: e.value })}
                className="w-full"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Course*</label>
              <Dropdown
                value={form.course}
                options={courseOptions}
                onChange={(e) => setForm({ ...form, course: e.value })}
                className="w-full"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                Semester*
              </label>
              <Dropdown
                value={form.semester}
                options={semesterOptions}
                onChange={(e) => setForm({ ...form, semester: e.value })}
                className="w-full"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                Practical Center*
              </label>
              <Dropdown
                value={form.practicalCenter}
                options={centerOptions}
                onChange={(e) => setForm({ ...form, practicalCenter: e.value })}
                className="w-full"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                Exam Center*
              </label>
              <Dropdown
                value={form.examCenter}
                options={centerOptions}
                onChange={(e) => setForm({ ...form, examCenter: e.value })}
                className="w-full"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                Exam Date*
              </label>
              <Calendar
                value={dueDate}
                onChange={(e) => setDueDate(e.value as Date | null)}
                placeholder="dd/mm/yyyy"
                dateFormat="dd/mm/yy"
                className="w-full"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                Upload Student List*
              </label>
              <InputText type="file" className="w-full" />
            </div>

            {/* STATUS MOVED HERE 👇 */}
            <div>
              <label className="block text-sm font-medium mb-2">Status*</label>
              <Dropdown
                value={form.status}
                options={statusOptions}
                onChange={(e) => setForm({ ...form, status: e.value })}
                className="w-full"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                Upload Signature of Authority*
              </label>
              <InputText type="file" className="w-full" />
            </div>

            <div className="md:col-span-3">
              <label className="block text-sm font-medium mb-2">Remark</label>
              <InputTextarea
                rows={3}
                className="w-full"
                placeholder="Enter your remarks here..."
              />
            </div>
          </div>

          <div className="flex gap-3">
            <Button
              label="Generate"
              icon="pi pi-check"
              onClick={() => setConfirm(true)}
            />
            <Button label="Clear" className="p-button-secondary" />
          </div>
        </Card>
      )}

      {/* ================= CONFIRM & SUCCESS ================= */}
      <Dialog
        header="Are you sure?"
        visible={confirm}
        onHide={() => setConfirm(false)}
        modal
        style={{ width: "30vw" }}
      >
        <p>Do you want to save this record?</p>
        <div className="flex justify-end gap-3 mt-4">
          <Button
            label="Cancel"
            className="p-button-text"
            onClick={() => setConfirm(false)}
          />
          <Button
            label="Yes"
            onClick={() => {
              setConfirm(false);
              setSuccess(true);
            }}
          />
        </div>
      </Dialog>

      <Dialog
        header="Success!"
        visible={success}
        onHide={() => setSuccess(false)}
        modal
        style={{ width: "30vw" }}
      >
        <p>Record Saved Successfully!</p>
        <div className="flex justify-end mt-4">
          <Button
            label="OK"
            onClick={() => {
              setSuccess(false);
              setAddMode(false);
            }}
          />
        </div>
      </Dialog>
    </PageLayout>
  );
};

export default GenerateAdmitCards;
