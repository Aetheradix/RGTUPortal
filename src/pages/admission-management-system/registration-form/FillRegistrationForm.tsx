import React, { useState } from "react";
import PageLayout from "../../../components/PageLayout";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { Calendar } from "primereact/calendar";
import { Checkbox } from "primereact/checkbox";

const StudentAdmissionForm: React.FC = () => {
  const [formData, setFormData] = useState({
    sameAsPresent: true,
  });

  // Custom style for standard HTML select to match PrimeReact look
  const selectStyle =
    "w-full p-inputtext p-component border border-gray-300 rounded-md p-2 bg-white focus:border-blue-500 focus:shadow-none outline-none";

  return (
    <PageLayout title="Student Personal Details">
      {/* Top Bar with Go Back */}
      <div className="flex justify-end mb-4">
        <Button
          label="Go Back"
          className="p-button-secondary bg-indigo-500 border-none text-white px-4 py-2 text-sm"
        />
      </div>

      <form className="space-y-8 bg-white p-4 rounded-lg shadow-sm">
        {/* --- Section 1: Personal Details --- */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Application Number
            </label>
            <InputText
              className="w-full"
              placeholder="Enter Application Number"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Select Allocation Status
            </label>
            <select className={selectStyle}>
              <option value="">Select</option>
              <option value="round1">Round 1</option>
              <option value="round2">Round 2</option>
              <option value="round3">Round 3</option>
              <option value="clc">CLC Round (College level counseling)</option>
            </select>
          </div>
          <div className="md:col-span-2"></div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Student First Name <span className="text-red-500">*</span>
            </label>
            <InputText
              className="w-full"
              placeholder="Student First Name"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Student Last Name <span className="text-red-500">*</span>
            </label>
            <InputText
              className="w-full"
              placeholder="Student Last Name"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Date of Birth <span className="text-red-500">*</span>
            </label>
            <Calendar className="w-full" placeholder="dd/mm/yyyy" showIcon />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Select Gender <span className="text-red-500">*</span>
            </label>
            <select className={selectStyle}>
              <option value="">Select</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>

          {/* Parents Info */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Father's Name <span className="text-red-500">*</span>
            </label>
            <InputText className="w-full" placeholder="Enter Father's Name" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Father Occupation
            </label>
            <InputText
              className="w-full"
              placeholder="Enter Father Occupation"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Mother's Name <span className="text-red-500">*</span>
            </label>
            <InputText className="w-full" placeholder="Enter Mother's Name" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Mother Occupation
            </label>
            <InputText
              className="w-full"
              placeholder="Enter Mother Occupation"
            />
          </div>

          {/* Other Details */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Select Marital Status <span className="text-red-500">*</span>
            </label>
            <select className={selectStyle}>
              <option value="">Select</option>
              <option value="single">Single</option>
              <option value="married">Married</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Select Blood Group <span className="text-red-500">*</span>
            </label>
            <select className={selectStyle}>
              <option value="">Select</option>
              <option value="A+">A+</option>
              <option value="O+">O+</option>
              <option value="O+">AB</option>
              <option value="O+">B</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Religion <span className="text-red-500">*</span>
            </label>
            <select className={selectStyle}>
              <option value="">Select</option>
              <option value="hindu">Hindu</option>
              <option value="muslim">Muslim</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Select Category <span className="text-red-500">*</span>
            </label>
            <select className={selectStyle}>
              <option value="">Select Category</option>
              <option value="gen">General</option>
              <option value="obc">OBC</option>
              <option value="sc">SC</option>
              <option value="st">ST</option>
            </select>
          </div>
        </div>

        <hr className="border-gray-200" />

        <h3 className="text-lg font-bold text-gray-800">Address Information</h3>

        <h4 className="font-semibold text-gray-600 -mb-2">Present Address</h4>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Select State <span className="text-red-500">*</span>
            </label>
            <select className={selectStyle}>
              <option value="">Select</option>
              <option value="rajasthan">Rajasthan</option>
              <option value="madhya_pradesh">Madhya Pradesh</option>
              <option value="maharashtra">Maharashtra</option>
              <option value="uttar_pradesh">Uttar Pradesh</option>
              <option value="gujarat">Gujarat</option>
              <option value="karnataka">Karnataka</option>
              <option value="andhra_pradesh">Andhra Pradesh</option>
              <option value="odisha">Odisha</option>
              <option value="chhattisgarh">Chhattisgarh</option>
              <option value="tamil_nadu">Tamil Nadu</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Select Division <span className="text-red-500">*</span>
            </label>
            <select className={selectStyle}>
              <option value="">Select</option>
              <option value="">Bhoapl</option>
              <option value="">Sagar</option>
              <option value="">Indore</option>
              <option value="">Ujjain</option>
              <option value="">Jabalpur</option>
              <option value="">Katni</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Select District <span className="text-red-500">*</span>
            </label>
            <select className={selectStyle}>
              <option value="">Select</option>
              <option value="indore">Indore</option>
              <option value="bhopal">Bhopal</option>
              <option value="jabalpur">Jabalpur</option>
              <option value="gwalior">Gwalior</option>
              <option value="ujjain">Ujjain</option>
              <option value="morena">Morena</option>
              <option value="dhar">Dhar</option>
              <option value="ratlam">Ratlam</option>
              <option value="sagar">Sagar</option>
              <option value="rewa">Rewa</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Select Block <span className="text-red-500">*</span>
            </label>
            <select className={selectStyle}>
              <option value="">Select</option>
              <option value="bichhiya">Bichhiya (Mandla)</option>
              <option value="bijadandi">Bijadandi (Mandla)</option>
              <option value="vidisha">Vidisha (Vidisha)</option>
              <option value="basoda">Basoda (Vidisha)</option>
              <option value="gyaraspur">Gyaraspur (Vidisha)</option>
              <option value="jhabua">Jhabua (Jhabua)</option>
              <option value="thandla">Thandla (Jhabua)</option>
              <option value="bada_malhera">Bada Malhera (Chhatarpur)</option>
              <option value="bijawar">Bijawar (Chhatarpur)</option>
              <option value="guna">Guna (Guna)</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Pincode <span className="text-red-500">*</span>
            </label>
            <InputText className="w-full" placeholder="Enter Pincode" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Address line 1 <span className="text-red-500">*</span>
            </label>
            <InputText className="w-full" placeholder="Enter Address line 1" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Address line 2 <span className="text-red-500">*</span>
            </label>
            <InputText className="w-full" placeholder="Enter Address line 2" />
          </div>
        </div>

        <div className="flex items-center gap-2 py-2">
          <Checkbox
            inputId="sameAddress"
            checked={formData.sameAsPresent}
            onChange={(e) => setFormData({ sameAsPresent: e.checked ?? false })}
          />
          <label
            htmlFor="sameAddress"
            className="font-bold text-gray-700 cursor-pointer"
          >
            Permanent Address same as Present Address
          </label>
        </div>

        {/* Permanent Address Section */}
        {!formData.sameAsPresent && (
          <div className="space-y-4 animate-fade-in">
            <h4 className="font-semibold text-gray-600">Permanent Address</h4>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Select State Name
                </label>
                <select className={selectStyle}>
                  <option value="">Select</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Select Division
                </label>
                <select className={selectStyle}>
                  <option value="">Select</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Select District
                </label>
                <select className={selectStyle}>
                  <option value="">Select</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Select Block Name
                </label>
                <select className={selectStyle}>
                  <option value="">Select</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Pincode No.
                </label>
                <InputText className="w-full" placeholder="Enter Pincode No." />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Address line 1
                </label>
                <InputText
                  className="w-full"
                  placeholder="Enter Address line 1"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Address line 2
                </label>
                <InputText
                  className="w-full"
                  placeholder="Enter Address line 2"
                />
              </div>
            </div>
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex justify-center gap-4 pt-10">
          <Button
            type="button"
            label="Save/Next"
            className="bg-indigo-600 border-none text-white px-10 py-2 hover:bg-indigo-700"
          />
          <Button
            type="button"
            label="Clear"
            className="bg-red-400 border-none text-white px-10 py-2 hover:bg-red-500"
          />
        </div>
      </form>
    </PageLayout>
  );
};

export default StudentAdmissionForm;
