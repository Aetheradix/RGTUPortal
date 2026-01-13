import React, { useState } from "react";
import PageLayout from "../../../components/PageLayout";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { Dropdown } from "primereact/dropdown";
import { DataTable, type DataTableExpandedRows } from "primereact/datatable";
import { Column } from "primereact/column";
import { Calendar } from "primereact/calendar";
import { InputTextarea } from "primereact/inputtextarea";
import { ConfirmDialog, confirmDialog } from "primereact/confirmdialog";

interface QuotaRecord {
  id: number;
  castCategory: string;
  quota: string;
  totalSeats: number;
  reservedPercentage: string;
  quotaStatus: string;
  effectiveFrom: string;
  effectiveTo: string;
  adminDescription: string;
}

const SeatAcceptanceQuota: React.FC = () => {
  const [viewMode, setViewMode] = useState<'LIST' | 'FORM'>('LIST');
  const [formTitle, setFormTitle] = useState<string>("Add Reserved Categories Quota");
  const [expandedRows, setExpandedRows] = useState<DataTableExpandedRows | undefined>(undefined);
  const [globalFilter, setGlobalFilter] = useState<string>("");

  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [selectedQuota, setSelectedQuota] = useState<string>("");
  const [quotaStatus, setQuotaStatus] = useState<string>("");

  const categories = ["General", "OBC", "ST", "SC", "EWS"];
  const quotas = ["State Quota", "Central Quota", "NRI Quota"];
  const statusList = ["Active", "InActive"];

  const [quotaList] = useState<QuotaRecord[]>([
    {
      id: 1,
      castCategory: "OBC",
      quota: "State Quota",
      totalSeats: 120,
      reservedPercentage: "20%",
      quotaStatus: "Active",
      effectiveFrom: "21-Nov-2024",
      effectiveTo: "21-Nov-2025",
      adminDescription: "Applicable for OBC students",
    }
  ]);

  const openAddForm = () => {
    setFormTitle("Add Reserved Categories Quota");
    setViewMode('FORM');
  };

  const openEditForm = (data: QuotaRecord) => {
    setFormTitle("Update Reserved Categories Quota");
    setSelectedCategory(data.castCategory);
    setSelectedQuota(data.quota);
    setQuotaStatus(data.quotaStatus);
    setViewMode('FORM');
  };

  const closeForm = () => {
    setViewMode('LIST');
    setSelectedCategory("");
    setSelectedQuota("");
    setQuotaStatus("");
  };

  const confirmSave = () => {
    confirmDialog({
      message: formTitle.includes("Add") ? "Do you want to save this quota?" : "Do you want to update this quota record?",
      header: 'Confirmation',
      icon: 'pi pi-exclamation-triangle',
      acceptClassName: 'p-button-success',
      accept: () => closeForm()
    });
  };

  const confirmDelete = (id: number) => {
    confirmDialog({
      message: 'Are you sure you want to delete this quota record?',
      header: 'Delete Confirmation',
      icon: 'pi pi-trash',
      acceptClassName: 'p-button-danger',
      accept: () => {
        console.log("Deleted ID:", id);
      }
    });
  };

  const ListView = (
    <div className="bg-white p-6 rounded shadow-sm border animate-fadein">
      <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4 border-b pb-4">
        <h2 className="text-xl font-bold text-gray-800">Reserved Categories Quota</h2>
        <Button 
          label="Add New Quota" 
          icon="pi pi-plus" 
          className="p-button-sm p-button-success px-4" 
          onClick={openAddForm} 
        />
      </div>

      <div className="flex justify-end mb-4">
        <span className="p-input-icon-left w-full md:w-auto">
          <i className="pi pi-search" />
          <InputText 
            value={globalFilter} 
            onChange={(e) => setGlobalFilter(e.target.value)} 
            placeholder="Quick Search..." 
            className="p-inputtext-sm w-full md:w-64" 
          />
        </span>
      </div>

      <DataTable
        value={quotaList}
        expandedRows={expandedRows}
        onRowToggle={(e) => setExpandedRows(e.data as DataTableExpandedRows)}
        rowExpansionTemplate={(data) => (
          <div className="p-4 bg-blue-50 border border-blue-100 rounded-lg m-2 grid grid-cols-1 md:grid-cols-2 gap-4 text-sm shadow-inner">
            <div>
              <p className="mb-2"><strong>Quota Status:</strong> 
                 <span className={`ml-2 font-bold ${data.quotaStatus === 'Active' ? 'text-green-600' : 'text-red-600'}`}>
                   {data.quotaStatus}
                 </span>
              </p>
              <p><strong>Admin Description:</strong> {data.adminDescription}</p>
            </div>
            <div className="flex flex-col justify-end items-end gap-2">
              <div className="flex gap-2">
                <Button icon="pi pi-pencil" label="Edit" className="p-button-sm p-button-info" onClick={() => openEditForm(data)} />
                <Button icon="pi pi-trash" label="Delete" className="p-button-sm p-button-danger" onClick={() => confirmDelete(data.id)} />
              </div>
            </div>
          </div>
        )}
        paginator rows={10} globalFilter={globalFilter} className="p-datatable-sm" showGridlines stripedRows dataKey="id"
      >
        <Column expander style={{ width: "3rem" }} />
        <Column field="id" header="Sr No." style={{ width: "4rem" }} />
        <Column field="castCategory" header="Cast Category" sortable />
        <Column field="quota" header="Quota" sortable />
        <Column field="totalSeats" header="Total Seat" sortable />
        <Column field="reservedPercentage" header="Reserved %" sortable />
        <Column field="effectiveFrom" header="From Date" sortable />
        <Column field="effectiveTo" header="To Date" sortable />
      </DataTable>
    </div>
  );

  const FormView = (
    <div className="bg-white p-6 rounded shadow-sm border animate-fadein">
      <div className="flex justify-between items-center mb-6 border-b pb-4">
        <h2 className="text-xl font-bold uppercase text-blue-700 border-l-4 border-blue-700 pl-3">{formTitle}</h2>
        <Button label="Back to List" icon="pi pi-arrow-left" className="p-button-text p-button-sm" onClick={closeForm} />
      </div>

      <div className="p-fluid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="field">
          <label className="font-bold text-xs uppercase mb-2 block">Cast Category*</label>
          <Dropdown value={selectedCategory} options={categories} onChange={(e) => setSelectedCategory(e.value)} placeholder="Select" className="p-inputtext-sm" />
        </div>
        <div className="field">
          <label className="font-bold text-xs uppercase mb-2 block">Quota Type*</label>
          <Dropdown value={selectedQuota} options={quotas} onChange={(e) => setSelectedQuota(e.value)} placeholder="Select" className="p-inputtext-sm" />
        </div>
        <div className="field">
          <label className="font-bold text-xs uppercase mb-2 block">Total Seats*</label>
          <InputText type="number" placeholder="Enter number" className="p-inputtext-sm" />
        </div>
        <div className="field">
          <label className="font-bold text-xs uppercase mb-2 block">Status*</label>
          <Dropdown value={quotaStatus} options={statusList} onChange={(e) => setQuotaStatus(e.value)} placeholder="Select" className="p-inputtext-sm" />
        </div>
        <div className="field">
          <label className="font-bold text-xs uppercase mb-2 block">Effective From*</label>
          <Calendar showIcon placeholder="DD/MM/YYYY" className="p-inputtext-sm" />
        </div>
        <div className="field">
          <label className="font-bold text-xs uppercase mb-2 block">Effective To*</label>
          <Calendar showIcon placeholder="DD/MM/YYYY" className="p-inputtext-sm" />
        </div>
        <div className="field col-span-full">
          <label className="font-bold text-xs uppercase mb-2 block">Admin Description*</label>
          <InputTextarea rows={3} placeholder="Write details here..." className="p-inputtext-sm" />
        </div>
      </div>

      <div className="col-span-full flex justify-end gap-3 mt-8 pt-5 border-t">
        <Button label="Clear Form" icon="pi pi-refresh" className="p-button-secondary p-button-outlined w-32" onClick={() => { setSelectedCategory(""); setSelectedQuota(""); setQuotaStatus(""); }} />
        <Button label={formTitle.includes("Add") ? "Save Quota" : "Update Quota"} icon="pi pi-check" className="p-button-success px-8" onClick={confirmSave} />
      </div>
    </div>
  );

  return (
    <PageLayout title="Seat Acceptance Quota Management">
      <ConfirmDialog />
      {viewMode === 'LIST' ? ListView : FormView}
    </PageLayout>
  );
};
export default SeatAcceptanceQuota;