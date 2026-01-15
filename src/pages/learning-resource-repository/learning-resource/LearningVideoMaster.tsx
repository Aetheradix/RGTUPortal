import React from 'react';
import PageLayout from '../../../components/PageLayout';
import { Button } from 'primereact/button';
import { Dropdown, Input, Table, type TableColumn } from '../../../ui/shared';

const LearningVideoMaster: React.FC = () => {
    const rows = [
        {  class: '10th', subject: 'Science', topic: 'Chemical Reactions', url: 'https://youtube.com/...' },
        {  class: '9th', subject: 'English', topic: 'Tenses Explained', url: 'https://youtube.com/...' },
    ];

    const columns: TableColumn[] = [
        { field: 'class', header: 'Class' },
        { field: 'subject', header: 'Subject' },
        { field: 'topic', header: 'Topic Title' },
        { field: 'url', header: 'Video URL', body: (r:any) => <span className="text-blue-500 underline truncate block w-40">{r.url}</span> },
        { field: 'action', header: 'Action', body: () => <Button icon="pi pi-play" className="p-button-rounded p-button-outlined text-green-600" /> }
    ];

    return (
        <PageLayout title="Learning Video Master">
            <div className="flex flex-col gap-4">
                <div className="border border-orange-200 rounded-xl p-6 relative bg-white mt-4">
                    <div className="absolute -top-4 left-6 bg-white px-4 py-1 rounded-lg ">
                        <span className="text-blue-600 font-bold text-sm">Add Learning Video Resource</span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-4">
                        <div className="flex flex-col gap-1">
                            <label className="text-sm font-medium">Class <span className="text-red-500">*</span></label>
                            <Dropdown options={[{label:'10th', value:'10'}]} placeholder="Select" className="border-orange-200 h-10" />
                        </div>
                        <div className="flex flex-col gap-1">
                            <label className="text-sm font-medium">Subject <span className="text-red-500">*</span></label>
                            <Dropdown options={[{label:'Science', value:'S'}]} placeholder="Select" className="border-orange-200 h-10" />
                        </div>
                        <div className="flex flex-col gap-1 md:col-span-2">
                            <label className="text-sm font-medium">Topic Title <span className="text-red-500">*</span></label>
                            <Input placeholder="Enter Topic" className="border-orange-200 h-10" />
                        </div>
                        <div className="flex flex-col gap-1 md:col-span-4">
                            <label className="text-sm font-medium">Video URL (YouTube/Link) <span className="text-red-500">*</span></label>
                            <Input placeholder="https://youtube.com/..." className="border-orange-200 h-10" />
                        </div>
                    </div>

                    <div className="flex gap-4 mt-8 pt-4 border-t border-gray-100">
                        <Button label="Save " className="px-10 bg-[#00bfa5] border-none text-sm" />
                        <Button label="Clear" className="p-button-danger p-button-outlined px-10 text-sm border-pink-200 text-pink-500" />
                    </div>
                </div>

                <div className="border border-orange-200 rounded-xl p-6 relative bg-white mt-8 mb-10">
                    <div className="absolute -top-4 left-6 bg-white px-4 py-1 rounded-lg ">
                        <span className="text-blue-600 font-bold text-sm">Learning Videos View</span>
                    </div>
                    <Table columns={columns} data={rows} className="custom-student-table" />
                </div>
            </div>
        </PageLayout>
    );
};

export default LearningVideoMaster;