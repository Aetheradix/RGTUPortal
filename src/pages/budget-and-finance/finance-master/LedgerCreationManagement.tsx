import React, { useState } from "react";
import PageLayout from "../../../components/PageLayout";
import { Button } from "primereact/button";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Dropdown } from "primereact/dropdown";
import { InputText } from "primereact/inputtext";
import { Calendar } from "primereact/calendar";

interface LedgerData {
  srNo: number;
  ledgerName: string;
  ledgerCode: string;
  ledgerAlias: string;
  parentGroup: string;
  ledgerDate: string;
  accountHolderName: string;
  bankAccountType: string;
  bankAccountNo: string;
}

const LedgerCreationManagement: React.FC = () => {
  const [step, setStep] = useState(1);
  const ledgers: LedgerData[] = [
    {
      srNo: 1,
      ledgerName: "Laboratory Equipment Purchase",
      ledgerCode: "L002",
      ledgerAlias: "A002541",
      parentGroup: "Direct Expenses(Expenses)",
      ledgerDate: "12/01/2024",
      accountHolderName: "Rahul Jain",
      bankAccountType: "Current Account",
      bankAccountNo: "87412596325",
    },
    {
      srNo: 2,
      ledgerName: "Faculty Training Program",
      ledgerCode: "L003",
      ledgerAlias: "A003742",
      parentGroup: "Indirect Expenses (Expenses)",
      ledgerDate: "15/02/2024",
      accountHolderName: "Priya Sharma",
      bankAccountType: "Savings Account",
      bankAccountNo: "96325874121",
    },
    {
      srNo: 3,
      ledgerName: "Imprest Acct, Smt. Preeti Kakodia (R.O.)",
      ledgerCode: "L004",
      ledgerAlias: "A004963",
      parentGroup: "Revenue (Income)",
      ledgerDate: "20/03/2024",
      accountHolderName: "Amit Verma",
      bankAccountType: "Fixed Deposit",
      bankAccountNo: "55442796325",
    },
  ];

  return (
    <PageLayout title="Ledger Creation Management">
      {step === 1 && (
        <div>
          <div className="flex justify-between items-center mb-3">
            <h2 className="text-lg font-semibold text-gray-700">
              Ledger Creation Management List
            </h2>
            <Button
              label="Add Group Management"
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
            value={ledgers}
            className="p-datatable-sm"
            paginator
            rows={10}
          >
            <Column
              field="srNo"
              header="Sr. No."
              body={(data) => (
                <>
                  <i className="pi pi-plus-circle text-blue-500 mr-2 cursor-pointer" />
                  {data.srNo}
                </>
              )}
              style={{ borderBottom: "1px solid #e5e7eb" }}
            />
            <Column
              field="ledgerName"
              header="Ledger Name"
              sortable
              style={{ borderBottom: "1px solid #e5e7eb" }}
            />
            <Column
              field="ledgerCode"
              header="Ledger Code"
              sortable
              style={{ borderBottom: "1px solid #e5e7eb" }}
            />
            <Column
              field="ledgerAlias"
              header="Ledger Alias"
              sortable
              style={{ borderBottom: "1px solid #e5e7eb" }}
            />
            <Column
              field="parentGroup"
              header="Parent Group"
              sortable
              style={{ borderBottom: "1px solid #e5e7eb" }}
            />
            <Column
              field="ledgerDate"
              header="Ledger Date"
              sortable
              style={{ borderBottom: "1px solid #e5e7eb" }}
            />
            <Column
              field="accountHolderName"
              header="A/c Holder Name"
              sortable
              style={{ borderBottom: "1px solid #e5e7eb" }}
            />
            <Column
              field="bankAccountType"
              header="Bank Account Type"
              sortable
              style={{ borderBottom: "1px solid #e5e7eb" }}
            />
            <Column
              field="bankAccountNo"
              header="Bank Account No."
              sortable
              style={{ borderBottom: "1px solid #e5e7eb" }}
            />
          </DataTable>
        </div>
      )}
      {step === 2 && (
        <div className="space-y-6 pb-8">
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
            <div className="flex justify-between items-center mb-6 border-b pb-4">
              <h2 className="text-lg font-semibold text-gray-700">
                Add Ledger Creation Management
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
                  Enter Ledger Name in English
                  <span className="text-red-500">*</span>
                </label>
                <InputText placeholder="Enter Ledger Name in English" />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-xs font-bold">
                  Enter Ledger Name in Hindi
                  <span className="text-red-500">*</span>
                </label>
                <InputText placeholder="बहीखाता का नाम हिंदी में दर्ज करें" />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-xs font-bold">
                  Enter Ledger Code<span className="text-red-500">*</span>
                </label>
                <InputText placeholder="Enter Ledger Code" />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-xs font-bold">
                  Enter Ledger Alias<span className="text-red-500">*</span>
                </label>
                <InputText placeholder="Enter Ledger Alias" />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-xs font-bold">
                  Select Group Name<span className="text-red-500">*</span>
                </label>
                <Dropdown placeholder="Select" className="w-full" />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-xs font-bold">
                  Select Ledger Date<span className="text-red-500">*</span>
                </label>
                <Calendar placeholder="dd/mm/yyyy" className="w-full" />
              </div>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
            <h3 className="text-md font-bold text-gray-700 mb-4 pb-2">
              Bank Account Details
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="flex flex-col gap-1">
                <label className="text-xs font-bold">
                  Enter A/c Holder Name*
                </label>
                <InputText placeholder="Enter A/c Holder Name" />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-xs font-bold">
                  Select Account Type*
                </label>
                <Dropdown placeholder="Select" />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-xs font-bold">
                  Enter Bank Account No.*
                </label>
                <InputText placeholder="Enter Bank Account No." />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-xs font-bold">
                  Enter IFSC Code(CAPITAL LETTERS ONLY)*
                </label>
                <InputText placeholder="Enter IFSC Code" />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-xs font-bold">Enter Bank Name*</label>
                <InputText placeholder="Enter Bank Name" />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-xs font-bold">
                  Enter Bank Branch Name*
                </label>
                <InputText placeholder="Enter Bank Branch Name" />
              </div>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
            <h3 className="text-md font-bold text-gray-700 mb-4 pb-2">
              Tax Registration Details
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex flex-col gap-1">
                <label className="text-xs font-bold">
                  Enter PAN(IT) Number*
                </label>
                <InputText placeholder="Enter PAN(IT) Number" />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-xs font-bold">
                  Select Registration Types*
                </label>
                <Dropdown placeholder="Select" />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-xs font-bold">
                  Enter GST No.(CAPITAL LETTERS ONLY)*
                </label>
                <InputText placeholder="Enter GST No." />
              </div>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
            <h3 className="text-md font-bold text-gray-700 mb-4 pb-2">
              Mailing Details
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="flex flex-col gap-1">
                <label className="text-xs font-bold">Enter Mailing Name*</label>
                <InputText placeholder="Enter Mailing Name" />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-xs font-bold">Select State Name*</label>
                <Dropdown placeholder="Select" />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-xs font-bold">Enter City Name*</label>
                <InputText placeholder="Enter City Name" />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-xs font-bold">Enter PIN Code*</label>
                <InputText placeholder="Enter Mailing PIN Code" />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-xs font-bold">Enter Mobile No.*</label>
                <InputText placeholder="Enter Mobile No." />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-xs font-bold">Enter Email ID*</label>
                <InputText placeholder="Enter Email ID" />
              </div>
              <div className="flex flex-col md:col-span-2 gap-1">
                <label className="text-xs font-bold">Enter Address*</label>
                <InputText placeholder="Enter Address" />
              </div>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
            <h3 className="text-md font-bold text-gray-700 mb-4 pb-2">
              Ledger Other Details
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="flex flex-col gap-1">
                <label className="text-xs font-bold">
                  Is Affected Inventory*
                </label>
                <Dropdown placeholder="Select" />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-xs font-bold">Is Budget Affected*</label>
                <Dropdown placeholder="Select" />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-xs font-bold">
                  Select Maintain Balance Bill By Bill?*
                </label>
                <Dropdown placeholder="Select" />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-xs font-bold">Select Dr./Cr.*</label>
                <Dropdown placeholder="Select" />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-xs font-bold">
                  Enter Opening Balance*
                </label>
                <InputText defaultValue="0.00" />
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

export default LedgerCreationManagement;
