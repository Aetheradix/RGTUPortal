import React from "react";
import PageLayout from "@/components/PageLayout";
import Table from "@/ui/shared/Table";
import { Button } from "primereact/button";

const ACRReportReviewing: React.FC = () => {
  const rawData = [
    {
      id: 1,
      academicYear: "2023-2024",
      uniqueIdName: "EDP123456 / Gopal Verma",
      dob: "03-12-1990",
      designation: "Assistant Teacher",
      diseCode: "STGS/489754",
      reportingOfficer: "Ramesh Sharma",
    },
    {
      id: 2,
      academicYear: "2023-2024",
      uniqueIdName: "EDP987654 / Amit Kumar",
      dob: "15-07-1988",
      designation: "Senior Teacher",
      diseCode: "GHS/112233",
      reportingOfficer: "Suresh Verma",
    },
  ];

  const tableData = rawData.map((item, index) => ({
    srNo: index + 1,
    academicYear: item.academicYear,
    uniqueIdName: item.uniqueIdName,
    dob: item.dob,
    designation: item.designation,
    diseCode: item.diseCode,
    reportingOfficer: item.reportingOfficer,
    viewEmployee: (
      <Button
        label="View"
        className="p-button-sm bg-indigo-500 border-none"
      />
    ),
    viewReportingOfficer: (
      <Button
        label="View"
        className="p-button-sm bg-indigo-500 border-none"
      />
    ),
    acrForm: (
      <Button
        label="Open"
        className="p-button-sm bg-purple-600 border-none"
      />
    ),
  }));

  const columns = [
    { field: "srNo", header: "Sr. No.",sortable:true , style: { whiteSpace: "nowrap" } },
    { field: "academicYear", header: "Academic Year",sortable:true, style: { whiteSpace: "nowrap" }  },
    { field: "uniqueIdName", header: "Unique ID / Name" },
    { field: "dob", header: "Date of Birth",sortable:true, style: { whiteSpace: "nowrap" }  },
    { field: "designation", header: "Designation",sortable:true },
    { field: "diseCode", header: "Dise Code of Institution", style: { whiteSpace: "nowrap" }  },
    { field: "reportingOfficer", header: "Reporting Officer Name",sortable:true , style: { whiteSpace: "nowrap" } },
    { field: "viewEmployee", header: "View Employee Application", style: { whiteSpace: "nowrap" }  },
    {
      field: "viewReportingOfficer",
      header: "View Reporting Officer Application", style: { whiteSpace: "nowrap" } 
    },
    { field: "acrForm", header: "ACR Form", style: { whiteSpace: "nowrap" }  },
  ];

  return (
    <PageLayout title="ACR Report Reviewing">
      <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
        <h2 className="text-xl font-bold text-gray-800 mb-6 border-b pb-4">
          ACR Report Reviewing And Filling By Reporting Officer
        </h2>

        <Table
          columns={columns}
          data={tableData}
          showPagination
          rowsPerPage={10}
          {...{ format: "acr_report_reviewing" }}
        />
      </div>
    </PageLayout>
  );
};

export default ACRReportReviewing;
