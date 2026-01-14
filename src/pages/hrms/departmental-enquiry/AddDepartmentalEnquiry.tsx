import React, { useState } from "react";
import PageLayout from "@/components/PageLayout";
import Input, { DateInput } from "@/ui/shared/Input";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";

const AddDepartmentEnquiry: React.FC = () => {
  const [showDetails, setShowDetails] = useState<boolean>(false);
  const [showConfirmModal, setShowConfirmModal] = useState<boolean>(false);
  const [showSuccessModal, setShowSuccessModal] = useState<boolean>(false);

  const handleSearch = () => {
    setShowDetails(true);
  };

  const handleClear = () => {
    setShowDetails(false);
  };

  const handleSave = () => {
    setShowConfirmModal(true);
  };

  const handleConfirmYes = () => {
    setShowConfirmModal(false);
    setShowSuccessModal(true);
  };

  const handleFinalOk = () => {
    setShowSuccessModal(false);
    setShowDetails(false);
  };

  return (
    <PageLayout title="Add Department Enquiry">
      <div className="space-y-6">
        <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
          <h2 className="text-xl font-bold text-gray-800 mb-6 border-b pb-4">
            Add Department Enquiry
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-end">
            <Input
              label="Employee Unique Id"
              placeholder="Enter Employee Unique ID"
              required
            />

            <div className="flex gap-2">
              <Button
                label="Search"
                className="bg-green-500 px-6 h-[42px]"
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

        {showDetails && (
          <div className="space-y-6 animate-fadein">
            <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
              <h3 className="text-lg font-bold text-gray-700 mb-4 border-b pb-2">
                Employee Information
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <Input label="Employee Name" placeholder="Enter Employee Name" required />
                <Input label="Unique ID" placeholder="Enter Unique ID" required />
                <Input label="Designation" placeholder="Enter Designation" required />
                <Input label="District" placeholder="Enter District" required />
                <Input label="Block" placeholder="Enter Block" />
                <Input label="School" placeholder="Enter School" />
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
              <h3 className="text-lg font-bold text-gray-700 mb-4 border-b pb-2">
                Details Of Updated Status Of Departmental Investigation Related To
                Breach Of Confidentiality Of Board Examination
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <Input
                  label="Name of departmental investigating officer"
                  placeholder="Enter Name"
                  required
                />
                <Input
                  label="Name of Presenting Officer"
                  placeholder="Enter Name"
                  required
                />
                <DateInput
                  label="Notice to delinquent officer to appear before investigating officer"
                  placeholder="dd/mm/yyyy"
                  required
                />
                <DateInput label="Suspension Date" placeholder="dd/mm/yyyy" required />
                <DateInput label="Imputed Date" placeholder="dd/mm/yyyy" required />
                <DateInput
                  label="Brief Date of Departmental Enquiry"
                  placeholder="dd/mm/yyyy"
                  required
                />
                <DateInput
                  label="First hearing of the criminal before the investigating officer and reading of the charge sheet"
                  placeholder="dd/mm/yyyy"
                  required
                />
                <DateInput
                  label="Presentation and cross-examination of prosecution evidence"
                  placeholder="dd/mm/yyyy"
                  required
                />
                <DateInput
                  label="Presentation and cross-examination of defense supporting evidence"
                  placeholder="dd/mm/yyyy"
                  required
                />
                <DateInput
                  label="Presenting the Presenting Officer's Brief and Making it Available the Delinquent Employee"
                  placeholder="dd/mm/yyyy"
                  required
                />
                <DateInput
                  label="Delinquent employee's counter argument on brief"
                  placeholder="dd/mm/yyyy"
                  required
                />
                <DateInput
                  label="Dispatch of final investigation report to disciplinary officer"
                  placeholder="dd/mm/yyyy"
                  required
                />
                <Input label="Remark" placeholder="Enter Remark" required />
              </div>

              <div className="flex gap-3 mt-6">
                <Button
                  label="Save"
                  className="bg-green-600 px-10"
                  onClick={handleSave}
                />
                <Button
                  label="Clear"
                  severity="danger"
                  className="px-10"
                  onClick={handleClear}
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
          <p className="text-gray-600 mb-6">
            Do you want to save this record?
          </p>
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
              onClick={() => setShowConfirmModal(false)}
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

export default AddDepartmentEnquiry;
