import React, { useState, type ChangeEvent } from "react";
import PageLayout from "../../../components/PageLayout";
import { DataTable } from "primereact/datatable";
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
const HodDistrictWiseCountingReport: React.FC = () => {
  const [globalFilter, setGlobalFilter] = useState<string>("");

  const mockData: DistrictStats[] = [
    { id: 1, division: "Bhopal", district: "Raisen", received: 2, accepted: 1, forwarded: 1, canceled: 1, objectionPending: 0 },
    { id: 2, division: "Shahdol", district: "Umaria", received: 3, accepted: 0, forwarded: 1, canceled: 1, objectionPending: 2 },
    { id: 3, division: "Rewa", district: "Sidhi", received: 3, accepted: 0, forwarded: 0, canceled: 3, objectionPending: 0 },
    { id: 4, division: "Narmadapuram", district: "Betul", received: 0, accepted: 0, forwarded: 0, canceled: 0, objectionPending: 0 },
    { id: 5, division: "Jabalpur", district: "Balaghat", received: 3, accepted: 0, forwarded: 1, canceled: 1, objectionPending: 2 },
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
  return (
    <PageLayout title="District Wise Counting Report">
      <div className="text-xl font-bold text-blue-900 mb-1 uppercase">District Wise Counting Report</div>
      <div className="text-xs text-gray-500 mb-4">Master &gt; HOD Anukampa Appointment &gt; District Wise Counting Report</div>

      <Card title="Details" className="shadow-lg border-t-4 border-blue-900">
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
          paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport"
          currentPageReportTemplate="Showing {first} to {last} of {totalRecords} entries"
        >
          <Column field="id" header="Sr.No." style={{ width: '4rem' }} />
          <Column field="division" header="Division" sortable className="font-semibold" />
          <Column field="district" header="District" sortable className="font-semibold text-blue-700" />
          
          <Column 
            field="received" 
            header="Received Application" 
            className="text-center font-bold" 
            body={(row) => <span className="text-gray-700">{row.received}</span>}
          />
          <Column 
            field="accepted" 
            header="Application Accepted" 
            className="text-center font-bold" 
            body={(row) => <span className="text-green-700">{row.accepted}</span>}
          />
          <Column 
            field="forwarded" 
            header="Applications Forwarded to Senior Level" 
            className="text-center font-bold" 
            body={(row) => <span className="text-blue-600">{row.forwarded}</span>}
          />
          <Column 
            field="canceled" 
            header="Application Canceled" 
            className="text-center font-bold" 
            body={(row) => <span className="text-red-600">{row.canceled}</span>}
          />
          <Column 
            field="objectionPending" 
            header="Objection / Pending Application" 
            className="text-center font-bold" 
            body={(row) => <span className="text-orange-600">{row.objectionPending}</span>}
          />
        </DataTable>
      </Card>
    </PageLayout>
  );
};
export default HodDistrictWiseCountingReport;