import React, { useState } from "react";
import PageLayout from "../../../components/PageLayout";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";

interface CandidateRank {
  srNo: number;
  regNumber: string;
  studentName: string;
  fatherName: string;
  dob: string;
  gender: string;
  category: string;
  totalMarks: number;
  obtainedMarks: number;
  percentage: string;
}

const CandidatesRankList: React.FC = () => {
  const [searchRegNo, setSearchRegNo] = useState<string>("");
  const [filteredData, setFilteredData] = useState<CandidateRank[]>([]);
  const [hasSearched, setHasSearched] = useState<boolean>(false);

  // Mock Data (Actual scenario mein ye API se aayega)
  const allCandidates: CandidateRank[] = [
    {
      srNo: 1,
      regNumber: "202310001",
      studentName: "Arvin Sharma",
      fatherName: "Rajesh Sharma",
      dob: "2005-01-15",
      gender: "Male",
      category: "General",
      totalMarks: 360,
      obtainedMarks: 280,
      percentage: "77.78%",
    },
    {
      srNo: 2,
      regNumber: "202310001",
      studentName: "Arvin Sharma",
      fatherName: "Rajesh Sharma",
      dob: "2005-01-15",
      gender: "Male",
      category: "General",
      totalMarks: 360,
      obtainedMarks: 280,
      percentage: "77.78%",
    },
  ];

  const handleSearch = () => {
    if (searchRegNo.trim() === "") {
      setFilteredData(allCandidates);
    } else {
      const result = allCandidates.filter((item) =>
        item.regNumber.toLowerCase().includes(searchRegNo.toLowerCase())
      );
      setFilteredData(result);
    }
    setHasSearched(true); // Flag set karega ki search ho chuka hai
  };

  // Clear Handle: Sab reset kar dega aur list chhupa dega
  const handleClear = () => {
    setSearchRegNo("");
    setFilteredData([]);
    setHasSearched(false);
  };

  return (
    <PageLayout title="Candidates Rank">
      <div className="bg-white p-4 rounded shadow-sm border border-gray-200">
        {/* Header Section */}
        <div className="mb-4">
          <h2 className="text-xl font-bold text-gray-800 tracking-tight">
            Merit List
          </h2>
          <div className="flex items-center gap-2 text-xs text-gray-400 mt-1 uppercase font-semibold">
            <span>Admission Management System</span>
            <i className="pi pi-angle-right text-[10px]" />
            <span className="text-blue-500">Candidates Rank</span>
          </div>
        </div>

        {/* Search Panel */}
        <div className="bg-gray-50 p-6 rounded-lg border border-gray-100 mb-6">
          <div className="flex flex-column md:flex-row align-items-end gap-3">
            <div className="flex flex-column gap-2 flex-grow-1">
              <label className="text-sm font-bold text-gray-700">
                Student Registration Number
              </label>
              <InputText
                value={searchRegNo}
                onChange={(e) => setSearchRegNo(e.target.value)}
                placeholder="Enter Registration Number"
                className="p-inputtext-sm"
              />
            </div>
            <div className="flex gap-2">
              <Button
                label="Search"
                icon="pi pi-search"
                className="p-button-primary p-button-sm px-4"
                onClick={handleSearch}
              />
              <Button
                label="Clear"
                icon="pi pi-refresh"
                className="p-button-secondary p-button-outlined p-button-sm px-4"
                onClick={handleClear}
              />
            </div>
          </div>
        </div>

        {/* Table Section: Sirf search hone par hi dikhega */}
        {hasSearched && (
          <div className="animate-fade-in">
            <div className="flex justify-between items-center mb-3 border-b pb-2">
              <h4 className="m-0 font-bold text-gray-600 uppercase text-xs">
                Candidate Rank Details
              </h4>
            </div>

            <DataTable
              value={filteredData}
              paginator
              rows={10}
              rowsPerPageOptions={[10, 25, 50, 100]}
              className="p-datatable-sm text-sm"
              stripedRows
              showGridlines
              emptyMessage="No matching records found."
            >
              <Column field="srNo" header="Sr.No." style={{ width: "4rem" }} />
              <Column field="regNumber" header="Registration Number" sortable />
              <Column field="studentName" header="Student Name" sortable />
              <Column field="fatherName" header="Father's Name" />
              <Column field="dob" header="Date of Birth" />
              <Column field="gender" header="Gender" />
              <Column field="category" header="Category" />
              <Column field="totalMarks" header="Total Marks" />
              <Column field="obtainedMarks" header="Obtained Marks" />
              <Column
                field="percentage"
                header="Percentage"
                body={(rowData) => (
                  <span className="font-bold text-blue-600">
                    {rowData.percentage}
                  </span>
                )}
              />
            </DataTable>
          </div>
        )}

        {!hasSearched && (
          <div className="text-center py-8 border-2 border-dashed border-gray-100 rounded-lg">
            <i className="pi pi-search text-gray-200 text-5xl mb-3"></i>
            <p className="text-gray-400">
              Enter Registration Number and click search to view candidate
              details.
            </p>
          </div>
        )}
      </div>
    </PageLayout>
  );
};

export default CandidatesRankList;
