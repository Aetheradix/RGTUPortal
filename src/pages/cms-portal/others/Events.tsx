import React from "react";
import PageLayout from "@/components/PageLayout";
import { Card } from "primereact/card";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Tag } from "primereact/tag";

interface Event {
  id: number;
  name: string;
  date: string;
  location: string;
  organizer: string;
  status: string;
}

const eventList: Event[] = [
  {
    id: 1,
    name: "Annual Technical Fest",
    date: "12-Feb-2024",
    location: "Bhopal",
    organizer: "MANIT Bhopal",
    status: "Scheduled",
  },
  {
    id: 2,
    name: "Startup Pitch Competition",
    date: "25-Mar-2024",
    location: "Indore",
    organizer: "Acropolis Institute",
    status: "Planned",
  },
  {
    id: 3,
    name: "National Robotics Championship",
    date: "05-Apr-2024",
    location: "Gwalior",
    organizer: "ITM University",
    status: "Completed",
  },
];

const Events: React.FC = () => {
  const statusTemplate = (row: Event) => {
    const severity =
      row.status === "Completed"
        ? "success"
        : row.status === "Scheduled"
        ? "info"
        : "warning";

    return <Tag value={row.status} severity={severity} />;
  };

  return (
    <PageLayout title="Events">
      <Card>


        <DataTable
          value={eventList}
          paginator
          rows={10}
          showGridlines
          responsiveLayout="scroll"
        >
          <Column header="S.No." body={(_, opt) => opt.rowIndex + 1} />
          <Column field="name" header="Event Name" />
          <Column field="date" header="Date" />
          <Column field="location" header="Location" />
          <Column field="organizer" header="Organizer" />
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

export default Events;
