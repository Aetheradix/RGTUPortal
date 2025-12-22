/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import PageLayout from "@/components/PageLayout";
import { Card } from "primereact/card";
import { InputText } from "primereact/inputtext";
import { Dropdown } from "primereact/dropdown";
import { Calendar } from "primereact/calendar";
import { Button } from "primereact/button";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Tag } from "primereact/tag";

interface Marksheet {
  id: number;
  rollNo: string;
  academicYear: string;
  generateStatus: string;
  generateDate: string;
  printStatus: string;
  printDate: string;
}

const academicYearOptions = [
  { label: "Select", value: "" },
  { label: "2024-2025", value: "2024-2025" },
];

const statusOptions = [
  { label: "Pending", value: "Pending" },
  { label: "Generated", value: "Generated" },
  { label: "Printed", value: "Printed" },
];

const marksheetList: Marksheet[] = [
  {
    id: 1,
    rollNo: "0192CA221034",
    academicYear: "2024-2025",
    generateStatus: "Generated",
    generateDate: "30-Nov-2024",
    printStatus: "Printed",
    printDate: "30-Nov-2024",
  },
  {
    id: 2,
    rollNo: "0192CA221035",
    academicYear: "2024-2025",
    generateStatus: "Pending",
    generateDate: "-",
    printStatus: "Pending",
    printDate: "-",
  },
  {
    id: 3,
    rollNo: "0192CA221036",
    academicYear: "2024-2025",
    generateStatus: "Generated",
    generateDate: "01-Dec-2024",
    printStatus: "Pending",
    printDate: "-",
  },
];

const MarksheetGenerationPrinting: React.FC = () => {
  const [showForm, setShowForm] = useState(false);
  const [expandedRows, setExpandedRows] = useState<any>(null);

  return (
    <PageLayout title="Marksheet Generation Printing">
   
      {!showForm && (
        <Card className="mb-4">
          <div className="flex justify-between items-center mb-3">
            <h3 className="font-semibold">Marksheet Generation Printing</h3>
            <Button
              label="Marksheet Generate"
              icon="pi pi-plus"
              onClick={() => setShowForm(true)}
            />
          </div>

          <DataTable
            value={marksheetList}
            showGridlines
            expandedRows={expandedRows}
            onRowToggle={(e) => setExpandedRows(e.data)}
            rowExpansionTemplate={(row: Marksheet) => (
              <div className="p-4 grid grid-cols-1 md:grid-cols-3 gap-4 bg-gray-50 text-sm">
                <div>
                  <strong>Marksheet Generation Date:</strong> {row.generateDate}
                </div>

                <div>
                  <strong>Marksheet Print Status:</strong>{" "}
                  <Tag
                    value={row.printStatus}
                    severity={
                      row.printStatus === "Printed" ? "success" : "warning"
                    }
                  />
                </div>

                <div>
                  <strong>Marksheet Printing Date:</strong> {row.printDate}
                </div>

                <div className="md:col-span-3">
                  <Button
                    label="Preview Generated Marksheet"
                    icon="pi pi-file-pdf"
                    className="p-button-text p-button-danger"
                    onClick={() => alert("PDF Preview Open")}
                  />
                </div>
              </div>
            )}
          >
            <Column expander style={{ width: "3rem" }} />
            <Column header="Sr No." body={(_, opt) => opt.rowIndex + 1} />
            <Column field="rollNo" header="Roll Number" />
            <Column field="academicYear" header="Academic Year" />
            <Column
              field="generateStatus"
              header="Marksheet Generate Status"
              body={(row) => (
                <Tag
                  value={row.generateStatus}
                  severity={
                    row.generateStatus === "Generated" ? "success" : "warning"
                  }
                />
              )}
            />
          </DataTable>
        </Card>
      )}

  
      {showForm && (
        <Card>
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-semibold">Marksheet Generation Printing</h3>
            <Button
              label="Go Back"
              icon="pi pi-arrow-left"
              className="p-button-text"
              onClick={() => setShowForm(false)}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <div>
              <label className="block text-sm mb-1">Enter Roll Number *</label>
          
              <InputText placeholder="Enter Roll No." className="w-full" />
            </div>

            <div>
              <label className="block text-sm mb-1">
                Select Academic Year *
              </label>
          
              <Dropdown
                options={academicYearOptions}
                placeholder="Select"
                className="w-full"
              />
            </div>

            <div>
              <label className="block text-sm mb-1">
                Select Marksheet Generate Status *
              </label>
           
              <Dropdown
                options={statusOptions}
                value="Pending"
                className="w-full"
              />
            </div>

            <div>
              <label className="block text-sm mb-1">
                Enter Marksheet Generate Date *
              </label>
              <Calendar
                dateFormat="dd/mm/yy"
                className="w-full"
                placeholder="dd/mm/yyyy"
              />
            </div>

            <div>
              <label className="block text-sm mb-1">
                Select Marksheet Print Status *
              </label>
      
              <Dropdown
                options={statusOptions}
                value="Pending"
                className="w-full"
              />
            </div>

            <div>
              <label className="block text-sm mb-1">
                Enter Marksheet Printing Date *
              </label>
              <Calendar
                dateFormat="dd/mm/yy"
                className="w-full"
                placeholder="dd/mm/yyyy"
              />
            </div>

            <div className="md:col-span-3">
                <label className="block text-sm mb-1">
               Preview Generated Marksheet
              </label>
              <Button
                label="Preview Generated Marksheet"
                icon="pi pi-file-pdf"
                className="p-button-text p-button-danger"
                onClick={() => alert("PDF Preview Open")}
              />
            </div>
          </div>

          <div className="flex gap-3">
            <Button label="Generate" icon="pi pi-cog" />
            <Button
              label="Clear"
              icon="pi pi-refresh"
              className="p-button-secondary"
            />
          </div>
        </Card>
      )}
    </PageLayout>
  );
};

export default MarksheetGenerationPrinting;
