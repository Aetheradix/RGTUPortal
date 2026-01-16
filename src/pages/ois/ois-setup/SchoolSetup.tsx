import React, { useState } from 'react';
import PageLayout from '../../../components/PageLayout';
import { Button } from 'primereact/button';
import { Dropdown } from '../../../ui/shared';

interface EnrollmentRow {
    srNo: number;
    className: string;
    enrollmentCount: number;
}

const SchoolSetup: React.FC = () => {
    const [isSearched, setIsSearched] = useState(false);
    const [searchFilters, setSearchFilters] = useState({
        academicYear: '2025-26',
        division: null,
        district: null,
        block: null,
        managementGroup: 'State Government - ( A )',
        managementDetails: 'Department of Education - ( 1 )',
        category: null,
        subCategory: null,
        udiseCode: null
    });

    const [rows, setRows] = useState<EnrollmentRow[]>([
        { srNo: 1, className: 'Class - 1', enrollmentCount: 5 },
        { srNo: 2, className: 'Class - 2', enrollmentCount: 2 },
        { srNo: 3, className: 'Class - 3', enrollmentCount: 4 },
        { srNo: 4, className: 'Class - 4', enrollmentCount: 7 },
        { srNo: 5, className: 'Class - 5', enrollmentCount: 5 },
        { srNo: 6, className: 'Class - 6', enrollmentCount: 37 },
        { srNo: 7, className: 'Class - 7', enrollmentCount: 57 },
        { srNo: 8, className: 'Class - 8', enrollmentCount: 41 },
        { srNo: 9, className: 'Class - 9', enrollmentCount: 158 },
        { srNo: 10, className: 'Class - 10', enrollmentCount: 170 },
        { srNo: 11, className: 'Class - 11', enrollmentCount: 122 },
        { srNo: 12, className: 'Class - 12', enrollmentCount: 138 },
    ]);

    const handleSearch = () => {
        setIsSearched(true);
    };

    const handleClear = () => {
        setIsSearched(false);
        setSearchFilters({
            academicYear: '2025-26',
            division: null,
            district: null,
            block: null,
            managementGroup: 'State Government - ( A )',
            managementDetails: 'Department of Education - ( 1 )',
            category: null,
            subCategory: null,
            udiseCode: null
        });
    };

    const handleCountChange = (index: number, value: string) => {
        const updatedRows = [...rows];
        updatedRows[index].enrollmentCount = parseInt(value) || 0;
        setRows(updatedRows);
    };

    const totalEnrollment = rows.reduce((sum, row) => sum + row.enrollmentCount, 0);

    return (
        <PageLayout title="School Setup">
         

                <div className=" p-4 rounded-md relative mt-4">
                    <span className="absolute -top-3 left-4 bg-white px-2 text-blue-600 font-bold text-sm">School Setup</span>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-2">
                        <Dropdown
                            label="Academic Year" required
                            value={searchFilters.academicYear}
                            options={[{ label: '2025-26', value: '2025-26' }]}
                            onChange={(e) => setSearchFilters({ ...searchFilters, academicYear: e.value })}
                        />
                        <Dropdown
                            label="Division (Code)" required
                            placeholder="Select"
                            value={searchFilters.division}
                            options={[]}
                            onChange={(e) => setSearchFilters({ ...searchFilters, division: e.value })}
                        />
                        <Dropdown
                            label="District (Code)" required
                            placeholder="Select"
                            value={searchFilters.district}
                            options={[]}
                            onChange={(e) => setSearchFilters({ ...searchFilters, district: e.value })}
                        />
                        <Dropdown
                            label="Block (Code)" required
                            placeholder="Select"
                            value={searchFilters.block}
                            options={[]}
                            onChange={(e) => setSearchFilters({ ...searchFilters, block: e.value })}
                        />
                        <Dropdown
                            label="Management Group (Code)"
                            value={searchFilters.managementGroup}
                            options={[{ label: 'State Government - ( A )', value: 'State Government - ( A )' }]}
                            onChange={(e) => setSearchFilters({ ...searchFilters, managementGroup: e.value })}
                        />
                        <Dropdown
                            label="Management Group Details (Code)"
                            value={searchFilters.managementDetails}
                            options={[{ label: 'Department of Education - ( 1 )', value: 'Department of Education - ( 1 )' }]}
                            onChange={(e) => setSearchFilters({ ...searchFilters, managementDetails: e.value })}
                        />
                        <Dropdown
                            label="School Category (Code)" required
                            placeholder="Select"
                            value={searchFilters.category}
                            options={[]}
                            onChange={(e) => setSearchFilters({ ...searchFilters, category: e.value })}
                        />
                        <Dropdown
                            label="School Sub Category Details (Code)" required
                            placeholder="Select"
                            value={searchFilters.subCategory}
                            options={[]}
                            onChange={(e) => setSearchFilters({ ...searchFilters, subCategory: e.value })}
                        />
                        <Dropdown
                            label="School UDISE (Code)" required
                            placeholder="Select"
                            value={searchFilters.udiseCode}
                            options={[]}
                            onChange={(e) => setSearchFilters({ ...searchFilters, udiseCode: e.value })}
                        />
                    </div>

                    <div className="flex gap-2 mt-4 pt-4">
                        <Button label="Search" onClick={handleSearch} className="px-10 bg-green-600 border-none text-sm font-bold" />
                        <Button label="Clear" onClick={handleClear} className="p-button-danger p-button-outlined px-10 text-sm font-bold" />
                    </div>
                    
                    <p className="text-red-600 text-[11px] font-bold mt-2">Note: All Asterisk (*) Marked Fields Are Mandatory</p>
                </div>

                {isSearched && (
                    <div className="mt-8  rounded-md relative p-4">
                        <span className="absolute -top-3 left-4 bg-white px-2 text-blue-600 font-bold text-sm">School Setup Detail</span>
                        
                        <div className="max-w-4xl mx-auto overflow-hidden border rounded-md mt-4">
                            <table className="w-full text-left border-collapse">
                                <thead style={{ backgroundColor: '#F39C12' }} className="text-white text-sm">
                                    <tr>
                                        <th className="p-2 border-b border-r w-24 text-center">Sr.No.</th>
                                        <th className="p-2 border-b border-r">Class</th>
                                        <th className="p-2 border-b">Enrollment Count</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {rows.map((row, index) => (
                                        <tr key={row.srNo}>
                                            <td className="p-2 border-b border-r text-center text-sm">{row.srNo}</td>
                                            <td className="p-2 border-b border-r text-sm text-center bg-gray-50">{row.className}</td>
                                            <td className="p-2 border-b">
                                                <input 
                                                    type="number" 
                                                    className="w-full border border-orange-300 rounded p-1 text-sm outline-none px-3" 
                                                    value={row.enrollmentCount}
                                                    onChange={(e) => handleCountChange(index, e.target.value)}
                                                />
                                            </td>
                                        </tr>
                                    ))}
                                    <tr className="bg-gray-100 font-bold">
                                        <td colSpan={2} className="p-3 border-r text-right text-sm uppercase">Total Enrollment Count:</td>
                                        <td className="p-2">
                                            <input 
                                                type="number" 
                                                className="w-full border border-gray-300 rounded p-1 text-sm bg-gray-200 outline-none px-3" 
                                                value={totalEnrollment} 
                                                readOnly 
                                            />
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                )}
            
        </PageLayout>
    );
};

export default SchoolSetup;