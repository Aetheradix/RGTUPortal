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

  const labelStyle = { fontSize: "13px", fontWeight: 600, color: "#374151", marginBottom: "4px", display: "block" };
  const actionsStyle = { display: "flex", justifyContent: "center", gap: "1rem", marginTop: "1.5rem" };

  const clearForm = () => {
    setFilters({});
    setShow(false);
  };

  return (
    <PageLayout title="Office Wise Salary Slip">

      <Card style={{ marginBottom: "1rem" }}>
        <h3 style={{ fontSize: "1.1rem", fontWeight: 600, color: "#1f2937", marginBottom: "1rem" }}>
          Office Wise Salary Slip
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-3">

          <div>
            <label style={labelStyle}>Division *</label>
            <Dropdown value={filters.division} options={divisions}
              onChange={e => setFilters({ ...filters, division: e.value })}
              placeholder="Select" className="w-full" />
          </div>

          <div>
            <label style={labelStyle}>District *</label>
            <Dropdown value={filters.district} options={districts}
              onChange={e => setFilters({ ...filters, district: e.value })}
              placeholder="Select" className="w-full" />
          </div>

          <div>
            <label style={labelStyle}>Block *</label>
            <Dropdown value={filters.block} options={blocks}
              onChange={e => setFilters({ ...filters, block: e.value })}
              placeholder="Select" className="w-full" />
          </div>

          <div>
            <label style={labelStyle}>OUC Type *</label>
            <Dropdown value={filters.ouc} options={oucTypes}
              onChange={e => setFilters({ ...filters, ouc: e.value })}
              placeholder="Select" className="w-full" />
          </div>

          <div>
            <label style={labelStyle}>University *</label>
            <Dropdown value={filters.university} options={universities}
              onChange={e => setFilters({ ...filters, university: e.value })}
              placeholder="Select" className="w-full" />
          </div>

          <div>
            <label style={labelStyle}>Office *</label>
            <Dropdown value={filters.office} options={offices}
              onChange={e => setFilters({ ...filters, office: e.value })}
              placeholder="Select" className="w-full" />
          </div>

          <div>
            <label style={labelStyle}>Month *</label>
            <Dropdown value={filters.month} options={months}
              onChange={e => setFilters({ ...filters, month: e.value })}
              placeholder="Select" className="w-full" />
          </div>
        </div>

        <div style={actionsStyle}>
          <Button label="Search" icon="pi pi-search" onClick={() => setShow(true)} />
          <Button label="Clear" icon="pi pi-times" severity="danger" onClick={clearForm} />
        </div>
      </Card>

      {show && (
        <Card>
          <div style={{ fontSize: "1.05rem", fontWeight: 600, marginBottom: "0.75rem" }}>
            Report : Office Wise Salary Slip Details (Oct-Nov-Dec 2023)
          </div>

          <DataTable value={data} showGridlines stripedRows>
            <Column field="name" header="Employee Name" sortable/>
            <Column field="desig" header="Designation" sortable/>
            <Column field="pan" header="PAN No" sortable/>
            <Column field="oct" header="Oct" sortable/>
            <Column field="nov" header="Nov"sortable />
            <Column field="dec" header="Dec" sortable/>
            <Column field="total" header="Total" sortable/>
          </DataTable>
        </Card>
      )}

    </PageLayout>
  );
}
