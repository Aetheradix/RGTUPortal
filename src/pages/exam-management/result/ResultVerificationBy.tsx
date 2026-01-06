/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import PageLayout from "@/components/PageLayout";
import { Card } from "primereact/card";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Dropdown } from "primereact/dropdown";
import { Tag } from "primereact/tag";
import { Calendar } from "primereact/calendar";

interface Result {
  id: number;
  rollNo: string;
  name: string;
  subject: string;
  marks: number;
  maxMarks: number;
  grade: string;
  percentage: string;
  examDate: string;
  remarks: string;
  status: string;
}

const verificationStatusOptions = [
  { label: "Select", value: "" },
  { label: "Approve", value: "Approve" },
  { label: "Reject", value: "Reject" },
];

const resultList: Result[] = [
  {
    id: 1,
    rollNo: "0115CA221155",
    name: "Amit Kumar",
    subject: "Data Structures",
    marks: 85,
    maxMarks: 100,
    grade: "A",
    percentage: "85%",
    examDate: "15/11/2024",
    remarks: "Excellent performance",
    status: "Approve",
  },
  {
    id: 2,
    rollNo: "0115CA221145",
    name: "Pooja Sharma",
    subject: "Operating Systems",
    marks: 78,
    maxMarks: 100,
    grade: "B+",
    percentage: "78%",
    examDate: "16/11/2024",
    remarks: "Good",
    status: "Approve",
  },
  {
    id: 3,
    rollNo: "0115CA221166",
    name: "Raj Verma",
    subject: "Artificial Intelligence",
    marks: 88,
    maxMarks: 100,
    grade: "A",
    percentage: "88%",
    examDate: "17/11/2024",
    remarks: "Very Good",
    status: "Approve",
  },
];

const ResultVerification: React.FC = () => {
  const [view, setView] = useState<"list" | "add">("list");
  const [expandedRows, setExpandedRows] = useState<any>(null);
  const [showList, setShowList] = useState(false);
  const [showEntryForm, setShowEntryForm] = useState(false);
  // At the top of the component
  const [verificationStatus, setVerificationStatus] = useState<string | null>(
    null
  );

  return (
    <PageLayout title="Result Verification">
      {view === "list" && (
        <Card className="mb-4">
          <h3 className="mb-3 font-semibold">Result Verification</h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm mb-1">Enter Roll Number *</label>
              <InputText placeholder="Enter Roll No." className="w-full" />
            </div>

            <div className="flex items-end gap-2">
              <Button
                label="Search"
                icon="pi pi-search"
                onClick={() => setShowList(true)}
              />
              <Button
                label="Clear"
                icon="pi pi-refresh"
                className="p-button-secondary"
                onClick={() => {
                  setShowList(false);
                  setExpandedRows(null);
                }}
              />
            </div>
          </div>
        </Card>
      )}

      {view === "list" && showList && (
        <Card className="mb-4">
          <div className="flex justify-between items-center mb-3">
            <h3 className="font-semibold">Result Verification List</h3>
            <Button
              label="Add Result Verification"
              icon="pi pi-plus"
              onClick={() => {
                setView("add");
                setShowList(false);
              }}
            />
          </div>

          <DataTable
            value={resultList}
            paginator
            rows={10}
            showGridlines
            expandedRows={expandedRows}
            onRowToggle={(e) => setExpandedRows(e.data)}
            rowExpansionTemplate={(row: Result) => (
              <div className="p-4 grid grid-cols-1 md:grid-cols-3 gap-4 bg-gray-50 text-sm">
                <div>
                  <strong>Marks Obtained:</strong> {row.marks}
                </div>
                <div>
                  <strong>Maximum Marks:</strong> {row.maxMarks}
                </div>
                <div>
                  <strong>Grade:</strong> {row.grade}
                </div>
                <div>
                  <strong>Percentage:</strong> {row.percentage}
                </div>
                <div>
                  <strong>Examination Date:</strong> {row.examDate}
                </div>
                <div>
                  <strong>Remarks:</strong> {row.remarks}
                </div>
                <div>
                  <strong>Status:</strong>{" "}
                  <Tag value={row.status} severity="success" />
                </div>
              </div>
            )}
          >
            <Column expander style={{ width: "3rem" }} />
            <Column
              header="Sr No."
              body={(_, opt) => opt.rowIndex + 1}
              sortable
            />
            <Column field="rollNo" header="Roll Number" sortable />
            <Column field="name" header="Student Name" sortable />
            <Column field="subject" header="Subject" sortable />
          </DataTable>
        </Card>
      )}

      {view === "add" && (
        <>
          <Card className="mb-4">
            <div className="flex justify-between items-center mb-3">
              <h3 className="font-semibold">Add Marks Entry</h3>
              <Button
                label="Go Back"
                icon="pi pi-arrow-left"
                className="p-button-text"
                onClick={() => {
                  setView("list");
                  setShowEntryForm(false);
                }}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm mb-1">
                  Enter Roll Number *
                </label>
                <InputText placeholder="Enter Roll No." />
              </div>

              <div className="flex items-end gap-2">
                <Button
                  label="Search"
                  icon="pi pi-search"
                  onClick={() => setShowEntryForm(true)}
                />
                <Button
                  label="Clear"
                  icon="pi pi-refresh"
                  className="p-button-secondary"
                  onClick={() => setShowEntryForm(false)}
                />
              </div>
            </div>
          </Card>

          {showEntryForm && (
            <Card>
              <h4 className="mb-3 font-semibold">Fill Marks Entry</h4>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                <div>
                  <label className="block text-sm mb-1">Student Name</label>
                  <InputText placeholder="Enter Student Name" />
                </div>

                <div>
                  <label className="block text-sm mb-1">Select Subject</label>
                  <InputText placeholder="Enter Subject Name" />
                </div>

                <div>
                  <label className="block text-sm mb-1">Marks Obtained *</label>
                  <InputText placeholder="Enter Marks" />
                </div>

                <div>
                  <label className="block text-sm mb-1">Maximum Marks *</label>
                  <InputText placeholder="Enter Maximum Marks" />
                </div>

                <div>
                  <label className="block text-sm mb-1">Grade *</label>
                  <InputText placeholder="Enter Grade" />
                </div>

                <div>
                  <label className="block text-sm mb-1">Percentage *</label>
                  <InputText placeholder="Enter Percentage" />
                </div>

                <div>
                  <label className="block text-sm mb-1">
                    Examination Date *
                  </label>
                  <Calendar dateFormat="dd/mm/yy" className="w-full" />
                </div>

                <div>
                  <label className="block text-sm mb-1">
                    Verification Status *
                  </label>
                  <Dropdown
                    options={verificationStatusOptions}
                    value={verificationStatus} // bind state
                    onChange={(e) => setVerificationStatus(e.value)} // update state on select
                    placeholder="Select"
                  />
                </div>
              </div>

              <div className="flex gap-3">
                <Button label="Save" icon="pi pi-save" />
                <Button
                  label="Clear"
                  icon="pi pi-refresh"
                  className="p-button-secondary"
                />
              </div>
            </Card>
          )}
        </>
      )}
    </PageLayout>
  );
};

export default ResultVerification;
