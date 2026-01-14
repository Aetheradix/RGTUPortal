import React, { useState } from "react";
import PageLayout from "@/components/PageLayout";
import Table from "@/ui/shared/Table";
import Dropdown from "@/ui/shared/Dropdown";
import { DateInput, Textarea, NumberInput } from "@/ui/shared/Input";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";

interface ApplyLeaveRow {
  id: number;
  leaveType: string;
  fromDate: string;
  toDate: string;
  approvalAuthority: string;
  supportingDocument: string;
  reason: string;
  status: string;
}

const ApplyLeave: React.FC = () => {
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const [leaveType, setLeaveType] = useState<string | null>(null);
  const [fromDate, setFromDate] = useState<Date | null>(null);
  const [toDate, setToDate] = useState<Date | null>(null);
  const [leaveDays, setLeaveDays] = useState<number | null>(null);
  const [approvalAuthority, setApprovalAuthority] = useState<string | null>(null);
  const [reason, setReason] = useState("");

  const [fileName, setFileName] = useState<string>("No file chosen");

  const [applyLeaveList, setApplyLeaveList] = useState<ApplyLeaveRow[]>([
    {
      id: 1,
      leaveType: "Casual Leave",
      fromDate: "10-01-2026",
      toDate: "12-01-2026",
      approvalAuthority: "Principal",
      supportingDocument: "medical.pdf",
      reason: "Personal Work",
      status: "Pending",
    },
    {
      id: 2,
      leaveType: "Medical Leave",
      fromDate: "02-01-2026",
      toDate: "05-01-2026",
      approvalAuthority: "Head Master",
      supportingDocument: "certificate.jpg",
      reason: "Fever",
      status: "Approved",
    },
  ]);

  const leaveTypeOptions = [
    { label: "Casual Leave", value: "Casual Leave" },
    { label: "Medical Leave", value: "Medical Leave" },
    { label: "Earned Leave", value: "Earned Leave" },
    { label: "CCL Leave", value: "CCL Leave" },
  ];

  const authorityOptions = [
    { label: "Principal", value: "Principal" },
    { label: "Head Master", value: "Head Master" },
    { label: "District Officer", value: "District Officer" },
  ];

  const formatDate = (d: Date | null) => {
    if (!d) return "-";
    const dd = String(d.getDate()).padStart(2, "0");
    const mm = String(d.getMonth() + 1).padStart(2, "0");
    const yyyy = d.getFullYear();
    return `${dd}-${mm}-${yyyy}`;
  };

  const clearForm = () => {
    setLeaveType(null);
    setFromDate(null);
    setToDate(null);
    setLeaveDays(null);
    setApprovalAuthority(null);
    setReason("");
    setFileName("No file chosen");
  };

  const onApply = () => {
    setShowConfirmModal(true);
  };

  const onConfirmYes = () => {
    const payload: ApplyLeaveRow = {
      id: applyLeaveList.length ? Math.max(...applyLeaveList.map((x) => x.id)) + 1 : 1,
      leaveType: leaveType || "Casual Leave",
      fromDate: formatDate(fromDate),
      toDate: formatDate(toDate),
      approvalAuthority: approvalAuthority || "Principal",
      supportingDocument: fileName === "No file chosen" ? "N/A" : fileName,
      reason: reason.trim() || "-",
      status: "Pending",
    };

    setApplyLeaveList((prev) => [payload, ...prev]);

    setShowConfirmModal(false);
    setShowSuccessModal(true);
  };

  const columns = [
    { field: "leaveType", header: "Leave Type", sortable: true, style: { whiteSpace: "nowrap" } },
    { field: "fromDate", header: "From Date", sortable: true, style: { whiteSpace: "nowrap" } },
    { field: "toDate", header: "To Date", sortable: true, style: { whiteSpace: "nowrap" } },
    { field: "approvalAuthority", header: "Approval Authority", sortable: true, style: { whiteSpace: "nowrap" } },
    { field: "supportingDocument", header: "Supporting Document", style: { whiteSpace: "nowrap" } },
    { field: "reason", header: "Reason", style: { whiteSpace: "nowrap" } },
    {
      field: "status",
      header: "Status",
      sortable: true,
      style: { whiteSpace: "nowrap" },
      body: (row: ApplyLeaveRow) => (
        <span
          className={`px-3 py-1 rounded text-xs font-bold ${
            row.status === "Approved"
              ? "bg-green-100 text-green-700 border border-green-300"
              : row.status === "Rejected"
              ? "bg-red-100 text-red-700 border border-red-300"
              : "bg-yellow-100 text-yellow-700 border border-yellow-300"
          }`}
        >
          {row.status}
        </span>
      ),
    },
  ];

  return (
    <PageLayout title="Apply Leave">
     <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-bold text-blue-700">Applicant Name : Director, Public Instructions</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Dropdown
            label="Select Leave Type"
            required
            options={leaveTypeOptions}
            value={leaveType}
            onChange={(e) => setLeaveType(e.value)}
            placeholder="-- Select --"
          />

          <DateInput
            label="Select From Date"
            required
            value={fromDate}
            onChange={(e) => setFromDate(e.value as Date)}
            placeholder="dd-mm-yyyy"
            dateFormat="dd-mm-yy"
            showButtonBar
          />

          <DateInput
            label="Select To Date"
            required
            value={toDate}
            onChange={(e) => setToDate(e.value as Date)}
            placeholder="dd-mm-yyyy"
            dateFormat="dd-mm-yy"
            showButtonBar
          />

          <NumberInput
            label="Enter Number of Leave Days"
            required
            value={leaveDays}
            onValueChange={(e) => setLeaveDays(e.value as number)}
            placeholder="Number of Leave Days"
            useGrouping={false}
          />

          <Dropdown
            label="Select Leave Approval Authority"
            required
            options={authorityOptions}
            value={approvalAuthority}
            onChange={(e) => setApprovalAuthority(e.value)}
            placeholder="-- Select --"
          />

          <div className="w-full md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Attach Supporting Document (Only 200KB.)
              <span className="text-red-500 ml-1">*</span>
            </label>

            <div className="flex items-center gap-3 border border-gray-300 rounded px-3 py-2">
              <input
                type="file"
                onChange={(e) => setFileName(e.target.files?.[0]?.name || "No file chosen")}
                className="w-full"
              />
            </div>

            <small className="text-gray-500 mt-1 block">{fileName}</small>
          </div>

          <Textarea
            label="Enter Reason of Leave"
            required
            placeholder="Enter Leave reason in 200 characters"
            rows={2}
            value={reason}
            onChange={(e) => setReason(e.target.value)}
          />
        </div>

        <div className="flex gap-4 mt-6">
          <Button label="Apply for Leave" className="bg-green-600 px-8" onClick={onApply} type="button" />
          <Button label="Clear" severity="danger" className="px-8" onClick={clearForm} type="button" />
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm mt-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-gray-800">Apply Leave Details</h2>
          <Button label="Export To Excel" icon="pi pi-download" className="bg-blue-600 border-none" type="button" onClick={() => {}} />
        </div>

        <Table columns={columns} data={applyLeaveList} showPagination rowsPerPage={10} {...{ format: "apply_leave" }} />
      </div>

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
          <p className="text-gray-600 mb-6">Do you want to apply for leave?</p>
          <div className="flex justify-center gap-3">
            <Button label="Yes" className="bg-blue-600 px-6" onClick={onConfirmYes} type="button" />
            <Button label="Cancel" outlined severity="danger" className="px-6" onClick={() => setShowConfirmModal(false)} type="button" />
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
          <p className="text-gray-600 mb-6">Leave Applied Successfully!</p>
          <div className="flex justify-center">
            <Button
              label="OK"
              className="bg-green-600 px-10"
              onClick={() => {
                setShowSuccessModal(false);
                clearForm();
              }}
              type="button"
            />
          </div>
        </div>
      </Dialog>
    </PageLayout>
  );
};

export default ApplyLeave;
