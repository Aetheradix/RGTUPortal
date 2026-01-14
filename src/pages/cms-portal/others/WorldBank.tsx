import React from "react";
import PageLayout from "@/components/PageLayout";
import { Card } from "primereact/card";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Tag } from "primereact/tag";

interface Program {
  id: number;
  title: string;
  year: number;
  status: string;
}

const programList: Program[] = [
  {
    id: 1,
    title: "Skill Development Program",
    year: 2022,
    status: "Ongoing",
  },
  {
    id: 2,
    title: "Infrastructure Improvement Project",
    year: 2021,
    status: "Completed",
  },
  {
    id: 3,
    title: "Faculty Development Program",
    year: 2023,
    status: "Ongoing",
  },
];

const WorldBank: React.FC = () => {
  const statusTemplate = (row: Program) => {
    let severity: "info" | "success" | "warning" | "danger" = "info";

    switch (row.status) {
      case "Completed":
        severity = "success";
        break;
      case "Ongoing":
        severity = "warning";
        break;
      default:
        severity = "info";
    }

    return <Tag value={row.status} severity={severity} />;
  };

  return (
    <PageLayout title="World Bank Programs">
      <Card>
        <DataTable
          value={programList}
          paginator
          rows={10}
          showGridlines
        >
          <Column field="title" header="World Bank Program" sortable/>
          <Column field="year" header="Year" sortable/>
          <Column field="status" header="Status" body={statusTemplate} sortable/>
        </DataTable>
      </Card>
    </PageLayout>
  );
};

export default WorldBank;
