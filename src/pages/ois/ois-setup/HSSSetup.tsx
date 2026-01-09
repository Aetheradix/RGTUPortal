import React, { useState } from 'react';
import PageLayout from '../../../components/PageLayout';
import { Button } from 'primereact/button';
import { Dropdown } from '../../../ui/shared';

interface SubjectRow {
    srNo: number;
    subjectName: string;
    enrollmentCount: number;
    sanctionPost: number;
}

const HSSSetup: React.FC = () => {
    const [isSearched, setIsSearched] = useState(false);
    const [searchFilters, setSearchFilters] = useState({
        academicYear: '2025-26',
        division: null,
        district: null,
        block: null,
        managementGroup: 'State Government-(A)',
        managementDetails: 'Department of Education-(1)',
        subCategory: null,
        udiseCode: null
    });

    const [rows, setRows] = useState<SubjectRow[]>([
        { srNo: 1, subjectName: 'Hindi (HS/HSS Teachers)', enrollmentCount: 0, sanctionPost: 0 },
        { srNo: 2, subjectName: 'English (HS/HSS Teachers)', enrollmentCount: 0, sanctionPost: 0 },
        { srNo: 3, subjectName: 'Sanskrit (HS/HSS Teachers)', enrollmentCount: 0, sanctionPost: 0 },
        { srNo: 4, subjectName: 'Urdu (HS/HSS Teachers)', enrollmentCount: 0, sanctionPost: 0 },
        { srNo: 5, subjectName: 'Physics (HS/HSS Teachers)', enrollmentCount: 0, sanctionPost: 0 },
        { srNo: 6, subjectName: 'Chemistry (HS/HSS Teachers)', enrollmentCount: 0, sanctionPost: 0 },
        { srNo: 7, subjectName: 'Maths (HS/HSS Teachers)', enrollmentCount: 0, sanctionPost: 0 },
        { srNo: 8, subjectName: 'Biology (HS/HSS Teachers)', enrollmentCount: 0, sanctionPost: 0 },
        { srNo: 9, subjectName: 'History (HS/HSS Teachers)', enrollmentCount: 0, sanctionPost: 0 },
        { srNo: 10, subjectName: 'Civics (HS/HSS Teachers)', enrollmentCount: 0, sanctionPost: 0 },
        { srNo: 11, subjectName: 'Political Science (HS/HSS Teachers)', enrollmentCount: 0, sanctionPost: 0 },
        { srNo: 12, subjectName: 'Economics (HS/HSS Teachers)', enrollmentCount: 0, sanctionPost: 0 },
        { srNo: 13, subjectName: 'Agriculture (HS/HSS Teachers)', enrollmentCount: 0, sanctionPost: 0 },
        { srNo: 14, subjectName: 'Commerce (HS/HSS Teachers)', enrollmentCount: 0, sanctionPost: 0 },
        { srNo: 15, subjectName: 'Home Science (HS/HSS Teachers)', enrollmentCount: 0, sanctionPost: 0 },
        { srNo: 16, subjectName: 'Vocational Education (HS/HSS Teachers)', enrollmentCount: 0, sanctionPost: 0 },
        { srNo: 17, subjectName: 'Vocational Education (HS/HSS Teachers)', enrollmentCount: 0, sanctionPost: 0 },
        { srNo: 18, subjectName: 'Geography-HS/HSS teachers', enrollmentCount: 0, sanctionPost: 0 },
        { srNo: 19, subjectName: 'Sociology (HS/HSS Teachers)', enrollmentCount: 0, sanctionPost: 0 },
        { srNo: 20, subjectName: 'Fine Art (HS/HSS Teachers)', enrollmentCount: 0, sanctionPost: 0 },
        { srNo: 21, subjectName: 'Psychology (HS/HSS Teachers)', enrollmentCount: 0, sanctionPost: 0 },
        { srNo: 22, subjectName: 'General', enrollmentCount: 0, sanctionPost: 0 },
        { srNo: 23, subjectName: 'M.Ed', enrollmentCount: 0, sanctionPost: 0 },
    ]);

    const handleSearch = () => setIsSearched(true);
    
    const handleClear = () => {
        setIsSearched(false);
        setSearchFilters({
            academicYear: '2025-26',
            division: null,
            district: null,
            block: null,
            managementGroup: 'State Government-(A)',
            managementDetails: 'Department of Education-(1)',
            subCategory: null,
            udiseCode: null
        });
    };

    const updateValue = (index: number, field: 'enrollmentCount' | 'sanctionPost', value: string) => {
        const newRows = [...rows];
        newRows[index][field] = parseInt(value) || 0;
        setRows(newRows);
    };

    const grandTotalEnrollment = rows.reduce((acc, row) => acc + row.enrollmentCount, 0);
    const grandTotalSanction = rows.reduce((acc, row) => acc + row.sanctionPost, 0);

    return (
        <PageLayout title="HSS Setup">
           

                <div className="border border-orange-200 p-4 rounded-md relative mt-4">
                    <span className="absolute -top-3 left-4 bg-white px-2 text-blue-700 font-bold text-sm">11 to 12 School Setup</span>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-2">
                        <Dropdown label="Academic Year" required value={searchFilters.academicYear} options={[{ label: '2025-26', value: '2025-26' }]} onChange={(e) => setSearchFilters({...searchFilters, academicYear: e.value})} />
                        <Dropdown label="Division (Code)" required placeholder="Select" value={searchFilters.division} options={[]} onChange={(e) => setSearchFilters({...searchFilters, division: e.value})} />
                        <Dropdown label="District (Code)" required placeholder="Select" value={searchFilters.district} options={[]} onChange={(e) => setSearchFilters({...searchFilters, district: e.value})} />
                        <Dropdown label="Block (Code)" required placeholder="Select" value={searchFilters.block} options={[]} onChange={(e) => setSearchFilters({...searchFilters, block: e.value})} />
                        <Dropdown label="Management Group (Code)" value={searchFilters.managementGroup} options={[{ label: 'State Government-(A)', value: 'State Government-(A)' }]} onChange={(e) => setSearchFilters({...searchFilters, managementGroup: e.value})} />
                        <Dropdown label="Management Group Details (Code)" value={searchFilters.managementDetails} options={[{ label: 'Department of Education-(1)', value: 'Department of Education-(1)' }]} onChange={(e) => setSearchFilters({...searchFilters, managementDetails: e.value})} />
                        <Dropdown label="School Sub Category Details (Code)" required placeholder="Select" value={searchFilters.subCategory} options={[]} onChange={(e) => setSearchFilters({...searchFilters, subCategory: e.value})} />
                        <Dropdown label="School UDISE (Code)" required placeholder="Select" value={searchFilters.udiseCode} options={[]} onChange={(e) => setSearchFilters({...searchFilters, udiseCode: e.value})} />
                    </div>

                    <div className="flex gap-2 mt-4 pt-4">
                        <Button label="Search" onClick={handleSearch} className="px-10 bg-green-600 border-none text-sm font-bold" />
                        <Button label="Clear" onClick={handleClear} className="p-button-danger p-button-outlined px-10 text-sm font-bold" />
                    </div>
                    <p className="text-red-600 text-[11px] font-bold mt-2">Note: All Asterisk (*) Marked Fields Are Mandatory</p>
                </div>

                {isSearched && (
                    <div className="mt-8 border border-orange-200 rounded-md relative p-4">
                        <span className="absolute -top-3 left-4 bg-white px-2 text-blue-700 font-bold text-sm">Details</span>
                        
                        <div className="overflow-x-auto border rounded-md mt-4">
                            <table className="w-full text-left border-collapse">
                                <thead style={{ backgroundColor: '#F39C12' }} className="text-white text-sm">
                                    <tr>
                                        <th className="p-2 border-b border-r w-20 text-center">Sr.No.</th>
                                        <th className="p-2 border-b border-r">Subject Name</th>
                                        <th className="p-2 border-b border-r">Enrollment Count</th>
                                        <th className="p-2 border-b">Sanction Post</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {rows.map((row, index) => (
                                        <tr key={row.srNo}>
                                            <td className="p-2 border-b border-r text-center text-sm">{row.srNo}</td>
                                            <td className="p-2 border-b border-r text-sm bg-gray-50">{row.subjectName}</td>
                                            <td className="p-2 border-b border-r">
                                                <input 
                                                    type="number" 
                                                    className="w-full border border-orange-300 rounded p-1 text-sm outline-none px-3" 
                                                    value={row.enrollmentCount}
                                                    onChange={(e) => updateValue(index, 'enrollmentCount', e.target.value)}
                                                />
                                            </td>
                                            <td className="p-2 border-b">
                                                <input 
                                                    type="number" 
                                                    className="w-full border border-orange-300 rounded p-1 text-sm outline-none px-3" 
                                                    value={row.sanctionPost}
                                                    onChange={(e) => updateValue(index, 'sanctionPost', e.target.value)}
                                                />
                                            </td>
                                        </tr>
                                    ))}
                                    <tr className="bg-gray-100 font-bold">
                                        <td colSpan={2} className="p-2 border-r text-sm text-center">Grand Total</td>
                                        <td className="p-2 border-r">
                                            <input type="number" readOnly className="w-full border border-gray-300 bg-gray-200 rounded p-1 text-sm px-3" value={grandTotalEnrollment} />
                                        </td>
                                        <td className="p-2">
                                            <input type="number" readOnly className="w-full border border-gray-300 bg-gray-200 rounded p-1 text-sm px-3" value={grandTotalSanction} />
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="flex gap-2 mt-6">
                            <Button label="Save" className="px-10 bg-green-600 border-none text-sm font-bold" />
                            <Button label="Clear" onClick={handleClear} className="p-button-danger p-button-outlined px-10 text-sm font-bold" />
                        </div>
                    </div>
                )}
        </PageLayout>
    );
};

export default HSSSetup;