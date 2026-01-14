import React, { useState, useRef } from "react";
import PageLayout from "@/components/PageLayout";
import Dropdown from "@/ui/shared/Dropdown";
import Table from "@/ui/shared/Table";
import { Button } from "primereact/button";
import { ConfirmDialog, confirmDialog } from "primereact/confirmdialog";
import { Toast } from "primereact/toast";
import { Dialog } from "primereact/dialog";

interface CancelPromotionData {
  srNo: number;
  employeeNameCode: string;
  promotionType: string;
  orderNumber: string;
  orderDate: string;
  oldGradeLevel: string;
  newGradeLevel: string;
  oldBasicPay: string;
  newBasicPay: string;
  effectiveDate: string;
  isSelected: boolean;
}

const CancelPromotionOrder: React.FC = () => {
  const toast = useRef<Toast>(null);

  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [showList, setShowList] = useState(false);
  const [showHoldButton, setShowHoldButton] = useState(false);
  const [showRemarkPopup, setShowRemarkPopup] = useState(false);
  const [remark, setRemark] = useState("");

  const [data, setData] = useState<CancelPromotionData[]>([
    {
      srNo: 1,
      employeeNameCode: "Sita Dubey (EE00333)",
      promotionType: "Promotion with Transfer",
      orderNumber: "000321",
      orderDate: "21/12/2024",
      oldGradeLevel: "2nd Pay Commission",
      newGradeLevel: "4th Pay Commission",
      oldBasicPay: "137600.00",
      newBasicPay: "285500.00",
      effectiveDate: "22/11/2024",
      isSelected: false,
    },
  ]);

  const handleSearch = () => {
    if (selectedOption) setShowList(true);
    else alert("Please select an option");
  };

  const handleClear = () => {
    setSelectedOption(null);
    setShowList(false);
    setShowHoldButton(false);
    setRemark("");
  };

  const toggleSelection = (row: CancelPromotionData) => {
    const updated = data.map((item) =>
      item.srNo === row.srNo ? { ...item, isSelected: !item.isSelected } : item
    );
    setData(updated);
    setShowHoldButton(updated.some((i) => i.isSelected));
  };

  const confirmSave = () => {
    confirmDialog({
      message: "Do you want to save this record?",
      header: "Are you sure?",
      icon: "pi pi-exclamation-triangle",
      acceptLabel: "Yes",
      rejectLabel: "Cancel",
      acceptClassName: "bg-blue-600 border-none",
      rejectClassName: "p-button-danger p-button-outlined",
      accept: () => {
        setShowRemarkPopup(false);
        setShowList(false);
        setSelectedOption(null);
        toast.current?.show({
          severity: "success",
          summary: "Success!",
          detail: "Record Saved Successfully!",
          life: 3000,
        });
      },
    });
  };

  const columns = [
    { field: "srNo", header: "Sr.No.", style: { width: "60px" } },
    { field: "employeeNameCode", header: "Employee Name(Code)" },
    { field: "promotionType", header: "Promotion Type" },
    { field: "orderNumber", header: "Order Number" },
    { field: "orderDate", header: "Order Date" },
    { field: "oldGradeLevel", header: "Old Grade Level" },
    { field: "newGradeLevel", header: "New Grade Level" },
    { field: "oldBasicPay", header: "Old Basic Pay" },
    { field: "newBasicPay", header: "New Basic Pay" },
    { field: "effectiveDate", header: "Effective Date" },
    {
      field: "status",
      header: "Status",
      body: (row: CancelPromotionData) => (
        <div className="flex justify-center">
          <input
            type="checkbox"
            checked={row.isSelected}
            onChange={() => toggleSelection(row)}
            className="w-4 h-4 cursor-pointer"
          />
        </div>
      ),
    },
  ];

  return (
    <PageLayout title="Cancel Promotion Order">
      <Toast ref={toast} />
      <ConfirmDialog />

      <div className="space-y-6">
        <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
          <h2 className="text-xl font-bold mb-6 border-b pb-4 text-gray-800">
            Hold Promotion Order
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-end">
            <Dropdown
              label="Select an Option"
              value={selectedOption}
              options={[{ label: "Promotion Order", value: "1" }]}
              onChange={(e) => setSelectedOption(e.value)}
              placeholder="Select"
              required
            />

            <div className="flex gap-3">
              <Button
                label="Search"
                icon="pi pi-search"
                className="bg-blue-700 px-6"
                onClick={handleSearch}
              />
              <Button
                label="Clear"
                icon="pi pi-refresh"
                severity="danger"
                outlined
                className="px-6"
                onClick={handleClear}
              />
            </div>
          </div>
        </div>

        {showList && (
          <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm animate-fadein">
            <h3 className="text-lg font-bold mb-4 text-gray-700 border-l-4 border-blue-600 pl-3">
              Employee Promotion Order Details
            </h3>

            <Table
              {...{
                columns: columns,
                data: data,
                format: "cancel_promotion_format",
                action: "hold_promotion_action",
                showPagination: true,
              }}
            />

            {showHoldButton && (
              <div className="flex justify-center mt-8 border-t pt-6">
                <Button
                  label="Hold Promotion Order"
                  icon="pi pi-lock"
                  className="bg-indigo-700 px-12 py-3 shadow-lg"
                  onClick={() => setShowRemarkPopup(true)}
                />
              </div>
            )}
          </div>
        )}

        <Dialog
          header="Hold Remark"
          visible={showRemarkPopup}
          style={{ width: "500px" }}
          onHide={() => setShowRemarkPopup(false)}
          draggable={false}
          modal
          footer={
            <div className="flex justify-end gap-3 p-2">
              <Button
                label="Confirm Hold"
                icon="pi pi-check"
                className="bg-green-700 border-none px-6"
                onClick={confirmSave}
              />
              <Button
                label="Close"
                icon="pi pi-times"
                severity="danger"
                outlined
                onClick={() => setShowRemarkPopup(false)}
              />
            </div>
          }
        >
          <div className="pt-4">
            <label className="block text-sm font-bold mb-2 text-gray-700">
              Hold Remark / होल्ड टिप्पणी{" "}
              <span className="text-red-500">*</span>
            </label>
            <textarea
              className="w-full border-2 border-gray-200 rounded-lg p-3 h-32 focus:border-blue-500 outline-none transition-all"
              value={remark}
              onChange={(e) => setRemark(e.target.value)}
              placeholder="Enter the reason for holding..."
            />
          </div>
        </Dialog>
      </div>
    </PageLayout>
  );
};

export default CancelPromotionOrder;
