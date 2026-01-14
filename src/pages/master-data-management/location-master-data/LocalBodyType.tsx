/* eslint-disable react-hooks/refs */
import React, { useRef } from "react";
import PageLayout from "../../../components/PageLayout";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { Toast } from "primereact/toast";
import Table from "@/ui/shared/Table";

import { localBodyTypeMockData } from "./data";
import { getLocalBodyTypeColumns } from "./table";

const LocalBodyTypeMaster: React.FC = () => {
  const toast = useRef<Toast>(null);

  const showDeniedToast = () => {
    toast.current?.show({
      severity: "error",
      summary: "Access Denied",
      detail: "Access to this page denied",
      life: 3000,
    });
  };

  return (
    <PageLayout title="Local Body Type Master">
      <Toast ref={toast} />

      <div className="space-y-4 animate-fade-in">
        <div className="bg-white p-2 rounded shadow-sm flex justify-end items-center border border-gray-200">
          <Button
            label="Add New Local Body Type"
            icon="pi pi-plus"
            className="p-button-sm p-button-primary"
            onClick={showDeniedToast}
          />
        </div>
        <div className="bg-white p-4 rounded shadow-sm border border-gray-100">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-blue-700 font-bold text-sm border-l-4 border-blue-700 pl-2">
              Local Body Type Details
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
            data={localBodyTypeMockData}
            columns={getLocalBodyTypeColumns(showDeniedToast)}
            showPagination={true}
            rowsPerPage={50}
            className="p-datatable-sm"
          />
        </div>
      </div>
    </PageLayout>
  );
};

export default LocalBodyTypeMaster;
