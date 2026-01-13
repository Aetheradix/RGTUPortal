import React, { useState } from "react";
import PageLayout from "../../../components/PageLayout";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { Dropdown } from "primereact/dropdown";

interface AllotmentData {
  srNo: number;
  collegeName: string;
  course: string;
  academicYear: string;
  allotmentStatus: string;
  status: string;
}

const CollegeAllotmentStatus: React.FC = () => {
  
  const [selectedCollege, setSelectedCollege] = useState<string | null>(null);
  const [selectedCourse, setSelectedCourse] = useState<string | null>(null);
  const [selectedYear, setSelectedYear] = useState<string | null>(null);
  const [allotmentFilter, setAllotmentFilter] = useState<string | null>(null);
  const [globalFilter, setGlobalFilter] = useState<string>("");
  const [showTable, setShowTable] = useState<boolean>(false);

  const colleges = [
    "Maulana Azad National Institute of Technology (MANIT)",
    "Institute of Engineering and Technology (IET-DAVV)",
    "Government Engineering College, Jabalpur",
    "Samrat Ashok Technological Institute (SATI)",
    "Shri Govindram Seksaria Institute of Technology and Science (SGSITS)",
    "Acropolis Institute of Technology and Research",
  ];
  const courses = [
    "B.Tech",
    "M.Tech",
    "BCA",
    "MCA",
    "B.Sc (IT)",
    "M.Sc (IT)",
    "MBA (Tech Management)",
  ];
  const years = ["2024-2025", "2025-2026"];
  const statusOptions = ["Allotted", "Awaiting Allotment", "Under Review"];

  const allotmentList: AllotmentData[] = [
    {
      srNo: 1,
      collegeName: "Acropolis Institute of Technology and Research",
      course: "B.Tech",
      academicYear: "2024-2025",
      allotmentStatus: "Allotted",
      status: "Active",
    },
    {
      srNo: 2,
      collegeName:
        "Shri Govindram Seksaria Institute of Technology and Science (SGSITS)",
      course: "M.Tech",
      academicYear: "2025-2026",
      allotmentStatus: "Awaiting Allotment",
      status: "Inactive",
    },
    {
      srNo: 3,
      collegeName: "Maulana Azad National Institute of Technology (MANIT)",
      course: "BCA",
      academicYear: "2024-2025",
      allotmentStatus: "Under Review",
      status: "Active",
    },
  ];

  const handleSearch = () => {
    setShowTable(true);
  };

  const handleClear = () => {
    setSelectedCollege(null);
    setSelectedCourse(null);
    setSelectedYear(null);
    setAllotmentFilter(null);
    setShowTable(false);
    setGlobalFilter("");
  };

  const statusBodyTemplate = (rowData: AllotmentData) => {
    const getSeverity = (status: string) => {
      switch (status) {
        case "Allotted":
          return "text-green-600 bg-green-50 border-green-200";
        case "Awaiting Allotment":
          return "text-orange-600 bg-orange-50 border-orange-200";
        case "Under Review":
          return "text-blue-600 bg-blue-50 border-blue-200";
        default:
          return "text-gray-600";
      }
    };
    return (
      <span
        className={`px-2 py-1 rounded border text-xs font-bold ${getSeverity(
          rowData.allotmentStatus
        )}`}
      >
        {rowData.allotmentStatus}
      </span>
    );
  };

  return (
    <PageLayout title="College Wise Allotment Status">
      <div className="bg-white p-4 rounded shadow-sm border border-gray-200">
        <h2 className="text-xl font-bold text-gray-800 mb-4 border-b pb-2">
          College Wise Allotment Status
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <div className="field">
            <label className="text-xs font-bold block mb-1 uppercase">
              Select College Name*
            </label>
            <Dropdown
              value={selectedCollege}
              options={colleges}
              onChange={(e) => setSelectedCollege(e.value)}
              placeholder="Select"
              className="w-full p-inputtext-sm"
              filter
            />
          </div>
          <div className="field">
            <label className="text-xs font-bold block mb-1 uppercase">
              Select Course
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
              Academic Year*
            </label>
            <Dropdown
              value={selectedYear}
              options={years}
              onChange={(e) => setSelectedYear(e.value)}
              placeholder="Select"
              className="w-full p-inputtext-sm"
            />
          </div>
          <div className="field">
            <label className="text-xs font-bold block mb-1 uppercase">
              Allotment Status
            </label>
            <Dropdown
              value={allotmentFilter}
              options={statusOptions}
              onChange={(e) => setAllotmentFilter(e.value)}
              placeholder="Select"
              className="w-full p-inputtext-sm"
            />
          </div>
        </div>

        <div className="flex gap-3 mb-8 border-b pb-6">
          <Button
            label="Search"
            icon="pi pi-search"
            className="p-button-sm px-6"
            onClick={handleSearch}
          />
          <Button
            label="Clear"
            icon="pi pi-refresh"
            className="p-button-secondary p-button-outlined p-button-sm px-6"
            onClick={handleClear}
          />
        </div>

        {showTable && (
          <div className="animate-fade-in">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-sm font-bold text-gray-600 uppercase tracking-widest">
                Allotment Records
              </h3>
              <span className="p-input-icon-left">
                <i className="pi pi-search" />
                <InputText
                  value={globalFilter}
                  onChange={(e) => setGlobalFilter(e.target.value)}
                  placeholder="Search in results..."
                  className="p-inputtext-sm w-full md:w-15rem"
                />
              </span>
            </div>

            <DataTable
              value={allotmentList}
              paginator
              rows={10}
              rowsPerPageOptions={[10, 25, 50, 100]}
              globalFilter={globalFilter}
              className="p-datatable-sm text-sm"
              stripedRows
              showGridlines
            >
              <Column field="srNo" header="Sr No." style={{ width: "4rem" }} />
              <Column field="collegeName" header="College Name" sortable />
              <Column field="course" header="Course" sortable />
              <Column field="academicYear" header="Academic Year" />
              <Column
                field="allotmentStatus"
                header="Allotment Status"
                body={statusBodyTemplate}
                sortable
              />
              <Column
                field="status"
                header="Status"
                body={(rowData) => (
                  <span
                    className={
                      rowData.status === "Active"
                        ? "text-green-600 font-bold"
                        : "text-red-500"
                    }
                  >
                    {rowData.status}
                  </span>
                )}
              />
            </DataTable>
          </div>
        )}
      </div>
    </PageLayout>
  );
};

export default CollegeAllotmentStatus;
