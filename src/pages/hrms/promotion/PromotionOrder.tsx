import React, { useState } from "react";
import PageLayout from "@/components/PageLayout";
import Dropdown from "@/ui/shared/Dropdown";
import Input, { DateInput } from "@/ui/shared/Input";
import Table from "@/ui/shared/Table";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";

const GeneratePromotionOrder: React.FC = () => {
  const [showList, setShowList] = useState<boolean>(false);
  const [showConfirmModal, setShowConfirmModal] = useState<boolean>(false);
  const [showSuccessModal, setShowSuccessModal] = useState<boolean>(false);

  const [promotionType, setPromotionType] = useState<string | null>(null);
  const [employeeId, setEmployeeId] = useState<string>("");
  const [fromDate, setFromDate] = useState<Date | null>(null);
  const [toDate, setToDate] = useState<Date | null>(null);

  const promotionData = [
    {
      srNo: 1,
      employeeNameCode: "Sita Dubey (EE00333)",
      promotionType: "Promotion with Transfer",
      fileNumber: "GXZ000321",
      oldGradeLevel: "Assistant Professor (Senior Scale)",
      newGradeLevel: "Senior Professor",
      oldBasicPay: "4th Pay Commission",
      newBasicPay: "7th Pay Commission",
      oldOfficeCode: "FD0036",
      newOfficeCode: "HR0025",
    },
  ];

  const columns = [
    { field: "srNo", header: "Sr.No." },
    { field: "employeeNameCode", header: "Employee Name(Code)", style: { whiteSpace: "nowrap" }  },
    { field: "promotionType", header: "Promotion Type" },
    { field: "fileNumber", header: "File Number", style: { whiteSpace: "nowrap" }  },
    { field: "oldGradeLevel", header: "Old Grade Level" },
    { field: "newGradeLevel", header: "New Grade Level" , style: { whiteSpace: "nowrap" } },
    { field: "oldBasicPay", header: "Old Basic Pay" },
    { field: "newBasicPay", header: "New Basic Pay" },
    { field: "oldOfficeCode", header: "Old Office Code", style: { whiteSpace: "nowrap" } },
    { field: "newOfficeCode", header: "New Office Code", style: { whiteSpace: "nowrap" }},
  ];

  const handleSearch = () => {
    if (promotionType && employeeId) {
      setShowList(true);
    } else {
      alert("Please enter all required search details");
    }
  };

  const handleSaveClick = () => {
    setShowConfirmModal(true);
  };

  const handleConfirmYes = () => {
    setShowConfirmModal(false);
    setShowSuccessModal(true);
  };

  const handleCancelModal = () => {
    setShowConfirmModal(false);
  };

  const handleFinalOk = () => {
    setShowSuccessModal(false);
    setShowList(false);
    setPromotionType(null);
    setEmployeeId("");
    setFromDate(null);
    setToDate(null);
  };

  return (
    <PageLayout title="Generate Promotion Order">
      <div className="space-y-6">
        <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
          <h2 className="text-xl font-bold text-gray-800 mb-6 border-b pb-4 text-blue-700">
            Promotion Order
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 items-end">
            <Dropdown
              label="Select Promotion Type"
              value={promotionType}
              options={[{ label: "Regular Promotion", value: "regular" }]}
              onChange={(e) => setPromotionType(e.value)}
              placeholder="Select"
              required
            />
            <Input
              label="Enter Employee Unique ID"
              value={employeeId}
              onChange={(e) => setEmployeeId(e.target.value)}
              placeholder="Enter Employee Unique ID"
              required
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
                onClick={handleFinalOk}
              />
            </div>
          </div>
        </div>

        {showList && (
          <div className="space-y-6 animate-fadein">
            <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"></div>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
              <h3 className="text-lg font-bold text-gray-700 mb-4 border-b pb-2">
                Promotion Order Details
              </h3>
              <Table
                columns={columns}
                data={promotionData}
                showPagination
                rowsPerPage={10}
                {...{ format: "order_table", action: "generate_promotion" }}
              />
              <div className="flex gap-2 mt-6">
                <Button
                  label="Save"
                  className="bg-blue-600 px-10"
                  onClick={handleSaveClick}
                />
                <Button
                  label="Clear"
                  severity="danger"
                  className="px-10"
                  onClick={() => setShowList(false)}
                />
              </div>
            </div>
          </div>
        )}
      </div>

      <Dialog
        header="Confirmation"
        visible={showConfirmModal}
        style={{ width: "450px" }}
        onHide={() => setShowConfirmModal(false)}
        draggable={false}
      >
        <div className="text-center p-4">
          <i className="pi pi-exclamation-triangle text-yellow-500 text-5xl mb-4"></i>
          <h3 className="text-xl font-bold mb-2">Are you sure?</h3>
          <p className="text-gray-600 mb-6">Do you want to save this record?</p>
          <div className="flex justify-center gap-3">
            <Button
              label="Yes"
              className="bg-blue-600 px-8"
              onClick={handleConfirmYes}
            />
            <Button
              label="Cancel"
              outlined
              severity="danger"
              className="px-8"
              onClick={handleCancelModal}
            />
          </div>
        </div>
      </Dialog>

      <Dialog
        header="Success!"
        visible={showSuccessModal}
        style={{ width: "400px" }}
        onHide={handleFinalOk}
        draggable={false}
      >
        <div className="text-center p-4">
          <i className="pi pi-check-circle text-green-500 text-5xl mb-4"></i>
          <h3 className="text-xl font-bold text-green-600 mb-2">Success!</h3>
          <p className="text-gray-600 mb-6">Record Saved Successfully!</p>
          <div className="flex justify-center">
            <Button
              label="OK"
              className="bg-green-600 px-10"
              onClick={handleFinalOk}
            />
          </div>
        </div>
      </Dialog>
    </PageLayout>
  );
};

export default GeneratePromotionOrder;
