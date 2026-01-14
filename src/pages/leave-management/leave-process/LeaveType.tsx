import React, { useState } from "react";
import PageLayout from "@/components/PageLayout";
import Table from "@/ui/shared/Table";
import Dropdown from "@/ui/shared/Dropdown";
import Input, { DateInput } from "@/ui/shared/Input";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import { Checkbox } from "primereact/checkbox";

interface LeaveTypeRow {
  id: number;
  leaveType: string;
  gender: string;
  impactOnPayroll: string;
  leaveCarryForward: string;
  impactOnEarningAndDeduction: boolean;
  effectiveDate: Date | null;
}

const LeaveTypeMaster: React.FC = () => {
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const [editId, setEditId] = useState<number | null>(null);

  const [leaveType, setLeaveType] = useState("");
  const [gender, setGender] = useState<string | null>(null);
  const [impactOnPayroll, setImpactOnPayroll] = useState<string | null>(null);
  const [leaveCarryForward, setLeaveCarryForward] = useState<string | null>(null);
  const [effectiveDate, setEffectiveDate] = useState<Date | null>(null);
  const [impactOnEarningAndDeduction, setImpactOnEarningAndDeduction] = useState(false);

  const [leaveTypeList, setLeaveTypeList] = useState<LeaveTypeRow[]>([
    {
      id: 1,
      leaveType: "Leave Without Pay",
      gender: "All",
      impactOnPayroll: "Yes",
      leaveCarryForward: "No",
      impactOnEarningAndDeduction: true,
      effectiveDate: new Date("2025-03-21"),
    },
    {
      id: 2,
      leaveType: "Casual Leave",
      gender: "All",
      impactOnPayroll: "No",
      leaveCarryForward: "No",
      impactOnEarningAndDeduction: false,
      effectiveDate: new Date("2024-05-21"),
    },
    {
      id: 3,
      leaveType: "Leave not due",
      gender: "All",
      impactOnPayroll: "No",
      leaveCarryForward: "No",
      impactOnEarningAndDeduction: false,
      effectiveDate: new Date("2024-05-21"),
    },
    {
      id: 4,
      leaveType: "Extra Ordinary Leave",
      gender: "All",
      impactOnPayroll: "No",
      leaveCarryForward: "No",
      impactOnEarningAndDeduction: false,
      effectiveDate: new Date("2024-05-21"),
    },
    {
      id: 5,
      leaveType: "Commute Leave",
      gender: "All",
      impactOnPayroll: "No",
      leaveCarryForward: "No",
      impactOnEarningAndDeduction: false,
      effectiveDate: new Date("2024-05-22"),
    },
  ]);

  const genderOptions = [
    { label: "All", value: "All" },
    { label: "Male", value: "Male" },
    { label: "Female", value: "Female" },
  ];

  const yesNoOptions = [
    { label: "Yes", value: "Yes" },
    { label: "No", value: "No" },
  ];

  const clearForm = () => {
    setLeaveType("");
    setGender(null);
    setImpactOnPayroll(null);
    setLeaveCarryForward(null);
    setEffectiveDate(null);
    setImpactOnEarningAndDeduction(false);
    setEditId(null);
  };
  const handleEdit = (row: LeaveTypeRow) => {
    setEditId(row.id);
    setLeaveType(row.leaveType);
    setGender(row.gender);
    setImpactOnPayroll(row.impactOnPayroll);
    setLeaveCarryForward(row.leaveCarryForward);
    setEffectiveDate(row.effectiveDate);
    setImpactOnEarningAndDeduction(row.impactOnEarningAndDeduction);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleDelete = (row: LeaveTypeRow) => {
    setLeaveTypeList((prev) => prev.filter((x) => x.id !== row.id));
    if (editId === row.id) clearForm();
  };

  const handleSave = () => {
    setShowConfirmModal(true);
  };

  const handleConfirmYes = () => {
    const payload: LeaveTypeRow = {
      id: editId ?? (leaveTypeList.length ? Math.max(...leaveTypeList.map((x) => x.id)) + 1 : 1),
      leaveType: leaveType.trim() || "-",
      gender: gender || "All",
      impactOnPayroll: impactOnPayroll || "No",
      leaveCarryForward: leaveCarryForward || "No",
      impactOnEarningAndDeduction,
      effectiveDate,
    };

    if (editId) {
      setLeaveTypeList((prev) => prev.map((x) => (x.id === editId ? payload : x)));
    } else {
      setLeaveTypeList((prev) => [payload, ...prev]);
    }

    setShowConfirmModal(false);
    setShowSuccessModal(true);
  };

  const columns = [
    { field: "leaveType", header: "Leave Type", sortable: true, style: { whiteSpace: "nowrap" } },
    { field: "gender", header: "Gender", sortable: true, style: { whiteSpace: "nowrap" } },
    { field: "impactOnPayroll", header: "Impact On Payroll", sortable: true, style: { whiteSpace: "nowrap" } },
    { field: "leaveCarryForward", header: "Leave Carry Forward", sortable: true, style: { whiteSpace: "nowrap" } },
    {
      field: "impactOnEarningAndDeduction",
      header: "Impact On Earning & Deduction",
      style: { whiteSpace: "nowrap" },
      body: (row: LeaveTypeRow) => (
        <div className="flex justify-center">
          <Checkbox checked={row.impactOnEarningAndDeduction} disabled />
        </div>
      ),
    },
    {
      field: "effectiveDate",
      header: "Effective Date",
      sortable: true,
      style: { whiteSpace: "nowrap" },
      body: (row: LeaveTypeRow) => (
        <span>
          {row.effectiveDate
            ? row.effectiveDate.toLocaleDateString("en-GB")
            : "-"}
        </span>
      ),
    },
    {
      field: "action",
      header: "Action",
      style: { whiteSpace: "nowrap" },
      body: (row: LeaveTypeRow) => (
        <div className="flex items-center gap-2">
          <Button
            icon="pi pi-pencil"
            className="p-button-sm bg-orange-500 border-none"
            onClick={() => handleEdit(row)}
            type="button"
          />
          <Button
            icon="pi pi-trash"
            className="p-button-sm bg-red-500 border-none"
            onClick={() => handleDelete(row)}
            type="button"
          />
        </div>
      ),
    },
  ];

  return (
    <PageLayout title="Leave Type Master">
      <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-bold text-blue-700">Leave Type Master</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Input
            label="Enter Leave Type"
            required
            placeholder="Enter Leave Type in 200 Characters"
            value={leaveType}
            onChange={(e) => setLeaveType(e.target.value)}
          />

          <Dropdown
            label="Select Gender"
            required
            options={genderOptions}
            value={gender}
            onChange={(e) => setGender(e.value)}
            placeholder="Select"
          />

          <DateInput
            label="Select Effective Date"
            required
            value={effectiveDate}
            onChange={(e) => setEffectiveDate(e.value as Date)}
            placeholder="dd-mm-yyyy"
            dateFormat="dd-mm-yy"
            showButtonBar
          />

          <Dropdown
            label="Select Leave Carry Forward"
            required
            options={yesNoOptions}
            value={leaveCarryForward}
            onChange={(e) => setLeaveCarryForward(e.value)}
            placeholder="Select"
          />

          <Dropdown
            label="Select Impact On Payroll"
            required
            options={yesNoOptions}
            value={impactOnPayroll}
            onChange={(e) => setImpactOnPayroll(e.value)}
            placeholder="Select"
          />

          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-gray-700">Impact On Earning & Deduction</label>
            <div className="flex items-center gap-2 mt-2">
              <Checkbox
                checked={impactOnEarningAndDeduction}
                onChange={(e) => setImpactOnEarningAndDeduction(e.checked || false)}
              />
              <span className="text-sm">Yes</span>
            </div>
          </div>
        </div>

        <div className="flex gap-4 mt-6">
          <Button
            label={editId ? "Update" : "Save"}
            className="bg-green-600 px-8"
            onClick={handleSave}
            type="button"
          />
          <Button label="Clear" severity="danger" className="px-8" onClick={clearForm} type="button" />
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm mt-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-gray-800">Leave Type Details</h2>
          <Button
            label="Export To Excel"
            icon="pi pi-download"
            className="bg-blue-600 border-none"
            type="button"
            onClick={() => {}}
          />
        </div>

        <Table columns={columns} data={leaveTypeList} showPagination rowsPerPage={10} {...{ format: "leave_type_master" }} />
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
          <p className="text-gray-600 mb-6">Do you want to {editId ? "update" : "save"} this record?</p>
          <div className="flex justify-center gap-3">
            <Button label="Yes" className="bg-blue-600 px-6" onClick={handleConfirmYes} type="button" />
            <Button
              label="Cancel"
              outlined
              severity="danger"
              className="px-6"
              onClick={() => setShowConfirmModal(false)}
              type="button"
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
          <p className="text-gray-600 mb-6">Record {editId ? "Updated" : "Saved"} Successfully!</p>
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

export default LeaveTypeMaster;
