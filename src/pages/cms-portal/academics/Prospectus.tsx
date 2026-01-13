import React from 'react';
import PageLayout from '@/components/PageLayout';
import { Card } from 'primereact/card';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

interface Staff {
  name: string;
  designation: string;
}

interface Department {
  id: number;
  departmentName: string;
  hod: string;
  staff: Staff[];
}

const departmentData: Department[] = [
  {
    id: 1,
    departmentName: 'Computer Science',
    hod: 'AKANKSHA SHRIVASTAVA',
    staff: [
      { name: 'Arvind Verma', designation: 'Assistant Professor' },
      { name: 'Mukesh Srivastav', designation: 'Assistant Professor' },
    ],
  },
  {
    id: 2,
    departmentName: 'Electronics',
    hod: 'Shubhangi Shukla',
    staff: [
      { name: 'Jayvardhan', designation: 'Assistant Professor' },
      { name: 'Mukesh Srivastav', designation: 'Assistant Professor' },
    ],
  },
  {
    id: 3,
    departmentName: 'Data Science',
    hod: 'Nitin Patel',
    staff: [
      { name: 'Arjun Sharma', designation: 'Assistant Professor' },
      { name: 'Mukesh Patidar', designation: 'Assistant Professor' },
    ],
  },
  {
    id: 4,
    departmentName: 'Mechanical',
    hod: 'Vikram Rathore',
    staff: [
      { name: 'Vikramaditya Agnihotri', designation: 'Assistant Professor' },
      { name: 'Mukesh Patidar', designation: 'Assistant Professor' },
    ],
  },
];

const ProspectusPage: React.FC = () => {
  const staffBodyTemplate = (row: Department) => (
    <div>
      {row.staff.map((s, index) => (
        <div key={index}>
          {s.designation} - {s.name}
        </div>
      ))}
    </div>
  );

  return (
    <PageLayout title="Prospectus">
      <Card className="mb-4">
        <h3 className="font-semibold mb-2">College Overview</h3>
        <p>
          Swami Vivekanand Government College, Susner, is a prestigious academic institution under the Department of Higher Education, Madhya Pradesh.
          The college is dedicated to providing quality education to students, empowering them to bring positive change in society. The college aims
          to equip students with the skills and knowledge necessary for their personal, academic, and professional success.
        </p>
      </Card>
      <Card className="mb-4">
        <h3 className="font-semibold mb-2">Mission and Vision</h3>
        <p>
          <strong>Mission:</strong> To provide an inclusive and high-quality education that fosters intellectual growth, character development,
          and social responsibility among students.
        </p>
      </Card>
      <Card className="mb-4">
        <h3 className="font-semibold mb-2">Academic Programs Offered</h3>
        <h4 className="font-semibold mt-2">Undergraduate Programs</h4>
        <ul className="list-disc ml-5">
          <li>Bachelor of Technology (B.Tech)</li>
          <li>Bachelor of Science (BSc)</li>
          <li>Bachelor of Computer Applications (BCA)</li>
        </ul>
        <h4 className="font-semibold mt-2">Postgraduate Programs</h4>
        <ul className="list-disc ml-5">
          <li>Master of Technology (M.Tech) in Computer Science</li>
          <li>Master of Science (MSc) in Chemistry</li>
          <li>Master of Science (MSc) in Physics</li>
        </ul>
      </Card>
      <Card className="mb-4">
        <h3 className="font-semibold mb-2">Department Wise Staff Detail</h3>
        <DataTable value={departmentData} paginator rows={10} showGridlines>
          <Column field="departmentName" header="Name of Department" sortable/>
          <Column field="hod" header="Head of Department" sortable/>
          <Column header="Staff Detail" body={staffBodyTemplate}sortable />
        </DataTable>
      </Card>
      <Card className="mb-4">
        <h3 className="font-semibold mb-2">Admission Process</h3>
        <p><strong>Eligibility:</strong></p>
        <ul className="list-disc ml-5">
          <li>Undergraduate Courses: Minimum 50% marks in the 12th standard from a recognized board.</li>
          <li>Postgraduate Courses: Graduation degree from a recognized university.</li>
        </ul>
        <p><strong>How to Apply:</strong></p>
        <ul className="list-disc ml-5">
          <li>Visit the college website: www.svcollege.edu.in</li>
          <li>Fill out the online application form.</li>
          <li>Submit the required documents (marksheets, ID proof, etc.).</li>
          <li>Pay the application fee online.</li>
        </ul>
        <p><strong>Important Dates:</strong></p>
        <ul className="list-disc ml-5">
          <li>Application Start Date: June 1, 2024</li>
          <li>Application Deadline: June 30, 2024</li>
          <li>Admission Result: July 10, 2024</li>
        </ul>
      </Card>
      <Card className="mb-4">
        <h3 className="font-semibold mb-2">Campus Life</h3>
        <ul className="list-disc ml-5">
          <li><strong>Library:</strong> A well-stocked library with access to a wide range of books, journals, and online resources.</li>
          <li><strong>Sports Facilities:</strong> Indoor and outdoor sports complexes to promote physical fitness.</li>
          <li><strong>Cultural Activities:</strong> Annual festivals, music, dance competitions, and drama performances.</li>
          <li><strong>Hostel Facilities:</strong> Separate hostels for boys and girls with modern amenities.</li>
        </ul>
      </Card>
      <Card className="mb-4">
        <h3 className="font-semibold mb-2">Contact Information</h3>
        <p><strong>College Address:</strong> Swami Vivekanand Government College, Susner, Madhya Pradesh, India</p>
        <p><strong>Phone:</strong> +91-123-4567890</p>
        <p><strong>Email:</strong> info@svcollege.edu.in</p>
        <p><strong>Website:</strong> www.svcollege.edu.in</p>
      </Card>
    </PageLayout>
  );
};

export default ProspectusPage;
