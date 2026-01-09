import React, { useState } from 'react';
import PageLayout from '../../../components/PageLayout';
import { Button } from 'primereact/button';
import { Dropdown } from '../../../ui/shared';

const MPBSEEnrollmentClass9To12: React.FC = () => {
    const [formData, setFormData] = useState({
        academicYear: null as string | null,
        className: null as string | null,
        file: null as File | null
    });

    const [isUploaded, setIsUploaded] = useState(false);

    const handleUpload = () => {
        if (formData.academicYear && formData.className) {
            setIsUploaded(true);
        }
    };

    const handleClear = () => {
        setFormData({
            academicYear: null,
            className: null,
            file: null
        });
        setIsUploaded(false);
    };

    return (
        <PageLayout title="MPBSE Enrollment Class 9 To 12">
            <div className="flex flex-col gap-4">
                <div className="border  border-orange-200 rounded-xl p-8 relative pt-10 bg-white">
                    <span className="absolute -top-3 left-4 bg-white px-2 text-blue-600 font-bold text-sm"> MPBSE code wise/ student subject wise enrollment data class 9 to 12</span>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                        <div className="flex flex-col gap-2">
                            <label className=" font-medium text-sm">
                                Academic Year <span className="text-red-600">*</span>
                            </label>
                            <Dropdown
                                value={formData.academicYear}
                                options={[
                                    { label: '2023-24', value: '2023-24' },
                                    { label: '2024-25', value: '2024-25' }
                                ]}
                                onChange={(e) => setFormData({ ...formData, academicYear: e.value })}
                                placeholder="Select"
                                className="w-full border-gray-300"
                            />
                        </div>

                        <div className="flex flex-col gap-2">
                            <label className=" font-medium text-sm">
                                Class Name <span className="text-red-600">*</span>
                            </label>
                            <Dropdown
                                value={formData.className}
                                options={[
                                    { label: 'Class 9', value: '9' },
                                    { label: 'Class 10', value: '10' },
                                    { label: 'Class 11', value: '11' },
                                    { label: 'Class 12', value: '12' }
                                ]}
                                onChange={(e) => setFormData({ ...formData, className: e.value })}
                                placeholder="Select"
                                className="w-full border-gray-300"
                            />
                        </div>

                        <div className="flex flex-col gap-2">
                            <label className=" font-medium text-sm">
                                Upload File <span className="text-red-600">*</span>
                            </label>
                            <div className="flex items-center border border-gray-300 rounded-md overflow-hidden h-10.5">
                                <label className="bg-[#f3f4f6] px-4 py-2 border-r border-gray-300 cursor-pointer text-sm text-gray-700 hover:bg-gray-200 transition-colors">
                                    Choose File
                                    <input 
                                        type="file" 
                                        className="hidden" 
                                        onChange={(e) => setFormData({...formData, file: e.target.files ? e.target.files[0] : null})}
                                    />
                                </label>
                                <span className="px-3 text-sm text-gray-500 truncate">
                                    {formData.file ? formData.file.name : 'No file chosen'}
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-4 mb-10">
                        <p className="text-[#0ea5e9] font-bold text-sm">Note:</p>
                        <p className="text-[#0ea5e9] font-bold text-sm">1. File format should be in '.csv', '.CSV' format</p>
                        <p className="text-[#0ea5e9] font-bold text-sm">2. Required Columns Header Names (sch_code,sub_code And No_Of_Student) in Upload File.</p>
                        <div className="flex items-center gap-2">
                            <p className="text-[#7c3aed] font-bold text-sm">3. Please Refer the Sample File for proper format .</p>
                            <button className="text-[#7c3aed]">
                                <i className="pi pi-download font-bold"></i>
                            </button>
                        </div>
                    </div>

                 

                    <div className="flex gap-4">
                        <Button 
                            label="Upload" 
                            onClick={handleUpload}
                            className="px-10 bg-green-600 border-none text-sm font-bold"
                        />
                        <Button 
                            label="Clear" 
                            onClick={handleClear}
                           className="p-button-danger p-button-outlined px-10 text-sm font-bold"
                        />
                    </div>

                    <div className="mt-6">
                        <p className="text-[#ff0000] font-bold text-xs">Note: All Asterisk (*) Marked Fields Are Mandatory</p>
                    </div>
                </div>

                {isUploaded && (
                    <div className="mt-8 p-6 bg-white rounded-lg shadow-sm border border-gray-200 text-center text-gray-500">
                        Search results and enrollment data will be displayed here...
                    </div>
                )}
            </div>
        </PageLayout>
    );
};

export default MPBSEEnrollmentClass9To12;