import React, { useState } from "react";
import PageLayout from "@/components/PageLayout";
import Table from "@/ui/shared/Table";
import Input, { DateInput } from "@/ui/shared/Input";
import Dropdown from "@/ui/shared/Dropdown";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import { Checkbox } from "primereact/checkbox";

interface VTPRow {
  providerName: string;
  state: string;
  district: string;
  contactPerson: string;
  mobile: string;
  email: string;
  pincode: string;
  pan: string;
  gst: string;
  accountNo: string;
  ifsc: string;
  isActive: boolean;
}

const VTPRegistration: React.FC = () => {
  const [showAddPage, setShowAddPage] = useState(false);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [isActive, setIsActive] = useState(true);

  const vtpList: VTPRow[] = [
    {
      providerName: "Testing Training",
      state: "MP",
      district: "Bhopal",
      contactPerson: "Ashwini",
      mobile: "6575678567",
      email: "test@gmail.com",
      pincode: "765756",
      pan: "ABCDE1234F",
      gst: "23AAAAA0000A1Z5",
      accountNo: "1234567890",
      ifsc: "SBIN0003491",
      isActive: true,
    },
    {
      providerName: "Training Provider Center",
      state: "MP",
      district: "Indore",
      contactPerson: "Ayushi Verma",
      mobile: "8695489658",
      email: "ayushi@gmail.com",
      pincode: "452002",
      pan: "BCDEA1234G",
      gst: "23BBBBB1111B2Z6",
      accountNo: "9876543210",
      ifsc: "HDFC0005121",
      isActive: false,
    },
  ];

  const columns = [
    { field: "providerName", header: "Vocational Training Provider Name", sortable: true , style: { whiteSpace: "nowrap" }},
    { field: "state", header: "State", sortable: true },
    { field: "district", header: "District", sortable: true },
    { field: "contactPerson", header: "Name of Contact Person", style: { whiteSpace: "nowrap" } },
    { field: "mobile", header: "Mobile No." },
    { field: "email", header: "Email" },
    { field: "pincode", header: "Pincode" },
    { field: "pan", header: "PAN Card No.", style: { whiteSpace: "nowrap" } },
    { field: "gst", header: "GST No." },
    { field: "accountNo", header: "Account Number" },
    { field: "ifsc", header: "IFSC Code" },
    {
      field: "isActive",
      header: "Status",
      body: (row: VTPRow) => (
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
    setIsActive(true);
  };

  return (
    <PageLayout title="VTP Registration">
      {!showAddPage && (
        <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold text-gray-800">
              Vocational Training Provider Report Details
            </h2>
            <Button
              label="Add Registration"
              icon="pi pi-plus"
              className="bg-orange-500 border-none"
              onClick={() => setShowAddPage(true)}
            />
          </div>

          <Table
            columns={columns}
            data={vtpList}
            showPagination
            rowsPerPage={10}
            {...{ format: "vtp_registration" }}
          />
        </div>
      )}

      {showAddPage && (
        <div className="bg-white p-6 rounded-lg border border-orange-300 shadow-sm space-y-6">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-bold text-blue-700">
              VTP (Vocational Training Provider) Information
            </h2>
            <Button
              label="Back To List"
              className="bg-orange-500 border-none"
              onClick={() => setShowAddPage(false)}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Input label="Name of Vocational Training Provider" required placeholder="Enter VTP Name"/>
            <DateInput label="Year of Establishment" required placeholder="dd-mm-yyyy" />
            <Dropdown label="State" required options={[{ label: "Madhya Pradesh", value: "MP" }]} />
            <Dropdown label="District" required options={[{ label: "Bhopal", value: "Bhopal" }]} />
            <Input label="VTP Address" required placeholder="Enter Address"/>
            <Input label="Name of Contact Person" required placeholder="Enter Name"/>
            <Input label="Mobile No." required  placeholder="Enter Mobile Number"/>
            <Input label="Email ID" required  placeholder="Enter Email"/>
            <Input label="Pincode" required placeholder="enter Pincode"/>
            <Input label="PAN Card No." required placeholder="Enter Pan Number"/>
            <Input label="GST No." required placeholder="Enter GST Number"/>
            <DateInput label="Agreement Duration From Date" required placeholder="Enter Date"/>
            <DateInput label="Agreement Duration To Date" required placeholder="Enter Date"/>
          </div>

          <div className="border rounded-lg p-4">
            <h3 className="font-semibold mb-4">Vocational Training Provider Account Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <Input label="IFSC Code" required  placeholder="Enter IFSC no."/>
              <Input label="Bank Name" required placeholder="Enter Bank Name"/>
              <Input label="Bank Branch Address" required placeholder="Enter branch Address"/>
              <Input label="Account Number" required placeholder="Enter Account Number"/>
              <Input label="Verify Account Number" required placeholder="Enter Account Number"/>
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
          </div>

          <div className="border rounded-lg p-4">
            <h3 className="font-semibold mb-4">Upload VTP Documents</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  VTP Registration Certificate <span className="text-red-500">*</span>
                </label>
                <input
                  type="file"
                  className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 border border-gray-300 rounded-md p-1"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  PAN Card Copy <span className="text-red-500">*</span>
                </label>
                <input
                  type="file"
                  className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 border border-gray-300 rounded-md p-1"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  GST Copy <span className="text-red-500">*</span>
                </label>
                <input
                  type="file"
                  className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 border border-gray-300 rounded-md p-1"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Contract Letter with School Department <span className="text-red-500">*</span>
                </label>
                <input
                  type="file"
                  className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 border border-gray-300 rounded-md p-1"
                />
              </div>
            </div>
          </div>

          <div className="flex gap-4">
            <Button label="Save" className="bg-green-600 px-8" onClick={handleSave} />
            <Button label="Clear" severity="danger" className="px-8" onClick={handleClear} />
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

export default VTPRegistration;
