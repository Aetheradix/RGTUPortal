/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useRef } from "react";
import PageLayout from "../../../components/PageLayout";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { Toast } from "primereact/toast";
import { ConfirmDialog, confirmDialog } from "primereact/confirmdialog";
import Table from "@/ui/shared/Table";
import { schoolSubCategoryMappingMockData } from "./data";
import { getMappingColumns } from "./table";

const SchoolMappingMaster: React.FC = () => {
  const toast = useRef<Toast>(null);
  const showDeniedToast = () => {
    toast.current?.show({
      severity: "error",
      summary: "Access Denied",
      detail: "Access to this action is denied",
      life: 3000,
    });
  };

  const handleMapConfirmation = (data: any) => {
    confirmDialog({
      message: `Do you want to map ${data.className}?`,
      header: "Confirmation",
      icon: "pi pi-exclamation-triangle",
      acceptClassName: "p-button-primary",
      rejectClassName: "p-button-outlined",
      accept: () => {
        toast.current?.show({
          severity: "success",
          summary: "Mapped",
          detail: `${data.className} mapped successfully`,
          life: 3000,
        });
      },
    });
  };

  return (
    <PageLayout title="School Sub Category To Class Mapping">
      <Toast ref={toast} />
      <ConfirmDialog />
      <div className="space-y-4 animate-fade-in">
        <div className="bg-white p-2 rounded shadow-sm flex justify-between items-center border border-gray-200">
          <div className="flex flex-col"></div>
          <Button
            label="New School Sub Category To Class"
            icon="pi pi-plus"
            className="p-button-sm p-button-primary"
            onClick={showDeniedToast}
          />
        </div>
        <div className="bg-white p-4 rounded shadow-sm border border-gray-100">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-blue-700 font-bold text-sm border-l-4 border-blue-700 pl-2">
              School Sub Category To Class Mapping
            </h3>
            <div className="flex gap-2">
              <Button
                label="Export"
                icon="pi pi-file-excel"
                className="p-button-sm p-button-secondary"
              />
              <span className="p-input-icon-left">
                <InputText placeholder="Search..." className="p-inputtext-sm" />
              </span>
            </div>
          </div>

          <Table
            data={schoolSubCategoryMappingMockData}
            // eslint-disable-next-line react-hooks/refs
            columns={getMappingColumns(handleMapConfirmation)}
            showPagination={true}
            rowsPerPage={10}
            className="p-datatable-sm"
          />
        </div>
      </div>
    </PageLayout>
  );
};

export default SchoolMappingMaster;
