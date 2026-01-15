/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import PageLayout from "@/components/PageLayout";
import { Card } from "primereact/card";
import { Dropdown } from "primereact/dropdown";
import { Calendar } from "primereact/calendar";
import { Button } from "primereact/button";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";

const divisions = [{ label: "Bhopal Division (01)", value: "01" }];
const districts = [{ label: "Bhopal", value: "bhopal" }];
const blocks = [{ label: "Block A", value: "A" }];
const oucTypes = [{ label: "University Office", value: "uni" }];
const universities = [{ label: "Barkatullah University (BU)", value: "BU" }];
const offices = [{ label: "Finance Office (101)", value: "101" }];
const postTypes = [{ label: "Fixed Employee", value: "fixed" }];
const earnDedTypes = [{ label: "Earning", value: "E" }, { label: "Deduction", value: "D" }];
const earnDedHeads = [
  { label: "Basic Pay", value: "basic" },
  { label: "NPS", value: "nps" },
];

const reportData = [
  { id: 1, name: "Nitin Patel", designation: "Asst. Grade-3", amount: 15708 },
  { id: 2, name: "Aman Morle", designation: "Asst. Grade-2", amount: 17220 },
  { id: 3, name: "Vishal Pawar", designation: "Vehicle Driver", amount: 19362 },
];

export default function MonthlyEarningDeductionReport() {
  const [filters, setFilters] = useState<any>({});
  const [month, setMonth] = useState<Date | null>(null);
  const [show, setShow] = useState(false);

  const totalAmount = reportData.reduce((sum, r) => sum + r.amount, 0);

  const handleClear = () => {
    setFilters({});
    setMonth(null);
    setShow(false);
  };

  const dropdownConfigs = [
    { label: "Division Name (Code)*", opts: divisions, key: "division" },
    { label: "District", opts: districts, key: "district" },
    { label: "Block*", opts: blocks, key: "block" },
    { label: "OUC Type*", opts: oucTypes, key: "ouc" },
    { label: "University Name (Code)*", opts: universities, key: "uni" },
    { label: "Office Name (Code)*", opts: offices, key: "office" },
    { label: "Post Type*", opts: postTypes, key: "post" },
    { label: "Earning & Deduction Type*", opts: earnDedTypes, key: "type" },
    { label: "Earning & Deduction Head*", opts: earnDedHeads, key: "head" },
  ];

  return (
    <PageLayout title="Monthly Earning Deduction Report / मासिक आय कटौती रिपोर्ट">

      <Card className="shadow-sm   mb-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {dropdownConfigs.map(({ label, opts, key }) => (
            <div key={key} className="flex flex-col gap-1">
              <label className="font-semibold text-sm text-gray-700">{label}</label>
              <Dropdown
                value={filters[key]}
                options={opts}
                onChange={(e) => setFilters({ ...filters, [key]: e.value })}
                placeholder="Select"
                className="w-full"
              />
            </div>
          ))}

          <div className="flex flex-col gap-1">
            <label className="font-semibold text-sm text-gray-700">Month*</label>
            <Calendar
              value={month}
              onChange={(e) => setMonth(e.value as Date)}
              view="month"
              dateFormat="mm/yy"
              showIcon
              className="w-full"
              placeholder="Select Month"
            />
          </div>
        </div>

        <div className="flex justify-center md:justify-start gap-3 mt-8 pt-4 border-t">
          <Button 
            label="Search Report" 
            icon="pi pi-search" 
            className="bg-blue-600 border-blue-600 px-8" 
            onClick={() => setShow(true)} 
          />
          <Button 
            label="Clear" 
            icon="pi pi-refresh" 
            severity="secondary" 
            outlined 
            className="px-8" 
            onClick={handleClear} 
          />
        </div>
      </Card>
      {show && (
        <div className="animate-fadein">
          <Card className="shadow-sm border-t border-gray-200">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-bold text-gray-700 px-2 uppercase tracking-tight">
                Office Wise Single Head Details
              </h3>
              <Button icon="pi pi-download" label="Export" className="p-button-text p-button-sm" />
            </div>

            <DataTable 
              value={reportData} 
              paginator 
              rows={10} 
              className="p-datatable-sm"
              showGridlines
              rowHover
            >
              <Column 
                header="Sr.No." 
                body={(_, opt) => opt.rowIndex + 1} 
                style={{ width: '4rem', textAlign: 'center' }} 
              />
              <Column field="name" header="Employee Name" sortable className="font-medium" />
              <Column field="designation" header="Designation" sortable />
              <Column 
                field="amount" 
                header="Amount (₹)" 
                sortable 
                body={(r) => `₹ ${r.amount.toLocaleString('en-IN', { minimumFractionDigits: 2 })}`}
                className="font-bold text-gray-800"
              
              />
            </DataTable>
            <div className="flex justify-end mt-4">
              <div className="bg-gray-50 border border-dashed border-gray-300 rounded-lg p-4 flex items-center gap-6">
                <span className="text-gray-500 uppercase text-xs font-bold tracking-widest">Grand Total</span>
                <span className="text-2xl font-black text-blue-700">
                  ₹ {totalAmount.toLocaleString('en-IN', { minimumFractionDigits: 2 })}
                </span>
              </div>
            </div>
          </Card>
        </div>
      )}
    </PageLayout>
  );
}