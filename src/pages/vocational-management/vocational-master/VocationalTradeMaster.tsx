import React, { useState } from "react";
import PageLayout from "@/components/PageLayout";
import Table from "@/ui/shared/Table";
import Input from "@/ui/shared/Input";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import { Checkbox } from "primereact/checkbox";

interface VocationalTradeRow {
  tradeEnglish: string;
  tradeHindi: string;
  isActive: boolean;
}

const VocationalTradeMaster: React.FC = () => {
  const [showAddPage, setShowAddPage] = useState(false);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const [tradeEnglish, setTradeEnglish] = useState("");
  const [tradeHindi, setTradeHindi] = useState("");
  const [isActive, setIsActive] = useState(true);

  const tradeList: VocationalTradeRow[] = [
    { tradeEnglish: "Testing Trade", tradeHindi: "टेस्ट ट्रेड", isActive: true },
    { tradeEnglish: "Information Technology", tradeHindi: "सूचना प्रौद्योगिकी", isActive: true },
    { tradeEnglish: "Manufacturing", tradeHindi: "उत्पादन", isActive: false },
  ];

  const columns = [
    { field: "tradeEnglish", header: "Vocational Trade (In English)", sortable: true },
    { field: "tradeHindi", header: "व्यावसायिक ट्रेड का नाम (हिंदी में)", sortable: true },
    {
      field: "status",
      header: "Status",
      body: (row: VocationalTradeRow) => (
        <span
          className={`px-3 py-1 rounded text-xs font-bold ${
            row.isActive === true
              ? "bg-green-100 text-green-700 border border-green-300"
              : "bg-red-100 text-red-700 border border-red-300"
          }`}
        >
          {row.isActive? "Active" : "InActive"}
        </span>
      ),
    },
    {
      field: "action",
      header: "Action",
      body: () => (
        <Button icon="pi pi-pencil" className="p-button-sm bg-orange-500 border-none" />
      ),
    },
  ];

  const handleExportExcel = () => {
    const headers = [
      "Vocational Trade (English)",
      "Vocational Trade (Hindi)",
      "Status",
    ];

    const rows = tradeList.map((item) => [
      item.tradeEnglish,
      item.tradeHindi,
      item.isActive,
    ]);

    const csvContent =
      [headers, ...rows]
        .map((row) => row.map((v) => `"${v}"`).join(","))
        .join("\n");

    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.download = "Vocational_Trade_Master.csv";
    link.click();

    URL.revokeObjectURL(url);
  };

  const handleSave = () => {
    setShowConfirmModal(true);
  };

  const handleConfirmYes = () => {
    setShowConfirmModal(false);
    setShowSuccessModal(true);
  };

  const handleClear = () => {
    setTradeEnglish("");
    setTradeHindi("");
    setIsActive(true);
  };

  return (
    <PageLayout title="Vocational Trade Master">
      {!showAddPage && (
        <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold text-gray-800">
              Vocational Trade Details
            </h2>

            <div className="flex gap-2">
              <Button
                icon="pi pi-file-excel"
                label="Export to Excel"
                className="bg-green-600 border-none"
                onClick={handleExportExcel}
              />

              <Button
                label="Add Vocational Trade"
                icon="pi pi-plus"
                className="bg-orange-500 border-none"
                onClick={() => setShowAddPage(true)}
              />
            </div>
          </div>

          <Table
            columns={columns}
            data={tradeList}
            showPagination
            rowsPerPage={10}
            {...{ format: "vocational_trade_master" }}
          />
        </div>
      )}

      {showAddPage && (
        <div className="bg-white p-6 rounded-lg border border-orange-300 shadow-sm">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold text-blue-700">
              Add Vocational Trade
            </h2>

            <Button
              label="Back To List"
              className="bg-orange-500 border-none"
              onClick={() => setShowAddPage(false)}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Input
              label="Vocational Trade Name (In English)"
              placeholder="Enter Vocational Trade Name (In English)"
              required
              value={tradeEnglish}
              onChange={(e) => setTradeEnglish(e.target.value)}
            />

            <Input
              label="व्यावसायिक ट्रेड का नाम(हिंदी में)"
              placeholder="व्यावसायिक ट्रेड का नाम दर्ज करें (हिंदी में)"
              required
              value={tradeHindi}
              onChange={(e) => setTradeHindi(e.target.value)}
            />

            <div className="flex flex-col gap-2">
                         <label className="text-sm font-medium text-gray-700">Status</label>
                         <div className="flex items-center gap-2 mt-2">
                           <Checkbox
                             onChange={(e) => setIsActive(e.checked || false)}
                             checked={isActive}
                           />
                           <span className="text-sm">Active</span>
                         </div>
                       </div>
          </div>

          <div className="flex gap-4 mt-8">
            <Button label="SAVE" className="bg-green-600 px-8" onClick={handleSave} />
            <Button label="Clear" severity="danger" className="px-8" onClick={handleClear} />
          </div>

          <p className="text-red-500 text-sm mt-4">
            Note: All Asterisk (*) Marked Fields Are Mandatory
          </p>
        </div>
      )}

      <Dialog
        header="Confirmation"
        visible={showConfirmModal}
        style={{ width: "400px" }}
        draggable={false}
        closable={false}
        onHide={() => setShowConfirmModal(false)}
      >
        <div className="text-center p-4">
          <i className="pi pi-exclamation-triangle text-yellow-500 text-5xl mb-4"></i>
          <h3 className="text-xl font-bold mb-2">Are you sure?</h3>
          <p className="text-gray-600 mb-6">Do you want to save this record?</p>
          <div className="flex justify-center gap-3">
            <Button label="Yes" className="bg-blue-600 px-6" onClick={handleConfirmYes} />
            <Button label="Cancel" outlined severity="danger" className="px-6" onClick={() => setShowConfirmModal(false)} />
          </div>
        </div>
      </Dialog>

      <Dialog
        header="Success!"
        visible={showSuccessModal}
        style={{ width: "400px" }}
        draggable={false}
        onHide={() => setShowSuccessModal(false)}
      >
        <div className="text-center p-4">
          <i className="pi pi-check-circle text-green-500 text-5xl mb-4"></i>
          <h3 className="text-xl font-bold text-green-600 mb-2">Success!</h3>
          <p className="text-gray-600 mb-6">Record Saved Successfully!</p>
          <div className="flex justify-center">
            <Button
              label="OK"
              className="bg-green-600 px-10"
              onClick={() => {
                setShowSuccessModal(false);
                setShowAddPage(false);
              }}
            />
          </div>
        </div>
      </Dialog>
    </PageLayout>
  );
};

export default VocationalTradeMaster;
