import React, { useState } from "react";
import PageLayout from "@/components/PageLayout";
import Table from "@/ui/shared/Table";
import { Button } from "primereact/button";

const PrintAnukampaAppointmentApplication: React.FC = () => {
  const [expandedRow, setExpandedRow] = useState<number | null>(null);

  const rawData = [
    {
      id: 1,
      applicantName: "Sita Dubey (EE00333)",
      gender: "Female",
      caste: "O.B.C",
      dob: "15/10/1995",
      mobile: "9856325685",
      relation: "Daughter",
      maritalStatus: "Unmarried",
      cadre: "Academic Cadre",
      designation: "Assistant Professor",
      eligibilityStatus: "Yes",
      eligibilityYear: "2015",
      qualification: "B.Ed",
      status: "Pending From JD",
    },
  ];

  const tableData = rawData.map((item, index) => ({
    srNo: (
      <div className="flex items-center gap-2">
        <span>{index + 1}</span>
        <Button
          text
          icon={`pi ${
            expandedRow === item.id ? "pi-minus-circle" : "pi-plus-circle"
          }`}
          className="text-blue-600"
          onClick={() =>
            setExpandedRow(expandedRow === item.id ? null : item.id)
          }
        />
      </div>
    ),
    ...item,
  }));

  const columns = [
    { field: "srNo", header: "Sr. No." },
    { field: "applicantName", header: "Applicant's Name", style: { whiteSpace: "nowrap" }  },
    { field: "gender", header: "Gender" },
    { field: "caste", header: "Caste" },
    { field: "dob", header: "Date of Birth" , style: { whiteSpace: "nowrap" } },
    { field: "mobile", header: "Mobile No." },
    {
      field: "relation",
      header: "Applicant's Relationship With The Deceased Faculty", style: { whiteSpace: "nowrap" } 
    },
    { field: "maritalStatus", header: "Marital Status", style: { whiteSpace: "nowrap" }  },
    { field: "cadre", header: "Cadre For Appointment", style: { whiteSpace: "nowrap" }  },
    { field: "designation", header: "Designation For Appointment", style: { whiteSpace: "nowrap" }  },
  ];

  return (
    <PageLayout title="Print Anukampa Appointment Application">
      <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
        <h2 className="text-xl font-bold text-gray-800 mb-6 border-b pb-4">
          Print Status Of Anukampa Appointment Application
        </h2>

        <Table
          columns={columns}
          data={tableData}
          showPagination
          rowsPerPage={10}
          {...{ format: "print_anukampa_application" }}
        />

        {rawData.map(
          item =>
            expandedRow === item.id && (
              <div
                key={item.id}
                className="mt-4 p-4 border rounded bg-gray-50 space-y-2"
              >
                <p>
                  <strong>Status of Passing Primary Faculty Eligibility Test:</strong>{" "}
                  {item.eligibilityStatus}
                </p>
                <p>
                  <strong>Year of Eligibility Test:</strong>{" "}
                  {item.eligibilityYear}
                </p>
                <p>
                  <strong>Professional Qualification:</strong>{" "}
                  {item.qualification}
                </p>

                <div className="flex items-center gap-3 mt-2">
                  <strong>Print</strong>
                  <Button
                    icon="pi pi-print"
                    className="bg-indigo-600"
                  />
                </div>

                <div className="mt-2">
                  <strong>Status:</strong>{" "}
                  <span className="bg-red-100 text-red-600 px-3 py-1 rounded text-sm font-semibold">
                    {item.status}
                  </span>
                </div>
              </div>
            )
        )}
      </div>
    </PageLayout>
  );
};

export default PrintAnukampaAppointmentApplication;
