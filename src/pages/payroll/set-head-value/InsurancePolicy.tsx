/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import PageLayout from "@/components/PageLayout";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { InputText } from "primereact/inputtext";
import { Dropdown } from "primereact/dropdown";
import { Calendar } from "primereact/calendar";
import { Tag } from "primereact/tag";

const policyList = [
  {
    id: 1,
    officeType: "Head Office",
    office: "Ministry of Home Affairs (TA88)",
    employee: "Surya Pratap (HP858)",
    policyType: "LIC",
    policyNo: "123456",
    policyName: "LIC Standard",
    amount: 5500,
    frequency: "Monthly",
    startDate: "01/01/2024",
    endDate: "31/12/2030",
    status: "Active"
  },
];

export default function InsurancePolicy() {
  const [view, setView] = useState<"list" | "add">("list");

  const [policyType, setPolicyType] = useState<any>(null);
  const [policyNo, setPolicyNo] = useState("");
  const [policyName, setPolicyName] = useState("");
  const [amount, setAmount] = useState("");
  const [frequency, setFrequency] = useState<any>(null);
  const [startDate, setStartDate] = useState<any>(null);
  const [endDate, setEndDate] = useState<any>(null);

  const formatCurrency = (val: number) => `₹ ${val.toLocaleString("en-IN")}`;

  const expandTemplate = (row: any) => (
    <div className="p-4 bg-gray-50 border rounded-lg mx-4 my-2 animate-fadein">
      {row.startDate} — {row.endDate}
    </div>
  );

  return (
    <PageLayout title="Insurance Policy Management / बीमा पॉलिसी">

      {view === "list" ? (
        <div className="animate-fadein">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold text-gray-800">Active Policies</h2>
            <Button label="New Policy Entry" icon="pi pi-plus" className="bg-blue-600" onClick={() => setView("add")} />
          </div>

          <Card>
            <DataTable value={policyList} rowExpansionTemplate={expandTemplate}>
              <Column expander style={{ width: '3rem' }} />
              <Column field="employee" header="EMPLOYEE" sortable/>
              <Column field="policyName" header="POLICY NAME" sortable/>
              <Column field="policyNo" header="POLICY NO."sortable />
              <Column field="amount" header="PREMIUM (₹)" body={(r) => formatCurrency(r.amount)} />
              <Column field="status" header="STATUS" body={() => <Tag value="Active" severity="success" />} />
            </DataTable>
          </Card>
        </div>
      ) : (
        <div className="animate-fadein">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-bold text-gray-700 uppercase">Add New Insurance Policy</h3>
            <Button label="Cancel & Back" icon="pi pi-times" severity="secondary" text onClick={() => setView("list")} />
          </div>

          <Card>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">

              <div className="flex flex-col gap-1">
                <label className="text-xs font-bold text-gray-600 uppercase">Policy Type *</label>
                <Dropdown
                  className="w-full"
                  options={[{ label: "LIC", value: "LIC" }]}
                  placeholder="Select Type"
                  value={policyType}
                  onChange={(e) => setPolicyType(e.value)}
                />
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-xs font-bold text-gray-600 uppercase">Policy Number *</label>
                <InputText
                  className="w-full"
                  placeholder="Enter number"
                  value={policyNo}
                  onChange={(e) => setPolicyNo(e.target.value)}
                />
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-xs font-bold text-gray-600 uppercase">Policy Name *</label>
                <InputText
                  className="w-full"
                  placeholder="Enter plan name"
                  value={policyName}
                  onChange={(e) => setPolicyName(e.target.value)}
                />
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-xs font-bold text-gray-600 uppercase">Premium Amount (₹) *</label>
                <InputText
                  className="w-full"
                  placeholder="0.00"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                />
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-xs font-bold text-gray-600 uppercase">Frequency *</label>
                <Dropdown
                  className="w-full"
                  options={[
                    { label: "Monthly", value: "Monthly" },
                    { label: "Quarterly", value: "Quarterly" },
                  ]}
                  placeholder="Select Frequency"
                  value={frequency}
                  onChange={(e) => setFrequency(e.value)}
                />
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-xs font-bold text-gray-600 uppercase">Start Date *</label>
                <Calendar
                  className="w-full"
                  showIcon
                  placeholder="DD/MM/YYYY"
                  value={startDate}
                  onChange={(e) => setStartDate(e.value)}
                />
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-xs font-bold text-gray-600 uppercase">End Date *</label>
                <Calendar
                  className="w-full"
                  showIcon
                  placeholder="DD/MM/YYYY"
                  value={endDate}
                  onChange={(e) => setEndDate(e.value)}
                />
              </div>
            </div>

            <div className="flex justify-center gap-3 mt-10 pt-6 border-t">
              <Button
                label="Save Policy Entry"
                icon="pi pi-save"
                className="bg-blue-600 px-8 shadow-lg"
                onClick={() =>
                  console.log({ policyType, policyNo, policyName, amount, frequency, startDate, endDate })
                }
              />
              <Button
                label="Clear Form"
                icon="pi pi-refresh"
                severity="secondary"
                outlined
                className="px-8"
                onClick={() => {
                  setPolicyType(null);
                  setPolicyNo("");
                  setPolicyName("");
                  setAmount("");
                  setFrequency(null);
                  setStartDate(null);
                  setEndDate(null);
                }}
              />
            </div>

          </Card>
        </div>
      )}
    </PageLayout>
  );
}
