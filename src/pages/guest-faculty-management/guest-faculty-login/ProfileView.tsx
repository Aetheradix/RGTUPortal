import React, { useState } from 'react';
import PageLayout from '../../../components/PageLayout';
import { Input, Dropdown } from '../../../ui/shared';
import { DateInput } from '../../../ui/shared/Input';

const ProfileView: React.FC = () => {
  // 1. Profile Data State (Image se liya gaya content)
  const [profileData] = useState({
    nameEnglish: 'Raman Varma',
    nameHindi: 'रमण वर्मा',
    gender: 'Male',
    mobile: '9876543210',
    dob: new Date('1990-01-01'),
    category: 'General',
    fatherName: 'Mr. Satish Varma',
    motherName: 'Mrs. Shobha Varma',
    familySamagraId: '1234567890',
    maritalStatus: null,
    email: 'Ramanvarma@gmail.com'
  });

  // Disabled fields ka standard style
  const disabledStyle = {
    backgroundColor: '#E5E7EB',
    color: '#4B5563',
    cursor: 'not-allowed',
    border: '1px solid #D1D5DB'
  };


  return (
    <PageLayout title="Profile View">
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
        
       

        {/* Form Content (Image ke grid layout ke hisaab se) */}
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            
            <Input 
              label="Enter Name (English)" 
              value={profileData.nameEnglish} 
              disabled style={disabledStyle} 
            />

            <Input 
              label="Enter Name (Hindi)" 
              value={profileData.nameHindi} 
              disabled style={disabledStyle} 
            />

            <Dropdown 
              label="Select Gender" 
              value={profileData.gender} 
              options={[{label: 'Male', value: 'Male'}]}
              disabled style={disabledStyle} 
            />

            <Input 
              label="Enter Mobile" 
              value={profileData.mobile} 
              disabled style={disabledStyle} 
            />

            <DateInput 
              label="Select Date of Birth" 
              value={profileData.dob} 
              placeholder="01-01-1990"
              disabled style={disabledStyle} 
            />

            <Dropdown 
              label="Select Category" 
              value={profileData.category} 
              options={[{label: 'General', value: 'General'}]}
              disabled style={disabledStyle} 
            />

            <Input 
              label="Enter Father's Name" 
              value={profileData.fatherName} 
              disabled style={disabledStyle} 
            />

            <Input 
              label="Enter Mother's Name" 
              value={profileData.motherName} 
              disabled style={disabledStyle} 
            />

            <Input 
              label="Enter Family Samagra ID" 
              value={profileData.familySamagraId} 
              disabled style={disabledStyle} 
            />

            <Dropdown 
              label="Select Marital Status*" 
              placeholder="Married"
              value={profileData.maritalStatus} 
              options={[
                {label: 'Married', value: 'Married'},
                {label: 'Unmarried', value: 'Unmarried'}
              ]}
               disabled style={disabledStyle} 
            />

            <Input 
              label="Enter Email" 
              value={profileData.email} 
              disabled style={disabledStyle} 
            />

          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default ProfileView;