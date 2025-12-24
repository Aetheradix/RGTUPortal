import React, { useState } from "react";
import PageLayout from "../../../components/PageLayout";
import { DataTable, type DataTableExpandedRows } from "primereact/datatable";
import { Column } from "primereact/column";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";

interface StudentAllotment {
  id: string;
  srNo: number;
  regNo: string;
  studentName: string;
  course: string;
  specialization: string;
  collegeName: string;
  allotmentStatus: string;
  feeStatus: string;
  allotmentDate: string;
  status: string;
}

const GetAllotmentLetter: React.FC = () => {
  const [regNoInput, setRegNoInput] = useState<string>("");
  const [showTable, setShowTable] = useState<boolean>(false);
  const [globalFilter, setGlobalFilter] = useState<string>("");
  const [expandedRows, setExpandedRows] = useState<DataTableExpandedRows>();

  const [data] = useState<StudentAllotment[]>([
    {
      id: "1",
      srNo: 1,
      regNo: "202400123456",
      studentName: "Rohan Sharma",
      course: "B.Tech",
      specialization: "Computer Science & Engineering",
      collegeName: "MANIT Bhopal",
      allotmentStatus: "Allotted",
      feeStatus: "Paid",
      allotmentDate: "15/11/2024",
      status: "Active",
    },
    {
      id: "2",
      srNo: 2,
      regNo: "202400789012",
      studentName: "Anjali Verma",
      course: "M.Tech",
      specialization: "Data Science",
      collegeName: "IET-DAVV Indore",
      allotmentStatus: "Under Review",
      feeStatus: "Pending",
      allotmentDate: "20/11/2024",
      status: "Inactive",
    },
  ]);

  const handleSearch = () => {
    if (regNoInput.trim() !== "") setShowTable(true);
  };

  const handleClear = () => {
    setRegNoInput("");
    setShowTable(false);
    setExpandedRows([]);
  };

  const rowExpansionTemplate = (data: StudentAllotment) => {
    return (
      <div className="py-3 px-6 bg-gray-50 border-bottom-1 border-gray-200">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
          <div className="flex flex-row items-center gap-3">
            <span className="text-xs font-bold text-gray-900 uppercase">
              Allotment Date:
            </span>
            <span className="text-sm text-gray-600">{data.allotmentDate}</span>
          </div>

          <div className="flex flex-row items-center gap-3">
            <span className="text-xs font-bold text-gray-900 uppercase">
              Status:
            </span>
            <span
              className={`text-sm font-bold ${
                data.status === "Active" ? "text-green-600" : "text-red-500"
              }`}
            >
              {data.status}
            </span>
          </div>

          <div className="flex flex-row items-center gap-3">
            <span className="text-xs font-bold text-gray-900 uppercase">
              Actions:
            </span>
            <div className="flex gap-2">
              <Button
              label="Edit"
                icon="pi pi-pencil"
                className="p-button-rounded p-button-success p-button-sm"
                title="Edit"
              />
              <Button
              label="Delete"
                icon="pi pi-trash"
                className="p-button-rounded p-button-danger p-button-sm"
                title="Delete"
              />
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <PageLayout title="Get Allotment Letter">
      <div className="bg-white p-4 rounded shadow-sm border border-gray-200">
        <h2 className="text-xl font-bold text-gray-800 mb-4 border-b pb-2">
          Get Allotment Letter List
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <div className="flex flex-column gap-1">
            <label className="text-xs font-bold text-gray-600">
              Registration No.
            </label>
            <InputText
              value={regNoInput}
              onChange={(e) => setRegNoInput(e.target.value)}
              placeholder="Enter Registration No."
              className="p-inputtext-sm"
            />
          </div>
        </div>

        <div className="flex gap-2 mb-6">
          <Button
            label="Search"
            icon="pi pi-search"
            className="p-button-sm px-4"
            onClick={handleSearch}
          />
          <Button
            label="Clear"
            icon="pi pi-refresh"
            className="p-button-secondary p-button-outlined p-button-sm px-4"
            onClick={handleClear}
          />
        </div>

        {showTable && (
          <div className="mt-4">
            <div className="flex justify-between items-center mb-3">
              <h3 className="text-sm font-bold text-gray-600 uppercase">
                Search Results
              </h3>
              <span className="p-input-icon-left">
                <i className="pi pi-search" />
                <InputText
                  onInput={(e) =>
                    setGlobalFilter((e.target as HTMLInputElement).value)
                  }
                  placeholder="Global Search..."
                  className="p-inputtext-sm"
                />
              </span>
            </div>

            <DataTable
              value={data}
              expandedRows={expandedRows}
              onRowToggle={(e) =>
                setExpandedRows(e.data as DataTableExpandedRows)
              }
              rowExpansionTemplate={rowExpansionTemplate}
              dataKey="id"
              paginator
              rows={10}
              globalFilter={globalFilter}
              className="p-datatable-sm"
              stripedRows
              showGridlines
            >
              <Column expander style={{ width: "3rem" }} />
              <Column field="srNo" header="Sr No." style={{ width: "3rem" }} />
              <Column field="regNo" header="Registration No." />
              <Column field="studentName" header="Student Name" />
              <Column field="course" header="Course" />
              <Column field="specialization" header="Specialization" />
              <Column field="collegeName" header="College Name" />
              <Column field="allotmentStatus" header="Allotment Status" />
              <Column field="feeStatus" header="Fee Status" />
            </DataTable>
          </div>
        )}
      </div>
    </PageLayout>
  );
};

export default GetAllotmentLetter;
