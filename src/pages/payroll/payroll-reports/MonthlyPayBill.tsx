/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import PageLayout from "@/components/PageLayout";
import { Card } from "primereact/card";
import { Dropdown } from "primereact/dropdown";
import { Calendar } from "primereact/calendar";
import { Button } from "primereact/button";

const divisions = [{ label: "Bhopal Division", value: "bhopal" }];
const districts = [{ label: "Bhopal", value: "bhopal" }];
const blocks = [{ label: "Block A", value: "A" }];
const officeTypes = [{ label: "Head Office", value: "HO" }];
const offices = [{ label: "Finance Office", value: "FIN" }];
const posts = [{ label: "Fixed Employee", value: "fixed" }];
const salaryTypes = [{ label: "Regular", value: "regular" }];

const payBillData = [
  {
    id: 1,
    name: "Vijeta Suryawanshi",
    designation: "Asstt Grade-2",
    treasury: "987987646",
    uid: "SW7585",
    basic: 56100,
    da: 25806,
    hra: 2100,
    total: 84006,
    nps: 8191,
    gis: 400,
    profTax: 208,
    totalDed: 8799,
    net: 75207,
    bank: "STATE BANK OF INDIA",
    branch: "CHHINDWARA",
    acc: "30998792639",
  },
];

export default function MonthlyPayBill() {
  const [filters, setFilters] = useState<any>({});
  const [month, setMonth] = useState<Date | null>(null);
  const [show, setShow] = useState(false);

  const formatCurrency = (val: number) => 
    val.toLocaleString('en-IN', { minimumFractionDigits: 2 });

  const handleClear = () => {
    setFilters({});
    setMonth(null);
    setShow(false);
  };

  const filterConfigs = [
    ["Division*", divisions, "division"],
    ["District", districts, "district"],
    ["Block", blocks, "block"],
    ["Office Type*", officeTypes, "officeType"],
    ["Office*", offices, "office"],
    ["Type of Post*", posts, "post"],
    ["Salary Type*", salaryTypes, "salary"],
  ];

  return (
    <PageLayout title="Monthly Pay Bill / मासिक वेतन बिल">
      <Card className="shadow-sm  mb-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {filterConfigs.map(([label, opts, key]: any) => (
            <div key={key} className="flex flex-col gap-1">
              <label className="font-semibold text-sm text-gray-700">{label}</label>
              <Dropdown 
                value={filters[key]} 
                options={opts}
                onChange={e => setFilters({ ...filters, [key]: e.value })}
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
              dateFormat="MM yy"
              showIcon
              className="w-full"
              placeholder="Select Month" 
            />
          </div>
        </div>

        <div className="flex justify-center md:justify-start gap-3 mt-8 pt-4 border-t">
          <Button 
            label="Search Bill" 
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
          <Card className="shadow-sm border-t border-gray-200 overflow-hidden">
            <div className="flex justify-between items-center mb-6">
              <div>
                <h3 className="text-lg font-bold text-blue-800 uppercase tracking-tight">Pay Bill Particulars</h3>
                <p className="text-xs text-gray-500">Statement for the month of {month?.toLocaleDateString('en-IN', { month: 'long', year: 'numeric' })}</p>
              </div>
              <Button label="Print Bill" icon="pi pi-print" className="p-button-outlined" onClick={() => window.print()} />
            </div>

            <div className="overflow-x-auto border rounded-lg">
              <table className="w-full border-collapse text-[11px]">
                <thead className="bg-gray-100 text-gray-700 uppercase">
                  <tr>
                    <th className="border p-2 text-center" rowSpan={2}>SNo.</th>
                    <th className="border p-2 text-left" rowSpan={2}>Employee Details</th>
                    <th className="border p-2 text-center" colSpan={3}>Earnings (A)</th>
                    <th className="border p-2 text-center" colSpan={3}>Deductions (B)</th>
                    <th className="border p-2 text-center" rowSpan={2}>Net Salary (A-B)</th>
                    <th className="border p-2 text-left" rowSpan={2}>Bank Information</th>
                  </tr>
                  <tr className="bg-gray-50">
                    <th className="border p-2 text-right">Basic + HRA</th>
                    <th className="border p-2 text-right">DA + Other</th>
                    <th className="border p-2 text-right font-bold">Gross</th>
                    <th className="border p-2 text-right">GPF/GIS/IT</th>
                    <th className="border p-2 text-right">NPS/PT/HRR</th>
                    <th className="border p-2 text-right font-bold">Total Ded.</th>
                  </tr>
                </thead>

                <tbody className="divide-y">
                  {payBillData.map((e, i) => (
                    <tr key={e.id} className="hover:bg-gray-50 transition-colors">
                      <td className="border p-2 text-center align-top">{i + 1}</td>
                      <td className="border p-2 align-top">
                        <div className="font-bold text-blue-700">{e.name}</div>
                        <div className="text-gray-600">{e.designation}</div>
                        <div className="text-[10px] mt-1 italic text-gray-500">
                          Treasury: {e.treasury} | UID: {e.uid}
                        </div>
                      </td>
                      <td className="border p-2 text-right align-top">
                        {formatCurrency(e.basic)}<br />
                        <span className="text-gray-400">{formatCurrency(e.hra)}</span>
                      </td>
                      <td className="border p-2 text-right align-top">
                        {formatCurrency(e.da)}<br />
                        <span className="text-gray-400">0.00</span>
                      </td>
                      <td className="border p-2 text-right align-top font-bold bg-green-50">
                        {formatCurrency(e.total)}
                      </td>
                      <td className="border p-2 text-right align-top">
                        0.00<br />
                        {formatCurrency(e.gis)}<br />
                        0.00
                      </td>
                      <td className="border p-2 text-right align-top">
                        {formatCurrency(e.nps)}<br />
                        {formatCurrency(e.profTax)}<br />
                        0.00
                      </td>
                      <td className="border p-2 text-right align-top font-bold bg-red-50">
                        {formatCurrency(e.totalDed)}
                      </td>
                      <td className="border p-2 text-right align-top font-black text-blue-800 text-sm bg-blue-50">
                        {formatCurrency(e.net)}
                      </td>
                      <td className="border p-2 align-top">
                        <div className="font-semibold text-gray-700">{e.bank}</div>
                        <div className="text-gray-500">{e.branch}</div>
                        <div className="font-mono text-blue-600">{e.acc}</div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            <div className="mt-4 p-3 bg-gray-100 rounded text-[10px] text-gray-500 italic text-center uppercase tracking-widest">
              * Certified that the Pay Bill is as per the latest records and verified by the competent authority.
            </div>
          </Card>
        </div>
      )}
    </PageLayout>
  );
}