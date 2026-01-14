import React, { useState, type ChangeEvent } from "react";
import PageLayout from "../../../components/PageLayout";
import { DataTable, type DataTableExpandedRows, type DataTableValueArray } from "primereact/datatable";
import { Column } from "primereact/column";
import { InputText } from "primereact/inputtext";
import { Dropdown, type DropdownChangeEvent } from "primereact/dropdown";
import { Card } from "primereact/card";
import { Button } from "primereact/button";

interface HoBlockStats {
  id: number;
  district: string;
  block: string;
  receivedAtHo: number;
  approvedByHo: number;
  sentToCollector: number;
  rejectedAtHo: number;
  pendingClarification: number;
}

const HoBlockWiseCountingReport: React.FC = () => {
  const [selectedDistrict, setSelectedDistrict] = useState<string | null>(null);
  const [showTable, setShowTable] = useState<boolean>(false);
  const [globalFilter, setGlobalFilter] = useState<string>("");
  const [expandedRows, setExpandedRows] = useState<DataTableExpandedRows | DataTableValueArray>([]);

  const districts = [
    { label: "Bhopal", value: "Bhopal" },
    { label: "Indore", value: "Indore" },
    { label: "Shajapur", value: "Shajapur" },
    { label: "Ujjain", value: "Ujjain" }
  ];

  const mockData: HoBlockStats[] = [
    { id: 1, district: "Bhopal", block: "Phanda", receivedAtHo: 12, approvedByHo: 8, sentToCollector: 6, rejectedAtHo: 2, pendingClarification: 2 },
    { id: 2, district: "Bhopal", block: "Berasia", receivedAtHo: 7, approvedByHo: 4, sentToCollector: 3, rejectedAtHo: 1, pendingClarification: 2 }
  ];

  const handleSearch = () => {
    if (selectedDistrict) setShowTable(true);
  };

  const handleClear = () => {
    setSelectedDistrict(null);
    setShowTable(false);
    setGlobalFilter("");
  };

  const rowExpansionTemplate = (data: HoBlockStats) => {
    return (
      <div className="p-3 bg-blue-50 border-l-4 border-blue-600 ml-12">
        <div className="flex items-center gap-2">
          <span className="font-bold text-gray-700 text-lg">Pending for Clarification / Query:</span>
          <span className="text-blue-800 font-bold text-lg">{data.pendingClarification}</span>
        </div>
      </div>
    );
  };

  const header = (
    <div className="flex justify-between items-center">
        <div className="text-xs font-semibold text-gray-500 uppercase">
          HRMS &raquo; HO Reports &raquo; Block Statistics
        </div>
        <span className="p-input-icon-left">
            <i className="pi pi-search" />
            <InputText 
            value={globalFilter} 
            onChange={(e: ChangeEvent<HTMLInputElement>) => setGlobalFilter(e.target.value)} 
            placeholder="Search Block..." 
            className="p-inputtext-sm" 
            />
        </span>
    </div>
  );

  return (
    <PageLayout title="HO Level Anukampa Statistics">
      <div className="text-xl font-bold text-blue-900 mb-4 uppercase">Head Office Block-Wise Counting Report</div>
      
      <div className="bg-white p-6 rounded shadow-sm border mb-6">
        <div className="flex flex-wrap items-end gap-4">
          <div className="flex flex-col gap-2 w-full md:w-1/4">
            <label className="font-bold text-sm text-gray-600">Select District *</label>
            <Dropdown 
              value={selectedDistrict} 
              options={districts} 
              onChange={(e: DropdownChangeEvent) => setSelectedDistrict(e.value)} 
              placeholder="Select District" 
              filter 
              className="w-full"
            />
          </div>
          <div className="flex gap-2">
            <Button label="Generate Report" icon="pi pi-file-excel" onClick={handleSearch} className="p-button-success px-6" />
            <Button label="Clear" icon="pi pi-refresh" onClick={handleClear} className="p-button-outlined p-button-secondary" />
          </div>
        </div>
      </div>

      {showTable && (
        <Card title={`Application Summary for District: ${selectedDistrict}`}>
          <DataTable
            value={mockData}
            header={header}
            globalFilter={globalFilter}
            paginator
            rows={10}
            className="p-datatable-sm"
            stripedRows
            showGridlines
            dataKey="id"
            expandedRows={expandedRows}
            onRowToggle={(e) => setExpandedRows(e.data)}
            rowExpansionTemplate={rowExpansionTemplate}
            paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport"
            currentPageReportTemplate="Showing {first} to {last} of {totalRecords} entries"
          >
            <Column expander style={{ width: '3rem' }} />
            <Column field="id" header="Sr.No." style={{ width: '4rem' }} />
            <Column field="block" header="Block Name" sortable />
            <Column field="receivedAtHo" header="Received at HO" className="text-center font-bold text-blue-700" />
            <Column field="approvedByHo" header="Approved by HO" className="text-center text-green-700" />
            <Column field="sentToCollector" header="Sent to Collector/NOC" className="text-center" />
            <Column field="rejectedAtHo" header="Rejected/Returned" className="text-center text-red-600" />
          </DataTable>
        </Card>
      )}
    </PageLayout>
  );
};

export default HoBlockWiseCountingReport;