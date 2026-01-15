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
  const [filters, setFilters] = useState<any>({
    division: null, district: null, block: null, officeType: null,
    office: null, year: null, headType: null, earnDedHead: null
  });
  const [show, setShow] = useState(false);
  const [expandedRows, setExpandedRows] = useState<any>(null);

  const handleInputChange = (field: string, value: any) => {
    setFilters((prev: any) => ({ ...prev, [field]: value }));
  };

  const handleClear = () => {
    setFilters({
      division: null, district: null, block: null, officeType: null,
      office: null, year: null, headType: null, earnDedHead: null
    });
    setShow(false);
    setExpandedRows(null);
  };

  const rowExpansionTemplate = (row: any) => {
    const monthKeys = Object.keys(row.months);
    const total = monthKeys.reduce((sum, key) => sum + row.months[key], 0);

    return (
      <div className="p-4 bg-blue-50/30 rounded-lg border border-blue-100 mx-3 my-2 animate-fadein">
        <h4 className="text-blue-700 font-bold mb-3 border-b border-blue-100 pb-1 text-xs uppercase tracking-wider">
          Full Monthly Breakdown
        </h4>
        <div className="grid grid-cols-2 md:grid-cols-6 gap-3">
          {monthKeys.map((month) => (
            <div key={month} className="bg-white p-2 rounded border shadow-sm flex flex-col">
              <span className="text-[10px] text-gray-500 font-bold">{month}</span>
              <span className="text-sm font-semibold">₹ {row.months[month].toLocaleString('en-IN', {minimumFractionDigits: 2})}</span>
            </div>
          ))}
        </div>
        <div className="mt-4 flex justify-end">
            <div className="bg-blue-600 text-white px-4 py-2 rounded shadow-md">
                <span className="text-xs uppercase mr-2">Financial Year Total:</span>
                <span className="font-bold text-lg">₹ {total.toLocaleString('en-IN', {minimumFractionDigits: 2})}</span>
            </div>
        </div>
      </div>
    );
  };

  return (
    <PageLayout title="Financial Year Earn & Deduction / वित्तीय वर्ष कमाई एवं कटौती">
      <Card >
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <DropdownField label="Division" value={filters.division} options={divisions} onChange={(val: any) => handleInputChange("division", val)} />
          <DropdownField label="District" value={filters.district} options={districts} onChange={(val: any) => handleInputChange("district", val)} />
          <DropdownField label="Block" value={filters.block} options={blocks} onChange={(val: any) => handleInputChange("block", val)} />
          <DropdownField label="Office Type" value={filters.officeType} options={officeTypes} onChange={(val: any) => handleInputChange("officeType", val)} />
          <DropdownField label="Office" value={filters.office} options={offices} onChange={(val: any) => handleInputChange("office", val)} />
          <DropdownField label="Financial Year" value={filters.year} options={years} onChange={(val: any) => handleInputChange("year", val)} />
          <DropdownField label="Head Type" value={filters.headType} options={headTypes} onChange={(val: any) => handleInputChange("headType", val)} />
          <DropdownField label="Earning / Deduction Head" value={filters.earnDedHead} options={earnDeductionHeads} onChange={(val: any) => handleInputChange("earnDedHead", val)} />
        </div>

        <div className="flex justify-center md:justify-start gap-3 mt-8 pt-4 border-t">
          <Button label="Search Record" icon="pi pi-search" className="bg-blue-600 border-blue-600 px-8" onClick={() => setShow(true)} />
          <Button label="Clear" icon="pi pi-refresh" severity="secondary" outlined className="px-8" onClick={handleClear} />
        </div>
      </Card>

      {show && (
        <div className="animate-fadein">
          <Card className="shadow-sm border-t border-gray-200">
            <DataTable
              value={fyData}
              expandedRows={expandedRows}
              onRowToggle={(e) => setExpandedRows(e.data)}
              rowExpansionTemplate={rowExpansionTemplate}
              paginator rows={10} dataKey="id"
              className="p-datatable-sm"
              showGridlines
            >
              <Column expander style={{ width: '3rem' }} />
              <Column field="name" header="EMPLOYEE NAME" sortable className="font-semibold text-gray-700" />
              <Column 
                field="arrear" 
                header="Arrear (₹)" 
                sortable 
                body={(row) => `₹ ${row.arrear.toLocaleString('en-IN')}`}
              />
              <Column 
                field="months.APRIL" 
                header="April" 
                body={(row) => `₹ ${row.months.APRIL.toLocaleString('en-IN')}`}
              />
              <Column 
                field="months.MAY" 
                header="May" 
                body={(row) => `₹ ${row.months.MAY.toLocaleString('en-IN')}`}
              />
              <Column 
                header="Yearly Total" 
                className="font-bold text-blue-700"
                body={(row) => {
                    const total = Object.values(row.months).reduce((a: any, b: any) => a + b, 0);
                    return `₹ ${Number(total).toLocaleString('en-IN')}`;
                }}
              />
            </DataTable>
          </Card>
        </div>
      )}
    </PageLayout>
  );
}

// Internal Helper for cleaner JSX
const DropdownField = ({ label, value, options, onChange }: any) => (
  <div className="flex flex-col gap-1">
    <label className="text-sm font-semibold text-gray-700">{label} *</label>
    <Dropdown 
      value={value} 
      onChange={(e) => onChange(e.value)} 
      options={options} 
      placeholder="Select" 
      className="w-full" 
    />
  </div>
);