// import React, { useState } from "react";
// import PageLayout from "../../../components/PageLayout";
// import { Button } from "primereact/button";
// import { DataTable } from "primereact/datatable";
// import { Column } from "primereact/column";
// import { Dropdown } from "primereact/dropdown";

// interface ReportData {
//   id: number;
//   schemeName: string;
//   allocatedBudget: string;
//   beneficiaries: string;
//   status: string;
//   passPercentage: string;
// }

// const VariousLevelReports: React.FC = () => {
//   const [currentStep, setCurrentStep] = useState(1);
//   const [filters, setFilters] = useState({
//     variourLevel: null,
//     region: null,
//     district: null,
//     status: null,
//   });

//   const levelOptions = [
//     { label: "HO (Head Office)", value: "HO" },
//     { label: "JD (Joint Director)", value: "JD" },
//     { label: "District", value: "District" },
//   ];

//   const regionOptions = [
//     { label: "North", value: "North" },
//     { label: "South", value: "South" },
//     { label: "East", value: "East" },
//     { label: "West", value: "West" },
//   ];

//   const districtOptions = [
//     { label: "Bhopal", value: "Bhopal" },
//     { label: "Sehore", value: "Sehore" },
//     { label: "Indore", value: "Indore" },
//     { label: "Raisen", value: "Raisen" },
//   ];

//   const statusOptions = [
//     { label: "On Hold", value: "On Hold" },
//     { label: "Reject", value: "Reject" },
//     { label: "Pending", value: "Pending" },
//     { label: "Completed", value: "Completed" },
//   ];
//   const reportData: ReportData[] = [
//     {
//       id: 1,
//       schemeName: "Diploma Engineering Program",
//       allocatedBudget: "₹1,20,00,000",
//       beneficiaries: "6,000",
//       status: "Completed",
//       passPercentage: "85%",
//     },
//     {
//       id: 2,
//       schemeName: "Advanced Technical Training",
//       allocatedBudget: "₹1,50,00,000",
//       beneficiaries: "7,200",
//       status: "Pending",
//       passPercentage: "88%",
//     },
//     {
//       id: 3,
//       schemeName: "Mechanical Engineering Course",
//       allocatedBudget: "₹95,00,000",
//       beneficiaries: "4,500",
//       status: "Completed",
//       passPercentage: "83%",
//     },
//     {
//       id: 4,
//       schemeName: "IT and Software Development",
//       allocatedBudget: "₹1,10,00,000",
//       beneficiaries: "5,800",
//       status: "Completed",
//       passPercentage: "89%",
//     },
//     {
//       id: 5,
//       schemeName: "Electrical Engineering Program",
//       allocatedBudget: "₹85,00,000",
//       beneficiaries: "4,200",
//       status: "Rejected",
//       passPercentage: "86%",
//     },
//   ];
//   const handleSearch = () => {
//     if (filters.variourLevel) {
//       setCurrentStep(2);
//     } else {
//       alert("Please select Variour Level");
//     }
//   };

//   const handleClear = () => {
//     setFilters({
//       variourLevel: null,
//       region: null,
//       district: null,
//       status: null,
//     });
//     setCurrentStep(1);
//   };

//   return (
//     <PageLayout title="Various Level Reports">
//       <div className="space-y-6">
//         <section>
//           <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-2">
//                 Select Various Level<span className="text-red-500">*</span>
//               </label>
//               <Dropdown
//                 value={filters.variourLevel}
//                 options={levelOptions}
//                 onChange={(e) =>
//                   setFilters({ ...filters, variourLevel: e.value })
//                 }
//                 placeholder="Select"
//                 className="w-full"
//               />
//             </div>
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-2">
//                 Select Region<span className="text-red-500">*</span>
//               </label>
//               <Dropdown
//                 value={filters.region}
//                 options={regionOptions}
//                 onChange={(e) => setFilters({ ...filters, region: e.value })}
//                 placeholder="North"
//                 className="w-full"
//               />
//             </div>
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-2">
//                 Select District Name<span className="text-red-500">*</span>
//               </label>
//               <Dropdown
//                 value={filters.district}
//                 options={districtOptions}
//                 onChange={(e) => setFilters({ ...filters, district: e.value })}
//                 placeholder="Bhopal"
//                 className="w-full"
//               />
//             </div>
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-2">
//                 Select Status<span className="text-red-500">*</span>
//               </label>
//               <Dropdown
//                 value={filters.status}
//                 options={statusOptions}
//                 onChange={(e) => setFilters({ ...filters, status: e.value })}
//                 placeholder="Completed"
//                 className="w-full"
//               />
//             </div>
//           </div>

//           <div className="flex gap-3 mt-8 justify-center pt-4">
//             <Button
//               label="Search"
//               className="bg-indigo-600 border-none px-10 py-2"
//               onClick={handleSearch}
//             />
//             <Button
//               label="Clear"
//               className="bg-red-100 text-red-600 border-none px-10 py-2"
//               onClick={handleClear}
//             />
//           </div>
//         </section>
//         {currentStep === 2 && (
//           <section className="bg-white ">
//             <h3 className="text-lg font-semibold text-gray-800 mb-5">
//               Various Level Reports List
//             </h3>
//             <DataTable
//               value={reportData}
//               className="p-datatable-sm text-sm"
//               paginator
//               rows={10}
//               showGridlines={false}
//             >
//               <Column
//                 field="id"
//                 header="S.No."
//                 sortable
//                 style={{ width: "80px" }}
//               />
//               <Column field="schemeName" header="Scheme Name" sortable />
//               <Column
//                 field="allocatedBudget"
//                 header="Total Allocated Budget"
//                 sortable
//               />
//               <Column
//                 field="beneficiaries"
//                 header="Number of Beneficiaries"
//                 sortable
//               />
//               <Column field="status" header="Status" sortable />
//               <Column
//                 field="passPercentage"
//                 header="Pass Percentage"
//                 sortable
//               />
//             </DataTable>
//           </section>
//         )}
//       </div>
//     </PageLayout>
//   );
// };

// export default VariousLevelReports;


import React, { useState, useRef } from "react";
import PageLayout from "../../../components/PageLayout";
import { Button } from "primereact/button";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Dropdown } from "primereact/dropdown";
import { Toast } from "primereact/toast";

interface ReportData {
  id: number;
  schemeName: string;
  allocatedBudget: string;
  beneficiaries: string;
  status: string;
  passPercentage: string;
}

const VariousLevelReports: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const toast = useRef<Toast>(null); // Initializing Toast ref
  const [filters, setFilters] = useState({
    variourLevel: null,
    region: null,
    district: null,
    status: null,
  });

  const levelOptions = [
    { label: "HO (Head Office)", value: "HO" },
    { label: "JD (Joint Director)", value: "JD" },
    { label: "District", value: "District" },
  ];

  const regionOptions = [
    { label: "North", value: "North" },
    { label: "South", value: "South" },
    { label: "East", value: "East" },
    { label: "West", value: "West" },
  ];

  const districtOptions = [
    { label: "Bhopal", value: "Bhopal" },
    { label: "Sehore", value: "Sehore" },
    { label: "Indore", value: "Indore" },
    { label: "Raisen", value: "Raisen" },
  ];

  const statusOptions = [
    { label: "On Hold", value: "On Hold" },
    { label: "Reject", value: "Reject" },
    { label: "Pending", value: "Pending" },
    { label: "Completed", value: "Completed" },
  ];

  const reportData: ReportData[] = [
    {
      id: 1,
      schemeName: "Diploma Engineering Program",
      allocatedBudget: "₹1,20,00,000",
      beneficiaries: "6,000",
      status: "Completed",
      passPercentage: "85%",
    },
    {
      id: 2,
      schemeName: "Advanced Technical Training",
      allocatedBudget: "₹1,50,00,000",
      beneficiaries: "7,200",
      status: "Pending",
      passPercentage: "88%",
    },
    {
      id: 3,
      schemeName: "Mechanical Engineering Course",
      allocatedBudget: "₹95,00,000",
      beneficiaries: "4,500",
      status: "Completed",
      passPercentage: "83%",
    },
    {
      id: 4,
      schemeName: "IT and Software Development",
      allocatedBudget: "₹1,10,00,000",
      beneficiaries: "5,800",
      status: "Completed",
      passPercentage: "89%",
    },
    {
      id: 5,
      schemeName: "Electrical Engineering Program",
      allocatedBudget: "₹85,00,000",
      beneficiaries: "4,200",
      status: "Rejected",
      passPercentage: "86%",
    },
  ];

  const handleSearch = () => {
    if (filters.variourLevel) {
      setCurrentStep(2);
      toast.current?.show({
        severity: "success",
        summary: "Search Successful",
        detail: "Reports list updated based on filters.",
        life: 3000,
      });
    } else {
      toast.current?.show({
        severity: "error",
        summary: "Error",
        detail: "Please select Various Level",
        life: 3000,
      });
    }
  };

  const handleClear = () => {
    setFilters({
      variourLevel: null,
      region: null,
      district: null,
      status: null,
    });
    setCurrentStep(1);
    toast.current?.show({
      severity: "info",
      summary: "Filters Cleared",
      detail: "Selection has been reset.",
      life: 2000,
    });
  };

  return (
    <PageLayout title="Various Level Reports">
      <Toast ref={toast} /> {/* Toast container added */}
      <div className="space-y-6">
        <section>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Select Various Level<span className="text-red-500">*</span>
              </label>
              <Dropdown
                value={filters.variourLevel}
                options={levelOptions}
                onChange={(e) =>
                  setFilters({ ...filters, variourLevel: e.value })
                }
                placeholder="Select"
                className="w-full"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Select Region<span className="text-red-500">*</span>
              </label>
              <Dropdown
                value={filters.region}
                options={regionOptions}
                onChange={(e) => setFilters({ ...filters, region: e.value })}
                placeholder="North"
                className="w-full"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Select District Name<span className="text-red-500">*</span>
              </label>
              <Dropdown
                value={filters.district}
                options={districtOptions}
                onChange={(e) => setFilters({ ...filters, district: e.value })}
                placeholder="Bhopal"
                className="w-full"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Select Status<span className="text-red-500">*</span>
              </label>
              <Dropdown
                value={filters.status}
                options={statusOptions}
                onChange={(e) => setFilters({ ...filters, status: e.value })}
                placeholder="Completed"
                className="w-full"
              />
            </div>
          </div>

          {/* Updated: Buttons aligned to the left using flex gap-3 */}
          <div className="flex gap-3 mt-8">
            <Button
              label="Search"
              icon="pi pi-search"
              className="p-button-primary px-6"
              onClick={handleSearch}
            />
            <Button
              label="Clear"
              icon="pi pi-refresh"
              className="p-button-outlined px-6"
              onClick={handleClear}
            />
          </div>
        </section>

        {currentStep === 2 && (
          <section className="bg-white animate-fade-in">
            <h3 className="text-lg font-semibold text-gray-800 mb-5 border-t pt-6">
              Various Level Reports List
            </h3>
            <DataTable
              value={reportData}
              className="p-datatable-sm text-sm"
              paginator
              rows={10}
              responsiveLayout="scroll"
            >
              <Column
                field="id"
                header="S.No."
                sortable
                style={{ width: "80px" }}
              />
              <Column field="schemeName" header="Scheme Name" sortable />
              <Column
                field="allocatedBudget"
                header="Total Allocated Budget"
                sortable
              />
              <Column
                field="beneficiaries"
                header="Number of Beneficiaries"
                sortable
              />
              <Column field="status" header="Status" sortable />
              <Column
                field="passPercentage"
                header="Pass Percentage"
                sortable
              />
            </DataTable>
          </section>
        )}
      </div>
    </PageLayout>
  );
};

export default VariousLevelReports;