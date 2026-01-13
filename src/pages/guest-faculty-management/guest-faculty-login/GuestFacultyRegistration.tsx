import React, { useState } from 'react';
import PageLayout from '../../../components/PageLayout';
import { Button } from 'primereact/button';
import { Input } from '../../../ui/shared';
import { Dialog } from 'primereact/dialog'; // OTP Modal ke liye
import { RadioButton } from 'primereact/radiobutton';

const GuestFacultyRegistration: React.FC = () => {
  // 1. State for Form Data
  const [selectedIdType, setSelectedIdType] = useState<string>(''); // 'samagra' or 'aadhar'
  const [samagraId, setSamagraId] = useState('');
  const [aadharNumber, setAadharNumber] = useState('');
  const [showOtpModal, setShowOtpModal] = useState(false);
  const [otp, setOtp] = useState('');

  // Style for disabled/readonly fields
  const disabledInputStyle = {
    backgroundColor: '#E5E7EB',
    color: '#9CA3AF',
    cursor: 'not-allowed',
    border: '1px solid #D1D5DB'
  };

  const handleGenerateOtp = () => {
    // Logic to trigger OTP
    setShowOtpModal(true);
  };

  return (
    <PageLayout title="Guest Faculty Registration">
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 mb-8">
        
    

        <div className="space-y-8">
          {/* Radio Selection & Input Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            
            {/* Samagra ID Section */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <RadioButton 
                    inputId="samagra" 
                    name="idType" 
                    value="samagra" 
                    onChange={(e) => setSelectedIdType(e.value)} 
                    checked={selectedIdType === 'samagra'} 
                />
                <label htmlFor="samagra" className="font-semibold text-gray-700">Enter Samagra Id</label>
              </div>
              <Input 
                placeholder="Enter Samagra Id"
                value={samagraId}
                disabled={selectedIdType !== 'samagra'}
                style={selectedIdType !== 'samagra' ? disabledInputStyle : {}}
                onChange={(e) => setSamagraId(e.target.value)}
              />
            </div>

            {/* Aadhar Number Section */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <RadioButton 
                    inputId="aadhar" 
                    name="idType" 
                    value="aadhar" 
                    onChange={(e) => setSelectedIdType(e.value)} 
                    checked={selectedIdType === 'aadhar'} 
                />
                <label htmlFor="aadhar" className="font-semibold text-gray-700">Enter Aadhar Number</label>
              </div>
              <Input 
                placeholder="Enter Aadhar Number Id"
                value={aadharNumber}
                disabled={selectedIdType !== 'aadhar'}
                style={selectedIdType !== 'aadhar' ? disabledInputStyle : {}}
                onChange={(e) => setAadharNumber(e.target.value)}
              />
            </div>

          </div>

          {/* Generate OTP Button */}
          <div className="flex justify-center pt-4">
            <Button 
                label="Generate OTP" 
                className="px-8 py-3" 
                style={{ backgroundColor: '#6366F1', border: 'none' }} 
                onClick={handleGenerateOtp}
                disabled={!selectedIdType} // Jab tak select na ho tab tak disabled
            />
          </div>
        </div>
      </div>

      {/* OTP Verification Modal (Image 4 reference) */}
      <Dialog 
        header="OTP Verification" 
        visible={showOtpModal} 
        style={{ width: '400px' }} 
        onHide={() => setShowOtpModal(false)}
      >
        <div className="flex flex-col gap-4 py-2">
          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold">Enter OTP<span className="text-red-500">*</span></label>
            <Input 
                type="text" 
                placeholder="Enter OTP" 
                value={otp} 
                onChange={(e) => setOtp(e.target.value)} 
            />
          </div>
          <div className="flex gap-3 justify-end mt-4">
            <Button 
                label="Submit" 
                className="px-6" 
                style={{ backgroundColor: '#6366F1', border: 'none' }} 
                onClick={() => setShowOtpModal(false)} 
            />
            <Button 
                label="Clear" 
                className="p-button-danger p-button-outlined px-6" 
                style={{ color: '#F87171', backgroundColor: '#FEE2E2' }}
                onClick={() => setOtp('')}
            />
          </div>
        </div>
      </Dialog>
    </PageLayout>
  );
};

export default GuestFacultyRegistration;