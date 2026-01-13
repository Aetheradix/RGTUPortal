import { useState } from "react";
import PageLayout from "../../../components/PageLayout";
import { Button } from "primereact/button";
import { Calendar } from "primereact/calendar";
import { Dropdown } from "primereact/dropdown";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";

export default function RouteWisePickupDrop() {
  const [date, setDate] = useState<Date | null>(null);
  const [routeNo, setRouteNo] = useState<unknown>(null);
  const [type, setType] = useState<unknown>(null);
  const [showList, setShowList] = useState(false);

  const routeOptions = [
    { label: "RTU001", value: "RTU001" },
    { label: "RTU002", value: "RTU002" },
    { label: "RTU003", value: "RTU003" },
    { label: "RTU004", value: "RTU004" },
    { label: "RTU005", value: "RTU005" },
  ];

  const typeOptions = [
    { label: "Pickup", value: "Pickup" },
    { label: "Drop", value: "Drop" },
  ];

  const tableData = [
    {
      id: 1,
      routeNo: "RTU001",
      busStop: "Academic Block",
      className: "B.Tech - CSE",
      studentName: "Ravi Sharma",
      remark: "Present",
    },
    {
      id: 2,
      routeNo: "RTU002",
      busStop: "Library",
      className: "B.Tech - ECE",
      studentName: "Priya Verma",
      remark: "On Leave",
    },
  ];

  const actionTemplate = () => (
    <div className="flex gap-2">
      <Button
        label="Yes"
        size="small"
        className="bg-green-600 border-none h-8"
      />
      <Button
        label="No"
        size="small"
        severity="danger"
        outlined
        className="h-8"
      />
    </div>
  );

  return (
    <PageLayout title="Route Wise Pickup/Drop">
      <div className="space-y-6">
        {/* Search Header Section */}
        <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
          <h2 className="text-xl font-bold text-gray-800 mb-6 border-b pb-4">
            Route Details
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-gray-700">
                Date <span className="text-red-500">*</span>
              </label>
              <Calendar
                value={date}
                onChange={(e) => setDate(e.value as Date)}
                placeholder="dd/mm/yyyy"
                showIcon
                className="w-full"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-gray-700">
                Select Route No. <span className="text-red-500">*</span>
              </label>
              <Dropdown
                value={routeNo}
                options={routeOptions}
                onChange={(e) => setRouteNo(e.value)}
                placeholder="Select Route"
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
          </div>

          <div className="flex justify-center gap-4 mt-2">
            <Button
              label="Search"
              icon="pi pi-search"
              className="bg-blue-700 px-8 shadow-md"
              onClick={() => setShowList(true)}
            />
            <Button
              label="Clear"
              icon="pi pi-refresh"
              severity="danger"
              outlined
              className="px-8"
              onClick={() => {
                setDate(null);
                setRouteNo(null);
                setType(null);
                setShowList(false);
              }}
            />
          </div>
        </div>

        {showList && (
          <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm animate-fadein">
            <div className="flex justify-between items-center mb-6 border-b pb-4">
              <h3 className="text-lg font-bold text-gray-800 uppercase tracking-tight">
                Route Details List
              </h3>
            </div>

            <DataTable
              value={tableData}
              paginator
              rows={10}
              className="p-datatable-sm"
            >
              <Column
                header="Sr No."
                body={(_, { rowIndex }) => rowIndex + 1}
                style={{ width: "90px" }} sortable
              />
              <Column field="routeNo" header="Route No." sortable />
              <Column field="busStop" header="Bus Stop Name" sortable />
              <Column field="className" header="Class" />
              <Column field="studentName" header="Student Name" />
              <Column field="remark" header="Remark Details" />
              <Column
                header="Action"
                body={actionTemplate}
                align="center"
                style={{ width: "150px" }}
              />
            </DataTable>
          </div>
        )}
      </div>
    </PageLayout>
  );
}
