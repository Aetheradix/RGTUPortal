import React, { useState } from "react";
import PageLayout from "@/components/PageLayout";
import Dropdown from "@/ui/shared/Dropdown";
import Input from "@/ui/shared/Input";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";

const PromotionProcess: React.FC = () => {
  const [showDetails, setShowDetails] = useState<boolean>(false);
  const [showConfirmModal, setShowConfirmModal] = useState<boolean>(false);
  const [showSuccessModal, setShowSuccessModal] = useState<boolean>(false);

  const [promotionType, setPromotionType] = useState<string | null>(null);
  const [employeeId, setEmployeeId] = useState<string>("");

  const handleSearch = () => {
    if (promotionType && employeeId) {
      setShowDetails(true);
    } else {
      alert("Please select Promotion Type and enter Employee Unique ID");
    }
  };

  const handleSaveClick = () => {
    setShowConfirmModal(true);
  };

  const handleConfirmYes = () => {
    setShowConfirmModal(false);
    setShowSuccessModal(true);
  };

  const handleFinalOk = () => {
    setShowSuccessModal(false);
    setShowDetails(false);
    setPromotionType(null);
    setEmployeeId("");
  };

  const handleCancelModal = () => {
    setShowConfirmModal(false);
  };

  return (
    <PageLayout title="Promotion Process">
      <div className="space-y-6">
        <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
          <h2 className="text-xl font-bold text-gray-800 mb-6 border-b pb-4">
            Promotion Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-end">
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

        {showDetails && (
          <div className="space-y-6 animate-fadein">
            <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
              <h3 className="text-lg font-bold text-gray-700 mb-4 border-b pb-2">
                Details
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <Input
                  label="Employee Name"
                  value="Makan Singh Bhuriya"
                 
                />
                <Input label="Class" value="Class III" />
                <Input label="Type of Post" value="Regular"  />
                <Input
                  label="Designation Type"
                  value="Faculty"
                />
                <Input
                  label="Designation Name"
                  value="Associate Professor"
                />
                <Input
                  label="Department Name"
                  value="Department of History"
                />
                <Input
                  label="Current Office Code"
                  value="RE45333"
                />
                <Input
                  label="Pay Commission"
                  value="Seventh Pay Commission"
                />
                <Input label="Pay Scale" value="NA" />
                <Input label="Current Level" value="NA"  />
                <Input label="Basic Pay" value="0.00" />
                <Input
                  label="Posting Date in Current Organization"
                  value="08/07/2013"
                />
                <Input
                  label="Total Service Duration in Current Organization (In Years)"
                  value="11"
                />
                <Input label="Panel Name" value="History"  />
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
              <h3 className="text-lg font-bold text-gray-700 mb-4 border-b pb-2">
                Promotion Details
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <Dropdown
                  label="Select Designation"
                  placeholder="Select"
                  options={[]}
                  onChange={() => {}}
                />
                <Dropdown
                  label="Select Panel"
                  placeholder="Select"
                  options={[]}
                  onChange={() => {}}
                />
                <Dropdown
                  label="Select Pay Commission"
                  placeholder="Select"
                  options={[]}
                  onChange={() => {}}
                />
                <Input
                  label="Enter File No."
                  placeholder="Enter File No."
                  onChange={() => {}}
                />
              </div>
              <div className="flex gap-2">
                <Button
                  label="Save"
                  className="bg-blue-600 px-10"
                  onClick={handleSaveClick}
                />
                <Button
                  label="Clear"
                  severity="danger"
                  className="px-10"
                  onClick={() => setShowDetails(false)}
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
        closable={false}
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

export default PromotionProcess;
