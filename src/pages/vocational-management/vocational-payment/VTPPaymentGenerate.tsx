import React, { useState } from "react";
import PageLayout from "@/components/PageLayout";
import Table from "@/ui/shared/Table";
import Dropdown from "@/ui/shared/Dropdown";
import { DateInput } from "@/ui/shared/Input";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";

interface VTPPaymentGenerateRow {
  vtpName: string;
  district: string;
  academicYear: string;
  payableAmount: string;
  paymentMonth: string;
  isActive: boolean;
}

const VTPPaymentGenerate: React.FC = () => {
  const [showList, setShowList] = useState(false);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const [district, setDistrict] = useState<string | null>(null);
  const [academicYear, setAcademicYear] = useState<string | null>(null);
  const [paymentMonth, setPaymentMonth] = useState<Date | null>(null);

  const paymentGenerateData: VTPPaymentGenerateRow[] = [
    {
      vtpName: "Skill India Training Center",
      district: "Bhopal",
      academicYear: "2025-26",
      payableAmount: "45000",
      paymentMonth: "April 2025",
      isActive: true,
    },
    {
      vtpName: "Vocational Skill Hub",
      district: "Indore",
      academicYear: "2025-26",
      payableAmount: "38000",
      paymentMonth: "May 2025",
      isActive: true,
    },
    {
      vtpName: "Future Skills Center",
      district: "Gwalior",
      academicYear: "2024-25",
      payableAmount: "42500",
      paymentMonth: "March 2025",
      isActive: false,
    },
    {
      vtpName: "National Skill Academy",
      district: "Jabalpur",
      academicYear: "2024-25",
      payableAmount: "40000",
      paymentMonth: "February 2025",
      isActive: true,
    },
    {
      vtpName: "Bright Career Institute",
      district: "Ujjain",
      academicYear: "2023-24",
      payableAmount: "36000",
      paymentMonth: "January 2024",
      isActive: true,
    },
  ];

  const columns = [
    { field: "vtpName", header: "VTP Name", sortable: true, style: { whiteSpace: "nowrap" } },
    { field: "district", header: "District", sortable: true, style: { whiteSpace: "nowrap" } },
    { field: "academicYear", header: "Academic Year", sortable: true, style: { whiteSpace: "nowrap" } },
    { field: "paymentMonth", header: "Payment Month", style: { whiteSpace: "nowrap" } },
    {
      field: "payableAmount",
      header: "Payable Amount (₹)",
      sortable: true,
      style: { whiteSpace: "nowrap" },
    },
    {
      field: "isActive",
      header: "Status",
      style: { whiteSpace: "nowrap" },
      body: (row: VTPPaymentGenerateRow) => (
        <span
          className={`px-3 py-1 rounded text-xs font-bold ${
            row.isActive
              ? "bg-green-100 text-green-700 border border-green-300"
              : "bg-red-100 text-red-700 border border-red-300"
          }`}
        >
          {row.isActive ? "Active" : "InActive"}
        </span>
      ),
    },
    {
      field: "action",
      header: "Action",
      style: { whiteSpace: "nowrap" },
      body: () => (
        <Button
          label="Generate Payment"
          className="bg-blue-600 text-xs px-3 py-1"
          onClick={() => setShowConfirmModal(true)}
        />
      ),
    },
  ];

  const handleSearch = () => {
    setShowList(true);
  };

  const handleClear = () => {
    setDistrict(null);
    setAcademicYear(null);
    setPaymentMonth(null);
    setShowList(false);
  };

  const handleConfirmYes = () => {
    setShowConfirmModal(false);
    setShowSuccessModal(true);
  };

  return (
    <PageLayout title="VTP Payment Generate">
      <div className="space-y-6">
        <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
          <h2 className="text-xl font-bold text-gray-800 mb-6 border-b pb-4 text-blue-700">
            Generate VTP Payment
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
              label="Payment Month"
              value={paymentMonth}
              placeholder="mm/yyyy"
              view="month"
              dateFormat="mm/yy"
              onChange={(e) => setPaymentMonth(e.value as Date)}
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
              VTP Payment Generate List
            </h3>

            <Table
              columns={columns}
              data={paymentGenerateData}
              showPagination
              rowsPerPage={10}
              {...{ format: "vtp_payment_generate" }}
            />
          </div>
        )}
      </div>

      <Dialog
        header="Confirmation"
        visible={showConfirmModal}
        style={{ width: "400px" }}
        onHide={() => setShowConfirmModal(false)}
        draggable={false}
        closable={false}
      >
        <div className="text-center p-4">
          <i className="pi pi-exclamation-triangle text-yellow-500 text-5xl mb-4"></i>
          <h3 className="text-xl font-bold mb-2">Are you sure?</h3>
          <p className="text-gray-600 mb-6">
            Do you want to generate this payment?
          </p>
          <div className="flex justify-center gap-3">
            <Button label="Yes" className="bg-blue-600 px-6" onClick={handleConfirmYes} />
            <Button
              label="Cancel"
              outlined
              severity="danger"
              className="px-6"
              onClick={() => setShowConfirmModal(false)}
            />
          </div>
        </div>
      </Dialog>

      <Dialog
        header="Success!"
        visible={showSuccessModal}
        style={{ width: "400px" }}
        onHide={() => setShowSuccessModal(false)}
        draggable={false}
      >
        <div className="text-center p-4">
          <i className="pi pi-check-circle text-green-500 text-5xl mb-4"></i>
          <h3 className="text-xl font-bold text-green-600 mb-2">Success!</h3>
          <p className="text-gray-600 mb-6">Payment Generated Successfully!</p>
          <div className="flex justify-center">
            <Button
              label="OK"
              className="bg-green-600 px-10"
              onClick={() => setShowSuccessModal(false)}
            />
          </div>
        </div>
      </Dialog>
    </PageLayout>
  );
};

export default VTPPaymentGenerate;
