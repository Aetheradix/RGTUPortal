/* eslint-disable @typescript-eslint/no-explicit-any */

import { Card } from "primereact/card";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";

import { FaEye } from "react-icons/fa";
import PageLayout from "@/components/PageLayout";

const auditsData = [
  {
    id: 1,
    title: "Fire Audit Report",
    file: "/pdfs/fire-audit-report.pdf",
  },
  {
    id: 2,
    title: "Financial Audit",
    file: "/pdfs/financial-audit.pdf",
  },
  {
    id: 3,
    title: "Non Government Funds Statements",
    file: "/pdfs/non-government-funds.pdf",
  },
  {
    id: 4,
    title: "Fire Audit",
    file: "/pdfs/fire-audit.pdf",
  },
  {
    id: 5,
    title: "Green Audit",
    file: "/pdfs/green-audit.pdf",
  },
  {
    id: 6,
    title: "Energy Audit",
    file: "/pdfs/energy-audit.pdf",
  },
];

export default function Audits() {
  const openPdf = (file: string) => {
    window.open(file, "_blank");
  };

  const documentTemplate = (rowData: any) => {
    return (
      <Button
        icon={<FaEye />}
        className="p-button-text p-button-primary"
        onClick={() => openPdf(rowData.file)}
        tooltip="View Document"
      />
    );
  };

  return (
  <PageLayout title="Audits">
      <Card>
        <DataTable
          value={auditsData}
          paginator
          rows={10}
        >
          <Column field="title" header="Title" sortable />
          <Column header="Document" body={documentTemplate}sortable />
        </DataTable>
      </Card>
    </PageLayout>
  );
}
