import React, { useState } from "react";
import PageLayout from "../../../components/PageLayout";
import { DataTable, type DataTableExpandedRows } from "primereact/datatable";
import { Column } from "primereact/column";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { Dropdown } from "primereact/dropdown";
import { Checkbox } from "primereact/checkbox";
import { ConfirmDialog, confirmDialog } from "primereact/confirmdialog";

interface PaymentVerificationData {
  id: string;
  srNo: number;
  transactionId: string;
  studentName: string;
  category: string;
  email: string;
  mobile: string;
  academicYear: string;
  paymentStatus: string;
  course: string;
  feeType: string;
  totalFee: number;
  paidFee: number;
  remainingFee: number;
  payingAmount: number;
  paymentMode: string;
  remark: string;
  status: string;
}

const PaymentVerification: React.FC = () => {
  const [view, setView] = useState<"ENTRY" | "EDIT">("ENTRY");
  const [showTable, setShowTable] = useState(false);
  const [expandedRows, setExpandedRows] = useState<DataTableExpandedRows>();
  const [globalFilter, setGlobalFilter] = useState("");

  const [formData, setFormData] = useState<Partial<PaymentVerificationData>>({
    status: "Active",
    paymentStatus: "Pending",
  });

  // Options
  const categories = ["General", "OBC", "SC", "ST", "EWS", "PWD"];
  const academicYears = ["2024-2025", "2025-2026"];
  const payStatuses = ["Success", "Fail", "Pending"];
  const courses = [
    "B.Tech",
    "M.Tech",
    "BCA",
    "MCA",
    "B.Sc (IT)",
    "M.Sc (IT)",
    "MBA (Tech Management)",
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

  const [data] = useState<PaymentVerificationData[]>([
    {
      id: "1",
      srNo: 1,
      transactionId: "TRX20241122",
      studentName: "Sneha Sharma",
      category: "General",
      email: "sneha.sharma@gmail.com",
      mobile: "+917856321479",
      academicYear: "2024-2025",
      paymentStatus: "Pending",
      course: "MCA",
      feeType: "Tuition Fee",
      totalFee: 50000,
      paidFee: 10000,
      remainingFee: 40000,
      payingAmount: 10000,
      paymentMode: "Bank Transfer",
      remark: "Paid fee in advance",
      status: "Active",
    },
  ]);

  // --- POPUP LOGIC ---
  const handleSubmit = () => {
    confirmDialog({
      message: "Are you sure you want to submit this student information?",
      header: "Confirmation",
      icon: "pi pi-question-circle",
      accept: () => {
        confirmDialog({
          message: "Information Submitted Successfully!",
          header: "Success",
          icon: "pi pi-check-circle",
          accept: () => setShowTable(true),
        });
      },
    });
  };

  const confirmEdit = (rowData: PaymentVerificationData) => {
    confirmDialog({
      message: "Do you want to edit this payment record?",
      header: "Edit Confirmation",
      icon: "pi pi-pencil",
      accept: () => {
        setFormData(rowData);
        setView("EDIT");
      },
    });
  };

  // --- EXPANDED ROW TEMPLATE ---
  const rowExpansionTemplate = (data: PaymentVerificationData) => (
    <div className="p-4 bg-gray-50 border-round border-1 border-gray-200">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
        <div>
          <span className="font-bold text-gray-500 block text-xs uppercase">
            Total Fee
          </span>{" "}
          ₹{data.totalFee.toLocaleString()}
        </div>
        <div>
          <span className="font-bold text-gray-500 block text-xs uppercase">
            Paid Fee
          </span>{" "}
          ₹{data.paidFee.toLocaleString()}
        </div>
        <div>
          <span className="font-bold text-gray-500 block text-xs uppercase">
            Remaining Fee
          </span>{" "}
          ₹{data.remainingFee.toLocaleString()}
        </div>
        <div>
          <span className="font-bold text-gray-500 block text-xs uppercase">
            Paying Amount
          </span>{" "}
          ₹{data.payingAmount.toLocaleString()}
        </div>
        <div>
          <span className="font-bold text-gray-500 block text-xs uppercase">
            Payment Mode
          </span>{" "}
          {data.paymentMode}
        </div>
        <div className="md:col-span-2">
          <span className="font-bold text-gray-500 block text-xs uppercase">
            Remarks
          </span>{" "}
          {data.remark}
        </div>
        <div>
          <span className="font-bold text-gray-500 block text-xs uppercase">
            Status
          </span>{" "}
          <span className="text-green-600 font-bold">{data.status}</span>
        </div>
      </div>
      <div className="flex gap-2 border-t pt-3">
        <Button
          label="Edit"
          icon="pi pi-pencil"
          className="p-button-sm p-button-success"
          onClick={() => confirmEdit(data)}
        />
        <Button
          label="Delete"
          icon="pi pi-trash"
          className="p-button-sm p-button-danger"
        />
      </div>
    </div>
  );

  return (
    <PageLayout title="Payment Verification">
      <ConfirmDialog />

      <div className="bg-white p-4 rounded shadow-sm border border-gray-200">
        {/* --- HEADER --- */}
        <div className="flex justify-between items-center border-b pb-2 mb-4">
          <h2 className="text-xl font-bold text-gray-800">
            {view === "EDIT"
              ? "Update Payment Verification"
              : "Payment Verification"}
          </h2>
          {view === "EDIT" && (
            <Button
              label="Go Back"
              icon="pi pi-arrow-left"
              className="p-button-text p-button-sm"
              onClick={() => setView("ENTRY")}
            />
          )}
        </div>

        {/* --- SEARCH TRANSACTION --- */}
        <div className="bg-gray-50 p-3 rounded mb-4">
          <label className="text-xs font-bold block mb-1">
            Enter Transaction Id*
          </label>
          <div className="flex gap-2 max-w-md">
            <InputText
              value={formData.transactionId}
              onChange={(e) =>
                setFormData({ ...formData, transactionId: e.target.value })
              }
              className="w-full p-inputtext-sm"
            />
            <Button icon="pi pi-search" className="p-button-sm" />
            <Button
              icon="pi pi-refresh"
              className="p-button-secondary p-button-outlined p-button-sm"
              onClick={() => setFormData({})}
            />
          </div>
        </div>

        {/* --- INFORMATION FORM (Student & Payment) --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
          {/* Student Info */}
          <div className="border p-4 rounded bg-white shadow-xs">
            <h3 className="text-blue-700 font-bold mb-4 border-b pb-1">
              Student Information
            </h3>
            <div className="grid grid-cols-1 gap-3">
              <div>
                <label className="text-xs font-bold">Student Name</label>
                <InputText
                  value={formData.studentName}
                  className="w-full p-inputtext-sm"
                />
              </div>
              <div>
                <label className="text-xs font-bold">Category</label>
                <Dropdown
                  value={formData.category}
                  options={categories}
                  className="w-full p-inputtext-sm"
                  placeholder="Select"
                />
              </div>
              <div>
                <label className="text-xs font-bold">Mobile Number</label>
                <InputText
                  value={formData.mobile}
                  className="w-full p-inputtext-sm"
                />
              </div>
              <div>
                <label className="text-xs font-bold">Email ID</label>
                <InputText
                  value={formData.email}
                  className="w-full p-inputtext-sm"
                />
              </div>
              <div>
                <label className="text-xs font-bold">Academic Year*</label>
                <Dropdown
                  value={formData.academicYear}
                  options={academicYears}
                  className="w-full p-inputtext-sm"
                  placeholder="Select"
                />
              </div>
            </div>
          </div>

          {/* Payment Details */}
          <div className="border p-4 rounded bg-white shadow-xs">
            <h3 className="text-green-700 font-bold mb-4 border-b pb-1">
              Payment Details
            </h3>
            <div className="grid grid-cols-2 gap-3">
              <div className="col-span-1">
                <label className="text-xs font-bold">Payment Status</label>
                <Dropdown
                  value={formData.paymentStatus}
                  options={payStatuses}
                  className="w-full p-inputtext-sm"
                />
              </div>
              <div className="col-span-1">
                <label className="text-xs font-bold">Course</label>
                <Dropdown
                  value={formData.course}
                  options={courses}
                  className="w-full p-inputtext-sm"
                />
              </div>
              <div className="col-span-1">
                <label className="text-xs font-bold">Fee Type</label>
                <Dropdown
                  value={formData.feeType}
                  options={feeTypes}
                  className="w-full p-inputtext-sm"
                />
              </div>
              <div className="col-span-1">
                <label className="text-xs font-bold">Payment Mode</label>
                <Dropdown
                  value={formData.paymentMode}
                  options={paymentModes}
                  className="w-full p-inputtext-sm"
                />
              </div>
              <div>
                <label className="text-xs font-bold">Total Fee</label>
                <InputText
                  value={formData.totalFee?.toString()}
                  className="w-full p-inputtext-sm"
                />
              </div>
              <div>
                <label className="text-xs font-bold">Paid Fee</label>
                <InputText
                  value={formData.paidFee?.toString()}
                  className="w-full p-inputtext-sm"
                />
              </div>
              <div>
                <label className="text-xs font-bold">Remaining Fee</label>
                <InputText
                  value={formData.remainingFee?.toString()}
                  className="w-full p-inputtext-sm"
                />
              </div>
              <div>
                <label className="text-xs font-bold">Paying Amount*</label>
                <InputText
                  value={formData.payingAmount?.toString()}
                  className="w-full p-inputtext-sm"
                />
              </div>
              <div className="col-span-2">
                <label className="text-xs font-bold">Remark</label>
                <InputText
                  value={formData.remark}
                  className="w-full p-inputtext-sm"
                />
              </div>
              <div className="flex items-center gap-2 mt-2">
                <Checkbox
                  checked={formData.status === "Active"}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      status: e.checked ? "Active" : "Inactive",
                    })
                  }
                />
                <span className="text-xs font-bold">Active</span>
              </div>
            </div>
          </div>
        </div>

        {/* --- FORM ACTIONS --- */}
        <div className="mt-6 flex gap-2 border-t pt-4">
          <Button
            label={view === "EDIT" ? "Update" : "Submit"}
            icon="pi pi-check"
            className="p-button-primary px-5"
            onClick={handleSubmit}
          />
          <Button
            label="Clear"
            icon="pi pi-refresh"
            className="p-button-secondary p-button-outlined px-5"
            onClick={() => setFormData({ status: "Active" })}
          />
        </div>

        {/* --- LIST TABLE --- */}
        {showTable && view === "ENTRY" && (
          <div className="mt-8 animate-fade-in">
            <div className="flex justify-between items-center mb-3">
              <h3 className="font-bold text-gray-600">
                Payment Verification List
              </h3>
              <span className="p-input-icon-left">
                <i className="pi pi-search" />
                <InputText
                  placeholder="Search List..."
                  className="p-inputtext-sm"
                  onInput={(e) =>
                    setGlobalFilter((e.target as HTMLInputElement).value)
                  }
                />
              </span>
            </div>
            <DataTable
              value={data}
              paginator
              rows={10}
              dataKey="id"
              globalFilter={globalFilter}
              expandedRows={expandedRows}
              onRowToggle={(e) =>
                setExpandedRows(e.data as DataTableExpandedRows)
              }
              rowExpansionTemplate={rowExpansionTemplate}
              className="p-datatable-sm"
              showGridlines
              stripedRows
            >
              <Column expander style={{ width: "3rem" }} />
              <Column
                field="srNo"
                header="Sr No."
                style={{ width: "3.5rem" }}
              />
              <Column field="transactionId" header="Transaction Id" sortable />
              <Column field="studentName" header="Student Name" sortable />
              <Column field="category" header="Category" />
              <Column field="email" header="Email ID" />
              <Column field="mobile" header="Mobile" />
              <Column field="academicYear" header="Year" />
              <Column
                field="paymentStatus"
                header="Pay Status"
                body={(r) => (
                  <span
                    className={`font-bold ${
                      r.paymentStatus === "Success"
                        ? "text-green-600"
                        : "text-red-500"
                    }`}
                  >
                    {r.paymentStatus}
                  </span>
                )}
              />
              <Column field="course" header="Course" />
              <Column field="feeType" header="Fee Type" />
            </DataTable>
          </div>
        )}
      </div>
    </PageLayout>
  );
};

export default PaymentVerification;
