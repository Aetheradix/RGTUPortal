// import React, { useState } from "react";
// import PageLayout from "../../../components/PageLayout";
// import { Button } from "primereact/button";
// import { DataTable } from "primereact/datatable";
// import { Column } from "primereact/column";
// import { Dropdown } from "primereact/dropdown";
// import { InputText } from "primereact/inputtext";

// interface OfficeLedgerData {
//   srNo: number;
//   ledgerName: string;
//   ledgerCode: string;
//   groupName: string;
//   createOfficeName: string;
// }

// const OfficeWiseLedger: React.FC = () => {
//   const [step, setStep] = useState(1);
//   const [oicType, setOicType] = useState<string | null>(null);
//   const [division, setDivision] = useState<string | null>(null);
//   const [district, setDistrict] = useState<string | null>(null);
//   const [block, setBlock] = useState<string | null>(null);
//   const [university, setUniversity] = useState<string | null>(null);
//   const [college, setCollege] = useState<string | null>(null);
//   const [officeType, setOfficeType] = useState<string | null>(null);
//   const [officeName, setOfficeName] = useState<string | null>(null);

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
//     { label: "Rajiv Gandhi Proudyogiki Vishwavidyalaya (RGPV)", value: "RGPV" },
//   ];
//   const collegeOptions = [
//     { label: "M.L.B. Girls PG College", value: "MLB" },
//     { label: "Satiya College of Education", value: "SCE" },
//   ];
//   const officeTypeOptions = [
//     { label: "Directorate", value: "DIR" },
//     { label: "Regional Office", value: "RO" },
//   ];
//   const officeNameOptions = [
//     { label: "Directorate of Technical Education (DTE)", value: "DTE" },
//     { label: "AICTE Regional Office", value: "AICTE_RO" },
//   ];

//   const ledgerData: OfficeLedgerData[] = [
//     {
//       srNo: 1,
//       ledgerName: "Basic Pay/Special Pay/DA",
//       ledgerCode: "10.01.01",
//       groupName: "Expenses",
//       createOfficeName: "Directorate of Technical Education (DTE)",
//     },
//     {
//       srNo: 2,
//       ledgerName: "Gratuity Premium Payment",
//       ledgerCode: "10.01.02",
//       groupName: "Expenses",
//       createOfficeName: "RGPV",
//     },
//     {
//       srNo: 3,
//       ledgerName: "Gratuity Payment",
//       ledgerCode: "10.01.03",
//       groupName: "Expenses",
//       createOfficeName: "AICTE Regional Office",
//     },
//   ];

//   const handleSearch = () => {
//     if (oicType) setStep(2);
//   };

//   const handleClear = () => {
//     setOicType(null);
//     setDivision(null);
//     setDistrict(null);
//     setBlock(null);
//     setUniversity(null);
//     setCollege(null);
//     setOfficeType(null);
//     setOfficeName(null);
//     setStep(1);
//   };

//   return (
//     <PageLayout title="Office Wise Ledger">
//       <div className="bg-white">
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
//           <div className="flex flex-col gap-2">
//             <label className="text-sm font-bold text-gray-600">
//               Select OIC Type<span className="text-red-500">*</span>
//             </label>
//             <Dropdown
//               value={oicType}
//               options={oicOptions}
//               onChange={(e) => {
//                 setOicType(e.value);
//                 setStep(1);
//               }}
//               placeholder="Select"
//               className="w-full border-gray-300"
//             />
//           </div>

//           {oicType === "University" && (
//             <>
//               <div className="flex flex-col gap-2">
//                 <label className="text-sm font-bold text-gray-600">
//                   Select Division Name<span className="text-red-500">*</span>
//                 </label>
//                 <Dropdown
//                   value={division}
//                   options={divisionOptions}
//                   onChange={(e) => setDivision(e.value)}
//                   placeholder="Select"
//                   className="w-full"
//                 />
//               </div>
//               <div className="flex flex-col gap-2">
//                 <label className="text-sm font-bold text-gray-600">
//                   Select District Name<span className="text-red-500">*</span>
//                 </label>
//                 <Dropdown
//                   value={district}
//                   options={districtOptions}
//                   onChange={(e) => setDistrict(e.value)}
//                   placeholder="Select"
//                   className="w-full"
//                 />
//               </div>
//               <div className="flex flex-col gap-2">
//                 <label className="text-sm font-bold text-gray-600">
//                   Select Block Name<span className="text-red-500">*</span>
//                 </label>
//                 <Dropdown
//                   value={block}
//                   options={blockOptions}
//                   onChange={(e) => setBlock(e.value)}
//                   placeholder="Select"
//                   className="w-full"
//                 />
//               </div>
//               <div className="flex flex-col gap-2">
//                 <label className="text-sm font-bold text-gray-600">
//                   Select University Name<span className="text-red-500">*</span>
//                 </label>
//                 <Dropdown
//                   value={university}
//                   options={universityOptions}
//                   onChange={(e) => setUniversity(e.value)}
//                   placeholder="Select"
//                   className="w-full"
//                 />
//               </div>
//             </>
//           )}

//           {oicType === "College" && (
//             <>
//               <div className="flex flex-col gap-2">
//                 <label className="text-sm font-bold text-gray-600">
//                   Select Division Name<span className="text-red-500">*</span>
//                 </label>
//                 <Dropdown
//                   value={division}
//                   options={divisionOptions}
//                   onChange={(e) => setDivision(e.value)}
//                   placeholder="Select"
//                   className="w-full"
//                 />
//               </div>
//               <div className="flex flex-col gap-2">
//                 <label className="text-sm font-bold text-gray-600">
//                   Select District Name<span className="text-red-500">*</span>
//                 </label>
//                 <Dropdown
//                   value={district}
//                   options={districtOptions}
//                   onChange={(e) => setDistrict(e.value)}
//                   placeholder="Select"
//                   className="w-full"
//                 />
//               </div>
//               <div className="flex flex-col gap-2">
//                 <label className="text-sm font-bold text-gray-600">
//                   Select Block Name<span className="text-red-500">*</span>
//                 </label>
//                 <Dropdown
//                   value={block}
//                   options={blockOptions}
//                   onChange={(e) => setBlock(e.value)}
//                   placeholder="Select"
//                   className="w-full"
//                 />
//               </div>
//               <div className="flex flex-col gap-2">
//                 <label className="text-sm font-bold text-gray-600">
//                   Select University Name<span className="text-red-500">*</span>
//                 </label>
//                 <Dropdown
//                   value={university}
//                   options={universityOptions}
//                   onChange={(e) => setUniversity(e.value)}
//                   placeholder="Select"
//                   className="w-full"
//                 />
//               </div>
//               <div className="flex flex-col gap-2">
//                 <label className="text-sm font-bold text-gray-600">
//                   Select College Name<span className="text-red-500">*</span>
//                 </label>
//                 <Dropdown
//                   value={college}
//                   options={collegeOptions}
//                   onChange={(e) => setCollege(e.value)}
//                   placeholder="Select"
//                   className="w-full"
//                 />
//               </div>
//             </>
//           )}

//           {oicType === "Office" && (
//             <>
//               <div className="flex flex-col gap-2">
//                 <label className="text-sm font-bold text-gray-600">
//                   Select Office Type<span className="text-red-500">*</span>
//                 </label>
//                 <Dropdown
//                   value={officeType}
//                   options={officeTypeOptions}
//                   onChange={(e) => setOfficeType(e.value)}
//                   placeholder="Select"
//                   className="w-full"
//                 />
//               </div>
//               <div className="flex flex-col gap-2">
//                 <label className="text-sm font-bold text-gray-600">
//                   Select Office Name<span className="text-red-500">*</span>
//                 </label>
//                 <Dropdown
//                   value={officeName}
//                   options={officeNameOptions}
//                   onChange={(e) => setOfficeName(e.value)}
//                   placeholder="Select"
//                   className="w-full"
//                 />
//               </div>
//             </>
//           )}
//         </div>

//         <div className="flex justify-center gap-3 mt-8">
//           <Button
//             label="Search"
//             className="px-8"
//             style={{ backgroundColor: "#6366f1" }}
//             onClick={handleSearch}
//           />
//           <Button
//             label="Clear"
//             className="px-8 p-button-danger p-button-outlined"
//             onClick={handleClear}
//           />
//         </div>
//       </div>

//       {step === 2 && (
//         <>
//           <div className="flex justify-between items-center mb-4 text-sm">
//             <div className="flex items-center gap-2"></div>
//             <div className="flex items-center gap-2">
//               <span>Search:</span>
//               <InputText className="p-inputtext-sm" />
//             </div>
//           </div>
//           <DataTable
//             value={ledgerData}
//             className="p-datatable-sm"
//             paginator
//             rows={10}
//           >
//             <Column
//               field="srNo"
//               header="Sr.No."
//               style={{ borderBottom: "1px solid #e5e7eb" }}
//               sortable
//             />
//             <Column
//               field="ledgerName"
//               header="Ledger Name"
//               sortable
//               style={{ borderBottom: "1px solid #e5e7eb" }}
//             />
//             <Column
//               field="ledgerCode"
//               header="Ledger Code"
//               sortable
//               style={{ borderBottom: "1px solid #e5e7eb" }}
//             />
//             <Column
//               field="groupName"
//               header="Group Name"
//               sortable
//               style={{ borderBottom: "1px solid #e5e7eb" }}
//             />
//             <Column
//               field="createOfficeName"
//               header="Create office Name"
//               sortable
//               style={{ borderBottom: "1px solid #e5e7eb" }}
//             />
//             <Column
//               header="Action"
//               style={{ borderBottom: "1px solid #e5e7eb", textAlign: "center" }}
//               body={() => (
//                 <div className="flex gap-2">
//                   <Button
//                     icon="pi pi-eye"
//                     className="p-button-rounded p-button-text p-button-sm p-button-info border"
//                     title="View Details"
//                   />
//                 </div>
//               )}
//             />
//           </DataTable>
//         </>
//       )}
//     </PageLayout>
//   );
// };

// export default OfficeWiseLedger;

import React, { useState, useRef } from "react";
import PageLayout from "../../../components/PageLayout";
import { Button } from "primereact/button";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Dropdown } from "primereact/dropdown";
import { InputText } from "primereact/inputtext";
import { Toast } from "primereact/toast";
import { Dialog } from "primereact/dialog";

interface OfficeLedgerData {
  srNo: number;
  ledgerName: string;
  ledgerCode: string;
  groupName: string;
  createOfficeName: string;
}

const OfficeWiseLedger: React.FC = () => {
  const [step, setStep] = useState(1);
  const [oicType, setOicType] = useState<string | null>(null);
  const [division, setDivision] = useState<string | null>(null);
  const [district, setDistrict] = useState<string | null>(null);
  const [block, setBlock] = useState<string | null>(null);
  const [university, setUniversity] = useState<string | null>(null);
  const [college, setCollege] = useState<string | null>(null);
  const [officeType, setOfficeType] = useState<string | null>(null);
  const [officeName, setOfficeName] = useState<string | null>(null);

  const [showViewDialog, setShowViewDialog] = useState(false);
  const toast = useRef<Toast>(null);

  const oicOptions = [
    { label: "College", value: "College" },
    { label: "Office", value: "Office" },
    { label: "University", value: "University" },
  ];

  const divisionOptions = [{ label: "Bhopal Division", value: "Bhopal" }];
  const districtOptions = [{ label: "Bhopal District", value: "Bhopal_Dist" }];
  const blockOptions = [{ label: "Phanda Block", value: "Phanda" }];
  const universityOptions = [{ label: "RGPV", value: "RGPV" }];
  const collegeOptions = [{ label: "M.L.B. Girls PG College", value: "MLB" }];
  const officeTypeOptions = [{ label: "Directorate", value: "DIR" }];
  const officeNameOptions = [{ label: "DTE", value: "DTE" }];

  const ledgerData: OfficeLedgerData[] = [
    {
      srNo: 1,
      ledgerName: "Basic Pay/Special Pay/DA",
      ledgerCode: "10.01.01",
      groupName: "Expenses",
      createOfficeName: "Directorate of Technical Education (DTE)",
    },
    {
      srNo: 2,
      ledgerName: "Gratuity Premium Payment",
      ledgerCode: "10.01.02",
      groupName: "Expenses",
      createOfficeName: "RGPV",
    },
     {
      srNo: 3,
      ledgerName: "Gratuity Payment",
      ledgerCode: "10.01.03",
      groupName: "Expenses",
      createOfficeName: "AICTE Regional Office",
    },
  ];

  const handleSearch = () => {
    if (oicType) {
      setStep(2);
      toast.current?.show({
        severity: "success",
        summary: "Success",
        detail: "Records loaded",
        life: 3000,
      });
    } else {
      toast.current?.show({
        severity: "error",
        summary: "Required",
        detail: "Please select OIC Type",
        life: 3000,
      });
    }
  };

  const handleClear = () => {
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
      detail: "Filters reset",
      life: 2000,
    });
  };

  const renderViewField = (label: string, value: string) => (
    <div className="flex border border-gray-200">
      <div className="bg-gray-50 p-2 text-xs font-bold border-r border-gray-200 w-1/2 flex items-center">
        {label}
      </div>
      <div className="p-2 text-xs w-1/2 flex items-center text-blue-600 font-medium">
        {value}
      </div>
    </div>
  );

  return (
    <PageLayout title="Office Wise Ledger">
      <Toast ref={toast} />

      <div className="bg-white mb-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="flex flex-col gap-2">
            <label className="text-sm font-bold text-gray-600">
              Select OIC Type<span className="text-red-500">*</span>
            </label>
            <Dropdown
              value={oicType}
              options={oicOptions}
              onChange={(e) => {
                setOicType(e.value);
                setStep(1);
              }}
              placeholder="Select"
              className="w-full"
            />
          </div>

          {oicType === "University" && (
            <>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold text-gray-600">
                  Select Division Name<span className="text-red-500">*</span>
                </label>
                <Dropdown
                  value={division}
                  options={divisionOptions}
                  onChange={(e) => setDivision(e.value)}
                  placeholder="Select"
                  className="w-full"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold text-gray-600">
                  Select District Name<span className="text-red-500">*</span>
                </label>
                <Dropdown
                  value={district}
                  options={districtOptions}
                  onChange={(e) => setDistrict(e.value)}
                  placeholder="Select"
                  className="w-full"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold text-gray-600">
                  Select Block Name<span className="text-red-500">*</span>
                </label>
                <Dropdown
                  value={block}
                  options={blockOptions}
                  onChange={(e) => setBlock(e.value)}
                  placeholder="Select"
                  className="w-full"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold text-gray-600">
                  Select University Name<span className="text-red-500">*</span>
                </label>
                <Dropdown
                  value={university}
                  options={universityOptions}
                  onChange={(e) => setUniversity(e.value)}
                  placeholder="Select"
                  className="w-full"
                />
              </div>
            </>
          )}

          {oicType === "College" && (
            <>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold text-gray-600">
                  Select Division Name<span className="text-red-500">*</span>
                </label>
                <Dropdown
                  value={division}
                  options={divisionOptions}
                  onChange={(e) => setDivision(e.value)}
                  placeholder="Select"
                  className="w-full"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold text-gray-600">
                  Select District Name<span className="text-red-500">*</span>
                </label>
                <Dropdown
                  value={district}
                  options={districtOptions}
                  onChange={(e) => setDistrict(e.value)}
                  placeholder="Select"
                  className="w-full"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold text-gray-600">
                  Select Block Name<span className="text-red-500">*</span>
                </label>
                <Dropdown
                  value={block}
                  options={blockOptions}
                  onChange={(e) => setBlock(e.value)}
                  placeholder="Select"
                  className="w-full"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold text-gray-600">
                  Select University Name<span className="text-red-500">*</span>
                </label>
                <Dropdown
                  value={university}
                  options={universityOptions}
                  onChange={(e) => setUniversity(e.value)}
                  placeholder="Select"
                  className="w-full"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold text-gray-600">
                  Select College Name<span className="text-red-500">*</span>
                </label>
                <Dropdown
                  value={college}
                  options={collegeOptions}
                  onChange={(e) => setCollege(e.value)}
                  placeholder="Select"
                  className="w-full"
                />
              </div>
            </>
          )}

          {oicType === "Office" && (
            <>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold text-gray-600">
                  Select Office Type<span className="text-red-500">*</span>
                </label>
                <Dropdown
                  value={officeType}
                  options={officeTypeOptions}
                  onChange={(e) => setOfficeType(e.value)}
                  placeholder="Select"
                  className="w-full"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold text-gray-600">
                  Select Office Name<span className="text-red-500">*</span>
                </label>
                <Dropdown
                  value={officeName}
                  options={officeNameOptions}
                  onChange={(e) => setOfficeName(e.value)}
                  placeholder="Select"
                  className="w-full"
                />
              </div>
            </>
          )}
        </div>

        <div className="flex gap-2 mt-6">
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

      {step === 2 && (
        <div className="animate">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-md font-semibold text-gray-700">
              Office Wise Ledger List
            </h3>
            <div className="flex items-center gap-2 text-sm">
              <span>Search:</span>
              <InputText
                className="p-inputtext-sm"
                placeholder="Search here..."
              />
            </div>
          </div>

          <DataTable
            value={ledgerData}
            className="p-datatable-sm"
            paginator
            rows={10}
          >
            <Column field="srNo" header="Sr.No."style={{width:"80px"}} sortable />
            <Column field="ledgerName" header="Ledger Name" sortable />
            <Column field="ledgerCode" header="Ledger Code" sortable />
            <Column field="groupName" header="Group Name" sortable />
            <Column
              field="createOfficeName"
              header="Create office Name"
              sortable
            />
            <Column
              header="Action"
              body={() => (
                <Button
                  icon="pi pi-eye"
                  text
                  className="p-button-rounded p-button-info"
                  onClick={() => setShowViewDialog(true)}
                />
              )}
            />
          </DataTable>
        </div>
      )}

      <Dialog
        header="Office Wise Ledger List Details"
        visible={showViewDialog}
        style={{ width: "75vw" }}
        onHide={() => setShowViewDialog(false)}
        modal
      >
        <div className="space-y-6 pt-2">
          <div>
            <h4 className="text-sm font-bold mb-2 border-b pb-1 text-gray-800">
              Ledger Creation
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-3">
              {renderViewField("Ledger Name in English", "Sales Ledger")}
              {renderViewField("Ledger Code", "SL001")}
              {renderViewField("Ledger Alias", "Sales")}
              {renderViewField("Group Name", "Indirect Income")}
              {renderViewField("Ledger Date", "01/01/2024")}
              <div className="border border-gray-200"></div>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-bold mb-2 border-b pb-1 text-gray-800">
              Bank Account Details
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-3">
              {renderViewField("A/c Holder Name", "Nikita Gupta")}
              {renderViewField("Bank Account No.", "85210036974")}
              {renderViewField("IFSC Code", "FRGHB123G")}
              {renderViewField("Bank Name", "Bank of India")}
              {renderViewField("Bank Branch Name", "Connaught Place")}
              <div className="border border-gray-200"></div>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-bold mb-2 border-b pb-1 text-gray-800">
              Mailing Details
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-4">
              {renderViewField("Mailing Name", "Anup Gupta")}
              {renderViewField("State Name", "Madhya Pradesh")}
              {renderViewField("City Name", "Bhopal")}
              {renderViewField("PIN Code", "520064")}
              {renderViewField("Mobile No", "8523697412")}
              {renderViewField("Email ID", "anup12@gmail.com")}
              {renderViewField("Address", "Gandhi Market Bhopal")}
              <div className="border border-gray-200"></div>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-bold mb-2 border-b pb-1 text-gray-800">
              Tax Registration Details
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-3">
              {renderViewField("PAN (IT) No.", "ABCDE1234F")}
              {renderViewField("Registration Types", "Unregistered")}
              {renderViewField("GST No.", "22ABCDE1234Z1Z5")}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-bold mb-2 border-b pb-1 text-gray-800">
              GST Details
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-4">
              {renderViewField("GST Applicable", "Yes")}
              <div className="col-span-1 md:col-span-3 border border-gray-200"></div>
              {renderViewField("GST Applicable From", "12/10/2024")}
              {renderViewField("Is Reverse Charge", "Yes")}
              {renderViewField("Type of Supply", "Goods")}
              {renderViewField("SAC/HSN Code", "852006")}
              {renderViewField("Taxability", "Yes")}
              {renderViewField("Integrated Tax (IGST)", "18%")}
              {renderViewField("Central Tax (CGST)", "9%")}
              {renderViewField("State Tax (SGST)", "9%")}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-bold mb-2 border-b pb-1 text-gray-800">
              Ledger Other Details
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-4">
              {renderViewField("Is Affected Inventory", "Yes")}
              {renderViewField("Is Budget Affected", "No")}
              {renderViewField("Ledger Maintain Type", "Goods")}
              {renderViewField("Maintain Balance Bill By Bill", "Bill By Bill")}
              {renderViewField("Dr./Cr", "Debit")}
              {renderViewField("Opening Balance", "10000")}
              <div className="col-span-1 md:col-span-2 border border-gray-200"></div>
            </div>
          </div>
        </div>
      </Dialog>
    </PageLayout>
  );
};

export default OfficeWiseLedger;
