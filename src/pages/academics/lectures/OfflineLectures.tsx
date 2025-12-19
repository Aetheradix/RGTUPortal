import React, { useState } from "react";
import PageLayout from "../../../components/PageLayout";
import { Button } from "primereact/button";
import { Input, Dropdown, Table, type TableColumn } from "../../../ui/shared";
import { DateInput } from "../../../ui/shared/Input";

interface LectureScheduleRow {
  srNo: number;
  lectureTopic: string;
  lectureDate: string;
  startTime: string;
  endTime: string;
  courseProgram: string;
  instructorName: string;
  lectureRoom: string;
}

const rooms = [
  { label: "Room 305", value: "Room 305" },
  { label: "Room 306", value: "Room 306" },
];

const courses = [
  { label: "B.Tech ", value: "B.Tech " },
  { label: "M.Tech ", value: "M.Tech " },
  { label: "BCA", value: "BCA" },
  { label: "MCA", value: "MCA" },
];

const instructors = [
  { label: "Dr. Arvind Shukla", value: "Arvind Shukla" },
  { label: "Dr. Anjali Verma", value: "Anjali Verma" },
  { label: "Dr. Rajesh Kumar", value: "Rajesh Kumar" },
];

const dummyData: LectureScheduleRow[] = [
  {
    srNo: 1,
    lectureTopic: "Data Science",
    lectureDate: "4/11/2024",
    startTime: "1PM",
    endTime: "3PM",
    courseProgram: "B.Tech ",
    instructorName: "Dr. Arvind Shukla",
    lectureRoom: "Room 305",
  },
  {
    srNo: 2,
    lectureTopic: "DSA",
    lectureDate: "12/11/2024",
    startTime: "2PM",
    endTime: "3PM",
    courseProgram: "M.Tech ",
    instructorName: "Dr. Anjali Verma",
    lectureRoom: "Room 306",
  },
];

const OfflineLectureScheduling: React.FC = () => {
  const [formData, setFormData] = useState({
    lectureTopic: "",
    lectureDate: null as Date | null,
    lectureRoom: null as string | null,
    startTime: null as Date | null,
    endTime: null as Date | null,
    courseProgram: null as string | null,
    instructorName: null as string | null,
  });
  const [rows] = useState<LectureScheduleRow[]>(dummyData);

  const columns: TableColumn[] = [
    {
      field: "srNo",
      header: "Sr.No.",
      sortable: true,
      style: { width: "70px" },
    },
    {
      field: "lectureTopic",
      header: "Lecture Topic / Subject",
      sortable: true,
    },
    { field: "lectureDate", header: "Lecture Date", sortable: true },
    { field: "startTime", header: "Start Time", sortable: true },
    { field: "endTime", header: "End Time", sortable: true },
    { field: "courseProgram", header: "Course / Program", sortable: true },
    { field: "instructorName", header: "Instructor Name", sortable: true },
    { field: "lectureRoom", header: "lecture room", sortable: true },
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Lecture Scheduled:", formData);
  };

  const handleReset = () => {
    setFormData({
      lectureTopic: "",
      lectureDate: null as Date | null,
      lectureRoom: null,
      startTime: null as Date | null,
      endTime: null as Date | null,
      courseProgram: null,
      instructorName: null,
    });
  };

  return (
    <PageLayout title="Offline Lecture Scheduling">
      {/* Form Section - From Image 1 */}
      <form
        onSubmit={handleSubmit}
        className="space-y-6 bg-white p-4 rounded-lg shadow-sm"
      >
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Input
            label="Lecture Topic / Subject"
            required
            value={formData.lectureTopic}
            onChange={(e) =>
              setFormData({ ...formData, lectureTopic: e.target.value })
            }
            placeholder="Enter topic"
          />

          <DateInput
            label="Lecture Date"
            required
            value={formData.lectureDate}
            onChange={(e) =>
              setFormData({
                ...formData,
                lectureDate: e.value as Date,
              })
            }
            placeholder="dd/mm/yyyy"
            dateFormat="dd/mm/yy"
            showIcon
          />

          <Dropdown
            label="Lecture Room"
            required
            value={formData.lectureRoom}
            options={rooms}
            onChange={(e) => setFormData({ ...formData, lectureRoom: e.value })}
            placeholder="Select"
          />

          <DateInput
            label="Start Time"
            required
            timeOnly
            hourFormat="12"
            value={formData.startTime}
            onChange={(e) =>
              setFormData({
                ...formData,
                startTime: e.value as Date,
              })
            }
          />
          <DateInput
            label="End Time"
            required
            timeOnly
            hourFormat="12"
            value={formData.endTime}
            onChange={(e) =>
              setFormData({
                ...formData,
                startTime: e.value as Date,
              })
            }
          />

          <Dropdown
            label="Course / Program"
            required
            value={formData.courseProgram}
            options={courses}
            onChange={(e) =>
              setFormData({ ...formData, courseProgram: e.value })
            }
            placeholder="Select"
          />

          <Dropdown
            label="Instructor Name"
            required
            value={formData.instructorName}
            options={instructors}
            onChange={(e) =>
              setFormData({ ...formData, instructorName: e.value })
            }
            placeholder="Select"
          />
        </div>

        <div className="flex gap-3 justify-center mt-4">
          <Button
            type="submit"
            label="Save"
            className="p-button-primary px-6"
            style={{ backgroundColor: "#4F46E5" }}
          />
          <Button
            type="button"
            label="Clear"
            className="p-button-danger p-button-outlined px-6"
            onClick={handleReset}
          />
        </div>
      </form>

      <div className="mt-8">
        <Table
          title="Lecture Schedule List"
          columns={columns}
          data={rows}
          showPagination
          rowsPerPage={10}
        />
      </div>
    </PageLayout>
  );
};

export default OfflineLectureScheduling;
