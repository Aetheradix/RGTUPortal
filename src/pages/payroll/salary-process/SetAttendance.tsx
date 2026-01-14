/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import PageLayout from "@/components/PageLayout";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import { Dropdown } from "primereact/dropdown";
import { Calendar } from "primereact/calendar";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Checkbox } from "primereact/checkbox";
import { Dialog } from "primereact/dialog";
import { InputText } from "primereact/inputtext";

interface AttendanceRow {
  id: number;
  status: string;
  designation: string;
  employee: string;
  totalDays: number;
  totalLeave: number;
  payableDays: number;
}

const attendanceData: AttendanceRow[] = [
  { id: 1, status: "Pending", designation: "Lecturer in Business Studies", employee: "Rohit", totalDays: 30, totalLeave: 4, payableDays: 26 },
  { id: 2, status: "Generate", designation: "Senior Lecturer in Digital Media", employee: "Anuj", totalDays: 30, totalLeave: 2, payableDays: 30 },
  { id: 3, status: "Generate", designation: "Lecturer in Environmental Science", employee: "Vivek", totalDays: 30, totalLeave: 3, payableDays: 29 },
];

const attendancePeriodOptions = [{ label: "Monthly", value: "monthly" }];
const officeTypeOptions = [{ label: "Government", value: "govt" }];
const officeOptions = [{ label: "DPI Office", value: "dpi" }];
const postOptions = [{ label: "Teaching", value: "teach" }];
const leaveTypeOptions = [{ label: "CL", value: "cl" }, { label: "EL", value: "el" }];

export default function SetAttendance() {
  const [showResult, setShowResult] = useState(false);
  const [selectedRows, setSelectedRows] = useState<any[]>([]);
  const [leaveDialog, setLeaveDialog] = useState(false);
  const [currentEmployee, setCurrentEmployee] = useState("");
  const [verified, setVerified] = useState(false);

  const openLeaveDialog = (emp: string) => {
    setCurrentEmployee(emp);
    setLeaveDialog(true);
  };

  return (
    <PageLayout title="Attendance Process">

      <Card className="mb-4">
        <h3 className="mb-3">Attendance Process</h3>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
          <div><label>Attendance Period *</label><Dropdown options={attendancePeriodOptions} placeholder="Select" className="w-full" /></div>
          <div><label>Office Type *</label><Dropdown options={officeTypeOptions} placeholder="Select" className="w-full" /></div>
          <div><label>Office *</label><Dropdown options={officeOptions} placeholder="Select" className="w-full" /></div>
          <div><label>Month *</label><Calendar view="month" dateFormat="MM yy" className="w-full" /></div>
          <div><label>Type of Post *</label><Dropdown options={postOptions} placeholder="Select" className="w-full" /></div>
        </div>

        <div className="flex gap-3 mt-4">
          <Button label="Search" icon="pi pi-search" onClick={() => setShowResult(true)} />
          <Button label="Clear" icon="pi pi-refresh" className="p-button-secondary" onClick={() => setShowResult(false)} />
        </div>
      </Card>

      {showResult && (
        <Card>
          <h3 className="mb-3">Attendance Details</h3>

          <DataTable value={attendanceData} paginator rows={10}>
            <Column
              header="Action"
              body={(row) => (
                <Checkbox
                  checked={selectedRows.includes(row.id)}
                  onChange={(e) =>
                    setSelectedRows(
                      e.checked ? [...selectedRows, row.id] : selectedRows.filter((id) => id !== row.id)
                    )
                  }
                />
              )}
            />
            <Column header="Add Leave" body={(row) => <Button label="Add" size="small" onClick={() => openLeaveDialog(row.employee)} />} />
            <Column header="Sr.No" body={(_, opt) => opt.rowIndex + 1} />
            <Column field="status" header="Attendance Status" />
            <Column field="designation" header="Designation" />
            <Column field="employee" header="Employee Name" />
            <Column field="totalDays" header="Total Salary Days" />
            <Column field="totalLeave" header="Total Leave" />
            <Column field="payableDays" header="Payable Days" />
          </DataTable>

          <div className="flex items-start gap-2 mt-4">
            <Checkbox checked={verified} onChange={(e) => setVerified(e.checked!)} />
            <label className="text-sm">
              मै एतद् द्वारा घोषणा करता /करती हूँ, कि मेरे द्वारा समस्त अधिकारियों एवं कर्मचारियों के आय एवं कटौत्रा की राशि प्रविष्टि
              पूर्ण सत्यापन के पश्चात् की गयी है अत: में माह के वेतन की प्रक्रिया करता /करती हूँ |
            </label>
          </div>

          <div className="mt-4">
            <Button label="Generate Attendance" disabled={!verified} />
          </div>
        </Card>
      )}

      {/* ADD LEAVE DIALOG */}
      <Dialog header="Add Leave" visible={leaveDialog} onHide={() => setLeaveDialog(false)} style={{ width: "30vw" }}>
        <div className="grid grid-cols-1 gap-3">
          <div><b>Employee Name :</b> {currentEmployee}</div>
          <div><label>Leave Type *</label><Dropdown options={leaveTypeOptions} placeholder="Select" className="w-full" /></div>
          <div><label>From Date *</label><Calendar className="w-full" dateFormat="dd MM yy" /></div>
          <div><label>To Date *</label><Calendar className="w-full" dateFormat="dd MM yy" /></div>
          <div><label>Remark *</label><InputText placeholder="Enter Remark" className="w-full" /></div>
        </div>

        <div className="flex gap-3 mt-4 justify-end">
          <Button label="Save" />
          <Button label="Clear" className="p-button-secondary" />
        </div>
      </Dialog>

    </PageLayout>
  );
}
