import React, { useState } from "react";
import PageLayout from "../../components/PageLayout";
import { Button } from "primereact/button";
import { Dropdown, Table, type TableColumn } from "../../ui/shared";

interface TestReportRow {
  district: string;
  schoolName: string;
  studentName: string;
  testName: string;
  preparationStatus: string;
  lastMockScore: string;
}

const TestPreparationReport: React.FC = () => {
  const [showResults, setShowResults] = useState(false);

  const rows: TestReportRow[] = [
    {
      district: "Bhopal",
      schoolName: "GMS GONDARMAU (23320300110)",
      studentName: "Poorti Sahu",
      testName: "NTSE",
      preparationStatus: "Ongoing",
      lastMockScore: "85/100",
    },
  ];

  const columns: TableColumn[] = [
    { field: "district", header: "District" },
    { field: "schoolName", header: "School Name (Code)" },
    { field: "studentName", header: "Student Name" },
    { field: "testName", header: "Applied Test" },
    { field: "preparationStatus", header: "Status" },
    { field: "lastMockScore", header: "Last Mock Score" },
  ];

  return (
    <PageLayout title="Test Preparation Progress Report">
      <div className="flex flex-col gap-4">
        <div className=" rounded-xl p-6 relative bg-white  shadow-sm">
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-4">
            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium">Test Name</label>
              <Dropdown
                options={[
                  { label: "NTSE", value: "NTSE" },
                  { label: "NMMS", value: "NMMS" },
                ]}
                placeholder="All Tests"
                className="border-orange-200 h-10"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium">District</label>
              <Dropdown
                options={[{ label: "Bhopal", value: "Bhopal" }]}
                placeholder="Select"
                className="border-orange-200 h-10"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium">Status</label>
              <Dropdown
                options={[
                  { label: "Completed", value: "C" },
                  { label: "Ongoing", value: "O" },
                ]}
                placeholder="Select"
                className="border-orange-200 h-10"
              />
            </div>
          </div>
          <div className="flex gap-4 mt-6">
            <Button
              label="Search"
              className="px-10 bg-[#00bfa5] border-none text-sm font-bold"
              onClick={() => setShowResults(true)}
            />
            <Button
              label="Clear"
              className="p-button-danger p-button-outlined px-10 text-sm border-pink-200 text-pink-500 font-bold"
            />
          </div>
        
        </div>

        {showResults && (
          <div className="border border-orange-200 rounded-xl p-6 relative bg-white mt-8 shadow-sm">
            <div className="absolute -top-4 left-6 bg-white px-4 py-1   border-orange-100">
              <span className="text-blue-600 font-bold text-sm">
                Details 
              </span>
            </div>
            <div className="overflow-x-auto border border-gray-200 rounded mt-4">
              <Table
                columns={columns}
                data={rows}
                className="custom-report-table"
              />
            </div>
          </div>
        )}
      </div>
      <style>{`
                .custom-report-table .p-datatable-thead > tr > th {
                    font-size: 15px; padding: 12px; border: 1px solid #e5e7eb; text-align: center;
                }
                .custom-report-table .p-datatable-tbody > tr > td {
                    font-size: 13px; padding: 10px; border: 1px solid #e5e7eb; text-align: center;
                }
            `}</style>
    </PageLayout>
  );
};

export default TestPreparationReport;
