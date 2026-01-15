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
    const content = printRef.current?.innerHTML;
    const printWindow = window.open('', '_blank');
    if (printWindow && content) {
      printWindow.document.write(`
        <html>
          <head>
            <title>Salary Slip - ${empCode}</title>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css">
            <style>
              @media print { .no-print { display: none; } }
              body { padding: 20px; font-family: sans-serif; }
              table { width: 100%; border-collapse: collapse; }
              th, td { border: 1px solid #dee2e6; padding: 8px; }
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
    setMonthDate(null);
    setEmpCode("");
    setShow(false);
  };

  return (
    <PageLayout title="Salary Slip / वेतन पर्ची">

      <Card>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col gap-1">
            <label className="text-sm font-semibold text-gray-700">Select Month *</label>
            <Calendar
              value={monthDate}
              onChange={(e) => setMonthDate(e.value as Date)}
              view="month"
              showIcon
              dateFormat="MM yy"
              className="w-full"
              placeholder="Select Month"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-sm font-semibold text-gray-700">Employee Code *</label>
            <InputText 
                value={empCode} 
                onChange={(e) => setEmpCode(e.target.value)} 
                className="w-full" 
                placeholder="Ex: WX8223" 
            />
          </div>
        </div>

        <div className="flex justify-center md:justify-start gap-3 mt-8 pt-4 border-t">
          <Button 
            label="Generate Slip" 
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
          <Card className="shadow-lg border border-gray-200">
            <div className="flex justify-end mb-4 no-print">
               <Button label="Download / Print" icon="pi pi-print" className="p-button-outlined" onClick={handlePrint} />
            </div>

            <div ref={printRef} className="p-4 bg-white text-black">

              <div className="text-center mb-6">
                <h2 className="text-2xl font-bold uppercase underline">Salary Slip</h2>
                <p className="text-lg font-semibold mt-1">
                  Payslip for {monthDate?.toLocaleString("default", { month: "long", year: "numeric" })}
                </p>
                <div className="mt-2 text-sm leading-relaxed">
                  Department of Higher Education <br />
                  <span className="italic font-medium">Government of Madhya Pradesh</span>
                </div>
              </div>

              <table className="w-full border-collapse border border-gray-300 text-xs mb-6">
                <tbody>
                  <tr>
                    <td className="border border-gray-300 bg-gray-50 p-2 font-bold w-1/6">EMPLOYEE NAME:</td>
                    <td className="border border-gray-300 p-2 w-2/6">Rajesh Jain</td>
                    <td className="border border-gray-300 bg-gray-50 p-2 font-bold w-1/6">BANK NAME:</td>
                    <td className="border border-gray-300 p-2 w-2/6">PUNJAB NATIONAL BANK</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 bg-gray-50 p-2 font-bold">FATHER'S NAME:</td>
                    <td className="border border-gray-300 p-2">Ramesh Jain</td>
                    <td className="border border-gray-300 bg-gray-50 p-2 font-bold">ACCOUNT NO:</td>
                    <td className="border border-gray-300 p-2">7887879878898</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 bg-gray-50 p-2 font-bold">EMPLOYEE CODE:</td>
                    <td className="border border-gray-300 p-2">{empCode}</td>
                    <td className="border border-gray-300 bg-gray-50 p-2 font-bold">IFSC CODE:</td>
                    <td className="border border-gray-300 p-2">PUNB0105700</td>
                  </tr>
                </tbody>
              </table>

              <div className="grid grid-cols-2 gap-0 border border-gray-300 mb-6">

                <div className="border-r border-gray-300">
                  <div className="bg-gray-100 p-2 font-bold text-center border-b border-gray-300">EARNINGS</div>
                  <div className="p-2 flex justify-between text-sm"><span>BASIC PAY</span> <span>15500.00</span></div>
                  <div className="p-2 flex justify-between text-sm"><span>HRA</span> <span>0.00</span></div>
                  <div className="p-2 flex justify-between font-bold border-t bg-green-50 text-green-800">
                    <span>TOTAL EARNING (A)</span> <span>15500.00</span>
                  </div>
                </div>
    
                <div>
                  <div className="bg-gray-100 p-2 font-bold text-center border-b border-gray-300">DEDUCTIONS</div>
                  <div className="p-2 flex justify-between text-sm"><span>PROFESSIONAL TAX</span> <span>0.00</span></div>
                  <div className="p-2 flex justify-between text-sm"><span>INCOME TAX</span> <span>0.00</span></div>
                  <div className="p-2 flex justify-between font-bold border-t bg-red-50 text-red-800">
                    <span>TOTAL DEDUCTION (B)</span> <span>0.00</span>
                  </div>
                </div>
              </div>

              <div className="flex justify-between items-center bg-blue-600 text-white p-4 rounded shadow-inner">
                <div className="text-lg font-bold">NET SALARY (A - B):</div>
                <div className="text-2xl font-black underline decoration-double">₹ 15,500.00</div>
              </div>

              <div className="mt-8 text-center text-[10px] text-gray-500 italic">
                * This is a computer-generated payslip and does not require a physical signature.
              </div>
            </div>
          </Card>
        </div>
      )}
    </PageLayout>
  );
}