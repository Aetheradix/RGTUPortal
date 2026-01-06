import React, { useState } from "react";
import PageLayout from "@/components/PageLayout";
import { Card } from "primereact/card";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";

import { Calendar } from "primereact/calendar";
import Dropdown from "@/ui/shared/Dropdown";

interface Course {
  id: number;
  courseName: string;
  department: string;
  startDate: string;
  duration: number;
}

const initialCourses: Course[] = [
  { id: 1, courseName: "Artificial Intelligence", department: "Computer Science", startDate: "2025-03-01", duration: 12 },
  { id: 2, courseName: "Blockchain Technology", department: "Information Technology", startDate: "2025-05-15", duration: 12 },
  { id: 3, courseName: "Quantum Computing", department: "Electronics", startDate: "2025-09-10", duration: 12 },
  { id: 4, courseName: "Green Energy Systems", department: "Mechanical Engineering", startDate: "2026-01-20", duration: 12 },
  { id: 5, courseName: "Digital Marketing", department: "Business Administration", startDate: "2026-03-05", duration: 12 },
];

const coursesOptions = [
  { label: "Artificial Intelligence", value: "Artificial Intelligence" },
  { label: "Blockchain Technology", value: "Blockchain Technology" },
  { label: "Quantum Computing", value: "Quantum Computing" },
  { label: "Green Energy Systems", value: "Green Energy Systems" },
  { label: "Digital Marketing", value: "Digital Marketing" },
];

const departmentOptions = [
  { label: "Computer Science", value: "Computer Science" },
  { label: "Information Technology", value: "Information Technology" },
  { label: "Electronics", value: "Electronics" },
  { label: "Mechanical Engineering", value: "Mechanical Engineering" },
  { label: "Business Administration", value: "Business Administration" },
];

const durationOptions = [
  { label: "6", value: 6 },
  { label: "12", value: 12 },
  { label: "18", value: 18 },
  { label: "24", value: 24 },
];

const NewCoursesStarted: React.FC = () => {
  const [courses, setCourses] = useState<Course[]>(initialCourses);
  const [showForm, setShowForm] = useState(false);

  const [courseName, setCourseName] = useState<string | null>(null);
  const [department, setDepartment] = useState<string | null>(null);
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [duration, setDuration] = useState<number | null>(12);

  const saveCourse = () => {
    if (!courseName || !department || !startDate || !duration) {
      return alert("All fields are required");
    }

    const newCourse: Course = {
      id: courses.length + 1,
      courseName,
      department,
      startDate: startDate.toISOString().split("T")[0],
      duration,
    };

    setCourses([...courses, newCourse]);
    setCourseName(null);
    setDepartment(null);
    setStartDate(null);
    setDuration(12);
    setShowForm(false);
  };

  const actionTemplate = () => (
    <div className="flex gap-2">
      <Button icon="pi pi-pencil" className="p-button-rounded p-button-info p-button-sm" />
      <Button icon="pi pi-trash" className="p-button-rounded p-button-danger p-button-sm" />
    </div>
  );
  if (showForm) {
    return (
      <PageLayout title="New Course Started">
        <Card className="mb-4">
          <div className="flex justify-between mb-4">
            <h3 className="font-semibold">Add New Course</h3>
            <Button label="Go Back" className="p-button-text" onClick={() => setShowForm(false)} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium">Select Course *</label>
              <Dropdown
                value={courseName}
                onChange={(e) => setCourseName(e.value)}
                options={coursesOptions}
                placeholder="Select"
                className="w-full"
              />
            </div>

            <div>
              <label className="text-sm font-medium">Select Department *</label>
              <Dropdown
                value={department}
                onChange={(e) => setDepartment(e.value)}
                options={departmentOptions}
                placeholder="Select"
                className="w-full"
              />
            </div>

            <div>
              <label className="text-sm font-medium">Enter Start Date *</label>
              <Calendar
                value={startDate}
                onChange={(e) => setStartDate(e.value ?? null)}
                dateFormat="yy-mm-dd"
                placeholder="dd/mm/yyyy"
                className="w-full"
              />
            </div>

            <div>
              <label className="text-sm font-medium">Select Duration Months *</label>
              <Dropdown
                value={duration}
                onChange={(e) => setDuration(e.value)}
                options={durationOptions}
                placeholder="Select"
                className="w-full"
              />
            </div>
          </div>
          <div className="flex justify-center gap-3 mt-5">
            <Button label="Save" icon="pi pi-save" onClick={saveCourse} />
            <Button
              label="Clear"
              icon="pi pi-refresh"
              className="p-button-secondary"
              onClick={() => {
                setCourseName(null);
                setDepartment(null);
                setStartDate(null);
                setDuration(12);
              }}
            />
          </div>
        </Card>
      </PageLayout>
    );
  }
  return (
    <PageLayout title="New Course Started">
     <Card className="mb-4">
          <div className="flex justify-between mb-4">
            <h2 className="font-semibold">Course List </h2>
            <Button
              label="Add New Course"
              icon="pi pi-plus"
              size="small"
              onClick={() => setShowForm(true)}
            />
          </div>
        
        <DataTable value={courses} paginator rows={10}>
          <Column field="courseName" header="Course Name" sortable />
          <Column field="department" header="Department" sortable />
          <Column field="startDate" header="Start Date" sortable />
          <Column field="duration" header="Duration (Months)" sortable />
          <Column header="Action" body={actionTemplate} />
        </DataTable>
      </Card>
    </PageLayout>
  );
};

export default NewCoursesStarted;
