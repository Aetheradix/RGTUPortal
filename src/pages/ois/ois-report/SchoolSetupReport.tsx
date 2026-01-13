import React, { useState } from 'react';
import PageLayout from '../../../components/PageLayout';
import { Button } from 'primereact/button';
import { Dropdown, Input } from '../../../ui/shared';
import { RadioButton } from 'primereact/radiobutton';

const SchoolSetupReport: React.FC = () => {
    const [searchType, setSearchType] = useState('udise');
    const [formData, setFormData] = useState({
        academicYear: '2025-26',
        udiseCode: '',
        division: null,
        district: null,
        block: 'All',
        managementGroup: 'State Government - ( A )',
        managementGroupDetails: 'Department of Education - ( 1 )',
        schoolCategory: 'All',
        schoolSubCategory: null
    });

    const handleClear = () => {
        setFormData({
            academicYear: '2025-26',
            udiseCode: '',
            division: null,
            district: null,
            block: 'All',
            managementGroup: 'State Government - ( A )',
            managementGroupDetails: 'Department of Education - ( 1 )',
            schoolCategory: 'All',
            schoolSubCategory: null
        });
    };

    return (
        <PageLayout title="School Setup Report">
            <div className="flex flex-col gap-4">
                
                <div className="border border-orange-200 rounded-xl p-6 relative bg-white mt-4">
                    <div className="absolute -top-4 left-6 bg-white  px-4 py-1 rounded-lg">
                        <span className="text-blue-600 font-bold text-sm">Note</span>
                    </div>
                    <div className="mt-2 text-sm">
                        <span className="text-[#4338ca] font-bold underline cursor-pointer">Click here</span>
                        <span className="text-[#1e1b4b] ml-1 font-medium">To download All category School Setup</span>
                    </div>
                </div>

                <div className="border border-orange-200 rounded-xl p-8 relative bg-white mt-6">
                    <div className="absolute -top-4 left-6 bg-white  px-4 py-1 rounded-lg">
                        <span className="text-blue-600 font-bold text-sm">School Setup Report</span>
                    </div>

                    <div className="flex gap-10 mb-8 mt-2">
                        <div className="flex items-center">
                            <RadioButton 
                                inputId="type1" 
                                name="searchType" 
                                value="udise" 
                                onChange={(e) => setSearchType(e.value)} 
                                checked={searchType === 'udise'} 
                                className="custom-radio"
                            />
                            <label htmlFor="type1" className="ml-2 text-blue-600  font-medium text-sm cursor-pointer">By UDISE Code</label>
                        </div>
                        <div className="flex items-center">
                            <RadioButton 
                                inputId="type2" 
                                name="searchType" 
                                value="filter" 
                                onChange={(e) => setSearchType(e.value)} 
                                checked={searchType === 'filter'} 
                            />
                            <label htmlFor="type2" className="ml-2 text-blue-600  font-medium text-sm cursor-pointer">By Filter</label>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                        <div className="flex flex-col gap-2">
                            <label className="  text-sm font-medium">Academic Year</label>
                            <Dropdown
                                value={formData.academicYear}
                                options={[{ label: '2025-26', value: '2025-26' }]}
                                onChange={(e) => setFormData({ ...formData, academicYear: e.value })}
                                className="w-full"
                            />
                        </div>

                        {searchType === 'udise' ? (
                            <div className="flex flex-col gap-2">
                                <label className="  text-sm font-medium">
                                    School UDISE (Code) <span className="text-red-600">*</span>
                                </label>
                                <Input
                                    value={formData.udiseCode}
                                    onChange={(e) => setFormData({ ...formData, udiseCode: e.target.value })}
                                    placeholder="Enter School UDISE (Code)"
                                    className="w-full"
                                />
                            </div>
                        ) : (
                            <>
                                <div className="flex flex-col gap-2">
                                    <label className="  text-sm font-medium">Division (Code) <span className="text-red-600">*</span></label>
                                    <Dropdown
                                        value={formData.division}
                                        options={[]}
                                        placeholder="Select"
                                        onChange={(e) => setFormData({ ...formData, division: e.value })}
                                    />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label className="  text-sm font-medium">District (Code) <span className="text-red-600">*</span></label>
                                    <Dropdown
                                        value={formData.district}
                                        options={[]}
                                        placeholder="Select"
                                        onChange={(e) => setFormData({ ...formData, district: e.value })}
                                    />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label className="  text-sm font-medium">Block (Code)</label>
                                    <Dropdown
                                        value={formData.block}
                                        options={[{label: 'All', value: 'All'}]}
                                        onChange={(e) => setFormData({ ...formData, block: e.value })}
                                    />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label className="  text-sm font-medium">Management Group (Code)</label>
                                    <Dropdown
                                        value={formData.managementGroup}
                                        options={[{label: 'State Government - ( A )', value: 'State Government - ( A )'}]}
                                        onChange={(e) => setFormData({ ...formData, managementGroup: e.value })}
                                    />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label className="  text-sm font-medium">Management Group Details (Code)</label>
                                    <Dropdown
                                        value={formData.managementGroupDetails}
                                        options={[{label: 'Department of Education - ( 1 )', value: 'Department of Education - ( 1 )'}]}
                                        onChange={(e) => setFormData({ ...formData, managementGroupDetails: e.value })}
                                    />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label className="  text-sm font-medium">School Category (Code)</label>
                                    <Dropdown
                                        value={formData.schoolCategory}
                                        options={[{label: 'All', value: 'All'}]}
                                        onChange={(e) => setFormData({ ...formData, schoolCategory: e.value })}
                                    />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label className="  text-sm font-medium">School Sub Category Details (Code) <span className="text-red-600">*</span></label>
                                    <Dropdown
                                        value={formData.schoolSubCategory}
                                        options={[]}
                                        placeholder="Select"
                                        onChange={(e) => setFormData({ ...formData, schoolSubCategory: e.value })}
                                    />
                                </div>
                            </>
                        )}
                    </div>

                    <div className="border-t border-gray-200 my-8"></div>

                    <div className="flex gap-4">
                        <Button 
                            label="Search" 
                           className="px-10 bg-green-600 border-none text-sm"
                        />
                        <Button 
                            label="Clear" 
                            onClick={handleClear}
                            className="p-button-danger p-button-outlined px-10 text-sm"
                        />
                    </div>

                    <div className="mt-6">
                        <p className="text-[#ff0000] font-bold text-sm italic">Note: All Asterisk (*) Marked Fields Are Mandatory</p>
                    </div>
                </div>
            </div>
        </PageLayout>
    );
};

export default SchoolSetupReport;