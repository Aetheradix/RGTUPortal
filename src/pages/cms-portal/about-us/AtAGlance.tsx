/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import PageLayout from "@/components/PageLayout";
import { Card } from "primereact/card";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { Tag } from "primereact/tag";
import Dropdown from "@/ui/shared/Dropdown";

interface AtAGlanceData {
  establishmentYear: string;
  landArea: string;
  constructedArea: string;
  staff: number;
  department: number;
  diploma: number;
  ug: number;
  pg: number;
  phd: number;
  books: number;
  rusa: string;
  worldBank: string;
  status: string;
}

const listData: AtAGlanceData[] = [
  {
    establishmentYear: "1966",
    landArea: "41799.98",
    constructedArea: "7546.00",
    staff: 14,
    department: 15,
    diploma: 0,
    ug: 1918,
    pg: 480,
    phd: 0,
    books: 21840,
    rusa: "No",
    worldBank: "Yes",
    status: "Active",
  },
];
const establishmentYearOptions = [
  { label: "1966", value: "1966" },
  { label: "1970", value: "1970" },
  { label: "1980", value: "1980" },
];

const yesNoOptions = [
  { label: "Yes", value: "Yes" },
  { label: "No", value: "No" },
];

const AtAGlance: React.FC = () => {
  const [view, setView] = useState<"list" | "add">("list");
  const [expandedRows, setExpandedRows] = useState<any>(null);
  const [selectedEstYear, setSelectedEstYear] = useState<string | null>(null);
  const [selectedRUSA, setSelectedRUSA] = useState<string | null>(null);
  const [selectedWorldBank, setSelectedWorldBank] = useState<string | null>(
    null
  );

  return (
    <PageLayout title="At A Glance">
      {view === "list" && (
        <Card>
          <div className="flex justify-between items-center mb-3">
            <h3 className="font-semibold">At A Glance</h3>
            <Button
              label="Add At A Glance"
              icon="pi pi-plus"
              onClick={() => setView("add")}
            />
          </div>

          <DataTable
            value={listData}
            paginator
            rows={10}
            showGridlines
            expandedRows={expandedRows}
            onRowToggle={(e) => setExpandedRows(e.data)}
            rowExpansionTemplate={(row: AtAGlanceData) => (
              <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-3 bg-gray-50 text-sm">
                <div>
                  <b>Total Number of PhD Awarded:</b> {row.phd}
                </div>
                <div>
                  <b>Number of Available Books in Library:</b> {row.books}
                </div>
                <div>
                  <b>College Facilitated by RUSA:</b> {row.rusa}
                </div>
                <div>
                  <b>College Facilitated by World Bank:</b> {row.worldBank}
                </div>
                <div>
                  <b>Status:</b> <Tag value={row.status} severity="success" />
                </div>
                <div>
                  <b>Actions:</b>{" "}
                  <Button label="Edit" icon="pi pi-pencil" size="small" />
                </div>
              </div>
            )}
          >
            <Column expander style={{ width: "3rem" }} />
            <Column header="Sr No." body={(_, opt) => opt.rowIndex + 1} sortable/>
            <Column field="establishmentYear" header="Establishment Year"sortable />
            <Column field="landArea" header="Total Land Area (Sq.mtr)"sortable />
            <Column
              field="constructedArea"
              header="Total Constructed Area (Sq.mtr)"
            sortable/>
            <Column field="staff" header="Total Staff" sortable/>
            <Column field="department" header="Total Department" sortable/>
            <Column field="diploma" header="Diploma / Certificate" sortable/>
            <Column field="ug" header="Total Student in UG" sortable/>
            <Column field="pg" header="Total Student in PG"sortable />
          </DataTable>
        </Card>
      )}

      {view === "add" && (
        <Card>
          <div className="flex justify-between items-center mb-3">
            <h3 className="font-semibold">Add At A Glance</h3>
            <Button
              label="Go Back"
              icon="pi pi-arrow-left"
              className="p-button-text"
              onClick={() => setView("list")}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <div>
              <label>Establishment Year*</label>
              <Dropdown
                options={establishmentYearOptions}
                value={selectedEstYear}
                onChange={(e) => setSelectedEstYear(e.value)}
                placeholder="Select"
                className="w-full"
              />
            </div>

            <div>
              <label>Total Land Area (Sq.mtr)*</label>
              <InputText
                className="w-full"
                placeholder="Enter Total Land Area"
              />
            </div>

            <div>
              <label>Total Constructed Area (Sq.mtr)*</label>
              <InputText
                className="w-full"
                placeholder="Enter Total Constructed Area"
              />
            </div>

            <div>
              <label>Total Staff*</label>
              <InputText className="w-full" />
            </div>

            <div>
              <label>Total Department*</label>
              <InputText className="w-full" />
            </div>

            <div>
              <label>Total Student in Diploma / Certificate*</label>
              <InputText className="w-full" />
            </div>

            <div>
              <label>Total Student in UG*</label>
              <InputText className="w-full" />
            </div>

            <div>
              <label>Total Student in PG*</label>
              <InputText className="w-full" />
            </div>

            <div>
              <label>Total Number of PhD Awarded*</label>
              <InputText className="w-full" />
            </div>

            <div>
              <label>Number of Available Books in Library*</label>
              <InputText className="w-full" />
            </div>

            <div>
              <label>College Facilitated by RUSA*</label>
              <Dropdown
                options={yesNoOptions}
                value={selectedRUSA}
                onChange={(e) => setSelectedRUSA(e.value)}
                placeholder="Select"
                className="w-full"
              />
            </div>

            <div>
              <label>College Facilitated by World Bank*</label>
              <Dropdown
                options={yesNoOptions}
                value={selectedWorldBank}
                onChange={(e) => setSelectedWorldBank(e.value)}
                placeholder="Select"
                className="w-full"
              />
            </div>
          </div>

          <div className="flex gap-3">
            <Button label="Save" icon="pi pi-save" />
            <Button
              label="Clear"
              icon="pi pi-refresh"
              className="p-button-secondary"
            />
          </div>
        </Card>
      )}
    </PageLayout>
  );
};

export default AtAGlance;
