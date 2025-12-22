/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useRef } from "react";
import PageLayout from "../../../components/PageLayout";
import { Button } from "primereact/button";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Dropdown } from "primereact/dropdown";
import { InputText } from "primereact/inputtext";
import { Calendar } from "primereact/calendar";
import { InputTextarea } from "primereact/inputtextarea";

const PaymentVoucher: React.FC = () => {
  const [step, setStep] = useState(1);
  const [credit, setCredit] = useState<string | null>(null);
  const [ledger, setLedger] = useState<string | null>(null);

  // Custom File Upload States
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [fileName, setFileName] = useState("No file chosen");

  const [voucherList] = useState<any[]>([
    {
      srNo: 1,
      type: "Credit",
      ledger: "Fee Collection (10.01.01)",
      balance: "₹20,000",
      debit: "0",
      credit: "₹5,000",
    },
    {
      srNo: 2,
      type: "Debit",
      ledger: "Salary Expenses (10.02.01)",
      balance: "₹50,000",
      debit: "₹15,000",
      credit: "0",
    },
  ]);

  const creditDebitOptions = [
    { label: "Credit", value: "Credit" },
    { label: "Debit", value: "Debit" },
  ];

  const ledgerHeadOptions = [
    { label: "Fee Collection (10.01.01)", value: "FC" },
    { label: "Salary Expenses (10.02.01)", value: "SE" },
    { label: "Library Management (10.01.03)", value: "LM" },
  ];

  // Logic for File Selection
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFileName(file.name);
    }
  };

  return (
    <PageLayout title="Payment Voucher">
      <div className="space-y-6">
        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                Select Voucher Date*
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
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <h2 className="text-md font-bold text-gray-700 mb-6 border-b pb-2">
              Voucher Details
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="flex flex-col gap-1">
                <label className="text-xs font-bold text-gray-600">
                  Select Cr/Dr *
                </label>
                <Dropdown
                  value={credit}
                  options={creditDebitOptions}
                  onChange={(e) => setCredit(e.value)}
                  placeholder="Select"
                  className="p-inputtext-sm"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-xs font-bold text-gray-600">
                  Select Ledger(Head Code) *
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
                  Current Balance Amount
                </label>
                <InputText
                  value="₹20000"
                  disabled
                  className="p-inputtext-sm bg-gray-100"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-xs font-bold text-gray-600">
                  Enter Amount *
                </label>
                <InputText
                  placeholder="Enter Amount"
                  className="p-inputtext-sm"
                />
              </div>
            </div>
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
          </div>
        )}

        {step === 3 && (
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <h2 className="text-md font-bold text-gray-700 mb-4 border-b pb-2">
              Payment Voucher List
            </h2>
            <DataTable
              value={voucherList}
              className="p-datatable-sm text-sm"
              showGridlines
              paginator
              rows={5}
            >
              <Column field="srNo" header="Sr No." />
              <Column field="type" header="Cr./Dr. Type" />
              <Column field="ledger" header="Ledger(Head Code)" />
              <Column field="balance" header="Current Balance Amount" />
              <Column field="debit" header="Debit Amount" />
              <Column field="credit" header="Credit Amount" />
              <Column
                header="Bill Detail"
                body={() => (
                  <div className="flex gap-1 justify-center">
                    <Button
                      icon="pi pi-eye"
                      className="p-button-rounded p-button-success p-button-sm"
                    />
                    <Button
                      icon="pi pi-pencil"
                      className="p-button-rounded p-button-primary p-button-sm"
                    />
                  </div>
                )}
              />
            </DataTable>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <div className="flex flex-col gap-1">
                <label className="text-xs font-bold text-gray-600">
                  Upload File*
                </label>
                <div
                  className="flex items-center border border-gray-300 rounded overflow-hidden cursor-pointer h-10 transition-colors hover:border-indigo-400"
                  onClick={() => fileInputRef.current?.click()}
                >
                  <div className="bg-gray-100 px-4 py-2 text-xs border-r border-gray-300 font-bold text-gray-700 h-full flex items-center whitespace-nowrap">
                    Choose File
                  </div>
                  <div className="px-3 py-2 text-xs text-gray-500 truncate grow">
                    {fileName}
                  </div>
                  <input
                    type="file"
                    ref={fileInputRef}
                    onChange={handleFileChange}
                    className="hidden"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-xs font-bold text-gray-600">
                  Narration *
                </label>
                <InputTextarea
                  rows={2}
                  placeholder="Enter Narration here"
                  className="p-inputtext-sm"
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
                onClick={() => {
                  setStep(2);
                  setFileName("No file chosen");
                }}
              />
            </div>
          </div>
        )}
      </div>
    </PageLayout>
  );
};

export default PaymentVoucher;
