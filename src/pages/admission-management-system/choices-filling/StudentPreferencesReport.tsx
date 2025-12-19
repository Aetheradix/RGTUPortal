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
  const [globalFilter, setGlobalFilter] = useState("");

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
      instName:
        "Shri Govindram Seksaria Institute of Technology and Science (SGSITS)",
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
      instName: "Maulana Azad National Institute of Technology (MANIT)",
      branch: "Computer Science",
    },
    {
      srNo: 6,
      rollNo: "202310001",
      instType: "Private",
      instName:
        "Shri Govindram Seksaria Institute of Technology and Science (SGSITS)",
      branch: "Mechanical Engineering",
    },
    {
      srNo: 7,
      rollNo: "202310001",
      instType: "Government",
      instName: "Madhav Institute of Technology and Science (MITS)",
      branch: "Civil Engineering",
    },
    {
      srNo: 8,
      rollNo: "202310001",
      instType: "Private",
      instName: "Lakshmi Narain College of Technology (LNCT)",
      branch: "Electrical Engineering",
    },
    {
      srNo: 9,
      rollNo: "202310001",
      instType: "Government",
      instName: "Maulana Azad National Institute of Technology (MANIT)",
      branch: "Computer Science",
    },
    {
      srNo: 10,
      rollNo: "202310001",
      instType: "Private",
      instName:
        "Shri Govindram Seksaria Institute of Technology and Science (SGSITS)",
      branch: "Mechanical Engineering",
    },
  ]);

  const handleSearch = () => {
    if (regNo) setIsSearched(true);
  };

  const renderHeader = () => {
    return (
      <div className="flex justify-end items-center gap-2">
        <span className="text-sm font-medium text-gray-600">Search:</span>
        <span className="p-input-icon-left">
          <i className="pi pi-search" />
          <InputText
            type="search"
            onInput={(e: any) => setGlobalFilter(e.target.value)}
            placeholder="Search here..."
            className="p-inputtext-sm"
          />
        </span>
      </div>
    );
  };

  return (
    <PageLayout title="Student Preferences Report">
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 mb-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-end">
          <div className="flex flex-col gap-2">
            <label className="text-sm font-bold text-gray-700">
              Student Registration No.<span className="text-red-500">*</span>
            </label>
            <InputText
              value={regNo}
              onChange={(e) => setRegNo(e.target.value)}
              placeholder="Enter Registration No."
              className="w-full"
            />
          </div>
          <Button
            label="Search"
            icon="pi pi-search"
            className="w-fit px-8 py-2 bg-indigo-600 border-none"
            onClick={handleSearch}
          />
        </div>
      </div>

      {isSearched && (
        <>
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 mb-5">
            <h3 className="text-lg font-bold text-indigo-800 mb-4 border-b pb-2">
              Student Details
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {[
                { label: "Student Name", value: "Rahul Sharma" },
                { label: "Date of Birth", value: "10-Feb-2002" },
                { label: "Gender", value: "Male" },
                { label: "Father Name", value: "Mr. S.P. Sharma" },
                { label: "Category", value: "OBC" },
                { label: "Exam", value: "JEE Main" },
                { label: "Score", value: "88.5" },
                { label: "Rank", value: "12450" },
              ].map((item, idx) => (
                <div key={idx} className="flex flex-col gap-1">
                  <label className="text-xs font-bold text-gray-500 uppercase">
                    {item.label}
                  </label>
                  <InputText
                    value={item.value}
                    readOnly
                    className="p-inputtext-sm bg-gray-50 font-semibold"
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
            <h3 className="text-lg font-bold text-gray-800 mb-4">
              Choices By Priority Details
            </h3>

            <DataTable
              value={choices}
              paginator
              rows={10}
              rowsPerPageOptions={[10, 25, 50, 100]}
              header={renderHeader()}
              globalFilter={globalFilter}
              className="p-datatable-sm text-sm"
              paginatorTemplate="RowsPerPageDropdown FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport"
              currentPageReportTemplate="Showing {first} to {last} of {totalRecords} entries"
              stripedRows
            >
              <Column
                field="srNo"
                header="Sr.No"
                style={{ width: "5rem" }}
                sortable
              />
              <Column field="rollNo" header="Roll No." sortable />
              <Column
                field="instType"
                header="Institute Type"
                body={(rowData) => (
                  <span
                    className={`px-2 py-1 rounded-md text-xs font-bold ${
                      rowData.instType === "Government"
                        ? "bg-blue-50 text-blue-700"
                        : "bg-orange-50 text-orange-700"
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
                style={{ width: "35%" }}
              />
              <Column field="branch" header="Branch" sortable />
            </DataTable>
          </div>
        </>
      )}
    </PageLayout>
  );
};

export default StudentPreferencesReport;
