import React, { useState, useRef } from "react";
import PageLayout from "../../../components/PageLayout";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";
import { Dropdown } from "primereact/dropdown";
import { Card } from "primereact/card";
import { Toast } from "primereact/toast";
import { Tag } from "primereact/tag";
import { InputText } from "primereact/inputtext";
import { Calendar } from "primereact/calendar";
import { Divider } from "primereact/divider";

interface VendorPayment {
  id: number;
  billId: string;
  vendorName: string;
  billAmount: number;
  tdsDeduction: number;
  netPayable: number;
  paymentMode: string;
  transactionRef: string;
  paymentDate: Date | null;
  status: "Pending" | "Completed";
}

const VendorPaymentProcess: React.FC = () => {
  const toast = useRef<Toast>(null);
  const [viewMode, setViewMode] = useState<'list' | 'form'>('list');

  const [payments, setPayments] = useState<VendorPayment[]>([
    { 
      id: 1, 
      billId: "BILL/2025/101", 
      vendorName: "Global Travels", 
      billAmount: 53100, 
      tdsDeduction: 1062, 
      netPayable: 52038, 
      paymentMode: "NEFT", 
      transactionRef: "TXN998877", 
      paymentDate: new Date(), 
      status: "Completed" 
    }
  ]);

  const [formData, setFormData] = useState<Partial<VendorPayment>>({
    paymentMode: "NEFT",
    status: "Pending",
    tdsDeduction: 0
  });

  const paymentModes = [
    { label: "NEFT / RTGS", value: "NEFT" },
    { label: "Cheque", value: "Cheque" },
    { label: "UPI", value: "UPI" },
    { label: "Cash", value: "Cash" }
  ];
  const calculateNet = (billAmt: number) => {
    const tds = billAmt * 0.02;
    setFormData(prev => ({ 
      ...prev, 
      billAmount: billAmt, 
      tdsDeduction: tds, 
      netPayable: billAmt - tds 
    }));
  };

  const handleSave = () => {
    if (!formData.billId || !formData.transactionRef || !formData.paymentDate) {
      toast.current?.show({ severity: 'error', summary: 'Error', detail: 'Fill all transaction details' });
      return;
    }

    setPayments([...payments, { ...formData as VendorPayment, id: Date.now(), status: "Completed" }]);
    toast.current?.show({ severity: 'success', summary: 'Success', detail: 'Payment Processed Successfully' });
    setViewMode('list');
  };
  const renderListView = () => (
    <Card title="Vendor Payment History" className="shadow-sm border-t-4 border-blue-900 text-left">
      <div className="flex justify-end mb-4">
        <Button label="Process New Payment" icon="pi pi-credit-card" className="p-button-success" onClick={() => { setFormData({paymentMode: 'NEFT'}); setViewMode('form'); }} />
      </div>
      <DataTable value={payments} paginator rows={10} className="p-datatable-sm" showGridlines stripedRows>
        <Column field="billId" header="Bill Ref" />
        <Column field="vendorName" header="Vendor" />
        <Column field="netPayable" header="Paid Amount" body={(r) => <b>₹{r.netPayable.toLocaleString()}</b>} />
        <Column field="paymentMode" header="Mode" />
        <Column field="transactionRef" header="Transaction/UTR" />
        <Column field="status" header="Status" body={(r) => <Tag value={r.status} severity="success" />} />
        <Column header="Receipt" body={() => <Button icon="pi pi-file-pdf" className="p-button-text p-button-danger" label="PDF" />} />
      </DataTable>
    </Card>
  );

  const renderFormView = () => (
    <div className="max-w-5xl mx-auto text-left py-2">
      <div className="flex items-center gap-3 mb-4 bg-white p-3 rounded shadow-sm">
        <Button icon="pi pi-arrow-left" className="p-button-rounded p-button-text p-button-secondary" onClick={() => setViewMode('list')} />
        <h2 className="text-xl font-bold m-0 text-gray-800">Process Vendor Payment</h2>
      </div>

      <Card className="shadow-lg border-t-4 border-gray-800">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <div className="col-span-1 md:col-span-3">
             <h4 className="m-0 text-gray-800 uppercase text-sm font-black tracking-wider">Bill Reference & Amount</h4>
             <Divider className="my-2" />
          </div>

          <div className="flex flex-col gap-2">
            <label className="font-bold text-sm text-gray-700">Select Bill ID *</label>
            <InputText value={formData.billId || ''} onChange={(e) => setFormData({...formData, billId: e.target.value})} placeholder="Enter Approved Bill No" />
          </div>

          <div className="flex flex-col gap-2">
            <label className="font-bold text-sm text-gray-700">Vendor Name</label>
            <InputText value={formData.vendorName || ''} onChange={(e) => setFormData({...formData, vendorName: e.target.value})} placeholder="Transporter Name" />
          </div>

          <div className="flex flex-col gap-2">
            <label className="font-bold text-sm text-gray-700">Gross Bill Amount (₹) *</label>
            <InputText type="number" value={formData.billAmount?.toString() || ''} onChange={(e) => calculateNet(Number(e.target.value))} placeholder="Total Bill Value" />
          </div>

          <div className="col-span-1 md:col-span-3 mt-2">
             <h4 className="m-0 text-gray-800 uppercase text-sm font-black tracking-wider">Tax & Final Settlement</h4>
             <Divider className="my-2" />
          </div>

          <div className="flex flex-col gap-2">
            <label className="font-bold text-sm text-gray-700">TDS Deduction (2%)</label>
            <InputText value={formData.tdsDeduction?.toFixed(2) || '0.00'} disabled className="bg-red-50 text-red-700 font-bold" />
          </div>

          <div className="flex flex-col gap-2">
            <label className="font-bold text-sm text-gray-700">Net Amount to Pay</label>
            <InputText value={formData.netPayable?.toFixed(2) || '0.00'} disabled className="bg-green-50 text-green-800 font-black text-lg" />
          </div>

          <div className="col-span-1 md:col-span-3 mt-2">
             <h4 className="m-0 text-gray-800 uppercase text-sm font-black tracking-wider">Transaction Details</h4>
             <Divider className="my-2" />
          </div>

          <div className="flex flex-col gap-2">
            <label className="font-bold text-sm text-gray-700">Payment Mode</label>
            <Dropdown value={formData.paymentMode} options={paymentModes} onChange={(e) => setFormData({ ...formData, paymentMode: e.value })} className="w-full" />
          </div>

          <div className="flex flex-col gap-2">
            <label className="font-bold text-sm text-gray-700">Reference / UTR No *</label>
            <InputText value={formData.transactionRef || ''} onChange={(e) => setFormData({ ...formData, transactionRef: e.target.value })} placeholder="Cheque or NEFT Ref" />
          </div>

          <div className="flex flex-col gap-2">
            <label className="font-bold text-sm text-gray-700">Payment Date *</label>
            <Calendar value={formData.paymentDate} onChange={(e) => setFormData({ ...formData, paymentDate: e.value as Date })} showIcon className="w-full" />
          </div>

        </div>

        <div className="flex justify-between mt-12 pt-6 border-t border-gray-100">
          <Button label="Reset Form" icon="pi pi-refresh" className="p-button-outlined p-button-secondary" />
          <div className="flex gap-3">
            <Button label="Cancel" icon="pi pi-times" className="p-button-text p-button-secondary" onClick={() => setViewMode('list')} />
            <Button label="Confirm & Pay" icon="pi pi-check-circle" className="p-button-primary px-8 shadow-md" onClick={handleSave} />
          </div>
        </div>
      </Card>
    </div>
  );

  return (
    <PageLayout title="Vendor Payment Management">
      <Toast ref={toast} />
      {viewMode === 'list' ? renderListView() : renderFormView()}
    </PageLayout>
  );
};

export default VendorPaymentProcess;