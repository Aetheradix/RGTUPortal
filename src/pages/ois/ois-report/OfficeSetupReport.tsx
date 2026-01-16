import React, { useState } from 'react';
import PageLayout from '../../../components/PageLayout';
import { Button } from 'primereact/button';
import { Dropdown, Input, Table, type TableColumn } from '../../../ui/shared';

interface OfficeSetupRow {
    designation: string;
    sanctionPost: number;
    workingPost: number;
    vacantPost: number;
    surplusPost: number;
}

const OfficeSetupReport: React.FC = () => {
    const [showResults, setShowResults] = useState(false);
    const [formData, setFormData] = useState({
        academicYear: '2025-26',
        officeTypeLevel: null as string | null,
        officeType: null as string | null,
        officeName: null as string | null,
    });

    const rows: OfficeSetupRow[] = [
        {  designation: 'Commissioner', sanctionPost: 0, workingPost: 0, vacantPost: 0, surplusPost: 0 },
        {  designation: 'Director', sanctionPost: 0, workingPost: 0, vacantPost: 0, surplusPost: 0 },
        {  designation: 'Additional Director', sanctionPost: 0, workingPost: 0, vacantPost: 0, surplusPost: 0 },
        {  designation: 'Joint Director', sanctionPost: 0, workingPost: 0, vacantPost: 0, surplusPost: 0 },
        {  designation: 'Deputy Director', sanctionPost: 0, workingPost: 0, vacantPost: 0, surplusPost: 0 },
        {  designation: 'Asstt Director', sanctionPost: 0, workingPost: 0, vacantPost: 0, surplusPost: 0 },
        {  designation: 'Regional Librarian', sanctionPost: 0, workingPost: 0, vacantPost: 0, surplusPost: 0 },
        {  designation: 'Planning Officer', sanctionPost: 0, workingPost: 0, vacantPost: 0, surplusPost: 0 },
        {  designation: 'Director (ELTI)', sanctionPost: 0, workingPost: 0, vacantPost: 0, surplusPost: 0 },
        {  designation: 'Director (SISE)', sanctionPost: 0, workingPost: 0, vacantPost: 0, surplusPost: 0 },
    ];

    const columns: TableColumn[] = [
        { field: 'designation', header: 'Designation' },
        { field: 'sanctionPost', header: 'Sanction Post' },
        { field: 'workingPost', header: 'Working Post' },
        { field: 'vacantPost', header: 'Vacant Post' },
        { field: 'surplusPost', header: 'Surplus Post' },
    ];

    const handleSearch = () => {
        setShowResults(true);
    };

    const handleClear = () => {
        setFormData({
            academicYear: '2025-26',
            officeTypeLevel: null,
            officeType: null,
            officeName: null,
        });
        setShowResults(false);
    };

    return (
        <PageLayout title="Office Setup Details">
            <div className="flex flex-col gap-4">
               

                <div className=" rounded-xl p-6 relative bg-white mt-4">
                    <div className="absolute -top-4 left-6 bg-white px-4 py-1 rounded-lg">
                        <span className=" text-blue-600 font-bold text-sm">Office Setup Details</span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-4">
                        <div className="flex flex-col gap-2">
                            <label className=" text-sm font-medium">
                                Academic Year <span className="text-red-500">*</span>
                            </label>
                            <Dropdown
                                value={formData.academicYear}
                                options={[{ label: '2025-26', value: '2025-26' }]}
                                onChange={(e) => setFormData({ ...formData, academicYear: e.value })}
                                className="w-full"
                            />
                        </div>

                        <div className="flex flex-col gap-2">
                            <label className=" text-sm font-medium">
                                Office Type Level <span className="text-red-500">*</span>
                            </label>
                            <Dropdown
                                value={formData.officeTypeLevel}
                                options={[{ label: 'State Level', value: 'State Level' }]}
                                placeholder="Select"
                                onChange={(e) => setFormData({ ...formData, officeTypeLevel: e.value })}
                                className="w-full"
                            />
                        </div>

                        <div className="flex flex-col gap-2">
                            <label className=" text-sm font-medium">
                                Office Type (Code) <span className="text-red-500">*</span>
                            </label>
                            <Dropdown
                                value={formData.officeType}
                                options={[{ label: 'CMRISE ( 43 )', value: 'CMRISE' }]}
                                placeholder="Select"
                                onChange={(e) => setFormData({ ...formData, officeType: e.value })}
                                className="w-full"
                            />
                        </div>

                        <div className="flex flex-col gap-2">
                            <label className=" text-sm font-medium">
                                Office Name (Code) <span className="text-red-500">*</span>
                            </label>
                            <Dropdown
                                value={formData.officeName}
                                options={[{ label: 'DPI Demo-43098209382', value: 'DPI Demo' }]}
                                placeholder="Select"
                                onChange={(e) => setFormData({ ...formData, officeName: e.value })}
                                className="w-full"
                            />
                        </div>
                    </div>

                    <div className="flex gap-4 mt-8">
                        <Button 
                            label="Search" 
                            onClick={handleSearch}
                          className="px-10 bg-green-600 border-none text-sm"
                        />
                        <Button 
                            label="Clear" 
                            onClick={handleClear}
                           className="p-button-danger p-button-outlined px-10 text-sm"
                        />
                    </div>

                    <div className="mt-4">
                        <p className="text-[#ff0000] font-bold text-xs">Note: All Asterisk (*) Marked Fields Are Mandatory</p>
                    </div>
                </div>

                {showResults && (
                    <div className=" rounded-xl p-6 relative bg-white mt-8 mb-10">
                        <div className="absolute -top-4 left-6 bg-white  px-4 py-1 rounded-lg">
                            <span className=" text-blue-600 font-bold text-sm">Details</span>
                        </div>

                        <div className="text-center mb-6">
                            <p className="font-bold text-sm">
                                Office Name : <span className="text-[#22c55e]">DPI Demo-43098209382</span>
                            </p>
                            <p className="font-bold text-sm mt-1">
                                Execution Time : <span className="text-[#22c55e]">00:00.00 (hh:mm:ss)</span>
                            </p>
                        </div>

                        <div className="flex justify-between items-center mb-4">
                            <div className="flex items-center gap-2 text-sm">
                              
                            </div>
                            <div className="flex gap-2">
                             <Button label="Export To Excel" icon="pi pi-file-excel" className="p-button-outlined p-button-secondary p-button-sm" />
                             <span className="p-input-icon-left">
                            <Input placeholder="Search..." className="p-inputtext-sm" />
                             </span>
                             </div>
                        </div>

                        <div className="overflow-hidden border border-gray-200 rounded">
                            <Table 
                                columns={columns} 
                                data={rows} 
                            />
                        </div>  

                        <div className="flex justify-between items-center mt-4 text-xs text-gray-600 font-medium">
                            <span>Showing 1 to 10 of 51 entries</span>
                            <div className="flex items-center gap-2">
                                <span>Page 1 of 2 (51 Records)</span>
                                <div className="flex items-center border rounded">
                                    <Button icon="pi pi-chevron-left" className="p-button-text p-button-sm text-gray-400" />
                                    <span className="px-3 py-1 bg-white border-x">1</span>
                                    <Button icon="pi pi-chevron-right" className="p-button-text p-button-sm text-gray-400" />
                                </div>
                                <span>of 2</span>
                            </div>
                        </div>
                    </div>
                )}
            </div>

            <div className="fixed bottom-6 right-6">
                <Button icon="pi pi-arrow-up" className="rounded-md shadow-lg p-2" style={{ backgroundColor: '#f97316', border: 'none' }} />
            </div>
        </PageLayout>
    );
};

export default OfficeSetupReport;