import React, { useState } from "react";
import PageLayout from "../../../components/PageLayout";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { Checkbox, type CheckboxChangeEvent } from "primereact/checkbox";
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
  const [status, setStatus] = useState<boolean>(false);

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
  };

  return (
    <PageLayout title="Upload Documents">
      <div className="bg-white p-4 rounded shadow mb-6">
        <div className="flex flex-wrap items-end gap-4">
          <div className="flex flex-col w-full md:w-auto">
            <label className="font-medium">Registration No.*</label>
            <InputText
              value={regNo}
              onChange={(e) => setRegNo(e.target.value)}
              placeholder="Enter Registration No."
              className="w-full md:max-w-sm"
            />
          </div>
          <div>
            <Button
              label="Search"
              icon="pi pi-search"
              className="p-button-sm bg-indigo-600 text-white"
              onClick={handleSearch}
            />
          </div>
          <div>
            <Button
              label="Clear"
              icon="pi pi-times"
              className="p-button-sm bg-red-300 text-black"
              onClick={handleClearForm}
            />
          </div>

        </div>
      </div>
      {student && (
        <>
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
          <div className="bg-white p-6 rounded shadow">
            <h3 className="text-lg font-semibold mb-4">Upload Documents</h3>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
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

              <div className="flex items-center">
                <Checkbox
                  inputId="statusCheck"
                  checked={status}
                  onChange={(e: CheckboxChangeEvent) =>
                    setStatus(e.checked ?? false)
                  }
                />
                <label htmlFor="statusCheck" className="ml-2 font-semibold">
                  Active
                </label>
              </div>
            </div>
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
