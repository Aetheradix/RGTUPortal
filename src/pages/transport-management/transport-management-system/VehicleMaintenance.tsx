import { useState } from "react";
import { Button } from "primereact/button";
import { Dropdown } from "primereact/dropdown";
import { InputText } from "primereact/inputtext";
import { Calendar } from "primereact/calendar";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import PageLayout from "../../../components/PageLayout";

export default function VehicleMaintenance() {
  const [showList, setShowList] = useState(false);
  const [showAdd, setShowAdd] = useState(false);

  const [filters, setFilters] = useState({
    year: null,
    district: null,
    officeType: null,
    officeName: null,
    maintenanceType: null,
  });

  const [form, setForm] = useState({
    vehicleNumber: null,
    bodyType: "",
    previousReading: "",
    previousBillDate: "",
    previousBillAmount: "",
    currentReading: "",
    differenceReading: "",
    billNumber: "",
    billDate: null as Date | null,
    billAmount: "",
    expensesDetails: "",
  });

  const years = [{ label: "2024", value: 2024 }];
  const districts = [{ label: "Anuppur", value: "Anuppur" }];
  const officeTypes = [{ label: "Regulatory Body", value: "Regulatory Body" }];
  const officeNames = [{ label: "RGPV", value: "RGPV" }];
  const maintenanceTypes = [{ label: "Servicing", value: "Servicing" }];
  const vehicles = [{ label: "MP04CB4473", value: "MP04CB4473" }];

  const list = [
    {
      id: 1,
      year: 2024,
      vehicleNumber: "MP04CB4473",
      maintenanceType: "Servicing",
      previousReading: 20000,
      currentReading: 35000,
      difference: 15000,
      billAmount: 5000,
      details: "General Service",
    },
  ];

  return (
    <PageLayout title="Vehicle Maintenance Master">
      {!showAdd && (
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
            <div className="flex justify-between items-center mb-6 border-b pb-4">
              <h2 className="text-xl font-bold text-gray-800">
                Maintenance Records
              </h2>
              <Button
                label="Add Maintenance"
                icon="pi pi-plus"
                onClick={() => {
                  setShowAdd(true);
                  setShowList(false);
                }}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Year *
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
                  District *
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

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Office Type *
                </label>
                <Dropdown
                  value={filters.officeType}
                  options={officeTypes}
                  placeholder="Select Type"
                  onChange={(e) =>
                    setFilters({ ...filters, officeType: e.value })
                  }
                  className="w-full"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Office Name *
                </label>
                <Dropdown
                  value={filters.officeName}
                  options={officeNames}
                  placeholder="Select Office"
                  onChange={(e) =>
                    setFilters({ ...filters, officeName: e.value })
                  }
                  className="w-full"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Maintenance Type *
                </label>
                <Dropdown
                  value={filters.maintenanceType}
                  options={maintenanceTypes}
                  placeholder="Select Type"
                  onChange={(e) =>
                    setFilters({ ...filters, maintenanceType: e.value })
                  }
                  className="w-full"
                />
              </div>
            </div>

            <div className="flex justify-end gap-3 border-t pt-4">
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
                <Column field="id" header="Sr No" style={{ width: "70px" }} />
                <Column field="year" header="Year" />
                <Column
                  field="vehicleNumber"
                  header="Vehicle Number"
                  sortable
                />
                <Column field="maintenanceType" header="Type" />
                <Column field="previousReading" header="Prev Km" />
                <Column field="currentReading" header="Curr Km" />
                <Column field="difference" header="Diff" />
                <Column field="billAmount" header="Amount" />
                <Column field="details" header="Details" />
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
                Add Vehicle Maintenance
              </h2>
              <Button
                label="Go Back"
                icon="pi pi-arrow-left"
                className="p-button-text p-button-secondary"
                onClick={() => setShowAdd(false)}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Vehicle Number *
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
                  Type Of Body *
                </label>
                <InputText
                  value={form.bodyType}
                  placeholder="e.g. Sedan"
                  onChange={(e) =>
                    setForm({ ...form, bodyType: e.target.value })
                  }
                  className="w-full"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Previous Reading (Km) *
                </label>
                <InputText
                  value={form.previousReading}
                  placeholder="Enter reading"
                  onChange={(e) =>
                    setForm({ ...form, previousReading: e.target.value })
                  }
                  className="w-full"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Previous Bill Date *
                </label>
                <InputText
                  value={form.previousBillDate}
                  placeholder="DD/MM/YYYY"
                  onChange={(e) =>
                    setForm({ ...form, previousBillDate: e.target.value })
                  }
                  className="w-full"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Previous Bill Amount *
                </label>
                <InputText
                  value={form.previousBillAmount}
                  placeholder="0.00"
                  onChange={(e) =>
                    setForm({ ...form, previousBillAmount: e.target.value })
                  }
                  className="w-full"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Current Reading (Km) *
                </label>
                <InputText
                  value={form.currentReading}
                  placeholder="Enter reading"
                  onChange={(e) =>
                    setForm({ ...form, currentReading: e.target.value })
                  }
                  className="w-full"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Difference Reading (Km) *
                </label>
                <InputText
                  value={form.differenceReading}
                  placeholder="Auto calculated"
                  onChange={(e) =>
                    setForm({ ...form, differenceReading: e.target.value })
                  }
                  className="w-full"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Bill Number *
                </label>
                <InputText
                  value={form.billNumber}
                  placeholder="Enter bill no."
                  onChange={(e) =>
                    setForm({ ...form, billNumber: e.target.value })
                  }
                  className="w-full"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Bill Date *
                </label>
                <Calendar
                  value={form.billDate}
                  placeholder="Select Date"
                  onChange={(e) =>
                    setForm({ ...form, billDate: e.value as Date })
                  }
                  className="w-full"
                  showIcon
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Bill Amount *
                </label>
                <InputText
                  value={form.billAmount}
                  placeholder="0.00"
                  onChange={(e) =>
                    setForm({ ...form, billAmount: e.target.value })
                  }
                  className="w-full"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Upload Quotation *
                </label>
                <input
                  type="file"
                  className="w-full p-2 border border-gray-300 rounded text-sm bg-gray-50"
                />
              </div>

              <div className="lg:col-span-2">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Vehicle Expenses Details *
                </label>
                <InputText
                  value={form.expensesDetails}
                  placeholder="Describe the maintenance work done..."
                  onChange={(e) =>
                    setForm({ ...form, expensesDetails: e.target.value })
                  }
                  className="w-full"
                />
              </div>
            </div> 

            <div className="flex justify-end gap-3 border-t pt-6"> 
              <Button
                type="button"
                label="Cancel"
                icon="pi pi-times"
                className="p-button-secondary"
              />
              <Button
                label="Save Maintenance"
                icon="pi pi-save"
                className="px-6"
              />
            </div>
          </div>
        </div>
      )}
    </PageLayout>
  );
}
