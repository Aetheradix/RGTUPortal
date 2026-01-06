import React from "react";
import PageLayout from "@/components/PageLayout";
import { Card } from "primereact/card";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Tag } from "primereact/tag";

interface ExtraCoCurriculars {
  id: number;
  activity: string;
  year: number;
  status: string;
}

const activitiesList: ExtraCoCurriculars[] = [
  {
    id: 1,
    activity: "Engineering & Technology Conference",
    year: 2023,
    status: "Completed",
  },
  {
    id: 2,
    activity: "Skill Development Training Program",
    year: 2024,
    status: "Ongoing",
  },
  {
    id: 3,
    activity:
      "Student Exchange Program with International Universities",
    year: 2022,
    status: "Completed",
  },
];

const ExtraCoCurricular: React.FC = () => {
  const statusTemplate = (row: ExtraCoCurriculars) => {
    const severity = row.status === "Completed" ? "success" : "warning";
    return <Tag value={row.status} severity={severity} />;
  };

  return (
    <PageLayout title="Extra Co-Curricular">
      <Card>
        <h3 className="font-semibold mb-3">Extra Co-Curricular Activities</h3>

        <DataTable
          value={activitiesList}
          paginator
          rows={10}
          showGridlines
        >
          <Column header="S.No." body={(_, opt) => opt.rowIndex + 1} />
          <Column field="activity" header="Activity" />
          <Column field="year" header="Year" />
          <Column
            field="status"
            header="Status"
            body={statusTemplate}
          />
        </DataTable>
      </Card>
    </PageLayout>
  );
};

export default ExtraCoCurricular;
