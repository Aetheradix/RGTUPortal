import React, { useState } from 'react';
import PageLayout from '../../../components/PageLayout';
import { Button } from 'primereact/button';
import { Dropdown, Input, Table, type TableColumn } from '../../../ui/shared';

interface EnrollmentReportRow {
    academicYear: string;
    classNameCode: string;
    status: string;
}

const MPBSEEnrollmentReport: React.FC = () => {
    const [academicYear, setAcademicYear] = useState<string | null>(null);
    const [showDetails, setShowDetails] = useState(false);

    const [rows] = useState<EnrollmentReportRow[]>([
        {  academicYear: '2024-25', classNameCode: '9', status: 'Yes' },
        {  academicYear: '2024-25', classNameCode: '10', status: 'Yes' },
        {  academicYear: '2024-25', classNameCode: '11', status: 'Yes' },
        {  academicYear: '2024-25', classNameCode: '12', status: 'Yes' },
    ]);

    const handleSearch = () => {
        if (academicYear) {
            setShowDetails(true);
        }
    };

    const handleClear = () => {
        setAcademicYear(null);
        setShowDetails(false);
    };

    const columns: TableColumn[] = [
       
        { field: 'academicYear', header: 'Academic Year' },
        { field: 'classNameCode', header: 'Class Name (Code)', style: { textAlign: 'center' } },
        { 
            field: 'status', 
            header: 'Status(Lock - Yes / NoLock - No)', 
            body: (rowData: EnrollmentReportRow) => (
                <div className="flex ">
                    <span className="bg-[#22c55e] text-white px-5 py-2 rounded font-bold ">
                        {rowData.status}
                    </span>
                </div>
            )
        },
        {
            header: 'Download',
            field: '',
            body: () => (
                <div className="flex ">
                    <Button icon="pi pi-file-excel" className="p-button-outlined p-button-success" style={{ color: '#22c55e' }} />
                </div>
            ),
        },
        {
            header: 'Lock',
            field: '',
            body: () => (
                <div className="flex ">
                    <Button icon="pi pi-lock" className="p-button-outlined p-button-danger" style={{ color: '#f87171' }} />
                </div>
            ),
        },
        {
            header: 'Delete Data',
            field: '',
            body: () => (
                <div className="flex ">
                    <Button label="Delete" className="p-button-outlined p-button-danger text-xs px-3 py-1" style={{ color: '#ef4444', borderColor: '#fca5a5' }} />
                </div>
            ),
        },
    ];

    return (
        <PageLayout title=" MPBSE code wise/ student subject wise enrollment data class 9 to 12 Report">
            <div className="flex flex-col gap-6">
                <div className="border  border-orange-200 rounded-lg p-6 relative bg-white mt-4">
                    <span className="absolute -top-3 left-4 bg-white px-2 text-blue-600 font-bold text-sm"> MPBSE code wise/ student subject wise enrollment data class 9 to 12 Report</span>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-4">
                        <div className="flex flex-col gap-1">
                            <label className=" text-sm">Academic Year <span className="text-red-500">*</span></label>
                            <Dropdown
                                value={academicYear}
                                options={[{ label: '2024-25', value: '2024-25' }]}
                                onChange={(e) => setAcademicYear(e.value)}
                                placeholder="Select"
                                className="w-full"
                            />
                        </div>
                    </div>

                    <div className="flex gap-3 mt-8">
                        <Button 
                            label="Search" 
                            onClick={handleSearch}
                           className="px-10 bg-green-600 border-none text-sm font-bold"
                        />
                        <Button 
                            label="Clear" 
                            onClick={handleClear}
                          className="p-button-danger p-button-outlined px-10 text-sm font-bold"
                        />
                    </div>
                    <div className="mt-4 text-[#ff0000] text-xs font-bold">
                        Note: All Asterisk (*) Marked Fields Are Mandatory
                    </div>
                </div>

                {showDetails && (
                    <div className="border border-orange-200 rounded-lg p-6 relative bg-white mt-8">
                        <span className="absolute -top-3 left-4 bg-white px-2 text-blue-600 font-bold text-sm"> Details</span>


                        <div className="flex justify-between items-center mb-4 mt-2">
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
                        
                        <div className="flex justify-end items-center gap-2 mt-4 text-xs text-gray-600 font-medium">
                            <span>Page 1 of 1 (4 Records)</span>
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
            
            <div className="fixed bottom-10 right-10">
                <Button icon="pi pi-arrow-up" className="rounded-md shadow-lg" style={{ backgroundColor: '#f97316', border: 'none' }} />
            </div>
        </PageLayout>
    );
};

export default MPBSEEnrollmentReport;