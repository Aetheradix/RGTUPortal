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
import { InputTextarea } from "primereact/inputtextarea";
import { Tag } from "primereact/tag";

interface AttendanceRow {
  id: number;
  status: "Pending" | "Generated";
  designation: string;
  employee: string;
  totalDays: number;
  totalLeave: number;
  payableDays: number;
  leaveRecords?: LeaveEntry[];
}

interface LeaveEntry {
  type: "CL" | "EL" | null;
  fromDate: Date | null;
  toDate: Date | null;
  reason: string;
}

const initialAttendanceData: AttendanceRow[] = [
  { id: 1, status: "Pending", designation: "Lecturer in Business Studies", employee: "Rohit", totalDays: 30, totalLeave: 4, payableDays: 26 },
  { id: 2, status: "Generated", designation: "Senior Lecturer in Digital Media", employee: "Anuj", totalDays: 30, totalLeave: 0, payableDays: 30 },
  { id: 3, status: "Generated", designation: "Lecturer in Environmental Science", employee: "Vivek", totalDays: 30, totalLeave: 1, payableDays: 29 },
];

export default function SetAttendance() {
  const [attendanceData, setAttendanceData] = useState<AttendanceRow[]>(initialAttendanceData);
  const [showResult, setShowResult] = useState(false);
  const [selectedRows, setSelectedRows] = useState<AttendanceRow[]>([]);
  const [leaveDialog, setLeaveDialog] = useState(false);
  const [currentEmployee, setCurrentEmployee] = useState<AttendanceRow | null>(null);
  const [verified, setVerified] = useState(false);

  const [filters, setFilters] = useState({
    period: null,
    officeType: null,
    office: null,
    month: null,
    postType: null,
  });

  const [leaveEntry, setLeaveEntry] = useState<LeaveEntry>({
    type: null,
    fromDate: null,
    toDate: null,
    reason: "",
  });

  const handleFilterChange = (field: string, value: any) => {
    setFilters(prev => ({ ...prev, [field]: value }));
  };

  const openLeaveDialog = (rowData: AttendanceRow) => {
    setCurrentEmployee(rowData);
    setLeaveEntry({ type: null, fromDate: null, toDate: null, reason: "" });
    setLeaveDialog(true);
  };

  const saveLeaveEntry = () => {
    if (!currentEmployee) return;

    const updatedData = attendanceData.map(emp => {
      if (emp.id === currentEmployee.id) {
        const updatedLeaveRecords = [...(emp.leaveRecords || []), leaveEntry];
        const totalLeave = updatedLeaveRecords.length; 
        const payableDays = emp.totalDays - totalLeave;
        return { ...emp, leaveRecords: updatedLeaveRecords, totalLeave, payableDays };
      }
      return emp;
    });

    setAttendanceData(updatedData);
    setLeaveDialog(false);
  };

  const statusTemplate = (rowData: AttendanceRow) => {
    const severity = rowData.status === "Generated" ? "success" : "warning";
    return <Tag value={rowData.status} severity={severity} rounded />;
  };

  const filteredData = attendanceData.filter(emp => {
    return (!filters.officeType || emp.designation.toLowerCase().includes(filters.officeType)) &&
           (!filters.postType || emp.designation.toLowerCase().includes(filters.postType));
  });

  return (
    <PageLayout title="Attendance Process / उपस्थिति प्रक्रिया">

      <Card className="shadow-sm mb-6">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
          <DropdownField 
            label="Attendance Period" 
            options={[{ label: "Monthly", value: "monthly" }]}
            value={filters.period}
            onChange={(e: any) => handleFilterChange("period", e.value)}
          />
          <DropdownField 
            label="Office Type" 
            options={[{ label: "Government", value: "govt" }]}
            value={filters.officeType}
            onChange={(e: any) => handleFilterChange("officeType", e.value)}
          />
          <DropdownField 
            label="Office" 
            options={[{ label: "DPI Office", value: "dpi" }]}
            value={filters.office}
            onChange={(e: any) => handleFilterChange("office", e.value)}
          />
          <div className="flex flex-col gap-1">
            <label className="text-xs font-bold text-gray-600 uppercase">Select Month *</label>
            <Calendar view="month" dateFormat="MM yy" className="w-full" showIcon value={filters.month} onChange={(e) => handleFilterChange("month", e.value)} />
          </div>
          <DropdownField 
            label="Type of Post" 
            options={[{ label: "Teaching", value: "teach" }]}
            value={filters.postType}
            onChange={(e: any) => handleFilterChange("postType", e.value)}
          />
        </div>

        <div className="flex justify-center md:justify-start gap-3 mt-8 pt-4 border-t">
          <Button label="Search Attendance" icon="pi pi-search" className="bg-blue-600 px-8" onClick={() => setShowResult(true)} />
          <Button label="Reset" icon="pi pi-refresh" severity="secondary" outlined onClick={() => setShowResult(false)} />
        </div>
      </Card>

      {showResult && (
        <div className="animate-fadein">
          <Card className="shadow-sm border border-gray-200">
            <div className="flex justify-between items-center mb-4 px-2">
              <h3 className="text-lg font-bold text-gray-700 uppercase tracking-tight">Employee Attendance List</h3>
              <div className="text-sm text-gray-500 font-medium">
                Selected: <span className="text-blue-600 font-bold">{selectedRows.length} Employees</span>
              </div>
            </div>

            <DataTable 
              value={filteredData} 
              selection={selectedRows} 
              selectionMode="multiple"
              onSelectionChange={(e) => setSelectedRows(e.value)}
              dataKey="id" 
              paginator 
              rows={10}
              showGridlines
              className="p-datatable-sm"
              rowHover
            >
              <Column selectionMode="multiple" headerStyle={{ width: '3rem' }} />
              
              <Column header="Add Leave" body={(row) => (
                  <Button 
                      icon="pi pi-calendar-plus" 
                      className="p-button-text p-button-sm p-button-info"
                      onClick={() => openLeaveDialog(row)} 
                  />
              )} />

              <Column field="employee" header="EMPLOYEE NAME" sortable />
              <Column field="designation" header="DESIGNATION" />
              <Column field="status" header="STATUS" body={statusTemplate} />
              <Column field="totalDays" header="TOTAL DAYS" />
              <Column field="totalLeave" header="LEAVES" className="text-red-600 font-bold" />
              <Column field="payableDays" header="PAYABLE DAYS" className="text-green-700 font-bold bg-green-50/50" />
            </DataTable>

            <div className={`mt-6 p-4 rounded-lg border-l-4 transition-all ${verified ? 'bg-green-50 border-green-500' : 'bg-gray-50 border-gray-400'}`}>
              <div className="flex items-start gap-3">
                <Checkbox checked={verified} onChange={(e) => setVerified(e.checked!)} inputId="v-decl" />
                <label htmlFor="v-decl" className="text-sm font-medium text-gray-700 leading-relaxed cursor-pointer select-none">
                  मै एतद् द्वारा घोषणा करता /करती हूँ, कि मेरे द्वारा समस्त अधिकारियों एवं कर्मचारियों की उपस्थिति एवं अवकाश का पूर्ण सत्यापन कर लिया गया है |
                </label>
              </div>
            </div>

            <div className="flex justify-center mt-6 pt-4 border-t gap-4">
              <Button 
                label="Generate Attendance" 
                icon="pi pi-check-circle"
                disabled={!verified || selectedRows.length === 0} 
                className="bg-blue-600 px-10 shadow-lg"
              />
            </div>
          </Card>
        </div>
      )}

      <Dialog 
        header={<div className="flex items-center gap-2"><i className="pi pi-calendar-plus text-blue-600"></i> Record Leave Entry</div>} 
        visible={leaveDialog} 
        onHide={() => setLeaveDialog(false)} 
        style={{ width: "35vw" }}
        modal
        className="shadow-2xl"
      >
        <div className="flex flex-col gap-4 mt-2">
          <div className="bg-blue-50 p-3 rounded-md border border-blue-100">
            <span className="text-[10px] font-bold text-blue-400 uppercase">Employee</span>
            <p className="font-bold text-blue-900">{currentEmployee?.employee}</p>
          </div>
          
          <div className="flex flex-col gap-1">
            <label className="text-xs font-bold text-gray-500 uppercase">Leave Type *</label>
            <Dropdown 
              options={[{ label: "CL", value: "CL" }, { label: "EL", value: "EL" }]} 
              placeholder="Select Type" 
              className="w-full" 
              value={leaveEntry.type}
              onChange={(e) => setLeaveEntry(prev => ({ ...prev, type: e.value }))}
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="flex flex-col gap-1">
              <label className="text-xs font-bold text-gray-500 uppercase">From Date *</label>
              <Calendar className="w-full" showIcon placeholder="DD/MM/YY" value={leaveEntry.fromDate} onChange={(e) => setLeaveEntry(prev => ({ ...prev, fromDate: e.value ?? null }))} />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-xs font-bold text-gray-500 uppercase">To Date *</label>
              <Calendar className="w-full" showIcon placeholder="DD/MM/YY" value={leaveEntry.toDate} onChange={(e) => setLeaveEntry(prev => ({ ...prev, toDate: e.value ?? null }))} />
            </div>
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-xs font-bold text-gray-500 uppercase">Remark/Reason *</label>
            <InputTextarea rows={3} placeholder="Enter reason for leave..." className="w-full" value={leaveEntry.reason} onChange={(e) => setLeaveEntry(prev => ({ ...prev, reason: e.target.value }))} />
          </div>
        </div>

        <div className="flex gap-2 mt-6 justify-end pt-4 border-t">
          <Button label="Cancel" severity="secondary" text onClick={() => setLeaveDialog(false)} />
          <Button label="Save Leave Entry" className="bg-blue-600 px-6" onClick={saveLeaveEntry} />
        </div>
      </Dialog>
    </PageLayout>
  );
}

const DropdownField = ({ label, options, value, onChange }: any) => (
  <div className="flex flex-col gap-1">
    <label className="text-xs font-bold text-gray-600 uppercase">{label} *</label>
    <Dropdown options={options} value={value} onChange={onChange} placeholder="Select" className="w-full" />
  </div>
);
