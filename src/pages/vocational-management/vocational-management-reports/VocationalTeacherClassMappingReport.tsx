import React, { useState } from "react";
import PageLayout from "@/components/PageLayout";
import Table from "@/ui/shared/Table";
import Dropdown from "@/ui/shared/Dropdown";
import { Button } from "primereact/button";

interface MappingRow {
  division: string;
  district: string;
  block: string;
  sankul: string;
  school: string;
  teacherName: string;
  className: string;
}

const VocationalTeacherClassMappingReport: React.FC = () => {
  const [showList, setShowList] = useState(false);

  const divisionOptions = [
    { label: "Bhopal Division", value: "Bhopal Division" },
  ];

  const districtOptions = [
    { label: "Bhopal", value: "Bhopal" },
  ];

  const blockOptions = [
    { label: "Phanda", value: "Phanda" },
  ];

  const sankulOptions = [
    { label: "Sankul 01", value: "Sankul 01" },
  ];

  const schoolOptions = [
    { label: "Govt HSS Bhopal", value: "Govt HSS Bhopal" },
  ];

  const tableData: MappingRow[] = [
    {
      division: "Bhopal Division",
      district: "Bhopal",
      block: "Phanda",
      sankul: "Sankul 01",
      school: "Govt HSS Bhopal",
      teacherName: "Ramesh Sharma",
      className: "Class 9",
    },
    {
      division: "Bhopal Division",
      district: "Bhopal",
      block: "Phanda",
      sankul: "Sankul 01",
      school: "Govt MVM Bhopal",
      teacherName: "Suresh Verma",
      className: "Class 10",
    },
    {
      division: "Raisen Division",
      district: "Raisen",
      block: "Phanda",
      sankul: "Sankul 02",
      school: "Govt HS Arera",
      teacherName: "Amit Kumar",
      className: "Class 11",
    },
    {
      division: "Bhopal Division",
      district: "Bhopal",
      block: "Phanda",
      sankul: "Sankul 02",
      school: "Govt MLV Arera",
      teacherName: "Neha Singh",
      className: "Class 12",
    },
    {
      division: "Vidisha Division",
      district: "Vidisha",
      block: "Huzur",
      sankul: "Sankul 03",
      school: "Govt HSS MP Nagar",
      teacherName: "Rahul Jain",
      className: "Class 9",
    },
  ];

  const columns = [
    { field: "division", header: "Division", style:{whiteSpace: "nowrap"},sortable:true},
    { field: "district", header: "District", style: { whiteSpace: "nowrap" } ,sortable:true},
    { field: "block", header: "Block", style: { whiteSpace: "nowrap" } ,sortable:true},
    { field: "sankul", header: "Sankul", style: { whiteSpace: "nowrap" } ,sortable:true},
    { field: "school", header: "School Name", style: { whiteSpace: "nowrap" } ,sortable:true},
    { field: "teacherName", header: "Teacher Name", style: { whiteSpace: "nowrap" },sortable:true },
    { field: "className", header: "Class", style: { whiteSpace: "nowrap" } ,sortable:true},
  ];

  const handleSearch = () => {
    setShowList(true);
  };

  const handleClear = () => {
    setShowList(false);
  };

  return (
    <PageLayout title="Vocational Teacher Class Mapping Report">
      <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm space-y-6">
        <h2 className="text-xl font-bold text-gray-800">
          Vocational Teacher Class Mapping Report
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          <Dropdown
            label="Division Name (Code)"
            required
            options={divisionOptions}
            placeholder="Select"
          />
          <Dropdown
            label="District Name (Code)"
            required
            options={districtOptions}
            placeholder="Select"
          />
          <Dropdown
            label="Block Name (Code)"
            required
            options={blockOptions}
            placeholder="Select"
          />
          <Dropdown
            label="Sankul Name (Code)"
            required
            options={sankulOptions}
            placeholder="Select"
          />
          <Dropdown
            label="School Name"
            required
            options={schoolOptions}
            placeholder="Select"
          />
        </div>

        <div className="flex gap-4">
          <Button
            label="Search"
            className="bg-blue-600 px-8"
            onClick={handleSearch}
          />
          <Button
            label="Clear"
            severity="danger"
            className="px-8"
            onClick={handleClear}
          />
        </div>
      </div>

      {showList && (
        <div className="bg-white p-6 mt-6 rounded-lg border border-gray-200 shadow-sm">
          <Table
            columns={columns}
            data={tableData}
            showPagination
            rowsPerPage={10}
            {...{ format: "teacher_class_mapping_report" }}
          />
        </div>
      )}
    </PageLayout>
  );
};

export default VocationalTeacherClassMappingReport;
