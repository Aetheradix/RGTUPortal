/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import PageLayout from "@/components/PageLayout";
import { Card } from "primereact/card";
import { Calendar } from "primereact/calendar";
import { Button } from "primereact/button";
import { InputNumber } from "primereact/inputnumber";
import { Dropdown, Table } from "@/ui/shared";

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
  { label: "Pradeep Saraswat", value: "Pradeep Saraswat" },
];

const leaveList = [
  { id: 1, name: "Rahul Sharma", from: "Jan 2023", to: "Dec 2023", wages: 30000, leave: 5, amount: 12500 },
  { id: 2, name: "Priya Gupta", from: "Jan 2023", to: "Dec 2023", wages: 32000, leave: 3, amount: 8000 },
  { id: 3, name: "Amit Verma", from: "Jan 2023", to: "Dec 2023", wages: 35000, leave: 4, amount: 11667 },
  { id: 4, name: "Sneha Reddy", from: "Jan 2023", to: "Dec 2023", wages: 40000, leave: 2, amount: 6667 },
  { id: 5, name: "Vikram Singh", from: "Jan 2023", to: "Dec 2023", wages: 28000, leave: 6, amount: 14000 },
];

export default function LeaveEncashments() {
  const [showEntry, setShowEntry] = useState(false);
  const [showTable, setShowTable] = useState(false);

  // State for filters / form fields
  const [filters, setFilters] = useState<any>({
    oucType: null,
    officeType: null,
    office: null,
    postType: null,
    designationType: null,
    designation: null,
    employee: null,
    fromDate: null,
    toDate: null,
    fromMonth: null,
    toMonth: null,
    wages: null,
    totalLeave: null,
    leaveAmount: null,
  });

  const handleChange = (field: string, value: any) => {
    setFilters((prev: any) => ({ ...prev, [field]: value }));
  };

  const tableColumns = [
    { field: "id", header: "S.No.", sortable: true, style: { whiteSpace: "nowrap" } },
    { field: "name", header: "Employee", sortable: true, style: { whiteSpace: "nowrap" } },
    { field: "from", header: "From Date", sortable: true, style: { whiteSpace: "nowrap" } },
    { field: "to", header: "To Date", sortable: true, style: { whiteSpace: "nowrap" } },
    { 
      field: "wages", 
      header: "Wages (₹)", 
      sortable: true, 
      style: { whiteSpace: "nowrap" },
      body: (row: any) => `₹ ${row.wages.toLocaleString("en-IN")}` 
    },
    { field: "leave", header: "Leave Days", sortable: true, style: { whiteSpace: "nowrap" } },
    { 
      field: "amount", 
      header: "Encashment Amount (₹)", 
      sortable: true, 
      style: { whiteSpace: "nowrap" },
      body: (row: any) => `₹ ${row.amount.toLocaleString("en-IN")}` 
    },
    {
      field: "action",
      header: "Action",
      style: { whiteSpace: "nowrap", textAlign: "center" as const },
      body: () => <Button icon="pi pi-eye" text rounded severity="info" tooltip="View Detail" />
    }
  ];

  return (
    <PageLayout title="Leave Encashment / अवकाश नकदीकरण">
      {!showEntry ? (
        <div className="animate-fadein">
          <div className="flex justify-end mb-4">
            <Button 
              label="New Leave Encashment" 
              icon="pi pi-plus" 
              className="bg-green-600 border-green-600 px-6"
              onClick={() => setShowEntry(true)} 
            />
          </div>

          <Card>
            <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-4">
              <Dropdown 
                label="OUC Type" 
                required 
                options={oucTypes} 
                value={filters.oucType} 
                onChange={(e) => handleChange("oucType", e.value)}
                placeholder="Select" 
              />
              <Dropdown 
                label="Office Type" 
                required 
                options={officeTypes} 
                value={filters.officeType} 
                onChange={(e) => handleChange("officeType", e.value)}
                placeholder="Select" 
              />
              <Dropdown 
                label="Office" 
                required 
                options={offices} 
                value={filters.office} 
                onChange={(e) => handleChange("office", e.value)}
                placeholder="Select" 
              />
              <Dropdown 
                label="Type of Post" 
                required 
                options={postTypes} 
                value={filters.postType} 
                onChange={(e) => handleChange("postType", e.value)}
                placeholder="Select" 
              />
              <Dropdown 
                label="Designation Type" 
                required 
                options={designationTypes} 
                value={filters.designationType} 
                onChange={(e) => handleChange("designationType", e.value)}
                placeholder="Select" 
              />
              <Dropdown 
                label="Designation" 
                required 
                options={designations} 
                value={filters.designation} 
                onChange={(e) => handleChange("designation", e.value)}
                placeholder="Select" 
              />
              <div className="flex flex-col gap-1">
                <label className="text-sm font-semibold">From Date *</label>
                <Calendar 
                  placeholder="dd/mm/yyyy" 
                  showIcon 
                  className="w-full" 
                  value={filters.fromDate}
                  onChange={(e) => handleChange("fromDate", e.value)}
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-sm font-semibold">To Date *</label>
                <Calendar 
                  placeholder="dd/mm/yyyy" 
                  showIcon 
                  className="w-full" 
                  value={filters.toDate}
                  onChange={(e) => handleChange("toDate", e.value)}
                />
              </div>
            </div>

            <div className="flex justify-center md:justify-start gap-3 mt-8 pt-4 border-t">
              <Button 
                label="Search" 
                icon="pi pi-search" 
                className="bg-blue-600 px-8" 
                onClick={() => setShowTable(true)} 
              />
              <Button 
                label="Clear" 
                icon="pi pi-refresh" 
                severity="secondary" 
                outlined 
                className="px-8" 
                onClick={() => setShowTable(false)}
              />
            </div>
          </Card>

          {showTable && (
            <div className="mt-6 animate-fadein">
              <Table 
                title="Encashment Records"
                columns={tableColumns}
                data={leaveList}
                showPagination={true}
                className="p-datatable-borderless shadow-sm border-t"
              />
            </div>
          )}
        </div>
      ) : (
        <div className="animate-fadein">
          <div className="flex justify-between items-center mb-4">
             <h3 className="text-xl font-bold text-gray-700">Add Encashment Entry</h3>
             <Button 
               label="Go Back" 
               icon="pi pi-arrow-left" 
               severity="secondary" 
               text 
               onClick={() => setShowEntry(false)} 
             />
          </div>

          <Card>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="flex flex-col gap-1">
                <label className="text-sm font-semibold">Select Date *</label>
                <Calendar 
                  placeholder="dd/mm/yyyy" 
                  showIcon 
                  className="w-full" 
                  value={filters.fromDate}
                  onChange={(e) => handleChange("fromDate", e.value)}
                />
              </div>
              <Dropdown 
                label="OUC Type" 
                options={oucTypes} 
                required 
                value={filters.oucType} 
                onChange={(e) => handleChange("oucType", e.value)}
              />
              <Dropdown 
                label="Office Type" 
                options={officeTypes} 
                required 
                value={filters.officeType} 
                onChange={(e) => handleChange("officeType", e.value)}
              />
              <Dropdown 
                label="Office" 
                options={offices} 
                required 
                value={filters.office} 
                onChange={(e) => handleChange("office", e.value)}
              />
              <Dropdown 
                label="Type of Post" 
                options={postTypes} 
                required 
                value={filters.postType} 
                onChange={(e) => handleChange("postType", e.value)}
              />
              <Dropdown 
                label="Designation Type" 
                options={designationTypes} 
                required 
                value={filters.designationType} 
                onChange={(e) => handleChange("designationType", e.value)}
              />
              <Dropdown 
                label="Designation" 
                options={designations} 
                required 
                value={filters.designation} 
                onChange={(e) => handleChange("designation", e.value)}
              />
              <Dropdown 
                label="Employee" 
                options={employees} 
                required 
                value={filters.employee} 
                onChange={(e) => handleChange("employee", e.value)}
              />
              <div className="flex flex-col gap-1">
                <label className="text-sm font-semibold">From Month *</label>
                <Calendar 
                  view="month" 
                  dateFormat="mm/yy" 
                  placeholder="Select" 
                  className="w-full" 
                  value={filters.fromMonth}
                  onChange={(e) => handleChange("fromMonth", e.value)}
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-sm font-semibold">To Month *</label>
                <Calendar 
                  view="month" 
                  dateFormat="mm/yy" 
                  placeholder="Select" 
                  className="w-full" 
                  value={filters.toMonth}
                  onChange={(e) => handleChange("toMonth", e.value)}
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-sm font-semibold">Wages (₹) *</label>
                <InputNumber 
                  className="w-full" 
                  mode="currency" 
                  currency="INR" 
                  locale="en-IN" 
                  value={filters.wages}
                  onValueChange={(e) => handleChange("wages", e.value)}
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-sm font-semibold">Total Leave *</label>
                <InputNumber 
                  className="w-full" 
                  value={filters.totalLeave}
                  onValueChange={(e) => handleChange("totalLeave", e.value)}
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-sm font-semibold text-blue-700">Leave Amount *</label>
                <InputNumber 
                  className="w-full font-bold" 
                  mode="currency" 
                  currency="INR" 
                  locale="en-IN" 
                  value={filters.leaveAmount}
                  onValueChange={(e) => handleChange("leaveAmount", e.value)}
                />
              </div>
            </div>

            <div className="flex justify-center gap-3 mt-8 pt-4 border-t">
              <Button label="Save Entry" icon="pi pi-check" className="bg-blue-600 px-8" />
              <Button 
                label="Clear Form" 
                icon="pi pi-times" 
                severity="secondary" 
                outlined 
                className="px-8" 
                onClick={() => setFilters({
                  oucType: null,
                  officeType: null,
                  office: null,
                  postType: null,
                  designationType: null,
                  designation: null,
                  employee: null,
                  fromDate: null,
                  toDate: null,
                  fromMonth: null,
                  toMonth: null,
                  wages: null,
                  totalLeave: null,
                  leaveAmount: null,
                })}
              />
            </div>
          </Card>
        </div>
      )}
    </PageLayout>
  );
}
