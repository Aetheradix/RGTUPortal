/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useRef } from "react";
import PageLayout from "../../../components/PageLayout";
import { Button } from "primereact/button";
import { Calendar } from "primereact/calendar";
import { Toast } from "primereact/toast";
import { ConfirmDialog, confirmDialog } from "primereact/confirmdialog";
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";
import { RadioButton } from "primereact/radiobutton";
import Dropdown from "@/ui/shared/Dropdown";
import Table from "@/ui/shared/Table";
import {
  academicYearOptions,
  blockOptions,
  districtOptions,
  divisionOptions,
  propertyOwnerOptions,
  propertySubTypeOptions,
  propertyTypeOptions,
  stateOptions,
  aprMockData,
} from "./data";
import { aprColumns } from "./table";

const EmployeeAPRForm: React.FC = () => {
  const [aprType, setAprType] = useState<string>("Applicable");
  const [propertyList, setPropertyList] = useState<any[]>([]);

  const [formData, setFormData] = useState<any>({
    academicYear: "2025-26",
    netSalary: "",
    incrementDate: null,
    state: "Madhya Pradesh-(23)",
    division: null,
    district: null,
    block: null,
    propertyType: null,
    propertySubType: null,
    purchaseDate: null,
    propertyValue: "",
    propertyOwner: null,
    ownerName: "",
    sellerName: "",
    sellerAddress: "",
    isRental: "No",
  });

  const toast = useRef<Toast>(null);

  const handleInputChange = (field: string, value: any) => {
    setFormData((prev: any) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleAdd = () => {
    setPropertyList([
      ...propertyList,
      { ...aprMockData[0], srNo: propertyList.length + 1 },
    ]);
    toast.current?.show({
      severity: "success",
      summary: "Added",
      detail: "Property details added to the list.",
      life: 2000,
    });
  };

  const handleClear = () => {
    confirmDialog({
      message: "Are you sure you want to clear the form?",
      header: "Confirmation",
      icon: "pi pi-exclamation-triangle",
      acceptClassName: "p-button-danger",
      accept: () => {
        setFormData({
          academicYear: "2025-26",
          state: "Madhya Pradesh-(23)",
          isRental: "No",
          netSalary: "",
          ownerName: "",
          sellerName: "",
          sellerAddress: "",
        });
        setPropertyList([]);
        toast.current?.show({
          severity: "info",
          summary: "Cleared",
          detail: "Form has been reset.",
          life: 2000,
        });
      },
    });
  };

  const handleFinalSave = () => {
    confirmDialog({
      message: "Do you want to submit the APR details?",
      header: "Confirm Submission",
      icon: "pi pi-check-circle",
      accept: () => {
        toast.current?.show({
          severity: "success",
          summary: "Submitted",
          detail: "APR Form submitted successfully.",
          life: 3000,
        });
      },
    });
  };

  return (
    <PageLayout title="Employee APR Form">
      <Toast ref={toast} />
      <ConfirmDialog />

      <div className="bg-white p-6 rounded shadow-sm border border-gray-100 mb-6">
        <div className="flex gap-8 mb-8 border-b border-gray-50 pb-4">
          <div className="flex items-center">
            <RadioButton
              value="Applicable"
              onChange={(e) => setAprType(e.value)}
              checked={aprType === "Applicable"}
            />
            <label className="ml-2 text-[14px] font-bold text-gray-700">
              APR Applicable
            </label>
          </div>
          <div className="flex items-center">
            <RadioButton
              value="Nil"
              onChange={(e) => setAprType(e.value)}
              checked={aprType === "Nil"}
            />
            <label className="ml-2 text-[14px] font-bold text-gray-700">
              Nil APR
            </label>
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-indigo-600 font-bold text-[14px] mb-6 flex items-center gap-2">
            <span className="w-1 h-4 bg-indigo-500 rounded-full"></span>
            Employee Details
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-x-10 gap-y-6">
            <div className="flex flex-col gap-1">
              <label className="text-[13px] font-bold text-gray-600">
                Academic Year*
              </label>
              <Dropdown
                options={academicYearOptions}
                value={formData.academicYear}
                onChange={(e) => handleInputChange("academicYear", e.value)}
                placeholder="Select"
                className="w-full border-gray-300"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-[13px] font-bold text-gray-600">
                Employee Name*
              </label>
              <InputText
                value="Nandlal Nagle"
                disabled
                className="bg-gray-50 border-gray-300"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-[13px] font-bold text-gray-600">
                Designation*
              </label>
              <InputText
                value="Ucch Madhyamik Shikshak"
                disabled
                className="bg-gray-50 border-gray-300"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-[13px] font-bold text-gray-600">
                Employee Code*
              </label>
              <InputText
                value="AE7335"
                disabled
                className="bg-gray-50 border-gray-300"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-[13px] font-bold text-gray-600">
                Net Receivable Salary*
              </label>
              <InputText
                value={formData.netSalary}
                onChange={(e) => handleInputChange("netSalary", e.target.value)}
                placeholder="0.00"
                className="border-gray-300"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-[13px] font-bold text-gray-600">
                Increment Date*
              </label>
              <Calendar
                value={formData.incrementDate}
                onChange={(e) => handleInputChange("incrementDate", e.value)}
                dateFormat="dd-mm-yy"
                showIcon
                placeholder="dd-mm-yyyy"
                className="w-full"
              />
            </div>
          </div>
        </div>

        {aprType === "Applicable" && (
          <div className="animate-fade-in border-t border-gray-50 pt-8">
            <h3 className="text-indigo-600 font-bold text-[14px] mb-6 flex items-center gap-2">
              <span className="w-1 h-4 bg-indigo-500 rounded-full"></span>{" "}
              Property Details
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-x-10 gap-y-6">
              <div className="flex flex-col gap-1">
                <label className="text-[13px] font-bold text-gray-600">
                  State*
                </label>
                <Dropdown
                  options={stateOptions}
                  value={formData.state}
                  onChange={(e) => handleInputChange("state", e.value)}
                  className="border-gray-300"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-[13px] font-bold text-gray-600">
                  Division*
                </label>
                <Dropdown
                  options={divisionOptions}
                  value={formData.division}
                  onChange={(e) => handleInputChange("division", e.value)}
                  placeholder="Select"
                  className="border-gray-300"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-[13px] font-bold text-gray-600">
                  District*
                </label>
                <Dropdown
                  options={districtOptions}
                  value={formData.district}
                  onChange={(e) => handleInputChange("district", e.value)}
                  placeholder="Select"
                  className="border-gray-300"
                />
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-[13px] font-bold text-gray-600">
                  Block*
                </label>
                <Dropdown
                  options={blockOptions}
                  value={formData.block}
                  placeholder="Select"
                  className="border-gray-300"
                  onChange={(e) => handleInputChange("block", e.value)}
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-[13px] font-bold text-gray-600">
                  Property Type*
                </label>
                <Dropdown
                  options={propertyTypeOptions}
                  value={formData.propertyType}
                  onChange={(e) => handleInputChange("propertyType", e.value)}
                  placeholder="Select"
                  className="border-gray-300"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-[13px] font-bold text-gray-600">
                  Property Sub Type*
                </label>
                <Dropdown
                  options={propertySubTypeOptions}
                  value={formData.propertySubType}
                  onChange={(e) =>
                    handleInputChange("propertySubType", e.value)
                  }
                  placeholder="Select"
                  className="border-gray-300"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-[13px] font-bold text-gray-600">
                  Purchase Date*
                </label>
                <Calendar
                  value={formData.purchaseDate}
                  onChange={(e) => handleInputChange("purchaseDate", e.value)}
                  dateFormat="dd-mm-yy"
                  showIcon
                  placeholder="dd-mm-yyyy"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-[13px] font-bold text-gray-600">
                  Property Value*
                </label>
                <InputText
                  value={formData.propertyValue}
                  onChange={(e) =>
                    handleInputChange("propertyValue", e.target.value)
                  }
                  placeholder="Enter Value"
                  className="border-gray-300"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-[13px] font-bold text-gray-600">
                  Property Owner*
                </label>
                <Dropdown
                  options={propertyOwnerOptions}
                  value={formData.propertyOwner}
                  onChange={(e) => handleInputChange("propertyOwner", e.value)}
                  placeholder="Select"
                  className="border-gray-300"
                />
              </div>
              <div className="flex flex-col gap-1 md:col-span-2">
                <label className="text-[13px] font-bold text-gray-600">
                  Owner Name*
                </label>
                <InputTextarea
                  rows={1}
                  value={formData.ownerName}
                  onChange={(e) =>
                    handleInputChange("ownerName", e.target.value)
                  }
                  placeholder="Enter Name"
                  className="border-gray-300"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-[13px] font-bold text-gray-600">
                  Is Rental?
                </label>
                <div className="flex gap-4 mt-2">
                  <div className="flex items-center">
                    <RadioButton
                      value="Yes"
                      checked={formData.isRental === "Yes"}
                      onChange={(e) => handleInputChange("isRental", e.value)}
                    />
                    <span className="ml-2 text-sm">Yes</span>
                  </div>
                  <div className="flex items-center">
                    <RadioButton
                      value="No"
                      checked={formData.isRental === "No"}
                      onChange={(e) => handleInputChange("isRental", e.value)}
                    />
                    <span className="ml-2 text-sm">No</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-5 rounded-md mt-8 grid grid-cols-1 md:grid-cols-2 gap-8 border border-gray-100">
              <div className="flex flex-col gap-1">
                <label className="text-[13px] font-bold text-gray-600">
                  Seller Name
                </label>
                <InputText
                  value={formData.sellerName}
                  onChange={(e) =>
                    handleInputChange("sellerName", e.target.value)
                  }
                  placeholder="Enter Seller Name"
                  className="border-gray-300"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-[13px] font-bold text-gray-600">
                  Seller Address
                </label>
                <InputTextarea
                  rows={1}
                  value={formData.sellerAddress}
                  onChange={(e) =>
                    handleInputChange("sellerAddress", e.target.value)
                  }
                  placeholder="Enter Seller Address"
                  className="border-gray-300"
                />
              </div>
            </div>

            <div className="flex gap-2 mt-8">
              <Button
                label="Add"
                icon="pi pi-plus"
                className="bg-indigo-500 border-none px-8 py-2"
                onClick={handleAdd}
              />
              <Button
                label="Clear"
                icon="pi pi-refresh"
                className="p-button-outlined p-button-danger px-8 py-2"
                onClick={handleClear}
              />
            </div>
          </div>
        )}

        {aprType === "Nil" && (
          <div className="flex gap-2 mt-8 border-t border-gray-50 pt-8">
            <Button
              label="Save"
              icon="pi pi-check"
              className="bg-emerald-500 border-none px-10 py-2.5"
              onClick={handleFinalSave}
            />
            <Button
              label="Clear"
              icon="pi pi-refresh"
              className="p-button-outlined p-button-danger px-10 py-2.5"
              onClick={handleClear}
            />
          </div>
        )}
      </div>

      {aprType === "Applicable" && propertyList.length > 0 && (
        <div className="bg-white p-6 rounded shadow-sm border border-gray-100 animate-fade-in">
          <Table
            title="Employee Annual Property Detail List"
            data={propertyList}
            columns={aprColumns}
            showPagination={true}
            rowsPerPage={5}
            scrollable={true}
            tableStyle={{ minWidth: "220rem" }}
            className="p-datatable-sm custom-table text-xs"
          />
          <div className="flex justify-center mt-10">
            <Button
              label="Submit Final Report"
              icon="pi pi-send"
              className="bg-[#8cc63f] border-none px-12 py-3 rounded-md text-white font-bold"
              onClick={handleFinalSave}
            />
          </div>
        </div>
      )}
    </PageLayout>
  );
};

export default EmployeeAPRForm;
