import React, { useState, type ChangeEvent } from "react";
import PageLayout from "../../../components/PageLayout";
import { DataTable, type DataTableExpandedRows, type DataTableValueArray } from "primereact/datatable";
import { Column } from "primereact/column";
import { InputText } from "primereact/inputtext";
import { Dropdown } from "primereact/dropdown";
import { Card } from "primereact/card";
interface DistrictStats {
  id: number;
  division: string;
  district: string;
  received: number;
  accepted: number;
  forwarded: number;
  canceled: number;
  objectionPending: number;
}
const DistrictWiseCountingReport: React.FC = () => {
  const [globalFilter, setGlobalFilter] = useState<string>("");
  const [expandedRows, setExpandedRows] = useState<DataTableExpandedRows | DataTableValueArray>([]);
  const mockData: DistrictStats[] = [
    { id: 1, division: "Bhopal", district: "Raisen", received: 2, accepted: 1, forwarded: 1, canceled: 1, objectionPending: 0 },
    { id: 2, division: "Shahdol", district: "Umaria", received: 3, accepted: 0, forwarded: 1, canceled: 1, objectionPending: 0 },
    { id: 3, division: "Rewa", district: "Sidhi", received: 3, accepted: 0, forwarded: 0, canceled: 3, objectionPending: 0 },
    { id: 4, division: "Narmadapuram", district: "Betul", received: 0, accepted: 0, forwarded: 0, canceled: 0, objectionPending: 0 },
    { id: 5, division: "Jabalpur", district: "Balaghat", received: 3, accepted: 0, forwarded: 1, canceled: 1, objectionPending: 0 },
    { id: 6, division: "Ujjain", district: "Mandsaur", received: 0, accepted: 0, forwarded: 0, canceled: 0, objectionPending: 0 },
  ];
  const header = (
    <div className="flex justify-between items-center">
      <div className="flex items-center gap-2">
        <span className="text-sm">Show</span>
        <Dropdown options={[10, 25, 50, 100]} placeholder="10" className="w-20" />
        <span className="text-sm">entries</span>
      </div>
      <span className="p-input-icon-left">
        <i className="pi pi-search" />
        <InputText 
          value={globalFilter} 
          onChange={(e: ChangeEvent<HTMLInputElement>) => setGlobalFilter(e.target.value)} 
          placeholder="Search:" 
          className="p-inputtext-sm" 
        />
      </span>
    </div>
  );
  const rowExpansionTemplate = (data: DistrictStats) => {
    return (
      <div className="p-3 bg-blue-50 border-l-4 border-blue-600 ml-12">
        <div className="flex items-center gap-2">
          <span className="font-bold text-gray-700 text-lg">Objection / Pending Application:</span>
          <span className="text-blue-800 font-bold text-lg">{data.objectionPending}</span>
        </div>
      </div>
    );
  };
  return (
    <PageLayout title="Director Anukampa Application Approval">
      <div className="text-xl font-bold text-blue-900 mb-4 uppercase">District-Wise Statistics</div>
      <Card>
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
          <Column field="division" header="Division" sortable />
          <Column field="district" header="District" sortable />
          <Column field="received" header="Received Application" className="text-center" />
          <Column field="accepted" header="Application Accepted" className="text-center" />
          <Column field="forwarded" header="Applications Forwarded to Senior Level" className="text-center" />
          <Column field="canceled" header="Application Canceled" className="text-center" />
        </DataTable>
      </Card>
    </PageLayout>
  );
};
export default DistrictWiseCountingReport;