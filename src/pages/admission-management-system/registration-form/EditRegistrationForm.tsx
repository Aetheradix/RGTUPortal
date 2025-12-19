import React, { useState } from "react";
import PageLayout from "../../../components/PageLayout";
import { InputText } from "primereact/inputtext";
import { Dropdown } from "primereact/dropdown";
import { Calendar } from "primereact/calendar";
import { Checkbox } from "primereact/checkbox";
import { Button } from "primereact/button";
import { Divider } from "primereact/divider";

const EditRegistrationDetails: React.FC = () => {
  const [isPermanentSame, setIsPermanentSame] = useState(false);

  const genderOptions = ["Male", "Female", "Transgender"].map((x) => ({
    label: x,
    value: x,
  }));
  const maritalOptions = [
    { label: "Yes", value: "Married" },
    { label: "No", value: "Single" },
  ];
  const bloodGroupOptions = [
    "A+",
    "A-",
    "B+",
    "B-",
    "O+",
    "O-",
    "AB+",
    "AB-",
  ].map((x) => ({ label: x, value: x }));
  const religionOptions = [
    "Hindu",
    "Muslim",
    "Christian",
    "Sikh",
    "Buddhist",
    "Jain",
    "Parsi",
    "Other",
  ].map((x) => ({ label: x, value: x }));
  const categoryOptions = ["General", "OBC", "SC", "ST", "EWS"].map((x) => ({
    label: x,
    value: x,
  }));
  const stateOptions = [
    "Madhya Pradesh",
    "Maharashtra",
    "Uttar Pradesh",
    "Delhi",
    "Gujarat",
    "Rajasthan",
  ].map((x) => ({ label: x, value: x }));
  const divisionOptions = [
    "Bhopal",
    "Indore",
    "Gwalior",
    "Ujjain",
    "Jabalpur",
    "Sagar",
    "Rewa",
  ].map((x) => ({ label: x, value: x }));
  const districtOptions = [
    "Bhopal",
    "Raisen",
    "Rajgarh",
    "Sehore",
    "Vidisha",
    "Indore",
    "Guna",
  ].map((x) => ({ label: x, value: x }));
  const blockOptions = ["Huzur", "Fanda", "Govindapura", "Berasia", "Mhow"].map(
    (x) => ({ label: x, value: x })
  );
  const qualificationOptions = ["10th", "12th", "Diploma", "Graduation"].map(
    (x) => ({ label: x, value: x })
  );
  const courseLevelOptions = [
    "Under Graduate",
    "Post Graduate",
    "Diploma",
    "PG Diploma",
    "Certificate",
  ].map((x) => ({ label: x, value: x }));
  const courseNameOptions = [
    "B.Tech",
    "M.Tech",
    "BCA",
    "MCA",
    "B.Sc (IT)",
    "MBA",
  ].map((x) => ({ label: x, value: x }));
  const specializationOptions = [
    "Computer Science",
    "Information Technology",
    "AI",
    "Machine Learning",
    "Cyber Security",
  ].map((x) => ({ label: x, value: x }));
  const pwdOptions = [
    { label: "Yes", value: "Yes" },
    { label: "No", value: "No" },
  ];
  const pwdTypeOptions = [
    "Blindness",
    "Low Vision",
    "Hearing Impairment",
    "Mental Illness",
    "Multiple Disability",
    "Acid Attack Victim",
  ].map((x) => ({ label: x, value: x }));
  const pwdPercentOptions = [
    "40 to 50",
    "50 to 60",
    "60 to 70",
    "70 to 80",
    "80 to 90",
    "90 to 100",
  ].map((x) => ({ label: x, value: x }));

  return (
    <PageLayout title="Edit Registration Details">
      <div className="bg-white p-6 rounded shadow-md border border-gray-200">
        <div className="flex justify-between items-center bg-gray-50 p-4 rounded mb-6 border-l-4 border-indigo-600">
          <div>
            <h2 className="text-xl font-bold text-gray-800">
              Edit Registration Form
            </h2>
            <p className="text-sm text-gray-500 italic">
              Student Reg No:{" "}
              <span className="text-indigo-600 font-bold">15412572345</span>
            </p>
          </div>
          <Button
            label="Go Back"
            icon="pi pi-arrow-left"
            className="p-button-text p-button-secondary"
          />
        </div>

        <h3 className="text-lg font-semibold text-indigo-700 mb-4 flex items-center gap-2">
          <i className="pi pi-user" /> Student Details
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <div className="flex flex-col gap-1">
            <label className="text-xs font-bold uppercase text-gray-600">
              First Name*
            </label>
            <InputText
              placeholder="Enter First Name"
              className="p-inputtext-sm"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-xs font-bold uppercase text-gray-600">
              Last Name*
            </label>
            <InputText
              placeholder="Enter Last Name"
              className="p-inputtext-sm"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-xs font-bold uppercase text-gray-600">
              Date of Birth*
            </label>
            <Calendar
              placeholder="Select DOB"
              className="p-inputtext-sm"
              showIcon
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-xs font-bold uppercase text-gray-600">
              Gender*
            </label>
            <Dropdown
              options={genderOptions}
              placeholder="Select"
              className="p-inputtext-sm"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-xs font-bold uppercase text-gray-600">
              Father's Name*
            </label>
            <InputText placeholder="Father's Name" className="p-inputtext-sm" />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-xs font-bold uppercase text-gray-600">
              Father Occupation
            </label>
            <InputText placeholder="Occupation" className="p-inputtext-sm" />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-xs font-bold uppercase text-gray-600">
              Mother's Name*
            </label>
            <InputText placeholder="Mother's Name" className="p-inputtext-sm" />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-xs font-bold uppercase text-gray-600">
              Marital Status*
            </label>
            <Dropdown
              options={maritalOptions}
              placeholder="Select"
              className="p-inputtext-sm"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-xs font-bold uppercase text-gray-600">
              Blood Group*
            </label>
            <Dropdown
              options={bloodGroupOptions}
              placeholder="Select"
              className="p-inputtext-sm"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-xs font-bold uppercase text-gray-600">
              Religion*
            </label>
            <Dropdown
              options={religionOptions}
              placeholder="Select"
              className="p-inputtext-sm"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-xs font-bold uppercase text-gray-600">
              Category*
            </label>
            <Dropdown
              options={categoryOptions}
              placeholder="Select"
              className="p-inputtext-sm"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-xs font-bold uppercase text-gray-600">
              Mobile Number*
            </label>
            <InputText placeholder="Mobile No" className="p-inputtext-sm" />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-xs font-bold uppercase text-gray-600">
              Email ID*
            </label>
            <InputText placeholder="Email Address" className="p-inputtext-sm" />
          </div>
        </div>

        <Divider />

        <h3 className="text-lg font-semibold text-indigo-700 mb-4 flex items-center gap-2">
          <i className="pi pi-map-marker" /> Address Information
        </h3>
        <div className="bg-blue-50/30 p-4 rounded-lg border border-blue-100 mb-6">
          <h4 className="font-bold text-sm text-blue-600 mb-4">
            Present Address
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
            <Dropdown
              options={stateOptions}
              placeholder="Select State"
              className="p-inputtext-sm"
            />
            <Dropdown
              options={divisionOptions}
              placeholder="Select Division"
              className="p-inputtext-sm"
            />
            <Dropdown
              options={districtOptions}
              placeholder="Select District"
              className="p-inputtext-sm"
            />
            <Dropdown
              options={blockOptions}
              placeholder="Select Block"
              className="p-inputtext-sm"
            />
            <InputText placeholder="Pincode No" className="p-inputtext-sm" />
            <InputText
              placeholder="Address Line 1"
              className="p-inputtext-sm md:col-span-2"
            />
            <InputText
              placeholder="Address Line 2"
              className="p-inputtext-sm"
            />
          </div>

          <div className="flex items-center gap-2 mt-4 mb-4">
            <Checkbox
              onChange={(e) => setIsPermanentSame(e.checked ?? false)}
              checked={isPermanentSame}
            />
            <label className="text-sm font-bold text-gray-700 italic underline cursor-pointer">
              Permanent Address same as Present Address
            </label>
          </div>

          {!isPermanentSame && (
            <>
              <h4 className="font-bold text-sm text-blue-600 mb-4">
                Permanent Address
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <Dropdown
                  options={stateOptions}
                  placeholder="Select State"
                  className="p-inputtext-sm"
                />
                <Dropdown
                  options={divisionOptions}
                  placeholder="Select Division"
                  className="p-inputtext-sm"
                />
                <Dropdown
                  options={districtOptions}
                  placeholder="Select District"
                  className="p-inputtext-sm"
                />
                <Dropdown
                  options={blockOptions}
                  placeholder="Select Block"
                  className="p-inputtext-sm"
                />
              </div>
            </>
          )}
        </div>

        <Divider />

        <h3 className="text-lg font-semibold text-indigo-700 mb-4 flex items-center gap-2">
          <i className="pi pi-book" /> Academic Details
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <Dropdown
            options={qualificationOptions}
            placeholder="Select Qualification"
            className="p-inputtext-sm"
          />
          <InputText
            placeholder="Board/University Name"
            className="p-inputtext-sm"
          />
          <InputText placeholder="Year of Passing" className="p-inputtext-sm" />
          <InputText
            placeholder="Percentage/Grade"
            className="p-inputtext-sm"
          />
          <InputText
            placeholder="Roll No/Enrollment No"
            className="p-inputtext-sm"
          />
          <InputText placeholder="Subjects/Branch" className="p-inputtext-sm" />
        </div>

        <Divider />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-indigo-700 mb-4 uppercase text-sm">
              Course Details
            </h3>
            <div className="grid grid-cols-1 gap-4">
              <Dropdown
                options={courseLevelOptions}
                placeholder="Select Course Level"
                className="p-inputtext-sm"
              />
              <Dropdown
                options={courseNameOptions}
                placeholder="Select Course Name"
                className="p-inputtext-sm"
              />
              <Dropdown
                options={specializationOptions}
                placeholder="Select Specialization"
                className="p-inputtext-sm"
              />
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-indigo-700 mb-4 uppercase text-sm">
              Reservation & PWD
            </h3>
            <div className="grid grid-cols-1 gap-4">
              <Dropdown
                options={pwdOptions}
                placeholder="Handicapped (PWD)?"
                className="p-inputtext-sm"
              />
              <Dropdown
                options={pwdTypeOptions}
                placeholder="Select PWD Type"
                className="p-inputtext-sm"
              />
              <Dropdown
                options={pwdPercentOptions}
                placeholder="Select Percentage"
                className="p-inputtext-sm"
              />
            </div>
          </div>
        </div>

        <div className="mt-12 flex gap-3 justify-center border-t pt-6">
          <Button
            label="Update Registration Details"
            icon="pi pi-check"
            className="p-button-lg p-button-success px-8"
          />
          <Button
            label="Reset Form"
            icon="pi pi-refresh"
            className="p-button-lg p-button-outlined p-button-secondary"
          />
        </div>
      </div>
    </PageLayout>
  );
};

export default EditRegistrationDetails;
