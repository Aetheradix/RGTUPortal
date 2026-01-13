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

  return (
    <PageLayout title="Monthly Earning Deduction Report">
      <Card className="mb-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-3">

          {[
            ["Division Name (Code)*", divisions, "division"],
            ["District", districts, "district"],
            ["Block*", blocks, "block"],
            ["OUC Type*", oucTypes, "ouc"],
            ["University Name (Code)*", universities, "uni"],
            ["Office Name (Code)*", offices, "office"],
            ["Post Type*", postTypes, "post"],
            ["Earning & Deduction Type*", earnDedTypes, "type"],
            ["Earning & Deduction Head*", earnDedHeads, "head"],
          ].map(([label, opts, key]: any) => (
            <div key={key}>
              <label className="font-semibold text-sm">{label}</label>
              <Dropdown value={filters[key]} options={opts}
                onChange={e => setFilters({ ...filters, [key]: e.value })}
                placeholder="Select" className="w-full" />
            </div>
          ))}

          <div>
            <label className="font-semibold text-sm">Month*</label>
            <Calendar value={month}
              onChange={(e) => setMonth(e.value as Date)}
              dateFormat="dd/mm/yy"
              view="month"
              className="w-full"
              placeholder="dd/mm/yyyy" />
          </div>
        </div>

        <div className="flex justify-center gap-4 mt-4">
          <Button label="Search" icon="pi pi-search" onClick={() => setShow(true)} />
          <Button label="Clear" icon="pi pi-times" severity="danger"
            onClick={() => { setFilters({}); setMonth(null); setShow(false); }} />
        </div>
      </Card>

      {show && (
        <Card>
          <h3 className="font-semibold mb-2">Monthly Office Wise Single Head Report</h3>

          <DataTable value={reportData} paginator rows={10}>
            <Column header="Sr.No." body={(_, opt) => opt.rowIndex + 1} />
            <Column field="name" header="Employee" />
            <Column field="designation" header="Designation" />
            <Column field="amount" header="Amount (₹)" body={(r) => r.amount.toFixed(2)} />
          </DataTable>

          <div className="flex justify-end mt-2 font-semibold">
            Total : ₹ {totalAmount.toFixed(2)}
          </div>
        </Card>
      )}
    </PageLayout>
  );
}
