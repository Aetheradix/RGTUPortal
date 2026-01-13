import { Button } from "primereact/button";
import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import { MultiSelect } from "primereact/multiselect";
import React, { useState } from "react";
import PageLayout from "../../../components/PageLayout";

interface StudentInitialData {
  id: number;
  aadhaarNumber: string;
  name: string;
  fatherName: string;
  relation: string;
  dob: string;
  gender: string;
  permanentAddress: string;
  pinCode: string;
  district: string;
  localBody: string;
  landmark: string;
}

interface ApprovalData {
  id: number;
  samagraId: string;
  studentName: string;
  fatherName: string;
  dob: string;
  gender: string;
  course: string;
  year: string;
}

const EkycApproval: React.FC = () => {
  const [showFilteredGrid, setShowFilteredGrid] = useState(false);
  const [selectedAcademicYear, setSelectedAcademicYear] = useState<string[]>(
    []
  );
  const academicYears = ["2024-25", "2023-24", "2022-23", "2021-22"];
  const [initialData] = useState<StudentInitialData[]>([
    {
      id: 1,
      aadhaarNumber: "553366336699",
      name: "Aniket Ahirwar",
      fatherName: "Bhagvan Singh",
      relation: "Brother",
      dob: "03/03/1998",
      gender: "Male",
      permanentAddress: "Village/Ward - Birha Shyam Khedi, District - Bhopal",
      pinCode: "460557",
      district: "Bhopal",
      localBody: "Nagar Nigam",
      landmark: "Bhopal",
    },
  ]);

  const [filterData] = useState<ApprovalData[]>([
    {
      id: 1,
      samagraId: "553366336699",
      studentName: "Aniket Ahirwar",
      fatherName: "Bhagvan Singh",
      dob: "03/03/1998",
      gender: "Male",
      course: "B.Tech",
      year: "3rd Year",
    },
    {
      id: 2,
      samagraId: "553366336688",
      studentName: "Arti Sharma	",
      fatherName: "	Ravi Sharma",
      dob: "15/08/2004",
      gender: "Female",
      course: "MCA",
      year: "2nd",
    },
  ]);

  const handleFilter = () => {
    if (selectedAcademicYear.length > 0) {
      setShowFilteredGrid(true);
    } else {
      alert("Please select Academic Year");
    }
  };
  const handleClear = () => {
    setSelectedAcademicYear([]);
    setShowFilteredGrid(false);
  };
  const expandTemplate = () => (
    <i
      className="pi pi-plus-circle text-indigo-500 cursor-pointer"
      style={{ fontSize: "1.1rem" }}
    ></i>
  );

  return (
    <PageLayout title="eKYC Approval">
      <div className="space-y-8">
        <section className="bg-white p-4 rounded-lg">
          <h3 className="text-lg font-semibold mb-4 text-gray-800">
            Student Details
          </h3>
          <DataTable
            value={initialData}
            className="p-datatable-sm text-sm no-border-table"
            rowHover
          >
            <Column body={expandTemplate} headerStyle={{ whiteSpace: 'nowrap' }} />
            <Column field="id" header="S.No." headerStyle={{ whiteSpace: 'nowrap' }} />
            <Column field="aadhaarNumber" header="Aadhaar Number" headerStyle={{ whiteSpace: 'nowrap' }} />
            <Column field="name" header="Name" headerStyle={{ whiteSpace: 'nowrap' }} />
            <Column field="fatherName" header="Father's Name" headerStyle={{ whiteSpace: 'nowrap' }} />
            <Column field="relation" header="Relation" headerStyle={{ whiteSpace: 'nowrap' }} />
            <Column field="dob" header="Date of Birth" headerStyle={{ whiteSpace: 'nowrap' }} />
            <Column field="gender" header="Gender" headerStyle={{ whiteSpace: 'nowrap' }} />
            <Column field="permanentAddress" header="Permanent Address" headerStyle={{ whiteSpace: 'nowrap' }} />
            <Column field="pinCode" header="Pin Code" headerStyle={{ whiteSpace: 'nowrap' }} />
            <Column field="district" header="District" headerStyle={{ whiteSpace: 'nowrap' }} />
            <Column field="localBody" header="Local Body" headerStyle={{ whiteSpace: 'nowrap' }} />
            <Column field="landmark" header="Landmark" headerStyle={{ whiteSpace: 'nowrap' }} />
          </DataTable>
        </section>
        <section className=" p-6 rounded-lg border border-gray-200">
          <h3 className="text-md font-bold mb-4 uppercase text-gray-600 tracking-wider">
            Filter Approval Details{" "}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Select Academic Years <span className="text-red-500">*</span>
              </label>
              <MultiSelect
                value={selectedAcademicYear}
                options={academicYears}
                onChange={(e) => setSelectedAcademicYear(e.value)}
                className="w-full"
                placeholder="Select Academic Year"
                display="chip"
              />
            </div>
          </div>
          <div className="flex gap-3 mt-6">
            <Button
              label="Filter Records"
              icon="pi pi-filter"
              className="bg-indigo-600 border-none px-6"
              onClick={handleFilter}
            />
            <Button
              label="Clear"
              icon="pi pi-refresh"
              className="bg-red-100 text-red-600 border-none px-6"
              onClick={handleClear}
            />
          </div>
        </section>
        {/* SECTION 3: FILTERED GRID (Appears only after filter is clicked) */}
        {showFilteredGrid && (
          <section className="bg-white p-4 rounded shadow-sm border border-gray-100 animate-fade-in">
            <h3 className="text-lg font-bold mb-4 text-gray-700 border-b pb-2">
              Details
            </h3>
            <DataTable
              value={filterData}
              paginator
              rows={5}
              className="p-datatable-sm text-sm"
              responsiveLayout="scroll"
            >
              <Column field="id" header="S.No." style={{ width: "60px" }} />
              <Column field="samagraId" header="Samagra Id" />
              <Column field="studentName" header=" Student Name" />
              <Column field="fatherName" header=" Father's Name" />
              <Column field="dob" header=" DOB" />
              <Column field="course" header="Course" />
              <Column field="year" header=" Year" />
              <Column field="gender" header=" Gender" />
              <Column
                header="Status"
                body={() => (
                  <span className="text-orange-500 font-medium">Pending</span>
                )}
              />
              <Column
                header="Action"
                body={() => (
                  <Button
                    label="Details"
                    className="bg-blue-500 border-none text-xs px-3 py-1"
                  />
                )}
              />
            </DataTable>
          </section>
        )}
      </div>
    </PageLayout>
  );
};

export default EkycApproval;
