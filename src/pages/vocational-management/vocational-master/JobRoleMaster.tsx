import React, { useState } from "react";
import PageLayout from "@/components/PageLayout";
import Table from "@/ui/shared/Table";
import Dropdown from "@/ui/shared/Dropdown";
import Input from "@/ui/shared/Input";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import { Checkbox } from "primereact/checkbox";

interface JobRoleRow {
  vocationalTrade: string;
  jobRoleEnglish: string;
  jobRoleHindi: string;
  isActive: boolean;
}

const JobRoleMaster: React.FC = () => {
  const [showAddPage, setShowAddPage] = useState(false);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const [vocationalTrade, setVocationalTrade] = useState<string | null>(null);
  const [jobRoleEnglish, setJobRoleEnglish] = useState("");
  const [jobRoleHindi, setJobRoleHindi] = useState("");
  const [isActive, setIsActive] = useState(true);

  const tradeOptions = [
    { label: "Solar Energy", value: "Solar Energy" },
    { label: "Information Technology", value: "Information Technology" },
    { label: "Retail", value: "Retail" },
  ];

  const jobRoleList: JobRoleRow[] = [
    {
      vocationalTrade: "Solar Energy",
      jobRoleEnglish: "Solar Installer",
      jobRoleHindi: "सोलर इंस्टॉलर",
      isActive: true,
    },
    {
      vocationalTrade: "Information Technology",
      jobRoleEnglish: "Developer",
      jobRoleHindi: "डेवलपर",
      isActive: true,
    },
    {
      vocationalTrade: "Retail",
      jobRoleEnglish: "Retail Sales Associate",
      jobRoleHindi: "खुदरा बिक्री सहायक",
      isActive: false,
    },
  ];

  const columns = [
    { field: "vocationalTrade", header: "Vocational Trade Name", sortable: true },
    { field: "jobRoleEnglish", header: "Job Role Name (In English)", sortable: true },
    { field: "jobRoleHindi", header: "Job Role Name (In Hindi)", sortable: true },
    {
      field: "isActive",
      header: "Status",
      body: (row: JobRoleRow) => (
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

  const handleCancelAction = () => {
    setShowConfirmModal(false);
  };

  const handleClear = () => {
    setVocationalTrade(null);
    setJobRoleEnglish("");
    setJobRoleHindi("");
    setIsActive(true);
  };

  return (
    <PageLayout title="Job Role Master">
      {!showAddPage && (
        <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold text-gray-800">Job Role Details</h2>

            <div className="flex gap-2">
              <Button
                label="Export To Excel"
                icon="pi pi-file-excel"
                className="bg-indigo-600 border-none"
              />
              <Button
                label="Add Job Role"
                icon="pi pi-plus"
                className="bg-orange-500 border-none"
                onClick={() => setShowAddPage(true)}
              />
            </div>
          </div>

          <Table
            columns={columns}
            data={jobRoleList}
            showPagination
            rowsPerPage={10}
            {...{ format: "job_role_master" }}
          />
        </div>
      )}

      {showAddPage && (
        <div className="bg-white p-6 rounded-lg border border-orange-300 shadow-sm">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold text-blue-700">Add Job Role</h2>

            <Button
              label="Back To List"
              className="bg-orange-500 border-none"
              onClick={() => setShowAddPage(false)}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Dropdown
              label="Vocational Trade Type"
              required
              options={tradeOptions}
              value={vocationalTrade}
              onChange={(e) => setVocationalTrade(e.value)}
              placeholder="Select"
            />

            <Input
              label="Job Role Name (In English)"
              required
              value={jobRoleEnglish}
              onChange={(e) => setJobRoleEnglish(e.target.value)}
              placeholder="Job Role Name (In English)"
            />

            <Input
              label="जॉब रोल का नाम दर्ज करें (हिंदी में)"
              required
              value={jobRoleHindi}
              onChange={(e) => setJobRoleHindi(e.target.value)}
              placeholder="जॉब रोल का नाम (हिंदी)"
            />

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
          </div>

          <div className="flex gap-4 mt-8">
            <Button
              label="SAVE"
              className="bg-green-600 px-8"
              onClick={handleSave}
            />
            <Button
              label="Clear"
              severity="danger"
              className="px-8"
              onClick={handleClear}
            />
          </div>

          <p className="text-red-500 text-sm mt-4">
            Note: All Asterisk (*) Marked Fields Are Mandatory
          </p>
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
            <Button label="Cancel" outlined severity="danger" className="px-6" onClick={handleCancelAction} />
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

export default JobRoleMaster;
