import { Button } from "primereact/button";
import { Checkbox } from "primereact/checkbox";
import { Column } from "primereact/column";
import { DataTable, type DataTableExpandedRows } from "primereact/datatable";
import { Dialog } from "primereact/dialog";
import { Dropdown } from "primereact/dropdown";
import { InputText } from "primereact/inputtext";
import { Tag } from "primereact/tag";
import React, { useState } from "react";
import PageLayout from "../../../components/PageLayout";

interface RegistrationData {
  id: number;
  applNumber: string;
  allocationStatus: string;
  regNumber: string;
  firstName: string;
  lastName: string;
  dob: string;
  gender: string;
  fatherName: string;
  motherName: string;
  maritalStatus: string;
  bloodGroup: string;
  religion: string;
  category: string;
  nationality: string;
  mobile: string;
  email: string;
  state: string;
  division: string;
  district: string;
  block: string;
  pincode: string;
  address: string;
  qualification: string;
  board: string;
  passingYear: string;
  rollNo: string;
  percentage: string;
  subjects: string;
  courseLevel: string;
  courseName: string;
  specialization: string;
  admissionType: string;
  reservationCategory: string;
  isHandicapped: string;
  handicappedType?: string;
  handicappedPercentage?: string;
}

const StudentAdmissionForm: React.FC = () => {
  const [globalFilter, setGlobalFilter] = useState<string>("");
  const [expandedRows, setExpandedRows] = useState<
    DataTableExpandedRows | any[] | undefined
  >(undefined);
  const [showForm, setShowForm] = useState<boolean>(false);
  const [isSameAddress, setIsSameAddress] = useState<boolean>(false);

  const [students, setStudents] = useState<RegistrationData[]>([
    {
      id: 1,
      applNumber: "APPL12345",
      allocationStatus: "Round 1",
      regNumber: "15412572345",
      firstName: "Rahul",
      lastName: "Sharma",
      dob: "2000-04-10",
      gender: "Male",
      fatherName: "Abhay Sharma",
      motherName: "Sunita Sharma",
      maritalStatus: "Single",
      bloodGroup: "O+",
      religion: "Hindu",
      category: "General",
      nationality: "Indian",
      mobile: "9876543210",
      email: "rahul@example.com",
      state: "Madhya Pradesh",
      division: "Bhopal",
      district: "Bhopal",
      block: "Block 1",
      pincode: "462001",
      address: "123, ABC Street",
      qualification: "12th",
      board: "MP Board",
      passingYear: "2018",
      rollNo: "123456",
      percentage: "75%",
      subjects: "Science",
      courseLevel: "UG",
      courseName: "CS",
      specialization: "SE",
      admissionType: "Direct",
      reservationCategory: "SC",
      isHandicapped: "Yes",
    },
  ]);

  const allocationOptions = [
    "Round 1",
    "Round 2",
    "Round 3",
    "CLC Round (College Level Counseling)",
  ];
  const genderOptions = ["Male", "Female", "Transgender"];
  const maritalOptions = ["Yes", "No"];
  const bloodGroupOptions = ["A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"];
  const religionOptions = [
    "Hindu",
    "Muslim",
    "Christian",
    "Sikh",
    "Buddhist",
    "Jain",
    "Parsi",
    "Other",
  ];
  const categoryOptions = ["General", "OBC", "SC", "ST", "EWS"];
  const stateOptions = [
    "Madhya Pradesh",
    "Uttar Pradesh",
    "Rajasthan",
    "Maharashtra",
    "Gujarat",
  ];
  const divisionOptions = [
    "Bhopal",
    "Indore",
    "Gwalior",
    "Ujjain",
    "Jabalpur",
    "Sagar",
    "Rewa",
    "Chambal",
    "Narmada",
    "Shahdol",
  ];
  const districtOptions = [
    "Bhopal",
    "Raisen",
    "Rajgarh",
    "Sehore",
    "Vidisha",
    "Indore",
    "Gwalior",
  ];
  const blockOptions = ["Huzur", "Fanda", "Govindapura", "Berasia", "Sehore"];

  const deleteRecord = (id: number) => {
    setStudents(students.filter((s) => s.id !== id));
  };

  const rowExpansionTemplate = (data: RegistrationData) => {
    return (
      <div className="p-4 bg-gray-50 border-x border-b border-gray-200 rounded-b-lg shadow-inner">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-4">
          <div className="bg-white p-3 rounded shadow-sm border-t-2 border-blue-500 text-[11px]">
            <h4 className="font-bold text-gray-700 border-b mb-2 pb-1 uppercase">
              Family Details
            </h4>
            <p>
              <strong>Father:</strong> {data.fatherName}
            </p>
            <p>
              <strong>Mother:</strong> {data.motherName}
            </p>
            <p>
              <strong>Contact:</strong> {data.mobile}
            </p>
          </div>
        </div>
        <div className="flex justify-end">
          <Button
            label="Delete"
            icon="pi pi-trash"
            className="p-button-danger p-button-text font-bold"
            onClick={() => deleteRecord(data.id)}
          />
        </div>
      </div>
    );
  };

  return (
    <PageLayout title="Registration Management">
      <div className="bg-white p-4 rounded shadow-sm border border-gray-100">
        <div className="flex justify-between items-center mb-4">
          <div>
            <h2 className="text-xl font-bold text-gray-800 tracking-tight">
              Registration Form List
            </h2>
            <div className="flex items-center gap-2 text-xs text-gray-400 mt-1 uppercase font-semibold">
              <span>Admission Management System</span>
              <i className="pi pi-angle-right text-[10px]" />
              <span>Registration Form</span>
            </div>
          </div>
          <Button
            label="New Registration"
            icon="pi pi-user-plus"
            className="p-button-sm p-button-primary"
            onClick={() => setShowForm(true)}
          />
        </div>

        <DataTable
          value={students}
          expandedRows={expandedRows}
          onRowToggle={(e) => setExpandedRows(e.data)}
          rowExpansionTemplate={rowExpansionTemplate}
          dataKey="id"
          paginator
          rows={10}
          globalFilter={globalFilter}
          className="p-datatable-sm text-sm"
          stripedRows
          header={
            <div className="flex  justify-end">
              <span className="p-input-icon-left">

                <InputText
                  value={globalFilter}
                  onChange={(e) => setGlobalFilter(e.target.value)}
                  placeholder="Search Records..."
                  className="p-inputtext-sm w-64"
                />
              </span>
            </div>
          }
        >
          <Column expander={true} style={{ width: "3.5rem" }} header="Action" />
          <Column field="applNumber" header="App No." sortable />
          <Column field="firstName" header="First Name" sortable />
          <Column field="lastName" header="Last Name" sortable />
          <Column
            field="allocationStatus"
            header="Status"
            body={(rd) => (
              <Tag value={rd.allocationStatus} severity="warning" />
            )}
          />
          <Column field="mobile" header="Mobile" />
        </DataTable>

        <Dialog
          header="Student Registration Form"
          visible={showForm}
          style={{ width: "95vw" }}
          maximizable
          modal
          onHide={() => setShowForm(false)}
          footer={
            <div className="flex justify-center gap-3">
              <Button
                label="Save/Next"
                icon="pi pi-check"
                className="p-button-primary px-6"
                onClick={() => setShowForm(false)}
              />
              <Button
                label="Clear"
                icon="pi pi-refresh"
                className="p-button-danger p-button-outlined px-6"
              />
            </div>
          }
        >
          <div className="p-fluid">
            <div className="bg-gray-50 p-3 mb-4 rounded border-l-4 border-blue-600 font-bold text-gray-700">
              Student Personal Details
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
              <div className="field">
                <label className="text-xs font-semibold block mb-1">
                  Application Number
                </label>
                <InputText
                  placeholder="Enter Application Number"
                  className="p-inputtext-sm"
                />
              </div>
              <div className="field">
                <label className="text-xs font-semibold block mb-1">
                  Select Allocation Status
                </label>
                <Dropdown
                  options={allocationOptions}
                  placeholder="Select"
                  className="p-inputtext-sm"
                />
              </div>
              <div className="field">
                <label className="text-xs font-semibold block mb-1">
                  Student First Name*
                </label>
                <InputText
                  placeholder="Student First Name"
                  className="p-inputtext-sm"
                />
              </div>
              <div className="field">
                <label className="text-xs font-semibold block mb-1">
                  Student Last Name*
                </label>
                <InputText
                  placeholder="Student Last Name"
                  className="p-inputtext-sm"
                />
              </div>
              <div className="field">
                <label className="text-xs font-semibold block mb-1">
                  Date of Birth*
                </label>
                <InputText
                  type="date"
                  placeholder="dd/mm/yyyy"
                  className="p-inputtext-sm"
                />
              </div>
              <div className="field">
                <label className="text-xs font-semibold block mb-1">
                  Select Gender*
                </label>
                <Dropdown
                  options={genderOptions}
                  placeholder="Select"
                  className="p-inputtext-sm"
                />
              </div>
              <div className="field">
                <label className="text-xs font-semibold block mb-1">
                  Father's Name*
                </label>
                <InputText
                  placeholder="Enter Father's Name"
                  className="p-inputtext-sm"
                />
              </div>
              <div className="field">
                <label className="text-xs font-semibold block mb-1">
                  Father Occupation
                </label>
                <InputText
                  placeholder="Enter Father Occupation"
                  className="p-inputtext-sm"
                />
              </div>
              <div className="field">
                <label className="text-xs font-semibold block mb-1">
                  Mother's Name*
                </label>
                <InputText
                  placeholder="Enter Mother's Name"
                  className="p-inputtext-sm"
                />
              </div>
              <div className="field">
                <label className="text-xs font-semibold block mb-1">
                  Mother Occupation
                </label>
                <InputText
                  placeholder="Enter Mother Occupation"
                  className="p-inputtext-sm"
                />
              </div>
              <div className="field">
                <label className="text-xs font-semibold block mb-1">
                  Select Marital Status*
                </label>
                <Dropdown
                  options={maritalOptions}
                  placeholder="Select"
                  className="p-inputtext-sm"
                />
              </div>
              <div className="field">
                <label className="text-xs font-semibold block mb-1">
                  Select Blood Group*
                </label>
                <Dropdown
                  options={bloodGroupOptions}
                  placeholder="Select"
                  className="p-inputtext-sm"
                />
              </div>
              <div className="field">
                <label className="text-xs font-semibold block mb-1">
                  Religion*
                </label>
                <Dropdown
                  options={religionOptions}
                  placeholder="Select"
                  className="p-inputtext-sm"
                />
              </div>
              <div className="field">
                <label className="text-xs font-semibold block mb-1">
                  Select Category*
                </label>
                <Dropdown
                  options={categoryOptions}
                  placeholder="Select Category"
                  className="p-inputtext-sm"
                />
              </div>
              <div className="field">
                <label className="text-xs font-semibold block mb-1">
                  Nationality*
                </label>
                <InputText
                  placeholder="Enter Nationality"
                  className="p-inputtext-sm"
                />
              </div>
              <div className="field">
                <label className="text-xs font-semibold block mb-1">
                  Mobile Number*
                </label>
                <InputText
                  placeholder="Enter Mobile Number"
                  className="p-inputtext-sm"
                />
              </div>
              <div className="field">
                <label className="text-xs font-semibold block mb-1">
                  Alternate Mobile Number
                </label>
                <InputText
                  placeholder="Enter Alternate Mobile Number"
                  className="p-inputtext-sm"
                />
              </div>
              <div className="field">
                <label className="text-xs font-semibold block mb-1">
                  Email Address*
                </label>
                <InputText
                  placeholder="Enter Email Address"
                  className="p-inputtext-sm"
                />
              </div>
            </div>

            <div className="bg-gray-50 p-3 mb-4 rounded border-l-4 border-green-600 font-bold text-gray-700 uppercase text-sm">
              Address Information
            </div>
            <h4 className="font-bold text-blue-600 mb-2 px-1 underline underline-offset-4">
              Present Address
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
              <div className="field">
                <label className="text-xs font-semibold block mb-1">
                  Select State*
                </label>
                <Dropdown
                  options={stateOptions}
                  placeholder="Select"
                  className="p-inputtext-sm"
                />
              </div>
              <div className="field">
                <label className="text-xs font-semibold block mb-1">
                  Select Division*
                </label>
                <Dropdown
                  options={divisionOptions}
                  placeholder="Select"
                  className="p-inputtext-sm"
                />
              </div>
              <div className="field">
                <label className="text-xs font-semibold block mb-1">
                  Select District*
                </label>
                <Dropdown
                  options={districtOptions}
                  placeholder="Select"
                  className="p-inputtext-sm"
                />
              </div>
              <div className="field">
                <label className="text-xs font-semibold block mb-1">
                  Select Block*
                </label>
                <Dropdown
                  options={blockOptions}
                  placeholder="Select"
                  className="p-inputtext-sm"
                />
              </div>
              <div className="field">
                <label className="text-xs font-semibold block mb-1">
                  Pincode*
                </label>
                <InputText
                  placeholder="Enter Pincode"
                  className="p-inputtext-sm"
                />
              </div>
              <div className="field">
                <label className="text-xs font-semibold block mb-1">
                  Address line 1*
                </label>
                <InputText
                  placeholder="Enter Address line 1"
                  className="p-inputtext-sm"
                />
              </div>
              <div className="field">
                <label className="text-xs font-semibold block mb-1">
                  Address line 2*
                </label>
                <InputText
                  placeholder="Enter Address line 2"
                  className="p-inputtext-sm"
                />
              </div>
            </div>

            <div className="flex items-center gap-2 mb-4 bg-blue-50 p-2 rounded">
              <Checkbox
                checked={isSameAddress}
                onChange={(e) => setIsSameAddress(e.checked || false)}
                inputId="sameAddress"
              />
              <label
                htmlFor="sameAddress"
                className="text-xs font-bold text-blue-800 cursor-pointer"
              >
                Permanent Address same as Present Address
              </label>
            </div>

            <h4 className="font-bold text-blue-600 mb-2 px-1 underline underline-offset-4">
              Permanent Address
            </h4>
            {!isSameAddress && (
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                <div className="field">
                  <label className="text-xs font-semibold block mb-1">
                    Select State Name
                  </label>
                  <Dropdown
                    options={stateOptions}
                    placeholder="Select"
                    className="p-inputtext-sm"
                  />
                </div>
                <div className="field">
                  <label className="text-xs font-semibold block mb-1">
                    Select Division
                  </label>
                  <Dropdown
                    options={divisionOptions}
                    placeholder="Select"
                    className="p-inputtext-sm"
                  />
                </div>
                <div className="field">
                  <label className="text-xs font-semibold block mb-1">
                    Select District
                  </label>
                  <Dropdown
                    options={districtOptions}
                    placeholder="Select"
                    className="p-inputtext-sm"
                  />
                </div>
                <div className="field">
                  <label className="text-xs font-semibold block mb-1">
                    Select Block Name
                  </label>
                  <Dropdown
                    options={blockOptions}
                    placeholder="Select"
                    className="p-inputtext-sm"
                  />
                </div>
                <div className="field">
                  <label className="text-xs font-semibold block mb-1">
                    Pincode No.
                  </label>
                  <InputText
                    placeholder="Enter Pincode No."
                    className="p-inputtext-sm"
                  />
                </div>
                <div className="field">
                  <label className="text-xs font-semibold block mb-1">
                    Address line 1
                  </label>
                  <InputText
                    placeholder="Enter Address line 1"
                    className="p-inputtext-sm"
                  />
                </div>
                <div className="field">
                  <label className="text-xs font-semibold block mb-1">
                    Address line 2
                  </label>
                  <InputText
                    placeholder="Enter Address line 2"
                    className="p-inputtext-sm"
                  />
                </div>
              </div>
            )}
          </div>
        </Dialog>
      </div>
    </PageLayout>
  );
};

export default StudentAdmissionForm;
