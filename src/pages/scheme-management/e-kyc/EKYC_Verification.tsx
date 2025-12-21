import React, { useState } from "react";
import PageLayout from "../../../components/PageLayout";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Dialog } from "primereact/dialog";

interface KYCData {
  id: number;
  adharOrSssmid: string;
  name: string;
  guardianName: string;
  guardianRelation: string;
  dob: string;
  gender: string;
  address: string;
  pinCode: string;
  district: string;
  localBody: string;
  landmark: string;
}

const EKycVerification: React.FC = () => {
  const [step, setStep] = useState(1); // 1: Input Form, 2: Comparison View
  const [showOtpDialog, setShowOtpDialog] = useState(false);
  const [otpValue, setOtpValue] = useState("");
  const [adharData] = useState<KYCData[]>([
    {
      id: 1,
      adharOrSssmid: "553366336699",
      name: "Aniket Ahirwar",
      guardianName: "Bhagvan Singh",
      guardianRelation: "Brother",
      dob: "03/03/1998",
      gender: "Male",
      address: "Village/Ward - Birha Shyam Khedi, District - Bhopal",
      pinCode: "460557",
      district: "Bhopal",
      localBody: "Nagar Nigam",
      landmark: "Bhopal",
    },
  ]);

  const [portalData] = useState<KYCData[]>([
    {
      id: 1,
      adharOrSssmid: "553876554",
      name: "ANIKET AHIRWAR",
      guardianName: "Bhagvan Singh",
      guardianRelation: "Brother",
      dob: "03/03/1998",
      gender: "Male",
      address: "Village/Ward - Birha Shyam Khedi District - Bhopal",
      pinCode: "460257",
      district: "Bhopal",
      localBody: "Nagar Nigam",
      landmark: "Bhopal",
    },
  ]);
  const handleGetOtp = () => setShowOtpDialog(true);
  const handleSubmitOtp = () => {
    setShowOtpDialog(false);
    setStep(2);
  };
  const handleReset = () => {
    setStep(1);
    setOtpValue("");
  };

  return (
    <PageLayout title="E-KYC Verification">
      <div className="space-y-6">
        {step === 1 && (
          <>
            <h3 className="text-lg font-semibold mb-6">EKyc-Verifivation</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-700">
                    Enter Mobile Number<span className="text-red-500">*</span>
                  </label>
                  <InputText
                    className="w-full"
                    placeholder="Enter Mobile Number"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-700">
                    Confirm Mobile Number<span className="text-red-500">*</span>
                  </label>
                  <InputText className="w-full" placeholder="Confirm" />
                </div>
              </div>
            </div>
            <div className="flex justify-center gap-3 mt-8 ">
              <Button
                label="Click to get OTP"
                className="bg-blue-600 border-none px-6"
                onClick={handleGetOtp}
              />
              <Button
                label="Clear"
                className="bg-red-600 border-none px-6"
                onClick={handleReset}
              />
            </div>
          </>
        )}
        {step === 2 && (
          <div className="animate-fade-in space-y-8">
            <div className="text-center">
              <h2 className="text-xl font-bold text-red-800 uppercase tracking-wide">
                ANIKET AHIRWAR
              </h2>
            </div>
            <div>
              <h3 className="text-sm font-bold mb-4 text-gray-700 uppercase">
                Basic Details Of Student From Aadhaar EKYC
                <span className="text-red-500">*</span>
              </h3>
              <DataTable
                value={adharData}
                className="p-datatable-sm"
                responsiveLayout="scroll"
                showGridlines={false}
                rowHover
              >
                <Column field="id" header="S. No." />
                <Column field="adharOrSssmid" header="Aadhaar Number" />
                <Column field="name" header="Name" />
                <Column field="guardianName" header="Father's Name" />
                <Column field="guardianRelation" header="Relation" />
                <Column field="dob" header="Date of Birth" />
                <Column field="gender" header="Gender" />
                <Column field="address" header="Permanent Address" />
                <Column field="pinCode" header="Pin Code" />
                <Column field="district" header="District" />
                <Column field="localBody" header="Local Body" />
                <Column field="landmark" header="Landmark" />
              </DataTable>
            </div>
            <div>
              <h3 className="text-sm font-bold mb-4 text-gray-700 uppercase">
                Student Basic Information From Madhya Pradesh Education Portal
                <span className="text-red-500">*</span>
              </h3>
              <DataTable
                value={portalData}
                className="p-datatable-sm"
                responsiveLayout="scroll"
                showGridlines={false}
                rowHover
              >
                <Column field="id" header="S. No." />
                <Column field="adharOrSssmid" header="SSSMID" />
                <Column field="name" header="Name" />
                <Column field="guardianName" header="Guardian Name" />
                <Column field="guardianRelation" header="Guardian Relation" />
                <Column field="dob" header="Date of Birth" />
                <Column field="gender" header="Gender" />
                <Column field="address" header="Address" />
                <Column field="pinCode" header="Pin Code" />
                <Column field="district" header="District" />
                <Column field="localBody" header="Local Body" />
                <Column field="landmark" header="Landmark" />
              </DataTable>
            </div>
            <div className="flex justify-center gap-3 pt-4">
              <Button
                label="Final Submit"
                className="bg-blue-600 border-none px-12"
              />
              <Button
                label="Clear"
                className="bg-red-600 border-none px-12"
                onClick={handleReset}
              />
            </div>
          </div>
        )}
        <Dialog
          header="Verify Mobile Number"
          visible={showOtpDialog}
          style={{ width: "550px" }}
          position="top"
          draggable={false}
          resizable={false}
          onHide={() => setShowOtpDialog(false)}
          className="rectangular-dialog"
        >
          <div className="space-y-6 py-4">
            <div className="flex items-center gap-4">
              <label className="font-semibold text-sm whitespace-nowrap">
                Please enter OTP <span className="text-red-500">*</span>
              </label>
              <InputText
                value={otpValue}
                onChange={(e) => setOtpValue(e.target.value)}
                placeholder="7655"
                className="w-24"
              />
              <Button
                label="Submit OTP"
                className="bg-blue-500 border-none text-sm px-4"
                onClick={handleSubmitOtp}
              />
            </div>
            <div className="flex justify-between items-center pt-2">
              <Button
                label="Resend OTP"
                className="bg-red-600 border-none text-xs px-4"
              />
              <div className="bg-indigo-500 text-white px-3 py-2 rounded text-xs font-medium shadow-sm">
                OTP has been sent to the entered mobile number!
              </div>
            </div>
          </div>
        </Dialog>
      </div>
    </PageLayout>
  );
};

export default EKycVerification;
