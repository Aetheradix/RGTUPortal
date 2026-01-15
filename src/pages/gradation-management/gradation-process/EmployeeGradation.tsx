import React, { useState } from "react";
import PageLayout from "@/components/PageLayout";
import Table from "@/ui/shared/Table";

interface EmployeeGradationRow {
  empCode: string;
  empName: string;
  designation: string;
  officeName: string;
  district: string;
  doj: string;
  status: string;
}

const EmployeeGradation: React.FC = () => {
  const [designation, setDesignation] = useState("");

  const designationOptions = [
    "Commissioner",
    "Director",
    "Additional Director",
    "Joint Director",
    "Deputy Director",
    "Asstt Director",
    "Regional Librarian",
    "Planning Officer",
    "Director (ELTI)",
  ];

  const allData: EmployeeGradationRow[] = [
    {
      empCode: "EMP001",
      empName: "Amit Kumar",
      designation: "Director",
      officeName: "Directorate Office Bhopal",
      district: "Bhopal",
      doj: "12-05-2018",
      status: "Active",
    },
    {
      empCode: "EMP002",
      empName: "Pooja Verma",
      designation: "Additional Director",
      officeName: "Regional Office Indore",
      district: "Indore",
      doj: "20-08-2019",
      status: "Active",
    },
    {
      empCode: "EMP003",
      empName: "Rohit Singh",
      designation: "Joint Director",
      officeName: "District Office Betul",
      district: "Betul",
      doj: "15-01-2020",
      status: "Active",
    },
    {
      empCode: "EMP004",
      empName: "Neha Jain",
      designation: "Deputy Director",
      officeName: "Directorate Office Bhopal",
      district: "Bhopal",
      doj: "05-03-2017",
      status: "Inactive",
    },
    {
      empCode: "EMP005",
      empName: "Suresh Patel",
      designation: "Asstt Director",
      officeName: "Regional Office Jabalpur",
      district: "Jabalpur",
      doj: "11-11-2021",
      status: "Active",
    },
    {
      empCode: "EMP006",
      empName: "Gajanand Suryawanshi",
      designation: "Commissioner",
      officeName: "State Head Office",
      district: "Bhopal",
      doj: "01-04-2015",
      status: "Active",
    },
    {
      empCode: "EMP007",
      empName: "Ashok Kumar Shakya",
      designation: "Regional Librarian",
      officeName: "Regional Library Gwalior",
      district: "Gwalior",
      doj: "10-09-2016",
      status: "Active",
    },
    {
      empCode: "EMP008",
      empName: "Mathlesh Meena",
      designation: "Planning Officer",
      officeName: "Planning Office Ujjain",
      district: "Ujjain",
      doj: "18-02-2022",
      status: "Active",
    },
    {
      empCode: "EMP009",
      empName: "Vikas Soni",
      designation: "Director (ELTI)",
      officeName: "ELTI Training Center",
      district: "Bhopal",
      doj: "07-07-2014",
      status: "Active",
    },
  ];

  const filteredData = designation ? allData.filter((x) => x.designation === designation) : [];

  const columns = [
    { field: "empCode", header: "Employee Code", sortable: true, style: { whiteSpace: "nowrap" } },
    { field: "empName", header: "Employee Name", sortable: true, style: { whiteSpace: "nowrap" } },
    { field: "designation", header: "Designation", sortable: true, style: { whiteSpace: "nowrap" } },
    { field: "officeName", header: "Office Name", sortable: true, style: { whiteSpace: "nowrap" } },
    { field: "district", header: "District", sortable: true, style: { whiteSpace: "nowrap" } },
    { field: "doj", header: "Date of Joining", sortable: true, style: { whiteSpace: "nowrap" } },
    {
      field: "status",
      header: "Status",
      sortable: true,
      style: { whiteSpace: "nowrap" },
      body: (row: EmployeeGradationRow) => (
        <span
          className={`px-3 py-1 rounded text-xs font-bold ${
            row.status === "Active"
              ? "bg-green-100 text-green-700 border border-green-300"
              : "bg-red-100 text-red-700 border border-red-300"
          }`}
        >
          {row.status}
        </span>
      ),
    },
  ];

  return (
    <PageLayout title="Employee Gradation">
      <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm space-y-6">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-bold text-blue-700">Employee Gradation</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="w-full">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Select Designation <span className="text-red-500 ml-1">*</span>
            </label>

            <select
              value={designation}
              onChange={(e) => setDesignation(e.target.value)}
              className="w-full border border-gray-300 rounded-md px-3 py-2 outline-none focus:border-orange-500"
            >
              <option value="">Select</option>
              {designationOptions.map((d) => (
                <option key={d} value={d}>
                  {d}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {designation && (
        <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm mt-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold text-gray-800">
              Employee Gradation Details <span className="text-blue-700">({designation})</span>
            </h2>
          </div>

          <Table
            columns={columns}
            data={filteredData}
            showPagination
            rowsPerPage={10}
            {...{ format: "employee_gradation" }}
          />
        </div>
      )}
    </PageLayout>
  );
};

export default EmployeeGradation;
