import React, { useState } from "react";
import PageLayout from "@/components/PageLayout";
import Table from "@/ui/shared/Table";
import Dropdown from "@/ui/shared/Dropdown";
import { NumberInput } from "@/ui/shared/Input";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";

interface DeptLeaveApprovalRow {
  id: number;
  departmentName: string;
  oisType: string;
  leaveType: string;
  firstApprover: string;
  secondApprover: string;
  thirdApprover: string;
  fourthApprover: string;
}

const DepartmentWiseLeaveApproval: React.FC = () => {
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const [editId, setEditId] = useState<number | null>(null);

  const [departmentName, setDepartmentName] = useState<string | null>(null);
  const [oisType, setOisType] = useState<string | null>(null);
  const [leaveType, setLeaveType] = useState<string | null>(null);

  const [firstApprover, setFirstApprover] = useState<string | null>(null);
  const [secondApprover, setSecondApprover] = useState<string | null>(null);
  const [thirdApprover, setThirdApprover] = useState<string | null>(null);
  const [fourthApprover, setFourthApprover] = useState<string | null>(null);

  const [firstLimit, setFirstLimit] = useState<number | null>(null);
  const [secondLimit, setSecondLimit] = useState<number | null>(null);
  const [thirdLimit, setThirdLimit] = useState<number | null>(null);
  const [fourthLimit, setFourthLimit] = useState<number | null>(null);

  const [approvalList, setApprovalList] = useState<DeptLeaveApprovalRow[]>([
    {
      id: 1,
      departmentName: "Department of Education",
      oisType: "Office",
      leaveType: "Earned Leave",
      firstApprover: "Up Shikshak : Limit (20.00)",
      secondApprover: "Asst Grade-1 : Limit (60.00)",
      thirdApprover: "Prathmik Shikshak : Limit (344.00)",
      fourthApprover: "Asst Grade-1 : Limit (56.00)",
    },
    {
      id: 2,
      departmentName: "Department of Education",
      oisType: "Office",
      leaveType: "CCL Leave",
      firstApprover: "Principal HS : Limit (60.00)",
      secondApprover: "Cluster Academic Coordinator : Limit (90.00)",
      thirdApprover: "District Education Officer(DEO) : Limit (120.00)",
      fourthApprover: "Principal (PGBT) : Limit (180.00)",
    },
    {
      id: 3,
      departmentName: "Department of Education",
      oisType: "School",
      leaveType: "Casual Leave",
      firstApprover: "Principal HS : Limit (4.00)",
      secondApprover: "Principal HSS : Limit (8.00)",
      thirdApprover: "NA : Limit (0.00)",
      fourthApprover: "NA : Limit (0.00)",
    },
  ]);

  const departmentOptions = [
    { label: "Department of Education", value: "Department of Education" },
    { label: "Department of Health", value: "Department of Health" },
  ];

  const oisTypeOptions = [
    { label: "Office", value: "Office" },
    { label: "School", value: "School" },
  ];

  const leaveTypeOptions = [
    { label: "Earned Leave", value: "Earned Leave" },
    { label: "CCL Leave", value: "CCL Leave" },
    { label: "Casual Leave", value: "Casual Leave" },
    { label: "Medical Leave", value: "Medical Leave" },
  ];

  const approverOptions = [
    { label: "Please Select Designation", value: null },
    { label: "Up Shikshak", value: "Up Shikshak" },
    { label: "Asst Grade-1", value: "Asst Grade-1" },
    { label: "Prathmik Shikshak", value: "Prathmik Shikshak" },
    { label: "Principal HS", value: "Principal HS" },
    { label: "Principal HSS", value: "Principal HSS" },
    { label: "Cluster Academic Coordinator", value: "Cluster Academic Coordinator" },
    { label: "District Education Officer(DEO)", value: "District Education Officer(DEO)" },
    { label: "Principal (PGBT)", value: "Principal (PGBT)" },
    { label: "NA", value: "NA" },
  ];

  const buildApproverText = (name: string | null, limit: number | null) => {
    const nm = name || "NA";
    const lm = typeof limit === "number" ? limit.toFixed(2) : "0.00";
    return `${nm} : Limit (${lm})`;
  };

  const clearForm = () => {
    setDepartmentName(null);
    setOisType(null);
    setLeaveType(null);

    setFirstApprover(null);
    setSecondApprover(null);
    setThirdApprover(null);
    setFourthApprover(null);

    setFirstLimit(null);
    setSecondLimit(null);
    setThirdLimit(null);
    setFourthLimit(null);

    setEditId(null);
  };

  const handleSave = () => setShowConfirmModal(true);

  const handleConfirmYes = () => {
    const payload: DeptLeaveApprovalRow = {
      id: editId ?? (approvalList.length ? Math.max(...approvalList.map((x) => x.id)) + 1 : 1),
      departmentName: departmentName || "Department of Education",
      oisType: oisType || "Office",
      leaveType: leaveType || "Earned Leave",
      firstApprover: buildApproverText(firstApprover, firstLimit),
      secondApprover: buildApproverText(secondApprover, secondLimit),
      thirdApprover: buildApproverText(thirdApprover, thirdLimit),
      fourthApprover: buildApproverText(fourthApprover, fourthLimit),
    };

    if (editId) {
      setApprovalList((prev) => prev.map((x) => (x.id === editId ? payload : x)));
    } else {
      setApprovalList((prev) => [payload, ...prev]);
    }

    setShowConfirmModal(false);
    setShowSuccessModal(true);
  };

  const handleEdit = (row: DeptLeaveApprovalRow) => {
    setEditId(row.id);
    setDepartmentName(row.departmentName);
    setOisType(row.oisType);
    setLeaveType(row.leaveType);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleDelete = (row: DeptLeaveApprovalRow) => {
    setApprovalList((prev) => prev.filter((x) => x.id !== row.id));
    if (editId === row.id) clearForm();
  };

  const columns = [
    { field: "departmentName", header: "Department", sortable: true, style: { whiteSpace: "nowrap" } },
    { field: "oisType", header: "OIS Type", sortable: true, style: { whiteSpace: "nowrap" } },
    { field: "leaveType", header: "Leave Type", sortable: true, style: { whiteSpace: "nowrap" } },
    { field: "firstApprover", header: "First Approver", style: { whiteSpace: "nowrap" } },
    { field: "secondApprover", header: "Second Approver", style: { whiteSpace: "nowrap" } },
    { field: "thirdApprover", header: "Third Approver", style: { whiteSpace: "nowrap" } },
    { field: "fourthApprover", header: "Fourth Approver", style: { whiteSpace: "nowrap" } },
    {
      field: "action",
      header: "Action",
      style: { whiteSpace: "nowrap" },
      body: (row: DeptLeaveApprovalRow) => (
        <div className="flex items-center gap-2">
          <Button icon="pi pi-pencil" className="p-button-sm bg-orange-500 border-none" type="button" onClick={() => handleEdit(row)} />
          <Button icon="pi pi-trash" className="p-button-sm bg-red-500 border-none" type="button" onClick={() => handleDelete(row)} />
        </div>
      ),
    },
  ];

  return (
    <PageLayout title="Department Wise Leave Approval">
      <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-bold text-blue-700">Department Wise Leave Approval</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Dropdown label="Select Department Name" required options={departmentOptions} value={departmentName} onChange={(e) => setDepartmentName(e.value)} placeholder="Select" />
          <Dropdown label="Select OIS Type" required options={oisTypeOptions} value={oisType} onChange={(e) => setOisType(e.value)} placeholder="Select" />
          <Dropdown label="Select Leave Type" required options={leaveTypeOptions} value={leaveType} onChange={(e) => setLeaveType(e.value)} placeholder="Select" />

          <Dropdown label="Select First Approver" required options={approverOptions} value={firstApprover} onChange={(e) => setFirstApprover(e.value)} placeholder="Please Select Designation" />
          <NumberInput label="Enter First Approver Day Limit" required value={firstLimit} onValueChange={(e) => setFirstLimit(e.value as number)} placeholder="Enter Leave Limit" useGrouping={false} />

          <Dropdown label="Select Second Approver" required options={approverOptions} value={secondApprover} onChange={(e) => setSecondApprover(e.value)} placeholder="Please Select Designation" />
          <NumberInput label="Enter Second Approver Limit" required value={secondLimit} onValueChange={(e) => setSecondLimit(e.value as number)} placeholder="Enter Leave Limit" useGrouping={false} />

          <Dropdown label="Select Third Approver" required options={approverOptions} value={thirdApprover} onChange={(e) => setThirdApprover(e.value)} placeholder="Please Select Designation" />
          <NumberInput label="Enter Third Approver Limit" required value={thirdLimit} onValueChange={(e) => setThirdLimit(e.value as number)} placeholder="Enter Leave Limit" useGrouping={false} />

          <Dropdown label="Select Fourth Approver" required options={approverOptions} value={fourthApprover} onChange={(e) => setFourthApprover(e.value)} placeholder="Please Select Designation" />
          <NumberInput label="Enter Fourth Approver Limit" required value={fourthLimit} onValueChange={(e) => setFourthLimit(e.value as number)} placeholder="Enter Leave Limit" useGrouping={false} />
        </div>

        <div className="flex gap-4 mt-6">
          <Button label={editId ? "Update" : "Save"} className="bg-green-600 px-8" onClick={handleSave} type="button" />
          <Button label="Clear" severity="danger" className="px-8" onClick={clearForm} type="button" />
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm mt-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-gray-800">Department Wise Leave Approval Details</h2>
          <Button label="Export To Excel" icon="pi pi-download" className="bg-blue-600 border-none" type="button" onClick={() => {}} />
        </div>

        <Table columns={columns} data={approvalList} showPagination rowsPerPage={10} {...{ format: "department_wise_leave_approval" }} />
      </div>

      <Dialog header="Confirmation" visible={showConfirmModal} style={{ width: "400px" }} onHide={() => setShowConfirmModal(false)} draggable={false} closable={false}>
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

      <Dialog header="Success!" visible={showSuccessModal} style={{ width: "400px" }} onHide={() => setShowSuccessModal(false)} draggable={false}>
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

export default DepartmentWiseLeaveApproval;
