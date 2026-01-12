import React, { useRef } from "react";
import PageLayout from "../../../components/PageLayout";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { Toast } from "primereact/toast";
import Table from "@/ui/shared/Table";

const EmployeeIdCardGenerate: React.FC = () => {
  const toast = useRef<Toast>(null);

  return (
    <PageLayout title="Employee ID Card Generate">
      <Toast ref={toast} />

      <div className="bg-white p-6 rounded shadow-sm border border-gray-100 ">
        <h4 className="text-blue-600 font-bold mb-4 border-b pb-2">
          Employee Details
        </h4>
        <div className="flex justify-end gap-2 mb-4">
          <Button
            label="Export"
            icon="pi pi-file-excel"
            className="p-button-outlined p-button-secondary p-button-sm h-11"
          />
          <span className="p-input-icon-left">
            <InputText className="p-inputtext-sm" placeholder="Search..." />
          </span>
        </div>
        <Table
          data={[]}
          columns={[]}
          showPagination={true}
          rowsPerPage={10}
          className="p-datatable-sm"
        />
      </div>
    </PageLayout>
  );
};

export default EmployeeIdCardGenerate;
