import React, { useState } from "react";
import PageLayout from "../../../components/PageLayout";
import { Button } from "primereact/button";
import { Dropdown } from "primereact/dropdown";
import { InputText } from "primereact/inputtext";
import { Calendar } from "primereact/calendar";
import { InputTextarea } from "primereact/inputtextarea";

const ServicePurchaseVoucher: React.FC = () => {
  const [step, setStep] = useState(1);
  const [registrationType, setRegistrationType] = useState<string | null>(null);
  const [state, setState] = useState<string | null>(null);
  const [ledger, setLedger] = useState<string | null>(null);

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

  return (
    <PageLayout title="Service Purchase Voucher">
      <div className="space-y-6">
        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="flex flex-col gap-1">
              <label className="text-xs font-bold text-gray-600">
                Enter Voucher/Bill No.*
              </label>
              <InputText
                placeholder="Enter Voucher/Bill No."
                className="p-inputtext-sm"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-xs font-bold text-gray-600">
                Enter Supplier's Invoice No.*
              </label>
              <InputText
                placeholder="Enter Supplier's Invoice No."
                className="p-inputtext-sm"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-xs font-bold text-gray-600">
                Select Supplier's Invoice Date*
              </label>
              <Calendar
                placeholder="dd/mm/yyyy"
                className="w-full p-inputtext-sm"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-xs font-bold text-gray-600">
                Select Date*
              </label>
              <Calendar
                placeholder="dd/mm/yyyy"
                className="w-full p-inputtext-sm"
              />
            </div>
          </div>
          {step === 1 && (
            <div className="flex justify-center gap-3 mt-6">
              <Button
                label="Search"
                className="p-button-sm px-8"
                style={{ backgroundColor: "#6366f1" }}
                onClick={() => setStep(2)}
              />
              <Button
                label="Clear"
                className="p-button-sm px-8 p-button-danger"
              />
            </div>
          )}
        </div>
        {step >= 2 && (
          <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
            <h2 className="text-md font-bold text-gray-700 mb-4 border-b pb-2">
              Supplier Detail
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="flex flex-col gap-1">
                <label className="text-xs font-bold text-gray-600">
                  Enter Supplier Name*
                </label>
                <InputText
                  placeholder="Enter Supplier Name"
                  className="p-inputtext-sm"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-xs font-bold text-gray-600">
                  Enter Amount*
                </label>
                <InputText
                  placeholder="Enter Amount"
                  className="p-inputtext-sm"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-xs font-bold text-gray-600">
                  Enter Supplier Address*
                </label>
                <InputText
                  placeholder="Enter Supplier Address"
                  className="p-inputtext-sm"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-xs font-bold text-gray-600">
                  Select State*
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
                <label className="text-xs font-bold text-gray-600">
                  Enter City*
                </label>
                <InputText
                  placeholder="Enter City"
                  className="p-inputtext-sm"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-xs font-bold text-gray-600">
                  Select Registration Types*
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
                <label className="text-xs font-bold text-gray-600">
                  Enter GST No.*
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
                  <label className="text-xs font-bold text-gray-600">
                    Select Ledger*
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
                  <label className="text-xs font-bold text-gray-600">
                    Enter Amount*
                  </label>
                  <InputText placeholder="0.00" className="p-inputtext-sm" />
                </div>
              </div>
            </div>
            {step === 2 && (
              <div className="flex justify-center gap-3 mt-6">
                <Button
                  label="Add"
                  className="p-button-sm px-8"
                  style={{ backgroundColor: "#6366f1" }}
                  onClick={() => setStep(3)}
                />
                <Button
                  label="Clear"
                  className="p-button-sm px-8 p-button-danger"
                />
              </div>
            )}
          </div>
        )}
        {step === 3 && (
          <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
            <h2 className="text-md font-bold text-gray-700 mb-4 border-b pb-2">
              Service Purchase Voucher Add List
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto">
              <div className="flex items-center">
                <label className="text-xs font-bold text-gray-600">CGST</label>
              </div>
              <InputText
                value={taxData.cgst}
                onChange={(e) => handleTaxChange("cgst", e.target.value)}
                className="p-inputtext-sm w-full"
              />

              <div className="flex items-center">
                <label className="text-xs font-bold text-gray-600">SGST</label>
              </div>
              <InputText
                value={taxData.sgst}
                onChange={(e) => handleTaxChange("sgst", e.target.value)}
                className="p-inputtext-sm w-full"
              />

              <div className="flex items-center">
                <label className="text-xs font-bold text-gray-600">IGST</label>
              </div>
              <InputText
                value={taxData.igst}
                onChange={(e) => handleTaxChange("igst", e.target.value)}
                className="p-inputtext-sm w-full"
              />

              <div className="flex items-center">
                <label className="text-xs font-bold text-gray-600">
                  Round off
                </label>
              </div>
              <InputText
                value={taxData.roundOff}
                onChange={(e) => handleTaxChange("roundOff", e.target.value)}
                className="p-inputtext-sm w-full"
              />

              <div className="flex items-center">
                <label className="text-xs font-bold text-gray-600">
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
                <label className="text-xs font-bold text-gray-600">
                  Narration*
                </label>
                <InputTextarea
                  rows={2}
                  placeholder="Enter Narration here"
                  className="p-inputtext-sm w-200"
                />
              </div>
            </div>

            <div className="flex justify-center gap-3 mt-10">
              <Button
                label="Accept"
                className="px-12"
                style={{ backgroundColor: "#6366f1" }}
                onClick={() => setStep(1)}
              />
              <Button
                label="Clear"
                className="px-12 p-button-danger p-button-outlined"
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
