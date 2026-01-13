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
  const [division, setDivision] = useState<any>(null);
  const [district, setDistrict] = useState<any>(null);
  const [block, setBlock] = useState<any>(null);
  const [officeType, setOfficeType] = useState<any>(null);
  const [office, setOffice] = useState<any>(null);
  const [monthDate, setMonthDate] = useState<Date | null>(null);
  const [postType, setPostType] = useState<any>(null);
  const [show, setShow] = useState(false);

  const printRef = useRef<HTMLDivElement>(null);

  const handlePrint = () => {
    const printContents = printRef.current?.innerHTML || "";
    const original = document.body.innerHTML;

    document.body.innerHTML = printContents;
    window.print();
    document.body.innerHTML = original;
    window.location.reload();
  };

  return (
    <PageLayout title="Final Summary Report">
      <Card className="mb-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Field label="Division *">
            <Dropdown value={division} onChange={(e) => setDivision(e.value)} options={divisions} placeholder="Select" className="w-full" />
          </Field>

          <Field label="District *">
            <Dropdown value={district} onChange={(e) => setDistrict(e.value)} options={districts} placeholder="Select" className="w-full" />
          </Field>

          <Field label="Block *">
            <Dropdown value={block} onChange={(e) => setBlock(e.value)} options={blocks} placeholder="Select" className="w-full" />
          </Field>

          <Field label="Office Type *">
            <Dropdown value={officeType} onChange={(e) => setOfficeType(e.value)} options={officeTypes} placeholder="Select" className="w-full" />
          </Field>

          <Field label="Office *">
            <Dropdown value={office} onChange={(e) => setOffice(e.value)} options={offices} placeholder="Select" className="w-full" />
          </Field>

          <Field label="Month *">
            <Calendar value={monthDate} onChange={(e) => setMonthDate(e.value as Date)} view="month" showIcon dateFormat="MM yy" className="w-full" />
          </Field>

          <Field label="Type of Post *">
            <Dropdown value={postType} onChange={(e) => setPostType(e.value)} options={postTypes} placeholder="Select" className="w-full" />
          </Field>
        </div>

        <div className="flex justify-center gap-4 mt-4">
          <Button label="Search" icon="pi pi-search" onClick={() => setShow(true)} />
          <Button label="Clear" icon="pi pi-times" severity="danger"
            onClick={() => {
              setDivision(null); setDistrict(null); setBlock(null);
              setOfficeType(null); setOffice(null); setMonthDate(null);
              setPostType(null); setShow(false);
            }} />
        </div>
      </Card>

      {show && (
        <div ref={printRef}>
          <Card>
            <div className="flex justify-between items-center mb-3">
              <h3 className="font-semibold">Employee Details</h3>
              <Button label="Print" icon="pi pi-print" onClick={handlePrint} />
            </div>

            <div className="text-center mb-4">
              <div className="font-semibold text-lg">University</div>
              <div>Barkatullah University, Bhopal</div>
              <div className="font-medium">
                Final Summary Report For The Month Of {monthDate?.toLocaleString("default", { month: "short", year: "numeric" })}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <SummaryTable title="Earning" rows={[
                ["Basic", "638480.00"],
                ["DEARNESS ALLOWANCE", "293702.00"],
                ["HOUSE RENT ALLOWANCE", "9131.00"],
                ["OTHER ALLOWANCE", "500.00"],
                ["GROSS SALARY", "941813"],
                ["NET AMOUNT", "822265.00"]
              ]} />

              <SummaryTable title="Deduction" rows={[
                ["GIS", "5200.00"],
                ["HRR", "900.00"],
                ["INCOME TAX", "23500.00"],
                ["NPS", "88990.00"],
                ["PROFESSIONAL TAX", "958.00"],
                ["TOTAL DEDUCTION", "119548.00"]
              ]} />
            </div>
          </Card>
        </div>
      )}
    </PageLayout>
  );
}

const Field = ({ label, children }: any) => (
  <div>
    <label className="text-sm font-semibold mb-1 block">{label}</label>
    {children}
  </div>
);

const SummaryTable = ({ title, rows }: any) => (
  <table className="w-full border text-sm">
    <thead>
      <tr><th colSpan={2} className="border p-2 text-center font-semibold">{title}</th></tr>
      <tr className="bg-gray-50">
        <th className="border p-2">Head Name</th>
        <th className="border p-2">Amount (₹)</th>
      </tr>
    </thead>
    <tbody>
      {rows.map((r: any, i: number) => (
        <tr key={i} className={i >= rows.length - 2 ? "font-semibold" : ""}>
          <td className="border p-2">{r[0]}</td>
          <td className="border p-2 text-right">{r[1]}</td>
        </tr>
      ))}
    </tbody>
  </table>
);
