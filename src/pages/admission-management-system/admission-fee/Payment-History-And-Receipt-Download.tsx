import React, { useState } from "react";
import PageLayout from "../../../components/PageLayout";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";

interface PaymentHistory {
  srNo: number;
  transactionId: string;
  paymentDate: string;
  amount: string;
  status: string;
}

const PaymentHistoryReceipt: React.FC = () => {
  // States
  const [regNo, setRegNo] = useState<string>("");
  const [showTable, setShowTable] = useState<boolean>(false);
  const [globalFilter, setGlobalFilter] = useState<string>("");

  // Mock Data
  const paymentData: PaymentHistory[] = [
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
    if (regNo.trim() !== "") {
      setShowTable(true);
    }
  };

  const handleClear = () => {
    setRegNo("");
    setShowTable(false);
    setGlobalFilter("");
  };

  // Download Button Template
  const downloadBodyTemplate = () => {
    return (
      <Button
        icon="pi pi-download"
        label="Download"
        className="p-button-text p-button-sm p-0 text-blue-600 font-bold"
      />
    );
  };

  // Status Template
  const statusBodyTemplate = (rowData: PaymentHistory) => {
    return (
      <span
        className={
          rowData.status === "Success"
            ? "text-green-600 font-bold"
            : "text-red-500 font-bold"
        }
      >
        {rowData.status}
      </span>
    );
  };

  return (
    <PageLayout title="Payment History Receipt Download">
      <div className="bg-white p-4 rounded shadow-sm border border-gray-200">
        {/* --- Breadcrumb Style Title --- */}
        <div className="mb-4">
          <h2 className="text-xl font-bold text-gray-800">
            Payment History Receipt Download
          </h2>
        </div>

        <hr className="mb-4 border-gray-100" />

        {/* --- Search Section --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <div className="field">
            <label className="text-xs font-bold block mb-1">
              Enter Registration No.*
            </label>
            <InputText
              value={regNo}
              onChange={(e) => setRegNo(e.target.value)}
              placeholder="Enter Registration No."
              className="w-full p-inputtext-sm"
            />
          </div>
        </div>

        <div className="flex gap-2 mb-6">
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

        {/* --- List Section --- */}
        {showTable && (
          <div className="animate-fade-in mt-6">
            <div className="flex justify-between items-center mb-3">
              <h3 className="text-sm font-bold text-gray-600 uppercase">
                Payment History Receipt Download List
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
              value={paymentData}
              paginator
              rows={10}
              rowsPerPageOptions={[10, 25, 50, 100]}
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
                header="Receipt Download"
                body={downloadBodyTemplate}
                style={{ textAlign: "center", width: "10rem" }}
              />
            </DataTable>
          </div>
        )}
      </div>
    </PageLayout>
  );
};

export default PaymentHistoryReceipt;
