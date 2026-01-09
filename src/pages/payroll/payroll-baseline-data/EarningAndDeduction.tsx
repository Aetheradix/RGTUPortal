/* eslint-disable @typescript-eslint/no-explicit-any */
import  { useState } from "react";
import PageLayout from "@/components/PageLayout";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Dropdown } from "primereact/dropdown";
import { InputText } from "primereact/inputtext";
import { Calendar } from "primereact/calendar";
import { Checkbox } from "primereact/checkbox";

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
  const saveData = () => {
    const newRow: Row = {
      id: rows.length + 1,
      type: form.type,
      code: form.code,
      name: form.name,
      method: form.method,
      factor: form.factor,
      date: form.date?.toLocaleDateString(),
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
    setForm({ type: "", code: "", name: "", method: "", factor: "", date: null, showInPage: {} });
  };
  if (showForm) {
    return (
      <PageLayout title="Earning And Deduction">
        <Card>
          <div className="flex justify-between mb-4">
            <h3>Add Earning And Deduction</h3>
            <Button label="Go Back" icon="pi pi-arrow-left" onClick={() => setShowForm(false)} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <div><label>Head Type*</label>
              <Dropdown value={form.type} options={typeOptions} className="w-full" onChange={e => setForm({ ...form, type: e.value })} />
            </div>

            <div><label>Head Code*</label>
              <InputText value={form.code} className="w-full" onChange={e => setForm({ ...form, code: e.target.value })} />
            </div>

            <div><label>Head Name*</label>
              <InputText value={form.name} className="w-full" onChange={e => setForm({ ...form, name: e.target.value })} />
            </div>

            <div><label>Calculation Method*</label>
              <Dropdown value={form.method} options={methodOptions} className="w-full" onChange={e => setForm({ ...form, method: e.value })} />
            </div>

            <div><label>Effective Date*</label>
              <Calendar value={form.date} className="w-full" onChange={e => setForm({ ...form, date: e.value })} showIcon />
            </div>

            <div><label>Calculation Factor*</label>
              <Dropdown value={form.factor} options={factorOptions} className="w-full" onChange={e => setForm({ ...form, factor: e.value })} />
            </div>
          </div>

          <h4 className="mt-4">Show In Page</h4>
          <div className="flex gap-4 mt-2">
            {["monthly","salary","optional","policy"].map(k => (
              <div key={k} className="flex items-center gap-2">
                <Checkbox checked={form.showInPage[k]} onChange={e => setForm({ ...form, showInPage: { ...form.showInPage, [k]: e.checked } })} />
                <span>{k.toUpperCase()}</span>
              </div>
            ))}
          </div>

          <div className="flex justify-center gap-4 mt-5">
            <Button label="Save" icon="pi pi-check" onClick={saveData} />
            <Button label="Clear" icon="pi pi-times" className="p-button-secondary" onClick={clearForm} />
          </div>
        </Card>
      </PageLayout>
    );
  }
  return (
    <PageLayout title="Earning And Deduction">
      <Card>
        <div className="flex justify-between mb-3">
          <h3>Earning And Deduction</h3>
          <Button label="Add" icon="pi pi-plus" onClick={() => setShowForm(true)} />
        </div>
        <DataTable value={rows} paginator rows={10} showGridlines>
          <Column field="type" header="Head Type"sortable />
          <Column field="code" header="Head Code" sortable/>
          <Column field="name" header="Head Name" sortable/>
          <Column field="method" header="Calculation Method" sortable/>
          <Column field="date" header="Effective Date" sortable/>
          <Column field="status" header="Status"sortable />
          <Column header="Action" body={(r) => (
            <div className="flex gap-2">
              <Button icon="pi pi-pencil" className="p-button-text" />
              <Button icon="pi pi-trash" className="p-button-text p-button-danger" onClick={() => deleteRow(r.id)} />
            </div>
          )} />
        </DataTable>
      </Card>
    </PageLayout>
  );
}
