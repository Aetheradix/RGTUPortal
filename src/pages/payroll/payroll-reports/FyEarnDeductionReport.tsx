 /* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import PageLayout from "@/components/PageLayout";
import { Card } from "primereact/card";
import { Dropdown } from "primereact/dropdown";
import { Button } from "primereact/button";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";


const divisions = [{ label: "Division 1", value: "division1" }];
const districts = [{ label: "District A", value: "districtA" }];
const blocks = [{ label: "Block X", value: "blockX" }];
const officeTypes = [{ label: "Head Office", value: "head" }, { label: "Branch Office", value: "branch" }];
const offices = [{ label: "Office 1", value: "office1" }];
const years = [{ label: "2025-2026", value: 2026 }];
const headTypes = [{ label: "Earning", value: "earning" }, { label: "Deduction", value: "deduction" }];
const earnDeductionHeads = [{ label: "Basic", value: "basic" }, { label: "HRA", value: "hra" }];

const fyData = [
  {
    id: 1,
    name: "SAVITRI VERMA (YD2074)",
    arrear: 0.0,
    months: {
      APRIL: 0, MAY: 0, JUNE: 0, JULY: 0, AUGUST: 0, SEPTEMBER: 0,
      OCTOBER: 0, NOVEMBER: 0, DECEMBER: 2000, JANUARY: 0, FEBRUARY: 0, MARCH: 0,
    },
  },
  {
    id: 2,
    name: "RAKESH MARKAM (UD8390)",
    arrear: 0.0,
    months: {
      APRIL: 0, MAY: 0, JUNE: 0, JULY: 0, AUGUST: 0, SEPTEMBER: 0,
      OCTOBER: 0, NOVEMBER: 0, DECEMBER: 1500, JANUARY: 0, FEBRUARY: 0, MARCH: 0,
    },
  },
];

export default function FinancialYearEarnDeduction() {
  const [division, setDivision] = useState<any>(null);
  const [district, setDistrict] = useState<any>(null);
  const [block, setBlock] = useState<any>(null);
  const [officeType, setOfficeType] = useState<any>(null);
  const [office, setOffice] = useState<any>(null);
  const [year, setYear] = useState<any>(null);
  const [headType, setHeadType] = useState<any>(null);
  const [earnDedHead, setEarnDedHead] = useState<any>(null);
  const [show, setShow] = useState(false);
  const [expandedRows, setExpandedRows] = useState<any>(null);

  const rowExpansionTemplate = (row: any) => {
    const monthKeys = Object.keys(row.months);
    const total = monthKeys.reduce((sum, key) => sum + row.months[key], 0);

    return (
      <div className="p-3 bg-gray-50 rounded text-sm">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
          {monthKeys.map((month) => (
            <div key={month}>
              {month} : <b>{row.months[month].toFixed(2)}</b>
            </div>
          ))}
          <div className="col-span-full mt-2">
            Total : <b>{total.toFixed(2)}</b>
          </div>
        </div>
      </div>
    );
  };

  return (
    <PageLayout title="Financial Year Earn & Deduction">
      <Card className="mb-4">
   <div className="grid grid-cols-1 md:grid-cols-4 gap-3">

  <div>
    <label className="block text-sm font-medium mb-1">Division *</label>
    <Dropdown value={division} onChange={(e) => setDivision(e.value)} options={divisions} placeholder="Select Division" className="w-full" />
  </div>

  <div>
    <label className="block text-sm font-medium mb-1">District *</label>
    <Dropdown value={district} onChange={(e) => setDistrict(e.value)} options={districts} placeholder="Select District" className="w-full" />
  </div>

  <div>
    <label className="block text-sm font-medium mb-1">Block *</label>
    <Dropdown value={block} onChange={(e) => setBlock(e.value)} options={blocks} placeholder="Select Block" className="w-full" />
  </div>

  <div>
    <label className="block text-sm font-medium mb-1">Office Type *</label>
    <Dropdown value={officeType} onChange={(e) => setOfficeType(e.value)} options={officeTypes} placeholder="Select Office Type" className="w-full" />
  </div>

  <div>
    <label className="block text-sm font-medium mb-1">Office *</label>
    <Dropdown value={office} onChange={(e) => setOffice(e.value)} options={offices} placeholder="Select Office" className="w-full" />
  </div>

  <div>
    <label className="block text-sm font-medium mb-1">Financial Year *</label>
    <Dropdown value={year} onChange={(e) => setYear(e.value)} options={years} placeholder="Select Year" className="w-full" />
  </div>

  <div>
    <label className="block text-sm font-medium mb-1">Head Type *</label>
    <Dropdown value={headType} onChange={(e) => setHeadType(e.value)} options={headTypes} placeholder="Select Head Type" className="w-full" />
  </div>

  <div>
    <label className="block text-sm font-medium mb-1">Earning / Deduction Head *</label>
    <Dropdown value={earnDedHead} onChange={(e) => setEarnDedHead(e.value)} options={earnDeductionHeads} placeholder="Select Head" className="w-full" />
  </div>

</div>

        <div className="flex justify-center gap-4 mt-4">
          <Button label="Search" icon="pi pi-search" onClick={() => setShow(true)} />
          <Button label="Clear" icon="pi pi-times" severity="danger"
            onClick={() => {
              setDivision(null); setDistrict(null); setBlock(null); setOfficeType(null);
              setOffice(null); setYear(null); setHeadType(null); setEarnDedHead(null);
              setShow(false); setExpandedRows(null);
            }} />
        </div>
      </Card>

      {show && (
        <Card>
          <h3 className="font-semibold mb-2">FY Earn & Deduction Details</h3>
          <DataTable
            value={fyData}
            expandedRows={expandedRows}
            onRowToggle={(e) => setExpandedRows(e.data)}
            rowExpansionTemplate={rowExpansionTemplate}
            paginator rows={10} dataKey="id"
          >
            <Column expander />
            <Column field="name" header="EMPLOYEE NAME" sortable/>
            <Column field="arrear" header="Arrear" sortable />
            <Column field="months.APRIL" header="APRIL" sortable/>
            <Column field="months.MAY" header="MAY"sortable />
          </DataTable>
        </Card>
      )}
    </PageLayout>
  );
}
