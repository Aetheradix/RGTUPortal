import React, { useState } from 'react';
import PageLayout from '../../../components/PageLayout';
import { Button } from 'primereact/button';
import { Dropdown, Table, type TableColumn } from '../../../ui/shared';

const MonthWiseSyllabusPrint: React.FC = () => {
    const [showReport, setShowReport] = useState(false);
    const [formData] = useState({
        academicYear: '2025-26',
        class: '',
        subject: '',
        syllabusType: 'Monthly'
    });

    const rows = [
        {  month: 'June', syllabus: 'Chapter 1: Integers - Introduction, Properties of Addition and Subtraction of Integers.' },
        {  month: 'July', syllabus: 'Chapter 2: Fractions and Decimals - Multiplication and Division of Fractions.' },
        {  month: 'August', syllabus: 'Chapter 3: Data Handling - Mean, Median, Mode and Bar Graphs.' },
    ];

    const columns: TableColumn[] = [
        { field: 'month', header: 'Month Name' },
        { field: 'syllabus', header: 'Syllabus / Topics Description' },
    ];

    const handleSearch = () => setShowReport(true);

    return (
        <PageLayout title="Month Wise Syllabus Print">
            <div className="flex flex-col gap-4">
                
                <div className=" rounded-xl p-6 relative bg-white mt-4 shadow-sm">
                    <div className="absolute -top-4 left-6 bg-white">
                        <span className=" font-bold">Select Syllabus Criteria</span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-4">
                        <div className="flex flex-col gap-1">
                            <label className="text-sm font-medium text-gray-700">Academic Year <span className="text-red-500">*</span></label>
                            <Dropdown 
                                value={formData.academicYear} 
                                options={[{label:'2025-26', value:'2025-26'}]} 
                                className="h-10 border-orange-200" 
                            />
                        </div>
                        <div className="flex flex-col gap-1">
                            <label className="text-sm font-medium text-gray-700">Class <span className="text-red-500">*</span></label>
                            <Dropdown 
                                placeholder="Select Class" 
                                options={[{label:'7th', value:'7'}, {label:'8th', value:'8'}]} 
                                className="h-10 border-orange-200" 
                            />
                        </div>
                        <div className="flex flex-col gap-1">
                            <label className="text-sm font-medium text-gray-700">Subject <span className="text-red-500">*</span></label>
                            <Dropdown 
                                placeholder="Select Subject" 
                                options={[{label:'Mathematics', value:'Math'}, {label:'Science', value:'Sci'}]} 
                                className="h-10 border-orange-200" 
                            />
                        </div>
                        <div className="flex flex-col gap-1">
                            <label className="text-sm font-medium text-gray-700">Syllabus Type <span className="text-red-500">*</span></label>
                            <Dropdown 
                                value={formData.syllabusType}
                                options={[{label:'Monthly Syllabus', value:'Monthly'}, {label:'Quarterly Syllabus', value:'Quarterly'}]} 
                                className="h-10 border-orange-200" 
                            />
                        </div>
                    </div>

                    <div className="flex gap-4 mt-8 pt-4 border-t border-gray-100">
                        <Button 
                            label="View Syllabus" 
                            onClick={handleSearch} 
                            className="px-10 bg-[#00bfa5] border-none text-sm h-10 shadow-sm" 
                        />
                        <Button 
                            label="Print Page" 
                            icon="pi pi-print" 
                            className="bg-blue-600 border-none px-10 text-sm h-10 shadow-sm" 
                            disabled={!showReport}
                            onClick={() => window.print()}
                        />
                    </div>
                </div>

                {showReport && (
                    <div className=" rounded-xl p-8 relative bg-white mt-8 mb-10 shadow-md print:border-none print:shadow-none">
                        <div className="absolute -top-4 left-6 bg-white  print:hidden">
                            <span className=" font-bold">Syllabus Preview</span>
                        </div>
                        
                        <div className="text-center border-b-2 border-gray-800 pb-4 mb-6">
                            <h1 className="text-2xl font-bold uppercase tracking-wider text-gray-800">Month Wise Academic Syllabus</h1>
                            <div className="grid grid-cols-3 mt-4 text-sm font-semibold text-gray-700 uppercase">
                                <span>Academic Year: {formData.academicYear}</span>
                                <span>Class: 7th</span>
                                <span>Subject: Mathematics</span>
                            </div>
                        </div>

                        <Table columns={columns} data={rows} className="custom-student-table" />

                        <div className="mt-12 hidden print:flex justify-between px-10">
                            <div className="text-center">
                                <div className="h-16"></div>
                                <p className="border-t border-black pt-1 px-4 font-bold text-xs">Subject Teacher</p>
                            </div>
                            <div className="text-center">
                                <div className="h-16"></div>
                                <p className="border-t border-black pt-1 px-4 font-bold text-xs">Principal Signature</p>
                            </div>
                        </div>
                    </div>
                )}
            </div>

            <style>{`
                @media print {
                    body * { visibility: hidden; }
                    .print\\:block, .print\\:block * { visibility: visible; }
                    .print-section, .print-section * {
                        visibility: visible;
                    }
                    .p-datatable-thead > tr > th {
                        background-color: #f3f4f6 !important;
                        color: black !important;
                        border: 1px solid #000 !important;
                    }
                    .p-datatable-tbody > tr > td {
                        border: 1px solid #000 !important;
                    }
                }
            `}</style>
        </PageLayout>
    );
};

export default MonthWiseSyllabusPrint;