import React, { useState } from "react";
import PageLayout from "../../../components/PageLayout";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";

interface VehicaleMaintenanceType {
  id: number;
  maintananceTypeName: string;
  maintananceTypeCategory: string;
  categoryCriteria: string;
  isActive: boolean;
}

export default function VehicaleMaintenanceType() {
  const [formData, setFormData] = useState({
    maintananceTypeName: "",
    maintananceTypeCategory: "",
    categoryCriteria: "",
    isActive: false,
  });

  const [VehicaleMaintenanceTypes] = useState<VehicaleMaintenanceType[]>([
    {
      id: 1,
      maintananceTypeName: "Scheduled Maintenance",
      maintananceTypeCategory: "Engine Repair",
      categoryCriteria: "Engine oil change after every 5000 km",
      isActive: false,
    },
    {
      id: 2,
      maintananceTypeName: "Preventive Maintenance",
      maintananceTypeCategory: "Tire Replacement",
      categoryCriteria: "Replace tires after 40000 km",
      isActive: true,
    },
    {
      id: 3,
      maintananceTypeName: "Routine Maintenance",
      maintananceTypeCategory: "Oil Change",
      categoryCriteria: "Change engine oil after every 3000 km",
      isActive: false,
    },
    {
      id: 4,
      maintananceTypeName: "Emergency Maintenance",
      maintananceTypeCategory: "Battery Replacement",
      categoryCriteria: "Replace if voltage drops below 12V",
      isActive: true,
    },
  ]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <PageLayout title="Vehicle Maintenance Type Master">
      <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm mb-8">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Maintenance Type Name
              </label>
              <InputText
                value={formData.maintananceTypeName}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    maintananceTypeName: e.target.value,
                  })
                }
                className="w-full"
                placeholder="Enter Maintenance Type Name"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Maintenance Type Category
              </label>
              <InputText
                value={formData.maintananceTypeCategory}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    maintananceTypeCategory: e.target.value,
                  })
                }
                className="w-full"
                placeholder="Enter Category"
              />
            </div>

            <div className="md:col-span-2 lg:col-span-1">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Category Criteria
              </label>
              <InputText
                value={formData.categoryCriteria}
                onChange={(e) =>
                  setFormData({ ...formData, categoryCriteria: e.target.value })
                }
                className="w-full"
                placeholder="Enter Criteria Details"
              />
            </div>
          </div>

          <div className="flex justify-end gap-3 border-t pt-4">
            <Button
              type="button"
              label="Reset"
              icon="pi pi-refresh"
              className="p-button-outlined p-button-secondary px-4"
              onClick={() =>
                setFormData({
                  maintananceTypeName: "",
                  maintananceTypeCategory: "",
                  categoryCriteria: "",
                  isActive: false,
                })
              }
            />
            <Button
              type="button"
              label="Cancel"
              icon="pi pi-times"
              className="p-button-secondary"
            />
            <Button
              type="submit"
              label="Save"
              icon="pi pi-save"
              className="p-button-primary px-6"
            />
          </div>
        </form>
      </div>

      <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
        <DataTable
          value={VehicaleMaintenanceTypes}
          paginator
          rows={10}
          className="p-datatable-sm"
          tableStyle={{ minWidth: "50rem" }}
        >
          <Column field="id" header="ID" sortable style={{ width: "70px" }} />
          <Column
            field="maintananceTypeName"
            header="Maintenance Type Name"
            sortable
          />
          <Column field="maintananceTypeCategory" header="Category" sortable />
          <Column field="categoryCriteria" header="Criteria" />
          <Column
            field="isActive"
            header="Status"
            body={(row) => (
              <span
                className={`px-3 py-1 rounded-full text-xs font-semibold ${
                  row.isActive
                    ? "bg-green-100 text-green-700 border border-green-200"
                    : "bg-red-100 text-red-700 border border-red-200"
                }`}
              >
                {row.isActive ? "Active" : "Inactive"}
              </span>
            )}
          />
          <Column
            header="Actions"
            body={() => (
              <div className="flex gap-1">
                <Button
                  icon="pi pi-pencil"
                  className="p-button-rounded p-button-text p-button-sm text-blue-600"
                />
                <Button
                  icon="pi pi-trash"
                  className="p-button-rounded p-button-text p-button-danger p-button-sm"
                />
              </div>
            )}
          />
        </DataTable>
      </div>
    </PageLayout>
  );
}
