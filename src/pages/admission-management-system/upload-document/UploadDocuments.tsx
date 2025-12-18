import React, { useState } from "react";
import PageLayout from "../../../components/PageLayout";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { Checkbox } from "primereact/checkbox";

interface StudentPersonal {
  studentName: string;
  fatherName: string;
  dob: string;
  gender: string;
  bloodGroup: string;
  category: string;
  mobile: string;
}

const UploadDocuments: React.FC = () => {
  const [regNo, setRegNo] = useState("");
  const [student, setStudent] = useState<StudentPersonal | null>(null);

  const [passportPhoto, setPassportPhoto] = useState<File | null>(null);
  const [signature, setSignature] = useState<File | null>(null);
  const [mark10, setMark10] = useState<File | null>(null);
  const [mark12, setMark12] = useState<File | null>(null);
  const [transferCert, setTransferCert] = useState<File | null>(null);
  const [casteCert, setCasteCert] = useState<File | null>(null);
  const [incomeCert, setIncomeCert] = useState<File | null>(null);
  const [status, setStatus] = useState(false);

  const handleSearch = () => {
    setStudent({
      studentName: "Rahi Sharma",
      fatherName: "Rajesh Sharma",
      dob: "22/11/1998",
      gender: "Female",
      bloodGroup: "O+",
      category: "OBC",
      mobile: "9586321475",
    });
  };

  const handleClearForm = () => {
    setRegNo("");
    setStudent(null);
    setPassportPhoto(null);
    setSignature(null);
    setMark10(null);
    setMark12(null);
    setTransferCert(null);
    setCasteCert(null);
    setIncomeCert(null);
    setStatus(false);
  };

  const handleSave = () => {
    const payload = {
      regNo,
      passportPhoto,
      signature,
      mark10,
      mark12,
      transferCert,
      casteCert,
      incomeCert,
      status,
    };
    console.log("SAVE UPLOAD:", payload);
    // TODO: send payload to API
  };

  return (
    <PageLayout title="Upload Documents">
      {/* Search Section */}
      <div className="bg-white p-4 rounded shadow mb-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
          <div className="md:col-span-2">
            <label className="font-medium">Registration No.*</label>
            <InputText
              className="w-full"
              placeholder="Enter Registration No."
              value={regNo}
              onChange={(e) => setRegNo(e.target.value)}
            />
          </div>
          <Button
            label="Search"
            className="bg-indigo-600 border-none text-white"
            onClick={handleSearch}
          />
          <Button
            label="Clear"
            className="bg-red-300 border-none text-black"
            onClick={handleClearForm}
          />
        </div>
      </div>

      {student && (
        <>
          {/* Student Personal Details */}
          <div className="bg-white p-4 rounded shadow mb-6">
            <h3 className="text-lg font-semibold mb-3">
              Student Personal Details
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div>
                <label>Student Name</label>
                <InputText
                  value={student.studentName}
                  disabled
                  className="w-full bg-gray-200"
                />
              </div>
              <div>
                <label>Father's Name</label>
                <InputText
                  value={student.fatherName}
                  disabled
                  className="w-full bg-gray-200"
                />
              </div>
              <div>
                <label>Date of Birth</label>
                <InputText
                  value={student.dob}
                  disabled
                  className="w-full bg-gray-200"
                />
              </div>
              <div>
                <label>Gender</label>
                <InputText
                  value={student.gender}
                  disabled
                  className="w-full bg-gray-200"
                />
              </div>
              <div>
                <label>Blood Group</label>
                <InputText
                  value={student.bloodGroup}
                  disabled
                  className="w-full bg-gray-200"
                />
              </div>
              <div>
                <label>Category</label>
                <InputText
                  value={student.category}
                  disabled
                  className="w-full bg-gray-200"
                />
              </div>
              <div>
                <label>Mobile Number</label>
                <InputText
                  value={student.mobile}
                  disabled
                  className="w-full bg-gray-200"
                />
              </div>
            </div>
          </div>

          {/* Upload Documents Section */}
          <div className="bg-white p-6 rounded shadow">
            <h3 className="text-lg font-semibold mb-4">Upload Documents</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {/* File Upload Inputs */}
              <div>
                <label>Passport Size Photograph</label>
                <InputText
                  type="file"
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    if (e.target.files) setPassportPhoto(e.target.files[0]);
                  }}
                  className="w-full"
                />
              </div>

              <div>
                <label>Signature</label>
                <InputText
                  type="file"
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    if (e.target.files) setSignature(e.target.files[0]);
                  }}
                  className="w-full"
                />
              </div>

              <div>
                <label>10th Mark Sheets</label>
                <InputText
                  type="file"
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    if (e.target.files) setMark10(e.target.files[0]);
                  }}
                  className="w-full"
                />
              </div>

              <div>
                <label>12th Mark Sheets</label>
                <InputText
                  type="file"
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    if (e.target.files) setMark12(e.target.files[0]);
                  }}
                  className="w-full"
                />
              </div>

              <div>
                <label>Transfer Certificate/Migration</label>
                <InputText
                  type="file"
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    if (e.target.files) setTransferCert(e.target.files[0]);
                  }}
                  className="w-full"
                />
              </div>

              <div>
                <label>Caste Certificate</label>
                <InputText
                  type="file"
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    if (e.target.files) setCasteCert(e.target.files[0]);
                  }}
                  className="w-full"
                />
              </div>

              <div>
                <label>Income Certificate</label>
                <InputText
                  type="file"
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    if (e.target.files) setIncomeCert(e.target.files[0]);
                  }}
                  className="w-full"
                />
              </div>

              {/* Status Checkbox */}
              <div className="flex items-center">
                <Checkbox
                  inputId="statusCheck"
                  checked={status}
                  onChange={(e) => setStatus(e.checked ?? false)}
                />
                <label htmlFor="statusCheck" className="ml-2 font-semibold">
                  Active
                </label>
              </div>
            </div>

            {/* Save / Clear Buttons */}
            <div className="flex justify-center gap-4 pt-6">
              <Button
                label="Save"
                className="bg-indigo-600 text-white px-8"
                onClick={handleSave}
              />
              <Button
                label="Clear"
                className="bg-red-300 text-black px-8"
                onClick={handleClearForm}
              />
            </div>
          </div>
        </>
      )}
    </PageLayout>
  );
};

export default UploadDocuments;
