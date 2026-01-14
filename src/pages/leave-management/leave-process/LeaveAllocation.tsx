import React, { useState } from "react";
import PageLayout from "@/components/PageLayout";
import Table from "@/ui/shared/Table";
import Dropdown from "@/ui/shared/Dropdown";
import { NumberInput } from "@/ui/shared/Input";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";

interface LeaveAllocationRow {
  id: number;
  year: string;
  leaveType: string;
  className: string;
  typeOfPost: string;
  period: string;
  leaveDayWise: number;
  totalLeaveYearWise: number;
  leaveCarryForward: string;
  maxLeaveAtOneTime: number;
}

const LeaveAllocation: React.FC = () => {
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const [editId, setEditId] = useState<number | null>(null);

  const [year, setYear] = useState<string | null>(null);
  const [leaveType, setLeaveType] = useState<string | null>(null);
  const [className, setClassName] = useState<string | null>(null);
  const [typeOfPost, setTypeOfPost] = useState<string | null>(null);
  const [period, setPeriod] = useState<string | null>(null);
  const [leaveDayWise, setLeaveDayWise] = useState<number | null>(null);
  const [totalLeaveYearWise, setTotalLeaveYearWise] = useState<number | null>(null);
  const [leaveCarryForward, setLeaveCarryForward] = useState<string | null>(null);
  const [maxLeaveAtOneTime, setMaxLeaveAtOneTime] = useState<number | null>(null);

  const [allocationList, setAllocationList] = useState<LeaveAllocationRow[]>([
    {
      id: 1,
      year: "2025-26",
      leaveType: "Commute Leave",
      className: "ALL",
      typeOfPost: "Regular/Permanent",
      period: "Yearly",
      leaveDayWise: 33,
      totalLeaveYearWise: 33,
      leaveCarryForward: "Yes",
      maxLeaveAtOneTime: 12,
    },
    {
      id: 2,
      year: "2025-26",
      leaveType: "Earned Leave",
      className: "ALL",
      typeOfPost: "Regular/Permanent",
      period: "Half Yearly",
      leaveDayWise: 15,
      totalLeaveYearWise: 30,
      leaveCarryForward: "Yes",
      maxLeaveAtOneTime: 15,
    },
    {
      id: 3,
      year: "2025-26",
      leaveType: "Earned Leave",
      className: "Class II",
      typeOfPost: "Regular/Permanent",
      period: "Monthly",
      leaveDayWise: 2,
      totalLeaveYearWise: 24,
      leaveCarryForward: "No",
      maxLeaveAtOneTime: 5,
    },
  ]);

  const yearOptions = [
    { label: "2025-26", value: "2025-26" },
    { label: "2024-25", value: "2024-25" },
    { label: "2023-24", value: "2023-24" },
  ];

  const leaveTypeOptions = [
    { label: "Casual Leave", value: "Casual Leave" },
    { label: "Earned Leave", value: "Earned Leave" },
    { label: "Commute Leave", value: "Commute Leave" },
    { label: "CCL Leave", value: "CCL Leave" },
  ];

  const classOptions = [
    { label: "ALL", value: "ALL" },
    { label: "Class I", value: "Class I" },
    { label: "Class II", value: "Class II" },
    { label: "Class III", value: "Class III" },
  ];

  const postOptions = [
    { label: "Regular/Permanent", value: "Regular/Permanent" },
    { label: "Contract", value: "Contract" },
    { label: "Guest Faculty", value: "Guest Faculty" },
  ];

  const periodOptions = [
    { label: "Yearly", value: "Yearly" },
    { label: "Half Yearly", value: "Half Yearly" },
    { label: "Monthly", value: "Monthly" },
  ];

  const yesNoOptions = [
    { label: "Yes", value: "Yes" },
    { label: "No", value: "No" },
  ];

  const clearForm = () => {
    setYear(null);
    setLeaveType(null);
    setClassName(null);
    setTypeOfPost(null);
    setPeriod(null);
    setLeaveDayWise(null);
    setTotalLeaveYearWise(null);
    setLeaveCarryForward(null);
    setMaxLeaveAtOneTime(null);
    setEditId(null);
  };

  const handleEdit = (row: LeaveAllocationRow) => {
    setEditId(row.id);
    setYear(row.year);
    setLeaveType(row.leaveType);
    setClassName(row.className);
    setTypeOfPost(row.typeOfPost);
    setPeriod(row.period);
    setLeaveDayWise(row.leaveDayWise);
    setTotalLeaveYearWise(row.totalLeaveYearWise);
    setLeaveCarryForward(row.leaveCarryForward);
    setMaxLeaveAtOneTime(row.maxLeaveAtOneTime);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleDelete = (row: LeaveAllocationRow) => {
    setAllocationList((prev) => prev.filter((x) => x.id !== row.id));
    if (editId === row.id) clearForm();
  };

  const handleSave = () => {
    setShowConfirmModal(true);
  };

  const handleConfirmYes = () => {
    const payload: LeaveAllocationRow = {
      id: editId ?? (allocationList.length ? Math.max(...allocationList.map((x) => x.id)) + 1 : 1),
      year: year || "2025-26",
      leaveType: leaveType || "Casual Leave",
      className: className || "ALL",
      typeOfPost: typeOfPost || "Regular/Permanent",
      period: period || "Yearly",
      leaveDayWise: Number(leaveDayWise || 0),
      totalLeaveYearWise: Number(totalLeaveYearWise || 0),
      leaveCarryForward: leaveCarryForward || "No",
      maxLeaveAtOneTime: Number(maxLeaveAtOneTime || 0),
    };

    if (editId) {
      setAllocationList((prev) => prev.map((x) => (x.id === editId ? payload : x)));
    } else {
      setAllocationList((prev) => [payload, ...prev]);
    }

    setShowConfirmModal(false);
    setShowSuccessModal(true);
  };

  const columns = [
    { field: "year", header: "Year", sortable: true, style: { whiteSpace: "nowrap" } },
    { field: "leaveType", header: "Leave Type", sortable: true, style: { whiteSpace: "nowrap" } },
    { field: "className", header: "Class", sortable: true, style: { whiteSpace: "nowrap" } },
    { field: "typeOfPost", header: "Type Of Post", sortable: true, style: { whiteSpace: "nowrap" } },
    { field: "period", header: "Period", sortable: true, style: { whiteSpace: "nowrap" } },
    { field: "leaveDayWise", header: "Leave Day Wise", sortable: true, style: { whiteSpace: "nowrap" } },
    { field: "totalLeaveYearWise", header: "Total Leave Year Wise", sortable: true, style: { whiteSpace: "nowrap" } },
    { field: "leaveCarryForward", header: "Leave Carry Forward", sortable: true, style: { whiteSpace: "nowrap" } },
    { field: "maxLeaveAtOneTime", header: "Max Leave", sortable: true, style: { whiteSpace: "nowrap" } },
    {
      field: "action",
      header: "Action",
      style: { whiteSpace: "nowrap" },
      body: (row: LeaveAllocationRow) => (
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
    <PageLayout title="Leave Allocation">
     <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-bold text-blue-700">Leave Allocation</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Dropdown label="Select Academic Year" required options={yearOptions} value={year} onChange={(e) => setYear(e.value)} placeholder="Select" />
          <Dropdown label="Select Leave Type" required options={leaveTypeOptions} value={leaveType} onChange={(e) => setLeaveType(e.value)} placeholder="Select" />
          <Dropdown label="Select Class" required options={classOptions} value={className} onChange={(e) => setClassName(e.value)} placeholder="Select" />
          <Dropdown label="Select Type of Post" required options={postOptions} value={typeOfPost} onChange={(e) => setTypeOfPost(e.value)} placeholder="Select" />

          <Dropdown label="Select Period" required options={periodOptions} value={period} onChange={(e) => setPeriod(e.value)} placeholder="Select" />

          <NumberInput
            label="Enter Leave Days Period Wise"
            required
            value={leaveDayWise}
            onValueChange={(e) => setLeaveDayWise(e.value as number)}
            placeholder="Enter Leave Days"
            useGrouping={false}
          />

          <NumberInput
            label="Total Leave Days Year Wise"
            required
            value={totalLeaveYearWise}
            onValueChange={(e) => setTotalLeaveYearWise(e.value as number)}
            placeholder="Total Leave Days Year Wise"
            useGrouping={false}
          />

          <Dropdown label="Select Leave Carry Forward" required options={yesNoOptions} value={leaveCarryForward} onChange={(e) => setLeaveCarryForward(e.value)} placeholder="Select" />

          <NumberInput
            label="Maximum leave at one time"
            required
            value={maxLeaveAtOneTime}
            onValueChange={(e) => setMaxLeaveAtOneTime(e.value as number)}
            placeholder="Enter Max Leave at a Time"
            useGrouping={false}
          />
        </div>

        <div className="flex gap-4 mt-6">
          <Button label={editId ? "Update" : "Save"} className="bg-green-600 px-8" onClick={handleSave} type="button" />
          <Button label="Clear" severity="danger" className="px-8" onClick={clearForm} type="button" />
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm mt-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-gray-800">Leave Allocation Details</h2>
          <Button
            label="Export To Excel"
            icon="pi pi-download"
            className="bg-blue-600 border-none"
            type="button"
            onClick={() => {}}
          />
        </div>

        <Table columns={columns} data={allocationList} showPagination rowsPerPage={10} {...{ format: "leave_allocation" }} />
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

export default LeaveAllocation;
