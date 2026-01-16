import React, { useState } from 'react';
import PageLayout from '../../../components/PageLayout';
import { Button } from 'primereact/button';
import { Dropdown, Input, Table, type TableColumn } from '../../../ui/shared';

interface InstituteSetupRow {
    srNo: number;
    instituteName: string;
    instituteCode: string;
    panelName: string;
    sanctionPost: number;
    workingPost: number;
    vacantPost: number;
    surplusPost: number;
}

const InstituteSetupReport: React.FC = () => {
    const [showResults, setShowResults] = useState(false);
    const [formData, setFormData] = useState({
        academicYear: '2025-26',
        instituteType: null as string | null,
        instituteName: null as string | null,
    });

    const rows: InstituteSetupRow[] = [
        {
            srNo: 1,
            instituteName: 'SANSKRIT BOARD',
            instituteCode: '233203OSS09',
            panelName: 'SSS-1 Fine Art',
            sanctionPost: 344,
            workingPost: 0,
            vacantPost: 344,
            surplusPost: 0
        }
    ];

    const columns: TableColumn[] = [
        { field: 'srNo', header: 'Sr.No.', style: { width: '70px', textAlign: 'center' } },
        { field: 'instituteName', header: 'Institute Name' },
        { field: 'instituteCode', header: 'Institute Code' },
        { field: 'panelName', header: 'Panel Name' },
        { field: 'sanctionPost', header: 'Sanction Post', style: { textAlign: 'center' } },
        { field: 'workingPost', header: 'Working Post', style: { textAlign: 'center' } },
        { field: 'vacantPost', header: 'Vacant Post', style: { textAlign: 'center' } },
        { field: 'surplusPost', header: 'Surplus Post', style: { textAlign: 'center' } },
    ];

    const handleSearch = () => {
        setShowResults(true);
    };

    const handleClear = () => {
        setFormData({
            academicYear: '2025-26',
            instituteType: null,
            instituteName: null,
        });
        setShowResults(false);
    };

    return (
        <PageLayout title="Institute Setup Details">
            <div className="flex flex-col gap-4">
              

                <div className=" rounded-xl p-6 relative bg-white">
                    <div className="absolute -top-4 left-6 bg-white  px-4 py-1 rounded-lg">
                        <span className="text-blue-600 font-bold text-sm">Institute Setup Details</span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-4">
                        <div className="flex flex-col gap-2">
                            <label className=" text-sm font-medium">Academic Year</label>
                            <Dropdown
                                value={formData.academicYear}
                                options={[{ label: '2025-26', value: '2025-26' }]}
                                onChange={(e) => setFormData({ ...formData, academicYear: e.value })}
                                className="w-full"
                            />
                        </div>

                        <div className="flex flex-col gap-2">
                            <label className=" text-sm font-medium">
                                Institute Type (Code) <span className="text-red-500">*</span>
                            </label>
                            <Dropdown
                                value={formData.instituteType}
                                options={[{ label: 'SANSKRIT BOARD- (16)', value: '16' }]}
                                placeholder="Select"
                                onChange={(e) => setFormData({ ...formData, instituteType: e.value })}
                                className="w-full"
                            />
                        </div>

                        <div className="flex flex-col gap-2">
                            <label className=" text-sm font-medium">
                                Institute name (Code) <span className="text-red-500">*</span>
                            </label>
                            <Dropdown
                                value={formData.instituteName}
                                options={[{ label: 'SANSKRIT BOARD (233203OSS09)', value: '233203OSS09' }]}
                                placeholder="Select"
                                onChange={(e) => setFormData({ ...formData, instituteName: e.value })}
                                className="w-full"
                            />
                        </div>
                    </div>

                    <div className="flex gap-4 mt-8 pb-4 border-b border-gray-100">
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
                        <p className="text-[#ff0000] font-bold text-xs italic">Note: All Asterisk (*) Marked Fields Are Mandatory</p>
                    </div>
                </div>

                {showResults && (
                    <div className=" rounded-xl p-6 relative bg-white mt-8 mb-10">
                      <div className="absolute -top-4 left-6 bg-white  px-4 py-1 rounded-lg">
                            <span className=" text-blue-600 font-bold text-sm">Details</span>
                        </div>


                        <div className="text-center mb-6">
                            <p className="font-bold text-sm">
                                Office Name : <span className="text-[#22c55e]">SANSKRIT BOARD (233203OSS09)</span>
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

                        <div className="flex justify-end items-center mt-4 text-xs text-gray-600 font-medium gap-4">
                            <span>Page 1 of 1 (1 items)</span>
                            <div className="flex items-center border rounded">
                                <Button icon="pi pi-chevron-left" className="p-button-text p-button-sm text-gray-400" />
                                <span className="px-3 py-1 bg-white border-x">1</span>
                                <Button icon="pi pi-chevron-right" className="p-button-text p-button-sm text-gray-400" />
                            </div>
                            <span>of 1</span>
                        </div>
                    </div>
                )}
            </div>
        </PageLayout>
    );
};

export default InstituteSetupReport;