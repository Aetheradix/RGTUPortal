import React, { useState } from "react";
import PageLayout from "../../../components/PageLayout";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { Dropdown } from "primereact/dropdown";
import { Dialog } from "primereact/dialog";
import { Checkbox } from "primereact/checkbox";

interface TieCriteria {
  id: string;
  srNo: number;
  c1: string;
  c2: string;
  c3: string;
  c4: string;
  remarks: string;
  status: string;
}

const TieBreakingCriteria: React.FC = () => {
  const [showForm, setShowForm] = useState<boolean>(false);
  const [globalFilter, setGlobalFilter] = useState<string>("");
  const [displayEditModal, setDisplayEditModal] = useState<boolean>(false);
  const [selectedCriteria, setSelectedCriteria] = useState<TieCriteria | null>(
    null
  );

  const criteriaOptions = [
    "Rank",
    "Score",
    "Date of Birth",
    "Subject",
    "Alphabetical Order (Name)",
  ];
  const subjectOptions = [
    "Mathematics",
    "Physics",
    "Chemistry",
    "Biology",
    "English",
  ];

  const [data] = useState<TieCriteria[]>([
    {
      id: "1",
      srNo: 1,
      c1: "Rank",
      c2: "Score",
      c3: "Date of Birth",
      c4: "Mathematics, Physics",
      remarks: "Based on board instructions",
      status: "Active",
    },
    {
      id: "2",
      srNo: 2,
      c1: "Rank",
      c2: "Score",
      c3: "Date of Birth",
      c4: "Mathematics, Physics",
      remarks: "Criteria set as per guidelines",
      status: "Active",
    },
    {
      id: "3",
      srNo: 3,
      c1: "Rank",
      c2: "Score",
      c3: "Date of Birth",
      c4: "Mathematics, Physics, Chemistry",
      remarks: "Random selection criteria",
      status: "Active",
    },
  ]);
  const actionBodyTemplate = (rowData: TieCriteria) => {
    return (
      <div className="flex gap-2">
        <Button
          icon="pi pi-pencil"
          label="Edit"
          className="p-button-success p-button-sm"
          onClick={() => {
            setSelectedCriteria(rowData);
            setDisplayEditModal(true);
          }}
        />
        <Button
          icon="pi pi-trash"
          label="Delete"
          className="p-button-danger "
        />
      </div>
    );
  };

  return (
    <PageLayout title="Set Tie Breaking Criteria">
      <div className="bg-white p-4 rounded shadow-sm border border-gray-200">
        <div className="flex justify-between items-center mb-4">
          <div>
            <h2 className="text-xl font-bold text-gray-800">
              Set Tie Breaking Criteria
            </h2>
          </div>
          <Button
            label={showForm ? "Hide Form" : "Add New Criteria"}
            icon={showForm ? "pi pi-chevron-up" : "pi pi-plus"}
            className="p-button-sm p-button-info"
            onClick={() => setShowForm(!showForm)}
          />
        </div>

        {showForm && (
          <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 mb-6">
            <h3 className="text-sm font-bold mb-4 uppercase text-gray-600">
              Set Tie Breaking Criteria
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="field">
                <label className="text-xs font-bold block mb-1">
                  Criteria 1
                </label>
                <Dropdown
                  options={criteriaOptions}
                  placeholder="Select"
                  className="w-full p-inputtext-sm"
                />
              </div>
              <div className="field">
                <label className="text-xs font-bold block mb-1">
                  Criteria 2
                </label>
                <Dropdown
                  options={criteriaOptions}
                  placeholder="Select"
                  className="w-full p-inputtext-sm"
                />
              </div>
              <div className="field">
                <label className="text-xs font-bold block mb-1">
                  Criteria 3
                </label>
                <Dropdown
                  options={criteriaOptions}
                  placeholder="Select"
                  className="w-full p-inputtext-sm"
                />
              </div>
              <div className="field">
                <label className="text-xs font-bold block mb-1">
                  Criteria 4
                </label>
                <Dropdown
                  options={subjectOptions}
                  placeholder="Select"
                  className="w-full p-inputtext-sm"
                />
              </div>
              <div className="md:col-span-2 field">
                <label className="text-xs font-bold block mb-1">
                  Enter Remarks*
                </label>
                <InputText
                  placeholder="Enter Remarks"
                  className="w-full p-inputtext-sm"
                />
              </div>
              <div className="field">
                <label className="text-xs font-bold block mb-2">Status</label>
                <div className="flex items-center gap-2 mt-2">
                  <Checkbox checked={true} />
                  <span className="text-sm">Active</span>
                </div>
              </div>
            </div>
            <div className="mt-4 flex gap-2">
              <Button
                label="Save"
                icon="pi pi-check"
                className="p-button-sm px-4"
              />
              <Button
                label="Clear"
                icon="pi pi-refresh"
                className="p-button-secondary p-button-outlined p-button-sm px-4"
              />
            </div>
          </div>
        )}

        <div className="mt-4">
          <div className="flex justify-between items-center mb-3">
            <h3 className="text-sm font-bold text-gray-600 uppercase">
              Tie Breaking Criteria List
            </h3>
            <span className="p-input-icon-left">
              <i className="pi pi-search" />
              <InputText
                value={globalFilter}
                onChange={(e) => setGlobalFilter(e.target.value)}
                placeholder="Search..."
                className="p-inputtext-sm"
              />
            </span>
          </div>

          <DataTable
            value={data}
            paginator
            rows={10}
            globalFilter={globalFilter}
            className="p-datatable-sm"
            showGridlines
            stripedRows
            dataKey="id"
          >
            <Column field="srNo" header="Sr.No." style={{ width: "4rem" }} />
            <Column field="c1" header="Criteria 1" />
            <Column field="c2" header="Criteria 2" />
            <Column field="c3" header="Criteria 3" />
            <Column field="c4" header="Criteria 4" />
            <Column field="remarks" header="Remarks" />
            <Column
              field="status"
              header="Status"
              body={(rowData) => (
                <span className="text-green-600 font-bold">
                  {rowData.status}
                </span>
              )}
            />
            <Column header="Action" body={actionBodyTemplate} />
          </DataTable>
        </div>

        <Dialog
          header="Edit Set Tie Breaking Criteria"
          visible={displayEditModal}
          style={{ width: "50vw" }}
          onHide={() => setDisplayEditModal(false)}
          footer={
            <div className="flex justify-end gap-2">
              <Button
                label="Update"
                icon="pi pi-save"
                className="p-button-sm"
                onClick={() => setDisplayEditModal(false)}
              />
              <Button
                label="Clear"
                icon="pi pi-refresh"
                className="p-button-secondary p-button-outlined p-button-sm"
              />
            </div>
          }
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3">
            <div className="field">
              <label className="text-xs font-bold block mb-1">Criteria 1</label>
              <Dropdown
                value={selectedCriteria?.c1}
                options={criteriaOptions}
                className="w-full p-inputtext-sm"
              />
            </div>
            <div className="field">
              <label className="text-xs font-bold block mb-1">Criteria 2</label>
              <Dropdown
                value={selectedCriteria?.c2}
                options={criteriaOptions}
                className="w-full p-inputtext-sm"
              />
            </div>
            <div className="field">
              <label className="text-xs font-bold block mb-1">Criteria 3</label>
              <Dropdown
                value={selectedCriteria?.c3}
                options={criteriaOptions}
                className="w-full p-inputtext-sm"
              />
            </div>
            <div className="field">
              <label className="text-xs font-bold block mb-1">Criteria 4</label>
              <Dropdown
                value={selectedCriteria?.c4}
                options={subjectOptions}
                className="w-full p-inputtext-sm"
              />
            </div>
            <div className="md:col-span-2 field">
              <label className="text-xs font-bold block mb-1">
                Enter Remarks*
              </label>
              <InputText
                value={selectedCriteria?.remarks || ""}
                className="w-full p-inputtext-sm"
              />
            </div>
          </div>
        </Dialog>
      </div>
    </PageLayout>
  );
};

export default TieBreakingCriteria;
