import React, { useState } from "react";
import PageLayout from "@/components/PageLayout";
import Table from "@/ui/shared/Table";
import Input from "@/ui/shared/Input";
import Dropdown from "@/ui/shared/Dropdown";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import { Checkbox } from "primereact/checkbox";

interface DocumentRow {
  districtName: string;
  documentUrl: string;
  uploadDate: string;
  isActive: boolean;
}

const VocationalCertificateDistributionGoogleLink: React.FC = () => {
  const [showList, setShowList] = useState(false);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [isActive, setIsActive] = useState(true);

  const data: DocumentRow[] = [
    {
      districtName: "Sheopur",
      documentUrl: "https://docs.google.com/document/d/1",
      uploadDate: "22/07/2025",
      isActive: true,
    },
    {
      districtName: "Bhopal",
      documentUrl: "https://sedtest.server.co.in/",
      uploadDate: "07/07/2025",
      isActive: true,
    },
  ];

  const noWrap = { whiteSpace: "nowrap" };

  const columns = [
    { field: "districtName", header: "District Name", sortable: true, style: noWrap },
    {
      field: "documentUrl",
      header: "Document URL",
      style: noWrap,
      body: (row: DocumentRow) => (
        <a
          href={row.documentUrl}
          target="_blank"
          rel="noreferrer"
          className="text-blue-600 underline"
        >
          {row.documentUrl}
        </a>
      ),
    },
    { field: "uploadDate", header: "URL Upload Date", style: noWrap },
    {
      field: "isActive",
      header: "Status",
      style: noWrap,
      body: (row: DocumentRow) => (
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
      style: noWrap,
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
    <PageLayout title="Vocational Certificate Distribution (DPI) Google Link">
      {!showList && (
        <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm space-y-6">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-bold text-blue-700">
              Vocational Certificate Distribution (DPI) Google Link
            </h2>
            <Button
              label="Go To List"
              className="bg-orange-500 border-none"
              onClick={() => setShowList(true)}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-end">
            <Dropdown
              label="District Name"
              required
              options={[{ label: "All", value: "All" }]}
              placeholder="Select"
            />

            <Input
              label="Upload Google Drive Link"
              required
              placeholder="Upload Google Certificate Link"
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

          <div className="flex gap-4">
            <Button label="Save" className="bg-green-600 px-8" onClick={handleSave} />
            <Button label="Clear" severity="danger" className="px-8" />
          </div>
        </div>
      )}

      {showList && (
        <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-bold text-gray-700">Document URL</h3>
            <Button
              label="Add New"
              className="bg-orange-500 border-none"
              onClick={() => setShowList(false)}
            />
          </div>

          <Table
            columns={columns}
            data={data}
            showPagination
            rowsPerPage={10}
            {...{ format: "document_url" }}
          />
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
                setShowList(true);
              }}
            />
          </div>
        </div>
      </Dialog>
    </PageLayout>
  );
};

export default VocationalCertificateDistributionGoogleLink;
