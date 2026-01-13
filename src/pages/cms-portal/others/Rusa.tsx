import React from "react";
import PageLayout from "@/components/PageLayout";
import { Card } from "primereact/card";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Tag } from "primereact/tag";

interface RUSA {
  id: number;
  details: string;
  year: number;
  status: string;
}

const rusaList: RUSA[] = [
  {
    id: 1,
    details: "Details of RUSA program",
    year: 2024,
    status: "Active",
  },
];

const Rusa: React.FC = () => {
  const statusTemplate = (row: RUSA) => {
    let severity: "info" | "success" | "warning" | "danger" = "info";

    switch (row.status) {
      case "Active":
        severity = "success";
        break;
      case "Pending":
        severity = "warning";
        break;
      case "Inactive":
        severity = "danger";
        break;
      default:
        severity = "info";
    }

    return <Tag value={row.status} severity={severity} />;
  };

  return (
    <PageLayout title="RUSA">
      <Card>
        <h3 className="font-semibold mb-3">RUSA Program Details</h3>

        <DataTable
          value={rusaList}
          paginator
          rows={10}
          showGridlines
        >
          <Column field="details" header="RUSA Details" sortable />
          <Column field="year" header="Year" sortable/>
          <Column field="status" header="Status" body={statusTemplate} sortable/>
        </DataTable>
      </Card>
    </PageLayout>
  );
};

export default Rusa;
