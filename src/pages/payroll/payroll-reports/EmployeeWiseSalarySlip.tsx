/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useRef } from "react";
import PageLayout from "@/components/PageLayout";
import { Card } from "primereact/card";
import { Calendar } from "primereact/calendar";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";

export default function EmployeeWiseSalarySlip() {
  const [monthDate, setMonthDate] = useState<Date | null>(null);
  const [empCode, setEmpCode] = useState("");
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
    <PageLayout title="Salary Slip">
      <Card className="mb-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Field label="Month *">
            <Calendar
              value={monthDate}
              onChange={(e) => setMonthDate(e.value as Date)}
              view="month"
              showIcon
              dateFormat="MM yy"
              className="w-full"
            />
          </Field>

          <Field label="Employee Code *">
            <InputText value={empCode} onChange={(e) => setEmpCode(e.target.value)} className="w-full" placeholder="Enter Employee Code" />
          </Field>
        </div>

        <div className="flex justify-center gap-4 mt-4">
          <Button label="Search" icon="pi pi-search" onClick={() => setShow(true)} />
          <Button label="Clear" icon="pi pi-times" severity="danger" onClick={() => {
            setMonthDate(null); setEmpCode(""); setShow(false);
          }} />
        </div>
      </Card>
      {show && (
        <div ref={printRef}>
          <Card title = " Salary Slip">
            <div className="text-center font-semibold text-xl mb-2">
              Payslip - {monthDate?.toLocaleString("default", { month: "long", year: "numeric" })}
            </div>
            <div className="text-center mb-4 text-sm">
              Department of Higher Education <br />
              (Government of Madhya Pradesh)
            </div>

            <table className="w-full border text-sm mb-4">
              <tbody>
                <tr>
                  <td className="border p-2 font-semibold">NAME OF EMPLOYEE :</td>
                  <td className="border p-2">Rajesh Jain</td>
                  <td className="border p-2 font-semibold">BANK NAME :</td>
                  <td className="border p-2">PUNJAB NATIONAL BANK</td>
                  <td className="border p-2 font-semibold">College/University NAME :</td>
                  <td className="border p-2">Barkatullah University Bhopal</td>
                </tr>
                <tr>
                  <td className="border p-2 font-semibold">Father/Husband Name :</td>
                  <td className="border p-2">Ramesh</td>
                  <td className="border p-2 font-semibold">ACCOUNT NUMBER :</td>
                  <td className="border p-2">7887879878898</td>
                  <td className="border p-2 font-semibold">Level :</td>
                  <td className="border p-2">Level-1</td>
                </tr>
                <tr>
                  <td className="border p-2 font-semibold">EMPLOYEE CODE :</td>
                  <td className="border p-2">WX8223</td>
                  <td className="border p-2 font-semibold">IFSC CODE :</td>
                  <td className="border p-2">PUNB0105700</td>
                  <td className="border p-2 font-semibold">Payable Days :</td>
                  <td className="border p-2">31</td>
                </tr>
              </tbody>
            </table>

            <div className="grid grid-cols-2 gap-6 mb-4 bg-gray-100 p-4">
              <table className="w-full text-sm">
                <thead>
                  <tr><th colSpan={2} className="text-left">Earnings</th></tr>
                </thead>
                <tbody>
                  <tr><td>BASIC PAY</td><td className="text-right">15500.00</td></tr>
                  <tr className="font-semibold"><td>TOTAL EARNING</td><td className="text-right">15500.00</td></tr>
                </tbody>
              </table>

              <table className="w-full text-sm">
                <thead>
                  <tr><th colSpan={2} className="text-left">Deductions</th></tr>
                </thead>
                <tbody>
                  <tr className="font-semibold"><td>TOTAL DEDUCTION</td><td className="text-right">0.00</td></tr>
                </tbody>
              </table>
            </div>

            <div className="flex justify-between bg-gray-100 p-3 text-sm">
              <div><b>Net Salary :</b> 15500.00</div>
              <div>THIS IS A COMPUTER GENERATED PAYSLIP, SIGNATURE NOT REQUIRED</div>
            </div>

            <div className="text-center mt-4">
              <Button label="Print" icon="pi pi-print" onClick={handlePrint} />
            </div>
          </Card>
        </div>
      )}
    </PageLayout>
  );
}
const Field = ({ label, children }: any) => (
  <div>
    <label className="text-sm font-semibold block mb-1">{label}</label>
    {children}
  </div>
);
