import React, { useState } from "react";
import PageLayout from "@/components/PageLayout";
import Table from "@/ui/shared/Table";
import Input from "@/ui/shared/Input";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import { Checkbox } from "primereact/checkbox";

interface VocationalSchemeRow {
  schemeEnglish: string;
  schemeHindi: string;
  isActive: boolean;
}

const VocationalSchemeMaster: React.FC = () => {
  const [showAddPage, setShowAddPage] = useState(false);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const [schemeEnglish, setSchemeEnglish] = useState("");
  const [schemeHindi, setSchemeHindi] = useState("");
  const [isActive, setIsActive] = useState(true);

  const schemeList: VocationalSchemeRow[] = [
    {
      schemeEnglish: "Advanced Vocational Training Scheme",
      schemeHindi: "उन्नत व्यावसायिक प्रशिक्षण योजना",
      isActive: true,
    },
    {
      schemeEnglish: "Jan Shikshan Sansthan",
      schemeHindi: "जन शिक्षण संस्थान",
      isActive: false,
    },
    {
      schemeEnglish: "Pradhan Mantri Kaushal Vikas Yojana",
      schemeHindi: "प्रधानमंत्री कौशल विकास योजना",
      isActive: true,
    },
  ];

  const columns = [
    {
      field: "schemeEnglish",
      header: "Vocational Scheme Name (In English)",
      sortable: true,
    },
    {
      field: "schemeHindi",
      header: "व्यावसायिक योजना का नाम (हिंदी में)",
      sortable: true,
    },
    {
      field: "isActive",
      header: "Status",
      body: (row: VocationalSchemeRow) => (
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

  const handleClear = () => {
    setSchemeEnglish("");
    setSchemeHindi("");
    setIsActive(true);
  };

  return (
    <PageLayout title="Vocational Scheme Master">
      {!showAddPage && (
        <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold text-gray-800">
              Vocational Scheme Details
            </h2>

            <div className="flex gap-2">
              <Button
                label="Export To Excel"
                icon="pi pi-file-excel"
                className="bg-blue-600 border-none"
              />
              <Button
                label="Add New Vocational Scheme"
                icon="pi pi-plus"
                className="bg-orange-500 border-none"
                onClick={() => setShowAddPage(true)}
              />
            </div>
          </div>

          <Table
            columns={columns}
            data={schemeList}
            showPagination
            rowsPerPage={10}
            {...{ format: "vocational_scheme_master" }}
          />
        </div>
      )}

      {showAddPage && (
        <div className="bg-white p-6 rounded-lg border border-orange-300 shadow-sm">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold text-blue-700">
              Add Vocational Scheme
            </h2>

            <Button
              label="Back To List"
              className="bg-orange-500 border-none"
              onClick={() => setShowAddPage(false)}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Input
              label="Vocational Scheme Name (In English)"
              required
              value={schemeEnglish}
              onChange={(e) => setSchemeEnglish(e.target.value)}
              placeholder="Vocational Scheme Name (In English)"
            />

            <Input
              label="व्यावसायिक योजना का नाम दर्ज करें (हिंदी में)"
              required
              value={schemeHindi}
              onChange={(e) => setSchemeHindi(e.target.value)}
              placeholder="व्यावसायिक योजना का नाम (हिंदी)"
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
              label="Save"
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
            <Button
              label="Yes"
              className="bg-blue-600 px-6"
              onClick={handleConfirmYes}
            />
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

export default VocationalSchemeMaster;
