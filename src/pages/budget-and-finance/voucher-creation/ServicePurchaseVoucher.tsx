import React, { useState, useRef } from "react";
import PageLayout from "../../../components/PageLayout";
import { Button } from "primereact/button";
import { Dropdown } from "primereact/dropdown";
import { InputText } from "primereact/inputtext";
import { Calendar } from "primereact/calendar";
import { InputTextarea } from "primereact/inputtextarea";
import { Toast } from "primereact/toast";

const ServicePurchaseVoucher: React.FC = () => {
  const [step, setStep] = useState(1);
  const [registrationType, setRegistrationType] = useState<string | null>(null);
  const [state, setState] = useState<string | null>(null);
  const [ledger, setLedger] = useState<string | null>(null);
  const toast = useRef<Toast>(null);

  // States for the enterable tax section
  const [taxData, setTaxData] = useState({
    cgst: "0",
    sgst: "0",
    igst: "0",
    roundOff: "0",
    grandTotal: "0",
  });

  const registrationOptions = [
    { label: "Regular", value: "Regular" },
    { label: "Composition", value: "Composition" },
    { label: "Unregistered", value: "Unregistered" },
  ];

  const stateOptions = [
    { label: "Madhya Pradesh", value: "MP" },
    { label: "Delhi", value: "DL" },
  ];

  const ledgerHeadOptions = [
    { label: "Fee Collection (10.01.01)", value: "FC" },
    { label: "Salary Expenses (10.02.01)", value: "SE" },
  ];

  const handleTaxChange = (field: string, value: string) => {
    setTaxData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSearch = () => {
    setStep(2);
    toast.current?.show({
      severity: "success",
      summary: "Success",
      detail: "Voucher details found",
      life: 3000,
    });
  };

  const handleAdd = () => {
    setStep(3);
    toast.current?.show({
      severity: "success",
      summary: "Added",
      detail: "Ledger entry added to voucher",
      life: 3000,
    });
  };

  const handleAccept = () => {
    setStep(1);
    toast.current?.show({
      severity: "success",
      summary: "Voucher Accepted",
      detail: "Service purchase voucher processed successfully",
      life: 3000,
    });
  };

  const handleClear = () => {
    setRegistrationType(null);
    setState(null);
    setLedger(null);
    toast.current?.show({
      severity: "warn",
      summary: "Cleared",
      detail: "Form data reset",
      life: 2000,
    });
  };

  return (
    <PageLayout title="Service Purchase Voucher">
      <Toast ref={toast} />
      <div className="space-y-6">
        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="flex flex-col gap-1">
              <label className="text-sm font-bold text-gray-600">
                Enter Voucher/Bill No.<span className="text-red-500">*</span>
              </label>
              <InputText
                placeholder="Enter Voucher/Bill No."
                className="p-inputtext-sm"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-sm font-bold text-gray-600">
                Enter Supplier's Invoice No.
                <span className="text-red-500">*</span>
              </label>
              <InputText
                placeholder="Enter Supplier's Invoice No."
                className="p-inputtext-sm"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-sm font-bold text-gray-600">
                Select Supplier's Invoice Date
                <span className="text-red-500">*</span>
              </label>
              <Calendar
                placeholder="dd/mm/yyyy"
                className="w-full p-inputtext-sm"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-sm font-bold text-gray-600">
                Select Date<span className="text-red-500">*</span>
              </label>
              <Calendar
                placeholder="dd/mm/yyyy"
                className="w-full p-inputtext-sm"
              />
            </div>
          </div>
          {step === 1 && (
            <div className="flex justify-start gap-3 mt-6">
              <Button
                label="Search"
                icon="pi pi-search"
                className="p-button-sm px-8"
                style={{ backgroundColor: "#6366f1" }}
                onClick={handleSearch}
              />
              <Button
                label="Clear"
                icon="pi pi-refresh"
                className="p-button-sm px-8 p-button-danger p-button-outlined"
                onClick={handleClear}
              />
            </div>
          )}
        </div>

        {step >= 2 && (
          <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 animate-fade-in">
            <h2 className="text-md font-bold text-gray-700 mb-4 border-b pb-2">
              Supplier Detail
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="flex flex-col gap-1">
                <label className="text-sm font-bold text-gray-600">
                  Enter Supplier Name<span className="text-red-500">*</span>
                </label>
                <InputText
                  placeholder="Enter Supplier Name"
                  className="p-inputtext-sm"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-sm font-bold text-gray-600">
                  Enter Amount<span className="text-red-500">*</span>
                </label>
                <InputText
                  placeholder="Enter Amount"
                  className="p-inputtext-sm"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-sm font-bold text-gray-600">
                  Enter Supplier Address<span className="text-red-500">*</span>
                </label>
                <InputText
                  placeholder="Enter Supplier Address"
                  className="p-inputtext-sm"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-sm font-bold text-gray-600">
                  Select State<span className="text-red-500">*</span>
                </label>
                <Dropdown
                  value={state}
                  options={stateOptions}
                  onChange={(e) => setState(e.value)}
                  placeholder="Select"
                  className="p-inputtext-sm"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-sm font-bold text-gray-600">
                  Enter City<span className="text-red-500">*</span>
                </label>
                <InputText
                  placeholder="Enter City"
                  className="p-inputtext-sm"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-sm font-bold text-gray-600">
                  Select Registration Types
                  <span className="text-red-500">*</span>
                </label>
                <Dropdown
                  value={registrationType}
                  options={registrationOptions}
                  onChange={(e) => setRegistrationType(e.value)}
                  placeholder="Select"
                  className="p-inputtext-sm"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-sm font-bold text-gray-600">
                  Enter GST No.<span className="text-red-500">*</span>
                </label>
                <InputText
                  placeholder="Enter GST No."
                  className="p-inputtext-sm"
                />
              </div>
            </div>
            <div className="mt-8 border-t pt-4">
              <h2 className="text-md font-bold text-gray-700 mb-4">
                Service Purchase Voucher Add
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1">
                  <label className="text-sm font-bold text-gray-600">
                    Select Ledger<span className="text-red-500">*</span>
                  </label>
                  <Dropdown
                    value={ledger}
                    options={ledgerHeadOptions}
                    onChange={(e) => setLedger(e.value)}
                    placeholder="Select"
                    className="p-inputtext-sm"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-sm font-bold text-gray-600">
                    Enter Amount<span className="text-red-500">*</span>
                  </label>
                  <InputText placeholder="0.00" className="p-inputtext-sm" />
                </div>
              </div>
            </div>
            {step === 2 && (
              <div className="flex justify-start gap-3 mt-6">
                <Button
                  label="Add"
                  icon="pi pi-plus"
                  className="p-button-sm px-8"
                  style={{ backgroundColor: "#6366f1" }}
                  onClick={handleAdd}
                />
                <Button
                  label="Clear"
                  icon="pi pi-refresh"
                  className="p-button-sm px-8 p-button-danger p-button-outlined"
                  onClick={handleClear}
                />
              </div>
            )}
          </div>
        )}

        {step === 3 && (
          <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 animate-fade-in">
            <h2 className="text-md font-bold text-gray-700 mb-4 border-b pb-2">
              Service Purchase Voucher Add List
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-start">
              <div className="flex items-center">
                <label className="text-sm font-bold text-gray-600">CGST</label>
              </div>
              <InputText
                value={taxData.cgst}
                onChange={(e) => handleTaxChange("cgst", e.target.value)}
                className="p-inputtext-sm w-full"
              />

              <div className="flex items-center">
                <label className="text-sm font-bold text-gray-600">SGST</label>
              </div>
              <InputText
                value={taxData.sgst}
                onChange={(e) => handleTaxChange("sgst", e.target.value)}
                className="p-inputtext-sm w-full"
              />

              <div className="flex items-center">
                <label className="text-sm font-bold text-gray-600">IGST</label>
              </div>
              <InputText
                value={taxData.igst}
                onChange={(e) => handleTaxChange("igst", e.target.value)}
                className="p-inputtext-sm w-full"
              />

              <div className="flex items-center">
                <label className="text-sm font-bold text-gray-600">
                  Round off
                </label>
              </div>
              <InputText
                value={taxData.roundOff}
                onChange={(e) => handleTaxChange("roundOff", e.target.value)}
                className="p-inputtext-sm w-full"
              />

              <div className="flex items-center">
                <label className="text-sm font-bold text-gray-600">
                  Grand Total
                </label>
              </div>
              <InputText
                value={taxData.grandTotal}
                onChange={(e) => handleTaxChange("grandTotal", e.target.value)}
                className="p-inputtext-sm w-full font-bold"
              />
            </div>

            <div className="mt-8 border-t pt-4">
              <div className="flex flex-col gap-1">
                <label className="text-sm font-bold text-gray-600">
                  Narration<span className="text-red-500">*</span>
                </label>
                <InputTextarea
                  rows={2}
                  placeholder="Enter Narration here"
                  className="p-inputtext-sm"
                />
              </div>
            </div>

            <div className="flex justify-start gap-3 mt-10">
              <Button
                label="Accept"
                icon="pi pi-check"
                className="px-12 p-button-sm"
                style={{ backgroundColor: "#6366f1" }}
                onClick={handleAccept}
              />
              <Button
                label="Clear"
                icon="pi pi-refresh"
                className="px-12 p-button-sm p-button-danger p-button-outlined"
                onClick={() => setStep(2)}
              />
            </div>
          </div>
        )}
      </div>
    </PageLayout>
  );
};

export default ServicePurchaseVoucher;
