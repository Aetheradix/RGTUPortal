import React, { useState } from "react";
import PageLayout from "../../../components/PageLayout";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { Dropdown } from "primereact/dropdown";

// --- Interface for Fee Structure ---
interface FeeBreakdown {
  srNo: number;
  course: string;
  feeType: string;
  amount: string;
  status: string;
}

const ViewFeeStructure: React.FC = () => {
  // Filter States
  const [selectedCourse, setSelectedCourse] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedYear, setSelectedYear] = useState<string | null>(null);
  const [globalFilter, setGlobalFilter] = useState<string>("");
  const [showTable, setShowTable] = useState<boolean>(false);

  // Dropdown Options
  const courses = [
    "B.Tech",
    "M.Tech",
    "BCA",
    "MCA",
    "B.Sc (IT)",
    "M.Sc (IT)",
    "MBA (Tech Management)",
  ];
  const categories = ["General", "OBC", "SC", "ST", "EWS", "PWD"];
  const years = ["2024-2025", "2025-2026"];

  // Mock Data
  const feeData: FeeBreakdown[] = [
    {
      srNo: 1,
      course: "B.Tech",
      feeType: "One-time Fee",
      amount: "50,000",
      status: "Active",
    },
    {
      srNo: 2,
      course: "M.Tech",
      feeType: "Semester Fee",
      amount: "30,000",
      status: "Inactive",
    },
    {
      srNo: 3,
      course: "BCA",
      feeType: "Annual Fee",
      amount: "25,000",
      status: "Active",
    },
    {
      srNo: 4,
      course: "MCA",
      feeType: "One-time Fee",
      amount: "40,000",
      status: "Active",
    },
    {
      srNo: 5,
      course: "MBA (Tech Management)",
      feeType: "Semester Fee",
      amount: "35,000",
      status: "Active",
    },
  ];

  const handleSearch = () => {
    if (selectedCourse && selectedCategory && selectedYear) {
      setShowTable(true);
    } else {
      alert("Please select all required fields (*)");
    }
  };

  const handleClear = () => {
    setSelectedCourse(null);
    setSelectedCategory(null);
    setSelectedYear(null);
    setShowTable(false);
    setGlobalFilter("");
  };

  return (
    <PageLayout title="View Fee Structure">
      <div className="bg-white p-4 rounded shadow-sm border border-gray-200">
        <h2 className="text-xl font-bold text-gray-800 mb-4 border-b pb-2">
          View Fee Structure
        </h2>

        {/* --- Filters Section --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <div className="field">
            <label className="text-xs font-bold block mb-1 uppercase">
              Select Course*
            </label>
            <Dropdown
              value={selectedCourse}
              options={courses}
              onChange={(e) => setSelectedCourse(e.value)}
              placeholder="Select"
              className="w-full p-inputtext-sm"
            />
          </div>
          <div className="field">
            <label className="text-xs font-bold block mb-1 uppercase">
              Select Category*
            </label>
            <Dropdown
              value={selectedCategory}
              options={categories}
              onChange={(e) => setSelectedCategory(e.value)}
              placeholder="Select"
              className="w-full p-inputtext-sm"
            />
          </div>
          <div className="field">
            <label className="text-xs font-bold block mb-1 uppercase">
              Select Academic Year*
            </label>
            <Dropdown
              value={selectedYear}
              options={years}
              onChange={(e) => setSelectedYear(e.value)}
              placeholder="Select"
              className="w-full p-inputtext-sm"
            />
          </div>
        </div>

        <div className="flex gap-2 mb-6 border-b pb-6">
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

        {/* --- Fee Breakdown Table --- */}
        {showTable && (
          <div className="animate-fade-in">
            <div className="flex justify-between items-center mb-3">
              <h3 className="text-sm font-bold text-gray-600 uppercase">
                Fee Breakdown
              </h3>
              <span className="p-input-icon-left">
                <i className="pi pi-search" />
                <InputText
                  value={globalFilter}
                  onChange={(e) => setGlobalFilter(e.target.value)}
                  placeholder="Search..."
                  className="p-inputtext-sm w-full md:w-15rem"
                />
              </span>
            </div>

            <DataTable
              value={feeData}
              paginator
              rows={10}
              rowsPerPageOptions={[10, 25, 50, 100]}
              globalFilter={globalFilter}
              className="p-datatable-sm"
              showGridlines
              stripedRows
            >
              <Column field="srNo" header="Sr No." style={{ width: "4rem" }} />
              <Column field="course" header="Course" sortable />
              <Column field="feeType" header="Fee Type" sortable />
              <Column
                field="amount"
                header="Amount (₹)"
                body={(rowData: FeeBreakdown) => <span>₹{rowData.amount}</span>}
                sortable
              />
              <Column
                field="status"
                header="Status"
                body={(rowData: FeeBreakdown) => (
                  <span
                    className={`font-bold ${
                      rowData.status === "Active"
                        ? "text-green-600"
                        : "text-red-500"
                    }`}
                  >
                    {rowData.status}
                  </span>
                )}
                sortable
              />
            </DataTable>
          </div>
        )}
      </div>
    </PageLayout>
  );
};

export default ViewFeeStructure;
