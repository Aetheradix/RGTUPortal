import { useState } from "react";
import { Button } from "primereact/button";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Dropdown } from "primereact/dropdown";
import { InputText } from "primereact/inputtext";
import { Calendar } from "primereact/calendar";
import PageLayout from "@/components/PageLayout";

interface LeaveEntryItem {
  id: number;
  authorizedDriver: string;
  registrationType: string;
  vehicleNo: string;
  leaveFromDate: string;
  leaveToDate: string;
  driverName: string;
  status: string;
}

export default function DriverAttenderLeaveEntry() {
  const [showForm, setShowForm] = useState(false);

  const registrationTypes = [
    { label: "Driver", value: "Driver" },
    { label: "Attender", value: "Attender" },
  ];

  const authorizedOptions = [
    { label: "Registered", value: "Registered" },
    { label: "UnRegistered", value: "UnRegistered" },
  ];

  const leaveListData: LeaveEntryItem[] = [
    {
      id: 1,
      authorizedDriver: "Registered",
      registrationType: "Attender",
      vehicleNo: "MP04AB1196",
      leaveFromDate: "25/07/2024",
      leaveToDate: "28/07/2024",
      driverName: "Rakesh",
      status: "Active",
    },
    {
      id: 2,
      authorizedDriver: "Registered",
      registrationType: "Driver",
      vehicleNo: "MP04CD5154",
      leaveFromDate: "28/07/2024",
      leaveToDate: "05/08/2024",
      driverName: "Rajesh",
      status: "Active",
    },
  ];

  const actionBodyTemplate = () => (
    <div className="flex justify-center gap-3">
      <button
        type="button"
        className="w-8 h-8 rounded bg-blue-600 text-white flex items-center justify-center hover:bg-blue-700 transition-colors"
      >
        ✎
      </button>
      <button
        type="button"
        className="w-8 h-8 rounded bg-red-600 text-white flex items-center justify-center hover:bg-red-700 transition-colors"
      >
        🗑
      </button>
    </div>
  );

  const statusBodyTemplate = (rowData: LeaveEntryItem) => (
    <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-bold border border-green-200">
      {rowData.status}
    </span>
  );

  return (
    <PageLayout title="Driver Attender Leave Entry">
      {!showForm ? (
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
            <div className="flex justify-between items-center mb-6 border-b pb-4">
              <h2 className="text-xl font-bold text-gray-800">
                Driver Attender Leave Entry List
              </h2>
              <Button
                label="Add Driver Attender Leave Entry"
                icon="pi pi-plus"
                onClick={() => setShowForm(true)}
              />
            </div>
            <DataTable
              value={leaveListData}
              paginator
              rows={10}
              className="p-datatable-sm"
            >
              <Column
                header="Sr No."
                body={(_, { rowIndex }) => rowIndex + 1}
                style={{ width: "90px" }} sortable
              />
              <Column field="authorizedDriver" header="Auth. Type" sortable />
              <Column field="registrationType" header="Reg. Type" sortable />
              <Column field="vehicleNo" header="Vehicle No." sortable />
              <Column field="leaveFromDate" header="From Date" sortable/>
              <Column field="leaveToDate" header="To Date" sortable/>
              <Column field="driverName" header="Driver/Attender Name" sortable/>
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
                Add Driver Attender Leave Entry
              </h2>
              <Button
                label="Go Back"
                icon="pi pi-arrow-left"
                className="p-button-text p-button-secondary"
                onClick={() => setShowForm(false)}
              />
            </div>

            <div className="space-y-8">
              <div className="p-4 bg-gray-50 rounded-lg border border-gray-100">
                <h4 className="text-md font-bold mb-4 text-gray-700 border-l-4 border-blue-500 pl-3">
                  Leave Details 
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-semibold text-gray-700">
                      Select Registration Type <span className="text-red-500">*</span>
                    </label>
                    <Dropdown
                      options={registrationTypes}
                      placeholder="Select"
                      className="w-full"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-semibold text-gray-700">
                      Select Name <span className="text-red-500">*</span>
                    </label>
                    <Dropdown
                      options={[]}
                      placeholder="Select"
                      className="w-full"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-semibold text-gray-700">
                      Enter Vehicle Number <span className="text-red-500">*</span>
                    </label>
                    <InputText placeholder="MP04AB1234" className="w-full" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-semibold text-gray-700">
                      Enter Route No <span className="text-red-500">*</span>
                    </label>
                    <InputText placeholder="RUT001" className="w-full" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-semibold text-gray-700">
                      Leave From Date <span className="text-red-500">*</span>
                    </label>
                    <Calendar
                      placeholder="dd/mm/yyyy"
                      className="w-full"
                      showIcon
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-semibold text-gray-700">
                      Leave To Date <span className="text-red-500">*</span>
                    </label>
                    <Calendar
                      placeholder="dd/mm/yyyy"
                      className="w-full"
                      showIcon
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-semibold text-gray-700">
                      Leave Reason <span className="text-red-500">*</span>
                    </label>
                    <InputText placeholder="Enter Reason" className="w-full" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-semibold text-gray-700">
                      Document Upload <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="file"
                      className="w-full text-sm border p-[5px] rounded bg-white"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="p-4 bg-gray-50 rounded-lg border border-gray-100">
                  <h4 className="text-sm font-bold mb-4 text-gray-600 border-b pb-2 uppercase">
                    Mapping (New Registered)
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-2">
                      <label className="text-sm font-semibold text-gray-700">
                        Auth. Driver/Attender <span className="text-red-500">*</span>
                      </label>
                      <Dropdown
                        options={authorizedOptions}
                        placeholder="Select"
                        className="w-full"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-sm font-semibold text-gray-700">
                        Select Driver/Attender <span className="text-red-500">*</span>
                      </label>
                      <Dropdown
                        options={[]}
                        placeholder="Select"
                        className="w-full"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-sm font-semibold text-gray-700">
                        App. From Date <span className="text-red-500">*</span>
                      </label>
                      <Calendar placeholder="dd/mm/yyyy" className="w-full" />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-sm font-semibold text-gray-700">
                        App. To Date <span className="text-red-500">*</span>
                      </label>
                      <Calendar placeholder="dd/mm/yyyy" className="w-full" />
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-gray-50 rounded-lg border border-gray-100">
                  <h4 className="text-sm font-bold mb-4 text-gray-600 border-b pb-2 uppercase">
                    Mapping (New UnRegistered)
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-2">
                      <label className="text-sm font-semibold text-gray-700">
                        Auth. Driver/Attender <span className="text-red-500">*</span>
                      </label>
                      <Dropdown
                        options={authorizedOptions}
                        placeholder="Select"
                        className="w-full"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-sm font-semibold text-gray-700">
                        Enter Name <span className="text-red-500">*</span>
                      </label>
                      <InputText placeholder="Enter Name" className="w-full" />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-sm font-semibold text-gray-700">
                        Licence Number <span className="text-red-500">*</span>
                      </label>
                      <InputText
                        placeholder="Enter Licence"
                        className="w-full"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-sm font-semibold text-gray-700">
                        Upload Photo <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="file"
                        className="w-full text-xs border p-1 rounded bg-white"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-center gap-4 mt-10 border-t pt-6">
              <Button
                label="Save Entry"
                icon="pi pi-check"
                className="px-10"
                onClick={() => setShowForm(false)}
              />
              <Button
                label="Clear"
                severity="danger"
                icon="pi pi-refresh"
                outlined
                className="px-10"
              />
            </div>
          </div>
        </div>
      )}
    </PageLayout>
  );
}
