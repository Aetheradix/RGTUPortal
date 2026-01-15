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
];

export default function MonthlyPolicyReport() {
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
  const [expandedRows, setExpandedRows] = useState<any>(null);

  const handleInputChange = (key: string, value: any) => {
    setFilters((prev: any) => ({ ...prev, [key]: value }));
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
    setExpandedRows(null);
  };

  const rowExpansionTemplate = (row: any) => {
    return (
      <div className="p-4 bg-blue-50/50 rounded-lg border border-blue-100 mx-4 my-2 animate-fadein">
        <div className="flex items-center gap-2 mb-3 text-blue-700">
            <i className="pi pi-users text-sm"></i>
            <span className="text-xs font-bold uppercase tracking-wider">Beneficiary Details</span>
        </div>
        <div className="bg-white rounded border shadow-sm overflow-hidden">
            <table className="w-full text-sm">
                <thead className="bg-gray-50 text-gray-600 text-[10px] uppercase font-bold">
                    <tr>
                        <th className="p-2 text-left border-b w-1/2">Employee Name</th>
                        <th className="p-2 text-right border-b w-1/2">LIC Policy Contribution (₹)</th>
                    </tr>
                </thead>
                <tbody>
                    {row.employees.map((emp: any, index: number) => (
                        <tr key={index} className="hover:bg-gray-50">
                            <td className="p-2 border-b font-medium text-gray-700">{emp.name}</td>
                            <td className="p-2 border-b text-right font-mono text-blue-600">
                                ₹ {emp.contribution.toLocaleString('en-IN', { minimumFractionDigits: 2 })}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
      </div>
    );
  };

  return (
    <PageLayout title="Monthly Policy Report / मासिक पॉलिसी रिपोर्ट">
      <Card className="shadow-sm  mb-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <DropdownField label="Division" value={filters.division} options={divisions} onChange={(val: any) => handleInputChange("division", val)} />
          <DropdownField label="District" value={filters.district} options={districts} onChange={(val: any) => handleInputChange("district", val)} />
          <DropdownField label="Block" value={filters.block} options={blocks} onChange={(val: any) => handleInputChange("block", val)} />
          <DropdownField label="Office Type" value={filters.officeType} options={officeTypes} onChange={(val: any) => handleInputChange("officeType", val)} />
          <DropdownField label="Office" value={filters.office} options={offices} onChange={(val: any) => handleInputChange("office", val)} />
          
          <div className="flex flex-col gap-1">
            <label className="text-sm font-semibold text-gray-700">Month *</label>
            <Calendar 
                value={filters.monthDate} 
                onChange={(e) => handleInputChange("monthDate", e.value)} 
                view="month" 
                dateFormat="MM yy" 
                showIcon
                placeholder="Select Month" 
                className="w-full" 
            />
          </div>

          <DropdownField label="Type of Post" value={filters.postType} options={postTypes} onChange={(val: any) => handleInputChange("postType", val)} />
        </div>

        <div className="flex justify-center md:justify-start gap-3 mt-8 pt-4 border-t">
          <Button label="Search Policy" icon="pi pi-search" className="bg-blue-600 border-blue-600 px-8" onClick={() => setShow(true)} />
          <Button label="Clear" icon="pi pi-refresh" severity="secondary" outlined className="px-8" onClick={handleClear} />
        </div>
      </Card>

      {show && (
        <div className="animate-fadein">
          <Card className="shadow-sm border-t border-gray-200">
            <div className="flex justify-between items-center mb-4 px-2">
                <h3 className="text-lg font-bold text-gray-700 tracking-tight uppercase">Policy Schedule Details</h3>
                <Button icon="pi pi-file-pdf" label="Export PDF" className="p-button-outlined p-button-danger p-button-sm" />
            </div>
            
            <DataTable
              value={policyData}
              expandedRows={expandedRows}
              onRowToggle={(e) => setExpandedRows(e.data)}
              rowExpansionTemplate={rowExpansionTemplate}
              paginator rows={10} dataKey="id"
              className="p-datatable-sm"
              rowHover
              showGridlines
            >
              <Column expander style={{ width: '3rem' }} />
              <Column field="office" header="OFFICE NAME" sortable className="font-semibold text-gray-700" />
              <Column 
                field="policyNo" 
                header="LIC POLICY NO." 
                sortable 
                body={(row) => <span className="font-mono bg-gray-100 px-2 py-1 rounded text-gray-600">{row.policyNo}</span>}
              />
            </DataTable>
          </Card>
        </div>
      )}
    </PageLayout>
  );
}

const DropdownField = ({ label, value, options, onChange }: any) => (
  <div className="flex flex-col gap-1">
    <label className="text-sm font-semibold text-gray-700">{label} *</label>
    <Dropdown value={value} onChange={(e) => onChange(e.value)} options={options} placeholder="Select" className="w-full" />
  </div>
);