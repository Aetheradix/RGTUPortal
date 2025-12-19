import React, { useState } from 'react';
import PageLayout from '../../../components/PageLayout';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { Dropdown } from 'primereact/dropdown';
import { RadioButton } from 'primereact/radiobutton';
import { Checkbox } from 'primereact/checkbox';

const StudentPromotionTC: React.FC = () => {
    // Modes: 'list' (Main Screen), 'add' (Promotion Entry Screen)
    const [viewMode, setViewMode] = useState<'list' | 'add'>('list');

    // Form States
    const [filters, setFilters] = useState({
        academicYear: null,
        course: null,
        specialization: null,
        semester: null
    });

    // Mock Data for Table (image_554656)
    const promotionList = [
        { id: 1, enrollment: '0501CS221C01', name: 'Arnav Gupta', father: 'Maakhan Gupta', dob: '26/05/2001', percentage: '75%', result: 'Pass', college: 'Same', status: true },
        { id: 2, enrollment: '0501CS221C02', name: 'Neha Sharma', father: 'Vishnu Sharma', dob: '21/04/2001', percentage: '95%', result: 'Pass', college: 'Same', status: true },
        { id: 3, enrollment: '0501CS221C03', name: 'Ravi Kumar', father: 'Kishor Kumar', dob: '02/06/2002', percentage: '66%', result: 'Fail', college: 'Other', status: true },
        { id: 4, enrollment: '0501CS221C04', name: 'Priya Yadav', father: 'Rahul Yadav', dob: '30/12/1999', percentage: '75%', result: 'Pass', college: 'Other', status: true },
    ];

    // Options for Dropdowns
    const years = [{ label: '2023-24', value: '23-24' }, { label: '2024-25', value: '24-25' }];

    // --- TEMPLATES ---
    
    // Percentage Input Template (image_554652)
    const percentageEditor = (rowData: any) => (
        <InputText defaultValue={rowData.percentage.replace('%', '')} placeholder="Enter Percentage" className="p-inputtext-sm w-full" />
    );

    // Result Status Template (Radio Buttons)
    const resultTemplate = (rowData: any) => (
        <div className="flex gap-3 justify-center">
            <div className="flex align-items-center">
                <RadioButton value="Pass" checked={rowData.result === 'Pass'} onChange={() => {}} className="mr-1" />
                <label className="text-xs">Pass</label>
            </div>
            <div className="flex align-items-center">
                <RadioButton value="Fail" checked={rowData.result === 'Fail'} onChange={() => {}} className="mr-1" />
                <label className="text-xs">Fail</label>
            </div>
        </div>
    );

    // Action Template (Edit/Delete - image_554656)
    const actionTemplate = () => (
        <div className="flex gap-2 justify-center">
            <Button icon="pi pi-pencil" className="p-button-rounded p-button-info p-button-text bg-blue-50" size="small" />
            <Button icon="pi pi-trash" className="p-button-rounded p-button-danger p-button-text bg-red-50" size="small" />
        </div>
    );

    return (
        <PageLayout title="Student Promotion & TC">
            
            {/* 1. FILTER SECTION (Visible in both modes - image_554654) */}
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 mb-6">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-lg font-semibold text-gray-700">Student Promotion & TC</h2>
                    {viewMode === 'list' ? (
                        <Button 
                            label="Add Student Promotion & TC" 
                            icon="pi pi-plus" 
                            className="p-button-sm bg-indigo-600 border-none"
                            onClick={() => setViewMode('add')} 
                        />
                    ) : (
                        <Button 
                            label="Go Back" 
                            icon="pi pi-arrow-left" 
                            className="p-button-sm p-button-outlined"
                            onClick={() => setViewMode('list')} 
                        />
                    )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <div>
                        <label className="block text-xs font-bold text-gray-600 mb-1 uppercase">Academic Year<span className="text-red-500">*</span></label>
                        <Dropdown options={years} placeholder="Select" className="w-full p-inputtext-sm" />
                    </div>
                    <div>
                        <label className="block text-xs font-bold text-gray-600 mb-1 uppercase">Select Course Name<span className="text-red-500">*</span></label>
                        <Dropdown options={[]} placeholder="Select" className="w-full p-inputtext-sm" />
                    </div>
                    <div>
                        <label className="block text-xs font-bold text-gray-600 mb-1 uppercase">Select Specialization<span className="text-red-500">*</span></label>
                        <Dropdown options={[]} placeholder="Select" className="w-full p-inputtext-sm" />
                    </div>
                    <div>
                        <label className="block text-xs font-bold text-gray-600 mb-1 uppercase">Select Semester<span className="text-red-500">*</span></label>
                        <Dropdown options={[]} placeholder="Select" className="w-full p-inputtext-sm" />
                    </div>
                </div>

                <div className="flex justify-center gap-3 mt-8 border-t pt-6">
                    <Button label="Search" className="bg-indigo-600 px-8 py-2 text-sm font-bold" />
                    <Button label="Clear" className="p-button-danger p-button-outlined px-8 py-2 text-sm font-bold bg-red-50" />
                </div>
            </div>

            {/* 2. LIST VIEW (image_554656) */}
            {viewMode === 'list' && (
                <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 animate-in fade-in duration-300">
                    <h3 className="text-md font-bold mb-4 text-gray-600">Student Promotion & TC List</h3>
                    <DataTable value={promotionList} paginator rows={10} responsiveLayout="scroll" className="p-datatable-sm custom-table text-sm" stripedRows>
                        <Column field="id" header="Sr No." style={{ width: '60px' }} />
                        <Column field="enrollment" header="Enrollment No" sortable />
                        <Column field="name" header="Student Name" sortable />
                        <Column field="father" header="Father Name" />
                        <Column field="dob" header="Date of Birth" />
                        <Column field="percentage" header="Percentage %" />
                        <Column field="result" header="Result Status" />
                        <Column field="college" header="College" />
                        <Column header="Status" body={() => <Checkbox checked={true} />}  />
                        <Column header="Action" body={actionTemplate}  />
                    </DataTable>
                </div>
            )}

            {/* 3. ADD/ENTRY VIEW (image_554652) */}
            {viewMode === 'add' && (
                <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 animate-in slide-in-from-bottom-4 duration-400">
                    <div className="flex justify-between items-center mb-4">
                        <h3 className="text-md font-bold text-indigo-700">Add Student Promotion & TC</h3>
                        <div className="flex items-center gap-2">
                            <span className="text-sm text-gray-500 italic">Show 10 entries</span>
                            <span className="p-input-icon-left">
                                <i className="pi pi-search" />
                                <InputText placeholder="Search..." className="p-inputtext-sm" />
                            </span>
                        </div>
                    </div>

                    <DataTable value={promotionList} className="p-datatable-sm border text-xs" responsiveLayout="scroll">
                        <Column field="id" header="Sr No." />
                        <Column field="enrollment" header="Enrollment No" />
                        <Column field="name" header="Student Name" />
                        <Column field="father" header="Father Name" />
                        <Column field="dob" header="Date of Birth" />
                        <Column header="Percentage %" body={percentageEditor} style={{ width: '150px' }} />
                        <Column header="Result Status" body={resultTemplate} style={{ width: '180px' }} />
                        <Column header="College" body={(rowData) => (
                            <div className="flex gap-2">
                                <RadioButton checked={rowData.college === 'Same'} /> <label>Same</label>
                                <RadioButton checked={rowData.college === 'Other'} /> <label>Other</label>
                            </div>
                        )} />
                        <Column header="Status" body={() => <Checkbox checked={true} />} />
                    </DataTable>

                    <div className="flex justify-center gap-3 mt-8 pt-6 border-t">
                        <Button label="Save" className="bg-indigo-600 px-10 py-2 font-bold" icon="pi pi-save" />
                        <Button label="Clear" className="p-button-danger p-button-outlined px-10 py-2 font-bold bg-red-50" />
                    </div>
                </div>
            )}
        </PageLayout>
    );
};

export default StudentPromotionTC;