import React, { useState } from "react";
import PageLayout from "../../../components/PageLayout";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { Dropdown } from "primereact/dropdown";
import { Calendar } from "primereact/calendar";

interface PaymentData {
  srNo: number;
  transactionId: string;
  paymentDate: string;
  amount: string;
  status: string;
}

const PaymentReport: React.FC = () => {
  const [fromDate, setFromDate] = useState<Date | null>(null);
  const [toDate, setToDate] = useState<Date | null>(null);
  const [selectedStatus, setSelectedStatus] = useState<string | null>(null);
  const [globalFilter, setGlobalFilter] = useState<string>("");
  const [showTable, setShowTable] = useState<boolean>(false);

  const statusOptions = ["Success", "Fail", "Pending"];

  const paymentList: PaymentData[] = [
    {
      srNo: 1,
      transactionId: "TRX20241121",
      paymentDate: "2024-11-21",
      amount: "₹20,000",
      status: "Success",
    },
    {
      srNo: 2,
      transactionId: "TRX20241123",
      paymentDate: "2024-11-23",
      amount: "₹30,000",
      status: "Success",
    },
    {
      srNo: 3,
      transactionId: "TRX20241121",
      paymentDate: "2024-11-21",
      amount: "₹20,000",
      status: "Success",
    },
  ];

  const handleSearch = () => {
    setShowTable(true);
  };

  const handleClear = () => {
    setFromDate(null);
    setToDate(null);
    setSelectedStatus(null);
    setShowTable(false);
    setGlobalFilter("");
  };

  const statusBodyTemplate = (rowData: PaymentData) => {
    const severity =
      rowData.status === "Success"
        ? "text-green-600"
        : rowData.status === "Fail"
        ? "text-red-600"
        : "text-orange-600";
    return <span className={`font-bold ${severity}`}>{rowData.status}</span>;
  };

  return (
    <PageLayout title="Payment Report">
      <div className="bg-white p-4 rounded shadow-sm border border-gray-200">
        <h2 className="text-xl font-bold text-gray-800 mb-4 border-b pb-2">
          Payment Report
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <div className="field">
            <label className="text-xs font-bold block mb-1 uppercase">
              Enter From Date*
            </label>
            <Calendar
              value={fromDate}
              onChange={(e) => setFromDate(e.value as Date)}
              dateFormat="dd/mm/yy"
              placeholder="Select Date"
              className="w-full p-inputtext-sm"
              showIcon
            />
          </div>
          <div className="field">
            <label className="text-xs font-bold block mb-1 uppercase">
              Enter To Date*
            </label>
            <Calendar
              value={toDate}
              onChange={(e) => setToDate(e.value as Date)}
              dateFormat="dd/mm/yy"
              placeholder="Select Date"
              className="w-full p-inputtext-sm"
              showIcon
            />
          </div>
          <div className="field">
            <label className="text-xs font-bold block mb-1 uppercase">
              Payment Status
            </label>
            <Dropdown
              value={selectedStatus}
              options={statusOptions}
              onChange={(e) => setSelectedStatus(e.value)}
              placeholder="Select"
              className="w-full p-inputtext-sm"
            />
          </div>
        </div>

        <div className="flex gap-2 mb-6 border-b pb-6">
          <Button
            label="Search"
            icon="pi pi-search"
            className="p-button-sm px-4"
            onClick={handleSearch}
          />
          <Button
            label="Clear"
            icon="pi pi-refresh"
            className="p-button-secondary p-button-outlined p-button-sm px-4"
            onClick={handleClear}
          />
        </div>

        {showTable && (
          <div className="animate-fade-in">
            <div className="flex justify-between items-center mb-3">
              <h3 className="text-sm font-bold text-gray-600 uppercase tracking-tight">
                Payment Report List
              </h3>
              <span className="p-input-icon-left">
                <i className="pi pi-search" />
                <InputText
                  value={globalFilter}
                  onChange={(e) => setGlobalFilter(e.target.value)}
                  placeholder="Search..."
                  className="p-inputtext-sm w-full md:w-15rem"
                />
              </span>
            </div>

            <DataTable
              value={paymentList}
              paginator
              rows={10}
              globalFilter={globalFilter}
              className="p-datatable-sm"
              showGridlines
              stripedRows
            >
              <Column field="srNo" header="Sr No." style={{ width: "4rem" }} />
              <Column field="transactionId" header="Transaction ID" sortable />
              <Column field="paymentDate" header="Payment Date" sortable />
              <Column field="amount" header="Amount" sortable />
              <Column
                field="status"
                header="Status"
                body={statusBodyTemplate}
                sortable
              />
              <Column
                header="Receipt"
                body={() => (
                  <Button
                    label="View"
                    icon="pi pi-file-pdf"
                    className="p-button-rounded p-button-success p-button-text"
                  />
                )}
                style={{ textAlign: "center", width: "6rem" }}
              />
            </DataTable>
          </div>
        )}
      </div>
    </PageLayout>
  );
};
export default PaymentReport;
