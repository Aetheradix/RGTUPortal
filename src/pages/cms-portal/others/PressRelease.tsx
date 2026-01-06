import React from "react";
import PageLayout from "@/components/PageLayout";
import { Card } from "primereact/card";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Tag } from "primereact/tag";

interface PressRelease {
  id: number;
  title: string;
  date: string;
  status: string;
}

const pressReleases: PressRelease[] = [
  {
    id: 1,
    title: "Launch of New Skill Development Program",
    date: "10-Jan-2024",
    status: "Published",
  },
  {
    id: 2,
    title: "Announcement of Infrastructure Projects in Colleges",
    date: "15-Feb-2024",
    status: "Pending",
  },
  {
    id: 3,
    title: "Introduction of New Faculty Training Initiative",
    date: "01-Mar-2024",
    status: "Published",
  },
];

const PressRelease: React.FC = () => {
  const statusTemplate = (row: PressRelease) => {
    let severity: "info" | "success" | "warning" | "danger" = "info";

    switch (row.status) {
      case "Published":
        severity = "success";
        break;
      case "Pending":
        severity = "warning";
        break;
      default:
        severity = "info";
    }

    return <Tag value={row.status} severity={severity} />;
  };

  return (
    <PageLayout title="Press Release">
      <Card>
        <h3 className="font-semibold mb-3">Press Release</h3>

        <DataTable
          value={pressReleases}
          paginator
          rows={10}
          showGridlines
        >
          <Column field="title" header="Press Release" sortable/>
          <Column field="date" header="Date" sortable/>
          <Column field="status" header="Status" body={statusTemplate}sortable />
        </DataTable>
      </Card>
    </PageLayout>
  );
};

export default PressRelease;
