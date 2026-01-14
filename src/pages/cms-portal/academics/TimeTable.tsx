import React, { useState } from 'react';
import PageLayout from '@/components/PageLayout';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import Dropdown from '@/ui/shared/Dropdown';

interface Timetable {
  id: number;
  name: string;
  pdfUrl: string;
}
const timetableData: Timetable[] = [
  { id: 1, name: 'Time Table for BSc secondary exam date 1387', pdfUrl: '/pdfs/timetable1.pdf' },
  { id: 2, name: 'Time Table for UG 3 Year exam_1306', pdfUrl: '/pdfs/timetable2.pdf' },
  { id: 3, name: 'Revised Yearly old Exam Centre List 1302', pdfUrl: '/pdfs/timetable3.pdf' },
  { id: 4, name: 'Revised Time Table Third Year 1301', pdfUrl: '/pdfs/timetable4.pdf' },
  { id: 5, name: 'Revised Time Table for UG_3 Year NEP_ Regular and Private exam_03May2024', pdfUrl: '/pdfs/timetable5.pdf' },
];

const academicYears = [
  { label: '2023-24', value: '2023-24' },
  { label: '2022-23', value: '2022-23' },
  { label: '2021-22', value: '2021-22' },
];

const courseCategories = [
  { label: 'UG', value: 'UG' },
  { label: 'PG', value: 'PG' },
  { label: 'Distance Education', value: 'DE' },
];

const SearchTimetablePage: React.FC = () => {
  const [selectedYear, setSelectedYear] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [filteredData, setFilteredData] = useState<Timetable[]>(timetableData);

  const handleSearch = () => {
    let data = timetableData;

    if (selectedYear) {
      data = data.filter(d => d.name.includes(selectedYear));
    }

    if (selectedCategory) {
      data = data.filter(d => d.name.toLowerCase().includes(selectedCategory.toLowerCase()));
    }

    setFilteredData(data);
  };

  const handleClear = () => {
    setSelectedYear(null);
    setSelectedCategory(null);
    setFilteredData(timetableData);
  };

  const downloadPdf = (url: string) => {
    window.open(url, '_blank');
  };

  return (
    <PageLayout title="Search Timetable">
      <Card className="mb-4">
        <div className="flex flex-column md:flex-row gap-4 mb-4">
          <div className="flex-1">
            <label className="block mb-2 font-semibold">Select Academic Year *</label>
            <Dropdown
              value={selectedYear}
              options={academicYears}
              onChange={(e) => setSelectedYear(e.value)}
              placeholder="Select Year"
              className="w-full" 
            />
          </div>
<div className="flex-1">
            <label className="block mb-2 font-semibold">Select Course Category *</label>
            <Dropdown
              value={selectedCategory}
              options={courseCategories}
              onChange={(e) => setSelectedCategory(e.value)}
              placeholder="Select Category"
              className="w-full"
            />
          </div>
        </div>
        <div className="flex gap-2 mb-6">
          <Button label="Search" icon="pi pi-search" onClick={handleSearch} />
          <Button label="Clear" icon="pi pi-times" className="p-button-secondary p-button-outlined" onClick={handleClear} />
        </div>
        <DataTable value={filteredData} paginator rows={10} showGridlines>
          <Column field="name" header="List of Timetable" sortable />
          <Column
            header="PDF Download"
            body={(row: Timetable) => (
              <Button 
                label="Download" 
                icon="pi pi-download" 
                className="p-button-sm p-button-text" 
                onClick={() => downloadPdf(row.pdfUrl)} 
              />
            )}
            style={{ width: '12rem', textAlign: 'center' }}
          />
        </DataTable>
      </Card>
    </PageLayout>
  );
};

export default SearchTimetablePage;