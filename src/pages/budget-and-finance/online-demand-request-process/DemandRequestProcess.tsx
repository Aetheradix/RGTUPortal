import React, { useState } from "react";
import PageLayout from "../../../components/PageLayout";
import { Button } from "primereact/button";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Dropdown } from "primereact/dropdown";
import { InputText } from "primereact/inputtext";
import { Calendar } from "primereact/calendar";

interface DemandRequestData {
  srNo: number;
  demandDate: string;
  headType: string;
  budgetHeadName: string;
  budgetAmountRequest: string;
  status?: string;
}

const DemandRequestProcess: React.FC = () => {
  const [step, setStep] = useState(1);
  const [initialDemands] = useState<DemandRequestData[]>([
    {
      srNo: 1,
      demandDate: "11/11/2024",
      headType: "Expence",
      budgetHeadName: "Gratuity Payment",
      budgetAmountRequest: "603000.00",
      status: "Active",
    },
    {
      srNo: 2,
      demandDate: "12/10/2024",
      headType: "Expence",
      budgetHeadName: "Basic Pay/Special Pay/Dearness Allowance",
      budgetAmountRequest: "543000.00",
      status: "Active",
    },
    {
      srNo: 3,
      demandDate: "12/10/2024",
      headType: "Expence",
      budgetHeadName: "Gratuity Premium Payment",
      budgetAmountRequest: "100054.00",
      status: "Active",
    },
  ]);

  const [formData, setFormData] = useState({
    demandDate: null as Date | null,
    headType: "",
    budgetHeadName: "",
    amount: "",
  });

  const [addedItems, setAddedItems] = useState<DemandRequestData[]>([]);

  const headTypeOptions = [
    { label: "Expense", value: "Expense" },
    { label: "Income", value: "Income" },
  ];

  const budgetHeadOptions = [
    {
      label: "Basic Pay/Special Pay/Dearness Allowance",
      value: "Basic Pay/Special Pay/Dearness Allowance",
    },
    { label: "Gratuity Payment", value: "Gratuity Payment" },
    { label: "Gratuity Premium Payment", value: "Gratuity Premium Payment" },
  ];

  const getAmountInWords = (amount: string) => {
    if (!amount || isNaN(Number(amount))) return "";
    const num = parseFloat(amount);
    return `RUPEES ${num.toLocaleString("en-IN").toUpperCase()} ONLY`;
  };

  const handleAdd = () => {
    if (!formData.amount) return;
    const newItem: DemandRequestData = {
      srNo: addedItems.length + 1,
      demandDate: formData.demandDate
        ? formData.demandDate.toLocaleDateString()
        : "",
      headType: formData.headType,
      budgetHeadName: formData.budgetHeadName,
      budgetAmountRequest: parseFloat(formData.amount).toFixed(2),
    };
    setAddedItems([...addedItems, newItem]);
    setStep(3);
  };

  const totalAmount = addedItems.reduce(
    (acc, item) => acc + parseFloat(item.budgetAmountRequest),
    0
  );

  return (
    <PageLayout title="Demand Request Process">
      {step === 1 && (
        <div className="bg-white p-4 rounded shadow">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold text-gray-700">
              Demand Request Process List
            </h2>
            <Button
              label="Add Demand Request Process"
              icon="pi pi-plus"
              className="p-button-sm"
              style={{ backgroundColor: "#6366f1" }}
              onClick={() => setStep(2)}
            />
          </div>
          <DataTable value={initialDemands} className="p-datatable-sm">
            <Column field="srNo" header="Sr. No." />
            <Column field="demandDate" header="Demand Date" />
            <Column field="headType" header="Head Type" />
            <Column field="budgetHeadName" header="Budget Head Name" />
            <Column
              field="budgetAmountRequest"
              header="Budget Amount Request"
            />
            <Column
              header="View Document"
              body={() => (
                <Button
                  icon="pi pi-eye"
                  className="p-button-rounded p-button-info p-button-sm"
                  style={{ backgroundColor: "#6366f1", border: "none" }}
                />
              )}
            />
            <Column
              field="status"
              header="Status"
              body={(rowData) => (
                <span className="bg-green-100 text-green-600 px-2 py-1 rounded text-xs font-bold">
                  {rowData.status}
                </span>
              )}
            />
            <Column
              header="Action"
              body={() => (
                <div className="flex gap-2">
                  <Button
                    icon="pi pi-pencil"
                    className="p-button-rounded p-button-primary p-button-sm"
                    style={{ backgroundColor: "#6366f1" }}
                  />
                  <Button
                    icon="pi pi-trash"
                    className="p-button-rounded p-button-danger p-button-sm"
                  />
                </div>
              )}
            />
          </DataTable>
        </div>
      )}

      {(step === 2 || step === 3) && (
        <div className="space-y-6">
          <div className="bg-white ">
            <div className="flex justify-between items-center mb-6 border-b pb-4">
              <h2 className="text-lg font-semibold text-gray-700">
                Add Demand Request Process
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
                <label className="text-xs font-bold">Select Demand Date*</label>
                <Calendar
                  value={formData.demandDate}
                  onChange={(e) =>
                    setFormData({ ...formData, demandDate: e.value as Date })
                  }
                  placeholder="dd/mm/yyyy"
                  className="w-full p-inputtext-sm"
                />
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-xs font-bold">Select Head Type*</label>
                <Dropdown
                  value={formData.headType}
                  options={headTypeOptions}
                  onChange={(e) =>
                    setFormData({ ...formData, headType: e.value })
                  }
                  placeholder="Select"
                  className="w-full p-inputtext-sm"
                />
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-xs font-bold">
                  Select Budget Head Name*
                </label>
                <Dropdown
                  value={formData.budgetHeadName}
                  options={budgetHeadOptions}
                  onChange={(e) =>
                    setFormData({ ...formData, budgetHeadName: e.value })
                  }
                  placeholder="Select"
                  className="w-full p-inputtext-sm"
                />
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-xs font-bold">
                  Enter Budget Amount Request*
                </label>
                <InputText
                  value={formData.amount}
                  onChange={(e) =>
                    setFormData({ ...formData, amount: e.target.value })
                  }
                  placeholder="Enter Amount"
                  className="p-inputtext-sm"
                />
              </div>

              <div className="flex flex-col md:col-span-2 gap-1">
                <label className="text-xs font-bold">
                  Budget Amount Request in Words*
                </label>
                <InputText
                  value={getAmountInWords(formData.amount)}
                  readOnly
                  className="p-inputtext-sm bg-gray-100"
                />
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-xs font-bold">
                  Upload Demand Order*
                </label>
                <input
                  type="file"
                  className="text-xs border p-2 rounded w-full"
                />
              </div>

              <div className="flex items-end">
                <Button
                  label="Add"
                  className="p-button-outlined p-button-success p-button-sm px-6"
                  style={{ borderColor: "#22c55e", color: "#22c55e" }}
                  onClick={handleAdd}
                />
              </div>
            </div>
          </div>

          {step === 3 && (
            <div className="bg-white p-6 shadow-md ">
              <DataTable
                value={addedItems}
                className="p-datatable-sm border text-sm"
                showGridlines
              >
                <Column field="srNo" header="Sr. No." />
                <Column field="demandDate" header="Demand Date" />
                <Column field="headType" header="Head Type" />
                <Column field="budgetHeadName" header="Budget Head Name" />
                <Column
                  field="budgetAmountRequest"
                  header="Budget Amount Request"
                />
              </DataTable>

              <div className="grid grid-cols-5 border-x border-b p-2 font-bold text-sm bg-gray-50">
                <div className="col-span-4">Total</div>
                <div>{totalAmount.toFixed(2)}</div>
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
                  onClick={() => {
                    setAddedItems([]);
                    setStep(2);
                  }}
                />
              </div>
            </div>
          )}
        </div>
      )}
    </PageLayout>
  );
};

export default DemandRequestProcess;
