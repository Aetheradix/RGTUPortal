/* eslint-disable react-hooks/refs */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useRef } from "react";
import PageLayout from "../../../components/PageLayout";
import { Toast } from "primereact/toast";
import { InputText } from "primereact/inputtext";
import Table from "@/ui/shared/Table";
import { complaintReportData } from "./data";
import { complaintReportColumns } from "./table";

const PrintComplaintReport = () => {
  const toast = useRef<Toast>(null);

  const handlePrint = (data: any) => {
    toast.current?.show({
      severity: "info",
      summary: "Processing Print",
      detail: `Preparing official report for Complaint No: ${data.complaintNumber}`,
      life: 3000,
    });
  };

  return (
    <PageLayout title="Complaint Tracking & Print Report">
      <Toast ref={toast} />

      <div className="bg-white p-6 rounded-xl shadow-sm border border-[#f3e8ff] animate-fade-in">
        <div className="flex justify-between items-center mb-6">
          <div className="flex flex-col gap-1">
            <h3 className="text-[#4a5568] font-bold text-lg">
              Employee Complaint Records
            </h3>
            <p className="text-[#a0aec0] text-xs">
              Search and print official copies of registered complaints.
            </p>
          </div>

          <div className="flex items-center gap-2 border rounded-lg px-3 py-1.5 border-[#e9d5ff] bg-gray-50">
            <span className="text-xs text-gray-500 font-semibold">Search:</span>
            <InputText
              className="p-inputtext-sm border-none bg-transparent shadow-none w-52 text-xs focus:ring-0"
              placeholder="Enter Complaint No..."
            />
          </div>
        </div>

        <Table
          data={complaintReportData}
          columns={complaintReportColumns(handlePrint)}
          showPagination={true}
          rowsPerPage={10}
          className="p-datatable-sm custom-minimal-table"
          tableStyle={{ minWidth: "65rem" }}
        />

        <div className="mt-6 flex items-center gap-3 bg-[#fdfaff] p-4 rounded-xl border border-[#f3e8ff]">
          <div className="bg-[#f3e8ff] text-[#9333ea] h-6 w-6 rounded-full flex items-center justify-center shrink-0 text-xs font-bold border border-[#e9d5ff]">
            i
          </div>
          <span className="text-[12px] text-[#4a5568] font-medium leading-relaxed">
            As per guidelines, manual signatures must be uploaded via the
            <b className="text-[#9333ea]"> 'Upload Signature' </b> option for
            these reports to be valid for digital signing.
          </span>
        </div>
      </div>
    </PageLayout>
  );
};

export default PrintComplaintReport;
