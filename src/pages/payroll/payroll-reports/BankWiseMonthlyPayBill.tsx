/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import PageLayout from "@/components/PageLayout";
import { Card } from "primereact/card";
import { Calendar } from "primereact/calendar";
import { Button } from "primereact/button";
import { Dropdown, Table } from "@/ui/shared";

const divisions = [
  { label: "Division 1", value: "division1" },
  { label: "Division 2", value: "division2" },
];

const districts = [
  { label: "District A", value: "districtA" },
  { label: "District B", value: "districtB" },
];

const blocks = [
  { label: "Block X", value: "blockX" },
  { label: "Block Y", value: "blockY" },
];

const officeTypes = [
  { label: "Head Office", value: "Head Office" },
  { label: "Branch Office", value: "Branch Office" },
];

const offices = [
  { label: "Office 1", value: "office1" },
  { label: "Office 2", value: "office2" },
];

const postTypes = [
  { label: "Type 1", value: "type1" },
  { label: "Type 2", value: "type2" },
];

const bankData = [
  { id: 1, bank: "STATE BANK OF INDIA", amount: 75207, total: null, ifsc: "SBIN0000348" },
  { id: 2, bank: "STATE BANK OF INDIA", amount: 63108, total: null, ifsc: "SBIN0008241" },
  { id: 3, bank: "STATE BANK OF INDIA", amount: 66495, total: 204810, ifsc: "SBIN0030005" },
  { id: 4, bank: "UNION BANK OF INDIA", amount: 80500, total: null, ifsc: "UBIN0005841" },
  { id: 5, bank: "UNION BANK OF INDIA", amount: 85961, total: null, ifsc: "UBIN0005441" },
  { id: 6, bank: "UNION BANK OF INDIA", amount: 74586, total: 241047, ifsc: "UBIN0005641" },
  { id: 7, bank: "Total", amount: 445857, total: 445857, ifsc: "" },
];

export default function BankWiseMonthlyPayBill() {
  const [filters, setFilters] = useState<any>({
    division: null,
    district: null,
    block: null,
    officeType: null,
    office: null,
    monthDate: null,
    postType: null,
  });
  
  const [show, setShow] = useState(false);

  const handleInputChange = (field: string, value: any) => {
    setFilters((prev: any) => ({ ...prev, [field]: value }));
  };

  const handleClear = () => {
    setFilters({
      division: null,
      district: null,
      block: null,
      officeType: null,
      office: null,
      monthDate: null,
      postType: null,
    });
    setShow(false);
  };

  const tableColumns = [
    { 
      field: "bank", 
      header: "NAME OF BANK", 
      sortable: true, 
      style: { whiteSpace: "nowrap" },
      body: (rowData: any) => (
        <span className={rowData.bank === "Total" ? "font-bold text-blue-700" : ""}>
          {rowData.bank}
        </span>
      )
    },
    { 
      field: "amount", 
      header: "AMOUNT (₹)", 
      sortable: true, 
      style: { whiteSpace: "nowrap" },
      body: (rowData: any) => `₹ ${rowData.amount.toLocaleString("en-IN")}`
    },
    { 
      field: "total", 
      header: "TOTAL BANK AMOUNT (₹)", 
      sortable: true, 
      style: { whiteSpace: "nowrap" },
      body: (rowData: any) => rowData.total ? `₹ ${rowData.total.toLocaleString("en-IN")}` : "-"
    },
    { 
      field: "ifsc", 
      header: "IFSC CODE", 
      sortable: true, 
      style: { whiteSpace: "nowrap" } 
    },
  ];

  return (
    <PageLayout title="Bank Wise Monthly Pay Bill / बैंक वार मासिक वेतन बिल">
      <Card>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Dropdown 
            label="Division" 
            required 
            options={divisions} 
            value={filters.division} 
            onChange={(e) => handleInputChange("division", e.value)} 
            placeholder="Select" 
          />
          <Dropdown 
            label="District" 
            required 
            options={districts} 
            value={filters.district} 
            onChange={(e) => handleInputChange("district", e.value)} 
            placeholder="Select" 
          />
          <Dropdown 
            label="Block" 
            required 
            options={blocks} 
            value={filters.block} 
            onChange={(e) => handleInputChange("block", e.value)} 
            placeholder="Select" 
          />
          <Dropdown 
            label="Office Type" 
            required 
            options={officeTypes} 
            value={filters.officeType} 
            onChange={(e) => handleInputChange("officeType", e.value)} 
            placeholder="Select" 
          />
          <Dropdown 
            label="Office" 
            required 
            options={offices} 
            value={filters.office} 
            onChange={(e) => handleInputChange("office", e.value)} 
            placeholder="Select" 
          />
          <div className="flex flex-col gap-1">
            <label className="text-sm font-semibold">Month *</label>
            <Calendar
              value={filters.monthDate}
              onChange={(e) => handleInputChange("monthDate", e.value)}
              view="month"
              dateFormat="MM yy"
              className="w-full"
              placeholder="Select Month"
              showIcon
            />
          </div>
          <Dropdown 
            label="Type of Post" 
            required 
            options={postTypes} 
            value={filters.postType} 
            onChange={(e) => handleInputChange("postType", e.value)} 
            placeholder="Select" 
          />
        </div>
        <div className="flex justify-center md:justify-start gap-3 mt-8 pt-4 border-t">
          <Button 
            label="Search" 
            icon="pi pi-search" 
            className="bg-blue-600 border-blue-600 px-8" 
            onClick={() => setShow(true)} 
          />
          <Button 
            label="Clear" 
            icon="pi pi-refresh" 
            severity="secondary" 
            outlined 
            className="px-8" 
            onClick={handleClear} 
          />
        </div>
      </Card>

      {show && (
        <div className="animate-fadein">
          <Card className="shadow-sm border-t border-gray-200">
            <Table 
              title="Bank Wise Pay Bill Details" 
              columns={tableColumns} 
              data={bankData} 
              showPagination={true} 
              rowsPerPage={10} 
            />
          </Card>
        </div>
      )}
    </PageLayout>
  );
}