import React, { useState } from "react";
import PageLayout from "@/components/PageLayout";
import { Card } from "primereact/card";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { Tag } from "primereact/tag";

interface WhoIsWho {
  id: number;
  name: string;
  designation: string;
  email: string;
  status: string;
}

const whoIsWhoList: WhoIsWho[] = [
  {
    id: 1,
    name: "Rahul Gupta",
    designation: "Principal",
    email: "rahulgupta22@gmail.com",
    status: "Active",
  },
  {
    id: 2,
    name: "Priya Sharma",
    designation: "Dean",
    email: "priyasharma22@gmail.com",
    status: "Active",
  },
  {
    id: 3,
    name: "Alok Verma",
    designation: "Registrar",
    email: "alokverma22@gmail.com",
    status: "Active",
  },
];

const WhoIsWhoPage: React.FC = () => {
  const [view, setView] = useState<"list" | "add">("list");

  return (
    <PageLayout title="Who is Who">
     
      {view === "list" && (
        <Card>
          <div className="flex justify-between items-center mb-3">
            <h3 className="font-semibold">Who is Who</h3>
            <Button
              label="Add Who is Who"
              icon="pi pi-plus"
              onClick={() => setView("add")}
            />
          </div>

          <DataTable value={whoIsWhoList} paginator rows={10} showGridlines>
            <Column field="name" header="Name" />
            <Column field="designation" header="Designation" />
            <Column field="email" header="Email Id" />
            <Column
              header="Status"
              body={(row: WhoIsWho) => (
                <Tag value={row.status} severity="success" />
              )}
            />
            <Column
              header="Actions"
              body={() => (
                <div className="flex gap-2">
                  <Button
                    icon="pi pi-pencil"
                    className="p-button-text p-button-sm p-button-warning"
                    tooltip="Edit"
                  />
                  <Button
                    icon="pi pi-trash"
                    className="p-button-text p-button-sm p-button-danger"
                    tooltip="Delete"
                  />
                </div>
              )}
            />
          </DataTable>
        </Card>
      )}


      {view === "add" && (
        <Card>
          <div className="flex justify-between items-center mb-3">
            <h3 className="font-semibold">Add Who is Who</h3>
            <Button
              label="Go Back"
              icon="pi pi-arrow-left"
              className="p-button-text"
              onClick={() => setView("list")}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm mb-1">Enter Name*</label>
              <InputText placeholder="Enter Name" className="w-full" />
            </div>

            <div>
              <label className="block text-sm mb-1">Enter Designation*</label>
              <InputText placeholder="Enter Designation" className="w-full" />
            </div>

            <div>
              <label className="block text-sm mb-1">Enter Email Id*</label>
              <InputText placeholder="Enter Email" className="w-full" />
            </div>
          </div>

          <div className="flex gap-3">
            <Button label="Save" icon="pi pi-save" />
            <Button
              label="Clear"
              icon="pi pi-refresh"
              className="p-button-secondary"
            />
          </div>
        </Card>
      )}
    </PageLayout>
  );
};

export default WhoIsWhoPage;
