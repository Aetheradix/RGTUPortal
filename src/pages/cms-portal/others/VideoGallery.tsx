import React from "react";
import PageLayout from "@/components/PageLayout";
import { Card } from "primereact/card";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";
import { Tag } from "primereact/tag";

interface VideoItem {
  id: number;
  title: string;
  fileUrl: string; 
  description: string;
  uploadedDate: string;
  status: string;
}

const videoList: VideoItem[] = [
  {
    id: 1,
    title: "Laboratory Equipment",
    fileUrl: "/files/lab-equipment.pdf",
    description: "Overview of technical education and its significance in shaping careers.",
    uploadedDate: "10-Jan-2024",
    status: "Active",
  },
  {
    id: 2,
    title: "Campus Tour",
    fileUrl: "/files/campus-tour.pdf",
    description: "A virtual walkthrough of the campus and its state-of-the-art facilities.",
    uploadedDate: "20-Feb-2024",
    status: "Active",
  },
  {
    id: 3,
    title: "Student Testimonials",
    fileUrl: "/files/student-testimonials.pdf",
    description: "Inspirational stories shared by students about their learning journey.",
    uploadedDate: "05-Mar-2024",
    status: "Active",
  },
];

const VideoGallery: React.FC = () => {
  const viewTemplate = (row: VideoItem) => (
    <Button
      icon="pi pi-eye"
      className="p-button-text p-button-rounded"
      onClick={() => window.open(row.fileUrl, "_blank")}
      tooltip="View File"
      tooltipOptions={{ position: "top" }}
    />
  );

  const statusTemplate = (row: VideoItem) => <Tag value={row.status} severity="success" />;

  return (
    <PageLayout title="Video Gallery">
      <Card>


        <DataTable
          value={videoList}
          paginator
          rows={10}
          showGridlines
          responsiveLayout="scroll"
        >
         <Column field="title" header="Video Title" />
          <Column header="Video" body={viewTemplate} sortable/>
          <Column field="description" header="Description"sortable />
          <Column field="uploadedDate" header="Uploaded Date"sortable />
          <Column field="status" header="Status" body={statusTemplate} sortable/>
        </DataTable>
      </Card>
    </PageLayout>
  );
};

export default VideoGallery;
