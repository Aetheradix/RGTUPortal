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
import { FileUpload } from "primereact/fileupload";

interface TransporterBill {
  id: number;
  billNo: string;
  transporterName: string;
  billingMonth: Date | null;
  amount: number;
  gstAmount: number;
  totalPayable: number;
  uploadDate: Date;
  status: "Pending" | "Verified" | "Paid";
}

const TransporterBillUpload: React.FC = () => {
  const toast = useRef<Toast>(null);
  const [viewMode, setViewMode] = useState<'list' | 'form'>('list');

  const [bills, setBills] = useState<TransporterBill[]>([
    { 
      id: 1, 
      billNo: "BILL/2025/101", 
      transporterName: "Global Travels", 
      billingMonth: new Date(2025, 0), 
      amount: 45000, 
      gstAmount: 8100, 
      totalPayable: 53100, 
      uploadDate: new Date(),
      status: "Pending" 
    }
  ]);

  const [formData, setFormData] = useState<Partial<TransporterBill>>({
    status: "Pending",
    amount: 0,
    gstAmount: 0,
    totalPayable: 0
  });

  const transporterOptions = [
    { label: "Global Travels", value: "Global Travels" },
    { label: "City Bus Services", value: "City Bus Services" }
  ];

  const handleClear = () => {
    setFormData({ 
        status: "Pending", 
        amount: 0, 
        gstAmount: 0, 
        totalPayable: 0,
        billNo: "",
        billingMonth: null
    });
  };

  const calculateTotal = (amt: number) => {
    const gst = amt * 0.18;
    setFormData(prev => ({ ...prev, amount: amt, gstAmount: gst, totalPayable: amt + gst }));
  };

  const handleSave = () => {
    if (!formData.billNo || !formData.transporterName || !formData.amount) {
      toast.current?.show({ severity: 'error', summary: 'Error', detail: 'Please fill all billing details' });
      return;
    }

    const newBill = { ...formData, id: Date.now(), uploadDate: new Date() } as TransporterBill;
    setBills([...bills, newBill]);
    toast.current?.show({ severity: 'success', summary: 'Uploaded', detail: 'Bill submitted successfully' });
    setViewMode('list');
  };

  const renderListView = () => (
    <Card title="Uploaded Transporter Bills" className="shadow-sm border-t-4 border-blue-900 text-left">
      <div className="flex justify-end mb-4">
        <Button label="Upload New Bill" icon="pi pi-upload" onClick={() => { handleClear(); setViewMode('form'); }} />
      </div>
      <DataTable value={bills} paginator rows={10} className="p-datatable-sm" showGridlines stripedRows>
        <Column field="billNo" header="Bill No" sortable />
        <Column field="transporterName" header="Transporter" sortable />
        <Column field="billingMonth" header="Month" body={(r) => r.billingMonth?.toLocaleString('default', { month: 'long', year: 'numeric' })} />
        <Column field="totalPayable" header="Total Amount (₹)" body={(r) => <b>{r.totalPayable.toLocaleString()}</b>} />
        <Column header="Status" body={(r) => (
          <Tag value={r.status} severity={r.status === 'Pending' ? 'warning' : r.status === 'Paid' ? 'success' : 'info'} />
        )} />
        <Column header="Action" body={() => <Button icon="pi pi-eye" className="p-button-text" label="View" />} />
      </DataTable>
    </Card>
  );

  const renderFormView = () => (
    <div className="max-w-5xl mx-auto text-left py-2">
      <div className="flex items-center gap-3 mb-4 bg-white p-3 rounded shadow-sm">
        <Button icon="pi pi-arrow-left" className="p-button-rounded p-button-text p-button-secondary" onClick={() => setViewMode('list')} />
        <h2 className="text-xl font-bold m-0 text-gray-800">New Bill Submission</h2>
      </div>

      <Card className="shadow-lg border-t-4 border-gray-800">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <div className="col-span-1 md:col-span-3">
             <h4 className="m-0 text-gray-800 uppercase text-sm font-black tracking-wider">Vendor & Invoice Details</h4>
             <Divider className="my-2" />
          </div>

          <div className="flex flex-col gap-2">
            <label className="font-bold text-sm text-gray-700">Select Transporter *</label>
            <Dropdown value={formData.transporterName} options={transporterOptions} onChange={(e) => setFormData({ ...formData, transporterName: e.value })} placeholder="Select Vendor" className="w-full" />
          </div>

          <div className="flex flex-col gap-2">
            <label className="font-bold text-sm text-gray-700">Invoice/Bill Number *</label>
            <InputText value={formData.billNo || ''} onChange={(e) => setFormData({ ...formData, billNo: e.target.value })} placeholder="e.g. TR/24/501" />
          </div>

          <div className="flex flex-col gap-2">
            <label className="font-bold text-sm text-gray-700">Billing Month *</label>
            <Calendar value={formData.billingMonth} onChange={(e) => setFormData({ ...formData, billingMonth: e.value as Date })} view="month" dateFormat="mm/yy" placeholder="Select Month" className="w-full" />
          </div>

          <div className="col-span-1 md:col-span-3 mt-2">
             <h4 className="m-0 text-gray-800 uppercase text-sm font-black tracking-wider">Financial Breakdown (₹)</h4>
             <Divider className="my-2" />
          </div>

          <div className="flex flex-col gap-2">
            <label className="font-bold text-sm text-gray-700">Base Amount *</label>
            <InputText type="number" value={formData.amount?.toString() || ''} onChange={(e) => calculateTotal(Number(e.target.value))} placeholder="0.00" />
          </div>

          <div className="flex flex-col gap-2">
            <label className="font-bold text-sm text-gray-700">GST (18% Auto)</label>
            <InputText value={formData.gstAmount?.toFixed(2) || '0.00'} disabled className="bg-gray-50 font-semibold" />
          </div>

          <div className="flex flex-col gap-2">
            <label className="font-bold text-sm text-gray-700">Total Payable Amount</label>
            <InputText value={formData.totalPayable?.toFixed(2) || '0.00'} disabled className="bg-blue-50 font-bold text-blue-900" />
          </div>

          <div className="col-span-1 md:col-span-3 mt-2">
             <h4 className="m-0 text-gray-800 uppercase text-sm font-black tracking-wider">Document Attachment</h4>
             <Divider className="my-2" />
          </div>

          <div className="col-span-1 md:col-span-3">
            <label className="font-bold text-sm text-gray-700 block mb-2">Upload Scanned Bill (PDF/JPG) *</label>
            <FileUpload mode="basic" auto chooseLabel="Browse File" className="w-full" accept="image/*,application/pdf" />
          </div>

        </div>

        <div className="flex justify-between mt-12 pt-6 border-t border-gray-100">
          <Button label="Clear Form" icon="pi pi-refresh" className="p-button-outlined p-button-secondary" onClick={handleClear} />
          <div className="flex gap-3">
            <Button label="Cancel" icon="pi pi-text p-button-secondary" onClick={() => setViewMode('list')} />
            <Button label="Save & Submit" icon="pi pi-check-circle" className="p-button-success px-8 shadow-md" onClick={handleSave} />
          </div>
        </div>
      </Card>
    </div>
  );

  return (
    <PageLayout title="Transporter Bill Management">
      <Toast ref={toast} />
      {viewMode === 'list' ? renderListView() : renderFormView()}
    </PageLayout>
  );
};

export default TransporterBillUpload;