import React, { useState, useRef } from "react";
import PageLayout from "../../../components/PageLayout";
import { DataTable, type DataTableExpandedRows } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { Dropdown } from "primereact/dropdown";
import { ConfirmDialog, confirmDialog } from "primereact/confirmdialog";
import { Toast } from "primereact/toast";
=======
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
interface Student {
  id: number;
  applNumber: string;
  firstName: string;
  lastName: string;
  allocationStatus: string;
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
  resCategory: string;
  isHandicapped: string;
  handicapType: string;
  handicapPercent: string;
}

const StudentAdmissionForm: React.FC = () => {
  const toast = useRef<Toast>(null);

  const [showForm, setShowForm] = useState<boolean>(false);
  const [activeStep, setActiveStep] = useState<number>(1);
  const [expandedRows, setExpandedRows] = useState<
    DataTableExpandedRows | undefined
  >(undefined);
  const [isHandicapped, setIsHandicapped] = useState<string>("No");

  const allocationOptions = ["Round 1", "Round 2", "Round 3", "CLC Round"];
  const genderOptions = ["Male", "Female", "Transgender"];
  const maritalOptions = ["Single", "Married", "Divorced"];
  const bloodGroups = ["A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"];
  const religions = [
    "Hindu",
    "Muslim",
    "Christian",
    "Sikh",
    "Buddhist",
    "Jain",
  ];
  const categories = ["General", "OBC", "SC", "ST", "EWS"];
  const states = [
    "Madhya Pradesh",
    "Uttar Pradesh",
    "Maharashtra",
    "Rajasthan",
    "Delhi",
  ];
  const divisions = [
    "Bhopal",
    "Indore",
    "Gwalior",
    "Ujjain",
    "Jabalpur",
    "Sagar",
    "Rewa",
  ];
  const districts = ["Bhopal", "Raisen", "Rajgarh", "Sehore", "Vidisha"];
  const blocks = ["Huzur", "Fanda", "Govindapura", "Berasia"];
  const qualifications = [
    "10th",
    "12th",
    "Diploma",
    "Graduation",
    "Post Graduation",
  ];
  const courseLevels = [
    "Under Graduate",
    "Post Graduate",
    "Diploma",
    "Certificate",
  ];
  const courseNames = ["B.Tech", "M.Tech", "BCA", "MCA", "B.Sc (IT)", "MBA"];
  const specializations = [
    "Computer Science",
    "Information Technology",
    "AI",
    "Data Science",
  ];
  const admissionTypes = ["Regular", "Lateral Entry", "Direct Admission"];
  const handicapTypes = [
    "Blindness",
    "Low Vision",
    "Hearing Impairment",
    "Mental Illness",
    "Physical Disability",
  ];
  const handicapPercentages = [
    "40-50%",
    "50-60%",
    "60-70%",
    "70-80%",
    "80-90%",
    "90-100%",
  ];

  const [students, setStudents] = useState<Student[]>([
    {
      id: 1,
      applNumber: "APPL9921",
      firstName: "Rahul",
      lastName: "Sharma",
      allocationStatus: "Round 1",
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
      address: "123, ABC Street, Bhopal",
      qualification: "12th",
      board: "MP Board",
      passingYear: "2018",
      rollNo: "123456",
      percentage: "75%",
      subjects: "Science",
      courseLevel: "Undergraduate",
      courseName: "Computer Science",
      specialization: "Software Engineering",
      admissionType: "Direct Admission",
      resCategory: "SC",
      isHandicapped: "Yes",
      handicapType: "Physical Disability",
      handicapPercent: "40%",
    },
  ]);

  const handleStepSave = (nextStep: number) => {
    confirmDialog({
      message: "Do you want to save and proceed to the next step?",
      header: "Confirmation",
      icon: "pi pi-exclamation-triangle",
      accept: () => {
        setActiveStep(nextStep);
      },
    });
  };

  const finalizeRegistration = () => {
    confirmDialog({
      message: "Are you sure you want to complete the registration?",
      header: "Final Submission",
      icon: "pi pi-check-circle",
      accept: () => {
        setShowForm(false);
        setActiveStep(1);
        toast.current?.show({
          severity: "success",
          summary: "Success",
          detail: "Registration Completed",
          life: 3000,
        });
      },
    });
  };

  const rowExpansionTemplate = (data: Student) => (
    <div className="p-4 bg-gray-50 border rounded-lg m-2 grid grid-cols-1 md:grid-cols-4 gap-4 text-xs">
      <div className="bg-white p-3 rounded shadow-sm">
        <h4 className="font-bold text-gray-700 mb-2 border-b pb-1">
          Personal Details
        </h4>
        <p>
          <strong>Mother:</strong> {data.motherName}
        </p>
        <p>
          <strong>Marital Status:</strong> {data.maritalStatus}
        </p>
        <p>
          <strong>Blood Group:</strong> {data.bloodGroup}
        </p>
        <p>
          <strong>Mobile:</strong> {data.mobile}
        </p>
      </div>
      <div className="bg-white p-3 rounded shadow-sm">
        <h4 className="font-bold text-gray-700 mb-2 border-b pb-1">Address</h4>
        <p>
          <strong>District:</strong> {data.district}
        </p>
        <p>
          <strong>Block:</strong> {data.block}
        </p>
        <p>
          <strong>State:</strong> {data.state}
        </p>
        <p>
          <strong>Pincode:</strong> {data.pincode}
        </p>
      </div>
      <div className="bg-white p-3 rounded shadow-sm">
        <h4 className="font-bold text-gray-700 mb-2 border-b pb-1">Academic</h4>
        <p>
          <strong>Course:</strong> {data.courseName}
        </p>
        <p>
          <strong>Specialization:</strong> {data.specialization}
        </p>
        <p>
          <strong>Roll No:</strong> {data.rollNo}
        </p>
      </div>
      <div className="bg-white p-3 rounded shadow-sm flex flex-col justify-center gap-2">
        
        <Button
          label="Delete"
          icon="pi pi-trash"
          className="p-button-sm p-button-danger p-button-outlined"
          onClick={() => setStudents(students.filter((s) => s.id !== data.id))}
        />
      </div>
    </div>
  );

  return (
    <PageLayout title="Admission System">
      <Toast ref={toast} />
      <ConfirmDialog />

      {!showForm ? (
        <div className="bg-white p-4 rounded shadow-sm border">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold">Registration Form List</h2>
            <Button
              label="Add Registration"
              icon="pi pi-plus"
              className="p-button-sm"
              onClick={() => {
                setShowForm(true);
                setActiveStep(1);
              }}
            />
          </div>
          <DataTable
            value={students}
            expandedRows={expandedRows}
            onRowToggle={(e) =>
              setExpandedRows(e.data as DataTableExpandedRows)
            }
            rowExpansionTemplate={rowExpansionTemplate}
            dataKey="id"
            paginator
            rows={10}
            className="p-datatable-sm"
          >
            <Column expander style={{ width: "3rem" }} />
            <Column field="applNumber" header="Appl No." />
            <Column
              field="firstName"
              header="Name"
              body={(rd: Student) => `${rd.firstName} ${rd.lastName}`}
            />
            <Column field="mobile" header="Mobile" />
            <Column field="courseName" header="Course" />
          </DataTable>
        </div>
      ) : (
        <div className="bg-white p-6 rounded shadow-sm border">
          <div className="flex justify-between items-center mb-6 border-b pb-4">
            <h2 className="text-xl font-bold uppercase">
              New Student Registration
            </h2>
            <Button
              label="Go Back to List"
              icon="pi pi-arrow-left"
              className="p-button-text p-button-sm"
              onClick={() => setShowForm(false)}
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

          {activeStep === 1 && (
            <div className="p-fluid">
              <h3 className="font-bold text-gray-700 mb-4 border-l-4 border-blue-500 pl-2">
                1. Personal Details
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="field">
                  <label className="text-xs font-bold">Application No</label>
                  <InputText className="p-inputtext-sm" />
                </div>
                <div className="field">
                  <label className="text-xs font-bold">Allocation Status</label>
                  <Dropdown options={allocationOptions} placeholder="Select" />
                </div>
                <div className="field">
                  <label className="text-xs font-bold">First Name*</label>
                  <InputText className="p-inputtext-sm" />
                </div>
                <div className="field">
                  <label className="text-xs font-bold">Last Name*</label>
                  <InputText className="p-inputtext-sm" />
                </div>
                <div className="field">
                  <label className="text-xs font-bold">Gender*</label>
                  <Dropdown options={genderOptions} placeholder="Select" />
                </div>
                <div className="field">
                  <label className="text-xs font-bold">Marital Status</label>
                  <Dropdown options={maritalOptions} placeholder="Select" />
                </div>
                <div className="field">
                  <label className="text-xs font-bold">Blood Group</label>
                  <Dropdown options={bloodGroups} placeholder="Select" />
                </div>
                <div className="field">
                  <label className="text-xs font-bold">Religion*</label>
                  <Dropdown options={religions} placeholder="Select" />
                </div>
                <div className="field">
                  <label className="text-xs font-bold">Category*</label>
                  <Dropdown options={categories} placeholder="Select" />
                </div>
                <div className="field">
                  <label className="text-xs font-bold">State*</label>
                  <Dropdown options={states} placeholder="Select" />
                </div>
                <div className="field">
                  <label className="text-xs font-bold">Division*</label>
                  <Dropdown options={divisions} placeholder="Select" />
                </div>
                <div className="field">
                  <label className="text-xs font-bold">District*</label>
                  <Dropdown options={districts} placeholder="Select" />
                </div>
                <div className="field">
                  <label className="text-xs font-bold">Block*</label>
                  <Dropdown options={blocks} placeholder="Select" />
                </div>
                <div className="field">
                  <label className="text-xs font-bold">Pincode*</label>
                  <InputText className="p-inputtext-sm" />
                </div>
                <div className="field md:col-span-2">
                  <label className="text-xs font-bold">Full Address*</label>
                  <InputText className="p-inputtext-sm" />
                </div>
              </div>
              <div className="flex justify-end gap-2 mt-8 pt-4 border-t">
                <Button
                  label="Clear"
                  icon="pi pi-refresh"
                  className="p-button-text p-button-secondary"
                />
                <Button
                  label="Save & Next"
                  icon="pi pi-arrow-right"
                  onClick={() => handleStepSave(2)}
                />
              </div>

            </div>
          )}

          {activeStep === 2 && (
            <div className="p-fluid">
              <h3 className="font-bold text-gray-700 mb-4 border-l-4 border-orange-500 pl-2">
                2. Academic Details
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="field">
                  <label className="text-xs font-bold">Qualification*</label>
                  <Dropdown options={qualifications} placeholder="Select" />
                </div>
                <div className="field">
                  <label className="text-xs font-bold">Board/University*</label>
                  <InputText className="p-inputtext-sm" />
                </div>
                <div className="field">
                  <label className="text-xs font-bold">Year of Passing*</label>
                  <InputText className="p-inputtext-sm" />
                </div>
                <div className="field">
                  <label className="text-xs font-bold">Roll Number*</label>
                  <InputText className="p-inputtext-sm" />
                </div>
                <div className="field">
                  <label className="text-xs font-bold">Percentage*</label>
                  <InputText className="p-inputtext-sm" />
                </div>
                <div className="field">
                  <label className="text-xs font-bold">Subjects/Branch</label>
                  <InputText className="p-inputtext-sm" />
                </div>
              </div>
              <div className="flex justify-end gap-2 mt-8 pt-4 border-t">
                <Button
                  label="Go Back"
                  icon="pi pi-arrow-left"
                  className="p-button-text"
                  onClick={() => setActiveStep(1)}
                />
                <Button
                  label="Save & Next"
                  icon="pi pi-arrow-right"
                  className="p-button-warning"
                  onClick={() => handleStepSave(3)}
                />
              </div>
            </div>
          )}

          {activeStep === 3 && (
            <div className="p-fluid">
              <h3 className="font-bold text-gray-700 mb-4 border-l-4 border-green-500 pl-2">
                3. Course Details
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="field">
                  <label className="text-xs font-bold">Course Level</label>
                  <Dropdown options={courseLevels} placeholder="Select" />
                </div>
                <div className="field">
                  <label className="text-xs font-bold">Course Name</label>
                  <Dropdown options={courseNames} placeholder="Select" />
                </div>
                <div className="field">
                  <label className="text-xs font-bold">Specialization</label>
                  <Dropdown options={specializations} placeholder="Select" />
                </div>
                <div className="field">
                  <label className="text-xs font-bold">Admission Type</label>
                  <Dropdown options={admissionTypes} placeholder="Select" />
                </div>
              </div>
              <div className="flex justify-end gap-2 mt-8 pt-4 border-t">
                <Button
                  label="Go Back"
                  icon="pi pi-arrow-left"
                  className="p-button-text"
                  onClick={() => setActiveStep(2)}
                />
                <Button
                  label="Save & Next"
                  icon="pi pi-arrow-right"
                  className="p-button-success"
                  onClick={() => handleStepSave(4)}
                />
              </div>
            </div>
          )}

          {activeStep === 4 && (
            <div className="p-fluid">
              <h3 className="font-bold text-gray-700 mb-4 border-l-4 border-purple-500 pl-2">
                4. Reservation
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="field">
                  <label className="text-xs font-bold">
                    Reservation Category
                  </label>
                  <Dropdown options={categories} placeholder="Select" />
                </div>
                <div className="field">
                  <label className="text-xs font-bold">
                    Handicapped (PWD)?
                  </label>
                  <Dropdown
                    value={isHandicapped}
                    options={["Yes", "No"]}
                    onChange={(e) => setIsHandicapped(e.value)}
                  />
                </div>
                {isHandicapped === "Yes" && (
                  <>
                    <div className="field">
                      <label className="text-xs font-bold">Handicap Type</label>
                      <Dropdown options={handicapTypes} placeholder="Select" />
                    </div>
                    <div className="field">
                      <label className="text-xs font-bold">Percentage</label>
                      <Dropdown
                        options={handicapPercentages}
                        placeholder="Select"
                      />
                    </div>
                  </>
                )}
              </div>
              <div className="flex justify-end gap-2 mt-8 pt-4 border-t">
                <Button
                  label="Go Back"
                  icon="pi pi-arrow-left"
                  className="p-button-text"
                  onClick={() => setActiveStep(3)}
                />
                <Button
                  label="Final Submit"
                  icon="pi pi-check"
                  onClick={finalizeRegistration}
                />
              </div>
            </div>
          )}
        </div>
      )}
    </PageLayout>
  );
};
export default StudentAdmissionForm;
