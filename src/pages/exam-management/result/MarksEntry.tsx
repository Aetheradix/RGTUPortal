/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import PageLayout from "@/components/PageLayout";
import { Card } from "primereact/card";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { Dropdown } from "primereact/dropdown";
import { Calendar } from "primereact/calendar";
import { Tag } from "primereact/tag";

interface MarksEntry {
  id: number;
  rollNo: string;
  name: string;
  totalMarks: number;
  grade: string;
  examDate: string;
  status: string;
  remarks: string;
}

interface SubjectMarks {
  id: number;
  subject: string;
  marks: number;
  maxMarks: number;
  grade: string;
  examDate: string;
  status: string;
  remarks: string;
}

const marksList: MarksEntry[] = [
  {
    id: 1,
    rollNo: "0115CA221155",
    name: "Amit Kumar",
    totalMarks: 385,
    grade: "A",
    examDate: "15/11/2024",
    status: "Passed",
    remarks: "Excellent performance",
  },
  {
    id: 2,
    rollNo: "0115CA221145",
    name: "Pooja Sharma",
    totalMarks: 320,
    grade: "B",
    examDate: "15/11/2024",
    status: "Passed",
    remarks: "Good",
  },
  {
    id: 3,
    rollNo: "0115CA221166",
    name: "Raj Verma",
    totalMarks: 400,
    grade: "A",
    examDate: "15/11/2024",
    status: "Passed",
    remarks: "Outstanding",
  },
];

const subjectMarksList: SubjectMarks[] = [
  {
    id: 1,
    subject: "Data Structures",
    marks: 80,
    maxMarks: 100,
    grade: "A",
    examDate: "01/11/2024",
    status: "Passed",
    remarks: "Excellent performance",
  },
  {
    id: 2,
    subject: "Operating Systems",
    marks: 65,
    maxMarks: 100,
    grade: "B",
    examDate: "01/11/2024",
    status: "Passed",
    remarks: "Good",
  },
  {
    id: 3,
    subject: "Artificial Intelligence",
    marks: 45,
    maxMarks: 100,
    grade: "C",
    examDate: "01/11/2024",
    status: "Passed",
    remarks: "Average",
  },
];

const MarksEntryPage: React.FC = () => {
  const [view, setView] = useState<"list" | "add">("list");
  const [expandedRows, setExpandedRows] = useState<any>(null);
  const [expandedSubjectRows, setExpandedSubjectRows] = useState<any>(null);
  const [showSearchResult, setShowSearchResult] = useState(false);
  const [showSubjectList, setShowSubjectList] = useState(false);

  const rowExpansionTemplate = (row: MarksEntry) => (
    <div className="p-3 grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
      <div>
        <strong>Grade:</strong> {row.grade}
      </div>
      <div>
        <strong>Examination Date:</strong> {row.examDate}
      </div>
      <div>
        <strong>Status:</strong> <Tag value={row.status} severity="success" />
      </div>
      <div>
        <strong>Remarks:</strong> {row.remarks}
      </div>
    </div>
  );

  const subjectExpansionTemplate = (row: SubjectMarks) => (
    <div className="p-3 text-sm grid grid-cols-1 md:grid-cols-2 gap-2">
      <div>
        <strong>Grade:</strong> {row.grade}
      </div>
      <div>
        <strong>Examination Date:</strong> {row.examDate}
      </div>
      <div>
        <strong>Result Status:</strong> {row.status}
      </div>
      <div>
        <strong>Remarks:</strong> {row.remarks}
      </div>
    </div>
  );

  return (
    <PageLayout title="Marks Entry">
  
      {view === "list" && (
        <Card>
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold">Marks Entry List</h3>
            <Button
              label="Add Marks Entry"
              icon="pi pi-plus"
              onClick={() => setView("add")}
            />
          </div>

          <DataTable
            value={marksList}
            paginator
            rows={10}
            showGridlines
            expandedRows={expandedRows}
            onRowToggle={(e) => setExpandedRows(e.data)}
            rowExpansionTemplate={rowExpansionTemplate}
            dataKey="id"
          >
            <Column expander style={{ width: "3rem" }} />
            <Column header="Sr No." body={(_, opt) => opt.rowIndex + 1} />
            <Column field="rollNo" header="Roll Number" />
            <Column field="name" header="Student Name" />
            <Column
              header="Total Marks Obtained"
              body={(row) => (
                <span>
                  {row.totalMarks} <span className="text-xs">(Max 500)</span>
                </span>
              )}
            />
          </DataTable>
        </Card>
      )}


      {view === "add" && (
        <>

          <div className="flex justify-between items-center mb-3">
            <h3 className="text-lg font-semibold">Add Marks Entry</h3>
            <Button
              label="Go Back"
              icon="pi pi-arrow-left"
              className="p-button-text"
              onClick={() => setView("list")}
            />
          </div>

        
          <Card className="mb-4">
            <label className="block mb-2 font-medium">
              Enter Roll Number *
            </label>
            <div className="flex flex-col md:flex-row gap-3">
              <InputText placeholder="Enter Roll Number" className="w-full" />
              <div className="flex gap-2">
                <Button
                  label="Search"
                  icon="pi pi-search"
                  onClick={() => setShowSearchResult(true)}
                />
                <Button
                  label="Clear"
                  icon="pi pi-refresh"
                  className="p-button-secondary"
                />
              </div>
            </div>
          </Card>

      
          {showSearchResult && (
            <Card className="mb-4">
              <h4 className="font-semibold mb-4 border-b pb-2">
                Student Information
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block mb-1 font-medium">
                    Student Name *
                  </label>
                  <InputText placeholder="Student Name" className="w-full" />
                </div>
                <div>
                  <label className="block mb-1 font-medium">
                    Select Course *
                  </label>
                  <Dropdown
                    value="M.Tech"
                    placeholder="Select Course"
                    className="w-full"
                  />
                </div>
                <div>
                  <label className="block mb-1 font-medium">Branch *</label>
                  <Dropdown
                    value="Mechanical Engineering (ME)"
                    placeholder="Select Branch"
                    className="w-full"
                  />
                </div>
              </div>
            </Card>
          )}

          {showSearchResult && (
            <Card className="mb-4">
              <h4 className="font-semibold mb-3">Fill Marks Entry</h4>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <Dropdown placeholder="Select Subject" />
                <InputText placeholder="Enter Marks Obtained *" />
                <InputText placeholder="Enter Maximum Marks *" />
                <InputText value="A" disabled />
                <Calendar placeholder="dd/mm/yyyy" dateFormat="dd/mm/yy" />
                <Dropdown value="Passed" />
                <InputText placeholder="Enter Remarks" />
              </div>

              <div className="mt-4 flex gap-3">
                <Button
                  label="Add"
                  icon="pi pi-plus"
                  onClick={() => setShowSubjectList(true)}
                />
                <Button
                  label="Clear"
                  icon="pi pi-refresh"
                  className="p-button-secondary ml-2"
                />
              </div>
            </Card>
          )}

          {showSubjectList && (
            <Card>
                  <h4 className="font-semibold mb-3"> Marks Entry List :</h4>
              <DataTable
                value={subjectMarksList}
                paginator
                rows={5}
                expandedRows={expandedSubjectRows}
                onRowToggle={(e) => setExpandedSubjectRows(e.data)}
                rowExpansionTemplate={subjectExpansionTemplate}
                dataKey="id"
              >
                <Column expander />
                <Column header="Sr No." body={(_, i) => i.rowIndex + 1} />
                <Column field="subject" header="Subject" />
                <Column field="marks" header="Marks Obtained" />
                <Column field="maxMarks" header="Maximum Marks" />
              </DataTable>

              <div className="flex gap-3 mt-4">
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

export default MarksEntryPage;
