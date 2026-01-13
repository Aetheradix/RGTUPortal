import React from "react";
import PageLayout from "@/components/PageLayout";
import { Card } from "primereact/card";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";

interface Topper {
  id: number;
  year: string;
  programme: string[];
  name: string[];
}

const topperData: Topper[] = [
  {
    id: 1,
    year: "2021",
    programme: ["M.Tech", "MCA", "BTech", "BCA"],
    name: ["Rahul Sharma", "Priya Singh", "Akash Verma", "Sneha Patel"],
  },
  {
    id: 2,
    year: "2022",
    programme: ["M.Tech", "MCA", "BTech", "BCA"],
    name: ["Mohit Jha", "Arjun Kushwaha", "Virendra Rajput", "Harsh Jain"],
  },
  {
    id: 3,
    year: "2023",
    programme: ["M.Tech", "MCA", "BTech", "BCA"],
    name: ["Arvind Sharma", "Radhe Sharma", "Murli Chaturvedi", "Ishraj Singh Chouhan"],
  },
  {
    id: 4,
    year: "2024",
    programme: ["M.Tech", "MCA", "BTech", "BCA"],
    name: ["Nitin Patel", "Rahul Carpenter", "Pawan Parihar", "Amit Bathri"],
  },
];

const ListOfTopperStudents: React.FC = () => {
  return (
    <PageLayout title="Topper Students">
      <Card title="List of Topper Students">
        <DataTable value={topperData} paginator rows={10} className="mt-3">
      
          <Column field="year" header="Year" sortable />

          <Column
            header="Programme Name"
            body={(row: Topper) => (
              <ul className="list-disc ml-4">
                {row.programme.map((p, i) => (
                  <li key={i}>{p}</li>
                ))}
              </ul>
            )}
         sortable />

          <Column
            header="Gold Medalist Name"
            body={(row: Topper) => (
              <ul className="list-disc ml-4">
                {row.name.map((n, i) => (
                  <li key={i}>{n}</li>
                ))}
              </ul>
            )}
          sortable/>
        </DataTable>
      </Card>
    </PageLayout>
  );
};

export default ListOfTopperStudents;
