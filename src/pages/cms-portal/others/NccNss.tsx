import React from "react";
import PageLayout from "@/components/PageLayout";
import { Card } from "primereact/card";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Tag } from "primereact/tag";

interface Activity {
  id: number;
  activity: string;
  year: number;
  status: string;
}

const activityList: Activity[] = [
  {
    id: 1,
    activity: "NCC Training Camp",
    year: 2023,
    status: "Completed",
  },
  {
    id: 2,
    activity: "NSS Blood Donation Drive",
    year: 2024,
    status: "Ongoing",
  },
  {
    id: 3,
    activity: "NSS Special Camp for Rural Development",
    year: 2023,
    status: "Completed",
  },
];

const NccNss: React.FC = () => {
  const statusTemplate = (row: Activity) => {
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
    <PageLayout title="NCC / NSS Activities">
      <Card>
        <DataTable
          value={activityList}
          paginator
          rows={10}
          showGridlines
          responsiveLayout="scroll"
        >
          <Column field="activity" header="Activity" sortable/>
          <Column field="year" header="Year" sortable/>
          <Column field="status" header="Status" body={statusTemplate} sortable/>
        </DataTable>
      </Card>
    </PageLayout>
  );
};

export default NccNss;
