/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import PageLayout from "@/components/PageLayout";
import { Card } from "primereact/card";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import Dropdown from "@/ui/shared/Dropdown";
interface Award {
  id: number;
  name: string;
  award: string;
  body: string;
  year: string;
}

interface Programme {
  id: number;
  activity: string;
  agency: string;
  scheme: string;
  year: string;
}

const awardData: Award[] = [
  { id: 1, name: "Miss Santoshi Romde", award: "Excellence Program Officer", body: "Govt. Rani Durgavati University", year: "2021" },
  { id: 2, name: "Mr. Manesh Bhalavi", award: "Kishor Internship", body: "Aagaj Foundation", year: "2021" },
];

const programmeData: Programme[] = [
  { id: 1, activity: "Eye Testing Campus", agency: "NSS & Lions Club", scheme: "-", year: "2020" },
  { id: 2, activity: "Uniform Distribution", agency: "NSS Unit", scheme: "-", year: "2021" },
];

export default function HighlightsOfAchievements() {
  const [showForm, setShowForm] = useState(false);

  const actionTemplate = () => (
    <div className="flex gap-2">
      <Button icon="pi pi-pencil" className="p-button-rounded p-button-info p-button-sm" />
      <Button icon="pi pi-trash" className="p-button-rounded p-button-danger p-button-sm" />
    </div>
  );

  const header = (title: string, btnLabel: string) => (
    <div className="flex justify-between items-center">
      <div>
        <h2 className="text-xl font-bold">{title}</h2>
        
      </div>
      <Button label={btnLabel} icon="pi pi-plus" size="small" onClick={() => setShowForm(true)} />
    </div>
  );

  if (showForm) {
    return (
      <PageLayout title="Highlights of Achievements">
        <Card className="mb-4">
          <div className="flex justify-between mb-4">
            <h3 className="font-semibold">Award Details</h3>
            <Button label="Go Back" className="p-button-text" onClick={() => setShowForm(false)} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div>
              <label className="text-sm font-medium">Award Name *</label>
              <InputText className="w-full" />
            </div>
            <div>
              <label className="text-sm font-medium">Award Name *</label>
              <InputText className="w-full" />
            </div>
            <div>
              <label className="text-sm font-medium">Awarding Body *</label>
              <InputText className="w-full" />
            </div>
            <div>
              <label className="text-sm font-medium">Year *</label>
              <Dropdown className="w-full" options={[{ label: "2021", value: "2021" }, { label: "2022", value: "2022" }]} placeholder="Select Year" />
            </div>
          </div>

          <div className="flex justify-center gap-3 mt-5">
            <Button label="Save" icon="pi pi-save" />
            <Button label="Clear" icon="pi pi-refresh" className="p-button-secondary" />
          </div>
        </Card>
      </PageLayout>
    );
  }

  return (
    <PageLayout title="Highlights of Achievements">
      <Card header={header("Award Details", "Add Award Details")} className="mb-4">
        <DataTable value={awardData} paginator rows={5}>
          <Column field="name" header="Awardee Name" sortable/>
          <Column field="award" header="Award Name"sortable />
          <Column field="body" header="Awarding Body"sortable />
          <Column field="year" header="Year" sortable/>
          <Column header="Action" body={actionTemplate} />
        </DataTable>
      </Card>

      <Card header={header("Programmes Details", "Add Programme Details")}>
        <DataTable value={programmeData} paginator rows={5}>
          <Column field="activity" header="Activity" sortable/>
          <Column field="agency" header="Organising Agency" sortable/>
          <Column field="scheme" header="Scheme"sortable />
          <Column field="year" header="Year"sortable />
          <Column header="Action" body={actionTemplate} />
        </DataTable>
      </Card>
    </PageLayout>
  );
}
