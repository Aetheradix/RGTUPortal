import React, { useState } from "react";
import PageLayout from "@/components/PageLayout";
import Table, { type TableColumn } from "@/ui/shared/Table";
import Input, { NumberInput, DateInput, Textarea } from "@/ui/shared/Input";
import Dropdown from "@/ui/shared/Dropdown";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";

interface ACRData {
  id: string;
  annualYear: string;
  empName: string;
  empId: string;
  dob: string;
  designation: string;
  diseCode: string;
  status: string;
  statusRemark: string;
}

const ResendACRApplication: React.FC = () => {
  const [viewDialog, setViewDialog] = useState(false);
  const [resendDialog, setResendDialog] = useState(false);
  const [confirmDialog, setConfirmDialog] = useState(false);
  const [successDialog, setSuccessDialog] = useState(false);

  const [data] = useState<ACRData[]>([
    {
      id: "1",
      annualYear: "2023-2024",
      empName: "गोपाल वर्मा",
      empId: "EDP4454445",
      dob: "22/07/1989",
      designation: "सहायक शिक्षक",
      diseCode: "DPI/456656356",
      status: "ACR Report Reject",
      statusRemark: "He is not my employee",
    },
  ]);

  const mainColumns: TableColumn[] = [
    { field: "id", header: "S.No", style: { width: "50px" } },
    { field: "annualYear", header: "Annual Year", sortable: true },
    { 
      field: "empDetails", 
      header: "Employee Unique ID/Name", 
      body: (rd) => `${rd.empName}/${rd.empId}` 
    },
    { field: "dob", header: "Date of Birth" },
    { field: "designation", header: "Designation" },
    { field: "diseCode", header: "Dise Code of Institution" },
    { 
      field: "status", 
      header: "Status", 
      body: (rd) => (
        <div className="flex flex-col">
          <span className="font-bold text-gray-700">{rd.status}</span>
          <span className="text-xs text-red-500">:- {rd.statusRemark}</span>
        </div>
      )
    },
    {
      field: "view",
      header: "View Employee Application & Update",
      body: () => (
        <Button 
          icon="pi pi-eye" 
          className="bg-indigo-500 border-none shadow-md" 
          onClick={() => setViewDialog(true)} 
        />
      ),
    },
    {
      field: "resend",
      header: "Resend ACR Report",
      body: () => (
        <Button 
          label="Resend" 
          className="bg-lime-500 border-none px-4 shadow-sm" 
          onClick={() => setResendDialog(true)} 
        />
      ),
    }
  ];

  return (
    <PageLayout title="Resend Employee ACR Application">
      <div className="space-y-6">
        <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
          <h2 className="text-xl font-bold text-gray-800 mb-6 border-b pb-4 text-blue-600">
            Resend Employee ACR Application
          </h2>
          <Table columns={mainColumns} data={data} showPagination />
        </div>
      </div>

      <Dialog 
        header="ACR Details" 
        visible={viewDialog} 
        onHide={() => setViewDialog(false)}
        className="w-full max-w-7xl"
        maximizable
        modal
      >
        <div className="space-y-10 p-4 bg-gray-50">
          
          <div className="bg-white border-2 border-blue-200 rounded-xl p-6 shadow-sm">
            <h3 className="text-blue-500 font-extrabold mb-6 text-lg uppercase border-b-2 border-blue-100 pb-2">
              EMPLOYEE PERSONAL INFORMATION
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <Dropdown label="Financial Year" options={[{label: '2020-2021', value: '1'}]} required />
              <Input label="Employee Name" value="गोपाल वर्मा" required disabled />
              <Input label="Employee Unique ID" value="EDP4561231556" required disabled />
              <Input label="Designation" value="सहायक शिक्षक" required disabled />
              <DateInput label="Date of Birth" value={new Date('1999-12-05')} required disabled />
              <Input label="Institution of Posting" value="भोपाल" required disabled />
              <Input label="Dise Code of Institution" value="St Theresa Girls School/489754" required disabled />
              <DateInput label="Date Of First Posting" value={new Date('1992-09-17')} required disabled />
              <Input label="First Posting designation" value="प्राथमिक अध्यापक" required disabled />
              <DateInput label="Current Date Of Promotion" value={new Date('2024-01-23')} required disabled />
              <DateInput label="Date of Promotion" value={new Date('2024-01-23')} required disabled />
              <DateInput label="Date Of Filling Annual Immovable Property Return" value={new Date('1989-12-10')} required disabled />
            </div>
          </div>

          <div className="text-lg font-bold text-gray-800 ml-2">PART 2 Self-Evaluation</div>

          <div className="bg-white border-2 border-blue-200 rounded-xl p-6 shadow-sm">
            <h3 className="text-blue-400 font-bold mb-6 text-lg">Improving Attendance Of Children</h3>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-200 text-sm">
                <thead>
                  <tr className="bg-gray-50 text-gray-600">
                    <th className="border p-2 w-16">S.No.</th>
                    <th className="border p-2">Class being taught</th>
                    <th className="border p-2">Prev Session Enrolment</th>
                    <th className="border p-2">Present Session Enrolment</th>
                    <th className="border p-2">Avg Annual Attendance %</th>
                    <th className="border p-2">Remark</th>
                  </tr>
                </thead>
                <tbody>
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((i) => (
                    <tr key={i}>
                      <td className="border p-2 text-center font-medium">{i}</td>
                      <td className="border p-2 text-center bg-gray-50">{i === 1 ? 'पहली कक्षा' : i === 2 ? 'दूसरी कक्षा' : `${i}th Class`}</td>
                      <td className="border p-1"><Input className="p-inputtext-sm" placeholder="पहल" /></td>
                      <td className="border p-1"><Input className="p-inputtext-sm" placeholder="दूसरी" /></td>
                      <td className="border p-1"><NumberInput suffix="%" value={85} className="p-inputtext-sm" /></td>
                      <td className="border p-1"><Input className="w-full" value="नियमित उपस्थिति बनाए रखना छात्रों के लिए महत्वपूर्ण है" /></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="bg-white border-2 border-blue-200 rounded-xl p-6 shadow-sm">
            <h3 className="text-blue-400 font-bold mb-6 text-lg">Completion of Syllabus Against The Target</h3>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-200 text-sm">
                <thead>
                  <tr className="bg-blue-50 text-blue-800">
                    <th className="border p-2">S.No.</th>
                    <th className="border p-2">Class</th>
                    <th className="border p-2">Subject</th>
                    <th className="border p-2">Target (In % age)</th>
                    <th className="border p-2">Achievement (In % age)</th>
                  </tr>
                </thead>
                <tbody>
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((i) => (
                    <tr key={i}>
                      <td className="border p-2 text-center">{i}</td>
                      <td className="border p-2 bg-gray-50 text-center">{i === 1 ? 'पहली कक्षा' : 'कक्षा ' + i}</td>
                      <td className="border p-1"><Input value={i % 2 === 0 ? "गणित" : "हिंदी"} /></td>
                      <td className="border p-1"><Input value="100%" /></td>
                      <td className="border p-1"><Input value="89%" /></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-4">
              <Textarea label="Reasons, if any, for not completing the target" value="Nil" rows={2} />
            </div>
          </div>

          <div className="bg-white border-2 border-blue-200 rounded-xl p-6 shadow-sm">
            <h3 className="text-blue-400 font-bold mb-6 text-lg">Performance / Learning of Student</h3>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-200 text-xs text-center">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border p-2" rowSpan={2}>S.No.</th>
                    <th className="border p-2" rowSpan={2}>Class</th>
                    <th className="border p-2" rowSpan={2}>Subject</th>
                    <th className="border p-2" rowSpan={2}>No. of Student</th>
                    <th className="border p-2" colSpan={5}>Previous class annual examination Result grade wises Student number</th>
                    <th className="border p-2" colSpan={5}>Achievement on the basis of annual examination result (Student in Grade)</th>
                  </tr>
                  <tr className="bg-gray-50">
                    {['A','B','C','D','E','A','B','C','D','E'].map((g, idx) => (
                      <th key={idx} className="border p-1">{g}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[1, 2, 3, 4].map((i) => (
                    <tr key={i}>
                      <td className="border p-2">{i}</td>
                      <td className="border p-2"><Input className="text-center" value="पांचवी कक्षा" /></td>
                      <td className="border p-2"><Input className="text-center" value="हिंदी" /></td>
                      <td className="border p-2"><Input className="text-center" value="65" /></td>
                      {[1,3,9,6,1,1,3,9,6,1].map((v, idx) => (
                        <td key={idx} className="border p-1"><Input className="text-center w-8" value={v.toString()} /></td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-4">
              <Textarea label="Reasons of not achieving target" value="Nil" rows={2} />
            </div>
          </div>

          <div className="bg-white border-2 border-blue-200 rounded-xl p-6 shadow-sm">
            <h3 className="text-blue-400 font-bold mb-6 text-lg uppercase">Role in academic</h3>
            <div className="space-y-4">
              {[
                "Use of teaching learning aid",
                "Use of lesson plan",
                "Innovation and impact",
                "Checking of notebook's of students",
                "Remedial teaching",
                "Extra Classes"
              ].map((role, idx) => (
                <div key={idx} className="grid grid-cols-1 md:grid-cols-2 border-b pb-4 items-center">
                  <div className="text-sm font-medium text-gray-700">{idx + 1}. {role}</div>
                  <Textarea placeholder="Please Give Details Of The Notable Works Done..." value="Nil" className="mt-2 md:mt-0" />
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white border-2 border-blue-200 rounded-xl p-6 shadow-sm">
            <h3 className="text-blue-400 font-bold mb-6 text-lg uppercase">Extracurricular Activities</h3>
            <div className="space-y-4">
              {[
                "Sports/Literary/Cultural Activities",
                "Extra Ordinary Work in Hygiene/Environment",
                "Use of ICT in teaching and learning"
              ].map((act, idx) => (
                <div key={idx} className="grid grid-cols-1 md:grid-cols-2 border-b pb-4 items-center">
                  <div className="text-sm font-medium text-gray-700">{idx + 1}. {act}</div>
                  <Textarea placeholder="Details of Notable Works..." value="Nil" />
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white border-2 border-blue-200 rounded-xl p-6 shadow-sm">
            <h3 className="text-blue-400 font-bold mb-6 text-lg uppercase">Academic Training attended during Appraisal period</h3>
            <div className="overflow-x-auto">
              <table className="w-full border border-collapse border-gray-200 text-sm">
                <thead>
                  <tr className="bg-blue-50">
                    <th className="border p-2">S.No.</th>
                    <th className="border p-2 text-blue-800">Name of Training</th>
                    <th className="border p-2 text-blue-800">Period of Training (Days)</th>
                    <th className="border p-2 text-blue-800">Result/Grade</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border p-2 text-center">1</td>
                    <td className="border p-2"><Input value="स्कूली शिक्षा" /></td>
                    <td className="border p-2"><Input value="45 दिन" /></td>
                    <td className="border p-2"><Input value="A" /></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="bg-white border-2 border-blue-200 rounded-xl p-6 shadow-sm">
            <h3 className="text-blue-400 font-bold mb-4 text-lg uppercase">Any Other Work Which You Want to Mention as an Outstanding Contribution</h3>
            <Textarea value="Nil" rows={4} className="w-full" />
          </div>

          <div className="flex justify-start gap-4 pt-6">
            <Button label="Update" className="bg-lime-500 border-none px-8" />
            <Button label="Clear" className="bg-red-500 border-none px-8" onClick={() => setViewDialog(false)} />
          </div>

        </div>
      </Dialog>

      <Dialog 
        header={<span className="text-blue-500 font-bold">Resend To Reporting Officer</span>} 
        visible={resendDialog} 
        onHide={() => setResendDialog(false)}
        className="w-[600px]"
        modal
      >
        <div className="space-y-4 py-4">
          <Input label="Enter Reporting Officer Unique ID" required placeholder="Enter Reporting Officer Unique ID" />
          <Input label="Reporting Officer Name" value="Dilip Raghuvanshi" disabled />
          <Input label="Reporting Officer Sankul Code" value="GOVT. HSS SHYAMPUR-23010804504" disabled />
          
          <div className="flex justify-end gap-3 mt-6">
            <Button label="Send To Officer" className="bg-lime-500 border-none" onClick={() => setConfirmDialog(true)} />
            <Button label="Clear" className="bg-red-500 border-none" onClick={() => setResendDialog(false)} />
          </div>
        </div>
      </Dialog>

      <Dialog 
        visible={confirmDialog} 
        onHide={() => setConfirmDialog(false)}
        closable={false}
        className="w-[350px] text-center"
        modal
      >
        <div className="flex flex-col items-center py-6">
          <div className="text-5xl text-blue-400 mb-4 font-light">?</div>
          <h2 className="text-2xl font-bold mb-2">Are you sure?</h2>
          <p className="text-gray-500 mb-8">Do you want to Resend this record?</p>
          <div className="flex gap-4 w-full px-4">
            <Button label="Yes" className="flex-1 bg-blue-500" onClick={() => { setConfirmDialog(false); setSuccessDialog(true); }} />
            <Button label="Cancel" className="flex-1 bg-red-500" onClick={() => setConfirmDialog(false)} />
          </div>
        </div>
      </Dialog>

      <Dialog 
        visible={successDialog} 
        onHide={() => setSuccessDialog(false)}
        closable={false}
        className="w-[350px] text-center"
        modal
      >
        <div className="flex flex-col items-center py-8">
          <h2 className="text-3xl font-bold mb-4 text-gray-800 uppercase tracking-tighter">Success!</h2>
          <p className="text-gray-600 mb-8 text-lg">Record Resend Successfully!</p>
          <Button label="OK" className="bg-indigo-500 px-12 py-2" onClick={() => { setSuccessDialog(false); setResendDialog(false); }} />
        </div>
      </Dialog>

    </PageLayout>
  );
};

export default ResendACRApplication;