import React, { useState } from 'react';
import PageLayout from '../../../components/PageLayout';
import { Button } from 'primereact/button';
import { Dropdown, Input } from '../../../ui/shared';

interface SchoolDataRow {
    srNo: number;
    name: string;
    proposedNew: number;
    approvedNew: number;
    proposedMerged: number;
    approvedMerged: number;
    proposedClosed: number;
    approvedClosed: number;
    proposedUpdate: number;
    approvedUpdate: number;
}

const DistrictWisePublishSchools: React.FC = () => {
    const [viewLevel, setViewLevel] = useState<'district' | 'block' | 'sankul'>('district');
    const [showResults, setShowResults] = useState(false);
    const [breadcrumbs, setBreadcrumbs] = useState<string[]>(['District']);

    const [formData] = useState({
        district: 'Bhopal',
        managementGroup: 'State Government',
        managementGroupDetail: 'Department of Education',
        category: 'Higher Secondary School',
        categoryDetails: 'Higher Secondary with grades 6 to 12 (UP...'
    });

    const districtData: SchoolDataRow[] = [
        { srNo: 1, name: 'Bhopal', proposedNew: 9, approvedNew: 9, proposedMerged: 0, approvedMerged: 0, proposedClosed: 0, approvedClosed: 0, proposedUpdate: 0, approvedUpdate: 0 }
    ];

    const blockData: SchoolDataRow[] = [
        { srNo: 1, name: 'Berasia', proposedNew: 3, approvedNew: 3, proposedMerged: 0, approvedMerged: 0, proposedClosed: 0, approvedClosed: 0, proposedUpdate: 0, approvedUpdate: 0 },
        { srNo: 2, name: 'Phanda Gramin', proposedNew: 2, approvedNew: 2, proposedMerged: 0, approvedMerged: 0, proposedClosed: 0, approvedClosed: 0, proposedUpdate: 0, approvedUpdate: 0 },
        { srNo: 3, name: 'Phanda URBAN- New City', proposedNew: 4, approvedNew: 4, proposedMerged: 0, approvedMerged: 0, proposedClosed: 0, approvedClosed: 0, proposedUpdate: 0, approvedUpdate: 0 },
    ];

    const handleDrillDown = (_name: string) => {
        if (viewLevel === 'district') {
            setViewLevel('block');
            setBreadcrumbs(['District', 'Block']);
        } else if (viewLevel === 'block') {
            setViewLevel('sankul');
            setBreadcrumbs(['District', 'Block', 'Sankul']);
        }
    };

    const resetView = () => {
        setViewLevel('district');
        setBreadcrumbs(['District']);
    };

    return (
        <PageLayout title="District-Wise Publish Schools">
            <div className="flex flex-col gap-6 w-full">
                <div className="border border-orange-200 rounded-xl p-6 relative bg-white shadow-sm">
                    <div className="absolute -top-4 left-6 bg-white  px-5 py-1 rounded-lg">
                        <span className="text-blue-600 font-bold text-base">Filters</span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-4">
                        <div className="flex flex-col gap-2">
                            <label className=" text-sm font-medium">District Name <span className="text-red-500">*</span></label>
                            <Dropdown value={formData.district} options={[{label: 'Bhopal', value: 'Bhopal'}]} className="w-full h-11" />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className=" text-sm font-medium">Management Group <span className="text-red-500">*</span></label>
                            <Dropdown value={formData.managementGroup} options={[]} className="w-full h-11" />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className=" text-sm font-medium">Management Group Detail <span className="text-red-500">*</span></label>
                            <Dropdown value={formData.managementGroupDetail} options={[]} className="w-full h-11" />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className=" text-sm font-medium">Category <span className="text-red-500">*</span></label>
                            <Dropdown value={formData.category} options={[]} className="w-full h-11" />
                        </div>
                        <div className="flex flex-col gap-2 ">
                            <label className="   text-sm font-medium">Category Details <span className="text-red-500">*</span></label>
                            <Dropdown value={formData.categoryDetails} options={[]} className="w-full h-11" />
                        </div>
                    </div>

                    <div className="flex gap-4 mt-8 pt-6 border-t border-gray-100">
                        <Button label="Search" onClick={() => setShowResults(true)} className="px-10 bg-green-600 border-none text-sm"/>
                        <Button label="Clear" onClick={() => {setShowResults(false); resetView();}}  className="p-button-danger p-button-outlined px-10 text-sm" />
                    </div>
                       <div className="mt-4">
                        <p className="text-[#ff0000] font-bold text-xs italic">Note: All Asterisk (*) Marked Fields Are Mandatory</p>
                    </div>
                </div>

                {showResults && (
                    <div className="border border-orange-200 rounded-xl p-8 relative bg-white mt-10 mb-20 shadow-md">
                        <div className="absolute -top-5 left-6 bg-white  px-6 py-2 rounded-lg">
                            <span className="text-blue-600 font-bold text-base ">Report Details</span>
                        </div>

                        <div className="flex flex-wrap justify-between items-center gap-4 mb-6">
                            <div className="flex items-center gap-3 bg-gray-50 px-4 py-2 rounded-full border border-gray-200">
                                {breadcrumbs.map((crumb, index) => (
                                    <React.Fragment key={crumb}>
                                        <span className="text-gray-700 font-bold text-sm tracking-wide">{crumb}</span>
                                        {index < breadcrumbs.length - 1 && <i className="pi pi-chevron-right text-xs text-gray-400" />}
                                    </React.Fragment>
                                ))}
                            </div>
                             <div className="flex gap-2">
                             <Button label="Print Excel" icon="pi pi-file-excel" className="p-button-outlined p-button-secondary p-button-sm" />
                             <span className="p-input-icon-left">
                            <Input placeholder="Search..." className="p-inputtext-sm" />
                             </span>
                             </div>
                        </div>

                        <div className="overflow-x-auto rounded-lg border border-gray-300">
                            <table className="w-full text-sm border-collapse min-w-250">
                                <thead>
                                    <tr className="bg-gray-100 text-[#1e1b4b]">
                                        <th rowSpan={2} className="border border-gray-300 p-4 text-center font-bold">Sr. No</th>
                                        <th rowSpan={2} className="border border-gray-300 p-4 text-left font-bold uppercase tracking-wider">{viewLevel}</th>
                                        <th colSpan={2} className="border border-gray-300 p-4 text-center font-bold">New Schools to be opened</th>
                                        <th colSpan={2} className="border border-gray-300 p-4 text-center font-bold">Schools to be Merged</th>
                                        <th colSpan={2} className="border border-gray-300 p-4 text-center font-bold">Schools to be Closed</th>
                                        <th colSpan={2} className="border border-gray-300 p-4 text-center font-bold">Schools to be Update</th>
                                    </tr>
                                    <tr className="bg-gray-50 text-gray-600">
                                        <th className="border border-gray-300 p-3 font-semibold">Proposed</th>
                                        <th className="border border-gray-300 p-3 font-semibold">Approved</th>
                                        <th className="border border-gray-300 p-3 font-semibold">Proposed</th>
                                        <th className="border border-gray-300 p-3 font-semibold">Approved</th>
                                        <th className="border border-gray-300 p-3 font-semibold">Proposed</th>
                                        <th className="border border-gray-300 p-3 font-semibold">Approved</th>
                                        <th className="border border-gray-300 p-3 font-semibold">Proposed</th>
                                        <th className="border border-gray-300 p-3 font-semibold">Approved</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {(viewLevel === 'district' ? districtData : blockData).map((row) => (
                                        <tr key={row.srNo} className="hover:bg-blue-50 transition-colors">
                                            <td className="border border-gray-300 p-4 text-center">{row.srNo}</td>
                                            <td className="border border-gray-300 p-4 text-left">
                                                <button onClick={() => handleDrillDown(row.name)} className="text-blue-600 hover:text-blue-800 hover:underline font-bold text-base">
                                                    {row.name}
                                                </button>
                                            </td>
                                            <td className="border border-gray-300 p-4 text-center text-gray-700">{row.proposedNew}</td>
                                            <td className="border border-gray-300 p-4 text-center text-gray-700">{row.approvedNew}</td>
                                            <td className="border border-gray-300 p-4 text-center text-gray-700">{row.proposedMerged}</td>
                                            <td className="border border-gray-300 p-4 text-center text-gray-700">{row.approvedMerged}</td>
                                            <td className="border border-gray-300 p-4 text-center text-gray-700">{row.proposedClosed}</td>
                                            <td className="border border-gray-300 p-4 text-center text-gray-700">{row.approvedClosed}</td>
                                            <td className="border border-gray-300 p-4 text-center text-gray-700">{row.proposedUpdate}</td>
                                            <td className="border border-gray-300 p-4 text-center text-gray-700">{row.approvedUpdate}</td>
                                        </tr>
                                    ))}
                                    <tr className="bg-[#fdf7dc] font-bold  text-[#92400e]">
                                        <td colSpan={2} className="border border-gray-300 p-5 text-center uppercase">Total Summary</td>
                                        <td className="border border-gray-300 p-5 text-center ">9</td>
                                        <td className="border border-gray-300 p-5 text-center ">9</td>
                                        <td className="border border-gray-300 p-5 text-center ">0</td>
                                        <td className="border border-gray-300 p-5 text-center ">0</td>
                                        <td className="border border-gray-300 p-5 text-center ">0</td>
                                        <td className="border border-gray-300 p-5 text-center ">0</td>
                                        <td className="border border-gray-300 p-5 text-center ">0</td>
                                        <td className="border border-gray-300 p-5 text-center ">0</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                )}
            </div>
        </PageLayout>
    );
};

export default DistrictWisePublishSchools;