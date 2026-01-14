import React, { useRef } from "react";
import PageLayout from "../../../components/PageLayout";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { Toast } from "primereact/toast";
import Table from "@/ui/shared/Table";

import { missingDetailsColumns } from "./table";
import { missingDetailsMockData } from "./data";

const EmployeeMissingDetails: React.FC = () => {
  const toast = useRef<Toast>(null);

  return (
    <PageLayout title="Missing Employee Details">
      <Toast ref={toast} />

      <div className="bg-white p-6 rounded shadow-sm border border-gray-100 animate-fade-in">
        <div className="flex justify-between items-center mb-4 border-b pb-2">
          <h3 className="text-md font-bold text-blue-700 bg-white px-2 -mt-8">
            Employee Missing Details
          </h3>
          <div className="flex gap-2">
            <Button
              label="Export"
              icon="pi pi-file-excel"
              className="p-button-outlined p-button-secondary p-button-sm h-11"
            />
            <span className="p-input-icon-left">
              <InputText className="p-inputtext-sm" placeholder="Search..." />
            </span>
          </div>
        </div>
        <Table
          data={missingDetailsMockData}
          columns={missingDetailsColumns}
          showPagination={true}
          rowsPerPage={50}
          className="p-datatable-sm"
        />
      </div>
    </PageLayout>
  );
};

export default EmployeeMissingDetails;
