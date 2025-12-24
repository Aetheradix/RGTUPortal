import React, { useState } from "react";
import PageLayout from "../../../components/PageLayout";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { Dropdown } from "primereact/dropdown";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Dialog } from "primereact/dialog";

interface ChoiceEntry {
  srNo: number;
  cityName: string;
  collegeName: string;
  courseName: string;
  branchName: string;
}

const FillChoicesAndLock: React.FC = () => {
  const [isSearched, setIsSearched] = useState(false);
  const [showChoiceFilling, setShowChoiceFilling] = useState(false);
  const [showSummary, setShowSummary] = useState(false);
  const [isLocked, setIsLocked] = useState(false);

  const [showSaveDialog, setShowSaveDialog] = useState(false);
  const [showLockConfirm, setShowLockConfirm] = useState(false);
  const [showSuccessDialog, setShowSuccessDialog] = useState(false);

  const [regNo, setRegNo] = useState("");
  const [studentInfo] = useState({
    name: "Rahul Sharma",
    dob: "10/02/1998",
    father: "Mr. S.P. Sharma",
    category: "OBC",
    jeeScore: "88.5",
    rank: "12450",
  });

  const [collegeType, setCollegeType] = useState(null);
  const [currentChoice, setCurrentChoice] = useState({
    city: "",
    college: "",
    course: "",
    branch: "",
  });
  const [choicesGrid, setChoicesGrid] = useState<ChoiceEntry[]>([]);

  const cityOptions = [
    "Bhopal",
    "Gwalior",
    "Narmadapuram",
    "Indore",
    "Jabalpur",
    "Rewa",
    "Sagar",
    "Shahdol",
    "Ujjain",
  ].map((item) => ({ label: item, value: item }));

  const collegeOptions = [
    "Rewa Engineering College, Rewa",
    "Indira Gandhi Engineering College, Sagar",
    "Government Engineering College, Ujjain",
    "Government Polytechnic College, Bhopal",
    "Government Engineering College, Vidisha",
    "Oriental Institute of Science and Technology, Bhopal",
    "Acropolis Institute of Technology, Indore",
    "Prestige Institute of Engineering, Indore",
    "IES College of Technology, Bhopal",
    "RKDF Institute of Science and Technology, Bhopal",
    "Amity University, Gwalior",
    "Patel College of Science and Technology, Indore",
  ].map((item) => ({ label: item, value: item }));

  const courseOptions = [
    "B.E (Bachelor of Engineering)",
    "B.Tech (Bachelor of Technology)",
    "B.Arch (Bachelor of Architecture)",
    "M.E (Master of Engineering)",
    "M.Tech (Master of Technology)",
    "MCA (Master of Computer Applications)",
    "BCA (Bachelor of Computer Applications)",
    "Diploma in Engineering",
    "B.Sc (IT/Computer Science)",
    "M.Sc (IT/Computer Science)",
    "Polytechnic Diploma",
    "Ph.D. (Engineering and Technology)",
  ].map((item) => ({ label: item, value: item }));

  const branchOptions = [
    "Computer Science",
    "Mechanical Engineering",
    "Civil Engineering",
    "Electrical Engineering",
    "IT",
  ].map((item) => ({ label: item, value: item }));

  const addChoice = () => {
    if (currentChoice.city && currentChoice.college) {
      const newNode = {
        srNo: choicesGrid.length + 1,
        cityName: currentChoice.city,
        collegeName: currentChoice.college,
        courseName: currentChoice.course,
        branchName: currentChoice.branch,
      };
      setChoicesGrid([...choicesGrid, newNode]);
    }
  };

  return (
    <PageLayout title="Fill Choices By Priority And Lock Choices">
      <div className="bg-white p-6 rounded shadow-sm border mb-4">
        <h3 className="text-lg font-bold mb-4">Registration Details</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-end">
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium">
              Student Registration No.<span className="text-red-500">*</span>
            </label>
            <InputText
              value={regNo}
              onChange={(e) => setRegNo(e.target.value)}
              placeholder="Enter Registration No."
            />
          </div>
          <Button
            label="Search"
            icon="pi pi-search"
            className="w-fit px-6"
            onClick={() => setIsSearched(true)}
          />
        </div>
      </div>

      {isSearched && (
        <div className="bg-white p-6 rounded shadow-sm border mb-4">
          <h3 className="text-lg font-bold mb-4 text-indigo-700">
            Student Details
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="flex flex-col gap-1">
              <label className="text-xs font-bold text-gray-600">
                Student Name
              </label>
              <InputText
                value={studentInfo.name}
                readOnly
                className="bg-gray-50"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-xs font-bold text-gray-600">
                Date of Birth
              </label>
              <InputText
                value={studentInfo.dob}
                readOnly
                className="bg-gray-50"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-xs font-bold text-gray-600">
                Father Name
              </label>
              <InputText
                value={studentInfo.father}
                readOnly
                className="bg-gray-50"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-xs font-bold text-gray-600">
                Category
              </label>
              <InputText
                value={studentInfo.category}
                readOnly
                className="bg-gray-50"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-xs font-bold text-gray-600">
                JEE Score
              </label>
              <InputText
                value={studentInfo.jeeScore}
                readOnly
                className="bg-gray-50"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-xs font-bold text-gray-600">Rank</label>
              <InputText
                value={studentInfo.rank}
                readOnly
                className="bg-gray-50"
              />
            </div>
          </div>

          {!showChoiceFilling && !showSummary && (
            <div className="border-t pt-4">
              <h3 className="text-md font-bold mb-3">
                College Type Preference
              </h3>
              <div className="w-full md:w-1/3 mb-4">
                <Dropdown
                  value={collegeType}
                  options={[
                    { label: "Govt.", value: "G" },
                    { label: "Private", value: "P" },
                    { label: "Both", value: "B" },
                  ]}
                  onChange={(e) => setCollegeType(e.value)}
                  placeholder="Select College Type"
                  className="w-full"
                />
              </div>
              <Button
                label="Save/Next"
                className="p-button-success"
                onClick={() => setShowChoiceFilling(true)}
              />
            </div>
          )}
        </div>
      )}

      {showChoiceFilling && !showSummary && (
        <div className="bg-white p-6 rounded shadow-sm border mb-4">
          <h3 className="text-lg font-bold mb-4">Fill Choice</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
            <Dropdown
              placeholder="Select City"
              options={cityOptions}
              value={currentChoice.city}
              onChange={(e) =>
                setCurrentChoice({ ...currentChoice, city: e.value })
              }
            />
            <Dropdown
              placeholder="Select College"
              options={collegeOptions}
              value={currentChoice.college}
              onChange={(e) =>
                setCurrentChoice({ ...currentChoice, college: e.value })
              }
            />
            <Dropdown
              placeholder="Select Course"
              options={courseOptions}
              value={currentChoice.course}
              onChange={(e) =>
                setCurrentChoice({ ...currentChoice, course: e.value })
              }
            />
            <Dropdown
              placeholder="Select Branch"
              options={branchOptions}
              value={currentChoice.branch}
              onChange={(e) =>
                setCurrentChoice({ ...currentChoice, branch: e.value })
              }
            />
          </div>
          <Button
            label="Add"
            icon="pi pi-plus"
            className="mb-4"
            onClick={addChoice}
          />

          <DataTable
            value={choicesGrid}
            className="p-datatable-sm border mb-4"
            responsiveLayout="scroll"
          >
            <Column field="srNo" header="Sr.No." />
            <Column field="cityName" header="City Name" />
            <Column field="collegeName" header="College Name" />
            <Column field="courseName" header="Course Name" />
            <Column field="branchName" header="Branch Name" />
          </DataTable>

          <div className="flex gap-2">
            <Button
              label="Save"
              icon="pi pi-save"
              className="p-button-primary"
              onClick={() => setShowSaveDialog(true)}
            />
            <Button
              label="Clear"
              icon="pi pi-refresh"
              className="p-button-outlined p-button-secondary"
              onClick={() => setChoicesGrid([])}
            />
          </div>
        </div>
      )}

      {showSummary && (
        <div className="bg-white p-6 rounded shadow-sm border border-orange-300">
          <h3 className="font-bold mb-4">Choices By Priority Details</h3>
          <DataTable value={choicesGrid} className="p-datatable-sm mb-6">
            <Column field="srNo" header="Sr.No" />
            <Column header="Roll No." body={() => regNo} />
            <Column header="Institute Type" body={() => "Government/Private"} />
            <Column field="collegeName" header="Institute Name" />
            <Column field="branchName" header="Branch" />
          </DataTable>

          {!isLocked ? (
            <Button
              label="Proceed to Lock Choices"
              icon="pi pi-lock"
              className="p-button-danger w-80 py-3"
              onClick={() => setShowLockConfirm(true)}
            />
          ) : (
            <div className="p-4 bg-green-100 text-green-800  font-bold border rounded text-center">
              <i className="pi pi-check-circle mr-2"></i> YOUR CHOICES HAVE BEEN
              LOCKED SUCCESSFULLY
            </div>
          )}
        </div>
      )}

      <Dialog
        header="Are you sure?"
        visible={showSaveDialog}
        onHide={() => setShowSaveDialog(false)}
        footer={
          <div className="flex justify-end gap-2">
            <Button
              label="Cancel"
              onClick={() => setShowSaveDialog(false)}
              className="p-button-text"
            />
            <Button
              label="Yes"
              onClick={() => {
                setShowSaveDialog(false);
                setShowSummary(true);
              }}
              autoFocus
            />
          </div>
        }
      >
        <p>Do you want to save this record?</p>
      </Dialog>

      <Dialog
        header="Are you sure?"
        visible={showLockConfirm}
        onHide={() => setShowLockConfirm(false)}
        footer={
          <div className="flex justify-end gap-2">
            <Button
              label="No, cancel!"
              onClick={() => setShowLockConfirm(false)}
              className="p-button-text p-button-danger"
            />
            <Button
              label="Yes, lock it!"
              onClick={() => {
                setShowLockConfirm(false);
                setShowSuccessDialog(true);
              }}
              className="p-button-danger"
            />
          </div>
        }
      >
        <p>You will not be able to change your choices after locking.</p>
      </Dialog>

      <Dialog
        header="Locked!"
        visible={showSuccessDialog}
        onHide={() => setShowSuccessDialog(false)}
        footer={
          <Button
            label="OK"
            onClick={() => {
              setShowSuccessDialog(false);
              setIsLocked(true);
            }}
          />
        }
      >
        <p>Your choices have been locked.</p>
      </Dialog>
    </PageLayout>
  );
};

export default FillChoicesAndLock;
