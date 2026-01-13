
import React, { useState } from "react";
import PageLayout from "../../../components/PageLayout";

import { Button } from "primereact/button";
import { Calendar } from "primereact/calendar";

import { DataTable, type DataTableExpandedRows, type DataTableValueArray } from "primereact/datatable";
import { Column } from "primereact/column";
import { DataTable, type DataTableExpandedRows } from "primereact/datatable";
import { InputText } from "primereact/inputtext";
import React, { useState } from "react";
import PageLayout from "../../../components/PageLayout";

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

  const [expandedRows, setExpandedRows] = useState<DataTableExpandedRows | DataTableValueArray | undefined>(undefined);

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
  ]);

  const rowExpansionTemplate = (data: ChoiceData) => {
    return (
      <div className="p-4 bg-gray-50 border-round shadow-inner mx-3 my-2 border-left-3 border-indigo-500">
        <div className="mb-3">
          <span className="font-bold text-xs uppercase text-gray-500">
            Admission Confirmation Status:
          </span>
          <span className={`ml-2 text-sm font-bold ${data.admissionConfirmStatus === 'Confirmed' ? 'text-green-600' : 'text-red-500'}`}>
            {data.admissionConfirmStatus}
          </span>
        </div>

        <div>
          <h4 className="font-bold text-xs uppercase text-gray-500 mb-2">Available Actions</h4>
          <div className="flex gap-2">
            <Button
              label="Edit Details"
              icon="pi pi-pencil"
              className="p-button-sm p-button-info"
            />
            <Button
              label="Delete Record"
              icon="pi pi-trash"
              className="p-button-sm p-button-danger p-button-outlined"
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
          <div className="flex flex-col gap-2">
            <label className="text-xs font-bold text-gray-600 uppercase">
              Registration No.<span className="text-red-500 ml-1">*</span>
            </label>
            <InputText
              value={searchData.regNo}
              onChange={(e) =>
                setSearchData({ ...searchData, regNo: e.target.value })
              }
              className="p-inputtext-sm"
              placeholder="e.g. 221041XXXX"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-xs font-bold text-gray-600 uppercase">
              Date Of Birth<span className="text-red-500 ml-1">*</span>
            </label>
            <Calendar
              value={searchData.dob}
              onChange={(e) =>
                setSearchData({ ...searchData, dob: e.value ?? null })
              }
              className="w-full p-inputtext-sm"
              placeholder="Select Date"
              showIcon
              dateFormat="dd/mm/yy"
            />
          </div>
          <div>
            <Button
              label="Search Report"
              icon="pi pi-search"
              className="bg-indigo-600 border-none px-6 p-button-sm"
            />
          </div>
        </div>
      </div>
      <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
        <h2 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
          <i className="pi pi-list text-indigo-500" /> Choice Report List
        </h2>

        <DataTable
          value={reports}
          expandedRows={expandedRows}
          onRowToggle={(e) => setExpandedRows(e.data)}
          rowExpansionTemplate={rowExpansionTemplate}
          dataKey="id"
          paginator
          rows={10}
          className="p-datatable-sm text-sm"
          stripedRows
          showGridlines
          removableSort
        >
          <Column expander={true} style={{ width: "3rem" }} />

          <Column
            field="srNo"
            header="Sr No."
            sortable
            style={{ width: "70px" }}
          />
          <Column field="regNo" header="Registration No." sortable className="font-bold text-indigo-600" />
          <Column field="name" header="Name" sortable />
          <Column field="dob" header="DOB" sortable />
          <Column field="gender" header="Gender" />
          <Column field="course" header="Course" sortable />
          className="p-datatable-sm text-sm">
          <Column expander={true} headerStyle={{ whiteSpace: 'nowrap' }} />
          <Column field="regNo" header="Registration No." sortable headerStyle={{ whiteSpace: 'nowrap' }} />
          <Column field="name" header="Name" sortable headerStyle={{ whiteSpace: 'nowrap' }} />
          <Column field="dob" header="Date of Birth" sortable headerStyle={{ whiteSpace: 'nowrap' }} />
          <Column field="gender" header="Gender" sortable headerStyle={{ whiteSpace: 'nowrap' }} />
          <Column field="course" header="Course Applied For" sortable headerStyle={{ whiteSpace: 'nowrap' }} />
          <Column
            field="specialization"
            header="Specialization"
            sortable
            headerStyle={{ whiteSpace: 'nowrap' }}
          />
          <Column field="admissionStatus" header="Status" sortable />
          <Column field="feeStatus" header="Fee" sortable 
            body={(rowData) => (
                <span className={`px-2 py-1 rounded-full text-[10px] font-bold ${rowData.feeStatus === 'Paid' ? 'bg-green-100 text-green-700' : 'bg-orange-100 text-orange-700'}`}>
                    {rowData.feeStatus}
                </span>
            )}
          />
          <Column field="admissionStatus" header="Admission Status" sortable headerStyle={{ whiteSpace: 'nowrap' }} />
          <Column field="firstChoice" header="First Choice Course" headerStyle={{ whiteSpace: 'nowrap' }} />
          <Column field="seatStatus" header="Seat Allotment Status" headerStyle={{ whiteSpace: 'nowrap' }} />
          <Column
            field="submissionDate"
            header="Application Submission Date"
            sortable
            headerStyle={{ whiteSpace: 'nowrap' }}
          />
          <Column field="feeStatus" header="Fee Status" sortable headerStyle={{ whiteSpace: 'nowrap' }} />
        </DataTable>
      </div>
    </PageLayout>
  );
};

export default ChoiceReport;