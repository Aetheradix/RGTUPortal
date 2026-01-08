import React, { useState } from 'react';
import PageLayout from '../../../components/PageLayout';
import { Button } from 'primereact/button';
import { Input } from '../../../ui/shared';
import { DateInput } from '../../../ui/shared/Input';

const DepartmentEnquiryForm: React.FC = () => {
  const [formData, setFormData] = useState({
    employeeUniqueId: '',
    employeeName: '',
    designation: '',
    district: '',
    block: '',
    school: '',
    investigatingOfficer: '',
    presentingOfficer: '',
    noticeDate: null,
    suspensionDate: null,
    imputedDate: null,
    enquiryDate: null,
    firstHearingDate: null,
    prosecutionEvidenceDate: null,
    defenseEvidenceDate: null,
    briefMakingDate: null,
    counterArgumentDate: null,
    finalReportDate: null,
    remark: ''
  });

  const sectionHeaderStyle = "text-md font-semibold text-gray-700 mb-4 pb-2 border-b";

  return (
    <PageLayout title="Add Department Enquiry">
      <div className="space-y-6">
        
        {/* SECTION 1: Add Department Enquiry (Search) */}
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
            <Input 
              label="Employee Unique Id" required
              placeholder="Enter Employee Unique ID"
              value={formData.employeeUniqueId}
              onChange={(e) => setFormData({...formData, employeeUniqueId: e.target.value})}
            />
            <div className="flex gap-3  pt-4">
                      <Button label="Search" className="px-12" style={{ backgroundColor: '#6366F1', border: 'none' }} />
                      <Button type="button" label="Clear" className="p-button-danger p-button-outlined px-12" />
                    </div>
          </div>
        </div>

        {/* SECTION 2: Employee Information */}
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
          <h3 className={sectionHeaderStyle}>Employee Information</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 pt-4">
            <Input label="Employee Name" required placeholder="Enter Employee Name" />
            <Input label="Unique ID" required placeholder="Enter Unique ID" />
            <Input label="Designation" required placeholder="Enter Designation" />
            <Input label="District" required placeholder="Enter District" />
            <Input label="Block" required placeholder="Enter Block" />
            <Input label="School" required placeholder="Enter School" />
          </div>
        </div>

        {/* SECTION 3: Details of Updated Status */}
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
          <h3 className={sectionHeaderStyle}>
            Details Of Updated Status Of Departmental Investigation Related To Breach Of Confidentiality Of Board Examination
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 pt-4">
            <Input label="Name of departmental investigating officer" required placeholder="Enter Name" />
            <Input label="Name of Presenting Officer" required placeholder="Enter Name" />
            <DateInput label="Notice to delinquent officer to appear" required placeholder="dd/mm/yyyy" />
            
            <DateInput label="Suspension Date" required placeholder="dd/mm/yyyy" />
            <DateInput label="Imputed Date" required placeholder="dd/mm/yyyy" />
            <DateInput label="Brief Date of Departmental Enquiry" required placeholder="dd/mm/yyyy" />
            
            <DateInput label="First hearing of the criminal..." required placeholder="dd/mm/yyyy" />
            <DateInput label="Presentation of prosecution evidence" required placeholder="dd/mm/yyyy" />
            <DateInput label="Presentation of defense supporting evidence" required placeholder="dd/mm/yyyy" />
            
            <DateInput label="Presenting the Presenting Officer's Brief..." required placeholder="dd/mm/yyyy" />
            <DateInput label="Delinquent the employee's counter argument" required placeholder="dd/mm/yyyy" />
            <DateInput label="Dispatch of final investigation report" required placeholder="dd/mm/yyyy" />
          </div>
          
          <div className="mt-6">
            <Input label="Remark" required placeholder="Enter Remark" />
          </div>

         <div className="flex gap-3 justify-center pt-4">
                   <Button label="Save" className="px-12" style={{ backgroundColor: '#6366F1', border: 'none' }} />
                   <Button type="button" label="Clear" className="p-button-danger p-button-outlined px-12" />
                 </div>
        </div>

      
      </div>
    </PageLayout>
  );
};

export default DepartmentEnquiryForm;