import React, { useState } from "react";
import PageLayout from "@/components/PageLayout";
import Table from "@/ui/shared/Table";
import Dropdown from "@/ui/shared/Dropdown";
import Input, { DateInput, Textarea } from "@/ui/shared/Input";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import { Checkbox } from "primereact/checkbox";

interface StudentActivityRow {
  studentName: string;
  className: string;
  trade: string;
  activityName: string;
  activityDate: string;
  schoolName: string;
  district: string;
  isActive: boolean;
}

const VocationalStudentActivity: React.FC = () => {
  const [showAddPage, setShowAddPage] = useState(false);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [isActive, setIsActive] = useState(true);

  const activityList: StudentActivityRow[] = [
    {
      studentName: "Amit Kumar",
      className: "Class 9",
      trade: "Information Technology",
      activityName: "Computer Lab Practical",
      activityDate: "12-08-2025",
      schoolName: "Govt HSS Bhopal",
      district: "Bhopal",
      isActive: true,
    },
    {
      studentName: "Pooja Verma",
      className: "Class 10",
      trade: "Retail",
      activityName: "Store Visit",
      activityDate: "18-08-2025",
      schoolName: "Govt HSS Indore",
      district: "Indore",
      isActive: true,
    },
    {
      studentName: "Rohit Singh",
      className: "Class 11",
      trade: "Solar Energy",
      activityName: "Solar Panel Demo",
      activityDate: "05-07-2025",
      schoolName: "Govt HSS Gwalior",
      district: "Gwalior",
      isActive: false,
    },
    {
      studentName: "Neha Jain",
      className: "Class 12",
      trade: "Hospitality",
      activityName: "Hotel Management Workshop",
      activityDate: "22-07-2025",
      schoolName: "Govt HSS Ujjain",
      district: "Ujjain",
      isActive: true,
    },
    {
      studentName: "Suresh Patel",
      className: "Class 9",
      trade: "Plumbing",
      activityName: "Pipe Fitting Practice",
      activityDate: "10-06-2025",
      schoolName: "Govt HSS Jabalpur",
      district: "Jabalpur",
      isActive: true,
    },
  ];

  const columns = [
    { field: "studentName", header: "Student Name", sortable: true, style: { whiteSpace: "nowrap" } },
    { field: "className", header: "Class", sortable: true, style: { whiteSpace: "nowrap" } },
    { field: "trade", header: "Vocational Trade", sortable: true, style: { whiteSpace: "nowrap" } },
    { field: "activityName", header: "Activity Name", style: { whiteSpace: "nowrap" } },
    { field: "activityDate", header: "Activity Date", sortable: true, style: { whiteSpace: "nowrap" } },
    { field: "schoolName", header: "School Name", style: { whiteSpace: "nowrap" } },
    { field: "district", header: "District", sortable: true, style: { whiteSpace: "nowrap" } },
    {
      field: "isActive",
      header: "Status",
      style: { whiteSpace: "nowrap" },
      body: (row: StudentActivityRow) => (
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
    },
    {
      field: "action",
      header: "Action",
      style: { whiteSpace: "nowrap" },
      body: () => (
        <Button icon="pi pi-pencil" className="p-button-sm bg-orange-500 border-none" />
      ),
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
    <PageLayout title="Vocational Student Activity">
      {!showAddPage && (
        <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold text-gray-800">
              Vocational Student Activity
            </h2>
            <Button
              label="Add Activity"
              icon="pi pi-plus"
              className="bg-orange-500 border-none"
              onClick={() => setShowAddPage(true)}
            />
          </div>

          <Table
            columns={columns}
            data={activityList}
            showPagination
            rowsPerPage={10}
            {...{ format: "vocational_student_activity" }}
          />
        </div>
      )}

      {showAddPage && (
        <div className="bg-white p-6 rounded-lg border border-orange-300 shadow-sm space-y-6">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-bold text-blue-700">
              Add Vocational Student Activity
            </h2>
            <Button
              label="Back To List"
              className="bg-orange-500 border-none"
              onClick={() => setShowAddPage(false)}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Input label="Student Name" required placeholder="Enter Student Name" />
            <Dropdown label="Class" required options={[{ label: "Class 9", value: "9" }]} />
            <Dropdown label="Vocational Trade" required options={[{ label: "Information Technology", value: "IT" }]} />
            <Input label="Activity Name" required placeholder="Enter Activity"/>
            <DateInput label="Activity Date" required placeholder="mm-dd-yyyy"/>
            <Input label="School Name" required placeholder="Enter School Name"/>
            <Dropdown label="District" required options={[{ label: "Bhopal", value: "Bhopal" }]} />

            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-gray-700">Status</label>
              <div className="flex items-center gap-2 mt-2">
                <Checkbox
                  onChange={(e) => setIsActive(e.checked || false)}
                  checked={isActive}
                />
                <span className="text-sm">Active</span>
              </div>
            </div>

            <Textarea
              label="Activity Description"
              placeholder="Enter Description"
              required
              rows={2}
            />
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

export default VocationalStudentActivity;
