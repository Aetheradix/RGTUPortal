
import React, { useState } from "react";
import PageLayout from "../../../components/PageLayout";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { Calendar } from "primereact/calendar";
import { DataTable, type DataTableExpandedRows } from "primereact/datatable";
import { Column } from "primereact/column";

interface ChoiceData {
  id: string;
  srNo: number;
  regNo: string;
  name: string;
  dob: string;
  gender: string;
  course: string;
  specialization: string;
  admissionStatus: string;
  firstChoice: string;
  seatStatus: string;
  submissionDate: string;
  feeStatus: string;
  admissionConfirmStatus: string;
}

const ChoiceReport: React.FC = () => {
  const [searchData, setSearchData] = useState({
    regNo: "",
    dob: null as Date | null,
  });

  const [expandedRows, setExpandedRows] = useState<
    DataTableExpandedRows | any[] | undefined
  >(undefined);

  const [reports] = useState<ChoiceData[]>([
    {
      id: "1",
      srNo: 3,
      regNo: "221041234568",
      name: "Priya Singh",
      dob: "22-Oct-1999",
      gender: "Female",
      course: "MBA",
      specialization: "Business Management",
      admissionStatus: "Admitted",
      firstChoice: "MBA Business Management",
      seatStatus: "Allocated",
      submissionDate: "01-Mar-2024",
      feeStatus: "Paid",
      admissionConfirmStatus: "Confirmed",
    },
    {
      id: "2",
      srNo: 2,
      regNo: "221041234598",
      name: "Ananya Gupta",
      dob: "15-Jun-2000",
      gender: "Female",
      course: "M.Tech",
      specialization: "Civil Engineering",
      admissionStatus: "Waitlisted",
      firstChoice: "M.Tech Civil Engineering",
      seatStatus: "Waitlisted",
      submissionDate: "18-Feb-2024",
      feeStatus: "Pending",
      admissionConfirmStatus: "Not Confirmed",
    },
    {
      id: "3",
      srNo: 1,
      regNo: "221041234568",
      name: "Priya Singh",
      dob: "22-Oct-1999",
      gender: "Female",
      course: "MBA",
      specialization: "Business Management",
      admissionStatus: "Admitted",
      firstChoice: "MBA Business Management",
      seatStatus: "Allocated",
      submissionDate: "01-Mar-2024",
      feeStatus: "Paid",
      admissionConfirmStatus: "Confirmed",
    },
    {
      id: "4",
      srNo: 4,
      regNo: "221041234598",
      name: "Ananya Gupta",
      dob: "15-Jun-2000",
      gender: "Female",
      course: "M.Tech",
      specialization: "Civil Engineering",
      admissionStatus: "Waitlisted",
      firstChoice: "M.Tech Civil Engineering",
      seatStatus: "Waitlisted",
      submissionDate: "18-Feb-2024",
      feeStatus: "Pending",
      admissionConfirmStatus: "Not Confirmed",
    },
  ]);

  const rowExpansionTemplate = (data: ChoiceData) => {
    return (
      <div className="p-4 bg-gray-50 border-round shadow-inner">
        <div className="mb-3">
          <span className="font-bold text-sm text-gray-700">
            Admission Confirmation Status:{" "}
          </span>
          <span className="text-sm ml-2">{data.admissionConfirmStatus}</span>
        </div>

        <div>
          <h4 className="font-bold text-sm mb-2 text-gray-800">Actions</h4>
          <div className="flex gap-2">
            <Button
              label="Edit"
              icon="pi pi-pencil"
              className="p-button-sm p-button-info px-3 py-1"
            />
            <Button
              label="Delete"
              icon="pi pi-trash"
              className="p-button-sm p-button-danger px-3 py-1"
            />
          </div>
        </div>
      </div>
    );
  };

  return (
    <PageLayout title="Choice Report">
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 mb-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-end">
          <div>
            <label className="block text-sm font-medium mb-2 text-gray-700">
              Enter Registration No.<span className="text-red-500">*</span>
            </label>
            <InputText
              value={searchData.regNo}
              onChange={(e) =>
                setSearchData({ ...searchData, regNo: e.target.value })
              }
              className="w-full"
              placeholder="Enter Registration No."
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2 text-gray-700">
              Enter Date Of Birth<span className="text-red-500">*</span>
            </label>
            <Calendar
              value={searchData.dob}
              onChange={(e) =>
                setSearchData({ ...searchData, dob: e.value ?? null })
              }
              className="w-full"
              placeholder="Enter Date Of Birth"
              showIcon
              dateFormat="dd/mm/yy"
            />
          </div>
          <div>
            <Button
              label="Search"
              icon="pi pi-search"
              className="bg-indigo-600 border-none px-8 py-2 text-white"
            />
          </div>
        </div>
      </div>

      <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
        <h2 className="text-lg font-bold text-gray-800 mb-4">
          Choice Report List
        </h2>

        <DataTable
          value={reports}
          expandedRows={expandedRows}
          onRowToggle={(e) => setExpandedRows(e.data)}
          rowExpansionTemplate={rowExpansionTemplate}
          dataKey="id"
          paginator
          rows={10}
          className="p-datatable-sm text-sm">
          <Column expander={true} style={{ width: "3rem" }} />

          <Column
            field="srNo"
            header="Sr No."
            sortable
            style={{ width: "70px" }}
          />
          <Column field="regNo" header="Registration No." sortable />
          <Column field="name" header="Name" sortable />
          <Column field="dob" header="Date of Birth" sortable />
          <Column field="gender" header="Gender" sortable />
          <Column field="course" header="Course Applied For" sortable />
          <Column
            field="specialization"
            header="Preferred Specialization"
            sortable
          />
          <Column field="admissionStatus" header="Admission Status" sortable />
          <Column field="firstChoice" header="First Choice Course" />
          <Column field="seatStatus" header="Seat Allotment Status" />
          <Column
            field="submissionDate"
            header="Application Submission Date"
            sortable
          />
          <Column field="feeStatus" header="Fee Status" sortable />
        </DataTable>
      </div>
    </PageLayout>
  );
};

export default ChoiceReport;
