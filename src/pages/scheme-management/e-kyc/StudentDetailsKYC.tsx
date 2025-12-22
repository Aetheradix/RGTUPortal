/* eslint-disable react-hooks/static-components */
import React, { useState } from "react";
import PageLayout from "../../../components/PageLayout";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Dialog } from "primereact/dialog";
import { Checkbox } from "primereact/checkbox";

const StudentDetailsKYC: React.FC = () => {
  const [step, setStep] = useState(1);
  const [showInstituteModal, setShowInstituteModal] = useState(false);
  const [showOtpModal, setShowOtpModal] = useState(false);
  const [aadhaarConsent, setAadhaarConsent] = useState(false);

  const FieldLabel = ({
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

  const resetForm = () => {
    setStep(1);
    setAadhaarConsent(false);
  };
  const instituteData = [
    {
      id: 1,
      district: "Bhopal",
      college: "ABC Engineering College",
      code: "12345",
      principal: "Dr. Rajesh Kumar",
      affiliation: "RGPV",
      address: "9876543210",
      contact: "XYZ Nagar, Bhopal",
      pinCode: "462001",
      localBody: "Nagar Nigam",
      landmark: "Near Junction",
    },
  ];

  return (
    <PageLayout title="Student Details KYC">
      <div>
        {step === 1 && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div>
                <FieldLabel text="Enter Samagra ID" required />
                <InputText className="w-full" placeholder="Enter Samagra ID" />
              </div>
            </div>
            <div className="flex justify-center gap-3 pt-6 ">
              <Button
                label="View student information"
                className="bg-indigo-500 border-none px-6"
                onClick={() => setShowInstituteModal(true)}
              />
              <Button label="Clear" className="bg-red-600 border-none px-8" />
            </div>
          </div>
        )}
        <Dialog
          header="Overall student information"
          visible={showInstituteModal}
          style={{ width: "90vw", maxWidth: "1400px" }}
          position="top"
          draggable={false}
          resizable={false}
          onHide={() => setShowInstituteModal(false)}
          className="rectangular-dialog shadow-2xl"
        >
          <div className="space-y-6 pt-4">
            <DataTable
              value={instituteData}
              className="p-datatable-sm text-sm border border-gray-200"
              responsiveLayout="scroll"
              paginator
              rows={5}
              showGridlines
            >
              <Column field="id" header="S.No." style={{ width: "50px" }} />
              <Column field="district" header="District" sortable />
              <Column field="college" header="College Name" sortable />
              <Column field="code" header="College Code" />
              <Column field="principal" header="Principal Name" />
              <Column field="affiliation" header="Affiliation" />
              <Column field="address" header="Address" />
              <Column field="contact" header="Contact No." />
              <Column field="pinCode" header="Pin Code" />
              <Column field="localBody" header="Local Body" />
              <Column field="landmark" header="Landmark" />
            </DataTable>
            <div className="flex justify-center">
              <Button
                label="Click for E-kyc"
                className="bg-indigo-500 border-none px-12"
                onClick={() => {
                  setShowInstituteModal(false);
                  setStep(3);
                }}
              />
            </div>
          </div>
        </Dialog>
        {/* STEP 3: AADHAAR E-KYC CONSENT */}
        {step === 3 && (
          <div className="space-y-8 animate-fade-in">
            <h3 className="text-lg font-bold border-b pb-2 text-gray-800 uppercase">
              Aadhaar E-KYC
            </h3>
            <div className="flex gap-4 items-start bg-gray-50 p-5 rounded-md border border-gray-200">
              <Checkbox
                inputId="consent"
                onChange={(e) => setAadhaarConsent(e.checked ?? false)}
                checked={aadhaarConsent}
              />
              <label
                htmlFor="consent"
                className="text-sm leading-relaxed text-gray-700 font-medium italic"
              >
                I hereby declare that I have no objection to authenticating
                myself using the Aadhaar-based authentication system. I provide
                my consent to share my Aadhaar number, biometric data, and/or
                One-Time Password (OTP) for the purpose of obtaining technical
                education-related services...{" "}
                <span className="text-red-500">*</span>
              </label>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div>
                <FieldLabel
                  text="Applicant's 12-digit Aadhaar Number:"
                  required
                />
                <InputText
                  className="w-full"
                  placeholder="Enter 12-digit Aadhaar Number"
                  disabled={!aadhaarConsent}
                />
              </div>
              <div>
                <FieldLabel
                  text="Re-enter Applicant's 12-digit Aadhaar Number:"
                  required
                />
                <InputText
                  className="w-full"
                  placeholder="Re-enter 12-digit Aadhaar Number"
                  disabled={!aadhaarConsent}
                />
              </div>
            </div>

            <div className="flex justify-center gap-4 pt-4">
              <Button
                label="eKYC via OTP"
                className="bg-indigo-500 border-none px-10"
                disabled={!aadhaarConsent}
                onClick={() => setShowOtpModal(true)}
              />
              <Button
                label="eKYC via Biometric"
                className="bg-red-600 border-none px-10"
                disabled={!aadhaarConsent}
              />
            </div>
          </div>
        )}
        <Dialog
          header="Aadhaar e-KYC"
          visible={showOtpModal}
          style={{ width: "500px" }}
          position="top"
          onHide={() => setShowOtpModal(false)}
        >
          <div className="space-y-6 py-6 px-2">
            <div className="flex items-center gap-6">
              <label className="font-bold text-sm whitespace-nowrap">
                6 Digit OTP <span className="text-red-500">*</span>
              </label>
              <InputText placeholder="6 Digit OTP" className="w-full" />
            </div>
            <p className="text-sm font-bold text-gray-600">
              An OTP (One-Time Password) has been sent to your registered mobile
              number <span className="text-indigo-600">******3637</span>
            </p>
            <div className="flex justify-center">
              <Button
                label="Validate OTP"
                className="bg-green-600 border-none px-12 font-bold"
                onClick={() => {
                  setShowOtpModal(false);
                  setStep(5);
                }}
              />
            </div>
          </div>
        </Dialog>

        {/* STEP 5: FINAL COMPARISON DATA */}
        {step === 5 && (
          <div className="space-y-10 animate-fade-in">
            <div className="text-center">
              <h2 className="text-xl font-bold text-red-800">ANIKET AHIRWAR</h2>
            </div>
            <section className="shadow-sm ">
              <h4 className="text-xs font-black mb-5 text-gray-500 uppercase">
                Basic Details Of Student From Aadhaar EKYC *
              </h4>
              <DataTable
                value={[
                  {
                    id: 1,
                    adhar: "553366336699",
                    name: "Aniket Ahirwar",
                    guardian: "Bhagvan Singh",
                    relation: "Brother",
                    dob: "03/03/1998",
                    gender: "Male",
                    address:
                      "Village/Ward - Birha Shyam Khedi, District - Bhopal",
                    pin: "460557",
                    district: "Bhopal",
                    body: "Nagar Nigam",
                    landmark: "Bhopal",
                  },
                ]}
                className="p-datatable-sm text-xs"
              >
                <Column field="id" header="S.No." style={{ width: "50px" }} />
                <Column field="adhar" header="Aadhaar Number" />
                <Column field="name" header="Name" />
                <Column field="guardian" header="Father's Name" />
                <Column field="relation" header="Relation" />
                <Column field="dob" header="Date of Birth" />
                <Column field="gender" header="Gender" />
                <Column field="address" header="Permanent Address" />
                <Column field="pin" header="Pin Code" />
                <Column field="district" header="District" />
                <Column field="body" header="Local Body" />
                <Column field="landmark" header="Landmark" />
              </DataTable>
            </section>
            <div className="flex justify-center gap-4 pt-6">
              <Button
                label="Final Submit"
                className="bg-indigo-600 border-none px-12 py-3"
                onClick={resetForm}
              />
              <Button
                label="Clear"
                className="bg-red-600 border-none px-12 py-3"
                onClick={resetForm}
              />
            </div>
          </div>
        )}
      </div>
    </PageLayout>
  );
};

export default StudentDetailsKYC;
