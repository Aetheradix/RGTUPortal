import React, { useState } from 'react';
import PageLayout from "@/components/PageLayout";
import Dropdown from '@/ui/shared/Dropdown';
import Input, { DateInput } from '@/ui/shared/Input';
import { Button } from "primereact/button";
import { Dialog } from 'primereact/dialog';
import { Checkbox } from "primereact/checkbox";

const ApplyTour: React.FC = () => {
  const [tourType, setTourType] = useState<string | null>(null);
  const [tourName, setTourName] = useState<string>('');
  const [fromDate, setFromDate] = useState<Date | null>(null);
  const [toDate, setToDate] = useState<Date | null>(null);
  const [isActive, setIsActive] = useState<boolean>(true);

  const [showConfirmModal, setShowConfirmModal] = useState<boolean>(false);
  const [showSuccessModal, setShowSuccessModal] = useState<boolean>(false);

  const tourTypeOptions = [
    { label: 'Official Visit', value: 'official' },
    { label: 'Training and Development', value: 'training' },
    { label: 'Inspection Tour', value: 'inspection' },
  ];

  const handleSaveClick = () => {
    if (tourType && tourName && fromDate && toDate) {
      setShowConfirmModal(true);
    } else {
      alert("Please fill all required fields");
    }
  };

  const handleConfirmYes = () => {
    setShowConfirmModal(false);
    setShowSuccessModal(true);
  };

  const handleCancelAction = () => {
    setShowConfirmModal(false);
    setShowSuccessModal(false);
  };

  const handleClear = () => {
    setTourType(null);
    setTourName('');
    setFromDate(null);
    setToDate(null);
    setIsActive(true);
  };

  return (
    <PageLayout title="Apply Tour">
      <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
        <h2 className="text-xl font-bold text-gray-800 mb-6 border-b pb-4">
          Apply Tour
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <Dropdown
            label="Select Tour Type"
            value={tourType}
            options={tourTypeOptions}
            onChange={(e) => setTourType(e.value)}
            placeholder="Select"
            required
          />

          <Input
            label="Enter Tour Name"
            value={tourName}
            onChange={(e) => setTourName(e.target.value)}
            placeholder="Enter Tour Tour"
            required
          />

          <DateInput
            label="Select From Date"
            value={fromDate}
            onChange={(e) => setFromDate(e.value as Date)}
            placeholder="dd-mm-yyyy"
            required
          />

          <DateInput
            label="Select To Date"
            value={toDate}
            onChange={(e) => setToDate(e.value as Date)}
            placeholder="dd-mm-yyyy"
            required
          />

          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-gray-700">Status</label>
            <div className="flex items-center gap-2 mt-2">
              <Checkbox 
                onChange={e => setIsActive(e.checked || false)} 
                checked={isActive} 
              />
              <span className="text-sm">Active</span>
            </div>
          </div>
        </div>

        <div className="flex gap-2">
          <Button
            label="Save"
            className="bg-blue-600 px-8 py-2"
            onClick={handleSaveClick}
          />
          <Button
            label="Clear"
            severity="danger"
            className="px-8 py-2"
            onClick={handleClear}
          />
        </div>
      </div>

      <Dialog
        header="Confirmation"
        visible={showConfirmModal}
        style={{ width: '400px' }}
        onHide={() => setShowConfirmModal(false)}
        draggable={false}
        closable={false}
      >
        <div className="text-center p-4">
          <i className="pi pi-exclamation-triangle text-yellow-500 text-5xl mb-4"></i>
          <h3 className="text-xl font-bold mb-2">Are you sure?</h3>
          <p className="text-gray-600 mb-6">Do you want to save this record?</p>
          <div className="flex justify-center gap-3">
            <Button label="Yes" className="bg-blue-600 px-6" onClick={handleConfirmYes} />
            <Button label="Cancel" outlined severity="danger" className="px-6" onClick={handleCancelAction} />
          </div>
        </div>
      </Dialog>

      <Dialog
        header="Success!"
        visible={showSuccessModal}
        style={{ width: '400px' }}
        onHide={() => setShowSuccessModal(false)}
        draggable={false}
      >
        <div className="text-center p-4">
          <i className="pi pi-check-circle text-green-500 text-5xl mb-4"></i>
          <h3 className="text-xl font-bold text-green-600 mb-2">Success!</h3>
          <p className="text-gray-600 mb-6">Record Saved Successfully!</p>
          <div className="flex justify-center">
            <Button label="OK" className="bg-green-600 px-10" onClick={() => setShowSuccessModal(false)} />
          </div>
        </div>
      </Dialog>
    </PageLayout>
  );
};

export default ApplyTour;