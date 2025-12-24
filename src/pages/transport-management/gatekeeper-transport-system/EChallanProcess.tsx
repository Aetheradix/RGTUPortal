import { useState } from "react";
import PageLayout from "../../../components/PageLayout";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { Dropdown } from "primereact/dropdown";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Calendar } from "primereact/calendar";

export default function EChallanProcess() {
  const [showForm, setShowForm] = useState(false);
  const [showList, setShowList] = useState(false);
  const [vehicleNo, setVehicleNo] = useState(null);
  const [type, setType] = useState(null);

  const vehicleOptions = [
    { label: "MP04AB1123", value: "MP04AB1123" },
    { label: "MP07XY4567", value: "MP07XY4567" },
    { label: "MP09CD7890", value: "MP09CD7890" },
  ];

  const typeOptions = [
    { label: "In", value: "IN" },
    { label: "Out", value: "OUT" },
  ];

  const list = [
    {
      id: 1,
      vehicleNo: "MP04AB1123",
      challanNo: "CH12345",
      routeCode: "RTU001",
      driverName: "Ravi Kumar",
      mobileNo: "9876543210",
      licenceNo: "AB1234567",
      inTime: "08:30 AM",
      outTime: "-",
    },
  ];

  return (
    <PageLayout title="E-Challan Process">
      <div className="space-y-6">
        {!showForm ? (
          <>
            <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
              <div className="flex justify-between items-center mb-6 border-b pb-4">
                <h2 className="text-xl font-bold text-gray-800">
                  E-Challan Process
                </h2>
                <Button
                  label="Add E-Challan Process"
                  icon="pi pi-plus"
                  onClick={() => setShowForm(true)}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-semibold text-gray-700">
                    Select Vehicle No <span className="text-red-500">*</span>
                  </label>
                  <Dropdown
                    value={vehicleNo}
                    options={vehicleOptions}
                    onChange={(e) => setVehicleNo(e.value)}
                    placeholder="Select Vehicle"
                    className="w-full"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-sm font-semibold text-gray-700">
                    Select Type <span className="text-red-500">*</span>
                  </label>
                  <Dropdown
                    value={type}
                    options={typeOptions}
                    onChange={(e) => setType(e.value)}
                    placeholder="Select Type"
                    className="w-full"
                  />
                </div>

                <div className="flex items-end gap-3">
                  <Button
                    label="Search"
                    icon="pi pi-search"
                    className="bg-blue-700 px-6 shadow-md"
                    onClick={() => setShowList(true)}
                  />
                  <Button
                    label="Clear"
                    icon="pi pi-refresh"
                    severity="danger"
                    outlined
                    className="px-6"
                    onClick={() => {
                      setShowList(false);
                      setVehicleNo(null);
                      setType(null);
                    }}
                  />
                </div>
              </div>

              {showList && (
                <div className="animate-fadein">
                  <DataTable
                    value={list}
                    paginator
                    rows={10}
                    className="p-datatable-sm"
                  >
                    <Column
                      header="Sr No."
                      body={(_, o) => o.rowIndex + 1}
                      style={{ width: "90px" }} sortable
                    />
                    <Column field="vehicleNo" header="Vehicle No." sortable />
                    <Column field="challanNo" header="Challan No." sortable/>
                    <Column field="routeCode" header="Route Code" sortable/>
                    <Column field="driverName" header="Driver Name" sortable/>
                    <Column field="mobileNo" header="Mobile No." sortable/>
                    <Column field="licenceNo" header="Licence No." sortable/>
                    <Column field="inTime" header="In Time" />
                    <Column field="outTime" header="Out Time" />
                    <Column
                      header="Print"
                      align="center"
                      body={() => (
                        <Button
                          icon="pi pi-print"
                          className="p-button-text p-button-secondary hover:bg-gray-100"
                        />
                      )}
                    />
                  </DataTable>
                </div>
              )}
            </div>
          </>
        ) : (
          <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm animate-fadein">
            <div className="flex justify-between items-center mb-6 border-b pb-4">
              <h2 className="text-xl font-bold text-gray-800">
                Add E-Challan Process
              </h2>
              <Button
                label="Go Back"
                icon="pi pi-arrow-left"
                className="p-button-text p-button-secondary"
                onClick={() => setShowForm(false)}
              />
            </div>

            <div className="p-4 bg-gray-50 rounded-lg border border-gray-100 mb-8">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-semibold text-gray-700">
                    Select Vehicle No <span className="text-red-500">*</span>
                  </label>
                  <Dropdown
                    options={vehicleOptions}
                    placeholder="Select Vehicle"
                    className="w-full"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-sm font-semibold text-gray-700">
                    Select Route Code <span className="text-red-500">*</span>
                  </label>
                  <Dropdown placeholder="Select Route" className="w-full" />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-sm font-semibold text-gray-700">
                    Enter Challan No <span className="text-red-500">*</span>
                  </label>
                  <InputText placeholder="Challan Number" className="w-full" />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-sm font-semibold text-gray-700">
                    Enter Driver Name <span className="text-red-500">*</span>
                  </label>
                  <InputText placeholder="Driver Name" className="w-full" />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-sm font-semibold text-gray-700">
                    Enter Mobile No <span className="text-red-500">*</span>
                  </label>
                  <InputText placeholder="Mobile Number" className="w-full" />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-sm font-semibold text-gray-700">
                    Enter Licence No <span className="text-red-500">*</span>
                  </label>
                  <InputText placeholder="Licence Number" className="w-full" />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-sm font-semibold text-gray-700">
                    Enter In Time <span className="text-red-500">*</span>
                  </label>
                  <Calendar
                    timeOnly
                    showTime
                    hourFormat="12"
                    placeholder="00:00"
                    className="w-full"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-sm font-semibold text-gray-700">
                    Enter Out Time <span className="text-red-500">*</span>
                  </label>
                  <Calendar
                    timeOnly
                    showTime
                    hourFormat="12"
                    placeholder="00:00"
                    className="w-full"
                  />
                </div>
              </div>
            </div>

            <div className="flex justify-center gap-4 mt-6 border-t pt-8">
              <Button
                label="Save Details"
                icon="pi pi-check"
                className="bg-blue-700 px-10 shadow-md"
              />
              <Button
                label="Clear Form"
                icon="pi pi-refresh"
                severity="danger"
                outlined
                className="px-10"
              />
            </div>
          </div>
        )}
      </div>
    </PageLayout>
  );
}
