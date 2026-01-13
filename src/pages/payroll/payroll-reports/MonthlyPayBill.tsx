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

  return (
    <PageLayout title="Monthly Pay Bill">
      <Card className="mb-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-3">

          {[
            ["Division*", divisions, "division"],
            ["District", districts, "district"],
            ["Block", blocks, "block"],
            ["Office Type*", officeTypes, "officeType"],
            ["Office*", offices, "office"],
            ["Type of Post*", posts, "post"],
            ["Salary Type*", salaryTypes, "salary"],
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
              view="month"
              dateFormat="MM yy"
              className="w-full"
              placeholder="January, 2026" />
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
          <div className="flex justify-between mb-2">
            <h3 className="font-semibold">Details</h3>
            <Button label="Print" icon="pi pi-print" onClick={() => window.print()} />
          </div>

          <table className="w-full border text-xs">
            <thead className="bg-yellow-50">
              <tr>
                <th rowSpan={3}>SNo.</th>
                <th>Name Of The Employee<br />Designation<br />Treasury Code<br />Unique Id/GPF No.</th>
                <th>Basic Salary<br />House Rent Allowance</th>
                <th>Dearness Allowance<br />Other Allowance</th>
                <th>Total Earning</th>
                <th>GPF<br />GIS<br />Income Tax</th>
                <th>NPS<br />Professional Tax<br />HRR</th>
                <th>Total Deduction</th>
                <th>Net Salary</th>
                <th>Bank Name<br />Branch Name<br />Account No.</th>
              </tr>
            </thead>

            <tbody>
              {payBillData.map((e, i) => (
                <tr key={e.id}>
                  <td>{i + 1}</td>
                  <td>
                    <b>{e.name}</b><br />
                    {e.designation}<br />
                    {e.treasury}<br />
                    {e.uid}
                  </td>
                  <td>{e.basic}<br />{e.hra}</td>
                  <td>{e.da}<br />0</td>
                  <td>{e.total}</td>
                  <td>0<br />{e.gis}<br />0</td>
                  <td>{e.nps}<br />{e.profTax}<br />0</td>
                  <td>{e.totalDed}</td>
                  <td>{e.net}</td>
                  <td>
                    {e.bank}<br />
                    {e.branch}<br />
                    {e.acc}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Card>
      )}
    </PageLayout>
  );
}
