import PageLayout from "@/components/PageLayout";
import { Card } from "primereact/card";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Tag } from "primereact/tag";

interface Notification {
  id: number;
  title: string;
  date: string;
  details: string;
  status: string;
}

export default function Notifications() {
  const notifications: Notification[] = [
    {
      id: 1,
      title: "Admission Notification 2024",
      date: "10-Jan-2024",
      details: "Details about admission for the academic year 2024-25",
      status: "Published",
    },
    {
      id: 2,
      title: "Exam Schedule for Semester Exams",
      date: "20-Feb-2024",
      details: "Time table and instructions for upcoming semester exams",
      status: "Published",
    },
    {
      id: 3,
      title: "Recruitment Notice for Faculty Positions",
      date: "05-Mar-2024",
      details: "Open positions and application process for faculty roles",
      status: "Published",
    },
  ];

  const statusBodyTemplate = (rowData: Notification) => {
    return <Tag value={rowData.status} severity="success" />;
  };

  return (
    <PageLayout title="Notifications">


      <Card>
        <DataTable
          value={notifications}
          paginator
          rows={10}
          rowsPerPageOptions={[10, 25, 50, 100]}
          dataKey="id"

          paginatorTemplate="RowsPerPageDropdown FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport"
          currentPageReportTemplate="Showing {first} to {last} of {totalRecords} entries"
          emptyMessage="No notifications found."
          className="p-datatable-sm"
        >
      
          <Column field="title" header="Notification Title" sortable style={{ width: "30%" }} />
          <Column field="date" header="Published Date" sortable style={{ width: "15%" }} />
          <Column field="details" header="Details" style={{ width: "35%" }} />
          <Column field="status" header="Status" body={statusBodyTemplate} sortable style={{ width: "15%" }} />
        </DataTable>
      </Card>
    </PageLayout>
  );
}