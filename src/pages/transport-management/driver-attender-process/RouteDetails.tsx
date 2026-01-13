import { useState } from "react";
import PageLayout from "../../../components/PageLayout";
import { Button } from "primereact/button";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Dropdown } from "primereact/dropdown";
import { Calendar } from "primereact/calendar";
import { Dialog } from "primereact/dialog";

interface RouteSummary {
  id: number;
  routeNo: string;
  busStopCount: number;
  studentCount: number;
  teacherCount: number;
}

interface StudentDetail {
  id: number;
  studentClass: string;
  studentName: string;
  parentsName: string;
  contactNo: string;
  arrivalTime: string;
  departureTime: string;
}

export default function RouteDetails() {
  const [showList, setShowList] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [filters, setFilters] = useState({ routeCode: null, date: null });
  const [date, setDate] = useState<Date | null>(null);

  const routeListData: RouteSummary[] = [
    {
      id: 1,
      routeNo: "RTU001",
      busStopCount: 5,
      studentCount: 120,
      teacherCount: 10,
    },
    {
      id: 2,
      routeNo: "RTU002",
      busStopCount: 4,
      studentCount: 100,
      teacherCount: 8,
    },
  ];

  const studentDetails: StudentDetail[] = [
    {
      id: 1,
      studentClass: "1st Year - B.Tech",
      studentName: "Aman Kumar",
      parentsName: "Rajesh Kumar",
      contactNo: "9876543210",
      arrivalTime: "8:00 AM",
      departureTime: "5:00 PM",
    },
  ];

  const routeOptions = [
    { label: "RTU001", value: "RTU001" },
    { label: "RTU002", value: "RTU002" },
  ];

  const modalFooter = (
    <div className="flex justify-end pt-4 border-t">
      <Button
        label="Close"
        icon="pi pi-times"
        severity="danger"
        outlined
        onClick={() => setShowModal(false)}
        className="px-6"
      />
    </div>
  );

  //   const viewButtonTemplate = () => (
  //     <div className="flex justify-center">
  //       <Button
  //         icon="pi pi-eye"
  //         className="bg-blue-600 border-none rounded-full h-10 w-10 flex items-center justify-center shadow-sm hover:bg-blue-800"
  //         onClick={() => setShowModal(true)}
  //         tooltip="View Student Details"
  //         tooltipOptions={{ position: 'top' }}
  //       />
  //     </div>

  const viewButtonTemplate = () => (
    <div className="flex justify-center">
      <button
        type="button"
        onClick={() => setShowModal(true)}
        className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center hover:bg-blue-800 transition-colors shadow-md border-none"
        title="View Student Details"
      >
        <i className="pi pi-eye text-lg"></i>
      </button>
    </div>
  );

  return (
    <PageLayout title="Route Details">
      <div className="space-y-6">
        <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
          <h2 className="text-xl font-bold text-gray-800 mb-6 border-b pb-4">
            Route Details Search
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-gray-700">
                Select Route Code <span className="text-red-500">*</span>
              </label>
              <Dropdown
                value={filters.routeCode}
                options={routeOptions}
                onChange={(e) => setFilters({ ...filters, routeCode: e.value })}
                placeholder="Select Route"
                className="w-full"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-gray-700">
                Select Date <span className="text-red-500">*</span>
              </label>
              <Calendar
                value={date}
                onChange={(e) => setDate(e.value as Date)}
                placeholder="dd/mm/yyyy"
                showIcon
                className="w-full"
              />
            </div>
          </div>

          <div className="flex justify-center gap-4">
            <Button
              label="Search"
              icon="pi pi-search"
              className="bg-blue-700 px-8 shadow-md"
              onClick={() => setShowList(true)}
            />
            <Button
              label="Clear"
              icon="pi pi-refresh"
              severity="danger"
              outlined
              className="px-8"
              onClick={() => {
                setShowList(false);
                setFilters({ routeCode: null, date: null });
                setDate(null);
              }}
            />
          </div>
        </div>

        {showList && (
          <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm animate-fadein">
            <div className="flex justify-between items-center mb-6 border-b pb-4">
              <h3 className="text-lg font-bold text-gray-800 uppercase tracking-tight">
                Route Summary List
              </h3>
            </div>

            <DataTable
              value={routeListData}
              paginator
              rows={10}
              className="p-datatable-sm"
            >
              <Column
                header="Sr. No."
                body={(_, { rowIndex }) => rowIndex + 1}
                style={{ width: "70px" }} sortable
              />
              <Column field="routeNo" header="Route No." sortable />
              <Column
                field="busStopCount"
                header="Bus Stop Count"
                align="center" 
              />
              <Column
                field="studentCount"
                header="Student Count"
                align="center"
              />
              <Column
                field="teacherCount"
                header="Teacher Count"
                align="center"
              />
              <Column
                header="View Details"
                align="center"
                body={viewButtonTemplate}
                style={{ width: "120px" }}
              />
            </DataTable>
          </div>
        )}

        <Dialog
          header="Detailed Route Information"
          visible={showModal}
          style={{ width: "85vw" }}
          onHide={() => setShowModal(false)}
          footer={modalFooter}
          draggable={false}
          resizable={false}
        >
          <div className="mt-2">
            <DataTable
              value={studentDetails}
              paginator
              rows={5}
              className="p-datatable-sm p-datatable-gridlines"
            >
              <Column
                header="Sr No."
                body={(_, { rowIndex }) => rowIndex + 1}
                style={{ width: "60px" }}
              />
              <Column field="studentClass" header="Class/Branch" />
              <Column field="studentName" header="Student Name" sortable />
              <Column field="parentsName" header="Parents Name" />
              <Column field="contactNo" header="Contact No" />
              <Column field="arrivalTime" header="Arrival In" align="center" />
              <Column
                field="departureTime"
                header="Departure Out"
                align="center"
              />
            </DataTable>
          </div>
        </Dialog>
      </div>
    </PageLayout>
  );
}
