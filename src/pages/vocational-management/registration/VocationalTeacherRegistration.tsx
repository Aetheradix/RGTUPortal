import React, { useState } from "react";
import PageLayout from "@/components/PageLayout";
import Table from "@/ui/shared/Table";
import Input, { DateInput } from "@/ui/shared/Input";
import Dropdown from "@/ui/shared/Dropdown";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import { Checkbox } from "primereact/checkbox";

interface VocationalTeacherRow {
  teacherName: string;
  employeeCode: string;
  trade: string;
  district: string;
  schoolName: string;
  mobile: string;
  email: string;
  joiningDate: string;
  isActive: boolean;
}

const VocationalTeacherRegistration: React.FC = () => {
  const [showAddPage, setShowAddPage] = useState(false);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [isActive, setIsActive] = useState(true);

  const teacherList: VocationalTeacherRow[] = [
    {
      teacherName: "Rahul Sharma",
      employeeCode: "VT001",
      trade: "Information Technology",
      district: "Bhopal",
      schoolName: "Govt HSS Bhopal",
      mobile: "9876543210",
      email: "rahul@gmail.com",
      joiningDate: "12/06/2022",
      isActive: true,
    },
    {
      teacherName: "Neha Verma",
      employeeCode: "VT002",
      trade: "Retail",
      district: "Indore",
      schoolName: "Govt HSS Indore",
      mobile: "9988776655",
      email: "neha@gmail.com",
      joiningDate: "18/07/2021",
      isActive: false,
    },
    {
      teacherName: "Amit Singh",
      employeeCode: "VT003",
      trade: "Solar Energy",
      district: "Gwalior",
      schoolName: "Govt HSS Gwalior",
      mobile: "9123456789",
      email: "amit@gmail.com",
      joiningDate: "01/08/2020",
      isActive: true,
    },
    {
      teacherName: "Pooja Jain",
      employeeCode: "VT004",
      trade: "Tourism & Hospitality",
      district: "Ujjain",
      schoolName: "Govt HSS Ujjain",
      mobile: "9012345678",
      email: "pooja@gmail.com",
      joiningDate: "15/06/2019",
      isActive: true,
    },
    {
      teacherName: "Suresh Patel",
      employeeCode: "VT005",
      trade: "Plumbing",
      district: "Jabalpur",
      schoolName: "Govt HSS Jabalpur",
      mobile: "8899776655",
      email: "suresh@gmail.com",
      joiningDate: "10/07/2023",
      isActive: true,
    },
  ];

  const columns = [
    { field: "teacherName", header: "Teacher Name", sortable: true, style: { whiteSpace: "nowrap" } },
    { field: "employeeCode", header: "Employee Code", sortable: true, style: { whiteSpace: "nowrap" } },
    { field: "trade", header: "Vocational Trade", sortable: true, style: { whiteSpace: "nowrap" } },
    { field: "district", header: "District", sortable: true, style: { whiteSpace: "nowrap" } },
    { field: "schoolName", header: "School Name", style: { whiteSpace: "nowrap" } },
    { field: "mobile", header: "Mobile No.", style: { whiteSpace: "nowrap" } },
    { field: "email", header: "Email ID", style: { whiteSpace: "nowrap" } },
    { field: "joiningDate", header: "Joining Date", style: { whiteSpace: "nowrap" } },
    {
      field: "isActive",
      header: "Status",
      body: (row: VocationalTeacherRow) => (
        <span
          className={`px-3 py-1 rounded text-xs font-bold ${
            row.isActive
              ? "bg-green-100 text-green-700 border border-green-300"
              : "bg-red-100 text-red-700 border border-red-300"
          }`}
        >
          {row.isActive ? "Active" : "InActive"}
        </span>
      ),
      style: { whiteSpace: "nowrap" },
    },
    {
      field: "action",
      header: "Action",
      body: () => (
        <Button icon="pi pi-pencil" className="p-button-sm bg-orange-500 border-none" />
      ),
      style: { whiteSpace: "nowrap" },
    },
  ];

  const handleSave = () => {
    setShowConfirmModal(true);
  };

  const handleConfirmYes = () => {
    setShowConfirmModal(false);
    setShowSuccessModal(true);
  };

  return (
    <PageLayout title="Vocational Teacher Registration">
      {!showAddPage && (
        <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold text-gray-800">
              Vocational Teacher Registration Details
            </h2>
            <Button
              label="Add Vocational Teacher"
              icon="pi pi-plus"
              className="bg-orange-500 border-none"
              onClick={() => setShowAddPage(true)}
            />
          </div>

          <Table
            columns={columns}
            data={teacherList}
            showPagination
            rowsPerPage={10}
            {...{ format: "vocational_teacher_registration" }}
          />
        </div>
      )}

      {showAddPage && (
        <div className="bg-white p-6 rounded-lg border border-orange-300 shadow-sm space-y-6">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-bold text-blue-700">
              Add Vocational Teacher
            </h2>
            <Button
              label="Back To List"
              className="bg-orange-500 border-none"
              onClick={() => setShowAddPage(false)}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Input label="Teacher Name" required placeholder="Enter Name"/>
            <Input label="Employee Code" required placeholder="Enter Employee Code"/>
            <Dropdown label="Vocational Trade" required options={[{ label: "Information Technology", value: "IT" }]} />
            <Dropdown label="District" required options={[{ label: "Bhopal", value: "Bhopal" }]} />
            <Input label="School Name" required  placeholder="Enter School Name"/>
            <Input label="Mobile No." required placeholder="Enter Mobile Number"/>
            <Input label="Email ID" required placeholder="Enter Email ID"/>
            <DateInput label="Joining Date" required placeholder="mm-dd-yyyy"/>
          </div>

          <div className="flex flex-col gap-2 mt-2">
            <label className="text-sm font-medium text-gray-700">Status</label>
            <div className="flex items-center gap-2">
              <Checkbox
                onChange={(e) => setIsActive(e.checked || false)}
                checked={isActive}
              />
              <span className="text-sm">Active</span>
            </div>
          </div>

          <div className="flex gap-4 mt-6">
            <Button label="Save" className="bg-green-600 px-8" onClick={handleSave} />
            <Button label="Clear" severity="danger" className="px-8" />
          </div>
        </div>
      )}

      <Dialog
        header="Confirmation"
        visible={showConfirmModal}
        style={{ width: "400px" }}
        onHide={() => setShowConfirmModal(false)}
        draggable={false}
        closable={false}
      >
        <div className="text-center p-4">
          <i className="pi pi-exclamation-triangle text-yellow-500 text-5xl mb-4"></i>
          <h3 className="text-xl font-bold mb-2">Are you sure?</h3>
          <p className="text-gray-600 mb-6">Do you want to save this record?</p>
          <div className="flex justify-center gap-3">
            <Button label="Yes" className="bg-blue-600 px-6" onClick={handleConfirmYes} />
            <Button
              label="Cancel"
              outlined
              severity="danger"
              className="px-6"
              onClick={() => setShowConfirmModal(false)}
            />
          </div>
        </div>
      </Dialog>

      <Dialog
        header="Success!"
        visible={showSuccessModal}
        style={{ width: "400px" }}
        onHide={() => setShowSuccessModal(false)}
        draggable={false}
      >
        <div className="text-center p-4">
          <i className="pi pi-check-circle text-green-500 text-5xl mb-4"></i>
          <h3 className="text-xl font-bold text-green-600 mb-2">Success!</h3>
          <p className="text-gray-600 mb-6">Record Saved Successfully!</p>
          <div className="flex justify-center">
            <Button
              label="OK"
              className="bg-green-600 px-10"
              onClick={() => {
                setShowSuccessModal(false);
                setShowAddPage(false);
              }}
            />
          </div>
        </div>
      </Dialog>
    </PageLayout>
  );
};

export default VocationalTeacherRegistration;
