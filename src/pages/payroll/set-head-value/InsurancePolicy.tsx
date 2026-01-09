/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import PageLayout from "@/components/PageLayout";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { InputText } from "primereact/inputtext";
import { Dropdown } from "primereact/dropdown";
import { Calendar } from "primereact/calendar";

const policyList = [
  {
    id: 1,
    officeType: "Head Office",
    office: "Ministry of Home Affairs (TA88)",
    employee: "Surya Pratap (HP858)",
    policyType: "LIC",
    policyNo: "123456",
    policyName: "LIC",
    amount: 5500,
    frequency: "Monthly",
    startDate: "01/01/2024",
    endDate: "31/12/2030",
  },
  {
    id: 2,
    officeType: "District Office",
    office: "JD Office",
    employee: "Shyamji",
    policyType: "LIC",
    policyNo: "4587122",
    policyName: "Jeevan Umang",
    amount: 6000,
    frequency: "Quarterly",
    startDate: "01/02/2024",
    endDate: "31/12/2032",
  },
];

export default function InsurancePolicy() {
  const [showAdd, setShowAdd] = useState(false);

  const expandTemplate = (row: any) => (
    <div className="p-3">
      <p><b>Policy Start Date:</b> {row.startDate}</p>
      <p><b>Policy End Date:</b> {row.endDate}</p>
      <div className="mt-2">
        <Button label="Edit" className="p-button-sm mr-2" />
        <Button label="Delete" className="p-button-sm p-button-danger" />
      </div>
    </div>
  );

  return (
    <PageLayout title="Insurance Policy">

      {!showAdd && (
        <Card>
          <div className="flex justify-end mb-3">
            <Button label="Add" icon="pi pi-plus" onClick={() => setShowAdd(true)} />
          </div>

          <DataTable value={policyList} paginator rows={10} dataKey="id" rowExpansionTemplate={expandTemplate}>
            <Column expander />
            <Column header="Sr.No." body={(_, opt) => opt.rowIndex + 1} />
            <Column field="officeType" header="Office Type" />
            <Column field="office" header="Office Name" />
            <Column field="employee" header="Employee" />
            <Column field="policyType" header="Policy Type" />
            <Column field="policyNo" header="Policy No" />
            <Column field="policyName" header="Policy Name" />
            <Column field="amount" header="Policy Amount (₹)" />
            <Column field="frequency" header="Frequency" />
          </DataTable>
        </Card>
      )}

      {showAdd && (
        <Card>
          <div className="flex justify-end mb-3">
            <Button label="Go Back" icon="pi pi-arrow-left" onClick={() => setShowAdd(false)} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div><label>Employee Code*</label><InputText className="w-full" /></div>
            <div><label>Office Type*</label><InputText value="Head Office" disabled className="w-full" /></div>
            <div><label>Office*</label><InputText value="Ministry of Tribal Affairs (TED90)" disabled className="w-full" /></div>
            <div><label>Employee*</label><InputText value="Surya Pratap (HP858)" disabled className="w-full" /></div>

            <div><label>Select Policy Type*</label><Dropdown className="w-full" options={[{ label: "LIC", value: "LIC" }]} placeholder="Select" /></div>
            <div><label>Enter Policy No*</label><InputText className="w-full" /></div>
            <div><label>Enter Policy Name*</label><InputText className="w-full" /></div>
            <div><label>Enter Policy Amount*</label><InputText className="w-full" /></div>

            <div><label>Select Frequency*</label>
              <Dropdown className="w-full" options={[
                { label: "Monthly", value: "Monthly" },
                { label: "Quarterly", value: "Quarterly" },
              ]} placeholder="Select" />
            </div>

            <div><label>Policy Start Date*</label><Calendar className="w-full" /></div>
            <div><label>Policy End Date*</label><Calendar className="w-full" /></div>
          </div>

          <div className="flex justify-center gap-4 mt-5">
            <Button label="Save" icon="pi pi-save" />
            <Button label="Clear" icon="pi pi-refresh" className="p-button-danger" />
          </div>
        </Card>
      )}
    </PageLayout>
  );
}
