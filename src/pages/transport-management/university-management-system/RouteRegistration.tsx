import { useState } from "react";
import { Button } from "primereact/button";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { InputText } from "primereact/inputtext";
import { Dropdown } from "primereact/dropdown";
import { Calendar } from "primereact/calendar";
import PageLayout from "@/components/PageLayout";

type DisposeItem = {
  id: number;
  orderDate: string;
  vehicleNumber: string;
  model: string;
  chassis: string;
  orderNo: string;
  sellingAmount: number;
  buyingAmount: number;
  buyer: string;
};

export default function VehicleDispose() {
  const [showList, setShowList] = useState(false);
  const [showAdd, setShowAdd] = useState(false);

  const districts = [
    { label: "Bhopal", value: "Bhopal" },
    { label: "Indore", value: "Indore" },
  ];

  const vehicles = [{ label: "MP04CB4473", value: "MP04CB4473" }];

  const data: DisposeItem[] = [
    {
      id: 1,
      orderDate: "01/06/2024",
      vehicleNumber: "MP04CB4473",
      model: "2007",
      chassis: "MA3ECA12S02671501",
      orderNo: "444",
      sellingAmount: 25000,
      buyingAmount: 65000,
      buyer: "Raj",
    },
  ];

 
  const actionBodyTemplate = () => {
    return (
      <div className="flex justify-center gap-3">
        <button
          type="button"
          className="w-8 h-8 rounded bg-blue-600 text-white flex items-center justify-center hover:bg-blue-700 transition-colors"
          onClick={() => {}}
        >
          ✎
        </button>
        <button
          type="button"
          className="w-8 h-8 rounded bg-red-600 text-white flex items-center justify-center hover:bg-red-700 transition-colors"
          onClick={() => {}}
        >
          🗑
        </button>
      </div>
    );
  };

  return (
    <PageLayout title="Vehicle Disposal Management">
      {!showAdd && (
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
            <div className="flex justify-between items-center mb-6 border-b pb-4">
              <h2 className="text-xl font-bold text-gray-800">
                Disposal Records
              </h2>
              <Button
                label="Add Disposal Entry"
                icon="pi pi-plus"
                onClick={() => {
                  setShowAdd(true);
                  setShowList(false);
                }}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  From Date <span className="text-red-500">*</span>
                </label>
                <Calendar
                  placeholder="dd/mm/yyyy"
                  className="w-full"
                  showIcon
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  To Date <span className="text-red-500">*</span>
                </label>
                <Calendar
                  placeholder="dd/mm/yyyy"
                  className="w-full"
                  showIcon
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Select District <span className="text-red-500">*</span>
                </label>
                <Dropdown
                  options={districts}
                  placeholder="Select District"
                  className="w-full"
                />
              </div>
            </div>

            <div className="flex justify-end gap-3 mt-8 border-t pt-6">
              <Button
                label="Clear Filters"
                icon="pi pi-times"
                className="p-button-secondary"
                onClick={() => setShowList(false)}
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
                value={data}
                paginator
                rows={10}
                className="p-datatable-sm"
               
              >
                <Column field="id" header="Sr No." style={{ width: "70px" }} sortable/>
                <Column field="orderDate" header="Order Date" sortable/>
                <Column
                  field="vehicleNumber"
                  header="Vehicle Number"
                  sortable
                />
                <Column field="model" header="Model" sortable/>
                <Column field="chassis" header="Chassis No." sortable/>
                <Column field="orderNo" header="Order No." sortable/>
                <Column field="sellingAmount" header="Selling (₹)" sortable/>
                <Column field="buyingAmount" header="Buying (₹)" sortable/>
                <Column field="buyer" header="Buyer" />
                <Column
                  header="Actions"
                  body={actionBodyTemplate}
                  align="center"
                  style={{ width: "120px" }}
                />
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
                Vehicle Disposal Entry
              </h2>
              <Button
                label="Go Back"
                icon="pi pi-arrow-left"
                className="p-button-text p-button-secondary"
                onClick={() => setShowAdd(false)}
              />
            </div>

            <div className="space-y-8">
              <div className="p-4 bg-gray-50 rounded-lg border border-gray-100">
                <h4 className="text-md font-bold mb-4 text-gray-700 border-l-4 border-blue-500 pl-3">
                  Vehicle Specifications
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Vehicle Number <span className="text-red-500">*</span>
                    </label>
                    <Dropdown
                      options={vehicles}
                      placeholder="Select Vehicle"
                      className="w-full"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Vehicle Model <span className="text-red-500">*</span>
                    </label>
                    <InputText
                      placeholder="e.g. 2015 Edition"
                      className="w-full"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Chassis Number <span className="text-red-500">*</span>
                    </label>
                    <InputText
                      placeholder="Enter Chassis No."
                      className="w-full"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Registration Number <span className="text-red-500">*</span>
                    </label>
                    <InputText placeholder="Enter Reg No." className="w-full" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Vehicle Company <span className="text-red-500">*</span>
                    </label>
                    <InputText placeholder="e.g. Mahindra" className="w-full" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Year of Manufacture <span className="text-red-500">*</span>
                    </label>
                    <InputText placeholder="YYYY" className="w-full" />
                  </div>
                </div>
              </div>

              <div className="p-4 bg-gray-50 rounded-lg border border-gray-100">
                <h4 className="text-md font-bold mb-4 text-gray-700 border-l-4 border-blue-500 pl-3">
                  Disposal Order Details
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Order Number <span className="text-red-500">*</span>
                    </label>
                    <InputText
                      placeholder="Enter Order No."
                      className="w-full"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Order Date <span className="text-red-500">*</span>
                    </label>
                    <Calendar
                      placeholder="dd/mm/yyyy"
                      className="w-full"
                      showIcon
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Current Reading (Km) <span className="text-red-500">*</span>
                    </label>
                    <InputText placeholder="0" className="w-full" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Base Selling Price <span className="text-red-500">*</span>
                    </label>
                    <InputText placeholder="₹ 0.00" className="w-full" />
                  </div>
                </div>
              </div>

              <div className="p-4 bg-gray-50 rounded-lg border border-gray-100">
                <h4 className="text-md font-bold mb-4 text-gray-700 border-l-4 border-blue-500 pl-3">
                  Buyer Information
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Final Buying Amount <span className="text-red-500">*</span>
                    </label>
                    <InputText placeholder="₹ 0.00" className="w-full" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Full Name of Buyer <span className="text-red-500">*</span>
                    </label>
                    <InputText
                      placeholder="Enter Buyer Name"
                      className="w-full"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-end gap-3 mt-10 border-t pt-6">
              <Button
                label="Clear Form"
                icon="pi pi-times"
                className="p-button-secondary"
              />
              <Button
                label="Submit Disposal"
                icon="pi pi-check"
                className="p-button-primary px-6"
              />
            </div>
          </div>
        </div>
      )}
    </PageLayout>
  );
}