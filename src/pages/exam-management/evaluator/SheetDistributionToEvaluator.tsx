/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import PageLayout from "@/components/PageLayout";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Dropdown } from "primereact/dropdown";
import { Calendar } from "primereact/calendar";
import { InputText } from "primereact/inputtext";
import { Tag } from "primereact/tag";

interface SheetDistribution {
  id: number;
  evaluatorName: string;
  sheetTitle: string;
  dueDate: string;
  remark: string;
  status: string;
}

const evaluatorOptions = [
  { label: "Select", value: "" },
  { label: "Ravi Kumar", value: "Ravi Kumar" },
  { label: "Priya Sharma", value: "Priya Sharma" },
  { label: "Amit Patel", value: "Amit Patel" },
];

const sheetOptions = [
  { label: "Select", value: "" },
  { label: "B.Tech in Computer Science", value: "B.Tech in Computer Science" },
  {
    label: "B.Tech in Electrical Engineering",
    value: "B.Tech in Electrical Engineering",
  },
  {
    label: "B.Tech in Mechanical Engineering",
    value: "B.Tech in Mechanical Engineering",
  },
];

const sheetList: SheetDistribution[] = [
  {
    id: 1,
    evaluatorName: "Ravi Kumar",
    sheetTitle: "B.Tech in Computer Science",
    dueDate: "15/12/2024",
    remark: "Needs to evaluate the practicals",
    status: "Active",
  },
  {
    id: 2,
    evaluatorName: "Priya Sharma",
    sheetTitle: "B.Tech in Electrical Engineering",
    dueDate: "20/12/2024",
    remark: "Needs to evaluate the practicals",
    status: "Active",
  },
  {
    id: 3,
    evaluatorName: "Amit Patel",
    sheetTitle: "B.Tech in Mechanical Engineering",
    dueDate: "22/12/2024",
    remark: "Needs to evaluate the practicals",
    status: "Active",
  },
];

const SheetDistributionToEvaluator: React.FC = () => {
  const [view, setView] = useState<"list" | "add">("list");
  const [expandedRows, setExpandedRows] = useState<any>(null);

  // Form state
  const [evaluatorName, setEvaluatorName] = useState("");
  const [sheetTitle, setSheetTitle] = useState("");
  const [dueDate, setDueDate] = useState<Date | null>(null);
  const [remark, setRemark] = useState("");
  const [status, setStatus] = useState("");

  const rowExpansionTemplate = (data: SheetDistribution) => {
    return (
      <div className="p-4 bg-gray-50 grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
        <div>
          <label className="block mb-1">Additional Remark</label>
          <div>{data.remark}</div>
        </div>
        <div>
          <label className="block mb-1">Status</label>
          <Tag
            value={data.status}
            severity={data.status === "Active" ? "success" : "danger"}
          />
        </div>
      </div>
    );
  };

  const handleSave = () => {
    console.log({ evaluatorName, sheetTitle, dueDate, remark, status });
    alert("Sheet Distribution Saved! (Check console)");
    handleClear();
  };

  const handleClear = () => {
    setEvaluatorName("");
    setSheetTitle("");
    setDueDate(null);
    setRemark("");
    setStatus("");
  };

  return (
    <PageLayout title="Sheet Distribution To Evaluator">
      {/* List View */}
      {view === "list" && (
        <Card className="mb-4">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold">
              Sheet Distribution To Evaluator List
            </h3>
            <Button
              label="Add Sheet Distribution"
              icon="pi pi-plus"
              onClick={() => setView("add")}
            />
          </div>

  <DataTable
  value={sheetList}
  paginator
  rows={10}
  showGridlines
  dataKey="id"
  className="p-datatable-sm"
  expandedRows={expandedRows}
  onRowToggle={(e) => setExpandedRows(e.data)}
  rowExpansionTemplate={rowExpansionTemplate}
>
  <Column expander style={{ width: "3rem" }} />

  <Column
    header="Sr No."
    body={(_, opt) => opt.rowIndex + 1}
    style={{ width: "80px" }}
    sortable
  />

  <Column
    field="evaluatorName"
    header="Evaluator Name"
    sortable
  />

  <Column
    field="sheetTitle"
    header="Sheet Title"
    sortable
  />

  <Column
    field="dueDate"
    header="Due Date"
    sortable
  />
</DataTable>

        </Card>
      )}

      {/* Add Sheet Distribution */}
      {/* Add Sheet Distribution */}
      {view === "add" && (
        <Card>
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold">Add Sheet Distribution</h3>
            <Button
              label="Go Back"
              icon="pi pi-arrow-left"
              className="p-button-text"
              onClick={() => setView("list")}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <div>
              <label className="block mb-1">Select Evaluator *</label>
              <Dropdown
                options={evaluatorOptions}
                placeholder="Select"
                className="w-full"
                value={evaluatorName}
                onChange={(e) => setEvaluatorName(e.value)}
              />
            </div>

            <div>
              <label className="block mb-1">Select Sheet *</label>
              <Dropdown
                options={sheetOptions}
                placeholder="Select"
                className="w-full"
                value={sheetTitle}
                onChange={(e) => setSheetTitle(e.value)}
              />
            </div>

            <div>
              <label className="block mb-1">Enter Due Date *</label>
              <Calendar
                value={dueDate}
                onChange={(e: { value: Date | null | undefined }) =>
                  setDueDate(e.value ?? null)
                }
                placeholder="dd/mm/yyyy"
                dateFormat="dd/mm/yy"
                className="w-full"
              />
            </div>

            {/* Adjusted Remark + Status Row */}
            <div className="md:col-span-2 grid grid-cols-3 gap-4 items-end">
              <div className="col-span-2">
                <label className="block mb-1">Additional Remark *</label>
                <InputText
                  placeholder="Enter Remarks here"
                  className="w-full"
                  value={remark}
                  onChange={(e) => setRemark(e.target.value)}
                />
              </div>
              <div>
                <label className="block mb-1">Status *</label>
                <Dropdown
                  options={[
                    { label: "Active", value: "Active" },
                    { label: "Inactive", value: "Inactive" },
                  ]}
                  placeholder="Select"
                  className="w-full"
                  value={status}
                  onChange={(e) => setStatus(e.value)}
                />
              </div>
            </div>
          </div>

          <div className="flex gap-3">
            <Button label="Save" icon="pi pi-save" onClick={handleSave} />
            <Button
              label="Clear"
              icon="pi pi-refresh"
              className="p-button-secondary"
              onClick={handleClear}
            />
          </div>
        </Card>
      )}
    </PageLayout>
  );
};

export default SheetDistributionToEvaluator;
