import React, { useState } from "react";
import PageLayout from "../../../components/PageLayout";
import { Button } from "primereact/button";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Dropdown } from "../../../ui/shared";
import { DateInput } from "../../../ui/shared/Input";

// --- Interface ---
interface AttendanceRow {
  srNo: number;
  enrollmentNo: string;
  studentName: string;
  gender: string;
  semester: string;
  subject: string;
  attendance: "present" | "absent" | null;
}

const StudentAttendance: React.FC = () => {
  // --- Dropdown Options ---
  const academicYears = [
    { label: "2023-24", value: "2023-24" },
    { label: "2024-25", value: "2024-25" },
  ];

  const specializations = [
    { label: "Artificial Intelligence", value: "AI" },
    { label: "Data Structures & Algorithms", value: "DSA" },
    { label: "Cloud Computing", value: "CLOUD" },
    { label: "Cyber Security", value: "CYBER" },
    { label: "Internet of Things (IoT)", value: "IOT" },
    { label: "Blockchain Technology", value: "BLOCK" },
    { label: "Machine Learning", value: "ML" },
  ];

  const courses = [
    { label: "B.Tech (CSE)", value: "BTECH_CSE" },
    { label: "B.Tech (Mechanical)", value: "BTECH_ME" },
    { label: "M.B.A (Finance)", value: "MBA" },
    { label: "M.C.A", value: "MCA" },
    { label: "B.Com (Honors)", value: "BCOM" },
    { label: "M.Sc (Physics)", value: "MSC" },
    { label: "L.L.B", value: "LLB" },
  ];

  const semesters = [
    { label: "Semester I", value: "1" },
    { label: "Semester II", value: "2" },
    { label: "Semester III", value: "3" },
    { label: "Semester IV", value: "4" },
    { label: "Semester V", value: "5" },
    { label: "Semester VI", value: "6" },
    { label: "Semester VII", value: "7" },
    { label: "Semester VIII", value: "8" },
  ];

  const subjects = [
    { label: "Data Structures", value: "DS" },
    { label: "Operating Systems", value: "OS" },
    { label: "Mathematics", value: "Math" },
  ];

  // --- States ---
  const [attendanceList, setAttendanceList] = useState<AttendanceRow[]>([
    {
      srNo: 1,
      enrollmentNo: "0501CS221C01",
      studentName: "Arnav Gupta",
      gender: "Male",
      semester: "2nd Semester",
      subject: "Data Structures",
      attendance: null,
    },
    {
      srNo: 2,
      enrollmentNo: "0501CS221C02",
      studentName: "Neha Sharma",
      gender: "Female",
      semester: "2nd Semester",
      subject: "Data Structures",
      attendance: null,
    },
    {
      srNo: 3,
      enrollmentNo: "0501CS221C03",
      studentName: "Ravi Kumar",
      gender: "Male",
      semester: "2nd Semester",
      subject: "Data Structures",
      attendance: null,
    },
  ]);

  const [filters, setFilters] = useState({
    academicYear: null,
    course: null,
    specialization: null,
    semester: null,
    subject: null,
    date: null as Date | null,
  });

  // Handle Radio Selection
  const onAttendanceChange = (srNo: number, value: "present" | "absent") => {
    setAttendanceList((prev) =>
      prev.map((item) =>
        item.srNo === srNo ? { ...item, attendance: value } : item
      )
    );
  };

  // --- Templates ---
  const attendanceTemplate = (rowData: AttendanceRow) => (
    <div className="flex gap-6">
      <label className="flex items-center gap-2 cursor-pointer group">
        <input
          type="radio"
          name={`attendance-${rowData.srNo}`}
          checked={rowData.attendance === "present"}
          onChange={() => onAttendanceChange(rowData.srNo, "present")}
          className="w-4 h-4 accent-indigo-600"
        />
        <span className="text-sm font-medium group-hover:text-indigo-600 transition-colors">
          Present
        </span>
      </label>
      <label className="flex items-center gap-2 cursor-pointer group">
        <input
          type="radio"
          name={`attendance-${rowData.srNo}`}
          checked={rowData.attendance === "absent"}
          onChange={() => onAttendanceChange(rowData.srNo, "absent")}
          className="w-4 h-4 accent-red-500"
        />
        <span className="text-sm font-medium group-hover:text-red-500 transition-colors">
          Absent
        </span>
      </label>
    </div>
  );

  return (
    <PageLayout title="Student Attendance">
      {/* FILTER SECTION */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 mb-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-x-6 gap-y-4 mb-6">
          <Dropdown
            label="Academic Year"
            options={academicYears}
            value={filters.academicYear}
            onChange={(e) => setFilters({ ...filters, academicYear: e.value })}
            placeholder="Select "
             required
          />
          <Dropdown
            label="Select Course Name"
            options={courses}
            value={filters.course}
            onChange={(e) => setFilters({ ...filters, course: e.value })}
            placeholder="Select "
             required
          />
          <Dropdown
            label="Select Specialization"
            options={specializations}
            value={filters.specialization}
            onChange={(e) =>
              setFilters({ ...filters, specialization: e.value })
            }
            placeholder="Select "
             required
          />
          <Dropdown
            label="Select Semester"
            options={semesters}
            value={filters.semester}
            onChange={(e) => setFilters({ ...filters, semester: e.value })}
            placeholder="Select "
             required
          />
          <Dropdown
            label="Select Subject Name"
            options={subjects}
            value={filters.subject}
            onChange={(e) => setFilters({ ...filters, subject: e.value })}
            placeholder="Select "
             required
          />
          <DateInput
            label="Date"
            value={filters.date}
            onChange={(e) => setFilters({ ...filters, date: e.value as Date })}
            showIcon
            placeholder="dd/mm/yyyy"
            required
          />
        </div>

        <div className="flex justify-center gap-3 border-t pt-5">
          <Button
            label="Search"
            className="px-10 py-2.5 bg-indigo-600 hover:bg-indigo-700 border-none shadow-md"
          />
          <Button
            label="Clear"
            className="p-button-danger p-button-outlined px-12 py-3"
            style={{ borderRadius: "8px" }}
          />
        </div>
      </div>

      {/* ATTENDANCE LIST TABLE */}
      <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
        <div className="flex justify-between items-center mb-4 px-2">
          <h3 className="text-lg font-bold text-gray-700">
            Student Attendance List
          </h3>
          <div className="flex gap-2 items-center">
            <span className="text-sm text-gray-500">Show</span>
            <select className="border rounded p-1 text-sm bg-gray-50">
              <option>10</option>
            </select>
            <span className="text-sm text-gray-500">entries</span>
          </div>
        </div>

        <DataTable
          value={attendanceList}
          responsiveLayout="scroll"
          className="text-sm custom-attendance-table"
          rowHover
        >
          <Column field="srNo" header="Sr No." style={{ width: "70px" }} />
          <Column field="enrollmentNo" header="Enrollment No" sortable />
          <Column field="studentName" header="Student Name" sortable />
          <Column field="gender" header="Gender" />
          <Column field="semester" header="Semester" />
          <Column field="subject" header="Subject" />
          <Column
            header="Attendance"
            body={attendanceTemplate}
            style={{ minWidth: "220px" }}
          />
        </DataTable>

        {/* BOTTOM SAVE BUTTONS */}
        <div className="flex justify-center gap-4 mt-8 pt-6 border-t">
          <Button
            label="Save"
            className="px-12 py-3 bg-indigo-600 border-none shadow-lg hover:shadow-indigo-200"
            onClick={() => console.log("Saving Attendance...", attendanceList)}
          />
          <Button
            label="Clear"
            className="p-button-danger p-button-outlined px-12 py-3"
            style={{ borderRadius: "8px" }}
          />
        </div>
      </div>
    </PageLayout>
  );
};

export default StudentAttendance;
