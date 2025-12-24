import React, { useState } from "react";
import PageLayout from "../../../components/PageLayout";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { Dropdown } from "primereact/dropdown";
import { DataTable, type DataTableExpandedRows } from "primereact/datatable";
import { Column } from "primereact/column";
import { InputTextarea } from "primereact/inputtextarea";
import { Dialog } from "primereact/dialog";

interface SchemeRecord {
  id: number;
  regNo: string;
  studentName: string;
  category: string;
  email: string;
  mobile: string;
  academicYear: string;
  course: string;
  feeType: string;
  totalFee: number;
  paidFee: number;
  remainingFee: number;
  payingAmount: number;
  paymentMode: string;
  remarks: string;
  status: string;
}

const ApplyForScheme: React.FC = () => {
  const [showDetails, setShowDetails] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [expandedRows, setExpandedRows] = useState<
    DataTableExpandedRows | undefined
  >(undefined);

  const [schemeList] = useState<SchemeRecord[]>([
    {
      id: 1,
      regNo: "2024000000001",
      studentName: "Rajesh Kumar",
      category: "OBC",
      email: "RajeshKumar@gmail.com",
      mobile: "+919399771855",
      academicYear: "2024-2025",
      course: "B.Tech",
      feeType: "Semester Fee",
      totalFee: 80000,
      paidFee: 20000,
      remainingFee: 60000,
      payingAmount: 30000,
      paymentMode: "Bank Transfer",
      remarks: "Paid fee in advance",
      status: "Active",
    },
  ]);

  const categoryOptions = ["General", "OBC", "SC", "ST", "EWS", "PWD"];
  const academicYears = ["2024-2025", "2025-2026"];
  const courses = [
    "B.Tech",
    "M.Tech",
    "BCA",
    "MCA",
    "B.Sc (IT)",
    "M.Sc (IT)",
    "MBA",
  ];
  const feeTypes = [
    "One-time Fee",
    "Semester Fee",
    "Annual Fee",
    "Tuition Fee",
    "Lab Fee",
    "Admission Fee",
  ];
  const paymentModes = ["Cash", "Cheque", "Bank Transfer", "Online Payment"];

  const rowExpansionTemplate = (data: SchemeRecord) => {
    return (
      <div className="p-4 bg-gray-50 border rounded-lg m-2 grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
        <p>
          <strong>Paid Fee (₹):</strong> {data.paidFee}
        </p>
        <p>
          <strong>Remaining Fee (₹):</strong> {data.remainingFee}
        </p>
        <p>
          <strong>Paying Amount (₹):</strong> {data.payingAmount}
        </p>
        <p>
          <strong>Payment Mode:</strong> {data.paymentMode}
        </p>
        <p>
          <strong>Remarks:</strong> {data.remarks}
        </p>
        <p>
          <strong>Status:</strong>{" "}
          <span className="text-green-600 font-bold">{data.status}</span>
        </p>
        <div className="flex gap-2">
          <Button
            icon="pi pi-pencil"
            className="p-button-rounded p-button-info p-button-text"
            label="Edit"
          />
          <Button
            icon="pi pi-trash"
            className="p-button-rounded p-button-danger p-button-text"
            label="Delete"
          />
        </div>
      </div>
    );
  };

  return (
    <PageLayout title="Apply For Scheme">
      {/* 1. Search Section */}
      <div className="bg-white p-6 rounded shadow-sm border mb-6">
        <h2 className="text-lg font-bold mb-4 border-b pb-2">
          Add Apply For Scheme
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-end">
          <div className="flex flex-col gap-2">
            <label className="font-bold text-sm">Enter Registration No.*</label>
            <InputText placeholder="Ex: 20240001" className="p-inputtext-sm" />
          </div>
          <div className="flex gap-3">
            <Button
              label="Search"
              icon="pi pi-search"
              className="p-button-sm"
              onClick={() => setShowDetails(true)}
            />
            <Button
              label="Clear"
              icon="pi pi-refresh"
              className="p-button-sm p-button-secondary p-button-outlined"
              onClick={() => setShowDetails(false)}
            />
          </div>
        </div>
      </div>

      {/* 2. Student Info & Payment Section (Show on Search) */}
      {showDetails && (
        <div className="bg-white p-6 rounded shadow-sm border mb-6 p-fluid">
          <h3 className="font-bold text-gray-700 mb-4 border-l-4 border-blue-500 pl-2">
            Student Information
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="field">
              <label className="text-xs font-bold">Student Name</label>
              <InputText
                disabled
                value="Rajesh Kumar"
                className="p-inputtext-sm"
              />
            </div>
            <div className="field">
              <label className="text-xs font-bold">Category</label>
              <Dropdown options={categoryOptions} placeholder="Select" />
            </div>
            <div className="field">
              <label className="text-xs font-bold">Email ID</label>
              <InputText className="p-inputtext-sm" />
            </div>
            <div className="field">
              <label className="text-xs font-bold">Mobile Number</label>
              <InputText className="p-inputtext-sm" />
            </div>
            <div className="field">
              <label className="text-xs font-bold">Academic Year*</label>
              <Dropdown options={academicYears} placeholder="Select" />
            </div>
          </div>

          <h3 className="font-bold text-gray-700 mb-4 border-l-4 border-green-500 pl-2">
            Payment Details
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="field">
              <label className="text-xs font-bold">Course*</label>
              <Dropdown options={courses} placeholder="Select" />
            </div>
            <div className="field">
              <label className="text-xs font-bold">Select Fee Type*</label>
              <Dropdown options={feeTypes} placeholder="Select" />
            </div>
            <div className="field">
              <label className="text-xs font-bold">Total Fee</label>
              <InputText className="p-inputtext-sm" />
            </div>
            <div className="field">
              <label className="text-xs font-bold">Paid Fee</label>
              <InputText className="p-inputtext-sm" />
            </div>
            <div className="field">
              <label className="text-xs font-bold">Remaining Fee</label>
              <InputText className="p-inputtext-sm" />
            </div>
            <div className="field">
              <label className="text-xs font-bold">Enter Paying Amount*</label>
              <InputText className="p-inputtext-sm" />
            </div>
            <div className="field">
              <label className="text-xs font-bold">Select Payment Mode*</label>
              <Dropdown options={paymentModes} placeholder="Select" />
            </div>
            <div className="field">
              <label className="text-xs font-bold">Status*</label>
              <div className="flex items-center gap-2 mt-2">
                <input type="radio" checked readOnly />{" "}
                <span className="text-sm">Active</span>
              </div>
            </div>
            <div className="field col-span-full">
              <label className="text-xs font-bold">Enter Remark*</label>
              <InputTextarea rows={2} />
            </div>
          </div>

          <div className="flex gap-3 mt-8 border-t pt-5 justify-end">
            <Button
              label="Proceed to Payment"
              icon="pi pi-check"
              className="p-button-success"
              onClick={() => setShowConfirm(true)}
            />
            <Button
              label="Clear"
              icon="pi pi-refresh"
              className="p-button-outlined p-button-secondary"
            />
          </div>
        </div>
      )}

      {/* 3. List Section */}
      <div className="bg-white p-4 rounded shadow-sm border">
        <h2 className="text-lg font-bold mb-4">Apply For Scheme List</h2>
        <DataTable
          value={schemeList}
          expandedRows={expandedRows}
          onRowToggle={(e) => setExpandedRows(e.data as DataTableExpandedRows)}
          rowExpansionTemplate={rowExpansionTemplate}
          dataKey="id"
          paginator
          rows={10}
          className="p-datatable-sm text-sm"
          tableStyle={{ minWidth: "60rem" }}
        >
          <Column expander style={{ width: "3rem" }} />
          <Column field="id" header="Sr No." />
          <Column field="regNo" header="Registration No." />
          <Column field="studentName" header="Student Name" />
          <Column field="category" header="Category" />
          <Column field="email" header="Email ID" />
          <Column field="mobile" header="Mobile Number" />
          <Column field="academicYear" header="Academic Year" />
          <Column field="course" header="Course" />
          <Column field="feeType" header="Fee Type" />
          <Column
            field="totalFee"
            header="Total Fee (₹)"
            body={(d) => `₹${d.totalFee}`}
          />
        </DataTable>
      </div>

      {/* Confirmation Dialog */}
      <Dialog
        header="Confirmation"
        visible={showConfirm}
        onHide={() => setShowConfirm(false)}
        footer={
          <div className="flex justify-end gap-2">
            <Button
              label="No"
              onClick={() => setShowConfirm(false)}
              className="p-button-text"
            />
            <Button
              label="Yes"
              onClick={() => {
                setShowConfirm(false);
                setShowSuccess(true);
              }}
              autoFocus
            />
          </div>
        }
      >
        <p>Are you sure you want to proceed with the payment?</p>
      </Dialog>

      {/* Success Dialog */}
      <Dialog
        header="Success!"
        visible={showSuccess}
        onHide={() => setShowSuccess(false)}
        footer={<Button label="OK" onClick={() => setShowSuccess(false)} />}
      >
        <p>Scheme application and payment processed successfully.</p>
      </Dialog>
    </PageLayout>
  );
};

export default ApplyForScheme;
