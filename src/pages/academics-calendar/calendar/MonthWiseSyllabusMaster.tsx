import React, { useState } from 'react';
import PageLayout from '../../../components/PageLayout';
import { Button } from 'primereact/button';
import { Dropdown, Table, type TableColumn } from '../../../ui/shared';

const MonthWiseSyllabusMaster: React.FC = () => {
    const [showTable, setShowTable] = useState(false);

    const rows = [
        { month: 'June', syllabus: 'Chapter 1: Integers, Chapter 2: Fractions and Decimals' },
        { month: 'July', syllabus: 'Chapter 3: Data Handling, Chapter 4: Simple Equations' },
    ];

    const columns: TableColumn[] = [
        { field: 'month', header: 'Month' },
        { field: 'month', header: 'Month' },
        { field: 'syllabus', header: 'Syllabus Description' },
        { 
            field: 'action', 
            header: 'Action', 
            body: () => (
                <div className="flex gap-2 justify-center">
                    <Button icon="pi pi-pencil" className="p-button-outlined p-button-primary h-7 w-7" />
                    <Button icon="pi pi-trash" className="p-button-outlined p-button-danger h-7 w-7" />
                </div>
            ) 
        }
    ];

    return (
        <PageLayout title="Month Wise Syllabus Master">
            <div className="flex flex-col gap-4">
                <div className=" rounded-xl relative bg-white mb-4 shadow-sm">
                    <div className=" bg-white ">
                        <span className=" font-bold">Define Monthly Syllabus</span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-4">
                        <div className="flex flex-col gap-1">
                            <label className="text-sm font-medium">Academic Year <span className="text-red-500">*</span></label>
                            <Dropdown options={[{label:'2025-26', value:'2025-26'}]} value="2025-26" className="h-10 border-orange-200" />
                        </div>
                        <div className="flex flex-col gap-1">
                            <label className="text-sm font-medium">Class <span className="text-red-500">*</span></label>
                            <Dropdown placeholder="Select Class" options={[{label:'7th', value:'7'}]} className="h-10 border-orange-200" />
                        </div>
                        <div className="flex flex-col gap-1">
                            <label className="text-sm font-medium">Subject <span className="text-red-500">*</span></label>
                            <Dropdown placeholder="Select Subject" options={[{label:'Mathematics', value:'Math'}]} className="h-10 border-orange-200" />
                        </div>
                        <div className="flex flex-col gap-1">
                            <label className="text-sm font-medium">Month <span className="text-red-500">*</span></label>
                            <Dropdown placeholder="Select Month" options={[{label:'June', value:'6'}, {label:'July', value:'7'}]} className="h-10 border-orange-200" />
                        </div>
                    </div>

                    <div className="flex flex-col gap-1 mt-6">
                        <label className="text-sm font-medium">Syllabus / Topics Cover <span className="text-red-500">*</span></label>
                        <textarea 
                            className="w-full border border-orange-200 rounded-lg p-3 text-sm h-24 focus:ring-1 focus:ring-orange-400 outline-none" 
                            placeholder="Enter topics to be covered in this month..."
                        />
                    </div>

                    <div className="flex gap-4  p-4 border-t border-gray-100">
                        <Button label="Save " onClick={() => setShowTable(true)} className="px-10 bg-[#00bfa5] border-none text-sm h-10 shadow-md" />
                        <Button label="Clear" className="p-button-danger p-button-outlined px-10 text-sm border-pink-200 text-pink-500 h-10" />
                    </div>
                </div>
  
                {showTable && (
                    <div className=" rounded-xl p-6 relative bg-white mt-8 mb-10 shadow-sm">
                        <div className="absolute -top-4 left-6 bg-white ">
                            <span className=" font-bold ">Defined Syllabus List</span>
                        </div>
                        <Table columns={columns} data={rows} className="custom-student-table" />
                    </div>
                )}
            </div>
        </PageLayout>
    );
};

export default MonthWiseSyllabusMaster;