/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import PageLayout from "@/components/PageLayout";
import { Card } from "primereact/card";
import { Dropdown } from "primereact/dropdown";
import { Calendar } from "primereact/calendar";
import { Button } from "primereact/button";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";

const divisions = [{ label: "Division 1", value: "division1" }];
const districts = [{ label: "District A", value: "districtA" }];
const blocks = [{ label: "Block X", value: "blockX" }];
const officeTypes = [{ label: "Head Office", value: "head" }, { label: "Branch Office", value: "branch" }];
const offices = [{ label: "Office 1", value: "office1" }];
const postTypes = [{ label: "Type 1", value: "type1" }, { label: "Type 2", value: "type2" }];

const policyData = [
  {
    id: 1,
    office: "Ministry of Science & Technology (ST009)",
    policyNo: "112920997",
    employees: [{ name: "Vivek", contribution: 5000 }],
  },
  {
    id: 2,
    office: "Ministry of Tribal Affairs (TED90)",
    policyNo: "223456789",
    employees: [{ name: "Rakesh", contribution: 4000 }],
  },
  {
    id: 3,
    office: "Ministry of Tribal Affairs (TED90)",
    policyNo: "334567890",
    employees: [{ name: "Anita", contribution: 4500 }],
  },
  {
    id: 4,
    office: "Ministry of Tribal Affairs (TED90)",
    policyNo: "445678901",
    employees: [{ name: "Sunil", contribution: 4700 }],
  },
  {
    id: 5,
    office: "Student Affairs Office-Bhopal (TED90)",
    policyNo: "556789012",
    employees: [{ name: "Pooja", contribution: 5000 }],
  },
  {
    id: 6,
    office: "Academic Affairs Office-Bhopal (009)",
    policyNo: "667890123",
    employees: [{ name: "Rohit", contribution: 5200 }],
  },
  {
    id: 7,
    office: "Academic Affairs Office-Bhopal (009)",
    policyNo: "778901234",
    employees: [{ name: "Neha", contribution: 5300 }],
  },
  {
    id: 8,
    office: "Academic Affairs Office-Bhopal (009)",
    policyNo: "889012345",
    employees: [{ name: "Amit", contribution: 5400 }],
  },
  {
    id: 9,
    office: "Student Affairs Office-Bhopal (TED90)",
    policyNo: "990123456",
    employees: [{ name: "Sanjay", contribution: 5500 }],
  },
  {
    id: 10,
    office: "Student Affairs Office-Bhopal (TED90)",
    policyNo: "101234567",
    employees: [{ name: "Priya", contribution: 5600 }],
  },
];

export default function MonthlyPolicyReport() {
  const [division, setDivision] = useState<any>(null);
  const [district, setDistrict] = useState<any>(null);
  const [block, setBlock] = useState<any>(null);
  const [officeType, setOfficeType] = useState<any>(null);
  const [office, setOffice] = useState<any>(null);
  const [monthDate, setMonthDate] = useState<Date | null>(null);
  const [postType, setPostType] = useState<any>(null);
  const [show, setShow] = useState(false);
  const [expandedRows, setExpandedRows] = useState<any>(null);

  const rowExpansionTemplate = (row: any) => {
    return (
      <div className="p-3 bg-gray-50 rounded text-sm">
        {row.employees.map((emp: any, index: number) => (
          <div key={index} className="grid grid-cols-2 gap-2">
            <div>Employee Name: <b>{emp.name}</b></div>
            <div>LIC Policy Contribution: <b>{emp.contribution}</b></div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <PageLayout title="Monthly Policy Report">
      <Card className="mb-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          
          <div>
            <label className="text-sm font-semibold mb-1">Division *</label>
            <Dropdown value={division} onChange={(e) => setDivision(e.value)} options={divisions} placeholder="Select Division" className="w-full" />
          </div>

          <div>
            <label className="text-sm font-semibold mb-1">District *</label>
            <Dropdown value={district} onChange={(e) => setDistrict(e.value)} options={districts} placeholder="Select District" className="w-full" />
          </div>

          <div>
            <label className="text-sm font-semibold mb-1">Block *</label>
            <Dropdown value={block} onChange={(e) => setBlock(e.value)} options={blocks} placeholder="Select Block" className="w-full" />
          </div>

          <div>
            <label className="text-sm font-semibold mb-1">Office Type *</label>
            <Dropdown value={officeType} onChange={(e) => setOfficeType(e.value)} options={officeTypes} placeholder="Select Office Type" className="w-full" />
          </div>

          <div>
            <label className="text-sm font-semibold mb-1">Office *</label>
            <Dropdown value={office} onChange={(e) => setOffice(e.value)} options={offices} placeholder="Select Office" className="w-full" />
          </div>

          <div>
            <label className="text-sm font-semibold mb-1">Month *</label>
            <Calendar value={monthDate} onChange={(e) => setMonthDate(e.value as Date)} view="month" dateFormat="MM yy" placeholder="Select Month" className="w-full" />
          </div>

          <div>
            <label className="text-sm font-semibold mb-1">Type of Post *</label>
            <Dropdown value={postType} onChange={(e) => setPostType(e.value)} options={postTypes} placeholder="Select Type of Post" className="w-full" />
          </div>

        </div>

        <div className="flex justify-center gap-4 mt-4">
          <Button label="Search" icon="pi pi-search" onClick={() => setShow(true)} />
          <Button label="Clear" icon="pi pi-times" severity="danger" onClick={() => {
            setDivision(null); setDistrict(null); setBlock(null); setOfficeType(null);
            setOffice(null); setMonthDate(null); setPostType(null); setShow(false); setExpandedRows(null);
          }} />
        </div>
      </Card>

      {show && (
        <Card>
          <h3 className="font-semibold mb-2">Policy Report Details</h3>
          <DataTable
            value={policyData}
            expandedRows={expandedRows}
            onRowToggle={(e) => setExpandedRows(e.data)}
            rowExpansionTemplate={rowExpansionTemplate}
            paginator
            rows={10}
            dataKey="id"
          >
            <Column expander />
          
            <Column field="office" header="Office Name" sortable/>
            <Column field="policyNo" header="LIC Policy No." sortable />
          </DataTable>
        </Card>
      )}
    </PageLayout>
  );
}
