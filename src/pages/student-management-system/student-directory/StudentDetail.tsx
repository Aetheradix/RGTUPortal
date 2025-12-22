import React, { useState } from 'react';
import PageLayout from '../../../components/PageLayout';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';

const StudentDetail: React.FC = () => {
    const [viewMode, setViewMode] = useState<'list' | 'detail'>('list');
    const [selectedStudent, setSelectedStudent] = useState<any>(null);
    const [globalFilter, setGlobalFilter] = useState('');

    const students = [
        { srNo: 1, enrollment: '0501CS123D01', name: 'Riya Gupta', uniqueId: 'STU12301', gender: 'Female', dob: '21/12/2001', category: 'OBC' },
        { srNo: 2, enrollment: '0501CS123D02', name: 'Rahul Sharma', uniqueId: 'STU12345', gender: 'Male', dob: '03/03/2007', category: 'General' },
    ];

    // Helper for table-style grid cells
    const dataCell = (label: string, value: string, colSpan = 1) => (
        <>
            <div className="bg-gray-50 p-2 font-bold text-gray-700 border-r border-b border-gray-200 text-[10px] uppercase tracking-tighter flex items-center">{label}</div>
            <div className={`p-2 text-gray-600 border-r border-b border-gray-200 text-[11px] font-medium ${colSpan > 1 ? `md:col-span-3` : ''}`}>
                {value || '-'}
            </div>
        </>
    );

    const SectionHeader = ({ title }: { title: string }) => (
        <h4 className="text-[13px] font-bold mt-6 mb-2 text-indigo-900 border-l-4 border-indigo-500 pl-2 py-1 bg-indigo-50/30 uppercase tracking-wide">
            {title}
        </h4>
    );

    return (
        <PageLayout title={viewMode === 'list' ? "Student Detail" : "View Student Application"}>
            
            {viewMode === 'list' ? (
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-lg font-bold text-gray-700">Student Detail</h2>
                        <span className="p-input-icon-left">
                            <i className="pi pi-search" />
                            <InputText placeholder="Search..." onInput={(e: any) => setGlobalFilter(e.target.value)} className="p-inputtext-sm" />
                        </span>
                    </div>
                    <DataTable value={students} paginator rows={10} globalFilter={globalFilter} responsiveLayout="scroll" className="text-sm border shadow-sm rounded-lg" stripedRows>
                        <Column field="srNo" header="Sr No." style={{ width: '60px' }} />
                        <Column field="enrollment" header="Enrollment" />
                        <Column field="name" header="Student Name" />
                        <Column field="uniqueId" header="Unique Id" />
                        <Column field="gender" header="Gender" />
                        <Column field="dob" header="DOB" />
                        <Column field="category" header="Category" />
                        <Column header="View Application" body={(row) => (
                            <Button icon="pi pi-eye" className="p-button-rounded p-button-text shadow-sm border border-indigo-100" onClick={() => { setSelectedStudent(row); setViewMode('detail'); }} />
                        )} />
                    </DataTable>
                </div>
            ) : (
                <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-100 max-w-7xl mx-auto mb-10">
                    {/* Header bar */}
                    <div className="flex justify-between items-center border-b-2 border-indigo-100 pb-4 mb-4">
                        <Button label="Back" icon="pi pi-arrow-left" className="p-button-text font-bold" onClick={() => setViewMode('list')} />
                        <h2 className="text-xl font-black text-gray-800 uppercase tracking-widest">Student Registration Details</h2>
                        <Button icon="pi pi-print" className="p-button-outlined" />
                    </div>

                    {/* 1. Student Personal Details (Image image_553b8b style) */}
                    <SectionHeader title="Student Personal Details" />
                    <div className="grid grid-cols-1 md:grid-cols-8 border-t border-l border-gray-200">
                        {dataCell("Student Name (Eng)", selectedStudent?.name)}
                        {dataCell("Student Name (Hin)", "रिया गुप्ता")}
                        {dataCell("Gender", selectedStudent?.gender)}
                        {dataCell("Date of Birth", selectedStudent?.dob)}
                        {dataCell("Blood Group", "O+")}
                        {dataCell("Category", selectedStudent?.category)}
                        {dataCell("Religion", "Hindu")}
                        {dataCell("Father Name", "Rajesh Gupta")}
                        {dataCell("Mother Name", "Nikita Gupta")}
                        {dataCell("Mobile No", "8878456789")}
                        {dataCell("Domicile", "Madhya Pradesh")}
                        {dataCell("BPL Card", "Yes")}
                        {dataCell("BPL Card No.", "BPL00712")}
                        {dataCell("Disability", "No")}
                        {dataCell("Email ID", "riya@gmail.com", 2)}
                    </div>

                    {/* 2. Address Information (Image image_553b8b style) */}
                    <SectionHeader title="Address Information" />
                    <div className="grid grid-cols-1 md:grid-cols-8 border-t border-l border-gray-200">
                        {dataCell("State Name", "Madhya Pradesh")}
                        {dataCell("Division Name", "Bhopal")}
                        {dataCell("District Name", "Bhopal")}
                        {dataCell("Block Name", "Phanda")}
                        {dataCell("Village Name", "Berasia")}
                        {dataCell("Habitation", "Shivpuri")}
                        {dataCell("Full Address", "Robertson, 123 NW Bobcat Lane, MP 462001", 2)}
                    </div>

                    {/* 3. Family Other Information (Image image_553b8d style) */}
                    <SectionHeader title="Family Other Information" />
                    <div className="grid grid-cols-1 md:grid-cols-8 border-t border-l border-gray-200">
                        {dataCell("Is Single Child", "Yes")}
                        {dataCell("Is Orphan?", "No")}
                        {dataCell("Is Father Dead?", "No")}
                        {dataCell("Father Disability", "No")}
                        {dataCell("Father Status", "Live")}
                        {dataCell("Means of Livelihood", "Non-Government")}
                        {dataCell("Guardian Occupation", "Private")}
                        {dataCell("Yearly Income", "40000")}
                    </div>

                    {/* 4. Previous Academic Information (Image image_553b90 style) */}
                    <SectionHeader title="Previous Academic Year Information" />
                    <div className="grid grid-cols-1 md:grid-cols-8 border-t border-l border-gray-200">
                        {dataCell("College AISHE", "RKCS-501CS08")}
                        {dataCell("Board/Univ", "RGPV University")}
                        {dataCell("Institute Name", "Govt Engineering College, Jabalpur", 2)}
                        {dataCell("Roll Number", "0501CS221C01")}
                        {dataCell("Percentage/CGPA", "75%")}
                        {dataCell("Subject/Branch", "Computer Science", 2)}
                    </div>

                    {/* 5. Current Academic Year (Image image_553b90 style) */}
                    <SectionHeader title="Current Academic Year Information" />
                    <div className="grid grid-cols-1 md:grid-cols-8 border-t border-l border-gray-200">
                        {dataCell("College AISHE", "GFCD-23320400117")}
                        {dataCell("Academic Year", "2023-24")}
                        {dataCell("Date of Admission", "02/04/2022")}
                        {dataCell("College Name", "Lakshmi Narain College of Technology", 2)}
                        {dataCell("Course", "B.Tech")}
                        {dataCell("Specialization", "Cyber Security")}
                        {dataCell("Year of Study", "3rd Year")}
                    </div>

                    {/* 6. Bank Details (Image image_553ba8 style) */}
                    <SectionHeader title="Student Bank Account Information" />
                    <div className="grid grid-cols-1 md:grid-cols-8 border-t border-l border-gray-200">
                        {dataCell("IFSC Code", "SBI7897653")}
                        {dataCell("Bank Name", "State Bank of India")}
                        {dataCell("Branch", "Bhopal")}
                        {dataCell("Account No.", "236576867889")}
                        {dataCell("Holder Name", selectedStudent?.name, 4)}
                    </div>

                    {/* 7. Document Upload (Image image_553ba8 style) */}
                    <SectionHeader title="Document Upload" />
                    <table className="w-full border-collapse border border-gray-200 text-[11px]">
                        <thead className="bg-gray-50">
                            <tr className="text-gray-700">
                                <th className="border p-2 w-16">Sr. No.</th>
                                <th className="border p-2 text-left">Document Name</th>
                                <th className="border p-2 w-32">View Document</th>
                            </tr>
                        </thead>
                        <tbody>
                            {[
                                "Upload Student Photo", "Upload Caste Certificate", "Upload Bank Passbook", 
                                "Upload Income Proof", "Upload BPL Certificate", "Upload Domicile Certificate", "Upload Income Tax Certificate"
                            ].map((doc, i) => (
                                <tr key={i} className="text-center">
                                    <td className="border p-2">{i + 1}</td>
                                    <td className="border p-2 text-left font-medium text-gray-700">{doc}</td>
                                    <td className="border p-2">
                                        <Button icon="pi pi-eye" className="p-button-text p-button-sm" />
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </PageLayout>
    );
};

export default StudentDetail;