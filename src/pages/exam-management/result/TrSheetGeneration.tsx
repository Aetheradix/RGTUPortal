/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import PageLayout from "@/components/PageLayout";
import { Card } from "primereact/card";
import { Dropdown } from "primereact/dropdown";
import { Calendar } from "primereact/calendar";
import { Button } from "primereact/button";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Tag } from "primereact/tag";

interface TRSheet {
  id: number;
  examType: string;
  academicYear: string;
  publishedDate: string;
  status: string;
}

const examTypeOptions = [
  { label: "Select", value: "" },
  { label: "Mathematics Exam", value: "Mathematics Exam" },
  { label: "Physics Exam", value: "Physics Exam" },
  { label: "Chemistry Exam", value: "Chemistry Exam" },
];

const academicYearOptions = [
  { label: "Select", value: "" },
  { label: "2024-2025", value: "2024-2025" },
];

const trSheetList: TRSheet[] = [
  {
    id: 1,
    examType: "Mathematics Exam",
    academicYear: "2024-2025",
    publishedDate: "29/11/2024",
    status: "Generated",
  },
  {
    id: 2,
    examType: "Physics Exam",
    academicYear: "2024-2025",
    publishedDate: "30/11/2024",
    status: "Generated",
  },
  {
    id: 3,
    examType: "Chemistry Exam",
    academicYear: "2024-2025",
    publishedDate: "01/12/2024",
    status: "Generated",
  },
];

const AddTRSheetGeneration: React.FC = () => {
  const [showList, setShowList] = useState(false);
  const [expandedRows, setExpandedRows] = useState<any>(null);

  return (
    <PageLayout title="Add TR Sheet Generation">
    
      <Card className="mb-4">
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-semibold">Add TR Sheet Generation</h3>
          <Button
            label="Go Back"
            icon="pi pi-arrow-left"
            className="p-button-text"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <div>
            <label className="block text-sm mb-1">Select Exam Type *</label>
          
            <Dropdown
              options={examTypeOptions}
              placeholder="Select"
              className="w-full"
            />
          </div>

          <div>
            <label className="block text-sm mb-1">Select Academic Year *</label>
       
            <Dropdown
              options={academicYearOptions}
              placeholder="Select"
              className="w-full"
            />
          </div>

          <div>
            <label className="block text-sm mb-1">
              Enter TR Sheet Generation Date *
            </label>
            <Calendar
              dateFormat="dd/mm/yy"
              className="w-full"
              placeholder="dd/mm/yyyy"
            />
          </div>
        </div>

        <div className="flex gap-3">
          <Button
            label="Generate"
            icon="pi pi-cog"
            onClick={() => setShowList(true)}
          />
          <Button
            label="Clear"
            icon="pi pi-refresh"
            className="p-button-secondary"
            onClick={() => setShowList(false)}
          />
        </div>
      </Card>


      {showList && (
        <Card>
          <h3 className="font-semibold mb-3">Result Publication List</h3>

          <DataTable
            value={trSheetList}
            showGridlines
            expandedRows={expandedRows}
            onRowToggle={(e) => setExpandedRows(e.data)}
            rowExpansionTemplate={(row: TRSheet) => (
              <div className="p-4 grid grid-cols-1 md:grid-cols-3 gap-4 bg-gray-50 text-sm">
                <div>
                  <strong>TR Sheet Generation Status:</strong>{" "}
                  <Tag value={row.status} severity="success" />
                </div>

                <div>
                  <Button
                    label="View TR Sheet Generation"
                    icon="pi pi-file-pdf"
                    className="p-button-text p-button-danger"
                    onClick={() => alert("PDF Open")}
                  />
                </div>
              </div>
            )}
          >
            <Column expander style={{ width: "3rem" }} />
            <Column header="Sr No." body={(_, opt) => opt.rowIndex + 1} />
            <Column field="examType" header="Exam Type" />
            <Column field="academicYear" header="Academic Year" />
            <Column field="publishedDate" header="Published Date" />
          </DataTable>
        </Card>
      )}
    </PageLayout>
  );
};

export default AddTRSheetGeneration;
