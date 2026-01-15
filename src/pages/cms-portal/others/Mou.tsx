import React from "react";
import PageLayout from "@/components/PageLayout";
import { Card } from "primereact/card";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Tag } from "primereact/tag";

interface MOU {
  id: number;
  title: string;
  year: number;
  status: string;
}

const mouList: MOU[] = [
  {
    id: 1,
    title: "Collaboration with ABC University for Skill Development",
    year: 2023,
    status: "Active",
  },
  {
    id: 2,
    title: "Partnership with XYZ Corporation for Technology Training",
    year: 2024,
    status: "Pending",
  },
  {
    id: 3,
    title: "Memorandum with DEF Institute for Faculty Exchange Program",
    year: 2022,
    status: "Expired",
  },
];

const Mou: React.FC = () => {
  const statusTemplate = (row: MOU) => {
    let severity: "info" | "success" | "warning" | "danger" = "info";

    switch (row.status) {
      case "Active":
        severity = "success";
        break;
      case "Pending":
        severity = "warning";
        break;
      case "Expired":
        severity = "danger";
        break;
      default:
        severity = "info";
    }

    return <Tag value={row.status} severity={severity} />;
  };

  return (
    <PageLayout title="MOU">
      <Card>
        <h3 className="font-semibold mb-3">MOU List</h3>

        <DataTable
          value={mouList}
          paginator
          rows={10}
          showGridlines
        >
         
          <Column field="title" header="MOU (Memorandum of Understanding)" />
          <Column field="year" header="Year" />
          <Column field="status" header="Status" body={statusTemplate} />
        </DataTable>
      </Card>
    </PageLayout>
  );
};

export default Mou;
