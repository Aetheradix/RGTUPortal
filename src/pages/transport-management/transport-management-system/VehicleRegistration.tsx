import React, { useState } from "react";
import PageLayout from "../../../components/PageLayout";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { Dropdown } from "primereact/dropdown";
import { Calendar } from "primereact/calendar";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";

interface Option {
  label: string;
  value: string;
}

interface VehicleItem {
  id: number;
  vehicleNumber: string;
  company: string;
  model: string;
  registrationNo: string;
}

export default function VehicleRegistration() {
  const [showForm, setShowForm] = useState(false);
  const [vehicleList] = useState<VehicleItem[]>([
    {
      id: 1,
      vehicleNumber: "MH12AB1234",
      company: "Tata",
      model: "Nexon",
      registrationNo: "REG001",
    },
    {
      id: 2,
      vehicleNumber: "DL01CD5678",
      company: "Hyundai",
      model: "Creta",
      registrationNo: "REG002",
    },
    {
      id: 3,
      vehicleNumber: "GJ05EF9012",
      company: "Maruti",
      model: "Swift",
      registrationNo: "REG003",
    },
    {
      id: 4,
      vehicleNumber: "RJ14GH3456",
      company: "Mahindra",
      model: "XUV300",
      registrationNo: "REG004",
    },
  ]);

  const dd: Option[] = [];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowForm(false);
  };

  const actionBodyTemplate = () => {
    return (
      <div className="flex justify-center gap-3">
        <button
          type="button"
          className="w-8 h-8 rounded bg-blue-600 text-white flex items-center justify-center"
        >
          ✎
        </button>
        <button
          type="button"
          className="w-8 h-8 rounded bg-red-600 text-white flex items-center justify-center"
        >
          🗑
        </button>
      </div>
    );
  };

  return (
    <PageLayout title="Vehicle Registration Master">
      {!showForm && (
        <>
          <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
            <div className="flex justify-between items-center mb-4 border-b pb-4">
              <h3 className="text-lg font-semibold text-gray-700">
                Vehicle Records
              </h3>
              <Button
                label="Add New Vehicle"
                icon="pi pi-plus"
                className="p-button-primary"
                onClick={() => setShowForm(true)}
              />
            </div>

            <DataTable
              value={vehicleList}
              paginator
              rows={10}
              className="p-datatable-sm"
            
            >
              <Column field="vehicleNumber" header="Vehicle Number" sortable />
              <Column field="company" header="Company" sortable />
              <Column field="model" header="Model" sortable />
              <Column
                field="registrationNo"
                header="Registration No"
                sortable
              />
              <Column
                header="Actions"
                body={actionBodyTemplate}
                align="center"
                style={{ width: "120px" }}
              />
            </DataTable>
          </div>
        </>
      )}

      {showForm && (
        <div className="space-y-6">
          <form onSubmit={handleSubmit}>
            <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm mb-6">
              <div className="flex justify-between items-center mb-6 border-b pb-3">
                <h2 className="text-xl font-bold text-gray-800 tracking-tight text-blue-700">
                  Add Vehicle Registration
                </h2>
                <Button
                  label="Back to List"
                  icon="pi pi-arrow-left"
                  className="p-button-text p-button-secondary"
                  onClick={() => setShowForm(false)}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Transport Use *
                  </label>
                  <Dropdown
                    options={dd}
                    className="w-full"
                    placeholder="Select Use"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Transport Ownership *
                  </label>
                  <Dropdown
                    options={dd}
                    className="w-full"
                    placeholder="Select Ownership"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Vehicle Number *
                  </label>
                  <InputText className="w-full" placeholder="e.g. MH12AB1234" />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Vehicle Company Name *
                  </label>
                  <InputText className="w-full" placeholder="e.g. Tata" />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Vehicle Model Name *
                  </label>
                  <InputText className="w-full" placeholder="e.g. Nexon" />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Select Fuel Type *
                  </label>
                  <Dropdown
                    options={dd}
                    className="w-full"
                    placeholder="Select Fuel"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Year Of Manufacture *
                  </label>
                  <Dropdown
                    options={dd}
                    className="w-full"
                    placeholder="Select Year"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Select Motor Vehicle *
                  </label>
                  <Dropdown
                    options={dd}
                    className="w-full"
                    placeholder="Select Type"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Type Of Body *
                  </label>
                  <Dropdown
                    options={dd}
                    className="w-full"
                    placeholder="Select Body"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Vehicle Color *
                  </label>
                  <InputText className="w-full" placeholder="Enter Color" />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Chassis Number *
                  </label>
                  <InputText
                    className="w-full"
                    placeholder="Enter Chassis Number"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Seating Capacity *
                  </label>
                  <InputText className="w-full" placeholder="e.g. 5" />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Engine Number *
                  </label>
                  <InputText
                    className="w-full"
                    placeholder="Enter Engine Number"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Weight (Unladen) KG *
                  </label>
                  <InputText className="w-full" placeholder="e.g. 1200" />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Cubic Capacity *
                  </label>
                  <InputText className="w-full" placeholder="Enter CC" />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Horse Power (BHP/KW) *
                  </label>
                  <InputText className="w-full" placeholder="Enter HP" />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Wheel Base (mm) *
                  </label>
                  <InputText
                    className="w-full"
                    placeholder="Enter Wheel Base"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Registration No *
                  </label>
                  <InputText
                    className="w-full"
                    placeholder="Enter Registration No"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Registration Date *
                  </label>
                  <Calendar
                    className="w-full"
                    showIcon
                    placeholder="Select Date"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Registration Validity *
                  </label>
                  <Calendar
                    className="w-full"
                    showIcon
                    placeholder="Select Validity"
                  />
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm mb-6">
              <h2 className="text-lg font-bold text-gray-800 mb-6 border-b pb-2 text-blue-700">
                Insurance Details
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Insurance Company *
                  </label>
                  <InputText
                    className="w-full"
                    placeholder="Enter Company Name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Insurance Number *
                  </label>
                  <InputText
                    className="w-full"
                    placeholder="Enter Policy Number"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Start Date *
                  </label>
                  <Calendar
                    className="w-full"
                    showIcon
                    placeholder="Select Start Date"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    End Date *
                  </label>
                  <Calendar
                    className="w-full"
                    showIcon
                    placeholder="Select End Date"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Insurance Amount (Rs) *
                  </label>
                  <InputText className="w-full" placeholder="e.g. 15000" />
                </div>
              </div>
            </div>

            <div className="flex justify-end gap-3 bg-gray-50 p-4 rounded-lg border border-gray-200">
              <Button
                type="button"
                label="Reset"
                icon="pi pi-refresh"
                className="p-button-outlined p-button-secondary px-4"
              />
              <Button
                type="button"
                label="Cancel"
                icon="pi pi-times"
                className="p-button-secondary"
              />
              <Button
                type="submit"
                label="Save Registration"
                icon="pi pi-save"
                className="p-button-primary px-6"
              />
            </div>
          </form>
        </div>
      )}
    </PageLayout>
  );
}