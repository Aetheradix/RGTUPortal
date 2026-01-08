import React, { useState } from 'react';
import PageLayout from '../../../components/PageLayout';
import { Button } from 'primereact/button';
import {  Dropdown } from '../../../ui/shared';

interface OfficeRow {
    sNo: number;
    designation: string;
    sanctionPost: number;
    workingPost: number;
    vacantPost: number;
    surplusPost: number;
}

const OfficeSetup: React.FC = () => {
    const [isSearched, setIsSearched] = useState(false);
    const [searchFilters, setSearchFilters] = useState({
        academicYear: '2025-26',
        officeTypeLevel: null,
        officeTypeCode: null,
        officeNameCode: null
    });

    const [rows, setRows] = useState<OfficeRow[]>([
        { sNo: 1, designation: 'Commissioner', sanctionPost: 0, workingPost: 0, vacantPost: 0, surplusPost: 0 },
        { sNo: 2, designation: 'Director', sanctionPost: 0, workingPost: 0, vacantPost: 0, surplusPost: 0 },
        { sNo: 3, designation: 'Additional Director', sanctionPost: 0, workingPost: 0, vacantPost: 0, surplusPost: 0 },
        { sNo: 4, designation: 'Joint Director', sanctionPost: 0, workingPost: 0, vacantPost: 0, surplusPost: 0 },
        { sNo: 5, designation: 'Deputy Director', sanctionPost: 0, workingPost: 0, vacantPost: 0, surplusPost: 0 },
        { sNo: 6, designation: 'Asstt Director', sanctionPost: 0, workingPost: 0, vacantPost: 0, surplusPost: 0 },
        { sNo: 7, designation: 'Regional Librarian', sanctionPost: 0, workingPost: 0, vacantPost: 0, surplusPost: 0 },
        { sNo: 8, designation: 'Planning Officer', sanctionPost: 0, workingPost: 0, vacantPost: 0, surplusPost: 0 },
        { sNo: 9, designation: 'Director (ELTI)', sanctionPost: 0, workingPost: 0, vacantPost: 0, surplusPost: 0 },
        { sNo: 10, designation: 'Director(SISE)', sanctionPost: 0, workingPost: 0, vacantPost: 0, surplusPost: 0 },
        { sNo: 11, designation: 'Principal (PGBT)', sanctionPost: 0, workingPost: 0, vacantPost: 0, surplusPost: 0 },
        { sNo: 12, designation: 'Principal HSS', sanctionPost: 0, workingPost: 0, vacantPost: 0, surplusPost: 0 },
        { sNo: 13, designation: 'Principal HS', sanctionPost: 0, workingPost: 0, vacantPost: 0, surplusPost: 0 },
        { sNo: 14, designation: 'Head Clerk', sanctionPost: 0, workingPost: 0, vacantPost: 0, surplusPost: 0 },
        { sNo: 15, designation: 'Accountant', sanctionPost: 0, workingPost: 0, vacantPost: 0, surplusPost: 0 },
        { sNo: 16, designation: 'Assistant', sanctionPost: 0, workingPost: 0, vacantPost: 0, surplusPost: 0 },
        { sNo: 17, designation: 'Sr Auditor', sanctionPost: 0, workingPost: 0, vacantPost: 0, surplusPost: 0 },
        { sNo: 18, designation: 'Jr Auditor', sanctionPost: 0, workingPost: 0, vacantPost: 0, surplusPost: 0 },
        { sNo: 19, designation: 'Asstt Grade-1', sanctionPost: 0, workingPost: 0, vacantPost: 0, surplusPost: 0 },
        { sNo: 20, designation: 'Asstt Grade-2', sanctionPost: 0, workingPost: 0, vacantPost: 0, surplusPost: 0 },
        { sNo: 21, designation: 'Asstt Grade-3', sanctionPost: 0, workingPost: 0, vacantPost: 0, surplusPost: 0 },
        { sNo: 22, designation: 'Clerk-Part Time', sanctionPost: 0, workingPost: 0, vacantPost: 0, surplusPost: 0 },
        { sNo: 23, designation: 'Superintendent', sanctionPost: 0, workingPost: 0, vacantPost: 0, surplusPost: 0 },
        { sNo: 24, designation: 'Asstt Supdt', sanctionPost: 0, workingPost: 0, vacantPost: 0, surplusPost: 0 },
        { sNo: 25, designation: 'Stenographer', sanctionPost: 0, workingPost: 0, vacantPost: 0, surplusPost: 0 },
        { sNo: 26, designation: 'Steno Typist', sanctionPost: 0, workingPost: 0, vacantPost: 0, surplusPost: 0 },
        { sNo: 27, designation: 'Driver', sanctionPost: 0, workingPost: 0, vacantPost: 0, surplusPost: 0 },
        { sNo: 28, designation: 'Supervisor', sanctionPost: 0, workingPost: 0, vacantPost: 0, surplusPost: 0 },
        { sNo: 29, designation: 'Daftari', sanctionPost: 0, workingPost: 0, vacantPost: 0, surplusPost: 0 },
        { sNo: 30, designation: 'Peon-Regular', sanctionPost: 0, workingPost: 0, vacantPost: 0, surplusPost: 0 },
        { sNo: 31, designation: 'Peon-Contractual', sanctionPost: 0, workingPost: 0, vacantPost: 0, surplusPost: 0 },
        { sNo: 32, designation: 'Peon-Daily Wages', sanctionPost: 0, workingPost: 0, vacantPost: 0, surplusPost: 0 },
        { sNo: 33, designation: 'Peon-Part Time', sanctionPost: 0, workingPost: 0, vacantPost: 0, surplusPost: 0 },
        { sNo: 34, designation: 'Sweeper', sanctionPost: 0, workingPost: 0, vacantPost: 0, surplusPost: 0 },
        { sNo: 35, designation: 'Assistant Engineer (Civil Works)', sanctionPost: 0, workingPost: 0, vacantPost: 0, surplusPost: 0 },
        { sNo: 36, designation: 'Sub Engineer', sanctionPost: 0, workingPost: 0, vacantPost: 0, surplusPost: 0 },
        { sNo: 37, designation: 'Data Entry Operator', sanctionPost: 0, workingPost: 0, vacantPost: 0, surplusPost: 0 },
        { sNo: 38, designation: 'Watchman', sanctionPost: 0, workingPost: 0, vacantPost: 0, surplusPost: 0 },
        { sNo: 39, designation: 'Assistant Statistical Officer', sanctionPost: 0, workingPost: 0, vacantPost: 0, surplusPost: 0 },
        { sNo: 40, designation: 'Peon Regular Contingent', sanctionPost: 0, workingPost: 0, vacantPost: 0, surplusPost: 0 },
        { sNo: 41, designation: 'Accounts Officer', sanctionPost: 0, workingPost: 0, vacantPost: 0, surplusPost: 0 },
        { sNo: 42, designation: 'Additional Mission Director', sanctionPost: 0, workingPost: 0, vacantPost: 0, surplusPost: 0 },
        { sNo: 43, designation: 'MANAGER', sanctionPost: 0, workingPost: 0, vacantPost: 0, surplusPost: 0 },
        { sNo: 44, designation: 'DY. MANAGER', sanctionPost: 0, workingPost: 0, vacantPost: 0, surplusPost: 0 },
        { sNo: 45, designation: 'Asst.Manager', sanctionPost: 0, workingPost: 0, vacantPost: 0, surplusPost: 0 },
        { sNo: 46, designation: 'Draftsman', sanctionPost: 0, workingPost: 0, vacantPost: 0, surplusPost: 0 },
        { sNo: 47, designation: 'ADMINSTRATOR', sanctionPost: 0, workingPost: 0, vacantPost: 0, surplusPost: 0 },
        { sNo: 48, designation: 'Asstt Director(Plan)', sanctionPost: 0, workingPost: 0, vacantPost: 0, surplusPost: 0 },
        { sNo: 49, designation: 'Asstt Director(Sports)', sanctionPost: 0, workingPost: 0, vacantPost: 0, surplusPost: 0 },
        { sNo: 50, designation: 'DPI', sanctionPost: 0, workingPost: 0, vacantPost: 0, surplusPost: 0 },
        { sNo: 51, designation: 'Principal Secratory', sanctionPost: 0, workingPost: 0, vacantPost: 0, surplusPost: 0 },
    ]);

    const handleSearch = () => {
        setIsSearched(true);
    };

    const handleClear = () => {
        setIsSearched(false);
        setSearchFilters({
            academicYear: '2025-26',
            officeTypeLevel: null,
            officeTypeCode: null,
            officeNameCode: null
        });
    };

    const handleInputChange = (index: number, field: keyof OfficeRow, value: string) => {
        const updatedRows = [...rows];
        updatedRows[index] = { ...updatedRows[index], [field]: parseInt(value) || 0 };
        setRows(updatedRows);
    };

    const readonlyStyle = {
        backgroundColor: '#E5E7EB',
        cursor: 'not-allowed'
    };

    return (
        <PageLayout title="Office Setup">
                <div className="border border-orange-200 p-4 rounded-md relative mt-4">
                    <span className="absolute -top-3 left-4 bg-white px-2 text-blue-600 font-bold text-sm">Office Setup</span>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-2">
                        <Dropdown
                            label="Academic Year" required
                            value={searchFilters.academicYear}
                            options={[{ label: '2025-26', value: '2025-26' }]}
                            onChange={(e) => setSearchFilters({ ...searchFilters, academicYear: e.value })}
                        />
                        <Dropdown
                            label="Office Type Level" required
                            placeholder="Select"
                            value={searchFilters.officeTypeLevel}
                            options={[{ label: 'State Level', value: 'State Level' }]}
                            onChange={(e) => setSearchFilters({ ...searchFilters, officeTypeLevel: e.value })}
                        />
                        <Dropdown
                            label="Office Type (Code)" required
                            placeholder="Select"
                            value={searchFilters.officeTypeCode}
                            options={[{ label: 'CMRISE ( 43 )', value: '43' }]}
                            onChange={(e) => setSearchFilters({ ...searchFilters, officeTypeCode: e.value })}
                        />
                        <Dropdown
                            label="Office Name (Code)" required
                            placeholder="Select"
                            value={searchFilters.officeNameCode}
                            options={[{ label: 'DPIM -(98269677123)', value: 'DPIM' }]}
                            onChange={(e) => setSearchFilters({ ...searchFilters, officeNameCode: e.value })}
                        />
                    </div>

                    {!isSearched && (
                        <div className="flex gap-2 mt-4 pt-4">
                            <Button label="Search" onClick={handleSearch} className="px-10 bg-green-600 border-none text-sm font-bold" />
                            <Button label="Clear" onClick={handleClear} className="p-button-danger p-button-outlined px-10 text-sm font-bold" />
                        </div>
                    )}
                </div>

                {isSearched && (
                    <div className="mt-6">
                        <p className="text-red-600 text-sm font-bold mb-4">Note: Only those record will be saved/update whose value is greater than zero</p>
                        
                        <div className="overflow-x-auto border rounded-md">
                            <table className="w-full text-left border-collapse">
                                <thead className="bg-gray-50 text-sm">
                                    <tr>
                                        <th className="p-3 border-b border-r w-16">S.No.</th>
                                        <th className="p-3 border-b border-r">Designation</th>
                                        <th className="p-3 border-b border-r">Sanction Post</th>
                                        <th className="p-3 border-b border-r">Working Post</th>
                                        <th className="p-3 border-b border-r">Vacant Post</th>
                                        <th className="p-3 border-b">Surplus Post</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {rows.map((row, index) => (
                                        <tr key={row.sNo} className="hover:bg-gray-50">
                                            <td className="p-2 border-b border-r text-center text-sm">{row.sNo}</td>
                                            <td className="p-2 border-b border-r text-sm">{row.designation}</td>
                                            <td className="p-2 border-b border-r">
                                                <input 
                                                    type="number" 
                                                    className="w-full border border-orange-300 rounded p-1 text-sm outline-none" 
                                                    value={row.sanctionPost}
                                                    onChange={(e) => handleInputChange(index, 'sanctionPost', e.target.value)}
                                                />
                                            </td>
                                            <td className="p-2 border-b border-r">
                                                <input 
                                                    type="number" 
                                                    className="w-full border border-gray-300 rounded p-1 text-sm outline-none" 
                                                    style={readonlyStyle}
                                                    value={row.workingPost}
                                                    readOnly
                                                />
                                            </td>
                                            <td className="p-2 border-b border-r">
                                                <input 
                                                    type="number" 
                                                    className="w-full border border-gray-300 rounded p-1 text-sm outline-none" 
                                                    style={readonlyStyle}
                                                    value={row.vacantPost}
                                                    readOnly
                                                />
                                            </td>
                                            <td className="p-2 border-b">
                                                <input 
                                                    type="number" 
                                                    className="w-full border border-gray-300 rounded p-1 text-sm outline-none" 
                                                    style={readonlyStyle}
                                                    value={row.surplusPost}
                                                    readOnly
                                                />
                                            </td>
                                        </tr>
                                    ))}
                                    <tr className="bg-gray-100 font-bold">
                                        <td colSpan={2} className="p-3 border-r text-sm">Grand Total</td>
                                        <td className="p-2 border-r">
                                            <input type="number" className="w-full border border-gray-300 rounded p-1 text-sm" style={readonlyStyle} value={0} readOnly />
                                        </td>
                                        <td className="p-2 border-r">
                                            <input type="number" className="w-full border border-gray-300 rounded p-1 text-sm" style={readonlyStyle} value={0} readOnly />
                                        </td>
                                        <td className="p-2 border-r">
                                            <input type="number" className="w-full border border-gray-300 rounded p-1 text-sm" style={readonlyStyle} value={0} readOnly />
                                        </td>
                                        <td className="p-2">
                                            <input type="number" className="w-full border border-gray-300 rounded p-1 text-sm" style={readonlyStyle} value={0} readOnly />
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className="flex gap-3 mt-6">
                            <Button label="Save" className="px-10 bg-green-600 border-none text-sm font-bold" />
                            <Button label="Clear" onClick={handleClear} className="p-button-danger p-button-outlined px-10 text-sm font-bold" />
                        </div>
                    </div>
                )}
           
        </PageLayout>
    );
};

export default OfficeSetup;