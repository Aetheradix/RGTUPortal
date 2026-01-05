import { useState } from "react";
import PageLayout from "../../../components/PageLayout";
import { Button } from "primereact/button";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Calendar } from "primereact/calendar";
import { Dropdown } from "primereact/dropdown";

type VehicleDetail = {
  id: number;
  vehicleNo: string;
  driverName: string;
  mobileNo: string;
  challanIn: string;
  inTime: string;
  challanOut: string;
  outTime: string;
};

export default function CheckVehicleDetails() {
  const [showList, setShowList] = useState(false);
  const [fromDate, setFromDate] = useState<Date | null>(null);
  const [toDate, setToDate] = useState<Date | null>(null);
  const [type, setType] = useState<string | null>(null);
  const [vehicleNo, setVehicleNo] = useState<string | null>(null);

  const typeOptions = [
    { label: "IN", value: "IN" },
    { label: "OUT", value: "OUT" },
  ];

  const vehicleOptions = [
    { label: "MP04AB1123", value: "MP04AB1123" },
    { label: "MP04AB7723", value: "MP04AB7723" },
    { label: "MP04XY1234", value: "MP04XY1234" },
  ];

  const data: VehicleDetail[] = [
    {
      id: 1,
      vehicleNo: "MP04AB1123",
      driverName: "Ravi Kumar",
      mobileNo: "9876543210",
      challanIn: "CH12345",
      inTime: "08:30 AM",
      challanOut: "CH12346",
      outTime: "10:30 AM",
    },
    {
      id: 2,
      vehicleNo: "MP04AB7723",
      driverName: "Amit Sharma",
      mobileNo: "9123456789",
      challanIn: "CH12347",
      inTime: "09:00 AM",
      challanOut: "CH12348",
      outTime: "11:00 AM",
    },
  ];

  return (
    <PageLayout title="Check Vehicle Details">
      <div className="space-y-6">
        <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
          <h2 className="text-xl font-bold text-gray-800 mb-6 border-b pb-4">
            Check Vehicle Details
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-gray-700">
                Select From Date <span className="text-red-500">*</span>
              </label>
              <Calendar
                value={fromDate}
                onChange={(e) => setFromDate(e.value as Date)}
                placeholder="dd/mm/yyyy"
                className="w-full"
                showIcon
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-gray-700">
                Select To Date <span className="text-red-500">*</span>
              </label>
              <Calendar
                value={toDate}
                onChange={(e) => setToDate(e.value as Date)}
                placeholder="dd/mm/yyyy"
                className="w-full"
                showIcon
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
          </div>

          <div className="flex justify-center gap-4">
            <Button
              label="Search Details"
              icon="pi pi-search"
              className="bg-blue-700 px-8 shadow-md"
              onClick={() => setShowList(true)}
            />
            <Button
              label="Clear Filters"
              icon="pi pi-refresh"
              severity="danger"
              outlined
              className="px-8"
              onClick={() => {
                setShowList(false);
                setFromDate(null);
                setToDate(null);
                setType(null);
                setVehicleNo(null);
              }}
            />
          </div>
        </div>

        {showList && (
          <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm animate-fadein">
            <div className="flex justify-between items-center mb-6 border-b pb-4">
              <h3 className="text-lg font-bold text-gray-800 uppercase">
                Check Vehicle Details List
              </h3>
            </div>

            <DataTable
              value={data}
              paginator
              rows={10}
              className="p-datatable-sm"
            >
              <Column
                header="Sr No." 
                body={(_, { rowIndex }) => rowIndex + 1}
                style={{ width: "70px" }}
              />
              <Column field="vehicleNo" header="Vehicle No." sortable />
              <Column field="driverName" header="Driver Name" sortable />
              <Column field="mobileNo" header="Mobile No." />
              <Column field="challanIn" header="Challan (In)" sortable/>
              <Column field="inTime" header="In Time" />
              <Column field="challanOut" header="Challan (Out)" />
              <Column field="outTime" header="Out Time" />
            </DataTable>
          </div>
        )}
      </div>
    </PageLayout>
  );
}
