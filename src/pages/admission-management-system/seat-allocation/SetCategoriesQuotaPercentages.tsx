import React, { useState } from "react";
import PageLayout from "../../../components/PageLayout";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { Dropdown } from "primereact/dropdown";
import { DataTable, type DataTableExpandedRows } from "primereact/datatable";
import { Column } from "primereact/column";
import { Calendar } from "primereact/calendar";
import { ConfirmDialog, confirmDialog } from "primereact/confirmdialog";

interface QuotaPercentageRecord {
  id: number;
  castCategory: string;
  quotaType: string;
  courseName: string;
  reservedPercentage: string;
  effectiveFrom: string;
  effectiveTo: string;
  approvedBy: string;
  lastModifiedBy: string;
  quotaStatus: string;
}

const SetCategoryQuota: React.FC = () => {
  const [showForm, setShowForm] = useState<boolean>(false);
  const [formTitle, setFormTitle] = useState<string>("Add Set Categories Quota Percentages");
  const [expandedRows, setExpandedRows] = useState<DataTableExpandedRows | undefined>(undefined);
  const [globalFilter, setGlobalFilter] = useState<string>("");

  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [selectedQuota, setSelectedQuota] = useState<string>("");
  const [selectedCourse, setSelectedCourse] = useState<string>("");
  const [selectedStatus, setSelectedStatus] = useState<string>("");

  const categories = ["General", "OBC", "ST", "SC", "EWS"];
  const quotas = ["State Quota", "Central Quota", "NRI Quota", "Home State Quota"];
  const courses = ["B.Tech", "M.Tech", "BCA", "MCA", "B.Sc (IT)"];
  const statusList = ["Active", "InActive"];

  const [dataList] = useState<QuotaPercentageRecord[]>([
    {
      id: 1,
      castCategory: "General",
      quotaType: "State Quota",
      courseName: "MCA",
      reservedPercentage: "20%",
      effectiveFrom: "21-Nov-2024",
      effectiveTo: "21-Nov-2025",
      approvedBy: "Admin",
      lastModifiedBy: "Prof. Sharma",
      quotaStatus: "Active"
    }
  ]);
  const confirmSave = () => {
    confirmDialog({
      message: formTitle.includes("Add") ? "Do you want to save this quota policy?" : "Do you want to update this quota policy?",
      header: 'Confirmation',
      icon: 'pi pi-exclamation-triangle',
      acceptClassName: 'p-button-success',
      accept: () => setShowForm(false)
    });
  };

  const confirmDelete = (id: number) => {
    confirmDialog({
      message: 'Are you sure you want to delete this configuration?',
      header: 'Delete Confirmation',
      icon: 'pi pi-trash',
      acceptClassName: 'p-button-danger',
      accept: () => {
        console.log("Deleted Record ID:", id);
      }
    });
  };

  const handleAddNew = () => {
    setFormTitle("Add Set Categories Quota Percentages");
    setSelectedCategory("");
    setSelectedQuota("");
    setSelectedCourse("");
    setSelectedStatus("");
    setShowForm(true);
  };

  const handleEdit = (data: QuotaPercentageRecord) => {
    setFormTitle("Update Set Categories Quota Percentages");
    setSelectedCategory(data.castCategory);
    setSelectedQuota(data.quotaType);
    setSelectedCourse(data.courseName);
    setSelectedStatus(data.quotaStatus);
    setShowForm(true);
  };

  const ListView = (
    <div className="bg-white p-6 rounded shadow-sm border animate-fadein">
      <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4 border-b pb-4">
        <h2 className="text-xl font-bold text-gray-800 border-l-4 border-green-500 pl-3">Quota Percentages List</h2>
        <Button 
          label="Add New Configuration" 
          icon="pi pi-plus" 
          className="p-button-sm p-button-success px-4" 
          onClick={handleAddNew} 
        />
      </div>

      <div className="flex justify-end mb-4">
        <span className="p-input-icon-left w-full md:w-auto">
          <i className="pi pi-search" />
          <InputText 
            value={globalFilter} 
            onChange={(e) => setGlobalFilter(e.target.value)} 
            placeholder="Search by category or course..." 
            className="p-inputtext-sm w-full md:w-80" 
          />
        </span>
      </div>

      <DataTable
        value={dataList}
        expandedRows={expandedRows}
        onRowToggle={(e) => setExpandedRows(e.data as DataTableExpandedRows)}
        rowExpansionTemplate={(data) => (
          <div className="p-4 bg-blue-50 border border-blue-100 rounded-lg m-2 grid grid-cols-1 md:grid-cols-2 gap-4 text-sm shadow-inner">
            <div>
              <p><strong>Last Modified By:</strong> {data.lastModifiedBy}</p>
              <p className="mt-2"><strong>Quota Status:</strong> 
                <span className={`ml-2 px-2 py-0.5 rounded text-xs font-bold ${data.quotaStatus === 'Active' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                  {data.quotaStatus}
                </span>
              </p>
            </div>
            <div className="flex items-end justify-end gap-2">
              <Button icon="pi pi-pencil" label="Edit" className="p-button-sm p-button-info" onClick={() => handleEdit(data)} />
              <Button icon="pi pi-trash" label="Delete" className="p-button-sm p-button-danger" onClick={() => confirmDelete(data.id)} />
            </div>
          </div>
        )}
        paginator rows={10} globalFilter={globalFilter} className="p-datatable-sm" showGridlines stripedRows dataKey="id"
      >
        <Column expander style={{ width: "3rem" }} />
        <Column field="id" header="Sr No." style={{ width: "4rem" }} />
        <Column field="castCategory" header="Category" sortable />
        <Column field="quotaType" header="Quota Type" sortable />
        <Column field="courseName" header="Course" sortable />
        <Column field="reservedPercentage" header="Reserved %" sortable />
        <Column field="effectiveFrom" header="From Date" sortable />
        <Column field="effectiveTo" header="To Date" sortable />
        <Column field="approvedBy" header="Approved By" sortable />
      </DataTable>
    </div>
  );

  const FormView = (
    <div className="bg-white p-6 rounded shadow-sm border animate-fadein">
      <div className="flex justify-between items-center mb-6 border-b pb-4">
        <h2 className="text-xl font-bold uppercase text-blue-700 border-l-4 border-blue-700 pl-3">{formTitle}</h2>
        <Button label="Back to List" icon="pi pi-arrow-left" className="p-button-text p-button-sm" onClick={() => setShowForm(false)} />
      </div>

      <div className="p-fluid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="field">
          <label className="text-sm font-bold mb-2 block">Cast Category*</label>
          <Dropdown value={selectedCategory} options={categories} onChange={(e) => setSelectedCategory(e.value)} placeholder="Select Category" />
        </div>
        <div className="field">
          <label className="text-sm font-bold mb-2 block">Quota Type*</label>
          <Dropdown value={selectedQuota} options={quotas} onChange={(e) => setSelectedQuota(e.value)} placeholder="Select Quota" />
        </div>
        <div className="field">
          <label className="text-sm font-bold mb-2 block">Target Course*</label>
          <Dropdown value={selectedCourse} options={courses} onChange={(e) => setSelectedCourse(e.value)} placeholder="Select Course" />
        </div>
        <div className="field">
          <label className="text-sm font-bold mb-2 block">Reserved Percentage (%)*</label>
          <InputText type="number" placeholder="Enter %" />
        </div>
        <div className="field">
          <label className="text-sm font-bold mb-2 block">Effective From Date*</label>
          <Calendar showIcon placeholder="DD/MM/YYYY" />
        </div>
        <div className="field">
          <label className="text-sm font-bold mb-2 block">Effective To Date*</label>
          <Calendar showIcon placeholder="DD/MM/YYYY" />
        </div>
        <div className="field">
          <label className="text-sm font-bold mb-2 block">Approved By Name*</label>
          <InputText placeholder="Full Name" />
        </div>
        <div className="field">
          <label className="text-sm font-bold mb-2 block">Last Modified By*</label>
          <InputText placeholder="Full Name" />
        </div>
        <div className="field">
          <label className="text-sm font-bold mb-2 block">Quota Status*</label>
          <Dropdown value={selectedStatus} options={statusList} onChange={(e) => setSelectedStatus(e.value)} placeholder="Select Status" />
        </div>
      </div>

      <div className="flex justify-end gap-3 mt-10 pt-6 border-t">
        <Button label="Clear" icon="pi pi-refresh" className="p-button-text p-button-secondary" />
        <Button label={formTitle.includes("Add") ? "Save Policy" : "Update Policy"} icon="pi pi-check" className="p-button-success px-8" onClick={confirmSave} />
      </div>
    </div>
  );

  return (
    <PageLayout title="Category Quota Configuration">
      <ConfirmDialog />
      {showForm ? FormView : ListView}
    </PageLayout>
  );
};
export default SetCategoryQuota;