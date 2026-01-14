// export default InstitutionalDistinctiveness;
import React, { useState } from "react";
import PageLayout from "@/components/PageLayout";
import { Card } from "primereact/card";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { Dialog } from "primereact/dialog";

interface Distinctiveness {
  id: number;
  title: string;
  pdfUrl: string;
}

const initialData: Distinctiveness[] = [
  {
    id: 1,
    title: "Institutional Distinctiveness",
    pdfUrl: "/pdfs/institutional_distinctiveness.pdf",
  },
];

const InstitutionalDistinctiveness: React.FC = () => {
  const [data, setData] = useState<Distinctiveness[]>(initialData);
  const [showForm, setShowForm] = useState(false);
  const [pdfVisible, setPdfVisible] = useState(false);
  const [selectedPdf, setSelectedPdf] = useState<string | null>(null);
  const [title, setTitle] = useState("");
  const [file, setFile] = useState<File | null>(null);

  const openPdf = (url: string) => {
    setSelectedPdf(url);
    setPdfVisible(true);
  };

  const saveData = () => {
    if (!title || !file) return alert("All fields are required");

    const newItem: Distinctiveness = {
      id: data.length + 1,
      title,
      pdfUrl: URL.createObjectURL(file),
    };

    setData([...data, newItem]);
    setTitle("");
    setFile(null);
    setShowForm(false);
  };

  const actionTemplate = () => (
    <div className="flex gap-2">
      <Button icon="pi pi-pencil" className="p-button-rounded p-button-info p-button-sm" />
      <Button icon="pi pi-trash" className="p-button-rounded p-button-danger p-button-sm" />
    </div>
  );
  if (showForm) {
    return (
      <PageLayout title="Institutional Distinctiveness">
        <Card
          className="mb-4"
          header={
             <div className="flex justify-between items-center px-4 py-3">      <h3 className="font-semibold">Add Institutional Distinctiveness</h3>
              <Button
                label="Go Back"
                className="p-button-text"
                onClick={() => setShowForm(false)}
              />
            </div>
          }
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium">
                Enter Institutional Distinctiveness Title*
              </label>
              <InputText
                className="w-full"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Enter Institutional Distinctiveness Title"
              />
            </div>

            <div>
              <label className="text-sm font-medium">
                Upload Institutional Distinctiveness *
              </label>
              <input
                type="file"
                className="p-inputtext w-full"
                accept="application/pdf"
                onChange={(e) => setFile(e.target.files ? e.target.files[0] : null)}
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
    <PageLayout title="Institutional Distinctiveness">
      <Card
        className="mb-4"
        header={
        <div className="flex justify-between items-center px-4 py-3">
            <h3 className="font-semibold">Institutional Distinctiveness</h3>
            <Button
              icon="pi pi-eye"
              className="p-button-rounded p-button-text"
              onClick={() => openPdf(data[0].pdfUrl)}
            />
          </div>
        }/>
  <Card
  header={
    <div className="flex justify-between items-center px-4 py-3">
      <h3 className="font-semibold">
        Institutional Distinctiveness List
      </h3>
      <Button
        label="Add Institutional Distinctiveness"
        icon="pi pi-plus"
        size="small"
        onClick={() => setShowForm(true)}
      />
    </div>
  }
>
        <DataTable value={data} paginator rows={10}>
          <Column header="S.No" body={(_, opt) => opt.rowIndex + 1} />
          <Column field="title" header="Institutional Distinctiveness Title" />
          <Column
            header="View"
            body={(row: Distinctiveness) => (
              <Button
                icon="pi pi-eye"
                className="p-button-rounded p-button-text"
                onClick={() => openPdf(row.pdfUrl)}
              />
            )}
          />
          <Column header="Action" body={actionTemplate} />
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

export default InstitutionalDistinctiveness;
