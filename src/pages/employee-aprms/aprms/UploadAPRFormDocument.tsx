import React, { useState } from 'react';
import PageLayout from '../../../components/PageLayout';
import { Button } from 'primereact/button';
import { Dropdown } from '../../../ui/shared';

const UploadAPRFormDocument: React.FC = () => {
    const [aprYear, setAprYear] = useState('2026-2027');
    const [, setSelectedFile] = useState<File | null>(null);

    const yearOptions = [
        { label: '2026-2027', value: '2026-2027' },
        { label: '2025-2026', value: '2025-2026' },
        { label: '2024-2025', value: '2024-2025' }
    ];

    

    const handleClear = () => {
        setAprYear('2026-2027');
        setSelectedFile(null);
    };

    return (
        <PageLayout title="Upload APR Form Document">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <form className="space-y-8">
                    {/* Input Row */}
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 items-end">
                        
                        {/* Select Year Dropdown */}
                        <div className="flex flex-col gap-2">
                            <label className="text-sm font-bold text-gray-700">
                                Select Year of APR <span className="text-red-500">*</span>
                            </label>
                            <Dropdown 
                                value={aprYear} 
                                options={yearOptions} 
                                onChange={(e) => setAprYear(e.value)}
                                placeholder="Select Year"
                                className="w-full"
                            />
                        </div>

                        <div className="flex flex-col gap-1">
              <label className="text-sm font-bold text-gray-700">Supporting Documents (optional) *</label>
             <input 
              type="file" 
              className="w-full text-sm text-gray-500 border rounded-md p-2 cursor-pointer
                         file:mr-4 file:py-1 file:px-4 file:rounded file:border-0 
                         file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-700 
                         hover:file:bg-indigo-100" 
            />
            </div>

                    </div>

                    {/* Divider Line */}
                    <div className=" border-gray-200 pt-6">
                        {/* Action Buttons */}
                        <div className="flex justify-center gap-3">
                            <Button 
                                type="button" 
                                label="Save" 
                                className="px-10" 
                                style={{ backgroundColor: '#6366F1', border: 'none' }} 
                            />
                            <Button 
                                type="button" 
                                label="Clear" 
                                className="p-button-danger p-button-outlined px-12" 
                                onClick={handleClear}
                            />
                        </div>
                    </div>
                </form>
            </div>
        </PageLayout>
    );
};

export default UploadAPRFormDocument;