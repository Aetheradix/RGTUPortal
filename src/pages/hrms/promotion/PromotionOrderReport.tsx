import React, { useState } from "react";
import PageLayout from "@/components/PageLayout";
import Dropdown from "@/ui/shared/Dropdown";
import Input, { DateInput } from "@/ui/shared/Input";
import Table from "@/ui/shared/Table";
import { Button } from "primereact/button";

interface PromotionOrderReportData {
  employeeNameCode: string;
  promotionType: string;
  orderNumber: string;
  orderDate: string;
  promotionOrderIssuedBy: string;
  promotionStatus: string;
  remark: string;
}

const PromotionOrderReport: React.FC = () => {
  const [promotionType, setPromotionType] = useState<string | null>(null);
  const [employeeId, setEmployeeId] = useState("");
  const [fromDate, setFromDate] = useState<Date | null>(null);
  const [toDate, setToDate] = useState<Date | null>(null);
  const [showList, setShowList] = useState(false);

  const reportData: PromotionOrderReportData[] = [
    {
      employeeNameCode: "Sita Dubey (EE00333)",
      promotionType: "Promotion with Transfer",
      orderNumber: "GXZ000321",
      orderDate: "21/12/2024",
      promotionOrderIssuedBy: "Head Office",
      promotionStatus: "On Hold",
      remark: "Bad Behaviour",
    },
  ];

  const columns = [
    { field: "employeeNameCode", header: "Employee Name(Code)" },
    { field: "promotionType", header: "Promotion Type" },
    { field: "orderNumber", header: "Order Number" },
    { field: "orderDate", header: "Order Date" },
    { field: "promotionOrderIssuedBy", header: "Promotion Order Issued By" },
    {
      field: "promotionStatus",
      header: "Promotion Status",
      body: (row: PromotionOrderReportData) => (
        <span className="bg-orange-100 text-orange-700 px-2 py-1 rounded text-xs font-bold">
          {row.promotionStatus}
        </span>
      ),
    },
    { field: "remark", header: "Remark" },
    {
      field: "printAction",
      header: "Print",
      body: () => (
        <div className="flex justify-center">
          <Button
            icon="pi pi-print"
            className="p-button-sm bg-blue-600 border-none h-8 w-8"
            tooltip="Print Report"
          />
        </div>
      ),
    },
  ];

  const handleSearch = () => {
    if (promotionType && employeeId) setShowList(true);
    else alert("Please fill required fields");
  };

  const handleClear = () => {
    setPromotionType(null);
    setEmployeeId("");
    setFromDate(null);
    setToDate(null);
    setShowList(false);
  };

  return (
    <PageLayout title="Promotion Order Report">
      <div className="space-y-6">
        <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
          <h2 className="text-xl font-bold mb-6 border-b pb-4 text-gray-800">
            Promotion Order Report
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-end">
            <Dropdown
              label="Select Promotion Type"
              value={promotionType}
              options={[{ label: "Regular Promotion", value: "regular" }]}
              onChange={(e) => setPromotionType(e.value)}
              required
              placeholder="Select Type"
            />

            <Input
              label="Employee Unique ID"
              placeholder="Enter Unique ID"
              value={employeeId}
              onChange={(e) => setEmployeeId(e.target.value)}
              required
            />

            <DateInput
              label="From Date"
              value={fromDate}
              onChange={(e) => setFromDate(e.target.value as Date)}
              placeholder="dd-mm-yyyy"
            />
            <DateInput
              label="To Date"
              value={toDate}
              onChange={(e) => setToDate(e.target.value as Date)}
              placeholder="dd-mm-yyyy"
            />

            <div className="flex gap-3 mt-4">
              <Button
                label="Search"
                icon="pi pi-search"
                className="bg-blue-700 px-8 h-[40px]"
                onClick={handleSearch}
              />
              <Button
                label="Clear"
                icon="pi pi-refresh"
                severity="danger"
                outlined
                className="px-8 h-[40px]"
                onClick={handleClear}
              />
            </div>
          </div>
        </div>

        {showList && (
          <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm animate-fadein">
            <h3 className="text-lg font-bold mb-4 border-b pb-2 text-gray-700 border-l-4 border-blue-600 pl-3">
              Employee Promotion Order Details
            </h3>

            <Table
              {...{
                columns: columns,
                data: reportData,
                format: "promotion_report_format",
                action: "view_report_action",
                showPagination: true,
              }}
            />
          </div>
        )}
      </div>
    </PageLayout>
  );
};

export default PromotionOrderReport;
