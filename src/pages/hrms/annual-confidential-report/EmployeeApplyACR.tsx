import React, { useState } from "react";
import PageLayout from "@/components/PageLayout";
import Input, { DateInput, Textarea } from "@/ui/shared/Input";
import Dropdown from "@/ui/shared/Dropdown";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";

const academicYearOptions = [{ label: "2020-2021", value: "2020-2021" }];

const classOptions = [
  { label: "Class 1", value: 1 },
  { label: "Class 2", value: 2 },
  { label: "Class 3", value: 3 },
  { label: "Class 4", value: 4 },
  { label: "Class 5", value: 5 },
];

const subjectOptions = [
  { label: "Hindi", value: "Hindi" },
  { label: "English", value: "English" },
  { label: "Maths", value: "Maths" },
];

const yearOptions = [
  { label: "2023-24", value: "2023-24" },
  { label: "2024-25", value: "2024-25" },
];

const box = "bg-white border-2 border-blue-200 rounded-xl p-6";
const title = "text-blue-500 font-bold text-lg mb-4";
const table = "w-full border border-gray-300 text-sm text-center";
const th = "border border-gray-300 px-2 py-2 font-semibold bg-gray-50";
const td = "border border-gray-300 px-2 py-2";

const ACRApply: React.FC = () => {
  const [step, setStep] = useState(0);
  const [confirmDialog, setConfirmDialog] = useState(false);
  const [successDialog, setSuccessDialog] = useState(false);

  const onSaveNext = () => setConfirmDialog(true);
  const onConfirmYes = () => {
    setConfirmDialog(false);
    setSuccessDialog(true);
  };
  const onSuccessOk = () => {
    setSuccessDialog(false);
    setStep((p) => (p < 4 ? p + 1 : p));
  };
  const onClearPrev = () => {
    setStep((p) => (p > 0 ? p - 1 : 0));
  };

  return (
    <PageLayout title="Apply Annual Confidential Report">
      <div className="space-y-8">
        {step === 0 && (
          <div className={box}>
            <h3 className={title}>EMPLOYEE PERSONAL INFORMATION</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <Dropdown label="Select Academic Year" required options={academicYearOptions} value="2020-2021" />
              <Input label="Employee Name" required defaultValue="Gopal Verma" />
              <Input label="Employee Unique ID" required defaultValue="EDP4561231556" />
              <Input label="Designation Name" required defaultValue="Assistant Teacher" />
              <DateInput label="Date Of Birth" required value={new Date("1990-01-01")} />
              <Input label="Institution of Posting" required defaultValue="Bhopal" />
              <Input label="Dise Code of Institution" required defaultValue="STGS/489754" />
              <DateInput label="Date of First Posting" required value={new Date("2015-06-01")} />
              <Input label="First Posting Designation" required defaultValue="Primary Teacher" />
              <DateInput label="Date of Appointment to Present Post" required value={new Date("2022-04-01")} />
              <DateInput label="Select Date of Promotion" required value={new Date("2023-04-01")} />
              <DateInput label="Date of Filing of Annual Immovable Property Return" required value={new Date("2024-03-31")} />
            </div>
            <div className="flex gap-4 mt-6">
              <Button label="Save/Next" className="bg-lime-500 border-none" onClick={onSaveNext} />
              <Button label="Clear" className="bg-red-500 border-none" onClick={onClearPrev} />
            </div>
          </div>
        )}

        {step === 1 && (
          <div className={box}>
            <h3 className={title}>Improving Attendance Of Children</h3>
            <div className="overflow-x-auto">
              <table className={table}>
                <thead>
                  <tr>
                    <th className={th}>S.No.</th>
                    <th className={th}>Class being taught</th>
                    <th className={th} colSpan={2}>Enrolment</th>
                    <th className={th}>Average Annual attendance (%)</th>
                    <th className={th}>Remark</th>
                  </tr>
                  <tr>
                    <th className={th}></th>
                    <th className={th}></th>
                    <th className={th}>Previous Session</th>
                    <th className={th}>Present Session</th>
                    <th className={th}></th>
                    <th className={th}></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className={td}>1</td>
                    <td className={td}><Dropdown required options={classOptions} value={1} /></td>
                    <td className={td}><Dropdown required options={yearOptions} value="2023-24" /></td>
                    <td className={td}><Dropdown required options={yearOptions} value="2024-25" /></td>
                    <td className={td}><Input required defaultValue="85" /></td>
                    <td className={td}><Textarea required rows={1} defaultValue="Good improvement" /></td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-red-500 text-sm mt-3">
              Note:- The Column Mentioning last year average attendance Will Not Apply for class 1
            </p>
            <div className="flex gap-4 mt-5">
              <Button label="Save/Next" className="bg-lime-500 border-none" onClick={onSaveNext} />
              <Button label="Clear" className="bg-red-500 border-none" onClick={onClearPrev} />
            </div>
          </div>
        )}

        {step === 2 && (
          <div className={box}>
            <h3 className={title}>Completion of Syllabus Against The Target</h3>
            <table className={table}>
              <thead className="bg-blue-50">
                <tr>
                  <th className={th}>S.No.</th>
                  <th className={th}>Class</th>
                  <th className={th}>Subject</th>
                  <th className={th}>Target (In %)</th>
                  <th className={th}>Achievement (In %)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className={td}>1</td>
                  <td className={td}><Dropdown required options={classOptions} value={3} /></td>
                  <td className={td}><Dropdown required options={subjectOptions} value="Maths" /></td>
                  <td className={td}><Input required defaultValue="100" /></td>
                  <td className={td}><Input required defaultValue="92" /></td>
                </tr>
              </tbody>
            </table>
            <div className="mt-4">
              <label className="text-sm font-medium block mb-1">
                Enter Reasons, if any, for not completing the target <span className="text-red-500">*</span>
              </label>
              <Textarea required rows={2} defaultValue="All chapters completed except revision" />
            </div>
            <div className="flex gap-4 mt-5">
              <Button label="Save/Next" className="bg-lime-500 border-none" onClick={onSaveNext} />
              <Button label="Clear" className="bg-red-500 border-none" onClick={onClearPrev} />
            </div>
          </div>
        )}

        {step === 3 && (
          <div className={box}>
            <h3 className={title}>Performance / Learning of Student</h3>
            <div className="overflow-x-auto">
              <table className={table}>
                <thead>
                  <tr>
                    <th className={th} rowSpan={2}>S.No.</th>
                    <th className={th} rowSpan={2}>Class</th>
                    <th className={th} rowSpan={2}>Subject</th>
                    <th className={th} rowSpan={2}>No. of Student</th>
                    <th className={th} colSpan={5}>Previous Class Result</th>
                    <th className={th} colSpan={5}>Achievement</th>
                  </tr>
                  <tr>
                    {["A","B","C","D","E","A","B","C","D","E"].map(g => (
                      <th key={g} className={th}>{g}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className={td}>1</td>
                    <td className={td}><Dropdown required options={classOptions} value={4} /></td>
                    <td className={td}><Dropdown required options={subjectOptions} value="English" /></td>
                    <td className={td}><Input required defaultValue="40" /></td>
                    {Array.from({ length: 10 }).map((_, i) => (
                      <td key={i} className={td}><Input required defaultValue="5" /></td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="mt-4">
              <label className="text-sm font-medium block mb-1">
                Enter Reasons of not achieving target <span className="text-red-500">*</span>
              </label>
              <Textarea required rows={2} defaultValue="Few students need remedial classes" />
            </div>
            <div className="flex gap-4 mt-5">
              <Button label="Save/Next" className="bg-lime-500 border-none" onClick={onSaveNext} />
              <Button label="Clear" className="bg-red-500 border-none" onClick={onClearPrev} />
            </div>
          </div>
        )}

        {step === 4 && (
          <div className="space-y-6">
            <div className={box}>
              <h3 className={title}>Role in academic</h3>
              {[
                "Use of teaching learning aid",
                "Use of lesson plan",
                "Innovation and impact",
                "Checking of notebooks of students",
                "Remedial teaching",
                "Extra Classes",
              ].map((t, i) => (
                <div key={i} className="mb-3">
                  <p className="text-sm mb-1">
                    {i + 1}. {t} <span className="text-red-500">*</span>
                  </p>
                  <Textarea required rows={1} defaultValue="Implemented effectively" />
                </div>
              ))}
            </div>

            <div className={box}>
              <h3 className={title}>Extracurricular Activities</h3>
              <table className={table}>
                <thead>
                  <tr>
                    <th className={th}>S.No.</th>
                    <th className={th}>Extracurricular Activities</th>
                    <th className={th}>Please Give Details Of The Notable Works Done On The Following Points</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className={td}>1</td>
                    <td className={td}>Sports/Literary/Cultural Activities</td>
                    <td className={td}><Textarea required rows={2} defaultValue="" /></td>
                  </tr>
                  <tr>
                    <td className={td}>2</td>
                    <td className={td}>Extra Ordinary Work in Hygiene/Environment</td>
                    <td className={td}><Textarea required rows={2} defaultValue="" /></td>
                  </tr>
                  <tr>
                    <td className={td}>3</td>
                    <td className={td}>Use of ICT in teaching and learning</td>
                    <td className={td}><Textarea required rows={2} defaultValue="" /></td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className={box}>
              <h3 className={title}>Academic training attended during Appraisal period</h3>
              <table className={table}>
                <thead>
                  <tr className="bg-teal-700 text-white">
                    <th className="border border-gray-300 px-2 py-2 font-semibold">S.No.</th>
                    <th className="border border-gray-300 px-2 py-2 font-semibold">Name of Training</th>
                    <th className="border border-gray-300 px-2 py-2 font-semibold">Period of Training (Days)</th>
                    <th className="border border-gray-300 px-2 py-2 font-semibold">Result/Grade</th>
                    <th className="border border-gray-300 px-2 py-2 font-semibold">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className={td}>1</td>
                    <td className={td}><Input required placeholder="Enter Name of Training" defaultValue="" /></td>
                    <td className={td}><Input required placeholder="Enter Period of Training (Days)" defaultValue="" /></td>
                    <td className={td}><Input required placeholder="Enter Result/Grade" defaultValue="" /></td>
                    <td className={td}><Button label="Add" className="bg-lime-500 border-none text-xs" /></td>
                  </tr>
                </tbody>
              </table>
              <p className="text-red-500 text-sm mt-3">
                Note:- * यदि प्रशिक्षण में किसी भी प्रत्युत्तर न दिख रहा हो तो अप्लायेबल लिख दे।
              </p>
            </div>

            <div className={box}>
              <h3 className={title}>
                Any Other Work Which You Want to Mention as an Outstanding Contribution
              </h3>
              <Textarea required rows={3} placeholder="Enter Other Work Outstanding Contribution in Maximum 100 words" defaultValue="" />
            </div>

            <div className="flex gap-4">
              <Button label="Save" className="bg-lime-500 border-none" onClick={onSaveNext} />
              <Button label="Clear" className="bg-red-500 border-none" onClick={onClearPrev} />
            </div>
          </div>
        )}
      </div>

      <Dialog 
        header="Confirmation" 
        visible={confirmDialog} 
        style={{ width: "500px" }} 
        onHide={() => setConfirmDialog(false)} 
        draggable={false}
      >
        <p className="mb-4">Do you want to proceed further?</p>
        <div className="flex gap-3 mt-6">
          <Button label="Yes" className="bg-green-600" onClick={onConfirmYes} />
          <Button label="Cancel" severity="danger" onClick={() => setConfirmDialog(false)} />
        </div>
      </Dialog>

      <Dialog 
        header="Success" 
        visible={successDialog} 
        style={{ width: "500px" }} 
        onHide={onSuccessOk} 
        draggable={false}
      >
        <p className="mb-4">Record saved successfully.</p>
        <div className="flex gap-3 mt-6">
          <Button label="OK" className="bg-green-600" onClick={onSuccessOk} />
        </div>
      </Dialog>
    </PageLayout>
  );
};

export default ACRApply;