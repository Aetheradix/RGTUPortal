import React, { useState, useRef } from "react";
import PageLayout from "../../../components/PageLayout";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Dialog } from "primereact/dialog";
import { Toast } from "primereact/toast";

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
  const [step, setStep] = useState(1);
  const [showOtpDialog, setShowOtpDialog] = useState(false);
  const [otpValue, setOtpValue] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [confirmMobile, setConfirmMobile] = useState("");
  const toast = useRef<Toast>(null);

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

  const handleGetOtp = () => {
    if (!mobileNumber || !confirmMobile) {
      toast.current?.show({
        severity: "error",
        summary: "Error",
        detail: "Please enter all required fields",
        life: 3000,
      });
      return;
    }
    if (mobileNumber !== confirmMobile) {
      toast.current?.show({
        severity: "warn",
        summary: "Mismatch",
        detail: "Mobile numbers do not match",
        life: 3000,
      });
      return;
    }
    setShowOtpDialog(true);
  };

  const handleSubmitOtp = () => {
    if (otpValue === "7655") {
      setShowOtpDialog(false);
      setStep(2);
      toast.current?.show({
        severity: "success",
        summary: "Success",
        detail: "OTP Verified Successfully",
        life: 3000,
      });
    } else {
      toast.current?.show({
        severity: "error",
        summary: "Invalid OTP",
        detail: "Please enter a valid OTP",
        life: 3000,
      });
    }
  };

  const handleFinalSubmit = () => {
    toast.current?.show({
      severity: "success",
      summary: "Completed",
      detail: "E-KYC Verification Submitted Successfully",
      life: 4000,
    });
  };

  const handleReset = () => {
    setStep(1);
    setOtpValue("");
    setMobileNumber("");
    setConfirmMobile("");
    toast.current?.show({
      severity: "info",
      summary: "Reset",
      detail: "Form cleared",
      life: 2000,
    });
  };

  return (
    <PageLayout title="E-KYC Verification">
      <Toast ref={toast} />

      <div className="space-y-6">
        {step === 1 && (
          <div className="card p-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-4">
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium">
                  Enter Mobile Number<span className="text-red-500">*</span>
                </label>
                <InputText
                  className="w-full"
                  value={mobileNumber}
                  onChange={(e) => setMobileNumber(e.target.value)}
                  placeholder="Enter Mobile Number"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium">
                  Confirm Mobile Number<span className="text-red-500">*</span>
                </label>
                <InputText
                  className="w-full"
                  value={confirmMobile}
                  onChange={(e) => setConfirmMobile(e.target.value)}
                  placeholder="Confirm Mobile Number"
                />
              </div>
            </div>
            <div className="flex gap-2 ">
              <Button
                label="Click to get OTP"
                className="bg-blue-600 border-none px-6"
                onClick={handleGetOtp}
              />
              <Button
                label="Clear"
                icon="pi pi-refresh"
                className="p-button-outlined"
                onClick={handleReset}
              />
            </div>
          </div>
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
                onClick={handleFinalSubmit}
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
