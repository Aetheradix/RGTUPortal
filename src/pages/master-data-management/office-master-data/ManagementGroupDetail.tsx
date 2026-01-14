import React, { useRef } from "react";
import PageLayout from "../../../components/PageLayout";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { Toast } from "primereact/toast";
import Table from "@/ui/shared/Table";
import { managementGroupDetailMockData } from "./data";
import { getManagementGroupDetailColumns } from "./table";

const ManagementGroupDetailMaster: React.FC = () => {
  const toast = useRef<Toast>(null);
  const showDeniedToast = () => {
    toast.current?.show({
      severity: "error",
      summary: "Access Denied",
      detail: "Access to this action is denied",
      life: 3000,
    });
  };

  return (
    <PageLayout title="Management Group Detail Master Data">
      <Toast ref={toast} />
      <div className="space-y-4 animate-fade-in">
        <div className="bg-white p-2 rounded shadow-sm flex justify-between items-center border border-gray-200">
          <div className="flex flex-col"></div>
          <Button
            label="Add New School Management Group"
            icon="pi pi-plus"
            className="p-button-sm p-button-primary"
            onClick={showDeniedToast}
          />
        </div>
        <div className="bg-white p-4 rounded shadow-sm border border-gray-100">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-blue-700 font-bold text-md border-l-4 border-blue-700 pl-2">
              School Management Group Details
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
            data={managementGroupDetailMockData}
            // eslint-disable-next-line react-hooks/refs
            columns={getManagementGroupDetailColumns(showDeniedToast)}
            showPagination={true}
            rowsPerPage={10}
            className="p-datatable-sm"
          />
        </div>
      </div>
    </PageLayout>
  );
};

export default ManagementGroupDetailMaster;
