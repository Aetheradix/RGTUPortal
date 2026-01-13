import React, { useState } from 'react';
import PageLayout from '../../../components/PageLayout';
import { Button } from 'primereact/button';
import { Dropdown, Input, Table, type TableColumn } from '../../../ui/shared';

interface StudentAppRow {
    srNo: number;
    district: string;
    block: string;
    hostelType: string;
    hostelSubType: string;
    hostelName: string;
    studentName: string;
    samagraId: string;
    dob: string;
    fatherName: string;
    motherName: string;
    category: string;
    village: string;
    address: string;
    bplStatus: string;
}

const StudentApplicationReport: React.FC = () => {
    const [showResults, setShowResults] = useState(false);
    const [formData, setFormData] = useState({
        academicYear: '2025-26',
        division: 'Bhopal',
        district: 'Bhopal',
        block: 'Phanda URBAN- New City',
        sankul: 'Phanda URBAN- New City, Principal, GHSS...',
        school: 'GMS GONDARMAU(1 to 8) (23320300110)',
        hostel: 'KGBV Gondaramu',
    });

    const rows: StudentAppRow[] = [
        {
            srNo: 1,
            district: 'Bhopal',
            block: 'Phanda URBAN- New City',
            hostelType: 'Hostel - SED',
            hostelSubType: 'KGBV-I',
            hostelName: 'KGBV Gondaramu',
            studentName: 'Poorti Sahu',
            samagraId: '126260023',
            dob: '03/03/2012',
            fatherName: 'Gaya Prasad',
            motherName: '---',
            category: 'OBC',
            village: 'Bagsi',
            address: '256/1, Bagsi ग्राम :बागसी ग्राम पंचायत :बागसी जनपद पंचायत, बैरसिया जिला :भोपाल',
            bplStatus: 'NO'
        },
        {
            srNo: 2,
            district: 'Bhopal',
            block: 'Phanda URBAN- New City',
            hostelType: 'Hostel - SED',
            hostelSubType: 'KGBV-I',
            hostelName: 'KGBV Gondaramu',
            studentName: 'Aarushi Gour',
            samagraId: '127219655',
            dob: '12/10/2011',
            fatherName: '---',
            motherName: '---',
            category: 'OBC',
            village: 'Bagsi',
            address: '225, Bagsi ग्राम :बागसी ग्राम पंचायत :बागसी जनपद पंचायत, बैरसिया जिला :भोपाल',
            bplStatus: 'YES'
        }
    ];

    const columns: TableColumn[] = [
        { field: 'srNo', header: 'Sr.No.' },
        { field: 'district', header: 'छात्रावास का जिला' },
        { field: 'block', header: 'छात्रावास का विकासखंड' },
        { field: 'hostelType', header: 'छात्रावास का प्रकार' },
        { field: 'hostelSubType', header: 'छात्रावास का उप प्रकार' },
        { field: 'hostelName', header: 'छात्रावास का नाम' },
        { field: 'studentName', header: 'विद्यार्थी का नाम' },
        { field: 'samagraId', header: 'समग्र आई डी' },
        { field: 'dob', header: 'जन्मतिथि' },
        { field: 'fatherName', header: 'पिता का नाम' },
        { field: 'motherName', header: 'माता का नाम' },
        { field: 'category', header: 'जाति का नाम' },
        { field: 'village', header: 'गाँव का नाम' },
        { field: 'address', header: 'विद्यार्थी का पता' },
        { field: 'bplStatus', header: 'बीपीएल स्थिति' },
    ];

    const handleSearch = () => setShowResults(true);
    const handleClear = () => {
        setShowResults(false);
        setFormData({
            academicYear: '', division: '', district: '', block: '', sankul: '', school: '', hostel: ''
        });
    };

    return (
        <PageLayout title="Student Application Report">
            <div className="flex flex-col gap-4">
                

                <div className="border border-orange-200 rounded-xl p-6 relative bg-white mt-4">
                    <div className="absolute -top-4 left-6 bg-white px-4 py-1 rounded-lg ">
                        <span className="text-blue-600 font-bold text-sm">Student Application Report</span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-4">
                        {[
                            { label: 'Academic Year', key: 'academicYear', options: ['2025-26'] },
                            { label: 'Division', key: 'division', options: ['Bhopal'] },
                            { label: 'District', key: 'district', options: ['Bhopal'] },
                            { label: 'Block', key: 'block', options: ['Phanda URBAN- New City'] },
                            { label: 'Sankul (Code)', key: 'sankul', options: ['Phanda URBAN- New City, Principal, GHSS...'] },
                            { label: 'School (Code  )', key: 'school', options: ['GMS GONDARMAU(1 to 8) (23320300110)'] },
                            { label: 'Hostel', key: 'hostel', options: ['KGBV Gondaramu'] }
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
                        <Button label="Search" onClick={handleSearch} className="px-10 bg-[#00bfa5] border-none text-sm" />
                        <Button label="Clear" onClick={handleClear} className="p-button-danger p-button-outlined px-10 text-sm border-pink-200 text-pink-500" />
                    </div>
                     <div className="mt-4">
                <p className="text-[#ff0000] font-bold text-xs ">
                  Note: All Asterisk (*) Marked Fields Are Mandatory
                </p>
              </div>
                </div>

                {showResults && (
                    <div className="border border-orange-200 rounded-xl p-6 relative bg-white mt-8 mb-10">
                        <div className="absolute -top-4 left-6 bg-white px-4 py-1 rounded-lg ">
                            <span className="text-blue-600 font-bold text-sm">Details</span>
                        </div>

                        <div className="flex justify-between items-center mb-4">
                            <div className="flex items-center gap-2 text-xs">
                              
                            </div>
                            <div className="flex gap-2">
                                <Button label="Export To Excel" icon="pi pi-file-excel" className="p-button-outlined p-button-secondary p-button-sm text-xs" />
                                <span className="p-input-icon-left">
                                    <Input placeholder="Search..." className="p-inputtext-sm text-xs h-8" />
                                </span>
                            </div>
                        </div>

                        <div className="overflow-x-auto border border-gray-200 rounded">
                            <Table columns={columns} data={rows} className="custom-student-table" />
                        </div>

                        <div className="flex justify-between items-center mt-4 text-[10px] text-gray-500 font-medium">
                            <span>Page 1 of 1 (3 Records)</span>
                            <div className="flex items-center gap-1">
                                <Button icon="pi pi-chevron-left" className="p-button-text p-button-sm p-0 text-gray-400" />
                                <span className="px-3 py-1 bg-white border rounded">1</span>
                                <span className="mx-1">of 1</span>
                                <Button icon="pi pi-chevron-right" className="p-button-text p-button-sm p-0 text-gray-400" />
                            </div>
                        </div>
                    </div>
                )}
            </div>

            <div className="fixed bottom-6 right-6">
                <Button icon="pi pi-arrow-up" className="rounded-md shadow-lg p-2" style={{ backgroundColor: '#f97316', border: 'none' }} />
            </div>

            <style>{`
                .custom-student-table .p-datatable-thead > tr > th {
                    font-size: 15px;
                    padding: 15px;
                    white-space: nowrap;
                    border: 1px solid #e5e7eb;
                }
                .custom-student-table .p-datatable-tbody > tr > td {
                    font-size: 13px;
                    padding: 12px;
                    border: 1px solid #e5e7eb;
                }
            `}</style>
        </PageLayout>
    );
};

export default StudentApplicationReport;