// /* eslint-disable react-hooks/set-state-in-effect */
// import React, { useState, useEffect } from "react";
// import PageLayout from "../../../components/PageLayout";
// import { Button } from "primereact/button";
// import { DataTable } from "primereact/datatable";
// import { Column } from "primereact/column";
// import { Dropdown } from "primereact/dropdown";
// import { InputText } from "primereact/inputtext";

// interface UpdateBudgetData {
//   srNo: number;
//   headNo: string;
//   budgetHead: string;
//   budgetHeadCode: string;
//   budgetHeadName: string;
//   proposedAmount: string;
//   availableAmount: string;
//   revisedAmount: string;
// }

// const UpdateProposedBudget: React.FC = () => {
//   const [step, setStep] = useState(1);
//   const [officeName, setOfficeName] = useState<string | null>(null);
//   const [headType, setHeadType] = useState<string | null>(null);
//   const [totalProposed, setTotalProposed] = useState<number>(0);
//   const [budgetData, setBudgetData] = useState<UpdateBudgetData[]>([
//     {
//       srNo: 1,
//       headNo: "01",
//       budgetHead: "Salary Allowance",
//       budgetHeadCode: "01.01",
//       budgetHeadName: "Salary Allowance",
//       proposedAmount: "21444500",
//       availableAmount: "21444",
//       revisedAmount: "0.00",
//     },
//     {
//       srNo: 2,
//       headNo: "",
//       budgetHead: "",
//       budgetHeadCode: "01.02",
//       budgetHeadName: "Dearness Allowance",
//       proposedAmount: "1200890",
//       availableAmount: "12008",
//       revisedAmount: "0.00",
//     },
//     {
//       srNo: 3,
//       headNo: "",
//       budgetHead: "",
//       budgetHeadCode: "01.03",
//       budgetHeadName: "House Rent Allowance",
//       proposedAmount: "700000",
//       availableAmount: "7000",
//       revisedAmount: "0.00",
//     },
//     {
//       srNo: 4,
//       headNo: "",
//       budgetHead: "",
//       budgetHeadCode: "01.04",
//       budgetHeadName: "Other Allowances",
//       proposedAmount: "1200000",
//       availableAmount: "12000",
//       revisedAmount: "0.00",
//     },
//     {
//       srNo: 5,
//       headNo: "02",
//       budgetHead: "Wages",
//       budgetHeadCode: "02.01",
//       budgetHeadName: "Salary",
//       proposedAmount: "344700",
//       availableAmount: "34400",
//       revisedAmount: "0.00",
//     },
//     {
//       srNo: 6,
//       headNo: "",
//       budgetHead: "",
//       budgetHeadCode: "02.02",
//       budgetHeadName: "Dearness Allowance",
//       proposedAmount: "60000",
//       availableAmount: "7000",
//       revisedAmount: "0.00",
//     },
//     {
//       srNo: 7,
//       headNo: "",
//       budgetHead: "",
//       budgetHeadCode: "02.03",
//       budgetHeadName: "Contract Employees' Salary",
//       proposedAmount: "50000",
//       availableAmount: "43000",
//       revisedAmount: "0.00",
//     },
//     {
//       srNo: 8,
//       headNo: "03",
//       budgetHead: "Salary Allowance for All India Service",
//       budgetHeadCode: "03.01",
//       budgetHeadName: "Salary",
//       proposedAmount: "21444500",
//       availableAmount: "21444",
//       revisedAmount: "0.00",
//     },
//     {
//       srNo: 9,
//       headNo: "",
//       budgetHead: "",
//       budgetHeadCode: "03.02",
//       budgetHeadName: "Dearness Allowance",
//       proposedAmount: "21444500",
//       availableAmount: "21444",
//       revisedAmount: "0.00",
//     },
//   ]);

//   // Calculate total for proposed amounts
//   useEffect(() => {
//     const total = budgetData.reduce(
//       (acc, row) => acc + (parseFloat(row.proposedAmount) || 0),
//       0,
//     );
//     setTotalProposed(total);
//   }, [budgetData]);

//   const onRevisedAmountChange = (
//     e: React.ChangeEvent<HTMLInputElement>,
//     rowIndex: number,
//   ) => {
//     const value = e.target.value;
//     setBudgetData((prevData) => {
//       const updatedData = [...prevData];
//       updatedData[rowIndex] = {
//         ...updatedData[rowIndex],
//         revisedAmount: value,
//       };
//       return updatedData;
//     });
//   };
//   const handleSearch = () => setStep(2);
//   const handleClear = () => {
//     setOfficeName(null);
//     setHeadType(null);
//     setStep(1);
//   };

//   // Template for the new Revised Amount column
//   // eslint-disable-next-line @typescript-eslint/no-explicit-any
//   const revisedAmountTemplate = (rowData: UpdateBudgetData, options: any) => {
//     return (
//       <InputText
//         value={rowData.revisedAmount}
//         onChange={(e) => onRevisedAmountChange(e, options.rowIndex)}
//         className="p-inputtext-sm w-full"
//       />
//     );
//   };

//   // Template for Disabled/Read-only amounts
//   const readOnlyAmountTemplate = (value: string) => {
//     return (
//       <InputText
//         value={value}
//         disabled
//         className="p-inputtext-sm w-full bg-gray-100"
//       />
//     );
//   };

//   return (
//     <PageLayout title="Update Proposed Budget">
//       <div className="space-y-6">
//         <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//             <div className="flex flex-col gap-2">
//               <label className="text-sm font-bold text-gray-600">
//                 Proposed Budget Date<span className="text-red-500">*</span>
//               </label>
//               <InputText value="01/04/2024" disabled className="bg-gray-100" />
//             </div>
//             <div className="flex flex-col gap-2">
//               <label className="text-sm font-bold text-gray-600">
//                 Select Head Type<span className="text-red-500">*</span>
//               </label>
//               <Dropdown
//                 value={headType}
//                 options={[{ label: "Expense", value: "Expense" }]}
//                 onChange={(e) => setHeadType(e.value)}
//                 placeholder="Select"
//                 className="w-full border-gray-300"
//               />
//             </div>
//             <div className="flex flex-col gap-2">
//               <label className="text-sm font-bold text-gray-600">
//                 Select Office Name<span className="text-red-500">*</span>
//               </label>
//               <Dropdown
//                 value={officeName}
//                 options={[
//                   {
//                     label: "Directorate of Technical Education (DTE)",
//                     value: "DTE",
//                   },
//                   {
//                     label: "Rajiv Gandhi Proudyogiki Vishwavidyalaya (RGPV)",
//                     value: "RGPV",
//                   },
//                   {
//                     label:
//                       "MP State Skill Development & Employment Generation Board (MPSSDEGB)",
//                     value: "MPSSDEGB",
//                   },
//                   { label: "AICTE Regional Office", value: "AICTE" },
//                 ]}
//                 onChange={(e) => setOfficeName(e.value)}
//                 placeholder="Select"
//                 className="w-full border-gray-300"
//                 filter
//               />
//             </div>
//           </div>
//           <div className="flex justify-center gap-3 mt-8">
//             <Button
//               label="Search"
//               className="px-8"
//               style={{ backgroundColor: "#6366f1" }}
//               onClick={handleSearch}
//             />
//             <Button
//               label="Clear"
//               className="px-8 p-button-danger p-button-outlined"
//               onClick={handleClear}
//             />
//           </div>
//         </div>
//         {step === 2 && (
//           <div className="bg-white p-4 rounded shadow-sm border border-gray-100 animate-fade-in">
//             <h2 className="text-lg font-semibold text-gray-700 mb-4 border-b pb-2">
//               Proposed Budget List
//             </h2>
//             <DataTable value={budgetData} className="p-datatable-sm">
//               <Column field="srNo" header="Sr. No." />
//               <Column field="headNo" header="Head No." />
//               <Column field="budgetHead" header="Budget Head" />
//               <Column field="budgetHeadCode" header="Budget Head Code" />
//               <Column field="budgetHeadName" header="Budget Head Name" />
//               <Column
//                 header="Proposed Budget Amount"
//                 body={(rowData) =>
//                   readOnlyAmountTemplate(rowData.proposedAmount)
//                 }
//               />
//               <Column
//                 header="Available Budget Amount"
//                 body={(rowData) =>
//                   readOnlyAmountTemplate(rowData.availableAmount)
//                 }
//               />
//               <Column
//                 header="Enter Revised Budget Amount"
//                 body={revisedAmountTemplate}
//               />
//             </DataTable>
//             <div className="grid grid-cols-12 items-center mt-4 p-2 bg-gray-50 rounded border">
//               <div className="col-span-8 text-right pr-6 font-bold text-gray-700">
//                 Total
//               </div>
//               <div className="col-span-2">
//                 <span className="text-sm font-bold text-gray-700 px-2">
//                   {totalProposed.toFixed(2)}
//                 </span>
//               </div>
//               <div className="col-span-2 text-center">
//                 <span className="text-sm font-bold text-gray-700">0</span>
//               </div>
//             </div>
//             <div className="flex justify-center gap-3 mt-10">
//               <Button
//                 label="Update"
//                 className="px-10"
//                 style={{ backgroundColor: "#6366f1" }}
//               />
//               <Button
//                 label="Clear"
//                 className="px-10 p-button-danger p-button-outlined"
//                 onClick={handleClear}
//               />
//             </div>
//           </div>
//         )}
//       </div>
//     </PageLayout>
//   );
// };

// export default UpdateProposedBudget;

/* eslint-disable react-hooks/set-state-in-effect */
import React, { useState, useEffect, useRef } from "react";
import PageLayout from "../../../components/PageLayout";
import { Button } from "primereact/button";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Dropdown } from "primereact/dropdown";
import { InputText } from "primereact/inputtext";
import { Toast } from "primereact/toast";

interface UpdateBudgetData {
  srNo: number;
  headNo: string;
  budgetHead: string;
  budgetHeadCode: string;
  budgetHeadName: string;
  proposedAmount: string;
  availableAmount: string;
  revisedAmount: string;
}

const UpdateProposedBudget: React.FC = () => {
  const [step, setStep] = useState(1);
  const [officeName, setOfficeName] = useState<string | null>(null);
  const [headType, setHeadType] = useState<string | null>(null);
  const [totalProposed, setTotalProposed] = useState<number>(0);
  const toast = useRef<Toast>(null);

  const [budgetData, setBudgetData] = useState<UpdateBudgetData[]>([
    {
      srNo: 1,
      headNo: "01",
      budgetHead: "Salary Allowance",
      budgetHeadCode: "01.01",
      budgetHeadName: "Salary Allowance",
      proposedAmount: "21444500",
      availableAmount: "21444",
      revisedAmount: "0.00",
    },
    {
      srNo: 2,
      headNo: "",
      budgetHead: "",
      budgetHeadCode: "01.02",
      budgetHeadName: "Dearness Allowance",
      proposedAmount: "1200890",
      availableAmount: "12008",
      revisedAmount: "0.00",
    },
    {
      srNo: 3,
      headNo: "",
      budgetHead: "",
      budgetHeadCode: "01.03",
      budgetHeadName: "House Rent Allowance",
      proposedAmount: "700000",
      availableAmount: "7000",
      revisedAmount: "0.00",
    },
    {
      srNo: 4,
      headNo: "",
      budgetHead: "",
      budgetHeadCode: "01.04",
      budgetHeadName: "Other Allowances",
      proposedAmount: "1200000",
      availableAmount: "12000",
      revisedAmount: "0.00",
    },
    {
      srNo: 5,
      headNo: "02",
      budgetHead: "Wages",
      budgetHeadCode: "02.01",
      budgetHeadName: "Salary",
      proposedAmount: "344700",
      availableAmount: "34400",
      revisedAmount: "0.00",
    },
    {
      srNo: 6,
      headNo: "",
      budgetHead: "",
      budgetHeadCode: "02.02",
      budgetHeadName: "Dearness Allowance",
      proposedAmount: "60000",
      availableAmount: "7000",
      revisedAmount: "0.00",
    },
    {
      srNo: 7,
      headNo: "",
      budgetHead: "",
      budgetHeadCode: "02.03",
      budgetHeadName: "Contract Employees' Salary",
      proposedAmount: "50000",
      availableAmount: "43000",
      revisedAmount: "0.00",
    },
    {
      srNo: 8,
      headNo: "03",
      budgetHead: "Salary Allowance for All India Service",
      budgetHeadCode: "03.01",
      budgetHeadName: "Salary",
      proposedAmount: "21444500",
      availableAmount: "21444",
      revisedAmount: "0.00",
    },
    {
      srNo: 9,
      headNo: "",
      budgetHead: "",
      budgetHeadCode: "03.02",
      budgetHeadName: "Dearness Allowance",
      proposedAmount: "21444500",
      availableAmount: "21444",
      revisedAmount: "0.00",
    },
  ]);

  // Calculate total for proposed amounts
  useEffect(() => {
    const total = budgetData.reduce(
      (acc, row) => acc + (parseFloat(row.proposedAmount) || 0),
      0,
    );
    setTotalProposed(total);
  }, [budgetData]);

  const onRevisedAmountChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    rowIndex: number,
  ) => {
    const value = e.target.value;
    setBudgetData((prevData) => {
      const updatedData = [...prevData];
      updatedData[rowIndex] = {
        ...updatedData[rowIndex],
        revisedAmount: value,
      };
      return updatedData;
    });
  };

  const handleSearch = () => {
    if (!headType || !officeName) {
      toast.current?.show({
        severity: "error",
        summary: "Error",
        detail: "Please select all mandatory fields marked with *",
        life: 3000,
      });
      return;
    }
    setStep(2);
    toast.current?.show({
      severity: "success",
      summary: "Success",
      detail: "Budget data loaded successfully.",
      life: 3000,
    });
  };

  const handleClear = () => {
    setOfficeName(null);
    setHeadType(null);
    setBudgetData((prev) =>
      prev.map((item) => ({ ...item, revisedAmount: "0.00" }))
    );
    setStep(1);
    toast.current?.show({
      severity: "info",
      summary: "Cleared",
      detail: "Form and filters have been reset.",
      life: 2000,
    });
  };

  const handleUpdate = () => {
    toast.current?.show({
      severity: "success",
      summary: "Updated",
      detail: "Proposed budget revised successfully.",
      life: 3000,
    });
  };

  // Template for the new Revised Amount column
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const revisedAmountTemplate = (rowData: UpdateBudgetData, options: any) => {
    return (
      <InputText
        value={rowData.revisedAmount}
        onChange={(e) => onRevisedAmountChange(e, options.rowIndex)}
        className="p-inputtext-sm w-full"
      />
    );
  };

  // Template for Disabled/Read-only amounts
  const readOnlyAmountTemplate = (value: string) => {
    return (
      <InputText
        value={value}
        disabled
        className="p-inputtext-sm w-full bg-gray-100"
      />
    );
  };

  return (
    <PageLayout title="Update Proposed Budget">
      <Toast ref={toast} />
      <div className="space-y-6">
        {/* TOP SECTION: FILTERS */}
        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex flex-col gap-2">
              <label className="text-sm font-bold text-gray-600">
                Proposed Budget Date<span className="text-red-500">*</span>
              </label>
              <InputText value="01/04/2024" disabled className="bg-gray-100" />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-bold text-gray-600">
                Select Head Type<span className="text-red-500">*</span>
              </label>
              <Dropdown
                value={headType}
                options={[{ label: "Expense", value: "Expense" }]}
                onChange={(e) => setHeadType(e.value)}
                placeholder="Select"
                className="w-full border-gray-300"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-bold text-gray-600">
                Select Office Name<span className="text-red-500">*</span>
              </label>
              <Dropdown
                value={officeName}
                options={[
                  {
                    label: "Directorate of Technical Education (DTE)",
                    value: "DTE",
                  },
                  {
                    label: "Rajiv Gandhi Proudyogiki Vishwavidyalaya (RGPV)",
                    value: "RGPV",
                  },
                  {
                    label: "MPSSDEGB",
                    value: "MPSSDEGB",
                  },
                  { label: "AICTE Regional Office", value: "AICTE" },
                ]}
                onChange={(e) => setOfficeName(e.value)}
                placeholder="Select"
                className="w-full border-gray-300"
                filter
              />
            </div>
          </div>

          {/* Action Buttons Aligned Left */}
          <div className="flex gap-2 mt-8">
            <Button
              label="Search"
              icon="pi pi-search"
              className="p-button-primary px-6"
              onClick={handleSearch}
            />
            <Button
              label="Clear"
              icon="pi pi-refresh"
              className="p-button-outlined p-button-danger px-6"
              onClick={handleClear}
            />
          </div>
        </div>

        {/* BOTTOM SECTION: GRID */}
        {step === 2 && (
          <div className="bg-white p-4 rounded shadow-sm border border-gray-100 animate-fade-in">
            <h2 className="text-lg font-semibold text-gray-700 mb-4 border-b pb-2">
              Proposed Budget List
            </h2>
            <DataTable value={budgetData} className="p-datatable-sm" responsiveLayout="scroll">
              <Column field="srNo" header="Sr. No." style={{ width: '60px' }} />
              <Column field="headNo" header="Head No." style={{ width: '80px' }} />
              <Column field="budgetHead" header="Budget Head" />
              <Column field="budgetHeadCode" header="Budget Head Code" />
              <Column field="budgetHeadName" header="Budget Head Name" />
              <Column
                header="Proposed Budget Amount"
                body={(rowData) =>
                  readOnlyAmountTemplate(rowData.proposedAmount)
                }
              />
              <Column
                header="Available Budget Amount"
                body={(rowData) =>
                  readOnlyAmountTemplate(rowData.availableAmount)
                }
              />
              <Column
                header="Enter Revised Budget Amount"
                body={revisedAmountTemplate}
              />
            </DataTable>

            <div className="grid grid-cols-12 items-center mt-4 p-2 bg-gray-50 rounded border">
              <div className="col-span-8 text-right pr-6 font-bold text-gray-700">
                Total
              </div>
              <div className="col-span-2">
                <span className="text-sm font-bold text-gray-700 px-2">
                  {totalProposed.toLocaleString("en-IN", { minimumFractionDigits: 2 })}
                </span>
              </div>
              <div className="col-span-2 text-center">
                <span className="text-sm font-bold text-gray-700">0.00</span>
              </div>
            </div>

            <div className="flex gap-2 mt-10">
              <Button
                label="Update"
                icon="pi pi-check"
                className="p-button-primary px-10"
                onClick={handleUpdate}
              />
              <Button
                label="Clear Selection"
                icon="pi pi-refresh"
                className="p-button-outlined p-button-danger px-10"
                onClick={handleClear}
              />
            </div>
          </div>
        )}
      </div>
    </PageLayout>
  );
};

export default UpdateProposedBudget;