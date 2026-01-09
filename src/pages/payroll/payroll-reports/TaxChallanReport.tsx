/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import PageLayout from "@/components/PageLayout";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import { Dropdown } from "primereact/dropdown";
import { Calendar } from "primereact/calendar";
import { DataTable, type DataTableExpandedRows } from "primereact/datatable";
import { Column } from "primereact/column";

interface ChallanRow {
  id: number;
  name: string;
  designation: string;
  pan: string;
  paymentDate: string;
  salary: number;
  gst: number;
  depositDate: string;
  challanNo: string;
}

const challanData: ChallanRow[] = [
  { id: 1, name: "Anil Jain", designation: "Assistant Professor", pan: "ABCDE1234F", paymentDate: "20/11/2024", salary: 50000, gst: 9000, depositDate: "20/11/2024", challanNo: "CH123456" },
  { id: 2, name: "Dr. Giriraj Sharma", designation: "Head of Department", pan: "FGHIJ5678K", paymentDate: "20/11/2024", salary: 70000, gst: 12000, depositDate: "20/11/2024", challanNo: "CH654321" },
];

const divisionOptions = [{ label: "Bhopal Division", value: "bhopal" }];
const districtOptions = [{ label: "Bhopal", value: "bhopal" }];
const blockOptions = [{ label: "Block A", value: "blockA" }];
const oucOptions = [{ label: "Government", value: "govt" }];
const universityOptions = [{ label: "Barkatullah University", value: "BU" }];
const officeOptions = [{ label: "DPI Office", value: "dpi" }];
const postOptions = [{ label: "Assistant Professor", value: "ap" }];
const employeeOptions = [{ label: "Anil Jain", value: "anil" }];
const taxOptions = [{ label: "GST", value: "gst" }];

export default function TaxChallanReport() {

  const [filters, setFilters] = useState<any>({});
  const [fromMonth, setFromMonth] = useState<Date | null>(null);
  const [toMonth, setToMonth] = useState<Date | null>(null);
  const [showResult, setShowResult] = useState(false);

  const [expandedRows, setExpandedRows] = useState<DataTableExpandedRows>({});

  const rowTemplate = (row: ChallanRow) => (
    <div className="p-3 grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
      <div><b>Date of Payment:</b> {row.paymentDate}</div>
      <div><b>Paid Salary:</b> ₹{row.salary}</div>
      <div><b>GST:</b> ₹{row.gst}</div>
      <div><b>Date of Deposit:</b> {row.depositDate}</div>
      <div><b>Challan No:</b> {row.challanNo}</div>
    </div>
  );

  const clearForm = () => {
    setFilters({});
    setFromMonth(null);
    setToMonth(null);
    setShowResult(false);
    setExpandedRows({});
  };

  return (
    <PageLayout title="Tax Challan Report">

      <Card className="mb-4">
        <h3 className="mb-3 font-semibold">Tax Challan Report</h3>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-3">

          <div><label>Select Division Name</label>
            <Dropdown value={filters.division} options={divisionOptions} onChange={e => setFilters({ ...filters, division: e.value })} placeholder="Select" className="w-full" />
          </div>

          <div><label>District</label>
            <Dropdown value={filters.district} options={districtOptions} onChange={e => setFilters({ ...filters, district: e.value })} placeholder="Select" className="w-full" />
          </div>

          <div><label>Block *</label>
            <Dropdown value={filters.block} options={blockOptions} onChange={e => setFilters({ ...filters, block: e.value })} placeholder="Select" className="w-full" />
          </div>

          <div><label>Select OUC Type*</label>
            <Dropdown value={filters.ouc} options={oucOptions} onChange={e => setFilters({ ...filters, ouc: e.value })} placeholder="Select" className="w-full" />
          </div>

          <div><label>Select University Name (Code)*</label>
            <Dropdown value={filters.university} options={universityOptions} onChange={e => setFilters({ ...filters, university: e.value })} placeholder="Select" className="w-full" />
          </div>

          <div><label>Select Office Name (Code)*</label>
            <Dropdown value={filters.office} options={officeOptions} onChange={e => setFilters({ ...filters, office: e.value })} placeholder="Select" className="w-full" />
          </div>

          <div><label>Select Post Type*</label>
            <Dropdown value={filters.post} options={postOptions} onChange={e => setFilters({ ...filters, post: e.value })} placeholder="Select" className="w-full" />
          </div>

          <div><label>Select Employee*</label>
            <Dropdown value={filters.employee} options={employeeOptions} onChange={e => setFilters({ ...filters, employee: e.value })} placeholder="Select" className="w-full" />
          </div>

          <div><label>Select Tax*</label>
            <Dropdown value={filters.tax} options={taxOptions} onChange={e => setFilters({ ...filters, tax: e.value })} placeholder="Select" className="w-full" />
          </div>

          <div><label>Select From Month*</label>
            <Calendar value={fromMonth} onChange={e => setFromMonth(e.value as Date)} view="month" dateFormat="mm/yy" className="w-full" placeholder="dd/mm/yyyy" />
          </div>

          <div><label>Select To Month*</label>
            <Calendar value={toMonth} onChange={e => setToMonth(e.value as Date)} view="month" dateFormat="mm/yy" className="w-full" placeholder="dd/mm/yyyy" />
          </div>

        </div>

        <div className="flex justify-center gap-4 mt-5">
          <Button label="Search" icon="pi pi-search" className="p-button-primary" onClick={() => setShowResult(true)} />
          <Button label="Clear" icon="pi pi-times" className="p-button-danger" onClick={clearForm} />
        </div>
      </Card>


      {showResult && (
        <Card>
          <h3 className="mb-3">Tax Challan Report Details</h3>

          <DataTable value={challanData} paginator rows={10}
            expandedRows={expandedRows}
            onRowToggle={(e) => setExpandedRows(e.data as DataTableExpandedRows)}
            rowExpansionTemplate={rowTemplate}
            dataKey="id">

            <Column expander />
            <Column field="name" header="Employee Name" sortable />
            <Column field="designation" header="Designation" sortable/>
            <Column field="pan" header="PAN No." sortable/>
          </DataTable>
        </Card>
      )}

    </PageLayout>
  );
}
