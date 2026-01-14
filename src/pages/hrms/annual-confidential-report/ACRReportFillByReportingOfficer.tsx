import PageLayout from "@/components/PageLayout";
import { Card } from "primereact/card";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import Input, { Textarea, NumberInput } from "@/ui/shared/Input";
import Dropdown from "@/ui/shared/Dropdown";
import { useState } from "react";

interface Employee {
  id: number;
  name: string;
  uid: string;
  dob: string;
  designation: string;
  dise: string;
}

interface AssessmentRow {
  label: string;
  scale: string;
}

interface AcademicRow {
  item: string;
}

const employees: Employee[] = [
  {
    id: 1,
    name: "गोपाल वर्मा",
    uid: "EDP4454445",
    dob: "22/07/1989",
    designation: "सहायक शिक्षक",
    dise: "STGS/489754",
  },
  {
    id: 2,
    name: "सागर गुप्ता",
    uid: "EDP78974445",
    dob: "28/09/1989",
    designation: "सहायक शिक्षक",
    dise: "GHS/112233",
  },
];

const gradingOptions = [
  { label: "A", value: "A" },
  { label: "B", value: "B" },
  { label: "C", value: "C" },
];

export default function AcrReportReview() {
  const [acrDialog, setAcrDialog] = useState(false);
  const [rejectDialog, setRejectDialog] = useState(false);
  const [viewDialog, setViewDialog] = useState(false);
  const [selectedEmp, setSelectedEmp] = useState<Employee | null>(null);

  const assessmentData: AssessmentRow[] = [
    { label: "Completion of curriculum", scale: "15" },
    { label: "Improving attendance of children", scale: "05" },
    { label: "Role in academic", scale: "30" },
    { label: "Extracurricular activities", scale: "15" },
    { label: "Individual Qualities", scale: "30" },
    { label: "Participation in academic training", scale: "05" },
    { label: "Total", scale: "100" },
  ];

  const academicRoleItems: AcademicRow[] = [
    { item: "(a) Use of teaching learning aid" },
    { item: "(b) Use of lesson plan" },
    { item: "(c) Innovation and Impact" },
    { item: "(d) Checking of notebook of student" },
    { item: "(f) Extra classes" },
  ];

  const extracurricularItems: AcademicRow[] = [
    { item: "(a) Sports/Literacy/Cultural Activities" },
    { item: "(b) Extra ordinary work in Hygiene/Environment" },
    { item: "(c) Use of ICT in teaching and learning" },
  ];

  const individualQualitiesItems: AcademicRow[] = [
    { item: "(a) Attitude of work and sense of responsibility" },
    { item: "(b) Capacity to work in a team with team spirit and inter Personal relations" },
    { item: "(c) Communication skill" },
    { item: "(d) Capacity to work in a team with team spirit and inter Personal relations" },
  ];

  return (
    <PageLayout title="ACR Report Reviewing And Filling By Reporting Officer">
      <Card className="shadow-sm">
        <DataTable value={employees} paginator rows={10} showGridlines>
          <Column header="S.No" body={(_: Employee, o: { rowIndex: number }) => o.rowIndex + 1} />
          <Column
            header="Unique ID / Name"
            body={(row: Employee) => (
              <>
                <div className="font-medium">{row.name}</div>
                <div className="text-xs text-gray-500">{row.uid}</div>
              </>
            )}
          />
          <Column field="dob" header="Date of Birth" />
          <Column field="designation" header="Designation" />
          <Column field="dise" header="Dise Code of Institution" />

          <Column
            header="View Employee Application"
            body={(row: Employee) => (
              <Button
                icon="pi pi-eye"
                className="p-button-rounded p-button-info"
                onClick={() => {
                  setSelectedEmp(row);
                  setViewDialog(true);
                }}
              />
            )}
          />

          <Column
            header="ACR Form"
            body={(row: Employee) => (
              <Button
                label="Fill ACR"
                className="p-button-success"
                onClick={() => {
                  setSelectedEmp(row);
                  setAcrDialog(true);
                }}
              />
            )}
          />

          <Column
            header="Action"
            body={() => (
              <Button
                label="Reject"
                className="p-button-danger"
                onClick={() => setRejectDialog(true)}
              />
            )}
          />
        </DataTable>
      </Card>

      <Dialog
        header="Reporting Officer Fill By ACR"
        visible={acrDialog}
        style={{ width: "95vw" }}
        onHide={() => setAcrDialog(false)}
        maximizable
      >
        <p className="text-sm mb-3 font-medium">
          To Be Filled By Reporting Officer
        </p>

        <p className="text-xs mb-4 text-gray-600">
          Please give comment of agreement or disagreement on the achievement
          mentioned by the officer reported upon in self assessment. Please give
          reasons in case of disagreement and refer to communication made to the
          officer reported upon in this regard.
        </p>

        <div className="mb-4">
          <Input
            label="Employee Name / Unique ID"
            value={`${selectedEmp?.name}/${selectedEmp?.uid}`}
            readOnly
          />
        </div>

        <DataTable value={assessmentData} showGridlines>
          <Column header="S.No" body={(_: AssessmentRow, o: { rowIndex: number }) => o.rowIndex + 1} />
          <Column field="label" header="Achievement shown in self assessment" />
          <Column field="scale" header="Scale Point" />
          <Column
            header="Assessment"
            body={() => (
              <NumberInput
                value={0}
                min={0}
                max={100}
              />
            )}
          />
          <Column
            header="Remark (Note:- Max length is between 0-100)"
            body={() => (
              <Textarea
                rows={2}
                maxLength={100}
                placeholder="Enter Remark"
              />
            )}
          />
        </DataTable>

        <h4 className="font-semibold mt-4">Role in academic</h4>
        {academicRoleItems.map((item, idx) => (
          <div key={idx} className="grid grid-cols-12 gap-2 mb-2">
            <div className="col-span-6 text-sm">{item.item}</div>
            <div className="col-span-2">
              <NumberInput value={0} min={0} max={100} />
            </div>
            <div className="col-span-4">
              <Textarea
                rows={1}
                placeholder="Enter Remark"
              />
            </div>
          </div>
        ))}

        <h4 className="font-semibold mt-4">Extracurricular activities</h4>
        {extracurricularItems.map((item, idx) => (
          <div key={idx} className="grid grid-cols-12 gap-2 mb-2">
            <div className="col-span-6 text-sm">{item.item}</div>
            <div className="col-span-2">
              <NumberInput value={0} min={0} max={100} />
            </div>
            <div className="col-span-4">
              <Textarea
                rows={1}
                placeholder="Enter Remark"
              />
            </div>
          </div>
        ))}

        <h4 className="font-semibold mt-4">Individual Qualities</h4>
        {individualQualitiesItems.map((item, idx) => (
          <div key={idx} className="grid grid-cols-12 gap-2 mb-2">
            <div className="col-span-6 text-sm">{item.item}</div>
            <div className="col-span-2">
              <NumberInput value={0} min={0} max={100} />
            </div>
            <div className="col-span-4">
              <Textarea
                rows={1}
                placeholder="Enter Remark"
              />
            </div>
          </div>
        ))}

        <h4 className="font-semibold mt-5">Grade</h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-2">
          <Input 
            label="Enter Allegiance"
            required
            placeholder="Enter Allegiance"
          />

          <Textarea
            label="Enter Please comment on overall assessment of the Teacher"
            required
            rows={2}
          />

          <Dropdown
            label="Select Grading"
            required
            options={gradingOptions}
            placeholder="--Select--"
          />
        </div>

        <div className="flex justify-end gap-3 mt-5">
          <Button label="Send To Officer" className="p-button-success" />
          <Button
            label="Clear"
            className="p-button-danger"
            onClick={() => setAcrDialog(false)}
          />
        </div>
      </Dialog>

      <Dialog
        header="Add Remark For Reject ACR Report"
        visible={rejectDialog}
        style={{ width: "35vw" }}
        onHide={() => setRejectDialog(false)}
        modal
      >
        <Textarea
          label="Enter Remark"
          required
          rows={4}
          maxLength={100}
          placeholder="Enter Remark For Reject ACR Report"
        />

        <small className="text-red-500 block mt-1">
          Note: Maximum length 0-100 characters
        </small>

        <div className="flex justify-center gap-3 mt-4">
          <Button label="Reject" className="p-button-danger" />
          <Button
            label="Close"
            className="p-button-secondary"
            onClick={() => setRejectDialog(false)}
          />
        </div>
      </Dialog>

      <Dialog
        header="EMPLOYEE ACR FORM"
        visible={viewDialog}
        style={{ width: "98vw" }}
        onHide={() => setViewDialog(false)}
        maximizable
      >
        <h3 className="font-bold mb-3">EMPLOYEE PERSONAL INFORMATION</h3>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
          <Input value="2023-2024" readOnly placeholder="Financial Year" />
          <Input value={selectedEmp?.name} readOnly placeholder="Employee Name" />
          <Input value={selectedEmp?.uid} readOnly placeholder="Employee Unique ID" />
          <Input value={selectedEmp?.designation} readOnly placeholder="Designation" />
          <Input value={selectedEmp?.dob} readOnly placeholder="Date of Birth" />
          <Input value="भोपाल" readOnly placeholder="Institution of Posting" />
          <Input value={selectedEmp?.dise} readOnly placeholder="Dise Code of Institution" />
          <Input value="17/09/1992" readOnly placeholder="Date Of First Posting" />
          <Input value="प्राथमिक अध्यापक" readOnly placeholder="First Posting Designation" />
          <Input value="23/01/2024" readOnly placeholder="Current Date Of Promotion" />
          <Input value="23/01/2024" readOnly placeholder="Date Of Promotion" />
          <Input
            value="10/12/1989"
            readOnly
            placeholder="Date Of Filing Of Immovable Property Return"
          />
        </div>

        <h4 className="font-bold mt-4">Improving Attendance Of Children</h4>
        <DataTable value={[{ id: 1 }, { id: 2 }]} showGridlines>
          <Column header="S.No" body={(_: { id: number }, o: { rowIndex: number }) => o.rowIndex + 1} />
          <Column header="Class Being Taught" body={() => "कक्षा 5"} />
          <Column header="Previous Session" body={() => "2022"} />
          <Column header="Present Session" body={() => "2023"} />
          <Column header="Attendance %" body={() => "85%"} />
          <Column header="Remark" body={() => "Good Improvement"} />
        </DataTable>

        <h4 className="font-bold mt-4">Completion of Syllabus Against The Target</h4>
        <DataTable value={[{ id: 1 }, { id: 2 }]} showGridlines>
          <Column header="S.No" body={(_: { id: number }, o: { rowIndex: number }) => o.rowIndex + 1} />
          <Column header="Class" body={() => "कक्षा 5"} />
          <Column header="Subject" body={() => "हिंदी"} />
          <Column header="Target (%)" body={() => "100%"} />
          <Column header="Achievement (%)" body={() => "90%"} />
        </DataTable>

        <h4 className="font-bold mt-4">Performance / Learning of Student</h4>
        <DataTable value={[{ id: 1 }]} showGridlines>
          <Column header="S.No" body={() => 1} />
          <Column header="Class" body={() => "कक्षा 6"} />
          <Column header="Subject" body={() => "गणित"} />
          <Column header="No. of Students" body={() => "60"} />
          <Column header="A" body={() => "10"} />
          <Column header="B" body={() => "20"} />
          <Column header="C" body={() => "15"} />
          <Column header="D" body={() => "10"} />
          <Column header="E" body={() => "5"} />
        </DataTable>

        <h4 className="font-bold mt-4">Role in Academic</h4>
        <DataTable
          value={[
            { role: "Use of teaching learning aid" },
            { role: "Use of lesson plan" },
            { role: "Innovation and impact" },
            { role: "Checking of notebooks of students" },
            { role: "Remedial teaching" },
            { role: "Extra classes" },
          ]}
          showGridlines
        >
          <Column header="S.No" body={(_: { role: string }, o: { rowIndex: number }) => o.rowIndex + 1} />
          <Column field="role" header="Role" />
          <Column header="Details" body={() => "Nil"} />
        </DataTable>

        <h4 className="font-bold mt-4">Extracurricular Activities</h4>
        <DataTable
          value={[
            { act: "Sports / Literary / Cultural Activities" },
            { act: "Extra Ordinary Work in Hygiene / Environment" },
            { act: "Use of ICT in teaching and learning" },
          ]}
          showGridlines
        >
          <Column header="S.No" body={(_: { act: string }, o: { rowIndex: number }) => o.rowIndex + 1} />
          <Column field="act" header="Activity" />
          <Column header="Details" body={() => "Nil"} />
        </DataTable>

        <h4 className="font-bold mt-4">
          Academic Training Attended During Appraisal Period
        </h4>
        <DataTable
          value={[
            { name: "Teaching Training", period: "30 Days", grade: "A" },
            { name: "ICT Training", period: "15 Days", grade: "B" },
          ]}
          showGridlines
        >
          <Column header="S.No" body={(_: { name: string; period: string; grade: string }, o: { rowIndex: number }) => o.rowIndex + 1} />
          <Column field="name" header="Name of Training" />
          <Column field="period" header="Period (Days)" />
          <Column field="grade" header="Result / Grade" />
        </DataTable>

        <h4 className="font-bold mt-4">
          Any Other Outstanding Contribution
        </h4>
        <p className="text-sm">Nil</p>

        <div className="flex justify-end mt-4">
          <Button
            label="Close"
            className="p-button-danger"
            onClick={() => setViewDialog(false)}
          />
        </div>
      </Dialog>
    </PageLayout>
  );
}