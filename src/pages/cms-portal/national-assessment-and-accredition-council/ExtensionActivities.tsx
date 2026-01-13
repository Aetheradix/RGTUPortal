/* eslint-disable @typescript-eslint/no-explicit-any */
import PageLayout from "@/components/PageLayout";
import { Card } from "primereact/card";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";
import { FaEye } from "react-icons/fa";

const extensionActivitiesData = [
  { id: 1, year: "2021-22", file: "/pdfs/extension-activities-2021-22.pdf" },
  { id: 2, year: "2020-21", file: "/pdfs/extension-activities-2020-21.pdf" },
  { id: 3, year: "2019-20", file: "/pdfs/extension-activities-2019-20.pdf" },
  { id: 4, year: "2018-19", file: "/pdfs/extension-activities-2018-19.pdf" },
  { id: 5, year: "2017-18", file: "/pdfs/extension-activities-2017-18.pdf" },
];

export default function ExtensionActivities() {
  const openPdf = (file: string) => {
    window.open(file, "_blank");
  };

  const linkTemplate = (rowData: any) => {
    return (
      <Button
        icon={<FaEye />}
        className="p-button-text p-button-primary"
        onClick={() => openPdf(rowData.file)}
        tooltip="View Extension Activities"
      />
    );
  };

  return (
    <PageLayout title="Extension Activities List">
      <Card>
        <DataTable
          value={extensionActivitiesData}
          paginator
          rows={10}
        >
          <Column field="year" header="Year" sortable />
          <Column header="Link" body={linkTemplate} sortable/>
        </DataTable>
      </Card>
    </PageLayout>
  );
}
