import React, { useState } from "react";
import PageLayout from "@/components/PageLayout";
import Table from "@/ui/shared/Table";
import Dropdown from "@/ui/shared/Dropdown";
import { DateInput } from "@/ui/shared/Input";
import { Button } from "primereact/button";

interface VTPPaymentRow {
  vtpName: string;
  district: string;
  academicYear: string;
  amount: string;
  paymentMonth: string;
  status: string;
}

const VTPPayment: React.FC = () => {
  const [showList, setShowList] = useState(false);
  const [district, setDistrict] = useState<string | null>(null);
  const [academicYear, setAcademicYear] = useState<string | null>(null);
  const [fromDate, setFromDate] = useState<Date | null>(null);
  const [toDate, setToDate] = useState<Date | null>(null);

  const paymentData: VTPPaymentRow[] = [
    {
      vtpName: "Skill India Training Center",
      district: "Bhopal",
      academicYear: "2025-26",
      amount: "₹45,000",
      paymentMonth: "April 2025",
      status: "Paid",
    },
    {
      vtpName: "Vocational Skill Hub",
      district: "Indore",
      academicYear: "2025-26",
      amount: "₹38,000",
      paymentMonth: "May 2025",
      status: "Pending",
    },
    {
      vtpName: "Future Skills Center",
      district: "Gwalior",
      academicYear: "2024-25",
      amount: "₹42,500",
      paymentMonth: "March 2025",
      status: "Paid",
    },
    {
      vtpName: "National Skill Academy",
      district: "Jabalpur",
      academicYear: "2024-25",
      amount: "₹40,000",
      paymentMonth: "February 2025",
      status: "Pending",
    },
    {
      vtpName: "Bright Career Institute",
      district: "Ujjain",
      academicYear: "2023-24",
      amount: "₹36,000",
      paymentMonth: "January 2024",
      status: "Paid",
    },
  ];

  const columns = [
    { field: "vtpName", header: "VTP Name", sortable: true, style: { whiteSpace: "nowrap" } },
    { field: "district", header: "District", sortable: true, style: { whiteSpace: "nowrap" } },
    { field: "academicYear", header: "Academic Year", sortable: true, style: { whiteSpace: "nowrap" } },
    { field: "paymentMonth", header: "Payment Month", style: { whiteSpace: "nowrap" } },
    { field: "amount", header: "Amount", sortable: true, style: { whiteSpace: "nowrap" } },
    {
      field: "status",
      header: "Payment Status",
      style: { whiteSpace: "nowrap" },
      body: (row: VTPPaymentRow) => (
        <span
          className={`px-3 py-1 rounded text-xs font-bold ${
            row.status === "Paid"
              ? "bg-green-100 text-green-700 border border-green-300"
              : "bg-yellow-100 text-yellow-700 border border-yellow-300"
          }`}
        >
          {row.status}
        </span>
      ),
    },
  ];

  const handleSearch = () => {
    setShowList(true);
  };

  const handleClear = () => {
    setDistrict(null);
    setAcademicYear(null);
    setFromDate(null);
    setToDate(null);
    setShowList(false);
  };

  return (
    <PageLayout title="VTP Payment">
      <div className="space-y-6">
        <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
          <h2 className="text-xl font-bold text-gray-800 mb-6 border-b pb-4 text-blue-700">
            VTP Payment Search
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 items-end">
            <Dropdown
              label="Select District"
              value={district}
              options={[
                { label: "Bhopal", value: "Bhopal" },
                { label: "Indore", value: "Indore" },
                { label: "Gwalior", value: "Gwalior" },
                { label: "Jabalpur", value: "Jabalpur" },
                { label: "Ujjain", value: "Ujjain" },
              ]}
              onChange={(e) => setDistrict(e.value)}
              placeholder="Select"
            />

            <Dropdown
              label="Select Academic Year"
              value={academicYear}
              options={Array.from({ length: 27 }).map((_, i) => {
                const start = 2026 - i;
                return {
                  label: `${start}-${(start + 1).toString().slice(-2)}`,
                  value: `${start}-${(start + 1).toString().slice(-2)}`,
                };
              })}
              onChange={(e) => setAcademicYear(e.value)}
              placeholder="Select"
            />

            <DateInput
              label="From Date"
              value={fromDate}
              onChange={(e) => setFromDate(e.value as Date)}
              placeholder="dd/mm/yyyy"
            />

            <DateInput
              label="To Date"
              value={toDate}
              onChange={(e) => setToDate(e.value as Date)}
              placeholder="dd/mm/yyyy"
            />

            <div className="flex gap-2">
              <Button
                label="Search"
                className="bg-blue-600 px-6 h-[42px]"
                onClick={handleSearch}
              />
              <Button
                label="Clear"
                severity="danger"
                className="px-6 h-[42px]"
                onClick={handleClear}
              />
            </div>
          </div>
        </div>

        {showList && (
          <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm animate-fadein">
            <h3 className="text-lg font-bold text-gray-700 mb-4 border-b pb-2">
              VTP Payment List
            </h3>

            <Table
              columns={columns}
              data={paymentData}
              showPagination
              rowsPerPage={10}
              {...{ format: "vtp_payment" }}
            />
          </div>
        )}
      </div>
    </PageLayout>
  );
};

export default VTPPayment;
