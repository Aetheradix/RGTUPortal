import React, { useState } from "react";
import PageLayout from "../../../components/PageLayout";
import { Button } from "primereact/button";
import { Input, Dropdown } from "../../../ui/shared";

const ApplyAgainstVacancy: React.FC = () => {
  // 1. State for Form Data
  const [formData, setFormData] = useState({
    collegeCode: "",
    collegeName: "",
    vacantPosition: null as string | null,
    affiliationDocument: null as File | null,
  });

  // Mock Options for Vacant Position
  const positionOptions = [
    { label: "Assistant Professor", value: "Assistant Professor" },
    { label: "Associate Professor", value: "Associate Professor" },
    { label: "HOD", value: "HOD" },
    { label: "Lab Assistant", value: "Lab Assistant" },
  ];



  return (
    <PageLayout title="Apply Against Vacancy">
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 mb-8">
        <form className="space-y-8">
          {/* Form Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-end">
            <Input
              label="Enter College Code"
              required
              placeholder="Enter College Code"
              value={formData.collegeCode}
              onChange={(e) =>
                setFormData({ ...formData, collegeCode: e.target.value })
              }
            />

            <Input
              label="Enter College Name"
              required
              placeholder="Enter College Name"
              value={formData.collegeName}
              onChange={(e) =>
                setFormData({ ...formData, collegeName: e.target.value })
              }
            />

            <Dropdown
              label="Select Vacant Position"
              required
              placeholder="Select"
              value={formData.vacantPosition}
              options={positionOptions}
              onChange={(e) =>
                setFormData({ ...formData, vacantPosition: e.value })
              }
            />

            {/* Custom Styled File Upload to match Image */}
            <div className="flex flex-col gap-1">
              <label className="text-sm font-bold text-gray-700">
                Upload Affiliation Document
                <span className="text-red-500">*</span>
              </label>
              <div className="flex flex-col gap-1">
                <input
                  type="file"
                  className="w-full text-sm text-gray-500 border rounded-md p-2 cursor-pointer
                         file:mr-4 file:py-1 file:px-4 file:rounded file:border-0 
                         file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-700 
                         hover:file:bg-indigo-100"
                />
              </div>
            </div>
          </div>

          {/* Action Buttons - Centered to match your reference code */}
          <div className="flex gap-3 justify-center pt-4 border-t border-gray-50">
            <Button
              label="Apply For Post"
              className="px-10"
              style={{ backgroundColor: "#6366F1", border: "none" }}
            />
            <Button
              type="button"
              label="Clear"
              className="p-button-danger px-10"
              style={{ backgroundColor: "#FF3B30", border: "none" }}
              onClick={() =>
                setFormData({
                  collegeCode: "",
                  collegeName: "",
                  vacantPosition: null,
                  affiliationDocument: null,
                })
              }
            />
          </div>
        </form>
      </div>
    </PageLayout>
  );
};

export default ApplyAgainstVacancy;
