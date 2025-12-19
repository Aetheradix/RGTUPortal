import React, { useState } from "react";
import PageLayout from "../../../components/PageLayout";
import { Button } from "primereact/button";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Dropdown } from "primereact/dropdown";
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";
import { Calendar } from "primereact/calendar";
import { Checkbox } from "primereact/checkbox";

interface HSNData {
  srNo: number;
  typeOfSupply: string;
  hsnSacCode: string;
  applicableFrom: string;
  igst: string;
  cgst: string;
  sgst: string;
  hsnDescription: string;
  status: string;
}

const HSNSACMaster: React.FC = () => {
  const [step, setStep] = useState(1);
  const [isActive, setIsActive] = useState(true);
  const hsnList: HSNData[] = [
    {
      srNo: 1,
      typeOfSupply: "Services",
      hsnSacCode: "998346",
      applicableFrom: "01/04/2023",
      igst: "18.00",
      cgst: "9.00",
      sgst: "9.00",
      hsnDescription: "NA",
      status: "Active",
    },
    {
      srNo: 2,
      typeOfSupply: "Goods",
      hsnSacCode: "998824",
      applicableFrom: "05/05/2022",
      igst: "18.00",
      cgst: "9.00",
      sgst: "9.00",
      hsnDescription: "NA",
      status: "Active",
    },
    {
      srNo: 3,
      typeOfSupply: "Services",
      hsnSacCode: "997331",
      applicableFrom: "15/04/2024",
      igst: "18.00",
      cgst: "9.00",
      sgst: "9.00",
      hsnDescription: "NA",
      status: "Active",
    },
  ];

  const supplyOptions = [
    { label: "Goods", value: "Goods" },
    { label: "Services", value: "Services" },
  ];
  const texabilityOptions = [
    { label: "Texable", value: "Texable" },
    { label: "Exempt", value: "Exempt" },
    { label: "Nil Rated", value: "Nil Rated" },
  ];

  const igstOptions = [
    { label: "0", value: 0 },
    { label: "5", value: 5 },
    { label: "12", value: 12 },
    { label: "18", value: 18 },
    { label: "28", value: 28 },
  ];

  return (
    <PageLayout title="HSN/SAC Master">
      {step === 1 && (
        <div className="bg-white ">
          <div className="flex justify-between items-center mb-3">
            <h2 className="text-lg font-semibold text-gray-700">
              HSN/SAC Master List
            </h2>
            <Button
              label="Add HSN/SAC Master"
              icon="pi pi-plus"
              className="p-button-sm"
              style={{ backgroundColor: "#6366f1" }}
              onClick={() => setStep(2)}
            />
          </div>
          <div className="flex justify-between items-center mb-4 text-sm">
            <div className="flex items-center gap-2"></div>
            <div className="flex items-center gap-2">
              <span>Search:</span>
              <InputText className="p-inputtext-sm" />
            </div>
          </div>
          <DataTable
            value={hsnList}
            className="p-datatable-sm"
            paginator
            rows={10}
          >
            <Column
              field="srNo"
              header="Sr.No."
              style={{ borderBottom: "1px solid #e5e7eb" }}
              sortable
            />
            <Column
              field="typeOfSupply"
              header="Type of Supply"
              style={{ borderBottom: "1px solid #e5e7eb" }}
              sortable
            />
            <Column
              field="hsnSacCode"
              header="HSN/SAC Code"
              style={{ borderBottom: "1px solid #e5e7eb" }}
              sortable
            />
            <Column
              field="applicableFrom"
              header="Applicable From"
              style={{ borderBottom: "1px solid #e5e7eb" }}
              sortable
            />
            <Column
              field="igst"
              header="IGST(%)"
              style={{ borderBottom: "1px solid #e5e7eb" }}
              sortable
            />
            <Column
              field="cgst"
              header="CGST(%)"
              style={{ borderBottom: "1px solid #e5e7eb" }}
              sortable
            />
            <Column
              field="sgst"
              header="SGST(%)"
              style={{ borderBottom: "1px solid #e5e7eb" }}
              sortable
            />
            <Column
              field="hsnDescription"
              header="HSN Description"
              style={{ borderBottom: "1px solid #e5e7eb" }}
              sortable
            />
            <Column
              field="status"
              header="Status"
              style={{ borderBottom: "1px solid #e5e7eb" }}
              body={(data) => (
                <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded font-bold">
                  {data.status}
                </span>
              )}
            />
            <Column
              header="Action"
              style={{ borderBottom: "1px solid #e5e7eb" }}
              body={() => (
                <div className="flex gap-2">
                  <Button
                    icon="pi pi-pencil"
                    className="p-button-rounded p-button-text p-button-sm p-button-info"
                  />
                  <Button
                    icon="pi pi-trash"
                    className="p-button-rounded p-button-text p-button-danger p-button-sm"
                  />
                </div>
              )}
            />
          </DataTable>
        </div>
      )}
      {step === 2 && (
        <div className="space-y-6">
          <div className="bg-white">
            <div className="flex justify-between items-center mb-6 border-b pb-4">
              <h2 className="text-lg font-semibold text-gray-700">
                Add HSN/SAC Master
              </h2>
              <Button
                label="Go Back"
                icon="pi pi-arrow-left"
                className="p-button-sm"
                style={{ backgroundColor: "#6366f1" }}
                onClick={() => setStep(1)}
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="flex flex-col gap-1">
                <label className="text-xs font-bold">
                  Select Type of Supply<span className="text-red-500">*</span>
                </label>
                <Dropdown
                  options={supplyOptions}
                  placeholder="Select"
                  className="w-full"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-xs font-bold">
                  Enter HSN/SAC Code<span className="text-red-500">*</span>
                </label>
                <InputText placeholder="Enter HSN/SAC Code" />
              </div>
              <div className="flex flex-col gap-1 md:col-span-1">
                <label className="text-xs font-bold">
                  Enter Description<span className="text-red-500">*</span>
                </label>
                <InputTextarea
                  placeholder="Enter Description"
                  rows={1}
                  autoResize
                  className="w-full"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-xs font-bold">
                  Select Type of Taxability
                  <span className="text-red-500">*</span>
                </label>
                <Dropdown
                  placeholder="Select"
                  className="w-full"
                  options={texabilityOptions}
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-xs font-bold">
                  Select Integrated Tax IGST(%)
                  <span className="text-red-500">*</span>
                </label>
                <Dropdown
                  options={igstOptions}
                  placeholder="Select"
                  className="w-full"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-xs font-bold">
                  Central Tax (CGST%)<span className="text-red-500">*</span>
                </label>
                <Dropdown placeholder="Select" className="w-full" disabled />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-xs font-bold">
                  State Tax (SGST%)<span className="text-red-500">*</span>
                </label>
                <Dropdown placeholder="Select" className="w-full" disabled />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-xs font-bold">
                  Select HSN/SAC Effective Date
                  <span className="text-red-500">*</span>
                </label>
                <Calendar placeholder="dd/mm/yyyy" className="w-full" />
              </div>
            </div>
            <div className="flex flex-col gap-1 mt-4">
              <label className="text-xs font-bold">Status</label>
              <div className="flex items-center gap-2">
                <Checkbox
                  inputId="active"
                  onChange={(e) => setIsActive(e.checked || false)}
                  checked={isActive}
                />
                <label htmlFor="active" className="text-sm">
                  Active
                </label>
              </div>
            </div>
            <div className="flex justify-center gap-3 mt-10">
              <Button
                label="Save"
                className="px-10"
                style={{ backgroundColor: "#6366f1" }}
                onClick={() => setStep(1)}
              />
              <Button
                label="Clear"
                className="px-10 p-button-danger p-button-outlined"
                style={{
                  color: "#ef4444",
                  borderColor: "#fee2e2",
                  backgroundColor: "#fef2f2",
                }}
              />
            </div>
          </div>
        </div>
      )}
    </PageLayout>
  );
};

export default HSNSACMaster;
