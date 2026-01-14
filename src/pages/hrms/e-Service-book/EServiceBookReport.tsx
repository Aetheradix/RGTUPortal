import React, { useState } from "react";
import PageLayout from "@/components/PageLayout";
import Dropdown from "@/ui/shared/Dropdown";
import Table from "@/ui/shared/Table";
import { Button } from "primereact/button";
import { DateInput } from "@/ui/shared/Input";

const EServiceBookReport: React.FC = () => {
  const [showList, setShowList] = useState<boolean>(false);

  const [district, setDistrict] = useState<string | null>(null);
  const [department, setDepartment] = useState<string | null>(null);
  const [designation, setDesignation] = useState<string | null>(null);
  const [officeCode, setOfficeCode] = useState<string | null>(null);
  const [dateOfJoining, setDateOfJoining] = useState<Date | null>(null);

  const serviceBookData = [
    {
      employeeName: "Sourabh Mishra (WD2123)",
      department: "Higher Education Department",
      designation: "Professor",
      district: "Bhopal",
      block: "Bhopal",
      officeCode: "65234265250",
      dateOfJoining: "05-12-2023",
      checkReport: "👁",
    },
    {
      employeeName: "Virendra Mehra (WD2124)",
      department: "Higher Education Department",
      designation: "Assistant Professor",
      district: "Bhopal",
      block: "Bhopal",
      officeCode: "65234265250",
      dateOfJoining: "05-12-2023",
      checkReport: "👁",
    },
  ];

  const columns = [
    { field: "employeeName", header: "Employee Name", sortable: true},
    { field: "department", header: "Department" , sortable: true},
    { field: "designation", header: "Designation" , sortable: true},
    { field: "district", header: "District" , sortable: true},
    { field: "block", header: "Block" , sortable: true},
    { field: "officeCode", header: "Office Code", sortable: true },
    { field: "dateOfJoining", header: "Date Of Joining" },
    { field: "checkReport", header: "Check Report" },
  ];

  const handleSearch = () => {
    setShowList(true);
  };

  const handleClear = () => {
    setDistrict(null);
    setDepartment(null);
    setDesignation(null);
    setOfficeCode(null);
    setDateOfJoining(null);
    setShowList(false);
  };

  return (
    <PageLayout title="E-Service Book Report">
      <div className="space-y-6">
        <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
          <h2 className="text-xl font-bold text-gray-800 mb-6 border-b pb-4 text-blue-700">
            E-Service Book Report
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 items-end">
            <Dropdown
              label="Select District"
              value={district}
              options={[{ label: "Bhopal", value: "bhopal" }]}
              onChange={(e) => setDistrict(e.value)}
              placeholder="Select"
              required
            />

            <Dropdown
              label="Select Department"
              value={department}
              options={[{ label: "Higher Education Department", value: "hed" }]}
              onChange={(e) => setDepartment(e.value)}
              placeholder="Select"
            />

            <Dropdown
              label="Select Designation"
              value={designation}
              options={[{ label: "Professor", value: "professor" }]}
              onChange={(e) => setDesignation(e.value)}
              placeholder="Select"
            />

            <Dropdown
              label="Select Office Code"
              value={officeCode}
              options={[{ label: "65234265250", value: "65234265250" }]}
              onChange={(e) => setOfficeCode(e.value)}
              placeholder="Select"
            />

            <DateInput
              label="Date of Joining"
              value={dateOfJoining}
              onChange={(e) => setDateOfJoining(e.value as Date)}
              placeholder="dd/mm/yyyy"
            />

            <div className="flex gap-2">
              <Button
                label="Search"
                className="bg-blue-600 px-6 h-[42px]"
                onClick={handleSearch}
              />
              <Button
                label="Clear"
                severity="danger"
                className="px-6 h-[42px]"
                onClick={handleClear}
              />
            </div>
          </div>
        </div>

        {showList && (
          <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm animate-fadein">
            <h3 className="text-lg font-bold text-gray-700 mb-4 border-b pb-2">
              Service Book List
            </h3>

            <Table
              columns={columns}
              data={serviceBookData}
              showPagination
              rowsPerPage={10}
              {...{ format: "service_book_report" }}
            />
          </div>
        )}
      </div>
    </PageLayout>
  );
};

export default EServiceBookReport;
