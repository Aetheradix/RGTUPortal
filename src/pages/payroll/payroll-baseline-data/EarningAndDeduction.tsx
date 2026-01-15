/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import PageLayout from "@/components/PageLayout";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { Calendar } from "primereact/calendar";
import { Checkbox } from "primereact/checkbox";
import { Dropdown, Table } from "@/ui/shared";

interface Row {
  id: number;
  type: string;
  code: string;
  name: string;
  method: string;
  factor: string;
  date: string;
  status: string;
}

export default function EarningAndDeduction() {
  const [showForm, setShowForm] = useState(false);
  const [rows, setRows] = useState<Row[]>([
    { id: 1, type: "Deduction", code: "12345", name: "Loan", method: "Percentage(%) (Basic + DA)", factor: "Calculate b/w range", date: "15/11/2024", status: "Active" },
    { id: 2, type: "Deduction", code: "12455", name: "LIC Life", method: "Percentage(%) (Basic + DA)", factor: "Impact On TAX", date: "14/11/2024", status: "InActive" },
  ]);


  const [form, setForm] = useState<any>({
    type: "",
    code: "",
    name: "",
    method: "",
    factor: "",
    date: null,
    showInPage: {
      monthly: false,
      salary: false,
      optional: false,
      policy: false,
    }
  });

  const typeOptions = [{ label: "Earning", value: "Earning" }, { label: "Deduction", value: "Deduction" }];
  const methodOptions = [{ label: "Percentage(%) (Basic + DA)", value: "Percentage(%) (Basic + DA)" }];
  const factorOptions = [
    { label: "Calculate b/w range", value: "Calculate b/w range" },
    { label: "Impact On Leave", value: "Impact On Leave" },
    { label: "DA", value: "DA" },
    { label: "NPS", value: "NPS" },
    { label: "TAX Contribution", value: "TAX Contribution" },
  ];

  const handleInputChange = (field: string, value: any) => {
    setForm((prev: any) => ({ ...prev, [field]: value }));
  };

  const saveData = () => {
    if (!form.type || !form.code || !form.name) return; 
    const newRow: Row = {
      id: rows.length + 1,
      type: form.type,
      code: form.code,
      name: form.name,
      method: form.method,
      factor: form.factor,
      date: form.date ? form.date.toLocaleDateString() : "",
      status: "Active",
    };
    setRows([...rows, newRow]);
    clearForm();
    setShowForm(false);
  };

  const deleteRow = (id: number) => {
    setRows(rows.filter(r => r.id !== id));
  };

  const clearForm = () => {
    setForm({ 
        type: "", code: "", name: "", method: "", factor: "", date: null, 
        showInPage: { monthly: false, salary: false, optional: false, policy: false } 
    });
  };

  const tableColumns = [
    { field: "type", header: "Head Type", sortable: true, style: { whiteSpace: "nowrap" } },
    { field: "code", header: "Head Code", sortable: true, style: { whiteSpace: "nowrap" } },
    { field: "name", header: "Head Name", sortable: true, style: { whiteSpace: "nowrap" } },
    { field: "method", header: "Calculation Method", sortable: true, style: { whiteSpace: "nowrap" } },
    { field: "date", header: "Effective Date", sortable: true, style: { whiteSpace: "nowrap" } },
    { field: "status", header: "Status", sortable: true, style: { whiteSpace: "nowrap" } },
    {
      field: "action",
      header: "Action",
      style: { whiteSpace: "nowrap", textAlign: "center" as const },
      body: (r: Row) => (
        <div className="flex gap-2 justify-center">
          <Button icon="pi pi-pencil" text rounded severity="info" />
          <Button icon="pi pi-trash" text rounded severity="danger" onClick={() => deleteRow(r.id)} />
        </div>
      )
    },
  ];

  return (
    <PageLayout title="Earning And Deduction / कमाई और कटौती">
      {!showForm ? (
        <div className="animate-fadein">
          <div className="flex justify-end mb-4">
            <Button 
              label="Add New Head" 
              icon="pi pi-plus" 
              className="bg-green-600 border-green-600 px-6" 
              onClick={() => setShowForm(true)} 
            />
          </div>
          <Card className="shadow-sm ">
            <Table 
              title="Earning & Deduction List" 
              columns={tableColumns} 
              data={rows} 
              showPagination={true} 
              className="p-datatable-borderless shadow-sm border-t"
            />
          </Card>
        </div>
      ) : (
        <div className="animate-fadein">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-bold text-gray-700">Add Earning And Deduction Head</h3>
            <Button 
                label="Go Back" 
                icon="pi pi-arrow-left" 
                severity="secondary" 
                text 
                onClick={() => setShowForm(false)} 
            />
          </div>

          <Card className="shadow-sm ">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Dropdown 
                label="Head Type" 
                required 
                value={form.type} 
                options={typeOptions} 
                onChange={e => handleInputChange('type', e.value)} 
              />

              <div className="flex flex-col gap-1">
                <label className="text-sm font-semibold">Head Code*</label>
                <InputText value={form.code} className="w-full" onChange={e => handleInputChange('code', e.target.value)} />
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-sm font-semibold">Head Name*</label>
                <InputText value={form.name} className="w-full" onChange={e => handleInputChange('name', e.target.value)} />
              </div>

              <Dropdown 
                label="Calculation Method" 
                required 
                value={form.method} 
                options={methodOptions} 
                onChange={e => handleInputChange('method', e.value)} 
              />

              <div className="flex flex-col gap-1">
                <label className="text-sm font-semibold">Effective Date*</label>
                <Calendar value={form.date} className="w-full" onChange={e => handleInputChange('date', e.value)} showIcon placeholder="dd/mm/yyyy" />
              </div>

              <Dropdown 
                label="Calculation Factor" 
                required 
                value={form.factor} 
                options={factorOptions} 
                onChange={e => handleInputChange('factor', e.value)} 
              />
            </div>

            <h4 className="mt-8 font-bold text-gray-700 border-b pb-2">Show In Page Configuration</h4>
            <div className="flex flex-wrap gap-8 mt-4">
              {["monthly", "salary", "optional", "policy"].map(k => (
                <div key={k} className="flex items-center gap-3">
                  <Checkbox 
                    inputId={k}
                    checked={form.showInPage[k]} 
                    onChange={e => setForm({ ...form, showInPage: { ...form.showInPage, [k]: e.checked } })} 
                  />
                  <label htmlFor={k} className="cursor-pointer font-medium">{k.toUpperCase()}</label>
                </div>
              ))}
            </div>

            <div className="flex justify-center md:justify-start gap-4 mt-10 pt-6 border-t">
              <Button label="Save Head" icon="pi pi-check" className="bg-blue-600 px-10" onClick={saveData} />
              <Button label="Clear Form" icon="pi pi-refresh" severity="secondary" outlined className="px-10" onClick={clearForm} />
            </div>
          </Card>
        </div>
      )}
    </PageLayout>
  );
}