import React, { useState } from "react";
import PageLayout from "../../../components/PageLayout";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Dialog } from "primereact/dialog";

interface UploadRow {
  id: number;
  passportPhoto: string;
  signature: string;
  mark10: string;
  mark12: string;
  transfer: string;
  caste: string;
  income: string;
}

const UploadedDocumentsList: React.FC = () => {
  const [regNoSearch, setRegNoSearch] = useState("");
  const [rows, setRows] = useState<UploadRow[]>([]);
  const [viewDocUrl, setViewDocUrl] = useState<string | null>(null);

  const handleSearch = () => {
    setRows([
      {
        id: 1,
        passportPhoto: "https://via.placeholder.com/80",
        signature: "sig_url_1",
        mark10: "mark10_url_1",
        mark12: "mark12_url_1",
        transfer: "transfer_url_1",
        caste: "caste_url_1",
        income: "income_url_1",
      },
    ]);
  };

  const actionBodyTemplate = (rowData: UploadRow) => {
    return (
      <div className="flex gap-2">
        <button
          className="text-blue-600"
          onClick={() => console.log("EDIT", rowData)}
        >
          ✏️
        </button>
        <button
          className="text-red-600"
          onClick={() => console.log("DELETE", rowData)}
        >
          🗑️
        </button>
      </div>
    );
  };

  const viewDocTemplate = (docUrl: string) => {
    return (
      <button
        className="bg-indigo-600 text-white px-2 py-1 rounded text-sm"
        onClick={() => setViewDocUrl(docUrl)}
      >
        👁️
      </button>
    );
  };

  return (
    <PageLayout title="Uploaded Documents">
      <div className="bg-white p-4 rounded shadow mb-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
          <div className="md:col-span-2">
            <label className="font-medium">Registration No.</label>
            <InputText
              value={regNoSearch}
              onChange={(e) => setRegNoSearch(e.target.value)}
              placeholder="Enter Registration No."
              className="w-full"
            />
          </div>
          <Button
            label="Search"
            className="bg-indigo-600 border-none text-white"
            onClick={handleSearch}
          />
          <Button
            label="Clear"
            className="bg-red-300 border-none text-black"
            onClick={() => {
              setRegNoSearch("");
              setRows([]);
            }}
          />
        </div>
      </div>

      <div className="bg-white p-4 rounded shadow">
        <DataTable
          value={rows}
          paginator
          rows={10}
          emptyMessage="No records found"
          className="p-datatable-sm"
        >
          <Column
            field="id"
            header="Sr.No"
            sortable
            style={{ width: "80px" }}
          />
          <Column
            header="Passport Size Photograph"
            body={(row) => (
              <img
                src={row.passportPhoto}
                alt="Passport"
                className="h-16 w-16 object-cover rounded"
              />
            )}
          />
          <Column
            header="Signature"
            body={(row) => viewDocTemplate(row.signature)}
          />
          <Column
            header="10th Mark Sheets"
            body={(row) => viewDocTemplate(row.mark10)}
          />
          <Column
            header="12th Mark Sheets"
            body={(row) => viewDocTemplate(row.mark12)}
          />
          <Column
            header="Transfer Certificate/Migration"
            body={(row) => viewDocTemplate(row.transfer)}
          />
          <Column
            header="Caste Certificate"
            body={(row) => viewDocTemplate(row.caste)}
          />
          <Column
            header="Income Certificate"
            body={(row) => viewDocTemplate(row.income)}
          />
          <Column
            header="Actions"
            body={actionBodyTemplate}
            style={{ textAlign: "center", width: "120px" }}
          />
        </DataTable>
      </div>

      <Dialog
        header="View Document"
        visible={!!viewDocUrl}
        style={{ width: "50vw" }}
        onHide={() => setViewDocUrl(null)}
      >
        {viewDocUrl && (
          <iframe
            src={viewDocUrl}
            className="w-full h-96"
            title="doc-view"
          ></iframe>
        )}
      </Dialog>
    </PageLayout>
  );
};

export default UploadedDocumentsList;
