import React, { useState, useRef } from "react";
import PageLayout from "../../../components/PageLayout";
import { Button } from "primereact/button";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { MultiSelect } from "primereact/multiselect";
import { Toast } from "primereact/toast"; // Import Toast

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
  const toast = useRef<Toast>(null); // Initialize Toast ref

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
      studentName: "Arti Sharma ",
      fatherName: " Ravi Sharma",
      dob: "15/08/2004",
      gender: "Female",
      course: "MCA",
      year: "2nd Year",
    },
  ]);

  const handleFilter = () => {
    if (selectedAcademicYear.length > 0) {
      setShowFilteredGrid(true);
      toast.current?.show({
        severity: "success",
        summary: "Records Filtered",
        detail: `Found records for selected years.`,
        life: 3000,
      });
    } else {
      toast.current?.show({
        severity: "warn",
        summary: "Selection Required",
        detail: "Please select Academic Year",
        life: 3000,
      });
    }
  };

  const handleClear = () => {
    setSelectedAcademicYear([]);
    setShowFilteredGrid(false);
    toast.current?.show({
      severity: "info",
      summary: "Cleared",
      detail: "Filters have been reset.",
      life: 2000,
    });
  };
  const approveActionTemplate = () => {
    return (
      <Button
        label="Approve"
        className="p-button-outlined p-button-success text-xs px-3 py-1"
        style={{ fontWeight: "600" }}
      />
    );
  };

  return (
    <PageLayout title="eKYC Approval">
      <Toast ref={toast} />
      <div className="space-y-8">
        <section className="bg-white p-4 rounded-lg">
          <h3 className="text-lg font-semibold mb-4 text-gray-800">
            Student Details
          </h3>
          <DataTable
            value={initialData}
            className="p-datatable-sm text-sm"
            rowHover
          >
            <Column field="id" header="Sr.No." style={{ width: "80px" }} />
            <Column field="aadhaarNumber" header="Aadhaar Number" />
            <Column field="name" header="Name" />
            <Column field="fatherName" header="Father's Name" />
            <Column field="relation" header="Relation" />
            <Column field="dob" header="Date of Birth" />
            <Column field="gender" header="Gender" />
            <Column field="permanentAddress" header="Permanent Address" />
            <Column field="pinCode" header="Pin Code" />
            <Column field="district" header="District" />
            <Column field="localBody" header="Local Body" />
            <Column field="landmark" header="Landmark" />
          </DataTable>
        </section>

        <section className="p-6 rounded-lg border border-gray-200 bg-white">
          <h3 className="text-md font-bold mb-4 uppercase text-gray-600 tracking-wider">
            Filter Approval Details
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
              className="p-button-outlined"
              onClick={handleClear}
            />
          </div>
        </section>

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
              <Column
                field="id"
                header="Sr.No."
                style={{ width: "80px" }}
                sortable
              />
              <Column field="samagraId" header="Samagra Id" sortable />
              <Column field="studentName" header="Student Name" sortable />
              <Column field="fatherName" header="Father's Name" sortable />
              <Column field="dob" header="DOB" sortable />
              <Column field="course" header="Course" sortable />
              <Column field="year" header="Year" sortable />
              <Column field="gender" header="Gender" sortable />
              <Column
                header="Status"
                sortable
                body={() => (
                  <span className="text-orange-500 font-medium">Pending</span>
                )}
              />
              <Column sortable header="Action" body={approveActionTemplate} />
            </DataTable>
          </section>
        )}
      </div>
    </PageLayout>
  );
};

export default EkycApproval;
