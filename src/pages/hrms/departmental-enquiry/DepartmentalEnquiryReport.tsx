import React from "react";
import PageLayout from "@/components/PageLayout";
import Table from "@/ui/shared/Table";

const DepartmentalEnquiryReport: React.FC = () => {
  const rawData = [
    {
      enquiryOrderNo: "652325",
      enquiryOrderDate: "01/01/2024",
      openRemark: "The above action is being taken",
      closeRemark: "Nil",
      closeOrderNo: "Nil",
      closeOrderDate: "Nil",
    },
    {
      enquiryOrderNo: "652555",
      enquiryOrderDate: "05/01/2024",
      openRemark: "Nil",
      closeRemark:
        "Employees under court orders is cleared of all defects",
      closeOrderNo: "768594",
      closeOrderDate: "10/01/2024",
    },
  ];

  const data = rawData.map(item => ({
    ...item,
    remark: (
      <div className="grid grid-cols-2 gap-4">
        <div>
          <div className="text-xs text-gray-500">Open Remark</div>
          <div>{item.openRemark}</div>
        </div>
        <div>
          <div className="text-xs text-gray-500">Close Remark</div>
          <div>{item.closeRemark}</div>
        </div>
      </div>
    ),
  }));

  const columns = [
    { field: "enquiryOrderNo", header: "Enquiry Order No." },
    { field: "enquiryOrderDate", header: "Enquiry Order Date" },
    { field: "remark", header: "Remark" },
    { field: "closeOrderNo", header: "Close Order No." },
    { field: "closeOrderDate", header: "Close Order Date" },
  ];

  return (
    <PageLayout title="Departmental Enquiry Report">
      <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
        <h2 className="text-xl font-bold mb-6 border-b pb-4">
          Departmental Enquiry Report
        </h2>

        <Table
          columns={columns}
          data={data}
          showPagination
          rowsPerPage={10}
          {...{ format: "departmental_enquiry_report" }}
        />
      </div>
    </PageLayout>
  );
};

export default DepartmentalEnquiryReport;
