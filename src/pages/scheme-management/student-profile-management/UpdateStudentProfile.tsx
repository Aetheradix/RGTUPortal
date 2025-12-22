/* eslint-disable react-hooks/static-components */
import PageLayout from "@/components/PageLayout";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { Dropdown } from "primereact/dropdown";
import { Calendar } from "primereact/calendar";
import { useState } from "react";

const UpdateStudentProfile: React.FC = () => {
  const [step, setStep] = useState(1);
  //   const [formData, setFormData] = useState({});

  const nextStep = () => setStep((prev) => prev + 1);
  const reset = () => setStep(1);
  const Label = ({
    text,
    required = false,
  }: {
    text: string;
    required?: boolean;
  }) => (
    <label className="block text-sm font-medium text-gray-700 mb-2">
      {text} {required && <span className="text-red-500">*</span>}
    </label>
  );

  return (
    <PageLayout title="Update Student Profile For Scholarships">
      {step === 1 && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="md:col-span-1">
              <Label text="Enter Student Samagra ID" required />
              <InputText
                className="w-full"
                placeholder="Enter Student Samagra ID"
              />
            </div>
          </div>
          <div className="flex justify-center gap-3 ">
            <Button
              label="Search"
              className="bg-indigo-500 border-none px-8"
              onClick={nextStep}
            />
            <Button
              label="Clear"
              className="bg-red-100 text-red-500 border-none px-8"
            />
          </div>
        </div>
      )}

      {/* STEP 2: PERSONAL DETAILS & ADDRESS (Capture115.PNG) */}
      {step === 2 && (
        <div className="space-y-8">
          <section>
            <h3 className="text-lg font-medium mb-6 border-b pb-2">
              Student Personal Details
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div>
                <Label text="Enter Student Name (English)" required />
                <InputText
                  className="w-full"
                  placeholder="Enter Student Name"
                />
              </div>
              <div>
                <Label text="Enter Student Name (Hindi)" />
                <InputText
                  className="w-full"
                  placeholder="छात्र का नाम दर्ज करें (हिंदी)"
                />
              </div>
              <div>
                <Label text="Select Gender" required />
                <Dropdown className="w-full" placeholder="Select" />
              </div>
              <div className="row-span-2 flex flex-col items-center">
                <Label text="Upload Student Image" required />
                <div className="border p-2 mb-2">
                  <img
                    src="https://img.freepik.com/premium-photo/flat-icon-design_1258715-207333.jpg"
                    alt="avatar"
                    className="w-20 h-20"
                  />
                </div>
                <input type="file" className="text-xs" />
              </div>
              <div>
                <Label text="Enter Date Of Birth" required />
                <Calendar className="w-full" placeholder="dd/mm/yyyy" />
              </div>
              <div>
                <Label text="Select Blood Group" />
                <Dropdown className="w-full" placeholder="Select" />
              </div>
              <div>
                <Label text="Select Category" required />
                <Dropdown className="w-full" placeholder="Select" />
              </div>
              <div>
                <Label text="Select Religion" required />
                <Dropdown className="w-full" placeholder="Select" />
              </div>
              <div>
                <Label text="Enter Father Name" required />
                <InputText className="w-full" placeholder="Enter Father Name" />
              </div>
              <div>
                <Label text="Enter Mother Name" required />
                <InputText className="w-full" placeholder="Enter Mother Name" />
              </div>
              <div>
                <Label text="Enter Mobile No." required />
                <InputText className="w-full" placeholder="Enter Mobile No." />
              </div>
              <div>
                <Label text="Select Domicile" required />
                <Dropdown className="w-full" placeholder="Select" />
              </div>
              <div>
                <Label text="Select BPL Card status" required />
                <Dropdown className="w-full" placeholder="Select" />
              </div>
              <div>
                <Label text="Select Disability" required />
                <Dropdown className="w-full" placeholder="Select" />
              </div>
            </div>
          </section>

          <section>
            <h3 className="text-lg font-medium mb-6 border-b pb-2">
              Address Information
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div>
                <Label text="Select State Name" required />
                <Dropdown className="w-full" placeholder="Select" />
              </div>
              <div>
                <Label text="Select Division Name" required />
                <Dropdown className="w-full" placeholder="Select" />
              </div>
              <div>
                <Label text="Select District Name" required />
                <Dropdown className="w-full" placeholder="Select" />
              </div>
              <div>
                <Label text="Select Block Name" required />
                <Dropdown className="w-full" placeholder="Select" />
              </div>
              <div>
                <Label text="Select Village Name" required />
                <Dropdown className="w-full" placeholder="Select" />
              </div>
              <div>
                <Label text="Select Habitation Name" required />
                <Dropdown className="w-full" placeholder="Select" />
              </div>
              <div className="md:col-span-2">
                <Label text="Enter Address" required />
                <InputText className="w-full" placeholder="Enter Address" />
              </div>
            </div>
          </section>
          <div className="flex justify-center gap-3 border-t pt-4">
            <Button
              label="Update / Next"
              className="bg-indigo-600 border-none px-6"
              onClick={nextStep}
            />
            <Button
              label="Clear"
              className="bg-red-100 text-red-500 border-none px-6"
            />
          </div>
        </div>
      )}

      {/* STEP 3: FAMILY OTHER INFO (Capture116.PNG) */}
      {step === 3 && (
        <div className="space-y-6">
          <h3 className="text-lg font-medium mb-6 border-b pb-2">
            Family Other Information
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div>
              <Label text="Select Only Child" required />
              <Dropdown className="w-full" placeholder="Select" />
            </div>
            <div>
              <Label text="Select No. Of Sibling's" required />
              <Dropdown className="w-full" placeholder="Select" />
            </div>
            <div>
              <Label text="Yes Are The Students Orphans ?" required />
              <Dropdown className="w-full" placeholder="Select" />
            </div>
            <div>
              <Label text="Is Father Dead ?" required />
              <Dropdown className="w-full" placeholder="Select" />
            </div>
            <div>
              <Label text="Select Father Disability" required />
              <Dropdown className="w-full" placeholder="Select" />
            </div>
            <div>
              <Label
                text="Select Student Father (Dead/Disabled/Retired)"
                required
              />
              <Dropdown className="w-full" placeholder="Select" />
            </div>
            <div>
              <Label text="Select Means Of Livelihood" required />
              <Dropdown className="w-full" placeholder="Select" />
            </div>
            <div>
              <Label text="Select Family/Guardian Occupation" required />
              <Dropdown className="w-full" placeholder="Select" />
            </div>
            <div>
              <Label text="Enter Family/Guardian Income(Yearly)" required />
              <InputText className="w-full" placeholder="Enter Yearly Income" />
            </div>
            <div>
              <Label text="Is Income Tax Payer" required />
              <Dropdown className="w-full" placeholder="Select" />
            </div>
            <div>
              <Label text="Whether Land Is More Than 10 Acres" required />
              <Dropdown className="w-full" placeholder="Select" />
            </div>
          </div>
          <div className="flex justify-center gap-3 border-t pt-4">
            <Button
              label="Update / Next"
              className="bg-indigo-600 border-none px-6"
              onClick={nextStep}
            />
            <Button
              label="Clear"
              className="bg-red-100 text-red-500 border-none px-6"
            />
          </div>
        </div>
      )}

      {/* STEP 4: ACADEMIC INFO (Capture117.PNG) */}
      {step === 4 && (
        <div className="space-y-8">
          <section>
            <h3 className="text-lg font-medium mb-6 border-b pb-2">
              Previous Academic Year Information
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div>
                <Label text="Enter College UDISE Code" required />
                <InputText className="w-full" placeholder="Code" />
              </div>
              <div>
                <Label text="Enter Board / University" required />
                <InputText className="w-full" placeholder="Name" />
              </div>
              <div>
                <Label text="Enter Institute Name" required />
                <InputText className="w-full" placeholder="Name" />
              </div>
              <div>
                <Label text="Enter Roll Number / Enrollment Number" required />
                <InputText className="w-full" placeholder="Number" />
              </div>
              <div>
                <Label text="Enter Percentage / CGPA" required />
                <InputText className="w-full" placeholder="CGPA" />
              </div>
              <div>
                <Label text="Enter Subject / Branch" required />
                <InputText className="w-full" placeholder="Branch" />
              </div>
            </div>
          </section>
          <section>
            <h3 className="text-lg font-medium mb-6 border-b pb-2">
              Current Academic Year Information
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div>
                <Label text="Enter College UDISE Code" required />
                <InputText className="w-full" />
              </div>
              <div>
                <Label text="Select Academic Year" required />
                <Dropdown className="w-full" placeholder="Select" />
              </div>
              <div>
                <Label text="Date of Admission" required />
                <Calendar className="w-full" />
              </div>
              <div>
                <Label text="Select College Name" required />
                <Dropdown className="w-full" placeholder="Select" />
              </div>
              <div>
                <Label text="Select Course" required />
                <Dropdown className="w-full" placeholder="Select" />
              </div>
              <div>
                <Label text="Specialization" required />
                <Dropdown className="w-full" placeholder="Select" />
              </div>
              <div>
                <Label text="Year of Study" required />
                <Dropdown className="w-full" placeholder="Select" />
              </div>
              <div>
                <Label text="Current Semester" required />
                <Dropdown className="w-full" placeholder="Select" />
              </div>
              <div>
                <Label text="Enrollment Number" required />
                <InputText className="w-full" />
              </div>
              <div>
                <Label text="Enter Scholar Number" required />
                <InputText className="w-full" />
              </div>
              <div>
                <Label text="Select Hostel" required />
                <Dropdown className="w-full" placeholder="Select" />
              </div>
              <div>
                <Label
                  text="Select Applicable For Student Residence"
                  required
                />
                <Dropdown className="w-full" placeholder="Select" />
              </div>
            </div>
          </section>
          <div className="flex justify-center gap-3 border-t pt-4">
            <Button
              label="Update / Next"
              className="bg-indigo-600 border-none px-6"
              onClick={nextStep}
            />
            <Button
              label="Clear"
              className="bg-red-100 text-red-500 border-none px-6"
            />
          </div>
        </div>
      )}

      {/* STEP 5: BANK INFO (Capture118.PNG) */}
      {step === 5 && (
        <div className="space-y-6">
          <h3 className="text-lg font-medium mb-6 border-b pb-2">
            Student Bank Account Information
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div>
              <Label text="Enter IFSC Code" required />
              <InputText className="w-full" />
            </div>
            <div>
              <Label text="Enter Bank Name" required />
              <InputText className="w-full" />
            </div>
            <div>
              <Label text="Enter Branch Name" required />
              <InputText className="w-full" />
            </div>
            <div>
              <Label text="Enter Account No." required />
              <InputText className="w-full" />
            </div>
            <div>
              <Label text="Enter Account Holder Name" required />
              <InputText className="w-full" />
            </div>
          </div>
          <div className="flex justify-center gap-3 border-t pt-4">
            <Button
              label="Update / Next"
              className="bg-indigo-600 border-none px-6"
              onClick={nextStep}
            />
            <Button
              label="Clear"
              className="bg-red-100 text-red-500 border-none px-6"
            />
          </div>
        </div>
      )}

      {/* STEP 6: DOCUMENT UPLOAD (Capture119.PNG) */}
      {step === 6 && (
        <div className="space-y-6">
          <h3 className="text-lg font-medium mb-6 border-b pb-2">
            Document Upload
          </h3>
          <div className="space-y-4 max-w-4xl mx-auto">
            {[
              "Upload Caste Certificate (OBC/ST/SC):",
              "Upload Bank Passbook:",
              "Upload Income Proof",
              "Upload Below Poverty Line (BPL) Certificate",
              "Upload Domicile Certificate",
              "Upload Income Tax Certificate",
            ].map((doc, idx) => (
              <div
                key={idx}
                className="grid grid-cols-1 md:grid-cols-3 items-center gap-4"
              >
                <div className="text-sm font-medium">{doc}</div>
                <div className="flex items-center border rounded">
                  <input type="file" className="text-sm p-1 w-full" />
                </div>
                <Button
                  icon="pi pi-eye"
                  className="p-button-rounded bg-indigo-500 w-10 h-10 border-none"
                />
              </div>
            ))}
          </div>
          <div className="flex justify-center gap-3 border-t pt-4">
            <Button
              label="Update"
              className="bg-indigo-600 border-none px-10"
              onClick={reset}
            />
            <Button
              label="Clear"
              className="bg-red-100 text-red-500 border-none px-10"
            />
          </div>
        </div>
      )}
    </PageLayout>
  );
};

export default UpdateStudentProfile;
