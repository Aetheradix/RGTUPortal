import React, { useState } from 'react';
import PageLayout from '../../../components/PageLayout';
import { Button } from 'primereact/button';
import { Dropdown, Input, Table, type TableColumn } from '../../../ui/shared';

interface PostCodeRow {
    blockName: string;
    oisName: string;
    schoolCategory: string;
    panelName: string;
    postCode: string;
    sanctionPost: number;
}

const PostCodeReport: React.FC = () => {
    const [showResults, setShowResults] = useState(false);
    const [formData, setFormData] = useState({
        oisType: 'School',
        division: null as string | null,
        district: null as string | null,
        block: null as string | null,
        category: 'All',
        oisCode: '',
    });

    const rows: PostCodeRow[] = [
        {  blockName: 'Berasia', oisName: 'GMS VIRAH SHYAMKHEDI(1 to 8) (23320127802)', schoolCategory: 'Upper Primary with grades 1 to 8 (PRY-UPR)', panelName: 'SSS-2 Hindi', postCode: '0010857', sanctionPost: 0 },
        {  blockName: 'Berasia', oisName: 'GMS VIRAH SHYAMKHEDI(1 to 8) (23320127802)', schoolCategory: 'Upper Primary with grades 1 to 8 (PRY-UPR)', panelName: 'SSS-2 Urdu', postCode: '0010858', sanctionPost: 0 },
        {  blockName: 'Berasia', oisName: 'GMS VIRAH SHYAMKHEDI(1 to 8) (23320127802)', schoolCategory: 'Upper Primary with grades 1 to 8 (PRY-UPR)', panelName: 'SSS-2 Biology', postCode: '0010859', sanctionPost: 0 },
        {  blockName: 'Berasia', oisName: 'GMS VIRAH SHYAMKHEDI(1 to 8) (23320127802)', schoolCategory: 'Upper Primary with grades 1 to 8 (PRY-UPR)', panelName: 'SSS-2 Maths', postCode: '0010860', sanctionPost: 1 },
        {  blockName: 'Berasia', oisName: 'GMS VIRAH SHYAMKHEDI(1 to 8) (23320127802)', schoolCategory: 'Upper Primary with grades 1 to 8 (PRY-UPR)', panelName: 'HM-MS', postCode: '0010861', sanctionPost: 0 },
        {  blockName: 'Berasia', oisName: 'GMS VIRAH SHYAMKHEDI(1 to 8) (23320127802)', schoolCategory: 'Upper Primary with grades 1 to 8 (PRY-UPR)', panelName: 'SSS-2 Social Science', postCode: '0010862', sanctionPost: 1 },
        {  blockName: 'Berasia', oisName: 'GMS VIRAH SHYAMKHEDI(1 to 8) (23320127802)', schoolCategory: 'Upper Primary with grades 1 to 8 (PRY-UPR)', panelName: 'SSS-2 Sanskrit', postCode: '0010863', sanctionPost: 0 },
        {  blockName: 'Berasia', oisName: 'GMS VIRAH SHYAMKHEDI(1 to 8) (23320127802)', schoolCategory: 'Upper Primary with grades 1 to 8 (PRY-UPR)', panelName: 'SSS-2 English', postCode: '0010864', sanctionPost: 1 },
    ];

    const columns: TableColumn[] = [
        { field: 'blockName', header: 'Block Name' },
        { field: 'oisName', header: 'OIS Name (Code)' },
        { field: 'schoolCategory', header: 'School Category Details' },
        { field: 'panelName', header: 'Panel Name' },
        { field: 'postCode', header: 'Post Code' },
        { field: 'sanctionPost', header: 'Sanction Post' },
    ];

    const handleSearch = () => {
        setShowResults(true);
    };

    const handleClear = () => {
        setFormData({
            oisType: 'School',
            division: null,
            district: null,
            block: null,
            category: 'All',
            oisCode: '',
        });
        setShowResults(false);
    };

    return (
        <PageLayout title="Post Code Report">
            <div className="flex flex-col gap-4">
                <div className="border border-orange-200 rounded-xl p-6 relative bg-white mt-4">
                    <div className="absolute -top-4 left-6 bg-white px-4 py-1 rounded-lg  ">
                        <span className="text-blue-600 font-bold text-sm">Post Code Report</span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-4">
                        <div className="flex flex-col gap-2">
                            <label className=" text-sm font-medium">OIS Type</label>
                            <Dropdown
                                value={formData.oisType}
                                options={[{ label: 'School', value: 'School' }]}
                                onChange={(e) => setFormData({ ...formData, oisType: e.value })}
                                className="w-full"
                            />
                        </div>

                        <div className="flex flex-col gap-2">
                            <label className="   text-sm font-medium">Division Name (Code)</label>
                            <Dropdown
                                value={formData.division}
                                options={[{ label: 'Bhopal - ( 5 )', value: 'Bhopal' }]}
                                placeholder="All"
                                onChange={(e) => setFormData({ ...formData, division: e.value })}
                                className="w-full"
                            />
                        </div>

                        <div className="flex flex-col gap-2">
                            <label className="   text-sm font-medium">District Name (Code)</label>
                            <Dropdown
                                value={formData.district}
                                options={[{ label: 'Bhopal- (32)', value: 'Bhopal-32' }]}
                                placeholder="All"
                                onChange={(e) => setFormData({ ...formData, district: e.value })}
                                className="w-full"
                            />
                        </div>

                        <div className="flex flex-col gap-2">
                            <label className="   text-sm font-medium">Block Name (Code)</label>
                            <Dropdown
                                value={formData.block}
                                options={[{ label: 'Berasia-(209)', value: 'Berasia' }]}
                                placeholder="All"
                                onChange={(e) => setFormData({ ...formData, block: e.value })}
                                className="w-full"
                            />
                        </div>

                        <div className="flex flex-col gap-2">
                            <label className="   text-sm font-medium">Category Details (Code)</label>
                            <Dropdown
                                value={formData.category}
                                options={[{ label: 'All', value: 'All' }]}
                                onChange={(e) => setFormData({ ...formData, category: e.value })}
                                className="w-full"
                            />
                        </div>

                        <div className="flex flex-col gap-2">
                            <label className="   text-sm font-medium">OIS Code</label>
                            <Input 
                                value={formData.oisCode}
                                placeholder="Enter School UDISE Code"
                                onChange={(e) => setFormData({ ...formData, oisCode: e.target.value })}
                                className="w-full"
                            />
                        </div>
                    </div>

                    <div className="flex gap-4 mt-8">
                        <Button 
                            label="Search" 
                            onClick={handleSearch}
                            className="px-10 bg-[#00bfa5] border-none text-sm hover:bg-[#00897b]"
                        />
                        <Button 
                            label="Clear" 
                            onClick={handleClear}
                            className="p-button-danger p-button-outlined px-10 text-sm border-pink-200 text-pink-500"
                        />
                    </div>

                 
                </div>


                {showResults && (
                    <div className="border border-orange-200 rounded-xl p-6 relative bg-white mt-6 mb-10">
                        <div className="absolute -top-4 left-6 bg-white px-4 py-1 rounded-lg  ">
                            <span className="text-blue-600 font-bold text-sm">Details</span>
                        </div>

                        <div className="flex justify-between items-center mb-4">
                            <div className="flex items-center gap-2 text-sm">
                              
                            </div>
                            <div className="flex gap-2">
                                <Button label="Export To Excel" icon="pi pi-file-excel" className="p-button-outlined p-button-secondary p-button-sm text-gray-700" />
                                <span className="p-input-icon-left">
                                    <Input placeholder="Search..." className="p-inputtext-sm" />
                                </span>
                            </div>
                        </div>

                         <div className="overflow-hidden border border-gray-200 rounded">
                            <Table 
                                columns={columns} 
                                data={rows} 
                              
                            />
                        </div>

                        <div className="flex justify-between items-center mt-4 text-xs text-gray-600 font-medium">
                            <span>Page 1 of 41 (2016 items)</span>
                            <div className="flex items-center gap-2">
                                <Button icon="pi pi-chevron-left" className="p-button-text p-button-sm text-gray-400" />
                                <span className="px-3 py-1 bg-white border rounded">1</span>
                                <span>of 41</span>
                                <Button icon="pi pi-chevron-right" className="p-button-text p-button-sm text-gray-400" />
                            </div>
                        </div>
                    </div>
                )}
            </div>

            <div className="fixed bottom-6 right-6">
                <Button icon="pi pi-arrow-up" className="rounded-md shadow-lg p-2" style={{ backgroundColor: '#f97316', border: 'none' }} />
            </div>
            
            <style>{`
                .custom-post-table .p-datatable-thead > tr > th {
                    background-color: #ff8a50 !important;
                    color: white !important;
                    font-size: 12px;
                    padding: 10px;
                }
                .custom-post-table .p-datatable-tbody > tr > td {
                    font-size: 11.5px;
                    padding: 10px;
                    color: #4b5563;
                }
            `}</style>
        </PageLayout>
    );
};

export default PostCodeReport;