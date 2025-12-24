import PageLayout from "@/components/PageLayout";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { Dropdown } from "primereact/dropdown";
import { Calendar } from "primereact/calendar";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { InputTextarea } from "primereact/inputtextarea";
import { useState } from "react";

interface Option {
  label: string;
  value: string;
}

interface MaintenanceItem {
  id: number;
  maintenanceType: string;
  vehicleNumber: string;
  allotmentDate: string;
  reason: string;
  status: string;
}

export default function VehicleMaintenanceRequest() {
  const [showForm, setShowForm] = useState(false);
  const [showVehicleDetails, setShowVehicleDetails] = useState(false);

  const [maintenanceList] = useState<MaintenanceItem[]>([
    {
      id: 1,
      maintenanceType: "Tyre Tube",
      vehicleNumber: "MP04AP1123",
      allotmentDate: "12/04/2024",
      reason: "Tyre Tube Replacement",
      status: "Pending",
    },
    {
      id: 2,
      maintenanceType: "Servicing",
      vehicleNumber: "MP04CX2255",
      allotmentDate: "10/03/24",
      reason: "Head Block Work",
      status: "Approve",
    },
  ]);

  const vehicleOptions: Option[] = [
    { label: "MP04AP1123", value: "MP04AP1123" },
    { label: "MP04CX2255", value: "MP04CX2255" },
  ];

  const maintenanceTypeOptions: Option[] = [
    { label: "Tyre Tube", value: "Tyre Tube" },
    { label: "Servicing", value: "Servicing" },
    { label: "Oil Change", value: "Oil Change" },
  ];

  const handleSearch = () => {
    setShowVehicleDetails(true);
  };

  const handleSubmit = () => {
    setShowForm(false);
    setShowVehicleDetails(false);
  };

  const documentViewBody = () => {
    return (
      <Button
        icon="pi pi-eye"
        className="p-button-text p-button-rounded p-button-info"
        tooltip="View Quotation"
      />
    );
  };

  const statusBodyTemplate = (rowData: MaintenanceItem) => {
    const isApproved = rowData.status === "Approve";
    return (
      <span
        className={`px-3 py-1 rounded-full text-xs font-bold ${
          isApproved
            ? "bg-green-100 text-green-700"
            : "bg-yellow-100 text-yellow-700"
        }`}
      >
        {rowData.status}
      </span>
    );
  };

  return (
    <PageLayout title="Maintenance Request Management">
      {!showForm && (
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
            <div className="flex justify-between items-center mb-6 border-b pb-4">
              <h3 className="text-xl font-bold text-gray-800">
                Maintenance History
              </h3>
              <Button
                label="New Maintenance Request"
                icon="pi pi-plus"
                onClick={() => setShowForm(true)}
                className="p-button-primary"
              />
            </div>

            <DataTable
              value={maintenanceList}
              paginator
              rows={10}
              className="p-datatable-sm"
            
            >
              <Column field="id" header="Sr.No." style={{ width: "70px" }} sortable/>
              <Column field="maintenanceType" header="Type" sortable />
              <Column field="vehicleNumber" header="Vehicle Number" sortable />
              <Column field="allotmentDate" header="Allotment Date" sortable/>
              <Column
                field="reason"
                header="Reason for Maintenance"
                className="max-w-xs truncate"
              />
              <Column
                header="Quotation"
                body={documentViewBody}
                style={{ textAlign: "center" }}
              />
              <Column
                field="status"
                header="Status"
                body={statusBodyTemplate}
              />
            </DataTable>
          </div>
        </div>
      )}

      {showForm && (
        <div className="space-y-6 pb-10">
          <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
            <div className="flex justify-between items-center mb-6 border-b pb-4">
              <h2 className="text-xl font-bold text-blue-700">
                Submit New Request
              </h2>
              <Button
                label="Go Back"
                icon="pi pi-arrow-left"
                className="p-button-text p-button-secondary"
                onClick={() => {
                  setShowForm(false);
                  setShowVehicleDetails(false);
                }}
              />
            </div>

            <div className="space-y-8">
          
              <div className="p-5 bg-gray-50 rounded-lg border border-gray-200">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-end">
                  <div className="md:col-span-2">
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Target Vehicle Number <span className="text-red-500">*</span>
                    </label>
                    <Dropdown
                      options={vehicleOptions}
                      placeholder="Select a registered vehicle"
                      className="w-full"
                    />
                  </div>
                  <div>
                    <Button
                      type="button"
                      label="Fetch Details"
                      icon="pi pi-search"
                      onClick={handleSearch}
                      className="w-full"
                    />
                  </div>
                </div>
              </div>

              {showVehicleDetails && (
                <div className="animate-fadein space-y-8">
              
                  <div className="p-5 bg-white rounded-lg border border-gray-200">
                    <h4 className="text-md font-bold mb-4 text-gray-700 border-l-4 border-blue-500 pl-3">
                      Vehicle & User Information
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                      <div>
                        <label className="block text-xs font-bold text-gray-500 uppercase mb-1">
                          Vehicle Type <span className="text-red-500">*</span>
                        </label>
                        <InputText
                          value="XUV"
                          className="w-full bg-gray-50 font-medium"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-gray-500 uppercase mb-1">
                          Chassis Number <span className="text-red-500">*</span>
                        </label>
                        <InputText
                          value="1HGC65648946585"
                          className="w-full bg-gray-50 font-medium"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-gray-500 uppercase mb-1">
                          Registration No. <span className="text-red-500">*</span>
                        </label>
                        <InputText
                          value="MP04-HA-1985"
                          className="w-full bg-gray-50 font-medium"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-gray-500 uppercase mb-1">
                          Allotment Date <span className="text-red-500">*</span>
                        </label>
                        <Calendar
                          value={new Date("2024-01-01")}
                          className="w-full"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-gray-500 uppercase mb-1">
                          Office Type <span className="text-red-500">*</span>
                        </label>
                        <InputText
                          value="JD"
                          className="w-full bg-gray-50"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-gray-500 uppercase mb-1">
                          Office Name <span className="text-red-500">*</span>
                        </label>
                        <InputText
                          value="Bhopal"
                          className="w-full bg-gray-50"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-gray-500 uppercase mb-1">
                          Employee (Code) <span className="text-red-500">*</span>
                        </label>
                        <InputText
                          value="E0561-Raj"
                          className="w-full bg-gray-50"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-gray-500 uppercase mb-1">
                          Designation <span className="text-red-500">*</span>
                        </label>
                        <InputText
                          value="Adhyapak"
                          className="w-full bg-gray-50"
                        />
                      </div>
                    </div>
                  </div>

           
                  <div className="p-5 bg-white rounded-lg border border-gray-200 shadow-sm">
                    <h4 className="text-md font-bold mb-4 text-gray-800 border-b pb-2">
                      Maintenance Requirements
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Maintenance Category <span className="text-red-500">*</span>
                        </label>
                        <Dropdown
                          options={maintenanceTypeOptions}
                          placeholder="Select Category"
                          className="w-full"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Detailed Reason <span className="text-red-500">*</span>
                        </label>
                        <InputTextarea
                          placeholder="Describe the issues or work required..."
                          className="w-full"
                          rows={1}
                          autoResize
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Upload Quotation (PDF/Image) <span className="text-red-500">*</span>
                        </label>
                        <div className="flex w-full">
                          <input
                            type="file"
                            className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 border border-gray-300 rounded-md p-1"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-end gap-3 mt-10 border-t pt-6">
                    <Button
                      type="button"
                      label="Clear Form"
                      icon="pi pi-times"
                      className="p-button-secondary"
                      onClick={() => setShowVehicleDetails(false)}
                    />
                    <Button
                      type="button"
                      label="Forward Request"
                      icon="pi pi-send"
                      className="p-button-primary px-8"
                      onClick={handleSubmit}
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </PageLayout>
  );
}
