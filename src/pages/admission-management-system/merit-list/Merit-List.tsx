import React, { useState } from "react";
import PageLayout from "../../../components/PageLayout";
import { DataTable, type DataTableExpandedRows } from "primereact/datatable";
import { Column } from "primereact/column";
import { InputText } from "primereact/inputtext";

interface MeritCandidate {
  id: string;
  srNo: number;
  applNumber: string;
  candidateName: string;
  rollNumber: string;
  dob: string;
  category: string;
  totalMarks: number;
  cutoffMarks: number;
  marksObtained: number;
  allIndiaRank: number;
  stateRank: number;
  qualifyingStatus: string;
  courseName: string;
}

const ViewMeritList: React.FC = () => {
  const [globalFilter, setGlobalFilter] = useState<string>("");
  const [expandedRows, setExpandedRows] = useState<DataTableExpandedRows>();

  const [meritData] = useState<MeritCandidate[]>([
    {
      id: "1",
      srNo: 1,
      applNumber: "APPL12345",
      candidateName: "Aruhi Parihar",
      rollNumber: "R123456",
      dob: "01/01/1995",
      category: "General",
      totalMarks: 500,
      cutoffMarks: 450,
      marksObtained: 450,
      allIndiaRank: 25,
      stateRank: 5,
      qualifyingStatus: "Qualified",
      courseName: "B.Tech",
    },
    {
      id: "2",
      srNo: 2,
      applNumber: "APPL12346",
      candidateName: "Jane Smith",
      rollNumber: "R123457",
      dob: "12/02/1996",
      category: "OBC",
      totalMarks: 500,
      cutoffMarks: 430,
      marksObtained: 430,
      allIndiaRank: 42,
      stateRank: 12,
      qualifyingStatus: "Qualified",
      courseName: "B.Tech",
    },
    {
      id: "3",
      srNo: 3,
      applNumber: "APPL12347",
      candidateName: "Sam Wilson",
      rollNumber: "R123458",
      dob: "23/03/1994",
      category: "SC",
      totalMarks: 500,
      cutoffMarks: 420,
      marksObtained: 420,
      allIndiaRank: 88,
      stateRank: 20,
      qualifyingStatus: "Qualified",
      courseName: "B.Tech",
    },
  ]);

  const rowExpansionTemplate = (data: MeritCandidate) => {
    return (
      <div className="py-3 px-6 bg-gray-50 border-bottom-1 border-gray-200">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="flex flex-row items-center gap-3">
            <span className="text-xs font-bold text-gray-900">
              All India Rank
            </span>
            <span className="text-sm text-gray-600">{data.allIndiaRank}</span>
          </div>
          <div className="flex flex-row items-center gap-3">
            <span className="text-xs font-bold text-gray-900">State Rank</span>
            <span className="text-sm text-gray-600">{data.stateRank}</span>
          </div>
          <div className="flex flex-row items-center gap-3">
            <span className="text-xs font-bold text-gray-900">
              Qualifying Status
            </span>
            <span className="text-sm text-gray-600">
              {data.qualifyingStatus}
            </span>
          </div>
          <div className="flex flex-row items-center gap-3">
            <span className="text-xs font-bold text-gray-900">Course Name</span>
            <span className="text-sm text-gray-600">{data.courseName}</span>
          </div>
        </div>
      </div>
    );
  };
  const renderHeader = () => {
    return (
      <div className="flex justify-content-between align-items-center gap-2">
        <h4 className="m-0 text-gray-700">View Merit List</h4>
        <span className="p-input-icon-left">
          <i className="pi pi-search" />
          <InputText
            type="search"
            onInput={(e) =>
              setGlobalFilter((e.target as HTMLInputElement).value)
            }
            placeholder="Search..."
            className="p-inputtext-sm w-full md:w-20rem"
          />
        </span>
      </div>
    );
  };

  return (
    <PageLayout title="Merit List">
      <div className="bg-white p-4 rounded shadow-sm border border-gray-200">
        <DataTable
          value={meritData}
          paginator
          rows={10}
          rowsPerPageOptions={[10, 25, 50, 100]}
          expandedRows={expandedRows}
          onRowToggle={(e) => setExpandedRows(e.data as DataTableExpandedRows)}
          rowExpansionTemplate={rowExpansionTemplate}
          dataKey="id"
          globalFilter={globalFilter}
          header={renderHeader()}
          emptyMessage="No candidates found."
          className="p-datatable-sm text-sm"
          stripedRows
          showGridlines
        >
          <Column expander style={{ width: "3rem" }} />
          <Column field="srNo" header="Sr.No." style={{ width: "4rem" }} />
          <Column field="applNumber" header="Application Number" sortable />
          <Column field="candidateName" header="Candidate's Name" sortable />
          <Column field="rollNumber" header="Roll Number" sortable />
          <Column field="dob" header="Date of Birth" />
          <Column field="category" header="Category" sortable />
          <Column field="totalMarks" header="Total Marks" />
          <Column field="cutoffMarks" header="Cutoff Marks" />
          <Column field="marksObtained" header="Marks Obtained" sortable />
        </DataTable>
      </div>
    </PageLayout>
  );
};
export default ViewMeritList;
