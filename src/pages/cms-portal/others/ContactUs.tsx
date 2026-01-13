
import PageLayout from "@/components/PageLayout";
import { Card } from "primereact/card";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";

interface ContactDetail {
  label: string;
  value: string;
}

export default function ContactUs() {
  const contactDetails: ContactDetail[] = [
    { label: "Department Name", value: "Technical Education Department" },
    { label: "Office Address", value: "Bhopal Office, Arera Hills, Bhopal" },
    { label: "Contact Person Name", value: "Ramesh Gupta" },
    { label: "Designation", value: "Director of Technical Education" },
    { label: "Mobile No.", value: "9876543210" },
    { label: "Email Id", value: "ramesh.gupta@techedu.mp.gov.in" },
  ];

  return (
    <PageLayout title="Contact Us">
      <Card>
        <DataTable
          value={contactDetails}
          showGridlines
        >
          <Column
            field="label"
            header="Field"
            style={{ width: "30%" }}
            bodyClassName="font-medium"
          />
          <Column
            field="value"
            header="Details"
            style={{ width: "70%" }}
          />
        </DataTable>
      </Card>
    </PageLayout>
  );
}
