import React, { useState, useRef } from "react";
import PageLayout from "../../../components/PageLayout";
import { Button } from "primereact/button";
import { InputTextarea } from "primereact/inputtextarea";
import { Toast } from "primereact/toast";
import { Calendar } from "primereact/calendar";
import { Dialog } from "primereact/dialog";
import Table from "@/ui/shared/Table";
import Input from "@/ui/shared/Input";
import { restoreData } from "./data";

const RestorePunishment: React.FC = () => {
  const toast = useRef<Toast>(null);
  const [remarkVisible, setRemarkVisible] = useState(false);
  const [restoreDialogVisible, setRestoreDialogVisible] = useState(false);
  const [selectedFileName, setSelectedFileName] = useState("No file chosen");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedFileName(e.target.files[0].name);
    }
  };

  const handleFinalRestore = () => {
    toast.current?.show({
      severity: "success",
      summary: "Success",
      detail: "Punishment Restored Successfully",
      life: 3000,
    });
    setRestoreDialogVisible(false);
  };

  const renderActions = () => {
    return (
      <div className="flex gap-2 items-center">
        <Button
          icon="pi pi-comment"
          className="p-button-sm bg-teal-400 border-none h-8 w-8"
          onClick={() => setRemarkVisible(true)}
        />
        <Button
          icon="pi pi-file"
          className="p-button-sm bg-teal-400 border-none h-8 w-8"
        />
        <Button
          icon="pi pi-file-pdf"
          className="p-button-sm bg-teal-400 border-none h-8 w-8"
        />
        <Button
          label="Restore"
          icon="pi pi-history"
          className="p-button-sm p-button-success border-none px-3 text-xs h-8"
          onClick={() => setRestoreDialogVisible(true)}
        />
      </div>
    );
  };

  return (
    <PageLayout title="Restore Punishment Order">
      <Toast ref={toast} />

      <div className="bg-white p-6 rounded shadow-sm border border-gray-100">
        <Table
          data={restoreData}
          columns={[
            {
              field: "employeeNameAndCode",
              header: "Employee Name And Code",
              sortable: true,
            },
            { field: "orderNo", header: "Order No.", sortable: true },
            { field: "orderDate", header: "Order Date", sortable: true },
            { field: "designation", header: "Designation", sortable: true },
            {
              field: "oisNameAndCode",
              header: "OIS Name And Code",
              sortable: true,
            },
            {
              field: "punishmentType",
              header: "Punishment Type",
              sortable: true,
            },
            {
              field: "actions",
              header: "Actions",
              body: renderActions,
              style: { minWidth: "280px" },
            },
          ]}
          showPagination={true}
          rowsPerPage={10}
        />
      </div>
      <Dialog
        header="Work Description"
        visible={remarkVisible}
        style={{ width: "450px" }}
        onHide={() => setRemarkVisible(false)}
        footer={
          <div className="flex justify-end">
            <Button
              label="Close"
              onClick={() => setRemarkVisible(false)}
              className="bg-indigo-600 border-none px-6"
            />
          </div>
        }
      >
        <div className="p-4 border-2 border-indigo-200 rounded-lg text-gray-700 text-sm">
          You are suspended for stopping the promotion. Your services are
          suspended due to the reason of promotion stoppage.
        </div>
      </Dialog>

      <Dialog
        header="Restore Punishment Order"
        visible={restoreDialogVisible}
        style={{ width: "80vw" }}
        onHide={() => setRestoreDialogVisible(false)}
        footer={
          <div className="flex justify-center gap-3">
            <Button
              label="Restore"
              icon="pi pi-history"
              onClick={handleFinalRestore}
              className="p-button-success px-6"
            />
            <Button
              label="Close"
              icon="pi pi-times"
              onClick={() => setRestoreDialogVisible(false)}
              className="p-button-danger p-button-outlined px-6"
            />
          </div>
        }
      >
        <div className="space-y-8 p-2">
          <div className="border border-gray-200 rounded-md p-4">
            <h3 className="text-md font-bold text-gray-600 border-b pb-2 mb-4">
              Employee Information
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="flex flex-col gap-1">
                <label className="text-xs font-bold text-gray-500">
                  Punishment Order No.
                </label>
                <Input
                  value="SUS242012"
                  readOnly
                  className="bg-gray-200 border-gray-300 p-inputtext-sm"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-xs font-bold text-gray-500">
                  Order Date
                </label>
                <Input
                  value="29/07/2024"
                  readOnly
                  className="bg-gray-200 border-gray-300 p-inputtext-sm"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-xs font-bold text-gray-500">
                  Employee Name
                </label>
                <Input
                  value="Arjun Talwar"
                  readOnly
                  className="bg-gray-200 border-gray-300 p-inputtext-sm"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-xs font-bold text-gray-500">
                  Unique ID
                </label>
                <Input
                  value="AR4781"
                  readOnly
                  className="bg-gray-200 border-gray-300 p-inputtext-sm"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-xs font-bold text-gray-500">
                  Designation
                </label>
                <Input
                  value="Teacher SS1-Hindi"
                  readOnly
                  className="bg-gray-200 border-gray-300 p-inputtext-sm"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-xs font-bold text-gray-500">
                  Punishment Type
                </label>
                <Input
                  value="Salary Stoppage"
                  readOnly
                  className="bg-gray-200 border-gray-300 p-inputtext-sm"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-xs font-bold text-gray-500">
                  From Date
                </label>
                <Input
                  value="30/07/2024"
                  readOnly
                  className="bg-gray-200 border-gray-300 p-inputtext-sm"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-xs font-bold text-gray-500">
                  To Date
                </label>
                <Input
                  value="15/10/2024"
                  readOnly
                  className="bg-gray-200 border-gray-300 p-inputtext-sm"
                />
              </div>
              <div className="flex flex-col gap-1 md:col-span-4 mt-2">
                <label className="text-xs font-bold text-gray-500">
                  Remark
                </label>
                <InputTextarea
                  value="You are suspended for stopping the promotion."
                  readOnly
                  rows={2}
                  className="bg-gray-200 border-gray-300 p-inputtext-sm w-full"
                />
              </div>
            </div>
          </div>

          <div className="border border-gray-200 rounded-md p-4">
            <h3 className="text-md font-bold text-gray-600 border-b pb-2 mb-4">
              Restore Punishment Order
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold text-gray-600">
                  Enter Restore Order No.
                </label>
                <Input
                  placeholder="Restore Order No."
                  className="p-inputtext-sm border-gray-300"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold text-gray-600">
                  Restore Date
                </label>
                <Calendar
                  placeholder="3 February, 2026"
                  className="p-inputtext-sm"
                  showIcon
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold text-gray-600">
                  Upload Document
                </label>
                <div className="flex border rounded overflow-hidden border-gray-300 h-8.5">
                  <button
                    type="button"
                    onClick={() => fileInputRef.current?.click()}
                    className="bg-gray-100 px-3 py-1 text-xs border-r border-gray-300 hover:bg-gray-200"
                  >
                    Choose File
                  </button>
                  <span className="px-3 py-1 text-xs text-gray-400 self-center truncate">
                    {selectedFileName}
                  </span>
                </div>
                <input
                  type="file"
                  ref={fileInputRef}
                  className="hidden"
                  onChange={onFileChange}
                />
              </div>
              <div className="flex flex-col gap-2 md:col-span-3">
                <label className="text-xs font-bold text-gray-600">
                  Remarks
                </label>
                <InputTextarea
                  placeholder="Enter Remarks"
                  rows={2}
                  className="p-inputtext-sm w-full border-gray-300"
                />
              </div>
            </div>
          </div>
        </div>
      </Dialog>
    </PageLayout>
  );
};

export default RestorePunishment;
