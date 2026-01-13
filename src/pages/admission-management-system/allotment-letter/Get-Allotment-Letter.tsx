import React, { useState } from "react";
import PageLayout from "../../../components/PageLayout";
import { DataTable, type DataTableExpandedRows, type DataTableValueArray } from "primereact/datatable";
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
  
  const [expandedRows, setExpandedRows] = useState<DataTableExpandedRows | DataTableValueArray | undefined>(undefined);

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
    setExpandedRows(undefined); 
  };

  const rowExpansionTemplate = (data: StudentAllotment) => {
    return (
      <div className="py-3 px-6 bg-gray-50 border-b border-gray-200">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
          <div className="flex flex-row items-center gap-3">
            <span className="text-xs font-bold text-gray-900 uppercase">Allotment Date:</span>
            <span className="text-sm text-gray-600">{data.allotmentDate}</span>
          </div>

          <div className="flex flex-row items-center gap-3">
            <span className="text-xs font-bold text-gray-900 uppercase">Status:</span>
            <span className={`text-sm font-bold ${data.status === "Active" ? "text-green-600" : "text-red-500"}`}>
              {data.status}
            </span>
          </div>

          <div className="flex flex-row items-center gap-3">
            <span className="text-xs font-bold text-gray-900 uppercase">Actions:</span>
            <div className="flex gap-2">
              <Button icon="pi pi-pencil" className="p-button-rounded p-button-success p-button-sm" />
              <Button icon="pi pi-trash" className="p-button-rounded p-button-danger p-button-sm" />
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <PageLayout title="Get Allotment Letter">
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
        <h2 className="text-xl font-bold text-gray-800 mb-6 border-b pb-3 flex items-center gap-2">
          <i className="pi pi-file-pdf text-indigo-500" /> Get Allotment Letter List
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <div className="flex flex-col gap-1">
            <label className="text-xs font-bold text-gray-600 uppercase">Registration No.</label>
            <InputText
              value={regNoInput}
              onChange={(e) => setRegNoInput(e.target.value)}
              placeholder="Enter Registration No."
              className="p-inputtext-sm"
            />
          </div>
        </div>

        <div className="flex gap-2 mb-8">
          <Button label="Search" icon="pi pi-search" className="p-button-sm px-6" onClick={handleSearch} />
          <Button label="Clear" icon="pi pi-refresh" className="p-button-secondary p-button-outlined p-button-sm px-6" onClick={handleClear} />
        </div>

        {showTable && (
          <div className="animate-fadein">
            <div className="flex flex-col md:flex-row justify-between items-center mb-4 gap-4">
              <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wider">Search Results</h3>
              <span className="p-input-icon-left w-full md:w-auto">
                <i className="pi pi-search" />
                <InputText
                  onInput={(e) => setGlobalFilter((e.target as HTMLInputElement).value)}
                  placeholder="Filter results..."
                  className="p-inputtext-sm w-full"
                />
              </span>
            </div>

            <DataTable
              value={data}
              expandedRows={expandedRows}
              onRowToggle={(e) => setExpandedRows(e.data)}
              rowExpansionTemplate={rowExpansionTemplate}
              dataKey="id"
              paginator
              rows={10}
              globalFilter={globalFilter}
              className="p-datatable-sm shadow-sm border rounded-lg overflow-hidden"
              stripedRows
              showGridlines
            >
              <Column expander style={{ width: "3rem" }} />
              <Column field="srNo" header="Sr No." style={{ width: "4rem" }} />
              <Column field="regNo" header="Registration No." sortable />
              <Column field="studentName" header="Student Name" sortable />
              <Column field="course" header="Course" sortable />
              <Column field="specialization" header="Specialization" sortable />
              <Column field="collegeName" header="College Name" sortable />
              <Column field="allotmentStatus" header="Allotment" sortable />
              <Column field="feeStatus" header="Fee Status" sortable />
            </DataTable>
          </div>
        )}
      </div>
    </PageLayout>
  );
};

export default GetAllotmentLetter;