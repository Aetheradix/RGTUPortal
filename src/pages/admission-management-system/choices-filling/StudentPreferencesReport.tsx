import React, { useState } from "react";
import PageLayout from "../../../components/PageLayout";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";

interface PriorityChoice {
  srNo: number;
  rollNo: string;
  instType: string;
  instName: string;
  branch: string;
}

const StudentPreferencesReport: React.FC = () => {
  const [regNo, setRegNo] = useState("");
  const [isSearched, setIsSearched] = useState(false);
  const [globalFilter, setGlobalFilter] = useState<string>("");

  const [choices] = useState<PriorityChoice[]>([
    {
      srNo: 1,
      rollNo: "202310001",
      instType: "Government",
      instName: "Maulana Azad National Institute of Technology (MANIT)",
      branch: "Computer Science",
    },
    {
      srNo: 2,
      rollNo: "202310001",
      instType: "Private",
      instName: "Shri Govindram Seksaria Institute of Technology and Science (SGSITS)",
      branch: "Mechanical Engineering",
    },
    {
      srNo: 3,
      rollNo: "202310001",
      instType: "Government",
      instName: "Madhav Institute of Technology and Science (MITS)",
      branch: "Civil Engineering",
    },
    {
      srNo: 4,
      rollNo: "202310001",
      instType: "Private",
      instName: "Lakshmi Narain College of Technology (LNCT)",
      branch: "Electrical Engineering",
    },
    {
        srNo: 5,
        rollNo: "202310001",
        instType: "Government",
        instName: "University Institute of Technology (UIT RGPV)",
        branch: "Information Technology",
      },
  ]);

  const handleSearch = () => {
    if (regNo.trim()) {
      setIsSearched(true);
    }
  };

  const renderHeader = () => {
    return (
      <div className="flex justify-end items-center gap-2">
        <span className="p-input-icon-left">
          <i className="pi pi-search" />
          <InputText
            type="search"
            value={globalFilter}
            onChange={(e) => setGlobalFilter(e.target.value)}
            placeholder="Search within choices..."
            className="p-inputtext-sm"
          />
        </span>
      </div>
    );
  };

  const studentDetails = [
    { label: "Student Name", value: "Rahul Sharma" },
    { label: "Date of Birth", value: "10-Feb-2002" },
    { label: "Gender", value: "Male" },
    { label: "Father Name", value: "Mr. S.P. Sharma" },
    { label: "Category", value: "OBC" },
    { label: "Exam", value: "JEE Main" },
    { label: "Score", value: "88.5" },
    { label: "Rank", value: "12450" },
  ];

  return (
    <PageLayout title="Student Preferences Report">
     
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 mb-5">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 items-end">
          <div className="flex flex-col gap-2">
            <label className="text-xs font-bold text-gray-600 uppercase">
              Student Registration No.<span className="text-red-500">*</span>
            </label>
            <InputText
              value={regNo}
              onChange={(e) => setRegNo(e.target.value)}
              placeholder="Enter Registration No."
              className="p-inputtext-sm w-full"
            />
          </div>
          <Button
            label="Fetch Choices"
            icon="pi pi-search"
            className="w-fit px-8 p-button-sm bg-indigo-600 border-none"
            onClick={handleSearch}
            disabled={!regNo.trim()}
          />
        </div>
      </div>

      {isSearched && (
        <div className="animate-fade-in">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 mb-5">
            <h3 className="text-md font-bold text-indigo-800 mb-4 border-b pb-2 flex items-center gap-2">
              <i className="pi pi-user" /> Student Profile Details
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              {studentDetails.map((item, idx) => (
                <div key={idx} className="flex flex-col gap-1">
                  <label className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">
                    {item.label}
                  </label>
                  <p className="text-sm font-semibold text-gray-800 bg-gray-50 p-2 rounded border border-gray-100">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
            <div className="flex flex-column md:flex-row justify-between items-center mb-4 gap-3">
                <h3 className="text-lg font-bold text-gray-800">
                    Priority-wise Preferences
                </h3>
                {renderHeader()}
            </div>

            <DataTable
              value={choices}
              paginator
              rows={10}
              rowsPerPageOptions={[10, 25, 50]}
              globalFilter={globalFilter}
              className="p-datatable-sm text-sm"
              paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
              currentPageReportTemplate="Showing {first} to {last} of {totalRecords}"
              stripedRows
              showGridlines
              breakpoint="960px"
              emptyMessage="No choices found for this registration number."
            >
              <Column
                field="srNo"
                header="Priority"
                style={{ width: "6rem" }}
                sortable
                body={(rd) => <b className="text-indigo-600">#{rd.srNo}</b>}
              />
              <Column field="rollNo" header="Roll No." sortable />
              <Column
                field="instType"
                header="Institute Type"
                body={(rowData) => (
                  <span
                    className={`px-2 py-1 rounded text-[10px] font-bold uppercase ${
                      rowData.instType === "Government"
                        ? "bg-blue-100 text-blue-700"
                        : "bg-orange-100 text-orange-700"
                    }`}
                  >
                    {rowData.instType}
                  </span>
                )}
                sortable
              />
              <Column
                field="instName"
                header="Institute Name"
                sortable
                className="font-medium"
              />
              <Column field="branch" header="Branch / Stream" sortable />
            </DataTable>
          </div>
        </div>
      )}
    </PageLayout>
  );
};

export default StudentPreferencesReport;