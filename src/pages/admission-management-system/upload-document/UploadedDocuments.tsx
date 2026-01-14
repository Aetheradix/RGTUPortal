import React, { useState } from "react";
import PageLayout from "../../../components/PageLayout";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Dialog } from "primereact/dialog";
import { Checkbox, type CheckboxChangeEvent } from "primereact/checkbox";

interface UploadRow {
  id: number;
  regNo: string;
  studentName: string;
  fatherName: string;
  dob: string;
  gender: string;
  bloodGroup: string;
  category: string;
  mobile: string;
  passportPhoto?: File | null;
  signature?: File | null;
  mark10?: File | null;
  mark12?: File | null;
  transfer?: File | null;
  caste?: File | null;
  income?: File | null;
  status: boolean;
}

const UploadedDocumentsList: React.FC = () => {
  const [regNoSearch, setRegNoSearch] = useState("");
  const [rows, setRows] = useState<UploadRow[]>([]);
  const [editingRow, setEditingRow] = useState<UploadRow | null>(null);
  const [viewDocUrl, setViewDocUrl] = useState<string | null>(null);

  const handleSearch = () => {
    setRows([
      {
        id: 1,
        regNo: "123456789012",
        studentName: "Ruhi Sharma",
        fatherName: "Rajesh Sharma",
        dob: "22/11/1998",
        gender: "Female",
        bloodGroup: "O+",
        category: "OBC",
        mobile: "9586321475",
        passportPhoto: null,
        signature: null,
        mark10: null,
        mark12: null,
        transfer: null,
        caste: null,
        income: null,
        status: true,
      },
    ]);
  };

  const actionBodyTemplate = (rowData: UploadRow) => (
    <div className="flex gap-2 justify-center">
      <button className="text-blue-600" onClick={() => setEditingRow(rowData)}>
        ✏️
      </button>
      <button
        className="text-red-600"
        onClick={() => setRows(rows.filter((item) => item.id !== rowData.id))}
      >
        🗑️
      </button>
    </div>
  );

  const handleSaveEdit = () => {
    if (!editingRow) return;
    setRows((prev) =>
      prev.map((r) => (r.id === editingRow.id ? editingRow : r))
    );
    setEditingRow(null);
  };

  const handleClearEdit = () => {
    setEditingRow(null);
  };

  const changeFileHandler = (fileKey: keyof UploadRow, file: File | null) => {
    if (!editingRow) return;
    setEditingRow({ ...editingRow, [fileKey]: file });
  };

  return (
    <PageLayout title="Uploaded Documents">
      {!editingRow && (
        <>
          <div className="bg-white p-4 rounded shadow mb-4">
            <div className="flex flex-wrap items-end gap-4">
              <div className="flex flex-col w-full md:w-auto">
                <label className="font-medium">Registration No.</label>
                <InputText
                  value={regNoSearch}
                  onChange={(e) => setRegNoSearch(e.target.value)}
                  placeholder="Enter Registration No."
                  className="w-full md:max-w-sm"
                />
              </div>

              <div>
                <Button
                  label="Search"
                  icon="pi pi-search"
                  className="p-button-sm bg-indigo-600 text-white"
                  onClick={handleSearch}
                />
              </div>

              <div>
                <Button
                  label="Clear"
                  icon="pi pi-times"
                  className="p-button-sm bg-red-300 text-black"
                  onClick={() => {
                    setRegNoSearch("");
                    setRows([]);
                  }}
                />
              </div>
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
              <Column field="regNo" header="Registration No." />
              <Column field="studentName" header="Student Name" />
              <Column field="fatherName" header="Father's Name" />
              <Column field="mobile" header="Mobile" />
              <Column
                header="Actions"
                body={actionBodyTemplate}
                style={{ textAlign: "center", width: "120px" }}
              />
            </DataTable>
          </div>
        </>
      )}

      {editingRow && (
        <div className="bg-white p-6 rounded shadow-sm mt-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-bold">Edit Uploaded Documents</h2>
            <Button
              label="Go Back"
              icon="pi pi-arrow-left"
              className="p-button-sm p-button-text"
              onClick={() => setEditingRow(null)}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
            <div>
              <label className="block font-medium">Registration No.*</label>
              <InputText
                value={editingRow.regNo}
                disabled
                className="w-full bg-gray-200"
              />
            </div>

            <div>
              <label className="block font-medium">Student Name</label>
              <InputText
                value={editingRow.studentName}
                disabled
                className="w-full bg-gray-200"
              />
            </div>

            <div>
              <label className="block font-medium">Father's Name</label>
              <InputText
                value={editingRow.fatherName}
                disabled
                className="w-full bg-gray-200"
              />
            </div>

            <div>
              <label className="block font-medium">Date of Birth</label>
              <InputText
                value={editingRow.dob}
                disabled
                className="w-full bg-gray-200"
              />
            </div>

            <div>
              <label className="block font-medium">Gender</label>
              <InputText
                value={editingRow.gender}
                disabled
                className="w-full bg-gray-200"
              />
            </div>

            <div>
              <label className="block font-medium">Blood Group</label>
              <InputText
                value={editingRow.bloodGroup}
                disabled
                className="w-full bg-gray-200"
              />
            </div>

            <div>
              <label className="block font-medium">Category</label>
              <InputText
                value={editingRow.category}
                disabled
                className="w-full bg-gray-200"
              />
            </div>

            <div>
              <label className="block font-medium">Mobile Number</label>
              <InputText
                value={editingRow.mobile}
                disabled
                className="w-full bg-gray-200"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { label: "Passport Size Photograph", key: "passportPhoto" },
              { label: "Signature", key: "signature" },
              { label: "10th Mark Sheets", key: "mark10" },
              { label: "12th Mark Sheets", key: "mark12" },
              {
                label: "Transfer Certificate/Migration Certificate",
                key: "transfer",
              },
              { label: "Caste Certificate", key: "caste" },
              { label: "Income Certificate", key: "income" },
            ].map(({ label, key }) => {
              const fileValue = editingRow[key as keyof UploadRow];

              return (
                <div key={key}>
                  <label className="block font-medium">{label}</label>
                  <div className="flex items-center gap-3">
                    <input
                      type="file"
                      id={`${key}-input`}
                      className="hidden"
                      onChange={(e) => {
                        changeFileHandler(
                          key as keyof UploadRow,
                          e.target.files ? e.target.files[0] : null
                        );
                      }}
                    />

                    <label
                      htmlFor={`${key}-input`}
                      className="bg-indigo-600 text-white px-4 py-2 rounded cursor-pointer hover:bg-indigo-700 transition"
                    >
                      Choose File
                    </label>

                    <span className="text-sm text-gray-700">
                      {fileValue instanceof File
                        ? fileValue.name
                        : "No file chosen"}
                    </span>
                  </div>
                </div>
              );
            })}

            <div className="flex items-center gap-2 mt-4">
              <Checkbox
                inputId="statusCheck"
                checked={editingRow.status}
                onChange={(e: CheckboxChangeEvent) =>
                  setEditingRow({
                    ...editingRow,
                    status: e.checked ?? false,
                  })
                }
              />
              <label htmlFor="statusCheck" className="ml-2 font-semibold">
                Active
              </label>
            </div>
          </div>

          <div className="flex justify-end gap-4 pt-6">
            <Button
              label="Clear"
              className="bg-red-300 text-black px-8"
              onClick={handleClearEdit}
            />
            <Button
              label="Save"
              className="bg-indigo-600 text-white px-8"
              onClick={handleSaveEdit}
            />
          </div>
        </div>
      )}

      <Dialog
        header="View Document"
        visible={!!viewDocUrl}
        style={{ width: "60vw" }}
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
