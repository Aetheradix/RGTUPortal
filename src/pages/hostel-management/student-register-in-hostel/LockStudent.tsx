    import React, { useState } from 'react';
import PageLayout from '../../../components/PageLayout';
import { Button } from 'primereact/button';
import { Dropdown, Input, Table, type TableColumn } from '../../../ui/shared';

interface LockStudentRow {
    samagraId: string;
    studentName: string;
    fatherName: string;
    class: string;
    gender: string;
    category: string;
    isLocked: boolean;
}

const LockStudent: React.FC = () => {
    const [showResults, setShowResults] = useState(false);
    const [formData, setFormData] = useState({
        academicYear: '2025-26',
        district: 'Bhopal',
        block: 'Phanda URBAN- New City',
        school: 'GMS GONDARMAU(1 to 8) (23320300110)',
    });

    const rows: LockStudentRow[] = [
        {
            samagraId: '126260023',
            studentName: 'Poorti Sahu',
            fatherName: 'Gaya Prasad',
            class: '6th',
            gender: 'Female',
            category: 'OBC',
            isLocked: false
        },
        {
            samagraId: '127219655',
            studentName: 'Aarushi Gour',
            fatherName: 'Rajesh Gour',
            class: '6th',
            gender: 'Female',
            category: 'OBC',
            isLocked: false
        }
    ];

    const columns: TableColumn[] = [
        { field: 'samagraId', header: 'Samagra ID' },
        { field: 'studentName', header: 'Student Name' },
        { field: 'fatherName', header: 'Father Name' },
        { field: 'class', header: 'Class' },
        { field: 'gender', header: 'Gender' },
        { field: 'category', header: 'Category' },
        { 
            field: 'action', 
            header: 'Action',
            body: (rowData: LockStudentRow) => (
                <Button 
                    icon="pi pi-lock-open" 
                    label="Lock" 
                    className="p-button-sm bg-orange-400 border-none text-[10px] h-7 px-3"
                    disabled={rowData.isLocked}
                />
            )
        },
    ];

    const handleSearch = () => setShowResults(true);
    const handleClear = () => {
        setShowResults(false);
        setFormData({ academicYear: '', district: '', block: '', school: '' });
    };

    return (
        <PageLayout title="Lock Student Records">
            <div className="flex flex-col gap-4">
                
                <div className="border border-orange-200 rounded-xl p-6 relative bg-white mt-4">
                    <div className="absolute -top-4 left-6 bg-white px-4 py-1 rounded-lg">
                        <span className="text-blue-600 font-bold text-sm">Search Students to Lock</span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-4">
                        {[
                            { label: 'Academic Year', key: 'academicYear', options: ['2025-26'] },
                            { label: 'District', key: 'district', options: ['Bhopal'] },
                            { label: 'Block', key: 'block', options: ['Phanda URBAN- New City'] },
                            { label: 'School (Code)', key: 'school', options: ['GMS GONDARMAU(1 to 8) (23320300110)'] },
                        ].map((field) => (
                            <div key={field.key} className="flex flex-col gap-1">
                                <label className="text-sm font-medium">
                                    {field.label} <span className="text-red-500">*</span>
                                </label>
                                <Dropdown
                                    value={(formData as any)[field.key]}
                                    options={field.options.map(o => ({ label: o, value: o }))}
                                    placeholder="Select"
                                    className="w-full text-sm h-10 border-orange-200"
                                />
                            </div>
                        ))}
                    </div>

                    <div className="flex gap-4 mt-8 pt-4 border-t border-gray-100">
                        <Button label="View Students" onClick={handleSearch} className="px-10 bg-[#00bfa5] border-none text-sm" />
                        <Button label="Clear" onClick={handleClear} className="p-button-danger p-button-outlined px-10 text-sm border-pink-200 text-pink-500" />
                    </div>

                    <div className="mt-4">
                        <p className="text-[#ff0000] font-bold text-[10px]">
                            Note: Once student records are locked, you will not be able to modify their information.
                        </p>
                    </div>
                </div>

                {showResults && (
                    <div className="border border-orange-200 rounded-xl p-6 relative bg-white mt-8 mb-10">
                        <div className="absolute -top-4 left-6 bg-white px-4 py-1 rounded-lg">
                            <span className="text-blue-600 font-bold text-sm">Student List</span>
                        </div>

                        <div className="flex justify-between items-center mb-4">
                            <div className="flex gap-2 ml-auto">
                                <Button label="Lock All" icon="pi pi-lock" className="p-button-danger p-button-sm text-xs bg-red-500 border-none" />
                                <span className="p-input-icon-left">
                                    <Input placeholder="Search..." className="p-inputtext-sm text-xs h-8 w-48" />
                                </span>
                            </div>
                        </div>

                        <div className="overflow-x-auto border border-gray-200 rounded">
                            <Table columns={columns} data={rows} className="custom-lock-table" />
                        </div>
                    </div>
                )}
            </div>

            <style>{`
                .custom-lock-table .p-datatable-thead > tr > th {
                    font-size: 13px;
                    padding: 12px;
                    color: #4b5563;
                    border: 1px solid #fed7aa;
                }
                .custom-lock-table .p-datatable-tbody > tr > td {
                    font-size: 12px;
                    padding: 10px;
                    border: 1px solid #e5e7eb;
                }
            `}</style>
        </PageLayout>
    );
};

export default LockStudent;