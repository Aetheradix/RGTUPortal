import React from "react";
import PageLayout from "@/components/PageLayout";
import { Card } from "primereact/card";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";
import { Tag } from "primereact/tag";

interface ImageItem {
  id: number;
  title: string;
  fileUrl: string;
  description: string;
  uploadedDate: string;
  status: string;
}

const imageList: ImageItem[] = [
  {
    id: 1,
    title: "Laboratory Equipment",
    fileUrl: "/files/lab-equipment.pdf",
    description: "Advanced equipment available for practical sessions",
    uploadedDate: "15-Mar-2024",
    status: "Active",
  },
  {
    id: 2,
    title: "Annual Fest",
    fileUrl: "/files/annual-fest.pdf",
    description: "Highlights from the 2024 annual fest",
    uploadedDate: "25-Mar-2024",
    status: "Active",
  },
];

const ImageGallery: React.FC = () => {
  const viewTemplate = (row: ImageItem) => (
    <Button
      icon="pi pi-eye"
      className="p-button-text p-button-rounded"
      onClick={() => window.open(row.fileUrl, "_blank")}
      tooltip="View File"
      tooltipOptions={{ position: "top" }}
    />
  );

  const statusTemplate = (row: ImageItem) => (
    <Tag value={row.status} severity="success" />
  );

  return (
    <PageLayout title="Images">
      <Card>
        <h3 className="font-semibold mb-3">Image Gallery</h3>

        <DataTable
          value={imageList}
          paginator
          rows={10}
          showGridlines
        >
          <Column field="title" header="Image Title"sortable   style={{ whiteSpace: "nowrap" }}/>
          <Column header="Image" body={viewTemplate} sortable  style={{ whiteSpace: "nowrap" }}/>
          <Column field="description" header="Description" sortable  style={{ whiteSpace: "nowrap" }}/>
          <Column field="uploadedDate" header="Uploaded Date"sortable   style={{ whiteSpace: "nowrap" }}/>
          <Column header="Status" body={statusTemplate}sortable  style={{ whiteSpace: "nowrap" }} />
        </DataTable>
      </Card>
    </PageLayout>
  );
};

export default ImageGallery;
