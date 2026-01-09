/* eslint-disable @typescript-eslint/no-explicit-any */
import  { useState } from "react";
import PageLayout from "@/components/PageLayout";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import { Dropdown } from "primereact/dropdown";
import { Calendar } from "primereact/calendar";
import { DataTable, type DataTableExpandedRows } from "primereact/datatable";
import { Column } from "primereact/column";

interface SalaryRow {
  id: number;
  office: string;
  totalEmployees: number;
  generatedCount: number;
  status: string;
}

const salaryData: SalaryRow[] = [
  { id: 1, office: "DPI Office", totalEmployees: 123, generatedCount: 112, status: "Generated" },
  { id: 2, office: "Bhopal Office", totalEmployees: 12, generatedCount: 12, status: "Generated" },
  { id: 3, office: "Hoshangabad Office", totalEmployees: 8, generatedCount: 8, status: "Generated" },
  { id: 4, office: "Betul Office", totalEmployees: 6, generatedCount: 6, status: "Generated" },
  { id: 5, office: "Chhindwara Office", totalEmployees: 10, generatedCount: 10, status: "Generated" },
];

const divisionOptions = [
  { label: "Bhopal Division", value: "bhopal" },
  { label: "Indore Division", value: "indore" },
];

const districtOptions = [
  { label: "Bhopal", value: "bhopal" },
  { label: "Hoshangabad", value: "hoshangabad" },
];

const blockOptions = [
  { label: "Block A", value: "blockA" },
  { label: "Block B", value: "blockB" },
];

const oucOptions = [
  { label: "Government", value: "govt" },
  { label: "Private", value: "private" },
];

const universityOptions = [
  { label: "Barkatullah University", value: "BU" },
  { label: "RGPV University", value: "RGPV" },
];

export default function SalaryGenerationStatusReport() {

  const [filters, setFilters] = useState<any>({
    division: null,
    district: null,
    block: null,
    ouc: null,
    university: null,
    month: null,
  });

  const [showResult, setShowResult] = useState(false);
  const [expandedRows, setExpandedRows] = useState<DataTableExpandedRows | undefined>();

  const expansionTemplate = (row: SalaryRow) => (
    <div className="p-3 grid text-sm">
      <div><b>Generated Salary (For Total Employees):</b> {row.generatedCount}</div>
      <div><b>Salary Generated Status:</b> {row.status}</div>
    </div>
  );

  return (
    <PageLayout title="Salary Generation Status Report">


      <Card className="mb-4">
        <h3 className="mb-3">Salary Generation Status Report</h3>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
          <div>
            <label>Select Division Name *</label>
            <Dropdown value={filters.division} options={divisionOptions}
              onChange={(e) => setFilters({ ...filters, division: e.value })}
              placeholder="Select" className="w-full" />
          </div>

          <div>
            <label>District *</label>
            <Dropdown value={filters.district} options={districtOptions}
              onChange={(e) => setFilters({ ...filters, district: e.value })}
              placeholder="Select" className="w-full" />
          </div>

          <div>
            <label>Block *</label>
            <Dropdown value={filters.block} options={blockOptions}
              onChange={(e) => setFilters({ ...filters, block: e.value })}
              placeholder="Select" className="w-full" />
          </div>

          <div>
            <label>OUC Type *</label>
            <Dropdown value={filters.ouc} options={oucOptions}
              onChange={(e) => setFilters({ ...filters, ouc: e.value })}
              placeholder="Select" className="w-full" />
          </div>

          <div>
            <label>University Name (Code) *</label>
            <Dropdown value={filters.university} options={universityOptions}
              onChange={(e) => setFilters({ ...filters, university: e.value })}
              placeholder="Select" className="w-full" />
          </div>

          <div>
            <label>Select Month *</label>
            <Calendar value={filters.month}
              onChange={(e) => setFilters({ ...filters, month: e.value })}
              view="month" dateFormat="mm/yy" className="w-full" />
          </div>
        </div>

        <div className="flex gap-3 mt-4">
          <Button label="Search" icon="pi pi-search" onClick={() => setShowResult(true)} />
          <Button label="Clear" icon="pi pi-refresh" className="p-button-secondary"
            onClick={() => {
              setFilters({ division:null,district:null,block:null,ouc:null,university:null,month:null });
              setShowResult(false);
            }} />
        </div>
      </Card>

      {showResult && (
        <Card>
          <h3 className="mb-3">Salary Status Report</h3>

          <DataTable value={salaryData}
            paginator rows={10}
            expandedRows={expandedRows}
            onRowToggle={(e) => setExpandedRows(e.data as DataTableExpandedRows)}
            rowExpansionTemplate={expansionTemplate}
            dataKey="id" showGridlines>

            <Column expander />
          
            <Column field="office" header="Office Name" sortable/>
            <Column field="totalEmployees" header="Total Employees in Office" sortable/>
          </DataTable>
        </Card>
      )}
    </PageLayout>
  );
}
