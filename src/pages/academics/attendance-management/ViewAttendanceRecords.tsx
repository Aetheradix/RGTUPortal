import React, { useState } from "react";
import PageLayout from "../../../components/PageLayout";
import { Button } from "primereact/button";
import { Input, Dropdown, Table, type TableColumn } from "../../../ui/shared";
import { DateInput } from "../../../ui/shared/Input";

interface AttendanceRow {
  id: number;
  enrollmentNo: string;
  studentName: string;
  specialization: string;
  subjectName: string;
  semester: string;
  attendancePercentage: string;
}

const courses = [
  { label: "B.Tech ", value: "B.Tech " },
  { label: "M.Tech ", value: "M.Tech " },
  { label: "BCA", value: "BCA" },
  { label: "MCA", value: "MCA" },
];
const specializations = [
  { label: "Computer Science", value: "CS" },
  { label: "Internet of Things(IoT)", value: "Internet of Things(IoT)" },
  {
    label: "Artificial Intelligence(AIR)",
    value: "Artificial Intelligence(AIR)",
  },
];
const semesters = [
  { label: "I", value: "I" },
  { label: "II", value: "II" },
  { label: "III", value: "III" },
];
const subjects = [{ label: "Computer Networks", value: "CN" }];
const enrollments = [{ label: "0501CS221M01", value: "0501CS221M01" }];

const dummyAttendanceData: AttendanceRow[] = [
  {
    id: 1,
    enrollmentNo: "0501CS221M01",
    studentName: "Rahul Verma",
    specialization: "Computer Science",
    subjectName: "Computer Networks",
    semester: "2nd",
    attendancePercentage: "88%",
  },
  {
    id: 2,
    enrollmentNo: "0501CS221M01",
    studentName: "Rahul Verma",
    specialization: "Computer Science",
    subjectName: "Mathematics IV",
    semester: "2nd",
    attendancePercentage: "92%",
  },
  {
    id: 3,
    enrollmentNo: "0501CS221M01",
    studentName: "Rahul Verma",
    specialization: "Computer Science",
    subjectName: "Mechanical Vibrations",
    semester: "2nd",
    attendancePercentage: "80%",
  },
];

const ViewAttendanceRecords: React.FC = () => {
  const [formData, setFormData] = useState({
    fromDate: null as Date | null,
    toDate: null as Date | null,
    courseName: null as string | null,
    specialization: null as string | null,
    semesterName: null as string | null,
    subjectName: null as string | null,
    enrollmentNo: null as string | null,
  });

  const [rows] = useState<AttendanceRow[]>(dummyAttendanceData);

  const columns: TableColumn[] = [
    { field: "id", header: "Sr No.", sortable: true, style: { width: "70px" } },
    { field: "enrollmentNo", header: "Enrollment No.", sortable: true },
    { field: "studentName", header: "Student Name", sortable: true },
    { field: "specialization", header: "Specialization", sortable: true },
    { field: "subjectName", header: "Subject Name", sortable: true },
    { field: "semester", header: "Semester", sortable: true },
    { field: "attendancePercentage", header: "Attendance (%)", sortable: true },
     {
          header: 'Action',
          body: () => (
            <div className="flex gap-2">
              <Button icon="pi pi-pencil" className="p-button-rounded p-button-secondary p-button-sm" style={{ backgroundColor: '#6366F1' }} />
              <Button icon="pi pi-trash" className="p-button-rounded p-button-danger p-button-sm" />
            </div>
          ),
          field: '',
        },
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Searching Records:", formData);
  };

  const handleClear = () => {
    setFormData({
      fromDate: null as Date | null,
      toDate: null as Date | null,
      courseName: null,
      specialization: null,
      semesterName: null,
      subjectName: null,
      enrollmentNo: null,
    });
  };

  return (
    <PageLayout title="View Attendance Records">
      {/* Search Filters Section - From Image 2 */}
      <form
        onSubmit={handleSearch}
        className="space-y-6 bg-white p-4 rounded-lg shadow-sm"
      >
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <DateInput
            label="From Date"
            required
            value={formData.fromDate}
            onChange={(e) =>
              setFormData({
                ...formData,
                fromDate: e.value as Date,
              })
            }
            dateFormat="dd/mm/yy"
            placeholder="dd/mm/yyyy"
            showIcon
          />
          <DateInput
            label="To Date"
            required
            value={formData.toDate}
            onChange={(e) =>
              setFormData({
                ...formData,
                toDate: e.value as Date,
              })
            }
            dateFormat="dd/mm/yy"
            placeholder="dd/mm/yyyy"
            showIcon
          />

          <Dropdown
            label="Select Course Name"
            required
            value={formData.courseName}
            options={courses}
            onChange={(e) => setFormData({ ...formData, courseName: e.value })}
            placeholder="Select"
          />

          <Dropdown
            label="Select Specialization"
            required
            value={formData.specialization}
            options={specializations}
            onChange={(e) =>
              setFormData({ ...formData, specialization: e.value })
            }
            placeholder="Select"
          />

          <Dropdown
            label="Select Semester Name"
            required
            value={formData.semesterName}
            options={semesters}
            onChange={(e) =>
              setFormData({ ...formData, semesterName: e.value })
            }
            placeholder="Select"
          />

          <Dropdown
            label="Select Subject Name"
            required
            value={formData.subjectName}
            options={subjects}
            onChange={(e) => setFormData({ ...formData, subjectName: e.value })}
            placeholder="Select"
          />

          <Dropdown
            label="Select Enrollment No."
            required
            value={formData.enrollmentNo}
            options={enrollments}
            onChange={(e) =>
              setFormData({ ...formData, enrollmentNo: e.value })
            }
            placeholder="Select"
          />
        </div>

        <div className="flex gap-3 justify-center">
          <Button
            type="submit"
            label="Search"
            className="px-6"
            style={{ backgroundColor: "#6366F1" }}
          />
          <Button
            type="button"
            label="Clear"
            className="p-button-danger p-button-outlined px-6"
            onClick={handleClear}
            style={{ color: "#ff4d4d", borderColor: "#ff4d4d" }}
          />
        </div>
      </form>

      {/* Results Table Section - From Image 3 */}
      <div className="mt-8">
        <Table columns={columns} data={rows} showPagination rowsPerPage={10} />
      </div>
    </PageLayout>
  );
};

export default ViewAttendanceRecords;
