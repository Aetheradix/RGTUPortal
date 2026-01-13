import React, { useState } from "react";
import PageLayout from "../../../components/PageLayout";
import { DataTable, type DataTableExpandedRows, type DataTableValueArray } from "primereact/datatable";
import { Column } from "primereact/column";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { Dropdown } from "primereact/dropdown";
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

const GenerateMeritList: React.FC = () => {
  const [selectedCourse, setSelectedCourse] = useState<string | null>(null);
  const [selectedExam, setSelectedExam] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [minMarks, setMinMarks] = useState<string>("");
  const [domicile, setDomicile] = useState<string | null>(null);

  const [meritData, setMeritData] = useState<MeritCandidate[]>([]);
  const [showList, setShowList] = useState<boolean>(false);
  const [expandedRows, setExpandedRows] = useState<DataTableExpandedRows | DataTableValueArray | undefined>(undefined);

  const courses = ["B.Tech", "M.Tech", "BCA", "MCA", "B.Sc (IT)", "M.Sc (IT)", "MBA (Tech Management)"];
  const exams = ["JEE Main", "CET", "12th Marks"];
  const categories = ["General", "OBC", "SC", "ST"];
  const domicileOptions = ["MP", "Non-MP"];

  const mockData: MeritCandidate[] = [
    {
      id: "1",
      srNo: 1,
      applNumber: "APPL12345",
      candidateName: "John Doe",
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
  ];

  const handleGenerate = () => {
    setMeritData(mockData);
    setShowList(true);
  };

  const handleClear = () => {
    setSelectedCourse(null);
    setSelectedExam(null);
    setSelectedCategory(null);
    setMinMarks("");
    setDomicile(null);
    setMeritData([]);
    setShowList(false);
    setExpandedRows(undefined);
  };

  const rowExpansionTemplate = (data: MeritCandidate) => {
    return (
      <div className="py-4 px-6 bg-gray-50 border-round shadow-inner mx-3 my-2 border-left-3 border-blue-500">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="flex flex-col">
            <span className="text-[10px] font-bold text-gray-500 uppercase">All India Rank</span>
            <span className="text-sm font-semibold text-gray-800">{data.allIndiaRank}</span>
          </div>
          <div className="flex flex-col">
            <span className="text-[10px] font-bold text-gray-500 uppercase">State Rank</span>
            <span className="text-sm font-semibold text-gray-800">{data.stateRank}</span>
          </div>
          <div className="flex flex-col">
            <span className="text-[10px] font-bold text-gray-500 uppercase">Qualifying Status</span>
            <span className={`text-sm font-bold ${data.qualifyingStatus === 'Qualified' ? 'text-green-600' : 'text-red-600'}`}>
              {data.qualifyingStatus}
            </span>
          </div>
          <div className="flex flex-col">
            <span className="text-[10px] font-bold text-gray-500 uppercase">Target Course</span>
            <span className="text-sm font-semibold text-gray-800">{data.courseName}</span>
          </div>
        </div>
      </div>
    );
  };

  return (
    <PageLayout title="Generate Merit List">
      <div className="bg-white p-5 rounded shadow-sm border border-gray-200">
        <h2 className="text-xl font-bold text-gray-800 mb-4 border-b pb-2">
          Merit List Configuration
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-6">
          <div className="field">
            <label className="text-xs font-bold block mb-1 uppercase text-gray-600">Course Name*</label>
            <Dropdown value={selectedCourse} options={courses} onChange={(e) => setSelectedCourse(e.value)} placeholder="Select" className="p-inputtext-sm w-full" />
          </div>
          <div className="field">
            <label className="text-xs font-bold block mb-1 uppercase text-gray-600">Exam Type</label>
            <Dropdown value={selectedExam} options={exams} onChange={(e) => setSelectedExam(e.value)} placeholder="Select" className="p-inputtext-sm w-full" />
          </div>
          <div className="field">
            <label className="text-xs font-bold block mb-1 uppercase text-gray-600">Category</label>
            <Dropdown value={selectedCategory} options={categories} onChange={(e) => setSelectedCategory(e.value)} placeholder="Select" className="p-inputtext-sm w-full" />
          </div>
          <div className="field">
            <label className="text-xs font-bold block mb-1 uppercase text-gray-600">Min. Marks</label>
            <InputText value={minMarks} onChange={(e) => setMinMarks(e.target.value)} placeholder="Enter Marks" className="p-inputtext-sm w-full" />
          </div>
          <div className="field">
            <label className="text-xs font-bold block mb-1 uppercase text-gray-600">Domicile Status</label>
            <Dropdown value={domicile} options={domicileOptions} onChange={(e) => setDomicile(e.value)} placeholder="Select" className="p-inputtext-sm w-full" />
          </div>
        </div>

        <div className="flex gap-3 mb-6">
          <Button label="Generate Merit List" icon="pi pi-cog" className="p-button-primary p-button-sm px-4" onClick={handleGenerate} />
          <Button label="Clear All" icon="pi pi-refresh" className="p-button-secondary p-button-outlined p-button-sm px-4" onClick={handleClear} />
        </div>

        {showList && (
          <div className="mt-4 border-t border-gray-100 pt-4 animate-fade-in">
            <DataTable
              value={meritData}
              expandedRows={expandedRows}
              onRowToggle={(e) => setExpandedRows(e.data)}
              rowExpansionTemplate={rowExpansionTemplate}
              dataKey="id"
              paginator
              rows={10}
              className="p-datatable-sm text-sm"
              stripedRows
              showGridlines
            >
              <Column expander style={{ width: "3rem" }} />
              <Column field="srNo" header="Rank" style={{ width: "4rem" }} body={(rd) => <b>#{rd.srNo}</b>} />
              <Column field="applNumber" header="Application ID" sortable />
              <Column field="candidateName" header="Candidate Name" sortable />
              <Column field="rollNumber" header="Roll No." />
              <Column field="category" header="Category" />
              <Column field="marksObtained" header="Obtained" body={(rowData) => <span className="font-bold text-blue-600">{rowData.marksObtained}</span>} />
              <Column field="cutoffMarks" header="Cutoff" />
              <Column field="totalMarks" header="Total" />
            </DataTable>
          </div>
        )}
      </div>
    </PageLayout>
  );
};

export default GenerateMeritList;