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
  ]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
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
    <PageLayout title="Vehicle Maintenance Type Master">
      <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm mb-8">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Maintenance Type Name <span className="text-red-500">*</span>
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
                Maintenance Type Category <span className="text-red-500">*</span>
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
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Category Criteria <span className="text-red-500">*</span>
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
              label="Reset"
              icon="pi pi-refresh"
              className="p-button-outlined p-button-secondary"
            />
            <Button
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
        >
          <Column
            field="id"
            header="Sr No."
            style={{ width: "90px" }}
            sortable
          />
          <Column
            field="maintananceTypeName"
            header="Maintenance Name"
            sortable
          />
          <Column field="maintananceTypeCategory" header="Category" sortable />
          <Column field="categoryCriteria" header="Criteria" sortable />
          <Column
            header="Actions"
            body={actionBodyTemplate}
            align="center"
            style={{ width: "120px" }}
          />
        </DataTable>
      </div>
    </PageLayout>
  );
}
