import React, { useRef } from "react";
import PageLayout from "../../../components/PageLayout";
import { InputText } from "primereact/inputtext";
import { Toast } from "primereact/toast";
import Table from "@/ui/shared/Table";
import { officialUpdateData } from "./data";
import { OfficialUpdateColumns } from "./table";

const OfficialDetailsUpdate: React.FC = () => {
  const toast = useRef<Toast>(null);

  return (
    <PageLayout title="Official Details Update">
      <Toast ref={toast} />

      <div className="bg-white p-6 rounded shadow-sm border border-gray-100 animate-fade-in">
        <div className="flex justify-between items-center mb-4 border-b pb-2">
          <h3 className="text-md font-bold text-blue-700 bg-white px-2 -mt-8">
            Employee Details
          </h3>
          <div className="flex gap-2">
            <span className="p-input-icon-left">
              <InputText className="p-inputtext-sm" placeholder="Search..." />
            </span>
          </div>
        </div>

        <Table
          data={officialUpdateData}
          columns={OfficialUpdateColumns}
          showPagination={true}
          rowsPerPage={10}
          className="p-datatable-sm"
        />
      </div>
    </PageLayout>
  );
};

export default OfficialDetailsUpdate;
