 
import { useState } from "react";
import PageLayout from "@/components/PageLayout";
import { Card } from "primereact/card";
import { Dropdown } from "primereact/dropdown";
import { Calendar } from "primereact/calendar";
import { Button } from "primereact/button";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { InputNumber } from "primereact/inputnumber";

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
const gratuityList = [
  { id:1, name:"Rahul Sharma", from:"January 2020", to:"December 2020", wages:30000, year:1, amount:360000 },
  { id:2, name:"Priya Gupta", from:"January 2021", to:"December 2021", wages:32000, year:1, amount:384000 },
  { id:3, name:"Amit Verma", from:"January 2022", to:"December 2022", wages:35000, year:1, amount:420000 },
  { id:4, name:"Sneha Reddy", from:"January 2023", to:"December 2023", wages:40000, year:1, amount:480000 },
  { id:5, name:"Vikram Singh", from:"January 2020", to:"December 2023", wages:28000, year:4, amount:1344000 }
];
export default function GratuityFile() {
  const [showEntry, setShowEntry] = useState(false);
  const [showTable, setShowTable] = useState(false);

  return (
    <PageLayout title="Gratuity">

      {!showEntry && (
        <>
          <div className="flex justify-end mb-3">
            <Button label="Go To Entry Page" icon="pi pi-plus" onClick={() => setShowEntry(true)} />
          </div>

          <Card>
           <div className="grid grid-cols-1 md:grid-cols-4 gap-3">

  <div>
    <label className="text-sm font-medium">OUC Type *</label>
    <Dropdown placeholder="Select" options={oucTypes} className="w-full mt-1" />
  </div>

  <div>
    <label className="text-sm font-medium">Office Type *</label>
    <Dropdown placeholder="Select" options={officeTypes} className="w-full mt-1" />
  </div>

  <div>
    <label className="text-sm font-medium">Office *</label>
    <Dropdown placeholder="Select" options={offices} className="w-full mt-1" />
  </div>

  <div>
    <label className="text-sm font-medium">Type of Post *</label>
    <Dropdown placeholder="Select" options={postTypes} className="w-full mt-1" />
  </div>

  <div>
    <label className="text-sm font-medium">Designation Type *</label>
    <Dropdown placeholder="Select" options={designationTypes} className="w-full mt-1" />
  </div>

  <div>
    <label className="text-sm font-medium">Designation *</label>
    <Dropdown placeholder="Select" options={designations} className="w-full mt-1" />
  </div>

  <div>
    <label className="text-sm font-medium">From Date *</label>
    <Calendar placeholder="dd/mm/yyyy" showIcon className="w-full mt-1" />
  </div>

  <div>
    <label className="text-sm font-medium">To Date *</label>
    <Calendar placeholder="dd/mm/yyyy" showIcon className="w-full mt-1" />
  </div>

</div>
            <div className="flex justify-center gap-4 mt-4">
              <Button label="Search" onClick={() => setShowTable(true)} />
              <Button label="Clear" severity="danger" />
            </div>
          </Card>

          {showTable && (
            <Card className="mt-4">
              <DataTable value={gratuityList} paginator rows={10}>
                <Column field="id" header="Sr.No." />
                <Column field="name" header="Employee Name" />
                <Column field="from" header="From Month Year" />
                <Column field="to" header="To Month Year" />
                <Column field="wages" header="Wages (₹)" />
                <Column field="year" header="Working Year" />
                <Column field="amount" header="Amount (₹)" />
              </DataTable>
            </Card>
          )}
        </>
      )}
      {showEntry && (
        <Card>
          <div className="flex justify-end mb-3">
            <Button label="Go Back" icon="pi pi-arrow-left" onClick={() => setShowEntry(false)} />
          </div>
   <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
  <div>
    <label className="text-sm font-medium">Select Date *</label>
    <Calendar placeholder="dd/mm/yyyy" showIcon className="w-full mt-1" />
  </div>

  <div>
    <label className="text-sm font-medium">OUC Type *</label>
    <Dropdown placeholder="Select" options={oucTypes} className="w-full mt-1" />
  </div>

  <div>
    <label className="text-sm font-medium">Office Type *</label>
    <Dropdown placeholder="Select" options={officeTypes} className="w-full mt-1" />
  </div>

  <div>
    <label className="text-sm font-medium">Office *</label>
    <Dropdown placeholder="Select" options={offices} className="w-full mt-1" />
  </div>

  <div>
    <label className="text-sm font-medium">Type of Post *</label>
    <Dropdown placeholder="Select" options={postTypes} className="w-full mt-1" />
  </div>

  <div>
    <label className="text-sm font-medium">Designation Type *</label>
    <Dropdown placeholder="Select" options={designationTypes} className="w-full mt-1" />
  </div>

  <div>
    <label className="text-sm font-medium">Designation *</label>
    <Dropdown placeholder="Select" options={designations} className="w-full mt-1" />
  </div>

  <div>
    <label className="text-sm font-medium">Employee *</label>
    <Dropdown placeholder="Select" options={employees} className="w-full mt-1" />
  </div>

  <div>
    <label className="text-sm font-medium">From Month *</label>
    <Calendar view="month" dateFormat="mm/yy" placeholder="Enter Month" className="w-full mt-1" />
  </div>

  <div>
    <label className="text-sm font-medium">To Month *</label>
    <Calendar view="month" dateFormat="mm/yy" placeholder="Enter Month" className="w-full mt-1" />
  </div>

  <div>
    <label className="text-sm font-medium">Wages *</label>
    <InputNumber className="w-full mt-1" />
  </div>

  <div>
    <label className="text-sm font-medium">Working Year *</label>
    <InputNumber className="w-full mt-1" />
  </div>

  <div>
    <label className="text-sm font-medium">Gratuity Amount *</label>
    <InputNumber className="w-full mt-1" />
  </div>

</div>
          <div className="flex justify-center gap-4 mt-4">
            <Button label="Save" />
            <Button label="Clear" severity="danger" />
          </div>
        </Card>
      )}
    </PageLayout>
  );
}
