import React, { useState } from "react";
import PageLayout from "@/components/PageLayout";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { InputText } from "primereact/inputtext";
import { Dialog } from "primereact/dialog";

interface Recommendation {
  id: number;
  title: string;
  pdfUrl: string;
}

const initialData: Recommendation[] = [
  {
    id: 1,
    title:
      "Recommendations of Previous Cycle List (SSR) for 4th Cycle of Accreditation",
    pdfUrl: "/pdfs/recommendations_previous_cycle.pdf",
  },
];

const RecommendationsOfPreviousCycle: React.FC = () => {
  const [showForm, setShowForm] = useState(false);
  const [pdfVisible, setPdfVisible] = useState(false);
  const [selectedPdf, setSelectedPdf] = useState<string | null>(null);
  const [data, setData] = useState<Recommendation[]>(initialData);
  const [title, setTitle] = useState("");
  const [file, setFile] = useState<File | null>(null);

  const openPdf = (url: string) => {
    setSelectedPdf(url);
    setPdfVisible(true);
  };

  const saveData = () => {
    if (!title || !file) return alert("All fields are required");

    const newItem: Recommendation = {
      id: data.length + 1,
      title,
      pdfUrl: URL.createObjectURL(file),
    };

    setData([...data, newItem]);
    setTitle("");
    setFile(null);
    setShowForm(false);
  };
  if (showForm) {
    return (
      <PageLayout title="Recommendations of Previous Cycle List">
        <Card className="mb-4">
          <div className="flex justify-between mb-4">
            <h3 className="font-semibold">
              Add Recommendations of Previous Cycle List
            </h3>
            <Button
              label="Go Back"
              className="p-button-text"
              onClick={() => setShowForm(false)}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium">
                Recommendations Title *
              </label>
              <InputText
                className="w-full"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Enter Recommendations Title"
              />
            </div>

            <div>
              <label className="text-sm font-medium">
                Upload PDF *
              </label>
              <input
                type="file"
                className="p-inputtext w-full"
                accept="application/pdf"
                onChange={(e) =>
                  setFile(e.target.files ? e.target.files[0] : null)
                }
              />
            </div>
          </div>

          <div className="flex justify-center gap-3 mt-5">
            <Button label="Save" icon="pi pi-save" onClick={saveData} />
            <Button
              label="Clear"
              icon="pi pi-refresh"
              className="p-button-secondary"
              onClick={() => {
                setTitle("");
                setFile(null);
              }}
            />
          </div>
        </Card>
      </PageLayout>
    );
  }
  return (
    <PageLayout title="Recommendations of Previous Cycle List">
      <Card
        className="mb-4"
        header={
          <div className="flex justify-between items-center">
            <h2>
              Recommendation of Previous Cycle
            </h2>
            <div className="flex gap-2">
              <Button
                icon="pi pi-eye"
                className="p-button-rounded p-button-text"
                onClick={() => openPdf(data[0].pdfUrl)}
              />
              <Button
                label="Add Recommendation"
                icon="pi pi-plus"
                size="small"
                onClick={() => setShowForm(true)}
              />
            </div>
          </div>
        }
      />
      <Card title="  Recommendations of Previous Cycle List">
        <DataTable value={data} paginator rows={10}>
          <Column header="S.No" body={(_, opt) => opt.rowIndex + 1} />
          <Column
            field="title"
            header="Recommendations of Previous Cycle List Title"
            sortable
          />
          <Column
            header="View"
            body={(row: Recommendation) => (
              <Button
                icon="pi pi-eye"
                className="p-button-rounded p-button-text"
                onClick={() => openPdf(row.pdfUrl)}
              />
            )}
          />
          <Column
            header="Action"
            body={() => (
              <div className="flex gap-2">
                <Button
                  icon="pi pi-pencil"
                  className="p-button-rounded p-button-info p-button-sm"
                />
                <Button
                  icon="pi pi-trash"
                  className="p-button-rounded p-button-danger p-button-sm"
                />
              </div>
            )}
          />
        </DataTable>
      </Card>
      <Dialog
        header="View PDF"
        visible={pdfVisible}
        style={{ width: "70vw" }}
        onHide={() => setPdfVisible(false)}
      >
        {selectedPdf && (
          <iframe src={selectedPdf} width="100%" height="500px" />
        )}
      </Dialog>
    </PageLayout>
  );
};

export default RecommendationsOfPreviousCycle;
