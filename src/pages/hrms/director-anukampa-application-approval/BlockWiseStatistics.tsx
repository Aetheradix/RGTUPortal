import React, { useState, type ChangeEvent } from "react";
import PageLayout from "../../../components/PageLayout";
import { DataTable, type DataTableExpandedRows, type DataTableValueArray } from "primereact/datatable";
import { Column } from "primereact/column";
import { InputText } from "primereact/inputtext";
import { Dropdown, type DropdownChangeEvent } from "primereact/dropdown";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
interface BlockStats {
  id: number;
  district: string;
  block: string;
  received: number;
  accepted: number;
  forwarded: number;
  canceled: number;
  objectionPending: number;
}
const BlockWiseCountingReport: React.FC = () => {
  const [selectedDistrict, setSelectedDistrict] = useState<string | null>(null);
  const [showTable, setShowTable] = useState<boolean>(false);
  const [globalFilter, setGlobalFilter] = useState<string>("");
  const [expandedRows, setExpandedRows] = useState<DataTableExpandedRows | DataTableValueArray>([]);
  const districts = [
    { label: "Bhopal", value: "Bhopal" },
    { label: "Raisen", value: "Raisen" },
    { label: "Vidisha", value: "Vidisha" },
    { label: "Sehore", value: "Sehore" }
  ];
  const mockData: BlockStats[] = [
    { id: 1, district: "Bhopal", block: "Phanda", received: 5, accepted: 2, forwarded: 2, canceled: 1, objectionPending: 0 },
    { id: 2, district: "Bhopal", block: "Berasia", received: 3, accepted: 1, forwarded: 1, canceled: 1, objectionPending: 0 },
    { id: 3, district: "Bhopal", block: "City", received: 8, accepted: 4, forwarded: 2, canceled: 2, objectionPending: 0 }
  ];
  const handleSearch = () => {
    if (selectedDistrict) setShowTable(true);
  };
  const handleClear = () => {
    setSelectedDistrict(null);
    setShowTable(false);
    setGlobalFilter("");
  };
  const rowExpansionTemplate = (data: BlockStats) => {
    return (
      <div className="p-3 bg-green-50 border-l-4 border-green-600 ml-12">
        <div className="flex items-center gap-2">
          <span className="font-bold text-gray-700 text-lg">Objection / Pending Application:</span>
          <span className="text-green-800 font-bold text-lg">{data.objectionPending}</span>
        </div>
      </div>
    );
  };
  const header = (
    <div className="flex justify-end items-center">
      <span className="p-input-icon-left">
        <i className="pi pi-search" />
        <InputText 
          value={globalFilter} 
          onChange={(e: ChangeEvent<HTMLInputElement>) => setGlobalFilter(e.target.value)} 
          placeholder="Search Block:" 
          className="p-inputtext-sm" 
        />
      </span>
    </div>
  );
  return (
    <PageLayout title="Director Anukampa Application Approval">
      <div className="text-xl font-bold text-blue-900 mb-4 uppercase">Block-Wise Statistics</div>
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
            <Button label="Search" icon="pi pi-search" onClick={handleSearch} className="p-button-primary px-6" />
            <Button label="Clear" icon="pi pi-refresh" onClick={handleClear} className="p-button-outlined p-button-secondary" />
          </div>
        </div>
      </div>

      {showTable && (
        <Card title={`Block Statistics for ${selectedDistrict}`}>
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
            <Column field="id" header="Sr.No." />
            <Column field="district" header="District" />
            <Column field="block" header="Block" sortable />
            <Column field="received" header="Received Application" className="text-center font-bold" />
            <Column field="accepted" header="Application Accepted" className="text-center" />
            <Column field="forwarded" header="Applications Forwarded" className="text-center" />
            <Column field="canceled" header="Application Canceled" className="text-center" />
          </DataTable>
        </Card>
      )}
    </PageLayout>
  );
};

export default BlockWiseCountingReport;