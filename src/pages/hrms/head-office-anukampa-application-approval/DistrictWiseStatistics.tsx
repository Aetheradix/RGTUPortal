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
const DistrictWiseCountingReportHoLevel: React.FC = () => {
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
        <Dropdown options={[10, 25, 50, 100]} placeholder="10" className="w-20 p-inputtext-sm" />
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
      <div className="p-2 pl-12 bg-gray-50 flex items-center gap-4 border-b">
        <span className="font-bold text-gray-700">Objection / Pending Application :</span>
        <span className="text-red-600 font-bold">{data.objectionPending}</span>
      </div>
    );
  };
  return (
    <PageLayout title="District Wise Counting Report">
      <div className="text-xs text-gray-500 mb-2 uppercase font-semibold">
        HRMS &raquo; Head Office Anukampa Application Approval &raquo; District Wise Statistics
      </div>

      <h1 className="text-xl font-bold text-blue-900 mb-6 border-b pb-2">District-Wise Statistics</h1>

      <Card className="shadow-sm border border-gray-200">
        <DataTable
          value={mockData}
          header={header}
          globalFilter={globalFilter}
          paginator
          rows={10}
          className="p-datatable-sm custom-counting-table"
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
          
          <Column field="id" header="Sr.No." style={{ width: '4rem' }} className="text-center" />
          <Column field="division" header="Division" sortable />
          <Column field="district" header="District" sortable />
          <Column field="received" header="Received Application" className="text-center font-bold" />
          <Column field="accepted" header="Application Accepted" className="text-center" />
          <Column field="forwarded" header="Applications Forwarded to Senior Level" className="text-center" />
          <Column field="canceled" header="Application Canceled" className="text-center" />
        </DataTable>
      </Card>
      <style>{`
        .custom-counting-table .p-datatable-thead > tr > th {
          background-color: #f8fafc;
          color: #1e3a8a;
          font-size: 0.85rem;
          padding: 1rem 0.5rem;
        }
        .custom-counting-table .p-column-title {
          font-weight: 700;
        }
      `}</style>
    </PageLayout>
  );
};
export default DistrictWiseCountingReportHoLevel;