import React, { useState } from "react";
import PageLayout from "../../../components/PageLayout";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import { Checkbox } from "primereact/checkbox";
import {  Input, Table, type TableColumn } from "../../../ui/shared";

interface StatusReportRow {
  district: string;
  block: string;
  proposalNo: string;
  proposalDate: string;
  priorityType: string;
  workType: string;
  constructionWorkType: string;
  agencyName: string;
  agencyContactPerson: string;
  agencyContactNo: string;
  estimatedCost: string;
  estimatedDay: string;
  workStatus: "Approved" | "Pending" | "Reject" | "Request Forwarded";
  completionStatus: string;
}

const ConstructionWorkStatus: React.FC = () => {
  const [showDetails, setShowDetails] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const [selectedFilters, setSelectedFilters] = useState({
    workType: ["All","New Construction", "Maintenance"],
    workStatus: ["All","Pending", "Approved", "Reject", "Request Forwarded"],
   district: ["All","Agar Malwa", "Alirajpur", "Anuppur", "Ashoknagar", "Balaghat", "Barwani", "Betul"],
    block: ["All","Agar", "Ajaigarh", "Alirajpur", "Alot", "Amarpatan", "Amarpur", "Amarwada"],
  
  });

  const filterOptions = {
    workType: ["All","New Construction", "Maintenance"],
    workStatus: ["All","Pending", "Approved", "Reject", "Request Forwarded"],
    district: ["All","Agar Malwa", "Alirajpur", "Anuppur", "Ashoknagar", "Balaghat", "Barwani", "Betul"],
    block: ["All","Agar", "Ajaigarh", "Alirajpur", "Alot", "Amarpatan", "Amarpur", "Amarwada"],
  };

  const handleCheckboxChange = (category: string, value: string) => {
    const current = [...selectedFilters[category as keyof typeof selectedFilters]];
    if (current.includes(value)) {
      setSelectedFilters({ ...selectedFilters, [category]: current.filter((v) => v !== value) });
    } else {
      setSelectedFilters({ ...selectedFilters, [category]: [...current, value] });
    }
  };

  const tableData: StatusReportRow[] = [
    {
      district: "Bhopal",
      block: "Phanda URBAN- New City",
      proposalNo: "250820233203ODS01003",
      proposalDate: "20/08/2025",
      priorityType: "General Requirement",
      workType: "New Construction",
      constructionWorkType: "Construction of Office Building",
      agencyName: "JEEVAN CONSTRUCTION",
      agencyContactPerson: "JEEVAN",
      agencyContactNo: "89989898989",
      estimatedCost: "5000.00",
      estimatedDay: "10",
      workStatus: "Approved",
      completionStatus: "Work In Progress",
    },
  ];

  const columns: TableColumn[] = [
    { field: "district", header: "District" },
    { field: "block", header: "Block" },
    { field: "proposalNo", header: "Proposal No." },
    { field: "proposalDate", header: "Proposal Date" },
    { field: "priorityType", header: "Priority Type" },
    { field: "workType", header: "Work Type" },
    { field: "constructionWorkType", header: "Construction Work Type" },
    { field: "agencyName", header: "Agency Name" },
    { field: "agencyContactPerson", header: "Agency Contact Person" },
    { field: "agencyContactNo", header: "Agency Contact No." },
    { field: "estimatedCost", header: "Estimated Cost (₹)" },
    { field: "estimatedDay", header: "Estimated Day" },
    {
      field: "workStatus",
      header: "Work Status",
      body: (rowData: StatusReportRow) => (
        <span className={`font-bold ${rowData.workStatus === "Approved" ? "text-green-500" : "text-orange-400"}`}>
          {rowData.workStatus}
        </span>
      ),
    },
    {
      field: "completionStatus",
      header: "Work Completion Status",
      body: (rowData: StatusReportRow) => <span className="text-blue-500 underline cursor-pointer">{rowData.completionStatus}</span>,
    },
    {
      field: "action",
      header: "View Details",
      body: () => (
        <Button
          label="View"
          onClick={() => setShowDetails(true)}
          className="p-button-outlined p-button-sm text-orange-500 border-orange-300 h-7 px-3 text-[10px]"
        />
      ),
    },
  ];

  return (
    <PageLayout title="Construction Work Status Details">
      <div className="bg-white rounded-lg ">
       
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6 text-sm">
          <div><span className="text-blue-600 font-bold">OIS Type :</span> Office</div>
          <div><span className="text-blue-600 font-bold">Office :</span> Director, Public Instructions</div>
          <div><span className="text-blue-600 font-bold">DDO :</span> </div>
        </div>

       
          <div className="border border-orange-200 rounded-xl p-6 relative bg-white mt-4 shadow-sm">
              <div className="absolute -top-4 left-6 bg-white px-4 py-1  border-orange-200">
                <span className="text-blue-600 font-bold text-sm">
                   Construction Work Report
                </span>
              </div>
          

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-2">
            {Object.keys(filterOptions).map((key) => (
              <div key={key} className="relative">
                <label className="text-blue-500 text-[11px] font-semibold capitalize mb-1 block">
                  {key.replace(/([A-Z])/g, " $1")}<span className="text-red-500">*</span>
                </label>
                <div
                  className="border border-orange-300 rounded p-2 text-[11px] bg-white cursor-pointer flex justify-between items-center"
                  onClick={() => setActiveDropdown(activeDropdown === key ? null : key)}
                >
                  <span>{selectedFilters[key as keyof typeof selectedFilters].length} selected</span>
                  <i className={`pi pi-chevron-${activeDropdown === key ? "up" : "down"} text-gray-400`} />
                </div>

                {activeDropdown === key && (
                  <div className="absolute z-50 w-full bg-white border border-gray-300 shadow-xl mt-1 rounded max-h-48 overflow-y-auto p-2">
                    <div className="p-input-icon-left w-full mb-2 border-b pb-2">
                      
                        <Input placeholder="Search" className="w-full text-xs " />
                    </div>
                    {filterOptions[key as keyof typeof filterOptions].map((opt) => (
                      <div key={opt} className="flex items-center gap-2 p-1 hover:bg-gray-50">
                        <Checkbox
                          onChange={() => handleCheckboxChange(key, opt)}
                          checked={selectedFilters[key as keyof typeof selectedFilters].includes(opt)}
                          className="accent-red-500"
                        />
                        <span className="text-[11px]">{opt}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="flex gap-4 mt-6">
                      <Button
                        label="Search"
                        className="px-10 bg-[#00bfa5] border-none text-sm font-bold"
                      />
                      <Button
                        label="Clear"
                        className="p-button-danger p-button-outlined px-10 text-sm border-pink-200 text-pink-500 font-bold"
                      />
                    </div>
                    <p className="text-[#ff0000] font-bold text-xs mt-4">
                      Note: All Asterisk (*) Marked Fields Are Mandatory
                    </p>
        </div>

       
          <div className="border border-orange-200 rounded-xl p-6 relative bg-white mt-4 shadow-sm">
              <div className="absolute -top-4 left-6 bg-white px-4 py-1  border-orange-200">
                <span className="text-blue-600 font-bold text-sm">
                  Details
                </span>
              </div>
          <div className="flex justify-between items-center mb-4 mt-2">
            <div className="flex items-center gap-2 text-[11px]">
            
            </div>
            <div className="flex gap-2">
                             <Button
                               label="Export To Excel"
                               icon="pi pi-file-excel"
                               className="p-button-outlined p-button-secondary p-button-sm text-xs"
                             />
                             <span className="p-input-icon-left">
                               <Input
                                 placeholder="Search..."
                                 className="p-inputtext-sm text-xs"
                               />
                             </span>
                           </div>
          </div>
          <Table columns={columns} data={tableData} className="orange-header-table" />
        </div>
      </div>

      <Dialog
        header="Work Description"
        visible={showDetails}
        style={{ width: "750px" }}
        onHide={() => setShowDetails(false)}
        className="custom-dialog"
      >
        <div className="border rounded overflow-hidden text-[11px]">
          {[
            ["Proposal No.", "250820233203ODS01003"],
            ["Proposal Date", "20/08/2025"],
            ["School / Office Name-(Code)", "DEO, BHOPAL (233203ODS01)"],
            ["Sankul / AEO Name-(Code)", "DEO, BHOPAL (0522003001)"],
            ["Priority Type", "General Requirement"],
            ["Work Type", "New Construction"],
            ["Construction Work Type", "Construction of Office Building"],
            ["Agency Name", "JEEVAN CONSTRUCTION"],
            ["Agency Contact Person", "JEEVAN"],
            ["Agency Contact No.", "89989898989"],
            ["Agency GST Number", "29AAACH7409R1ZX"],
            ["Agency Address", "NA"],
            ["Estimated Cost (₹)", "5000.00"],
            ["Estimated Time(In Days)", "10"],
            ["Remark", "NA"],
            ["Approval status", "The budget amount can be approved by the school/office. (Self Approved)"],
          ].map(([label, val], idx) => (
            <div key={idx} className={`flex border-b last:border-none ${idx % 2 === 0 ? "bg-gray-50" : "bg-white"}`}>
              <div className="w-5/12 p-3 font-bold border-r text-gray-700">{label}</div>
              <div className="w-7/12 p-3 text-gray-600">{val}</div>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-6">
          <Button label="Close" onClick={() => setShowDetails(false)} className="bg-pink-500 border-none px-12 h-10 text-white font-bold" />
        </div>
      </Dialog>

      <style>{`
        .orange-header-table .p-datatable-thead > tr > th {
            font-size: 15px;
            padding: 10px 4px;
            border: 1px solid #ffffff44;
            text-align: center;
        }
        .orange-header-table .p-datatable-tbody > tr > td {
            font-size: 13px;
            padding: 8px 4px;
            border: 1px solid #e0e0e0;
            text-align: center;
        }
        .custom-dialog .p-dialog-header { padding: 1rem; border-bottom: 1px solid #eee; }
        .accent-red-500 .p-checkbox-box.p-highlight {
            background: #ff4d4d !important;
            border-color: #ff4d4d !important;
        }
      `}</style>
    </PageLayout>
  );
};

export default ConstructionWorkStatus;