import React, { useState } from "react";
import PageLayout from "@/components/PageLayout";
import Input, { DateInput } from "@/ui/shared/Input";
import Dropdown from "@/ui/shared/Dropdown";
import Table from "@/ui/shared/Table";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import { FileUpload } from "primereact/fileupload";
import { Checkbox } from "primereact/checkbox";

interface FamilyMember {
  id: number;
  name: string;
  dob: Date;
  gender: string;
  occupation: string;
  relation: string;
}

interface FamilyMemberRow {
  srNo: number;
  selectApplicant: boolean;
  name: string;
  dob: string;
  gender: string;
  occupation: string;
  relation: string;
  action: string;
}

const ApplyForAnukampaAppointment: React.FC = () => {
  const [activeTab, setActiveTab] =
    useState<"personal" | "document">("personal");

  const [familyMembers, setFamilyMembers] = useState<FamilyMember[]>([]);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [selfVerified, setSelfVerified] = useState(false);
  const [selfVerifieded, setSelfVerifieded] = useState(false);

  const addMember = (): void => {
    if (familyMembers.length > 0) return;

    setFamilyMembers([
      {
        id: 1,
        name: "Ramesh Kumar",
        dob: new Date(1998, 4, 10),
        gender: "Male",
        occupation: "Student",
        relation: "Son",
      },
    ]);
  };

  const familyColumns = [
    { field: "srNo", header: "Sr.No." },
    {
      field: "selectApplicant",
      header: "Select Applicant",
      body: () => <input type="checkbox" />,
    },
    { field: "name", header: "Name Of Family Member" },
    { field: "dob", header: "Date Of Birth" },
    { field: "gender", header: "Gender" },
    { field: "occupation", header: "Occupation" },
    { field: "relation", header: "Relationship With The Deceased" },
    { field: "action", header: "Action" },
  ];

  const familyData: FamilyMemberRow[] = familyMembers.map((m, i) => ({
    srNo: i + 1,
    selectApplicant: false,
    name: m.name,
    dob: m.dob.toLocaleDateString(),
    gender: m.gender,
    occupation: m.occupation,
    relation: m.relation,
    action: "🗑",
  }));

  const documentList = [
    "Death Certificate of Deceased Government Servant",
    "Birth Certificate of the Applicant",
    "Certificate of Residence/Domicile",
    "Caste Certificate",
    "Certificate of Passing Higher Secondary/Graduation or Other Examination",
    "Consent Certificate from the Head of the Family",
    "Applicant's Photo",
    "Family Samagra Id",
  ];

  const handleFinalSubmit = () => {
    if (!selfVerified) return;
    setShowConfirmModal(true);
  };

  const handleConfirmYes = () => {
    setShowConfirmModal(false);
    setShowSuccessModal(true);
  };

  const handleFinalOk = () => {
    setShowSuccessModal(false);
  };

  return (
    <PageLayout title="Apply for Anukampa Appointment">
      <div className="flex gap-3 mb-6">
        <Button
          label="Personal Information"
          className={activeTab === "personal" ? "bg-blue-600" : "p-button-outlined"}
          onClick={() => setActiveTab("personal")}
        />
        <Button
          label="Upload Certificate"
          className={activeTab === "document" ? "bg-blue-600" : "p-button-outlined"}
          onClick={() => setActiveTab("document")}
        />
      </div>

      {activeTab === "personal" && (
        <div className="space-y-6">
          <div className="bg-white p-6 rounded border border-blue-300">
            <h3 className="font-bold text-blue-600 mb-4">
              Details of Deceased Officer/Employee
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <Input label="Deceased Officer/Employee Code" disabled />
              <Input label="Full Name of Deceased Employee" disabled />
              <Input label="Gender" disabled />
              <Input label="Caste" disabled />
              <Input label="Last Posting District Name" disabled />
              <Input label="Deceased Officer/Staff Cadre" disabled />
              <Input label="Deceased Officer/Employee Designation" disabled />
              <Input label="Department Name" disabled />
              <DateInput label="Select Date of Death *" />
              <Input label="Enter Cause of Death *" />
              <Dropdown
                label="Select Number of Surviving Family Members *"
                options={[
                  { label: "1", value: 1 },
                  { label: "2", value: 2 },
                  { label: "3", value: 3 },
                ]}
              />
            </div>
          </div>

          <div className="bg-white p-6 rounded border border-blue-300">
            <h3 className="font-bold text-blue-600 mb-4">
              Details of Family Members of Deceased Public Servant / Teacher
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <Input label="Enter Name of Member *" />
              <DateInput label="Select Date of Birth *" />
              <Dropdown
                label="Select Gender *"
                options={[
                  { label: "Male", value: "Male" },
                  { label: "Female", value: "Female" },
                ]}
              />
              <Dropdown
                label="Select Relation with Deceased *"
                options={[
                  { label: "Son", value: "Son" },
                  { label: "Daughter", value: "Daughter" },
                ]}
              />
              <Input label="Enter Occupation *" />
            </div>

            <Button
              label="Add"
              className="bg-green-600 mt-4"
              onClick={addMember}
            />

            {familyMembers.length > 0 && (
              <Table
                columns={familyColumns}
                data={familyData}
                showPagination={false}
              />
            )}
          </div>

          <div className="bg-white p-6 rounded border border-blue-300">
            <h3 className="font-bold text-blue-600 mb-4">
              Details of the Family Member Who has Applied for Appointment
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <Input label="Applicant Name *" disabled />
              <Input label="Relation with Deceased *" disabled />
              <DateInput label="Date of Birth *" />
              <Input label="Gender *" disabled />
              <Input label="Occupation *" />
              <Dropdown label="Select Marital Status *" options={[]} />
              <Input label="Enter Mobile No. *" />
              <Dropdown label="Enter Applicant Qualification *" options={[]} />
              <Dropdown
                label="Have Family Members Given Consent? *"
                options={[
                  { label: "Yes", value: "Yes" },
                  { label: "No", value: "No" },
                ]}
              />
            </div>

            <div className="flex gap-3 mt-6">
              <Button
                label="Save & Next"
                className="bg-green-600"
                onClick={() => setActiveTab("document")}
              />
              <Button label="Clear" severity="danger" />
            </div>
          </div>
        </div>
      )}
      {activeTab === "document" && (
        <div className="bg-white p-6 rounded border border-blue-300">
          <h3 className="font-bold text-blue-600 mb-2">Document</h3>
          <p className="text-red-500 text-sm mb-4">
            Note : Please upload a PDF or JPG file that is less than 500 KB in size.
          </p>

          <table className="w-full border text-sm mb-6">
            <thead className="bg-gray-100">
              <tr>
                <th className="border p-2">Sr.No.</th>
                <th className="border p-2 text-left">Documents Name</th>
                <th className="border p-2">Upload Documents</th>
                <th className="border p-2">View Documents</th>
              </tr>
            </thead>
            <tbody>
              {documentList.map((doc, index) => (
                <tr key={index}>
                  <td className="border p-2 text-center">{index + 1}</td>
                  <td className="border p-2">{doc} *</td>
                  <td className="border p-2">
                    <FileUpload
                      mode="basic"
                      chooseLabel="Choose File"
                      accept=".pdf,.jpg,.jpeg"
                      maxFileSize={500000}
                    />
                  </td>
                  <td className="border p-2 text-center">
                    <Button label="View" size="small" className="bg-green-600" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="border-t pt-4">
            <h3 className="font-bold mb-3">Self Verification</h3>

            <div className="flex gap-2 mb-3">
              <Checkbox
                checked={selfVerified}
                onChange={(e) => setSelfVerified(e.checked ?? false)}
              />
              <p className="text-sm text-red-600">
                I hereby declare that the above information given by me is true to the
                best of my knowledge and belief, if the information given by me is found
                to be false or incorrect before or after the appointment, or if any
                ineligibility is found after the appointment, then I am fully aware that
                my appointment will be cancelled and I will be responsible for any
                action taken by me under the laws and rules provided in this regard.
              </p>
            </div>
              <Checkbox
                checked={selfVerifieded}
                onChange={(e) => setSelfVerifieded(e.checked ?? false)}
              />
            <p className="text-sm text-red-600 ml-6">
              I also undertake that I will provide proper maintenance to other members
              of the family of late Shri/Smt. Rajeshwarprasad Tiwari. If it is proved at
              any time that I am ignoring the family members or not providing them
              proper maintenance, my compassionate appointment can be terminated.
            </p>
          </div>

          <div className="flex gap-3 mt-6">
            <Button
              label="Final Submit"
              className="bg-green-600"
              disabled={!selfVerified || !selfVerifieded}
              onClick={handleFinalSubmit}
            />
            <Button label="Clear" severity="danger" />
          </div>
        </div>
      )}

      <Dialog
        header="Confirmation"
        visible={showConfirmModal}
        style={{ width: "450px" }}
        onHide={() => setShowConfirmModal(false)}
        draggable={false}
      >
        <div className="text-center p-4">
          <i className="pi pi-exclamation-triangle text-yellow-500 text-5xl mb-4"></i>
          <h3 className="text-xl font-bold mb-2">Are you sure?</h3>
          <p className="text-gray-600 mb-6">
            Do you want to save this record?
          </p>
          <div className="flex justify-center gap-3">
            <Button
              label="Yes"
              className="bg-blue-600 px-8"
              onClick={handleConfirmYes}
            />
            <Button
              label="Cancel"
              outlined
              severity="danger"
              className="px-8"
              onClick={() => setShowConfirmModal(false)}
            />
          </div>
        </div>
      </Dialog>

      <Dialog
        header="Success!"
        visible={showSuccessModal}
        style={{ width: "400px" }}
        onHide={handleFinalOk}
        draggable={false}
      >
        <div className="text-center p-4">
          <i className="pi pi-check-circle text-green-500 text-5xl mb-4"></i>
          <h3 className="text-xl font-bold text-green-600 mb-2">Success!</h3>
          <p className="text-gray-600 mb-6">Record Saved Successfully!</p>
          <div className="flex justify-center">
            <Button
              label="OK"
              className="bg-green-600 px-10"
              onClick={handleFinalOk}
            />
          </div>
        </div>
      </Dialog>
    </PageLayout>
  );
};

export default ApplyForAnukampaAppointment;
