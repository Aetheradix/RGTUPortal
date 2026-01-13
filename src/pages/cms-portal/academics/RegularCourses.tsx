import React from 'react';
import PageLayout from '@/components/PageLayout';
import { Card } from 'primereact/card';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

interface Course {
  id: number;
  courseName: string;
  minQualification: string;
  seats: number;
}

const pgCourses: Course[] = [
  { id: 1, courseName: 'Master of Technology (M.Tech)', minQualification: 'Bachelor of Technology', seats: 990 },
  { id: 2, courseName: 'Master of Science (M.Sc) (Computer Science)', minQualification: 'Bachelor of Science (Computer Science)', seats: 354 },
  { id: 3, courseName: 'Master of Computer Applications (MCA)', minQualification: 'Bachelor of Science (Computer Science), BTech or bachelors degree with Maths as subject, BCA', seats: 354 },
  { id: 4, courseName: 'Master of Technology (M.Tech) in AI & ML', minQualification: 'Bachelor of Technology', seats: 990 },
];

const ugCourses: Course[] = [
  { id: 1, courseName: 'Bachelor of Technology (B.Tech)', minQualification: '10+2 with Physics, Chemistry, Maths', seats: 990 },
  { id: 2, courseName: 'Bachelor of Science (B.Sc) (Computer Science)', minQualification: '10+2 with Physics, Chemistry, Maths', seats: 354 },
  { id: 3, courseName: 'Bachelor of Computer Applications (BCA)', minQualification: '10+2 with any Stream', seats: 354 },
  { id: 4, courseName: 'Bachelor of Technology (B.Tech) in AI & ML', minQualification: '10+2 with Physics, Chemistry, Maths', seats: 990 },
  { id: 5, courseName: 'Bachelor of Technology (B.Tech) in Electronics and Communication Engineering (ECE)', minQualification: '10+2 with Physics, Chemistry, Maths', seats: 990 },
];

const RegularCoursesPage: React.FC = () => {
  return (
    <PageLayout title="Regular Courses">

      <Card className="mb-4">
        <h3 className="font-semibold mb-3">PG Programme</h3>
        <DataTable value={pgCourses} paginator rows={10} showGridlines>
          <Column field="courseName" header="Course Name"sortable />
          <Column field="minQualification" header="Minimum Qualification"sortable />
          <Column field="seats" header="Seats"sortable />
        </DataTable>
      </Card>
      <Card>
        <h3 className="font-semibold mb-3">UG Programme</h3>
        <DataTable value={ugCourses} paginator rows={10} showGridlines>
          <Column field="courseName" header="Course Name" sortable/>
          <Column field="minQualification" header="Minimum Qualification" sortable/>
          <Column field="seats" header="Seats" sortable/>
        </DataTable>
      </Card>
    </PageLayout>
  );
};

export default RegularCoursesPage;
