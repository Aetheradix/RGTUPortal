import React, { useState } from "react";
import PageLayout from "@/components/PageLayout";
import { Card } from "primereact/card";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { Dialog } from "primereact/dialog";

interface IQACDocument {
  id: number;
  title: string;
  pdfUrl: string;
}

const initialDocuments: IQACDocument[] = [
  { id: 1, title: "IIOA", pdfUrl: "/pdfs/iioa.pdf" },
  { id: 2, title: "IQAC MEETING AND ACTION TAKEN", pdfUrl: "/pdfs/iqac_meeting.pdf" },
  { id: 3, title: "UNDERTAKING IIQA", pdfUrl: "/pdfs/undertaking_iiqa.pdf" },
];

const IQACPage: React.FC = () => {
  const [documents, setDocuments] = useState<IQACDocument[]>(initialDocuments);
  const [showForm, setShowForm] = useState(false);
  const [pdfVisible, setPdfVisible] = useState(false);
  const [selectedPdf, setSelectedPdf] = useState<string | null>(null);
  const [title, setTitle] = useState("");
  const [file, setFile] = useState<File | null>(null);

  const openPdf = (url: string) => {
    setSelectedPdf(url);
    setPdfVisible(true);
  };

  const saveDocument = () => {
    if (!title || !file) return alert("All fields are required");

    const newDoc: IQACDocument = {
      id: documents.length + 1,
      title,
      pdfUrl: URL.createObjectURL(file),
    };

    setDocuments([...documents, newDoc]);
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
      <PageLayout title="IQAC Documents">
        <Card className="mb-4">
          <div className="flex justify-between mb-4">
            <h3 className="font-semibold">Add Recommendations of Previous Cycle List</h3>
            <Button label="Go Back" className="p-button-text" onClick={() => setShowForm(false)} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium">
                Enter Recommendations of Previous Cycle List Title*
              </label>
              <InputText
                className="w-full"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Enter Title"
              />
            </div>

            <div>
              <label className="text-sm font-medium">
                Upload Recommendations of Previous Cycle List *
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
            <Button label="Save" icon="pi pi-save" onClick={saveDocument} />
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
    <PageLayout title="IQAC Documents">
 
      <Card
        className="mb-4"
        header={
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-bold">IQAC Documents</h2>
            <Button
              label="Add IQAC Document"
              icon="pi pi-plus"
              size="small"
              onClick={() => setShowForm(true)}
            />
          </div>
        }
      >
      <DataTable value={documents} paginator rows={10}>
  <Column field="title" header="IQAC Title" sortable />
  <Column
    header="View"
    body={(row: IQACDocument) => (
      <Button
        icon="pi pi-eye"
        className="p-button-rounded p-button-text"
        onClick={() => openPdf(row.pdfUrl)}
      />
    )}
  />
</DataTable>
      </Card>
      <Card title="IQAC List"
      >
        <DataTable value={documents} paginator rows={10}>
          <Column field="title" header="IQAC Title" sortable />
          <Column
            header="View"
            body={(row: IQACDocument) => (
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
        {selectedPdf && <iframe src={selectedPdf} width="100%" height="500px" />}
      </Dialog>
    </PageLayout>
  );
};

export default IQACPage;
