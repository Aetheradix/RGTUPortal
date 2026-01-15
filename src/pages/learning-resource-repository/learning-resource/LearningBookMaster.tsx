import React, { useState } from 'react';
import PageLayout from '../../../components/PageLayout';
import { Button } from 'primereact/button';
import { Dropdown, Input, Table, type TableColumn } from '../../../ui/shared';

const LearningBookMaster: React.FC = () => {
    const [showResults, setShowResults] = useState(false);

    const columns: TableColumn[] = [
        { field: 'medium', header: 'Medium' },
        { field: 'class', header: 'Class' },
        { field: 'subject', header: 'Subject' },
        { field: 'bookTitle', header: 'Book Title' },
        { field: 'file', header: 'View PDF', body: () => <i className="pi pi-file-pdf text-red-500 text-xl cursor-pointer" /> },
        { field: 'status', header: 'Status' },
        { field: 'action', header: 'Action', body: () => <Button icon="pi pi-pencil" className="p-button-outlined p-button-warning h-7 w-7" /> }
    ];

    return (
        <PageLayout title="Learning Book Master">
            <div className="flex flex-col gap-4">
                <div className="border border-orange-200 rounded-xl p-6 relative bg-white mt-4">
                    <div className="absolute -top-4 left-6 bg-white px-4 py-1 rounded-lg">
                        <span className="text-blue-600 font-bold text-sm">Add Learning Book Resource</span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-4">
                        <div className="flex flex-col gap-1">
                            <label className="text-sm font-medium">Medium <span className="text-red-500">*</span></label>
                            <Dropdown placeholder="Select" options={[{label:'Hindi', value:'H'}]} className="w-full text-sm h-10 border-orange-200" />
                        </div>
                        <div className="flex flex-col gap-1">
                            <label className="text-sm font-medium">Class <span className="text-red-500">*</span></label>
                            <Dropdown placeholder="Select" options={[{label:'Class 6', value:'6'}]} className="w-full text-sm h-10 border-orange-200" />
                        </div>
                        <div className="flex flex-col gap-1">
                            <label className="text-sm font-medium">Subject <span className="text-red-500">*</span></label>
                            <Dropdown placeholder="Select" options={[{label:'Maths', value:'M'}]} className="w-full text-sm h-10 border-orange-200" />
                        </div>
                        <div className="flex flex-col gap-1">
                            <label className="text-sm font-medium">Upload PDF <span className="text-red-500">*</span></label>
                           <input 
              type="file" 
              className="w-full text-sm text-gray-500 border rounded-md p-2 cursor-pointer
                         file:mr-4 file:py-1 file:px-4 file:rounded file:border-0 
                         file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-700 
                         hover:file:bg-indigo-100" 
            />
                        </div>
                        <div className="flex flex-col gap-1 md:col-span-2">
                            <label className="text-sm font-medium">Book Title <span className="text-red-500">*</span></label>
                            <Input placeholder="Enter Title" className="w-full text-sm h-10 border-orange-200" />
                        </div>
                    </div>

                    <div className="flex gap-4 mt-8 pt-4 border-t border-gray-100">
                        <Button label="Save " onClick={() => setShowResults(true)} className="px-10 bg-[#00bfa5] border-none text-sm" />
                        <Button label="Clear" className="p-button-danger p-button-outlined px-10 text-sm border-pink-200 text-pink-500" />
                    </div>
                </div>

                {showResults && (
                    <div className="border border-orange-200 rounded-xl p-6 relative bg-white mt-8 mb-10">
                        <div className="absolute -top-4 left-6 bg-white px-4 py-1 rounded-lg">
                            <span className="text-blue-600 font-bold text-sm">Learning Books View</span>
                        </div>
                        <Table columns={columns} data={[]} className="custom-student-table" />
                    </div>
                )}
            </div>
        </PageLayout>
    );
};
export default LearningBookMaster;