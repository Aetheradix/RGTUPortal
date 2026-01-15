import React, { useState } from 'react';
import PageLayout from '../../../components/PageLayout';
import { Button } from 'primereact/button';
import { Dropdown, Input, Table, type TableColumn } from '../../../ui/shared';

interface DeRegisterReportRow {
    samagraId: string;
    studentName: string;
    fatherName: string;
    class: string;
    hostelName: string;
    deRegistrationDate: string;
    reason: string;
    remarks: string;
    deRegisteredBy: string;
}

const StudentDeRegisterReport: React.FC = () => {
    const [showResults, setShowResults] = useState(false);
    const [formData] = useState({
        academicYear: '2025-26',
        district: 'Bhopal',
        block: 'Phanda URBAN- New City',
        reason: 'All'
    });

    const rows: DeRegisterReportRow[] = [
        {
            samagraId: '126260023',
            studentName: 'Poorti Sahu',
            fatherName: 'Gaya Prasad',
            class: '6th',
            hostelName: 'KGBV Gondaramu',
            deRegistrationDate: '20/08/2025',
            reason: 'Left School',
            remarks: 'Transferred to other district',
            deRegisteredBy: 'Warden_KGBV_01'
        }
    ];

    const columns: TableColumn[] = [
        { field: 'samagraId', header: 'Samagra ID' },
        { field: 'studentName', header: 'Student Name' },
        { field: 'fatherName', header: 'Father Name' },
        { field: 'class', header: 'Class' },
        { field: 'hostelName', header: 'Hostel Name' },
        { field: 'deRegistrationDate', header: 'De-Registration Date' },
        { field: 'reason', header: 'Reason' },
        { field: 'remarks', header: 'Remarks' },
        { field: 'deRegisteredBy', header: 'Processed By' },
    ];

    const handleSearch = () => setShowResults(true);

    return (
        <PageLayout title="Student De-Registration Report">
            <div className="flex flex-col gap-4">
                
                <div className="border border-orange-200 rounded-xl p-6 relative bg-white mt-4 shadow-sm">
                    <div className="absolute -top-4 left-6 bg-white px-4 py-1  border-orange-100">
                        <span className="text-blue-600 font-bold text-sm"> De-Registration Report</span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-4">
                        <div className="flex flex-col gap-1">
                            <label className="text-sm font-medium">Academic Year</label>
                            <Dropdown
                                value={formData.academicYear}
                                options={[{ label: '2025-26', value: '2025-26' }]}
                                className="w-full text-sm h-10 border-orange-200"
                            />
                        </div>
                        <div className="flex flex-col gap-1">
                            <label className="text-sm font-medium">District</label>
                            <Dropdown
                                value={formData.district}
                                options={[{ label: 'Bhopal', value: 'Bhopal' }]}
                                className="w-full text-sm h-10 border-orange-200"
                            />
                        </div>
                        <div className="flex flex-col gap-1">
                            <label className="text-sm font-medium">Block</label>
                            <Dropdown
                                value={formData.block}
                                options={[{ label: 'Phanda URBAN- New City', value: 'Phanda URBAN- New City' }]}
                                className="w-full text-sm h-10 border-orange-200"
                            />
                        </div>
                        <div className="flex flex-col gap-1">
                            <label className="text-sm font-medium">De-Registration Reason</label>
                            <Dropdown
                                value={formData.reason}
                                options={[
                                    { label: 'All', value: 'All' },
                                    { label: 'Left School', value: 'Left School' },
                                    { label: 'Wrong Entry', value: 'Wrong Entry' },
                                    { label: 'Long Absence', value: 'Long Absence' }
                                ]}
                                className="w-full text-sm h-10 border-orange-200"
                            />
                        </div>
                    </div>

                    <div className="flex gap-4 mt-8 pt-4 border-t border-gray-100">
                        <Button label=" Search" onClick={handleSearch} className="px-10 bg-[#00bfa5] border-none text-sm h-10" />
                        <Button label="Clear" onClick={() => setShowResults(false)} className="p-button-danger p-button-outlined px-10 text-sm border-pink-200 text-pink-500 h-10" />
                    </div>
                </div>

                {showResults && (
                    <div className="border border-orange-200 rounded-xl p-6 relative bg-white mt-8 mb-10 shadow-sm">
                        <div className="absolute -top-4 left-6 bg-white px-4 py-1    border-orange-100">
                            <span className="text-blue-600 font-bold text-sm">Details</span>
                        </div>

                        <div className="flex justify-between items-center mb-4">
                            <div className="text-xs text-gray-500 italic">
                                * This report shows students who are currently de-registered.
                            </div>
                            <div className="flex gap-2">
                                <Button label="Export To Excel" icon="pi pi-file-excel" className="p-button-outlined p-button-secondary p-button-sm text-xs" />
                                <span className="p-input-icon-left">
                                    <Input placeholder="Search records..." className="p-inputtext-sm text-xs h-8 w-48" />
                                </span>
                            </div>
                        </div>

                        <div className="overflow-x-auto border border-gray-200 rounded">
                            <Table columns={columns} data={rows} className="custom-report-table" />
                        </div>
                    </div>
                )}
            </div>

            <style>{`
                .custom-report-table .p-datatable-thead > tr > th {
                    font-size: 13px;
                    padding: 12px;
                    color: #4b5563;
                    border: 1px solid #fed7aa;
                    text-align: center;
                    white-space: nowrap;
                }
                .custom-report-table .p-datatable-tbody > tr > td {
                    font-size: 12px;
                    padding: 10px;
                    border: 1px solid #e5e7eb;
                    text-align: center;
                }
            `}</style>
        </PageLayout>
    );
};

export default StudentDeRegisterReport;