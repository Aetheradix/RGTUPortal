import { useState } from "react";
import { Button } from "primereact/button";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Dropdown } from "primereact/dropdown";
import { Checkbox } from "primereact/checkbox";
import PageLayout from "@/components/PageLayout";

interface BusStopEnrollmentItem {
  id: number;
  busRouteNo: string;
  studentName: string;
  courses: string;
  busStopName: string;
  status: string;
}

export default function BusStopEnrollment() {
  const [showForm, setShowForm] = useState(false);
  const [isActive, setIsActive] = useState(true);

  const enrollmentListData: BusStopEnrollmentItem[] = [
    {
      id: 1,
      busRouteNo: "RUT001",
      studentName: "Pankaj Pandey",
      courses: "MCA",
      busStopName: "Gautam Nagar (09:45AM To 09:47AM)",
      status: "Active",
    },
    {
      id: 2,
      busRouteNo: "RUT002",
      studentName: "Ravi Shukla",
      courses: "BCA",
      busStopName: "Rachna Nagar (09:50AM To 09:53AM)",
      status: "Active",
    },
  ];

  const actionBodyTemplate = () => (
    <div className="flex justify-center gap-3">
      <button
        type="button"
        className="w-8 h-8 rounded bg-blue-600 text-white flex items-center justify-center hover:bg-blue-700 transition-colors shadow-sm"
      >
        ✎
      </button>
      <button
        type="button"
        className="w-8 h-8 rounded bg-red-600 text-white flex items-center justify-center hover:bg-red-700 transition-colors shadow-sm"
      >
        🗑
      </button>
    </div>
  );

  const statusBodyTemplate = (rowData: BusStopEnrollmentItem) => (
    <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-bold border border-green-200">
      {rowData.status}
    </span>
  );

  return (
    <PageLayout title="Bus Stop Enrollment">
      {!showForm ? (
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
            <div className="flex justify-between items-center mb-6 border-b pb-4">
              <h2 className="text-xl font-bold text-gray-800">
                Bus Stop Enrollment List
              </h2>
              <Button
                label="Add Bus Stop Enrollment"
                icon="pi pi-plus"
                onClick={() => setShowForm(true)}
              />
            </div>

            <DataTable
              value={enrollmentListData}
              paginator
              rows={10}
              className="p-datatable-sm"
             
            >
              <Column
                header="Sr No."
                body={(_, { rowIndex }) => rowIndex + 1}
                style={{ width: "70px" }}
              />
              <Column field="busRouteNo" header="Bus Route No." sortable />
              <Column field="studentName" header="Student Name" sortable />
              <Column field="courses" header="Courses" />
              <Column field="busStopName" header="Bus Stop Name" />
              <Column
                field="status"
                header="Status"
                body={statusBodyTemplate}
                align="center"
              />
              <Column
                header="Actions"
                body={actionBodyTemplate}
                align="center"
                style={{ width: "120px" }}
              />
            </DataTable>
          </div>
        </div>
      ) : (
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
            <div className="flex justify-between items-center mb-6 border-b pb-4">
              <h2 className="text-xl font-bold text-gray-800">
                Add Bus Stop Enrollment
              </h2>
              <Button
                label="Go Back"
                icon="pi pi-arrow-left"
                className="p-button-text p-button-secondary"
                onClick={() => setShowForm(false)}
              />
            </div>

            <div className="space-y-8">
              <div className="p-4 bg-gray-50 rounded-lg border border-gray-100 shadow-sm">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-semibold text-gray-700">
                      Select Enrollment Type*
                    </label>
                    <Dropdown
                      options={[]}
                      placeholder="Select"
                      className="w-full"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-semibold text-gray-700">
                      Select Course*
                    </label>
                    <Dropdown
                      options={[]}
                      placeholder="Select"
                      className="w-full"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-semibold text-gray-700">
                      Select Student Name *
                    </label>
                    <Dropdown
                      options={[]}
                      placeholder="Select"
                      className="w-full"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-semibold text-gray-700">
                      Select Bus Stop Route No.*
                    </label>
                    <Dropdown
                      options={[]}
                      placeholder="Select"
                      className="w-full"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-semibold text-gray-700">
                      Select Bus Stop Name*
                    </label>
                    <Dropdown
                      options={[]}
                      placeholder="Select"
                      className="w-full"
                    />
                  </div>  <div></div>

                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-semibold text-gray-700">
                      Status *
                    </label>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-sm text-gray-700 font-medium">
                        Active
                      </span>
                      <Checkbox
                        onChange={(e) => setIsActive(e.checked ?? false)}
                        checked={isActive}
                      />
                    </div>
                  </div>
                </div>

                <div className="flex justify-center gap-4 mt-8">
                  <Button
                    label="Add to List"
                    icon="pi pi-plus"
                    className="bg-blue-600 px-8"
                  />
                  <Button
                    label="Clear Form"
                    icon="pi pi-refresh"
                    severity="danger"
                    outlined
                    className="px-8"
                  />
                </div>
              </div>

              <div className="bg-white border rounded-lg shadow-sm overflow-hidden">
                <h4 className="p-4 font-bold text-gray-700 bg-gray-100 border-b">
                  Enrollment Items Preview
                </h4>
                <DataTable
                  value={enrollmentListData}
                  className="p-datatable-sm"
                >
                  <Column
                    header="Sr No."
                    body={(_, { rowIndex }) => rowIndex + 1}
                  />
                  <Column field="courses" header="Courses" />
                  <Column field="studentName" header="Student Name" />
                  <Column field="busStopName" header="Bus Stop Name" />
                  <Column field="busRouteNo" header="Bus Route No." />
                </DataTable>
              </div>
            </div>

            <div className="flex justify-center gap-4 mt-10 border-t pt-8">
              <Button
                label="Save Enrollment"
                icon="pi pi-save"
                className="px-10 shadow-md"
                onClick={() => setShowForm(false)}
              />
              <Button
                label="Cancel"
                icon="pi pi-times"
                severity="danger"
                outlined
                className="px-10"
                onClick={() => setShowForm(false)}
              />
            </div>
          </div>
        </div>
      )}
    </PageLayout>
  
  );
}
