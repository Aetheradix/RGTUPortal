import React, { useState } from 'react';
import PageLayout from '../../../components/PageLayout';
import { Button } from 'primereact/button';
import { Input } from '../../../ui/shared';
import { DateInput } from '../../../ui/shared/Input';

const StudentRegistration: React.FC = () => {
  const [samagraId, setSamagraId] = useState('');

  const handleSave = () => {
    console.log("Saving Student Data...");
  };

  const handleClear = () => {
    setSamagraId('');
  };

  return (
    <PageLayout title="Student Registration">
      <div className="space-y-6">
      
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
          <h2 className="text-lg font-bold text-gray-700 mb-6 border-b pb-2">Student Registration</h2>
          <div className="flex flex-col md:flex-row items-end gap-4">
            <div className="w-full md:w-1/4">
              <Input 
                label="Enter Student Samagra ID" 
                required
                placeholder="Enter Samagra ID"
                value={samagraId}
                onChange={(e) => setSamagraId(e.target.value)}
              />
            </div>
            <div className="flex gap-3 mb-1">
              <Button label="Search" className="px-8 shadow-sm" style={{ backgroundColor: '#6366F1', border: 'none' }} />
              <Button label="Clear" className="p-button-danger p-button-outlined px-8" onClick={handleClear} />
            </div>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
          <h2 className="text-lg font-bold text-gray-700 mb-6 border-b pb-2">Student Personal Details</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Input label="Enter Student Name (English)" required placeholder="Name in English" />
            <Input label="Enter Student Name (Hindi)" placeholder="नाम हिंदी में" />
            
            <div className="flex flex-col gap-1">
                <label className="text-sm font-semibold text-gray-700">Select Gender<span className="text-red-500">*</span></label>
                <select className="p-2 border border-gray-300 rounded-md outline-none focus:border-indigo-500">
                    <option value="">Select</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                </select>
            </div>

            <div className="row-span-2 flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-lg p-4 bg-gray-50">
                <div className="w-20 h-20 bg-white border rounded shadow-sm mb-2 flex items-center justify-center overflow-hidden">
                    <img src="/boy.png" alt="Profile" className="w-full h-full object-cover opacity-50" />
                </div>
                <label className="text-xs font-bold text-indigo-600 cursor-pointer hover:underline">
                    Upload Student Image*
                    <input type="file" className="hidden" />
                </label>
            </div>

 <DateInput  
            label="Enter Date Of Birth"
            required
            placeholder="dd/mm/yyyy"
            dateFormat="dd/mm/yy"
            showIcon
          />
        
            
            <div className="flex flex-col gap-1">
                <label className="text-sm font-semibold text-gray-700">Select Blood Group</label>
                <select className="p-2 border border-gray-300 rounded-md outline-none">
                    <option value="">Select</option>
                    <option value="A+">A+</option>
                    <option value="B+">B+</option>
                </select>
            </div>

            <div className="flex flex-col gap-1">
                <label className="text-sm font-semibold text-gray-700">Select Category<span className="text-red-500">*</span></label>
                <select className="p-2 border border-gray-300 rounded-md outline-none">
                    <option value="">Select</option>
                    <option value="GEN">General</option>
                    <option value="OBC">OBC</option>
                </select>
            </div>

            <div className="flex flex-col gap-1">
                <label className="text-sm font-semibold text-gray-700">Select Religion<span className="text-red-500">*</span></label>
                <select className="p-2 border border-gray-300 rounded-md outline-none">
                    <option value="">Select</option>
                    <option value="Hindu">Hindu</option>
                    <option value="Muslim">Muslim</option>
                </select>
            </div>

            <Input label="Enter Father Name" required placeholder="Father Name" />
            <Input label="Enter Mother Name" required placeholder="Mother Name" />
            <Input label="Enter Mobile No." required placeholder="10 Digit Mobile No." />

            <div className="flex flex-col gap-1">
                <label className="text-sm font-semibold text-gray-700">Select Domicile<span className="text-red-500">*</span></label>
                <select className="p-2 border border-gray-300 rounded-md outline-none">
                    <option value="">Select</option>
                    <option value="MP">Madhya Pradesh</option>
                    <option value="Other">Other</option>
                </select>
            </div>

            <div className="flex flex-col gap-1">
                <label className="text-sm font-semibold text-gray-700">Select BPL Card Status<span className="text-red-500">*</span></label>
                <select className="p-2 border border-gray-300 rounded-md outline-none">
                    <option value="">Select</option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                </select>
            </div>

            <div className="flex flex-col gap-1">
                <label className="text-sm font-semibold text-gray-700">Select Disability</label>
                <select className="p-2 border border-gray-300 rounded-md outline-none">
                    <option value="">Select</option>
                    <option value="None">None</option>
                </select>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
          <h2 className="text-lg font-bold text-gray-700 mb-6 border-b pb-2">Address Information</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="flex flex-col gap-1">
                <label className="text-sm font-semibold text-gray-700">Select State Name<span className="text-red-500">*</span></label>
                <select className="p-2 border border-gray-300 rounded-md outline-none">
                    <option value="">Select</option>
                    <option value="MP">Madhya Pradesh</option>
                </select>
            </div>

            <div className="flex flex-col gap-1">
                <label className="text-sm font-semibold text-gray-700">Select Division Name<span className="text-red-500">*</span></label>
                <select className="p-2 border border-gray-300 rounded-md outline-none">
                    <option value="">Select</option>
                </select>
            </div>

            <div className="flex flex-col gap-1">
                <label className="text-sm font-semibold text-gray-700">Select District Name<span className="text-red-500">*</span></label>
                <select className="p-2 border border-gray-300 rounded-md outline-none">
                    <option value="">Select</option>
                </select>
            </div>

            <div className="flex flex-col gap-1">
                <label className="text-sm font-semibold text-gray-700">Select Block Name<span className="text-red-500">*</span></label>
                <select className="p-2 border border-gray-300 rounded-md outline-none">
                    <option value="">Select</option>
                </select>
            </div>

            <div className="flex flex-col gap-1">
                <label className="text-sm font-semibold text-gray-700">Select Village Name<span className="text-red-500">*</span></label>
                <select className="p-2 border border-gray-300 rounded-md outline-none">
                    <option value="">Select</option>
                </select>
            </div>

            <div className="flex flex-col gap-1">
                <label className="text-sm font-semibold text-gray-700">Select Habitation Name<span className="text-red-500">*</span></label>
                <select className="p-2 border border-gray-300 rounded-md outline-none">
                    <option value="">Select</option>
                </select>
            </div>

            <div className="md:col-span-2">
                <Input label="Enter Address" required placeholder="Full Address Here..." />
            </div>
          </div>

          <div className="flex gap-3 justify-center mt-10 border-t pt-8">
            <Button 
                label="Save/Next" 
                className="px-12 py-3 shadow-md" 
                style={{ backgroundColor: '#6366F1', border: 'none' }} 
                onClick={handleSave}
            />
            <Button 
                type="button" 
                label="Clear" 
                className="p-button-danger p-button-outlined px-12 py-3" 
            />
          </div>
        </div>

      </div>
    </PageLayout>
  );
};

export default StudentRegistration;