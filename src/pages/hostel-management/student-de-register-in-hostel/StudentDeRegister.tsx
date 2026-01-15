import React, { useState } from 'react';
import PageLayout from '../../../components/PageLayout';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { Dropdown, Input, Table, type TableColumn } from '../../../ui/shared';

interface DeRegisterRow {
    samagraId: string;
    studentName: string;
    fatherName: string;
    class: string;
    hostelName: string;
    admissionDate: string;
    status: string;
}

const StudentDeRegister: React.FC = () => {
    const [showResults, setShowResults] = useState(false);
    const [showDeRegModal, setShowDeRegModal] = useState(false);
    const [selectedStudent, setSelectedStudent] = useState<DeRegisterRow | null>(null);

    const [formData] = useState({
        academicYear: '2025-26',
        samagraId: '',
    });

    const rows: DeRegisterRow[] = [
        {
            samagraId: '126260023',
            studentName: 'Poorti Sahu',
            fatherName: 'Gaya Prasad',
            class: '6th',
            hostelName: 'KGBV Gondaramu',
            admissionDate: '15/07/2025',
            status: 'Active'
        }
    ];

    const openDeRegister = (rowData: DeRegisterRow) => {
        setSelectedStudent(rowData);
        setShowDeRegModal(true);
    };

    const columns: TableColumn[] = [
        { field: 'samagraId', header: 'Samagra ID' },
        { field: 'studentName', header: 'Student Name' },
        { field: 'fatherName', header: 'Father Name' },
        { field: 'class', header: 'Class' },
        { field: 'hostelName', header: 'Hostel Name' },
        { field: 'admissionDate', header: 'Admission Date' },
        { 
            field: 'action', 
            header: 'De-Register',
            body: (rowData: DeRegisterRow) => (
                <Button 
                    icon="pi pi-user-minus" 
                    label="De-Register" 
                    className="p-button-sm p-button-danger p-button-outlined text-[10px] h-7 px-3 border-pink-300 text-pink-600"
                    onClick={() => openDeRegister(rowData)}
                />
            )
        },
    ];

    return (
        <PageLayout title="Student De-Registration">
            <div className="flex flex-col gap-4">
                
                <div className="border border-orange-200 rounded-xl p-6 relative bg-white mt-4 shadow-sm">
                    <div className="absolute -top-4 left-6 bg-white px-4 py-1   border-orange-100">
                        <span className="text-blue-600 font-bold text-sm">Find Student for De-Registration</span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
                        <div className="flex flex-col gap-1">
                            <label className="text-sm font-medium">Academic Year <span className="text-red-500">*</span></label>
                            <Dropdown
                                value={formData.academicYear}
                                options={[{ label: '2025-26', value: '2025-26' }]}
                                className="w-full text-sm h-10 border-orange-200"
                            />
                        </div>
                        <div className="flex flex-col gap-1">
                            <label className="text-sm font-medium">Student Samagra ID <span className="text-red-500">*</span></label>
                            <Input 
                                placeholder="Enter 9 Digit Samagra ID" 
                                className="w-full text-sm h-10 border-orange-200" 
                            />
                        </div>
                    </div>

                    <div className="flex gap-4 mt-8 pt-4 border-t border-gray-100">
                        <Button label="Search " onClick={() => setShowResults(true)} className="px-10 bg-[#00bfa5] border-none text-sm h-10" />
                        <Button label="Clear" onClick={() => setShowResults(false)} className="p-button-danger p-button-outlined px-10 text-sm border-pink-200 text-pink-500 h-10" />
                    </div>
                </div>

                {showResults && (
                    <div className="border border-orange-200  p-6 relative bg-white mt-8 mb-10 shadow-sm">
                        <div className="absolute -top-4 left-6 bg-white px-4 py-1   border-orange-100">
                            <span className="text-blue-600 font-bold text-sm">Student Record</span>
                        </div>
                        <div className="overflow-x-auto border border-gray-200 rounded mt-4">
                            <Table columns={columns} data={rows} className="custom-deregister-table" />
                        </div>
                    </div>
                )}
            </div>

            <Dialog 
                header="Student De-Registration Reason" 
                visible={showDeRegModal} 
                style={{ width: '500px' }} 
                onHide={() => setShowDeRegModal(false)}
                className="custom-dialog"
            >
                <div className="flex flex-col gap-4 py-2">
                    <div className="bg-blue-50 p-3 rounded border border-blue-100">
                        <p className="text-xs text-blue-800"><b>Student:</b> {selectedStudent?.studentName} ({selectedStudent?.samagraId})</p>
                    </div>

                    <div className="flex flex-col gap-1">
                        <label className="text-sm font-semibold text-gray-700">De-Registration Reason <span className="text-red-500">*</span></label>
                        <Dropdown 
                            options={[
                                {label: 'Left School', value: 'Left School'},
                                {label: 'Wrong Entry', value: 'Wrong Entry'},
                                {label: 'Hostel Change', value: 'Hostel Change'},
                                {label: 'Long Absence', value: 'Long Absence'}
                            ]} 
                            placeholder="Select Reason" 
                            className="w-full border-orange-200"
                        />
                    </div>

                    <div className="flex flex-col gap-1">
                        <label className="text-sm font-semibold text-gray-700">Remarks</label>
                        <textarea className="w-full border border-orange-200 rounded p-2 text-sm h-24" placeholder="Enter details..."></textarea>
                    </div>

                    <div className="flex justify-center gap-3 mt-4">
                        <Button label="Confirm " className="bg-red-500 border-none px-6 text-sm" />
                        <Button label="Cancel" onClick={() => setShowDeRegModal(false)} className="p-button-outlined p-button-secondary px-6 text-sm" />
                    </div>
                </div>
            </Dialog>

            <style>{`
                .custom-deregister-table .p-datatable-thead > tr > th {
                    font-size: 13px;
                    padding: 12px;
                    color: #4b5563;
                    border: 1px solid #fed7aa;
                    text-align: center;
                }
                .custom-deregister-table .p-datatable-tbody > tr > td {
                    font-size: 12px;
                    padding: 10px;
                    border: 1px solid #e5e7eb;
                    text-align: center;
                }
                .custom-dialog .p-dialog-header {
                    border-bottom: 1px solid #eee;
                    padding: 1rem;
                }
            `}</style>
        </PageLayout>
    );
};

export default StudentDeRegister;