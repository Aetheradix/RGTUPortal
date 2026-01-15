/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import PageLayout from "@/components/PageLayout";
import { Card } from "primereact/card";
import { Dropdown } from "primereact/dropdown";
import { Button } from "primereact/button";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";

const divisions = [{ label: "Bhopal Division", value: "bhopal" }];
const districts = [{ label: "Bhopal", value: "bhopal" }];
const blocks = [{ label: "Block A", value: "A" }];
const oucTypes = [{ label: "Government", value: "govt" }];
const universities = [{ label: "Barkatullah University", value: "BU" }];
const offices = [{ label: "Head Office", value: "HO" }];
const months = [{ label: "Oct-Nov-Dec 2023", value: "Q4" }];

const data = [
  { sr: 1, name: "Sunil Bujurk", desig: "Asst Grade-3", pan: "ASIPS0219H", oct: 103461, nov: 103625, dec: 103661, total: 310747 },
  { sr: 2, name: "Ram Bharos Yadav", desig: "Stenographer", pan: "AAPPC4856M", oct: 109877, nov: 109929, dec: 109929, total: 329735 },
  { sr: 3, name: "Rishiram Ranabhat", desig: "Asst Grade-1", pan: "ABPPK5506R", oct: 161057, nov: 161057, dec: 161057, total: 483171 },
];

export default function OfficeSalarySlip() {
  const [filters, setFilters] = useState<any>({});
  const [show, setShow] = useState(false);

  const formatCurrency = (val: number) => 
    `₹ ${val.toLocaleString('en-IN')}`;

  const handleInputChange = (key: string, value: any) => {
    setFilters((prev: any) => ({ ...prev, [key]: value }));
  };

  const clearForm = () => {
    setFilters({});
    setShow(false);
  };

  const filterFields = [
    { label: "Division *", options: divisions, key: "division" },
    { label: "District *", options: districts, key: "district" },
    { label: "Block *", options: blocks, key: "block" },
    { label: "OUC Type *", options: oucTypes, key: "ouc" },
    { label: "University *", options: universities, key: "university" },
    { label: "Office *", options: offices, key: "office" },
    { label: "Month *", options: months, key: "month" },
  ];

  return (
    <PageLayout title="Office Wise Salary Slip / कार्यालय वार वेतन पर्ची">
      <Card className="shadow-sm  mb-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {filterFields.map((field) => (
            <div key={field.key} className="flex flex-col gap-1">
              <label className="text-sm font-semibold text-gray-700">{field.label}</label>
              <Dropdown
                value={filters[field.key]}
                options={field.options}
                onChange={(e) => handleInputChange(field.key, e.value)}
                placeholder="Select"
                className="w-full"
              />
            </div>
          ))}
        </div>

        <div className="flex justify-center md:justify-start gap-3 mt-8 pt-4 border-t">
          <Button 
            label="Generate Report" 
            icon="pi pi-search" 
            className="bg-blue-600 border-blue-600 px-8" 
            onClick={() => setShow(true)} 
          />
          <Button 
            label="Reset" 
            icon="pi pi-refresh" 
            severity="secondary" 
            outlined 
            className="px-8" 
            onClick={clearForm} 
          />
        </div>
      </Card>
      {show && (
        <div className="animate-fadein">
          <Card className="shadow-sm border border-gray-200">
            <div className="flex justify-between items-center mb-4 px-2">
              <div>
                <h3 className="text-lg font-bold text-gray-700 uppercase tracking-tight">
                  Office Wise Salary Slip Details
                </h3>
                <p className="text-sm text-blue-600 font-medium italic">Period: Oct-Nov-Dec 2023</p>
              </div>
              <Button icon="pi pi-file-excel" label="Export CSV" className="p-button-outlined p-button-success p-button-sm" />
            </div>

            <DataTable 
              value={data} 
              showGridlines 
              stripedRows 
              className="p-datatable-sm"
              paginator rows={10}
              rowHover
            >
              <Column field="name" header="Employee Name" sortable className="font-semibold text-gray-700" />
              <Column field="desig" header="Designation" sortable />
              <Column 
                field="pan" 
                header="PAN No" 
                body={(row) => <span className="font-mono text-xs bg-gray-100 px-2 py-1 rounded">{row.pan}</span>} 
              />
              <Column 
                field="oct" 
                header="October" 
                body={(row) => formatCurrency(row.oct)} 
           
              />
              <Column 
                field="nov" 
                header="November" 
                body={(row) => formatCurrency(row.nov)} 
                
              />
              <Column 
                field="dec" 
                header="December" 
                body={(row) => formatCurrency(row.dec)} 
         
              />
              <Column 
                field="total" 
                header="Quarterly Total" 
                body={(row) => <span className="font-bold text-blue-700">{formatCurrency(row.total)}</span>} 
            
                className="bg-blue-50/50"
              />
            </DataTable>
          </Card>
        </div>
      )}
    </PageLayout>
  );
}