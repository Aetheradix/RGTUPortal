// import React, { useState } from "react";
// import PageLayout from "../../../components/PageLayout";
// import { Button } from "primereact/button";
// import { DataTable } from "primereact/datatable";
// import { Column } from "primereact/column";
// import { Dropdown } from "primereact/dropdown";
// import { InputText } from "primereact/inputtext";

// interface DemandStatusData {
//   srNo: number;
//   headType: string;
//   budgetHeadName: string;
//   budgetRequestDate: string;
//   budgetAmount: string;
//   status: string;
// }

// const DemandStatusDetails: React.FC = () => {
//   const [step, setStep] = useState(1);

//   // New Filter States
//   const [financialYear, setFinancialYear] = useState<string | null>(null);
//   const [month, setMonth] = useState<string | null>(null);
//   const [headType, setHeadType] = useState<string | null>(null);

//   // OIC Dynamic dropdown
//   const [oicType, setOicType] = useState<string | null>(null);
//   const [division, setDivision] = useState<string | null>(null);
//   const [district, setDistrict] = useState<string | null>(null);
//   const [block, setBlock] = useState<string | null>(null);
//   const [university, setUniversity] = useState<string | null>(null);
//   const [college, setCollege] = useState<string | null>(null);
//   const [officeType, setOfficeType] = useState<string | null>(null);
//   const [officeName, setOfficeName] = useState<string | null>(null);

//   //options
//   const financialYearOptions = [
//     { label: "2024-2025", value: "2024-2025" },
//     { label: "2023-2024", value: "2023-2024" },
//     { label: "2022-2023", value: "2022-2023" },
//     { label: "2021-2022", value: "2021-2022" },
//     { label: "2020-2021", value: "2020-2021" },
//   ];
//   const monthOptions = [
//     { label: "January", value: "Jan" },
//     { label: "February", value: "Feb" },
//     { label: "March", value: "Mar" },
//     { label: "April", value: "April" },
//     { label: "May", value: "May" },
//     { label: "June", value: "June" },
//     { label: "July", value: "July" },
//   ];
//   const headTypeOptions = [
//     { label: "Expenses", value: "Expenses" },
//     { label: "Income", value: "Income" },
//   ];

//   const oicOptions = [
//     { label: "College", value: "College" },
//     { label: "Office", value: "Office" },
//     { label: "University", value: "University" },
//   ];

//   const divisionOptions = [{ label: "Bhopal Division", value: "Bhopal" }];
//   const districtOptions = [{ label: "Bhopal District", value: "Bhopal_Dist" }];
//   const blockOptions = [
//     { label: "Phanda Block", value: "Phanda" },
//     { label: "Berasia Block", value: "Berasia" },
//   ];
//   const universityOptions = [
//     { label: "Barkatullah University (BU)", value: "BU" },
//   ];
//   const collegeOptions = [{ label: "M.L.B. Girls PG College", value: "MLB" }];
//   const officeTypeOptions = [{ label: "Directorate", value: "DIR" }];
//   const officeNameOptions = [
//     { label: "Directorate of Technical Education (DTE)", value: "DTE" },
//   ];

//   // Table Data
//   const demandData: DemandStatusData[] = [
//     {
//       srNo: 1,
//       headType: "Expenses",
//       budgetHeadName: "Basic Pay/Special Pay/Dearness Allowance",
//       budgetRequestDate: "05-01-2023",
//       budgetAmount: "543000.00",
//       status: "Approve",
//     },
//     {
//       srNo: 2,
//       headType: "Expenses",
//       budgetHeadName: "Medical Expense Reimbursement",
//       budgetRequestDate: "04-04-2023",
//       budgetAmount: "100054.00",
//       status: "Pending",
//     },
//     {
//       srNo: 3,
//       headType: "Expenses",
//       budgetHeadName: "Stationery, Font Copy, Bidding",
//       budgetRequestDate: "01-05-2023",
//       budgetAmount: "1000.00",
//       status: "Approve",
//     },
//   ];

//   const handleSearch = () => {
//     setStep(2);
//   };

//   const handleClear = () => {
//     setFinancialYear(null);
//     setMonth(null);
//     setHeadType(null);
//     setOicType(null);
//     setStep(1);
//   };

//   return (
//     <PageLayout title="Demand Status Details">
//       <div className="bg-white">
//         <h2 className="text-lg font-semibold text-gray-700 mb-6 pb-2 border-b">
//           Demand Status Details
//         </h2>
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
//           <div className="flex flex-col gap-1">
//             <label className="text-xs font-bold text-gray-600">
//               Select Financial Year<span className="text-red-500">*</span>
//             </label>
//             <Dropdown
//               value={financialYear}
//               options={financialYearOptions}
//               onChange={(e) => setFinancialYear(e.value)}
//               placeholder="Select"
//               className="p-inputtext-sm w-full"
//             />
//           </div>
//           <div className="flex flex-col gap-1">
//             <label className="text-xs font-bold text-gray-600">
//               Select Month<span className="text-red-500">*</span>
//             </label>
//             <Dropdown
//               value={month}
//               options={monthOptions}
//               onChange={(e) => setMonth(e.value)}
//               placeholder="Select"
//               className="p-inputtext-sm w-full"
//             />
//           </div>
//           <div className="flex flex-col gap-1">
//             <label className="text-xs font-bold text-gray-600">
//               Select Head Type<span className="text-red-500">*</span>
//             </label>
//             <Dropdown
//               value={headType}
//               options={headTypeOptions}
//               onChange={(e) => setHeadType(e.value)}
//               placeholder="Select"
//               className="p-inputtext-sm w-full"
//             />
//           </div>
//           <div className="flex flex-col gap-1">
//             <label className="text-xs font-bold text-gray-600">
//               Select OIC Type<span className="text-red-500">*</span>
//             </label>
//             <Dropdown
//               value={oicType}
//               options={oicOptions}
//               onChange={(e) => setOicType(e.value)}
//               placeholder="Select"
//               className="p-inputtext-sm w-full"
//             />
//           </div>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
//           {oicType === "University" && (
//             <>
//               <div className="flex flex-col gap-1">
//                 <label className="text-xs font-bold text-gray-600">
//                   Select Division Name<span className="text-red-500">*</span>
//                 </label>
//                 <Dropdown
//                   value={division}
//                   options={divisionOptions}
//                   onChange={(e) => setDivision(e.value)}
//                   placeholder="Select"
//                   className="p-inputtext-sm"
//                 />
//               </div>
//               <div className="flex flex-col gap-1">
//                 <label className="text-xs font-bold text-gray-600">
//                   Select District Name<span className="text-red-500">*</span>
//                 </label>
//                 <Dropdown
//                   value={district}
//                   options={districtOptions}
//                   onChange={(e) => setDistrict(e.value)}
//                   placeholder="Select"
//                   className="p-inputtext-sm"
//                 />
//               </div>
//               <div className="flex flex-col gap-1">
//                 <label className="text-xs font-bold text-gray-600">
//                   Select Block Name<span className="text-red-500">*</span>
//                 </label>
//                 <Dropdown
//                   value={block}
//                   options={blockOptions}
//                   onChange={(e) => setBlock(e.value)}
//                   placeholder="Select"
//                   className="p-inputtext-sm"
//                 />
//               </div>
//               <div className="flex flex-col gap-1">
//                 <label className="text-xs font-bold text-gray-600">
//                   Select University Name<span className="text-red-500">*</span>
//                 </label>
//                 <Dropdown
//                   value={university}
//                   options={universityOptions}
//                   onChange={(e) => setUniversity(e.value)}
//                   placeholder="Select"
//                   className="p-inputtext-sm"
//                 />
//               </div>
//             </>
//           )}

//           {oicType === "College" && (
//             <>
//               <div className="flex flex-col gap-1">
//                 <label className="text-xs font-bold text-gray-600">
//                   Select Division Name<span className="text-red-500">*</span>
//                 </label>
//                 <Dropdown
//                   value={division}
//                   options={divisionOptions}
//                   onChange={(e) => setDivision(e.value)}
//                   placeholder="Select"
//                   className="p-inputtext-sm"
//                 />
//               </div>
//               <div className="flex flex-col gap-1">
//                 <label className="text-xs font-bold text-gray-600">
//                   Select District Name<span className="text-red-500">*</span>
//                 </label>
//                 <Dropdown
//                   value={district}
//                   options={districtOptions}
//                   onChange={(e) => setDistrict(e.value)}
//                   placeholder="Select"
//                   className="p-inputtext-sm"
//                 />
//               </div>
//               <div className="flex flex-col gap-1">
//                 <label className="text-xs font-bold text-gray-600">
//                   Select Block Name<span className="text-red-500">*</span>
//                 </label>
//                 <Dropdown
//                   value={block}
//                   options={blockOptions}
//                   onChange={(e) => setBlock(e.value)}
//                   placeholder="Select"
//                   className="p-inputtext-sm"
//                 />
//               </div>
//               <div className="flex flex-col gap-1">
//                 <label className="text-xs font-bold text-gray-600">
//                   Select University Name<span className="text-red-500">*</span>
//                 </label>
//                 <Dropdown
//                   value={university}
//                   options={universityOptions}
//                   onChange={(e) => setUniversity(e.value)}
//                   placeholder="Select"
//                   className="p-inputtext-sm"
//                 />
//               </div>
//               <div className="flex flex-col gap-1">
//                 <label className="text-xs font-bold text-gray-600">
//                   Select College Name<span className="text-red-500">*</span>
//                 </label>
//                 <Dropdown
//                   value={college}
//                   options={collegeOptions}
//                   onChange={(e) => setCollege(e.value)}
//                   placeholder="Select"
//                   className="p-inputtext-sm"
//                 />
//               </div>
//             </>
//           )}

//           {oicType === "Office" && (
//             <>
//               <div className="flex flex-col gap-1">
//                 <label className="text-xs font-bold text-gray-600">
//                   Select Office Type<span className="text-red-500">*</span>
//                 </label>
//                 <Dropdown
//                   value={officeType}
//                   options={officeTypeOptions}
//                   onChange={(e) => setOfficeType(e.value)}
//                   placeholder="Select"
//                   className="p-inputtext-sm"
//                 />
//               </div>
//               <div className="flex flex-col gap-1">
//                 <label className="text-xs font-bold text-gray-600">
//                   Select Office Name<span className="text-red-500">*</span>
//                 </label>
//                 <Dropdown
//                   value={officeName}
//                   options={officeNameOptions}
//                   onChange={(e) => setOfficeName(e.value)}
//                   placeholder="Select"
//                   className="p-inputtext-sm"
//                 />
//               </div>
//             </>
//           )}
//         </div>

//         <div className="flex justify-center gap-3 mt-8">
//           <Button
//             label="Search"
//             icon="pi pi-search"
//             className="p-button-sm px-8"
//             style={{ backgroundColor: "#6366f1" }}
//             onClick={handleSearch}
//           />
//           <Button
//             label="Clear"
//             icon="pi pi-refresh"
//             className="p-button-sm px-8 p-button-danger p-button-outlined"
//             onClick={handleClear}
//           />
//         </div>
//       </div>

//       {step === 2 && (
//         <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 mt-6">
//           <div className="flex justify-between items-center mb-4">
//             <h3 className="text-md font-bold text-gray-700">
//               Group Management List
//             </h3>
//             <div className="flex items-center gap-2">
//               <span className="text-sm">Search:</span>
//               <InputText className="p-inputtext-sm w-48" />
//             </div>
//           </div>

//           <DataTable
//             value={demandData}
//             className="p-datatable-sm"
//             paginator
//             rows={10}
//             showGridlines
//           >
//             <Column field="srNo" header="Sr. No." sortable />
//             <Column field="headType" header="Head Type" sortable />
//             <Column field="budgetHeadName" header="Budget Head Name" sortable />
//             <Column
//               field="budgetRequestDate"
//               header="Budget Request Date"
//               sortable
//             />
//             <Column field="budgetAmount" header="Budget Amount" sortable />
//             <Column
//               field="status"
//               header="Status"
//               body={(data) => (
//                 <span
//                   className={`px-2 py-1 rounded text-xs font-bold ${
//                     data.status === "Approve"
//                       ? "bg-green-100 text-green-600"
//                       : "bg-red-100 text-red-600"
//                   }`}
//                 >
//                   {data.status}
//                 </span>
//               )}
//             />
//           </DataTable>

//           <div className="flex justify-between p-3 bg-gray-50 border-x border-b font-bold text-sm">
//             <span>Total</span>
//             <span className="mr-32">653054.00</span>
//           </div>
//         </div>
//       )}
//     </PageLayout>
//   );
// };

// export default DemandStatusDetails;

import React, { useState, useRef } from "react";
import PageLayout from "../../../components/PageLayout";
import { Button } from "primereact/button";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Dropdown } from "primereact/dropdown";
import { InputText } from "primereact/inputtext";
import { Toast } from "primereact/toast";

interface DemandStatusData {
  srNo: number;
  headType: string;
  budgetHeadName: string;
  budgetRequestDate: string;
  budgetAmount: string;
  status: string;
}

const DemandStatusDetails: React.FC = () => {
  const [step, setStep] = useState(1);
  const toast = useRef<Toast>(null);

  // New Filter States
  const [financialYear, setFinancialYear] = useState<string | null>(null);
  const [month, setMonth] = useState<string | null>(null);
  const [headType, setHeadType] = useState<string | null>(null);

  // OIC Dynamic dropdown
  const [oicType, setOicType] = useState<string | null>(null);
  const [division, setDivision] = useState<string | null>(null);
  const [district, setDistrict] = useState<string | null>(null);
  const [block, setBlock] = useState<string | null>(null);
  const [university, setUniversity] = useState<string | null>(null);
  const [college, setCollege] = useState<string | null>(null);
  const [officeType, setOfficeType] = useState<string | null>(null);
  const [officeName, setOfficeName] = useState<string | null>(null);

  //options
  const financialYearOptions = [
    { label: "2024-2025", value: "2024-2025" },
    { label: "2023-2024", value: "2023-2024" },
    { label: "2022-2023", value: "2022-2023" },
    { label: "2021-2022", value: "2021-2022" },
    { label: "2020-2021", value: "2020-2021" },
  ];
  const monthOptions = [
    { label: "January", value: "Jan" },
    { label: "February", value: "Feb" },
    { label: "March", value: "Mar" },
    { label: "April", value: "April" },
    { label: "May", value: "May" },
    { label: "June", value: "June" },
    { label: "July", value: "July" },
  ];
  const headTypeOptions = [
    { label: "Expenses", value: "Expenses" },
    { label: "Income", value: "Income" },
  ];

  const oicOptions = [
    { label: "College", value: "College" },
    { label: "Office", value: "Office" },
    { label: "University", value: "University" },
  ];

  const divisionOptions = [{ label: "Bhopal Division", value: "Bhopal" }];
  const districtOptions = [{ label: "Bhopal District", value: "Bhopal_Dist" }];
  const blockOptions = [
    { label: "Phanda Block", value: "Phanda" },
    { label: "Berasia Block", value: "Berasia" },
  ];
  const universityOptions = [
    { label: "Barkatullah University (BU)", value: "BU" },
  ];
  const collegeOptions = [{ label: "M.L.B. Girls PG College", value: "MLB" }];
  const officeTypeOptions = [{ label: "Directorate", value: "DIR" }];
  const officeNameOptions = [
    { label: "Directorate of Technical Education (DTE)", value: "DTE" },
  ];

  // Table Data
  const demandData: DemandStatusData[] = [
    {
      srNo: 1,
      headType: "Expenses",
      budgetHeadName: "Basic Pay/Special Pay/Dearness Allowance",
      budgetRequestDate: "05-01-2023",
      budgetAmount: "543000.00",
      status: "Approve",
    },
    {
      srNo: 2,
      headType: "Expenses",
      budgetHeadName: "Medical Expense Reimbursement",
      budgetRequestDate: "04-04-2023",
      budgetAmount: "100054.00",
      status: "Pending",
    },
    {
      srNo: 3,
      headType: "Expenses",
      budgetHeadName: "Stationery, Font Copy, Bidding",
      budgetRequestDate: "01-05-2023",
      budgetAmount: "1000.00",
      status: "Approve",
    },
  ];

  const handleSearch = () => {
    if (financialYear && month && headType && oicType) {
      setStep(2);
      toast.current?.show({
        severity: "success",
        summary: "Search Successful",
        detail: "Demand status details updated.",
        life: 3000,
      });
    } else {
      toast.current?.show({
        severity: "error",
        summary: "Error",
        detail: "Please fill all mandatory fields marked with *",
        life: 3000,
      });
    }
  };

  const handleClear = () => {
    setFinancialYear(null);
    setMonth(null);
    setHeadType(null);
    setOicType(null);
    setDivision(null);
    setDistrict(null);
    setBlock(null);
    setUniversity(null);
    setCollege(null);
    setOfficeType(null);
    setOfficeName(null);
    setStep(1);
    toast.current?.show({
      severity: "info",
      summary: "Cleared",
      detail: "Form and filters have been reset.",
      life: 2000,
    });
  };

  return (
    <PageLayout title="Demand Status Details">
      <Toast ref={toast} />
      <div className="bg-white p-4 rounded-lg shadow-md border border-gray-100">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
          <div className="flex flex-col gap-1">
            <label className="text-sm font-bold text-gray-600">
              Select Financial Year<span className="text-red-500">*</span>
            </label>
            <Dropdown
              value={financialYear}
              options={financialYearOptions}
              onChange={(e) => setFinancialYear(e.value)}
              placeholder="Select"
              className="p-inputtext-sm w-full border-gray-300"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-sm font-bold text-gray-600">
              Select Month<span className="text-red-500">*</span>
            </label>
            <Dropdown
              value={month}
              options={monthOptions}
              onChange={(e) => setMonth(e.value)}
              placeholder="Select"
              className="p-inputtext-sm w-full border-gray-300"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-sm font-bold text-gray-600">
              Select Head Type<span className="text-red-500">*</span>
            </label>
            <Dropdown
              value={headType}
              options={headTypeOptions}
              onChange={(e) => setHeadType(e.value)}
              placeholder="Select"
              className="p-inputtext-sm w-full border-gray-300"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-sm font-bold text-gray-600">
              Select OIC Type<span className="text-red-500">*</span>
            </label>
            <Dropdown
              value={oicType}
              options={oicOptions}
              onChange={(e) => setOicType(e.value)}
              placeholder="Select"
              className="p-inputtext-sm w-full border-gray-300"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {oicType === "University" && (
            <>
              <div className="flex flex-col gap-1">
                <label className="text-sm font-bold text-gray-600">
                  Select Division Name<span className="text-red-500">*</span>
                </label>
                <Dropdown
                  value={division}
                  options={divisionOptions}
                  onChange={(e) => setDivision(e.value)}
                  placeholder="Select"
                  className="p-inputtext-sm w-full border-gray-300"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-sm font-bold text-gray-600">
                  Select District Name<span className="text-red-500">*</span>
                </label>
                <Dropdown
                  value={district}
                  options={districtOptions}
                  onChange={(e) => setDistrict(e.value)}
                  placeholder="Select"
                  className="p-inputtext-sm w-full border-gray-300"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-sm font-bold text-gray-600">
                  Select Block Name<span className="text-red-500">*</span>
                </label>
                <Dropdown
                  value={block}
                  options={blockOptions}
                  onChange={(e) => setBlock(e.value)}
                  placeholder="Select"
                  className="p-inputtext-sm w-full border-gray-300"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-sm font-bold text-gray-600">
                  Select University Name<span className="text-red-500">*</span>
                </label>
                <Dropdown
                  value={university}
                  options={universityOptions}
                  onChange={(e) => setUniversity(e.value)}
                  placeholder="Select"
                  className="p-inputtext-sm w-full border-gray-300"
                />
              </div>
            </>
          )}

          {oicType === "College" && (
            <>
              <div className="flex flex-col gap-1">
                <label className="text-sm font-bold text-gray-600">
                  Select Division Name<span className="text-red-500">*</span>
                </label>
                <Dropdown
                  value={division}
                  options={divisionOptions}
                  onChange={(e) => setDivision(e.value)}
                  placeholder="Select"
                  className="p-inputtext-sm w-full border-gray-300"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-sm font-bold text-gray-600">
                  Select District Name<span className="text-red-500">*</span>
                </label>
                <Dropdown
                  value={district}
                  options={districtOptions}
                  onChange={(e) => setDistrict(e.value)}
                  placeholder="Select"
                  className="p-inputtext-sm w-full border-gray-300"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-sm font-bold text-gray-600">
                  Select Block Name<span className="text-red-500">*</span>
                </label>
                <Dropdown
                  value={block}
                  options={blockOptions}
                  onChange={(e) => setBlock(e.value)}
                  placeholder="Select"
                  className="p-inputtext-sm w-full border-gray-300"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-sm font-bold text-gray-600">
                  Select University Name<span className="text-red-500">*</span>
                </label>
                <Dropdown
                  value={university}
                  options={universityOptions}
                  onChange={(e) => setUniversity(e.value)}
                  placeholder="Select"
                  className="p-inputtext-sm w-full border-gray-300"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-sm font-bold text-gray-600">
                  Select College Name<span className="text-red-500">*</span>
                </label>
                <Dropdown
                  value={college}
                  options={collegeOptions}
                  onChange={(e) => setCollege(e.value)}
                  placeholder="Select"
                  className="p-inputtext-sm w-full border-gray-300"
                />
              </div>
            </>
          )}

          {oicType === "Office" && (
            <>
              <div className="flex flex-col gap-1">
                <label className="text-sm font-bold text-gray-600">
                  Select Office Type<span className="text-red-500">*</span>
                </label>
                <Dropdown
                  value={officeType}
                  options={officeTypeOptions}
                  onChange={(e) => setOfficeType(e.value)}
                  placeholder="Select"
                  className="p-inputtext-sm w-full border-gray-300"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-sm font-bold text-gray-600">
                  Select Office Name<span className="text-red-500">*</span>
                </label>
                <Dropdown
                  value={officeName}
                  options={officeNameOptions}
                  onChange={(e) => setOfficeName(e.value)}
                  placeholder="Select"
                  className="p-inputtext-sm w-full border-gray-300"
                />
              </div>
            </>
          )}
        </div>

        {/* Updated Button Bar: Left-aligned and Styled */}
        <div className="flex gap-3 mt-8">
          <Button
            label="Search"
            icon="pi pi-search"
            className="p-button-primary px-8"
            onClick={handleSearch}
          />
          <Button
            label="Clear"
            icon="pi pi-refresh"
            className="p-button-outlined p-button-danger px-8"
            onClick={handleClear}
          />
        </div>
      </div>

      {step === 2 && (
        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 mt-6 animate-fade-in">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-md font-bold text-gray-700">
              Demand Status List
            </h3>
            <div className="flex items-center gap-2">
              <span className="text-sm">Search:</span>
              <InputText className="p-inputtext-sm w-48 border-gray-300" />
            </div>
          </div>

          <DataTable
            value={demandData}
            className="p-datatable-sm"
            paginator
            rows={10}
            showGridlines
            responsiveLayout="scroll"
          >
            <Column
              field="srNo"
              header="Sr. No."
              sortable
              style={{ width: "5rem" }}
            />
            <Column field="headType" header="Head Type" sortable />
            <Column field="budgetHeadName" header="Budget Head Name" sortable />
            <Column
              field="budgetRequestDate"
              header="Budget Request Date"
              sortable
            />
            <Column field="budgetAmount" header="Budget Amount" sortable />
            <Column
              field="status"
              header="Status"
              body={(data) => (
                <span
                  className={`px-2 py-1 rounded text-xs font-bold ${
                    data.status === "Approve"
                      ? "bg-green-100 text-green-600"
                      : "bg-orange-100 text-orange-600"
                  }`}
                >
                  {data.status}
                </span>
              )}
              sortable
            />
          </DataTable>

          <div className="flex justify-between p-3 bg-gray-50 border-x border-b font-bold text-sm">
            <span>Total Demand Amount</span>
            <span className="mr-32 text-blue-700">653,054.00</span>
          </div>
        </div>
      )}
    </PageLayout>
  );
};

export default DemandStatusDetails;
