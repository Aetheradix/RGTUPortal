import React, { useState } from 'react';
import PageLayout from '../../../components/PageLayout';
import { Button } from 'primereact/button';
import {  Dropdown } from '../../../ui/shared';

interface InstituteRow {
    sNo: number;
    panel: string;
    sanctionPost: number;
    workingPost: number;
    vacantPost: number;
    surplusPost: number;
}

const InstituteSetup: React.FC = () => {
    const [isSearched, setIsSearched] = useState(false);
    const [searchFilters, setSearchFilters] = useState({
        academicYear: '2025-26',
        instituteTypeCode: null,
        instituteNameCode: null
    });

    const [rows, setRows] = useState<InstituteRow[]>([
        { sNo: 1, panel: 'SSS-1 Fine Art', sanctionPost: 0, workingPost: 0, vacantPost: 0, surplusPost: 0 },
        { sNo: 2, panel: 'SSS-1 Psychology', sanctionPost: 0, workingPost: 0, vacantPost: 0, surplusPost: 0 },
        { sNo: 3, panel: 'Director-ELTI', sanctionPost: 0, workingPost: 0, vacantPost: 0, surplusPost: 0 },
        { sNo: 4, panel: 'Director-SISE', sanctionPost: 0, workingPost: 0, vacantPost: 0, surplusPost: 0 },
        { sNo: 5, panel: 'PR-PGBT', sanctionPost: 0, workingPost: 0, vacantPost: 0, surplusPost: 0 },
        { sNo: 6, panel: 'PR-DIET', sanctionPost: 0, workingPost: 0, vacantPost: 0, surplusPost: 0 },
        { sNo: 7, panel: 'PR-HS', sanctionPost: 0, workingPost: 0, vacantPost: 0, surplusPost: 0 },
        { sNo: 8, panel: 'Vice-Principal', sanctionPost: 0, workingPost: 0, vacantPost: 0, surplusPost: 0 },
        { sNo: 9, panel: 'Lecturer-Physical Education', sanctionPost: 0, workingPost: 0, vacantPost: 0, surplusPost: 0 },
        { sNo: 10, panel: 'SSS-1 CC', sanctionPost: 0, workingPost: 0, vacantPost: 0, surplusPost: 0 },
        { sNo: 11, panel: 'PR-HSS', sanctionPost: 0, workingPost: 0, vacantPost: 0, surplusPost: 0 },
        { sNo: 12, panel: 'SSS-1 General', sanctionPost: 0, workingPost: 0, vacantPost: 0, surplusPost: 0 },
        { sNo: 13, panel: 'SSS-1 Counselor', sanctionPost: 0, workingPost: 0, vacantPost: 0, surplusPost: 0 },
        { sNo: 14, panel: 'SSS1-Hindi', sanctionPost: 0, workingPost: 0, vacantPost: 0, surplusPost: 0 },
        { sNo: 15, panel: 'SSS-1 English', sanctionPost: 0, workingPost: 0, vacantPost: 0, surplusPost: 0 },
        { sNo: 16, panel: 'SSS-1 Sanskrit', sanctionPost: 0, workingPost: 0, vacantPost: 0, surplusPost: 0 },
        { sNo: 17, panel: 'SSS-1 Urdu', sanctionPost: 0, workingPost: 0, vacantPost: 0, surplusPost: 0 },
        { sNo: 18, panel: 'SSS-1 Physics', sanctionPost: 0, workingPost: 0, vacantPost: 0, surplusPost: 0 },
        { sNo: 19, panel: 'SSS-1 Chemistry', sanctionPost: 0, workingPost: 0, vacantPost: 0, surplusPost: 0 },
        { sNo: 20, panel: 'SSS-1 Maths', sanctionPost: 0, workingPost: 0, vacantPost: 0, surplusPost: 0 },
        { sNo: 21, panel: 'SSS-1 Biology', sanctionPost: 0, workingPost: 0, vacantPost: 0, surplusPost: 0 },
        { sNo: 22, panel: 'SSS-1 History', sanctionPost: 0, workingPost: 0, vacantPost: 0, surplusPost: 0 },
        { sNo: 23, panel: 'SSS-1 Civics', sanctionPost: 0, workingPost: 0, vacantPost: 0, surplusPost: 0 },
        { sNo: 24, panel: 'SSS-1 Political Science', sanctionPost: 0, workingPost: 0, vacantPost: 0, surplusPost: 0 },
        { sNo: 25, panel: 'SSS-1 Economics', sanctionPost: 0, workingPost: 0, vacantPost: 0, surplusPost: 0 },
        { sNo: 26, panel: 'SSS-1 Agriculture', sanctionPost: 0, workingPost: 0, vacantPost: 0, surplusPost: 0 },
        { sNo: 27, panel: 'SSS-1 Home Science', sanctionPost: 0, workingPost: 0, vacantPost: 0, surplusPost: 0 },
        { sNo: 28, panel: 'SSS-1 Commerce', sanctionPost: 0, workingPost: 0, vacantPost: 0, surplusPost: 0 },
        { sNo: 29, panel: 'SSS-1 Vocational Education', sanctionPost: 0, workingPost: 0, vacantPost: 0, surplusPost: 0 },
        { sNo: 30, panel: 'SSS-1 Geography', sanctionPost: 0, workingPost: 0, vacantPost: 0, surplusPost: 0 },
        { sNo: 31, panel: 'SSS-1 Sociology', sanctionPost: 0, workingPost: 0, vacantPost: 0, surplusPost: 0 },
    ]);

    const handleSearch = () => {
        setIsSearched(true);
    };

    const handleClear = () => {
        setIsSearched(false);
        setSearchFilters({
            academicYear: '2025-26',
            instituteTypeCode: null,
            instituteNameCode: null
        });
    };

    const handleInputChange = (index: number, field: keyof InstituteRow, value: string) => {
        const updatedRows = [...rows];
        updatedRows[index] = { ...updatedRows[index], [field]: parseInt(value) || 0 };
        setRows(updatedRows);
    };

    const readonlyStyle = {
        backgroundColor: '#E5E7EB',
        cursor: 'not-allowed'
    };

    return (
        <PageLayout title="Institute Setup">
           
                <div className="border border-orange-200 p-4 rounded-md relative mt-4">
                    <span className="absolute -top-3 left-4 bg-white px-2 text-blue-600 font-bold text-sm">Institute Setup</span>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-2">
                        <Dropdown
                            label="Academic Year"
                            value={searchFilters.academicYear}
                            options={[{ label: '2025-26', value: '2025-26' }]}
                            onChange={(e) => setSearchFilters({ ...searchFilters, academicYear: e.value })}
                        />
                        <Dropdown
                            label="Institute Type (Code)" required
                            placeholder="Select"
                            value={searchFilters.instituteTypeCode}
                            options={[{ label: 'DIET/DRC- (30)', value: '30' }]}
                            onChange={(e) => setSearchFilters({ ...searchFilters, instituteTypeCode: e.value })}
                        />
                        <Dropdown
                            label="Institute Name (Code)" required
                            placeholder="Select"
                            value={searchFilters.instituteNameCode}
                            options={[{ label: 'DIET, INDORE- (232601IDS01)', value: 'INDORE' }]}
                            onChange={(e) => setSearchFilters({ ...searchFilters, instituteNameCode: e.value })}
                        />
                    </div>

                    {!isSearched && (
                        <div className="flex gap-2 mt-6  pt-4">
                           <Button label="Search" onClick={handleSearch} className="px-10 bg-green-600 border-none text-sm font-bold" />
                            <Button label="Clear" onClick={handleClear} className="p-button-danger p-button-outlined px-10 text-sm font-bold" />
                        </div>
                    )}
                </div>

                {isSearched && (
                    <div className="mt-6">
                        <div className="overflow-x-auto border rounded-md">
                            <table className="w-full text-left border-collapse">
                                <thead className="bg-gray-50 text-sm">
                                    <tr>
                                        <th className="p-3 border-b border-r w-16">S.No.</th>
                                        <th className="p-3 border-b border-r">Panel</th>
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
                                            <td className="p-2 border-b border-r text-sm">{row.panel}</td>
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

export default InstituteSetup;