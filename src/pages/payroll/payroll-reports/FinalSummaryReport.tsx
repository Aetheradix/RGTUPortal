/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useRef } from "react";
import PageLayout from "@/components/PageLayout";
import { Card } from "primereact/card";
import { Dropdown } from "primereact/dropdown";
import { Calendar } from "primereact/calendar";
import { Button } from "primereact/button";

const divisions = [{ label: "Division 1", value: "division1" }];
const districts = [{ label: "District A", value: "districtA" }];
const blocks = [{ label: "Block X", value: "blockX" }];
const officeTypes = [{ label: "Head Office", value: "head" }];
const offices = [{ label: "Barkatullah University, Bhopal", value: "bub" }];
const postTypes = [{ label: "Regular", value: "regular" }];

export default function FinalSummaryReport() {
  const [filters, setFilters] = useState<any>({
    division: null,
    district: null,
    block: null,
    officeType: null,
    office: null,
    monthDate: null,
    postType: null,
  });
  const [show, setShow] = useState(false);
  const printRef = useRef<HTMLDivElement>(null);

  const handleInputChange = (field: string, value: any) => {
    setFilters((prev: any) => ({ ...prev, [field]: value }));
  };

  const handlePrint = () => {
    const content = printRef.current?.innerHTML;
    const printWindow = window.open("", "_blank");
    if (printWindow && content) {
      printWindow.document.write(`
        <html>
          <head>
            <title>Final Summary Report</title>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css">
            <style>
              @media print { .no-print { display: none; } }
              body { padding: 40px; font-family: sans-serif; }
              table { width: 100%; border-collapse: collapse; margin-bottom: 20px; }
              th, td { border: 1px solid #e5e7eb; padding: 12px; font-size: 14px; }
              th { background-color: #f9fafb; font-weight: 700; }
            </style>
          </head>
          <body>${content}</body>
        </html>
      `);
      printWindow.document.close();
      printWindow.focus();
      setTimeout(() => {
        printWindow.print();
        printWindow.close();
      }, 250);
    }
  };

  const handleClear = () => {
    setFilters({
      division: null,
      district: null,
      block: null,
      officeType: null,
      office: null,
      monthDate: null,
      postType: null,
    });
    setShow(false);
  };

  return (
    <PageLayout title="Final Summary Report / अंतिम सारांश रिपोर्ट">

      <Card >
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Field label="Division *">
            <Dropdown value={filters.division} onChange={(e) => handleInputChange("division", e.value)} options={divisions} placeholder="Select" className="w-full" />
          </Field>
          <Field label="District *">
            <Dropdown value={filters.district} onChange={(e) => handleInputChange("district", e.value)} options={districts} placeholder="Select" className="w-full" />
          </Field>
          <Field label="Block *">
            <Dropdown value={filters.block} onChange={(e) => handleInputChange("block", e.value)} options={blocks} placeholder="Select" className="w-full" />
          </Field>
          <Field label="Office Type *">
            <Dropdown value={filters.officeType} onChange={(e) => handleInputChange("officeType", e.value)} options={officeTypes} placeholder="Select" className="w-full" />
          </Field>
          <Field label="Office *">
            <Dropdown value={filters.office} onChange={(e) => handleInputChange("office", e.value)} options={offices} placeholder="Select" className="w-full" />
          </Field>
          <Field label="Month *">
            <Calendar value={filters.monthDate} onChange={(e) => handleInputChange("monthDate", e.value)} view="month" showIcon dateFormat="MM yy" className="w-full" placeholder="Select Month" />
          </Field>
          <Field label="Type of Post *">
            <Dropdown value={filters.postType} onChange={(e) => handleInputChange("postType", e.value)} options={postTypes} placeholder="Select" className="w-full" />
          </Field>
        </div>

        <div className="flex justify-center md:justify-start gap-3 mt-8 pt-4 border-t">
          <Button label="Generate Report" icon="pi pi-file" className="bg-blue-600 border-blue-600 px-8" onClick={() => setShow(true)} />
          <Button label="Clear" icon="pi pi-refresh" severity="secondary" outlined className="px-8" onClick={handleClear} />
        </div>
      </Card>

      {show && (
        <div className="animate-fadein">
          <Card className="shadow-lg border border-gray-200">
            <div className="flex justify-end mb-6 no-print">
              <Button label="Print Report" icon="pi pi-print" className="p-button-outlined p-button-secondary" onClick={handlePrint} />
            </div>

            <div ref={printRef}>
            <div className="text-center mb-8 border-b pb-6">
                <div className="text-blue-700 font-bold text-2xl uppercase tracking-widest">University</div>
                <div className="text-xl font-semibold text-gray-800">Barkatullah University, Bhopal</div>
                <div className="bg-blue-50 text-blue-800 inline-block px-4 py-1 rounded-full mt-3 text-sm font-bold uppercase">
                  Final Summary Report: {filters.monthDate?.toLocaleString("default", { month: "long", year: "numeric" })}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <SummaryTable 
                  title="Earnings (प्राप्तियां)" 
                  headerClass="bg-green-600" 
                  rows={[
                    ["Basic", "6,38,480.00"],
                    ["DEARNESS ALLOWANCE", "2,93,702.00"],
                    ["HOUSE RENT ALLOWANCE", "9,131.00"],
                    ["OTHER ALLOWANCE", "500.00"],
                    ["GROSS SALARY", "9,41,813.00"],
                    ["NET PAYABLE AMOUNT", "8,22,265.00"]
                  ]} 
                />

                <SummaryTable 
                  title="Deductions (कटौतियां)" 
                  headerClass="bg-red-600"
                  rows={[
                    ["GIS", "5,200.00"],
                    ["HRR", "900.00"],
                    ["INCOME TAX", "23,500.00"],
                    ["NPS", "88,990.00"],
                    ["PROFESSIONAL TAX", "958.00"],
                    ["TOTAL DEDUCTION", "1,19,548.00"]
                  ]} 
                />
              </div>
              <div className="mt-12 flex justify-between text-[10px] text-gray-400 border-t pt-4 italic">
                <span>Report Generated on: {new Date().toLocaleDateString()}</span>
                <span>Authorized Computer Generated Document</span>
              </div>
            </div>
          </Card>
        </div>
      )}
    </PageLayout>
  );
}

const Field = ({ label, children }: any) => (
  <div className="flex flex-col gap-1">
    <label className="text-sm font-semibold text-gray-700">{label}</label>
    {children}
  </div>
);

const SummaryTable = ({ title, rows, headerClass }: any) => (
  <div className="border rounded-lg overflow-hidden shadow-sm">
    <div className={`${headerClass} text-white p-3 text-center font-bold uppercase tracking-tight`}>
      {title}
    </div>
    <table className="w-full text-sm">
      <thead>
        <tr className="bg-gray-50 text-gray-600 uppercase text-[10px] tracking-wider">
          <th className="border-b p-3 text-left">Head Name</th>
          <th className="border-b p-3 text-right">Amount (₹)</th>
        </tr>
      </thead>
      <tbody>
        {rows.map((r: any, i: number) => {
          const isTotal = i >= rows.length - 2;
          return (
            <tr key={i} className={`${isTotal ? "bg-gray-100 font-bold text-blue-800" : "text-gray-700"} hover:bg-gray-50 transition-colors`}>
              <td className="border-b p-3">{r[0]}</td>
              <td className="border-b p-3 text-right font-mono">₹ {r[1]}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  </div>
);