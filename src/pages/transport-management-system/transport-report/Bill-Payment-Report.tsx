/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useRef } from "react";
import PageLayout from "../../../components/PageLayout";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";
import { Card } from "primereact/card";
import { Toast } from "primereact/toast";
import { Divider } from "primereact/divider";
import { InputText } from "primereact/inputtext";
import { Tag } from "primereact/tag";
import { Dropdown } from "primereact/dropdown";

interface BillPaymentReportData {
  id: number;
  billNo: string;
  vendorName: string;
  billDate: string;
  grossAmount: number;
  tdsAmount: number;
  netPaid: number;
  paymentMode: string;
  transactionId: string;
  status: "Paid" | "Partial" | "Pending";
}

const BillPaymentReport: React.FC = () => {
  const toast = useRef<Toast>(null);
  const [globalFilter, setGlobalFilter] = useState("");
  const [selectedStatus, setSelectedStatus] = useState<any>(null);

  const [reportData] = useState<BillPaymentReportData[]>([
    { 
      id: 1, 
      billNo: "INV/25/001", 
      vendorName: "Global Travels Pvt Ltd", 
      billDate: "02/01/2026", 
      grossAmount: 150000, 
      tdsAmount: 3000, 
      netPaid: 147000, 
      paymentMode: "NEFT", 
      transactionId: "N123456789", 
      status: "Paid" 
    },
    { 
      id: 2, 
      billNo: "INV/25/002", 
      vendorName: "City Bus Services", 
      billDate: "05/01/2026", 
      grossAmount: 85000, 
      tdsAmount: 1700, 
      netPaid: 83300, 
      paymentMode: "Cheque", 
      transactionId: "CHQ-998877", 
      status: "Paid" 
    },
    { 
      id: 3, 
      billNo: "INV/25/009", 
      vendorName: "Mehra Logistics", 
      billDate: "10/01/2026", 
      grossAmount: 45000, 
      tdsAmount: 0, 
      netPaid: 0, 
      paymentMode: "---", 
      transactionId: "---", 
      status: "Pending" 
    },
  ]);

  const statusOptions = [
    { label: "All Status", value: null },
    { label: "Paid", value: "Paid" },
    { label: "Pending", value: "Pending" }
  ];

  const header = (
    <div className="flex flex-wrap justify-between items-center gap-3">
      <div className="flex gap-2">
        <Dropdown 
          value={selectedStatus} 
          options={statusOptions} 
          onChange={(e) => setSelectedStatus(e.value)} 
          placeholder="Filter Status" 
          className="w-48"
        />
        <span className="p-input-icon-left">
          <i className="pi pi-search" />
          <InputText 
            type="search" 
            onInput={(e: any) => setGlobalFilter(e.target.value)} 
            placeholder="Search Bill/Vendor/TXN..." 
            className="w-64"
          />
        </span>
      </div>
      <div className="flex gap-2">
        <Button icon="pi pi-file-excel" label="Export" className="p-button-success p-button-sm" />
        <Button icon="pi pi-file-pdf" label="Download PDF" className="p-button-danger p-button-sm" />
      </div>
    </div>
  );

  const totalGross = reportData.reduce((acc, val) => acc + val.grossAmount, 0);
  const totalNet = reportData.reduce((acc, val) => acc + val.netPaid, 0);

  return (
    <PageLayout title="Financial Reports">
      <Toast ref={toast} />

      <Card className="shadow-lg border-t-4 border-gray-800 text-left">
        <div className="flex justify-between items-center">
            <div>
                <h3 className="m-0 text-gray-800 uppercase text-sm font-black tracking-widest">
                    Transporter & Vendor Bill Payment Report
                </h3>
                <p className="text-gray-500 text-xs font-bold mt-1">Consolidated view of all cleared and pending settlements</p>
            </div>
            <div className="text-right">
                <span className="text-[10px] font-black text-gray-400 block uppercase">Total Disbursed</span>
                <h3 className="m-0 text-green-700 font-black text-xl">₹ {totalNet.toLocaleString()}</h3>
            </div>
        </div>
        
        <Divider className="my-3" />
        
        <DataTable 
          value={reportData} 
          header={header}
          paginator rows={10} 
          globalFilter={globalFilter}
          className="p-datatable-sm mt-3" 
          showGridlines 
          stripedRows
        >
          <Column field="billNo" header="Bill No" sortable className="font-bold text-gray-700" />
          <Column field="vendorName" header="Vendor Name" sortable />
          <Column field="billDate" header="Bill Date" sortable />
          
          <Column header="Financials (₹)" body={(r) => (
            <div className="text-[11px]">
                <div className="flex justify-between"><span>Gross:</span> <b>{r.grossAmount.toLocaleString()}</b></div>
                <div className="flex justify-between text-red-600"><span>TDS (2%):</span> <b>{r.tdsAmount.toLocaleString()}</b></div>
                <Divider className="my-1" />
                <div className="flex justify-between text-blue-800 font-bold"><span>Net Paid:</span> <span>{r.netPaid.toLocaleString()}</span></div>
            </div>
          )} />

          <Column header="Payment Info" body={(r) => (
             <div className="leading-tight">
                <div className="font-bold text-xs">{r.paymentMode}</div>
                <small className="text-gray-500 text-[10px] uppercase">{r.transactionId}</small>
             </div>
          )} />
          
          <Column header="Status" body={(r) => (
            <Tag value={r.status} severity={r.status === 'Paid' ? 'success' : 'warning'} />
          )} />

          <Column header="Receipt" body={() => (
            <Button icon="pi pi-print" className="p-button-text p-button-sm" label="Print" />
          )} />
        </DataTable>

        <div className="mt-4 flex justify-end gap-10 bg-gray-50 p-3 border rounded">
            <div className="text-center">
                <span className="text-[10px] font-black text-gray-500 uppercase">Total Bill Amount</span>
                <div className="font-bold text-lg text-gray-800">₹ {totalGross.toLocaleString()}</div>
            </div>
            <div className="text-center">
                <span className="text-[10px] font-black text-gray-500 uppercase">Total Net Paid</span>
                <div className="font-black text-lg text-blue-900">₹ {totalNet.toLocaleString()}</div>
            </div>
        </div>
      </Card>
    </PageLayout>
  );
};

export default BillPaymentReport;