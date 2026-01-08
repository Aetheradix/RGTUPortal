import React, { useState } from 'react';
import PageLayout from '../../../components/PageLayout';
import { Button } from 'primereact/button';
import { Input, Dropdown } from '../../../ui/shared';
import { DateInput } from '../../../ui/shared/Input';
import { Checkbox } from 'primereact/checkbox';

const ApplyTour: React.FC = () => {
  const [formData, setFormData] = useState({
    tourType: null as string | null,
    tourName: '',
    fromDate: null as Date | null,
    toDate: null as Date | null,
    isActive: false
  });

  const tourOptions = [
    { label: 'Official Tour', value: 'official' },
    { label: 'Education Tour', value: 'education' },
    { label: 'Training Tour', value: 'training' }
  ];


  return (
    <PageLayout title="Apply Tour">
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 mb-8">
        <form className="space-y-8">
          {/* First Row: 3 Columns */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Dropdown 
              label="Select Tour Type" 
              placeholder="Select"
              value={formData.tourType}
              options={tourOptions}
              onChange={(e) => setFormData({ ...formData, tourType: e.value })}
            />

            <Input 
              label="Enter Tour Name" 
              placeholder="Enter Tour Tour" 
              value={formData.tourName}
              onChange={(e) => setFormData({ ...formData, tourName: e.target.value })}
            />

            <DateInput 
              label="Select From Date" 
              placeholder="dd-mm-yyyy"
              value={formData.fromDate}
              onChange={(e) => setFormData({ ...formData, fromDate: e.value as Date })}
            />

            <DateInput 
              label="Select To Date" 
              placeholder="dd-mm-yyyy"
              value={formData.toDate}
              onChange={(e) => setFormData({ ...formData, toDate: e.value as Date })}
            />

            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-gray-700">Status</label>
              <div className="flex items-center gap-2 mt-2">
                <Checkbox 
                  inputId="isActive" 
                  onChange={e => setFormData({ ...formData, isActive: e.checked ?? false })} 
                  checked={formData.isActive} 
                />
                <label htmlFor="isActive" className="text-sm text-gray-600">Active</label>
              </div>
            </div>
            
          
          </div>

         <div className="flex gap-3 justify-center pt-4">
                     <Button label="Save" className="px-12" style={{ backgroundColor: '#6366F1', border: 'none' }} />
                     <Button type="button" label="Clear" className="p-button-danger p-button-outlined px-12" />
                   </div>
        </form>
      </div>
    </PageLayout>
  );
};

export default ApplyTour;