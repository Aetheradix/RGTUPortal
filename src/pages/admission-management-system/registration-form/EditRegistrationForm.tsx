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
  const [regNo, setRegNo] = useState("");
  const [showForm, setShowForm] = useState(false);

  const genderOptions = ["Male", "Female", "Transgender"].map((x) => ({
    label: x,
    value: x,
  }));

  const maritalOptions = [
    { label: "Married", value: "Married" },
    { label: "Single", value: "Single" },
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
      <div className="bg-white p-6 rounded shadow-md border border-gray-200 mb-6">
        <h2 className="text-xl font-bold text-gray-800 mb-4">
          Student Registration No.*
        </h2>
        <div className="flex gap-3 items-center">
          <InputText
            value={regNo}
            onChange={(e) => setRegNo(e.target.value)}
            placeholder="Enter Student Registration No."
            className="p-inputtext-sm w-full"
          />
          <Button
            label="Search"
            icon="pi pi-search"
            className="p-button-info p-button-sm"
            onClick={() => setShowForm(true)}
          />
        </div>
      </div>

      {showForm && (
        <div className="bg-white p-6 rounded shadow-md border border-gray-200">
          <h2 className="text-lg font-bold text-gray-800 mb-6">
            Edit Registration Form
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
            <div className="flex flex-col gap-1">
              <label className="text-xs font-bold uppercase">
                Student First Name*
              </label>
              <InputText
                placeholder="Student First Name"
                className="p-inputtext-sm"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-xs font-bold uppercase">
                Student Last Name*
              </label>
              <InputText
                placeholder="Student Last Name"
                className="p-inputtext-sm"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-xs font-bold uppercase">
                Date of Birth*
              </label>
              <Calendar
                placeholder="dd/mm/yyyy"
                className="p-inputtext-sm"
                showIcon
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-xs font-bold uppercase">
                Select Gender*
              </label>
              <Dropdown
                options={genderOptions}
                placeholder="Select"
                className="p-inputtext-sm"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-xs font-bold uppercase">
                Father's Name*
              </label>
              <InputText
                placeholder="Enter Father's Name"
                className="p-inputtext-sm"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-xs font-bold uppercase">
                Father Occupation
              </label>
              <InputText
                placeholder="Enter Father Occupation"
                className="p-inputtext-sm"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-xs font-bold uppercase">
                Mother's Name*
              </label>
              <InputText
                placeholder="Enter Mother's Name"
                className="p-inputtext-sm"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-xs font-bold uppercase">
                Mother Occupation
              </label>
              <InputText
                placeholder="Enter Mother Occupation"
                className="p-inputtext-sm"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-xs font-bold uppercase">
                Select Marital Status*
              </label>
              <Dropdown
                options={maritalOptions}
                placeholder="Select"
                className="p-inputtext-sm"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-xs font-bold uppercase">
                Select Blood Group*
              </label>
              <Dropdown
                options={bloodGroupOptions}
                placeholder="Select"
                className="p-inputtext-sm"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-xs font-bold uppercase">Religion *</label>
              <Dropdown
                options={religionOptions}
                placeholder="Select"
                className="p-inputtext-sm"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-xs font-bold uppercase">
                Select Category*
              </label>
              <Dropdown
                options={categoryOptions}
                placeholder="Select Category"
                className="p-inputtext-sm"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-xs font-bold uppercase">
                Nationality *
              </label>
              <InputText
                placeholder="Enter Nationality"
                className="p-inputtext-sm"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-xs font-bold uppercase">
                Mobile Number*
              </label>
              <InputText
                placeholder="Enter Mobile Number"
                className="p-inputtext-sm"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-xs font-bold uppercase">
                Alternate Mobile Number
              </label>
              <InputText
                placeholder="Enter Alternate Mobile Number"
                className="p-inputtext-sm"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-xs font-bold uppercase">
                Email Address*
              </label>
              <InputText
                placeholder="Enter Email Address"
                className="p-inputtext-sm"
              />
            </div>
          </div>

          <Divider />

          <h3 className="text-lg font-semibold text-indigo-700 mb-4">
            Address Information
          </h3>

          <div className="bg-blue-50/30 p-4 rounded-lg mb-6">
            <h4 className="font-bold text-sm text-blue-600 mb-4">
              Present Address
            </h4>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
              <Dropdown
                options={stateOptions}
                placeholder="Select State*"
                className="p-inputtext-sm"
              />
              <Dropdown
                options={divisionOptions}
                placeholder="Select Division*"
                className="p-inputtext-sm"
              />
              <Dropdown
                options={districtOptions}
                placeholder="Select District*"
                className="p-inputtext-sm"
              />
              <Dropdown
                options={blockOptions}
                placeholder="Select Block*"
                className="p-inputtext-sm"
              />

              <InputText
                placeholder="Enter Pincode"
                className="p-inputtext-sm"
              />
              <InputText
                placeholder="Enter Address line 1"
                className="p-inputtext-sm"
              />
              <InputText
                placeholder="Enter Address line 2"
                className="p-inputtext-sm"
              />
            </div>

            <div className="flex items-center gap-2 mt-4 mb-4">
              <Checkbox
                onChange={(e) => setIsPermanentSame(e.checked ?? false)}
                checked={isPermanentSame}
              />
              <label className="text-sm font-bold text-gray-700 underline cursor-pointer">
                Permanent Address same as Present Address
              </label>
            </div>

            {!isPermanentSame && (
              <>
                <h4 className="font-bold text-sm text-blue-600 mb-4">
                  Permanent Address
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
                  <Dropdown
                    options={stateOptions}
                    placeholder="Select State*"
                    className="p-inputtext-sm"
                  />
                  <Dropdown
                    options={divisionOptions}
                    placeholder="Select Division*"
                    className="p-inputtext-sm"
                  />
                  <Dropdown
                    options={districtOptions}
                    placeholder="Select District*"
                    className="p-inputtext-sm"
                  />
                  <Dropdown
                    options={blockOptions}
                    placeholder="Select Block*"
                    className="p-inputtext-sm"
                  />

                  <InputText
                    placeholder="Enter Pincode No."
                    className="p-inputtext-sm"
                  />
                  <InputText
                    placeholder="Enter Address line 1"
                    className="p-inputtext-sm"
                  />
                  <InputText
                    placeholder="Enter Address line 2"
                    className="p-inputtext-sm"
                  />
                </div>
              </>
            )}
          </div>

          <Divider />

          <h3 className="text-lg font-semibold text-indigo-700 mb-4">
            Academic Details
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            <Dropdown
              options={qualificationOptions}
              placeholder="Select Last Qualification"
              className="p-inputtext-sm"
            />
            <InputText
              placeholder="Enter Board/University Name"
              className="p-inputtext-sm"
            />
            <Calendar
              placeholder="dd/mm/yyyy"
              className="p-inputtext-sm"
              showIcon
            />
            <InputText
              placeholder="Enter Percentage/Grade"
              className="p-inputtext-sm"
            />

            <InputText
              placeholder="Enter Roll No./Enrollment No."
              className="p-inputtext-sm"
            />
            <InputText
              placeholder="Enter Subjects/Branch"
              className="p-inputtext-sm"
            />
          </div>

          <Divider />

          <h3 className="text-lg font-semibold text-indigo-700 mb-4">
            Course/Program Details
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
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

          <Divider />

          <h3 className="text-lg font-semibold text-indigo-700 mb-4">
            Reservation/Quota (if applicable)
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            <Dropdown
              options={pwdOptions}
              placeholder="Select Handicapped (PWD)"
              className="p-inputtext-sm"
            />
            <Dropdown
              options={pwdTypeOptions}
              placeholder="Select Handicapped Type"
              className="p-inputtext-sm"
            />
            <Dropdown
              options={pwdPercentOptions}
              placeholder="Select Handicapped Percentage*"
              className="p-inputtext-sm"
            />
          </div>

          <div className="flex justify-center gap-4 mt-8">
            <Button
              label="Update"
              icon="pi pi-check"
              className="p-button-success"
            />
            <Button
              label="Clear"
              icon="pi pi-refresh"
              className="p-button-secondary p-button-outlined"
            />
          </div>
        </div>
      )}
    </PageLayout>
  );
};

export default EditRegistrationDetails;
