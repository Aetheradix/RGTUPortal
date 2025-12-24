import { useState } from "react";
import { Button } from "primereact/button";
import { Dropdown } from "primereact/dropdown";
import { InputText } from "primereact/inputtext";
import { Calendar } from "primereact/calendar";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import PageLayout from "@/components/PageLayout";

export default function VehicleInsurance() {
  const [showList, setShowList] = useState(false);
  const [showAdd, setShowAdd] = useState(false);

  const [filters, setFilters] = useState({
    year: null,
    officeType: null,
    headOffice: null,
    district: null,
    insuranceType: null,
  });

  const [form, setForm] = useState({
    vehicleNumber: null,
    insuranceCompany: "",
    policyNumber: "",
    startDate: null as Date | null,
    endDate: null as Date | null,
    premiumAmount: "",
  });

  const years = [{ label: "2024-25", value: "2024-25" }];
  const officeTypes = [{ label: "Regional Office", value: "RO" }];
  const headOffices = [{ label: "Bhopal", value: "Bhopal" }];
  const districts = [{ label: "Indore", value: "Indore" }];
  const insuranceTypes = [{ label: "Comprehensive", value: "Comprehensive" }];
  const vehicles = [{ label: "MP04CB4473", value: "MP04CB4473" }];

  const list = [
    {
      id: 1,
      vehicleNo: "MP04CB4473",
      insuranceType: "Comprehensive",
      startDate: "01-04-2024",
      endDate: "31-03-2025",
      amount: 12000,
    },
  ];

  return (
    <PageLayout title="Vehicle Insurance Management">
      {!showAdd && (
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
            <div className="flex justify-between items-center mb-6 border-b pb-4">
              <h2 className="text-xl font-bold text-gray-800">
                Insurance Records
              </h2>
              <Button
                label="Add New Insurance"
                icon="pi pi-plus"
                onClick={() => {
                  setShowAdd(true);
                  setShowList(false);
                }}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Financial Year <span className="text-red-500">*</span>
                </label>
                <Dropdown
                  value={filters.year}
                  options={years}
                  placeholder="Select Year"
                  onChange={(e) => setFilters({ ...filters, year: e.value })}
                  className="w-full"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Office Type <span className="text-red-500">*</span>
                </label>
                <Dropdown
                  value={filters.officeType}
                  options={officeTypes}
                  placeholder="Select Office Type"
                  onChange={(e) =>
                    setFilters({ ...filters, officeType: e.value })
                  }
                  className="w-full"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Head Office <span className="text-red-500">*</span>
                </label>
                <Dropdown
                  value={filters.headOffice}
                  options={headOffices}
                  placeholder="Select Head Office"
                  onChange={(e) =>
                    setFilters({ ...filters, headOffice: e.value })
                  }
                  className="w-full"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  District <span className="text-red-500">*</span>
                </label>
                <Dropdown
                  value={filters.district}
                  options={districts}
                  placeholder="Select District"
                  onChange={(e) =>
                    setFilters({ ...filters, district: e.value })
                  }
                  className="w-full"
                />
              </div>

              <div className="md:col-span-2 lg:col-span-1">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Insurance Type <span className="text-red-500">*</span>
                </label>
                <Dropdown
                  value={filters.insuranceType}
                  options={insuranceTypes}
                  placeholder="Select Insurance Type"
                  onChange={(e) =>
                    setFilters({ ...filters, insuranceType: e.value })
                  }
                  className="w-full"
                />
              </div>
            </div>

            <div className="flex justify-end gap-3 mt-8 border-t pt-6">
              <Button
                type="button"
                label="Cancel"
                icon="pi pi-times"
                className="p-button-secondary"
              />
              <Button
                label="Search"
                icon="pi pi-search"
                className="px-6"
                onClick={() => setShowList(true)}
              />
            </div>
          </div>

          {showList && (
            <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
              <DataTable
                value={list}
                paginator
                rows={10}
                className="p-datatable-sm"
              >
                <Column field="id" header="Sr No" style={{ width: "70px" }} sortable/>
                <Column field="vehicleNo" header="Vehicle Number" sortable />
                <Column field="insuranceType" header="Insurance Type" sortable/>
                <Column field="startDate" header="Start Date" sortable/>
                <Column field="endDate" header="End Date" sortable/>
                <Column field="amount" header="Premium Amount" sortable/>
              </DataTable>
            </div>
          )}
        </div>
      )}

      {showAdd && (
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
            <div className="flex justify-between items-center mb-6 border-b pb-4">
              <h2 className="text-xl font-bold text-blue-700">
                New Insurance Registration
              </h2>
              <Button
                label="Go Back"
                icon="pi pi-arrow-left"
                className="p-button-text p-button-secondary"
                onClick={() => setShowAdd(false)}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Vehicle Number <span className="text-red-500">*</span>
                </label>
                <Dropdown
                  value={form.vehicleNumber}
                  options={vehicles}
                  placeholder="Select Vehicle"
                  onChange={(e) => setForm({ ...form, vehicleNumber: e.value })}
                  className="w-full"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Insurance Company <span className="text-red-500">*</span>
                </label>
                <InputText
                  placeholder="e.g. LIC, HDFC Ergo"
                  value={form.insuranceCompany}
                  onChange={(e) =>
                    setForm({ ...form, insuranceCompany: e.target.value })
                  }
                  className="w-full"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Policy Number <span className="text-red-500">*</span>
                </label>
                <InputText
                  placeholder="Enter Policy No."
                  value={form.policyNumber}
                  onChange={(e) =>
                    setForm({ ...form, policyNumber: e.target.value })
                  }
                  className="w-full"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Start Date <span className="text-red-500">*</span>
                </label>
                <Calendar
                  placeholder="dd/mm/yyyy"
                  value={form.startDate}
                  showIcon
                  onChange={(e) =>
                    setForm({ ...form, startDate: e.value as Date })
                  }
                  className="w-full"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  End Date <span className="text-red-500">*</span>
                </label>
                <Calendar
                  placeholder="dd/mm/yyyy"
                  value={form.endDate}
                  showIcon
                  onChange={(e) =>
                    setForm({ ...form, endDate: e.value as Date })
                  }
                  className="w-full"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Premium Amount <span className="text-red-500">*</span>
                </label>
                <InputText
                  placeholder="0.00"
                  value={form.premiumAmount}
                  onChange={(e) =>
                    setForm({ ...form, premiumAmount: e.target.value })
                  }
                  className="w-full"
                />
              </div>
            </div>

            <div className="flex justify-end gap-3 mt-8 border-t pt-6">
              <Button
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
                label="Save Insurance"
                icon="pi pi-save"
                className="p-button-primary px-6"
              />
            </div>
          </div>
        </div>
      )}
    </PageLayout>
  );
}
