import React, { useState } from 'react';
import PageLayout from '../../../components/PageLayout';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { Dropdown } from 'primereact/dropdown';

const GenerateTC: React.FC = () => {
    const [searchData, setSearchData] = useState({ academicYear: null, enrollmentNo: '' });
    const [showList, setShowList] = useState(false);

    // Mock Data (Based on image_559c69)
    const tcListData = [
        { 
            srNo: 1, 
            name: 'Ravi Kumar', 
            fatherName: 'Rajesh Kumar', 
            motherName: 'Sita Devi', 
            dob: '15-08-1998', 
            gender: 'Male', 
            category: 'General' 
        }
    ];

    const academicYears = [
        { label: '2023-24', value: '2023-24' },
        { label: '2024-25', value: '2024-25' }
    ];

    const handleSearch = () => {
        // Logic to fetch data
        setShowList(true);
    };

    const handleClear = () => {
        setSearchData({ academicYear: null, enrollmentNo: '' });
        setShowList(false);
    };

    return (
        <PageLayout title="Generate TC">
            
            {/* 1. SEARCH SECTION (image_559c67 style) */}
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 mb-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
                    <div className="field">
                        <label className="block text-sm font-bold text-gray-700 mb-2">
                            Select Academic Year <span className="text-red-500">*</span>
                        </label>
                        <Dropdown 
                            value={searchData.academicYear} 
                            options={academicYears} 
                            onChange={(e) => setSearchData({...searchData, academicYear: e.value})} 
                            placeholder="Select" 
                            className="w-full p-inputtext-sm" 
                        />
                    </div>
                    <div className="field">
                        <label className="block text-sm font-bold text-gray-700 mb-2">
                            Enter Enrollment No.<span className="text-red-500">*</span>
                        </label>
                        <InputText 
                            value={searchData.enrollmentNo} 
                            onChange={(e) => setSearchData({...searchData, enrollmentNo: e.target.value})} 
                            placeholder="Enter Enrollment No." 
                            className="w-full p-inputtext-sm" 
                        />
                    </div>
                </div>

                <div className="flex justify-center gap-3 mt-8 pt-4 border-t border-gray-50">
                    <Button 
                        label="Search" 
                        className="bg-indigo-600 hover:bg-indigo-700 px-8 py-2 text-sm font-bold border-none shadow-md" 
                        onClick={handleSearch}
                    />
                    <Button 
                        label="Clear" 
                        className="p-button-danger p-button-outlined px-8 py-2 text-sm font-bold bg-red-50" 
                        onClick={handleClear}
                    />
                </div>
            </div>

            {/* 2. GENERATE TC LIST (image_559c69 style) */}
            {showList && (
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 animate-in fade-in duration-500">
                    <div className="flex justify-between items-center mb-4">
                        <h3 className="text-lg font-bold text-gray-700 underline decoration-indigo-200 underline-offset-8">
                            Generate TC List
                        </h3>
                        <span className="p-input-icon-left">
                            <i className="pi pi-search" />
                            <InputText placeholder="Search student..." className="p-inputtext-sm" />
                        </span>
                    </div>

                    <DataTable 
                        value={tcListData} 
                        className="p-datatable-sm border rounded-md overflow-hidden shadow-sm"
                        responsiveLayout="scroll"
                        stripedRows
                    >
                        <Column field="srNo" header="Sr No." style={{ width: '70px' }} className="font-bold text-gray-600" />
                        <Column field="name" header="Name" sortable />
                        <Column field="fatherName" header="Father Name" />
                        <Column field="motherName" header="Mother Name" />
                        <Column field="dob" header="Date Of Birth" />
                        <Column field="gender" header="Gender" />
                        <Column field="category" header="Category" />
                    </DataTable>

                    <div className="flex justify-center gap-3 mt-8">
                        <Button 
                            label="Generate Tc" 
                            icon="pi pi-file-pdf"
                            className="bg-indigo-500 hover:bg-indigo-600 px-10 py-2 font-bold border-none shadow-lg" 
                        />
                        <Button 
                            label="Clear" 
                            className="p-button-danger p-button-outlined px-10 py-2 font-bold bg-red-50 hover:bg-red-100" 
                        />
                    </div>
                </div>
            )}
            
        </PageLayout>
    );
};

export default GenerateTC;