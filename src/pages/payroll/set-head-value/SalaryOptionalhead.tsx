/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import  { useState } from "react";
import PageLayout from "@/components/PageLayout";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import { Dropdown } from "primereact/dropdown";
import { Calendar } from "primereact/calendar";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { InputText } from "primereact/inputtext";
import { Checkbox } from "primereact/checkbox";

const headTypeOptions = [{ label: "Deduction", value: "Deduction" }];
const officeTypeOptions = [{ label: "Head Office", value: "Head Office" }];
const officeOptions = [{ label: "Ministry of Science & Technology", value: "MST" }];
const postTypeOptions = [{ label: "Regular/Permanent", value: "Regular" }];
const designationTypeOptions = [{ label: "Teaching", value: "Teaching" }];
const designationOptions = [{ label: "Assistant Professor", value: "AP" }];
const employeeOptions = [
  { name: "Vinod Mahane" },
  { name: "Anuj Varman" },
];

const mainData = [
  {
    id: 1,
    headType: "Deduction",
    head: "Loan",
    officeType: "Head Office",
    office: "Ministry of Science & Technology",
    postType: "Regular/Permanent",
    designationType: "Teaching",
    designation: "Assistant Professor",
    employee: "Vinod Mahane",
    range: "50000-150000",
    value: 5000,
  },
];

export default function SalaryOptionalHead() {
  const [showResult, setShowResult] = useState(false);
  const [showAdd, setShowAdd] = useState(false);
  const [showEmployeeGrid, setShowEmployeeGrid] = useState(false);
    const [checkedEmployees] = useState<number[]>([]);

  const expandTemplate = (row: any) => (
    <div className="p-3 text-sm">
      <b>Earning & Deduction (Value/Amount):</b> ₹{row.value}
    </div>
  );

  if (showAdd) {
      function toggleEmployee(_id: any): void {
          throw new Error("Function not implemented.");
      }

    return (
      <PageLayout title="Optional Head">
        <div className="flex justify-end mb-3">
          <Button label="Go Back" icon="pi pi-arrow-left" onClick={() => setShowAdd(false)} />
        </div>
        <Card title="Optional Head">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
            <div><label>Earning & Deduction Head Type*</label><Dropdown options={headTypeOptions} className="w-full" /></div>
            <div><label>Earning & Deduction Head*</label><Dropdown options={[{ label: "Loan", value: "Loan" }]} className="w-full" /></div>
            <div><label>Calculation Method*</label><Dropdown options={[{ label: "Percentage", value: "Percentage" }]} className="w-full" /></div>
            <div><label>Office Type*</label><Dropdown options={officeTypeOptions} className="w-full" /></div>
            <div><label>Office*</label><Dropdown options={officeOptions} className="w-full" /></div>
            <div><label>Type of Post*</label><Dropdown options={postTypeOptions} className="w-full" /></div>
            <div><label>Designation Type*</label><Dropdown options={designationTypeOptions} className="w-full" /></div>
            <div><label>Designation*</label><Dropdown options={designationOptions} className="w-full" /></div>
            <div><label>Effective Date*</label><Calendar className="w-full" dateFormat="dd/mm/yy" /></div>
          </div>

          <div className="flex gap-3 mt-4">
            <Button label="Search" onClick={() => setShowEmployeeGrid(true)} />
            <Button label="Clear" className="p-button-secondary" />
          </div>
        </Card>

        {showEmployeeGrid && (
          <Card title="Details"className="mt-4">
            <DataTable value={employeeOptions}>
                <Column
                header="All"
                body={(row) => (
                  <Checkbox
                    checked={checkedEmployees.includes(row.id)}
                    onChange={() => toggleEmployee(row.id)}
                  />
                )}
              />
              <Column field="name" header="Employee / कर्मचारी" />
              <Column
                header="Minimum Amount(₹)"
                body={() => <InputText placeholder="Enter Minimum Amount" className="w-full" />}
              />
              <Column
                header="Maximum Amount(₹)"
                body={() => <InputText placeholder="Enter Maximum Amount" className="w-full" />}
              />
              <Column
                header="Earning & Deduction Value"
                body={() => <InputText placeholder="Enter Value" className="w-full" />}
              />
              <Column
                header="Status"
                body={() => <Button label="Ok" />}
              />
            </DataTable>
              <div className="flex gap-3 mt-4">
                        <Button label="Save" />
                        <Button label="Clear" className="p-button-secondary" />
                      </div>
          </Card>
        )}
      </PageLayout>
    );
  }

  return (
    <PageLayout title="Optional Head">

      <div className="flex justify-end mb-3">
        <Button label="Add" icon="pi pi-plus" onClick={() => setShowAdd(true)} />
      </div>

      <Card className="mb-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
          <div><label>Office Type*</label><Dropdown options={officeTypeOptions} className="w-full" /></div>
          <div><label>Office*</label><Dropdown options={officeOptions} className="w-full" /></div>
          <div><label>Type of Post*</label><Dropdown options={postTypeOptions} className="w-full" /></div>
          <div><label>Earning & Deduction Head Type*</label><Dropdown options={headTypeOptions} className="w-full" /></div>
        </div>

        <div className="flex gap-3 mt-4">
          <Button label="Search" onClick={() => setShowResult(true)} />
          <Button label="Clear" className="p-button-secondary" />
        </div>
      </Card>

      {showResult && (
        <Card title="Details">
          <DataTable value={mainData} rowExpansionTemplate={expandTemplate} dataKey="id">
            <Column expander />
            <Column field="headType" header="Head Type"sortable />
            <Column field="head" header="Head" sortable/>
            <Column field="officeType" header="Office Type" sortable/>
            <Column field="office" header="Office Name" sortable/>
            <Column field="postType" header="Type Of Post" sortable/>
            <Column field="designationType" header="Designation Type" sortable/>
            <Column field="designation" header="Designation" sortable/>
            <Column field="employee" header="Employee" sortable/>
            <Column field="range" header="Amount Range"sortable />
          </DataTable>
        </Card>
      )}
    </PageLayout>
  );
}
