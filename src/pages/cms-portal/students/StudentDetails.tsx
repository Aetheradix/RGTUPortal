import React from "react";
import PageLayout from "@/components/PageLayout";
import { Card } from "primereact/card";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";

interface StudentSummary {
  id: number;
  total: number;
  sc: number;
  st: number;
  obc: number;
  general: number;
}

const pgData: StudentSummary[] = [
  { id: 1, total: 1236, sc: 223, st: 26, obc: 754, general: 233 },
];

const ugData: StudentSummary[] = [
  { id: 1, total: 1044, sc: 156, st: 45, obc: 588, general: 255 },
];

const diplomaData: StudentSummary[] = [
  { id: 1, total: 1731, sc: 945, st: 456, obc: 180, general: 150 },
];

const StudentDetails: React.FC = () => {
  return (
    <PageLayout title="Students Summary">

      <Card title="PG Programme" className="mb-4">
        <DataTable value={pgData}>
          <Column field="total" header="Total Number of Students" sortable />
          <Column field="sc" header="SC" sortable />
          <Column field="st" header="ST" sortable />
          <Column field="obc" header="OBC" sortable />
          <Column field="general" header="General" sortable />
        </DataTable>
      </Card>

      <Card title="UG Programme" className="mb-4">
        <DataTable value={ugData}>
          <Column field="total" header="Total Number of Students" sortable />
          <Column field="sc" header="SC" sortable />
          <Column field="st" header="ST" sortable />
          <Column field="obc" header="OBC" sortable />
          <Column field="general" header="General" sortable />
        </DataTable>
      </Card>

      <Card title="Diploma / Certificate Programme">
        <DataTable value={diplomaData}>
          <Column field="total" header="Total Number of Students" sortable />
          <Column field="sc" header="SC" sortable />
          <Column field="st" header="ST" sortable />
          <Column field="obc" header="OBC" sortable />
          <Column field="general" header="General" sortable />
        </DataTable>
      </Card>

    </PageLayout>
  );
};

export default StudentDetails;
