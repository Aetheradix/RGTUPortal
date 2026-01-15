/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import PageLayout from "@/components/PageLayout";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import { Dropdown, Table, Input } from "@/ui/shared";
import { DateInput } from "@/ui/shared/Input";

const oucTypes = [{ label: "OUC 1", value: "ouc1" }];
const officeTypes = [{ label: "Head Office", value: "head" }];
const offices = [{ label: "Office A", value: "officeA" }];
const postTypes = [{ label: "Permanent", value: "permanent" }];
const designationTypes = [{ label: "Class I", value: "class1" }];
const designations = [{ label: "Manager", value: "manager" }];
const employees = [
  { label: "Anil Jain", value: "Anil Jain" },
  { label: "Ashish Tiwari", value: "Ashish Tiwari" },
  { label: "Mamta Burman", value: "Mamta Burman" },
  { label: "Pradeep Saraswat", value: "Pradeep Saraswat" }
];

const gratuityData = [
  { id: 1, name: "Rahul Sharma", from: "Jan 2020", to: "Dec 2020", wages: 30000, year: 1, amount: 360000 },
  { id: 2, name: "Priya Gupta", from: "Jan 2021", to: "Dec 2021", wages: 32000, year: 1, amount: 384000 }
];

export default function GratuityFile() {
  const [showEntry, setShowEntry] = useState(false);
  const [showTable, setShowTable] = useState(false);

  const [filters, setFilters] = useState<any>({
    oucType: null,
    officeType: null,
    office: null,
    postType: null,
    designationType: null,
    designation: null,
    fromDate: null,
    toDate: null
  });
  const [form, setForm] = useState<any>({
    entryDate: null,
    oucType: null,
    officeType: null,
    office: null,
    postType: null,
    designationType: null,
    designation: null,
    employee: null,
    fromMonth: null,
    toMonth: null,
    wages: "",
    years: "",
    amount: ""
  });
  const tableColumns = [
    { field: "id", header: "Sr.No.", sortable: true },
    { field: "name", header: "Employee Name", sortable: true },
    { field: "from", header: "From Month Year", sortable: true },
    { field: "to", header: "To Month Year", sortable: true },
    {
      field: "wages",
      header: "Wages (₹)",
      body: (row: any) => `₹${row.wages.toLocaleString("en-IN")}`
    },
    { field: "year", header: "Working Year" },
    {
      field: "amount",
      header: "Gratuity Amount (₹)",
      body: (row: any) => `₹${row.amount.toLocaleString("en-IN")}`
    },
    {
      header: "Action",
      body: () => <Button icon="pi pi-pencil" text rounded severity="info" />
    }
  ];

  return (
    <PageLayout title="Gratuity Management / उपदान प्रबंधन">
      {!showEntry ? (
        <div className="animate-fadein">
          <div className="flex justify-end mb-4">
            <Button
              label="Add New Gratuity Entry"
              icon="pi pi-plus"
              className="bg-green-600"
              onClick={() => setShowEntry(true)}
            />
          </div>

          <Card>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <Dropdown label="OUC Type" options={oucTypes}
                value={filters.oucType}
                onChange={(e:any) => setFilters({ ...filters, oucType: e.value })} />

              <Dropdown label="Office Type" options={officeTypes}
                value={filters.officeType}
                onChange={(e:any) => setFilters({ ...filters, officeType: e.value })} />

              <Dropdown label="Office" options={offices}
                value={filters.office}
                onChange={(e:any) => setFilters({ ...filters, office: e.value })} />

              <Dropdown label="Type of Post" options={postTypes}
                value={filters.postType}
                onChange={(e:any) => setFilters({ ...filters, postType: e.value })} />

              <Dropdown label="Designation Type" options={designationTypes}
                value={filters.designationType}
                onChange={(e:any) => setFilters({ ...filters, designationType: e.value })} />

              <Dropdown label="Designation" options={designations}
                value={filters.designation}
                onChange={(e:any) => setFilters({ ...filters, designation: e.value })} />

              <DateInput label="From Date"
                value={filters.fromDate}
                onChange={(val:any) => setFilters({ ...filters, fromDate: val })} />

              <DateInput label="To Date"
                value={filters.toDate}
                onChange={(val:any) => setFilters({ ...filters, toDate: val })} />
            </div>

            <div className="flex justify-center gap-4 mt-8 border-t pt-4">
              <Button label="Search Records" icon="pi pi-search"
                onClick={() => setShowTable(true)} />
              <Button label="Clear" icon="pi pi-refresh" outlined
                onClick={() => {
                  setFilters({
                    oucType: null, officeType: null, office: null,
                    postType: null, designationType: null, designation: null,
                    fromDate: null, toDate: null
                  });
                  setShowTable(false);
                }} />
            </div>
          </Card>

          {showTable && (
            <div className="mt-6">
              <Table
                title="Gratuity Payment Details"
                columns={tableColumns}
                data={gratuityData}
                showPagination
              />
            </div>
          )}
        </div>
      ) : (
        <div className="animate-fadein">
          <div className="flex justify-between mb-4">
            <h3 className="text-xl font-bold">New Gratuity Entry</h3>
            <Button text icon="pi pi-arrow-left"
              onClick={() => setShowEntry(false)} />
          </div>

          <Card>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <DateInput label="Entry Date"
                value={form.entryDate}
                onChange={(val:any) => setForm({ ...form, entryDate: val })} />

              <Dropdown label="OUC Type" options={oucTypes}
                value={form.oucType}
                onChange={(e:any) => setForm({ ...form, oucType: e.value })} />

              <Dropdown label="Office Type" options={officeTypes}
                value={form.officeType}
                onChange={(e:any) => setForm({ ...form, officeType: e.value })} />

              <Dropdown label="Office" options={offices}
                value={form.office}
                onChange={(e:any) => setForm({ ...form, office: e.value })} />

              <Dropdown label="Type of Post" options={postTypes}
                value={form.postType}
                onChange={(e:any) => setForm({ ...form, postType: e.value })} />

              <Dropdown label="Designation Type" options={designationTypes}
                value={form.designationType}
                onChange={(e:any) => setForm({ ...form, designationType: e.value })} />

              <Dropdown label="Designation" options={designations}
                value={form.designation}
                onChange={(e:any) => setForm({ ...form, designation: e.value })} />

              <Dropdown label="Employee" options={employees}
                value={form.employee}
                onChange={(e:any) => setForm({ ...form, employee: e.value })} />

              <DateInput label="From Month" view="month"
                value={form.fromMonth}
                onChange={(val:any) => setForm({ ...form, fromMonth: val })} />

              <DateInput label="To Month" view="month"
                value={form.toMonth}
                onChange={(val:any) => setForm({ ...form, toMonth: val })} />

              <Input label="Wages (₹)"
                value={form.wages}
                onChange={(e:any) => setForm({ ...form, wages: e.target.value })} />

              <Input label="Working Years"
                value={form.years}
                onChange={(e:any) => setForm({ ...form, years: e.target.value })} />

              <Input label="Gratuity Amount (₹)"
                value={form.amount}
                className="font-bold text-blue-700"
                onChange={(e:any) => setForm({ ...form, amount: e.target.value })} />
            </div>

            <div className="flex justify-center gap-4 mt-8 border-t pt-4">
              <Button label="Save Entry" icon="pi pi-check" />
              <Button label="Clear Form" icon="pi pi-times" outlined
                onClick={() => setForm({
                  entryDate: null, oucType: null, officeType: null,
                  office: null, postType: null, designationType: null,
                  designation: null, employee: null, fromMonth: null,
                  toMonth: null, wages: "", years: "", amount: ""
                })} />
            </div>
          </Card>
        </div>
      )}
    </PageLayout>
  );
}
