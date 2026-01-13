/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import PageLayout from "@/components/PageLayout";
import { Card } from "primereact/card";
import { Calendar } from "primereact/calendar";
import { Dropdown } from "primereact/dropdown";
import { Button } from "primereact/button";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";

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
  const [division, setDivision] = useState<any>(null);
  const [district, setDistrict] = useState<any>(null);
  const [block, setBlock] = useState<any>(null);
  const [officeType, setOfficeType] = useState<any>(null);
  const [office, setOffice] = useState<any>(null);
  const [monthDate, setMonthDate] = useState<Date | null>(null);
  const [postType, setPostType] = useState<any>(null);
  const [show, setShow] = useState(false);

  return (
    <PageLayout title="Bank Wise Monthly Pay Bill">
      <Card className="mb-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
          <div>
            <label className="text-sm font-semibold">Division *</label>
            <Dropdown value={division} onChange={(e) => setDivision(e.value)} options={divisions} placeholder="Select Division" className="w-full" />
          </div>

          <div>
            <label className="text-sm font-semibold">District *</label>
            <Dropdown value={district} onChange={(e) => setDistrict(e.value)} options={districts} placeholder="Select District" className="w-full" />
          </div>

          <div>
            <label className="text-sm font-semibold">Block *</label>
            <Dropdown value={block} onChange={(e) => setBlock(e.value)} options={blocks} placeholder="Select Block" className="w-full" />
          </div>

          <div>
            <label className="text-sm font-semibold">Office Type *</label>
            <Dropdown value={officeType} onChange={(e) => setOfficeType(e.value)} options={officeTypes} placeholder="Select Office Type" className="w-full" />
          </div>

          <div>
            <label className="text-sm font-semibold">Office *</label>
            <Dropdown value={office} onChange={(e) => setOffice(e.value)} options={offices} placeholder="Select Office" className="w-full" />
          </div>

          <div>
            <label className="text-sm font-semibold">Month *</label>
            <Calendar
              value={monthDate}
              onChange={(e) => setMonthDate(e.value as Date)}
              view="month"
              dateFormat="MM yy"
              className="w-full"
              placeholder="Select Month"
            />
          </div>

          <div>
            <label className="text-sm font-semibold">Type of Post *</label>
            <Dropdown value={postType} onChange={(e) => setPostType(e.value)} options={postTypes} placeholder="Select Post Type" className="w-full" />
          </div>
        </div>

        <div className="flex justify-center gap-4 mt-4">
          <Button label="Search" icon="pi pi-search" onClick={() => setShow(true)} />
          <Button
            label="Clear"
            icon="pi pi-times"
            severity="danger"
            onClick={() => {
              setDivision(null);
              setDistrict(null);
              setBlock(null);
              setOfficeType(null);
              setOffice(null);
              setMonthDate(null);
              setPostType(null);
              setShow(false);
            }}
          />
        </div>
      </Card>

      {show && (
        <Card>
          <h3 className="font-semibold mb-2">Bank Wise Pay Bill Details</h3>
          <DataTable value={bankData} paginator rows={10} dataKey="id">
            <Column field="bank" header="NAME OF BANK" sortable/>
            <Column field="amount" header="AMOUNT(₹)" sortable/>
            <Column field="total" header="TOTAL BANK AMOUNT(₹)" sortable/>
            <Column field="ifsc" header="IFSC CODE" sortable/>
          </DataTable>
        </Card>
      )}
    </PageLayout>
  );
}
