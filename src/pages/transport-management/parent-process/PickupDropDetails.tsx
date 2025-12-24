import { useState } from "react";
import { Button } from "primereact/button";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { InputText } from "primereact/inputtext";
import { Calendar } from "primereact/calendar";
import PageLayout from "@/components/PageLayout";

interface PickupDropDetail {
  id: number;
  routeNo: string;
  busStopName: string;
  arrivalTime: string;
  departureTime: string;
}

export default function PickupDropDetails() {
  const [showList, setShowList] = useState(false);
  const [formData, setFormData] = useState({
    studentName: "",
    fromDate: null as Date | null,
    toDate: null as Date | null,
  });

  const pickupDropList: PickupDropDetail[] = [
    {
      id: 1,
      routeNo: "RTU001",
      busStopName: "Main Gate",
      arrivalTime: "08:30 AM",
      departureTime: "08:35 AM",
    },
    {
      id: 2,
      routeNo: "RTU002",
      busStopName: "Library Stop",
      arrivalTime: "08:40 AM",
      departureTime: "08:45 AM",
    },
  ];

  const handleClear = () => {
    setShowList(false);
    setFormData({ studentName: "", fromDate: null, toDate: null });
  };

  return (
    <PageLayout title="Pickup Drop Details">
      <div className="space-y-6">
        <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
          <h2 className="text-xl font-bold text-gray-800 mb-6 border-b pb-4">
            Pickup Drop Details
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-gray-700">
                Enter Student Name <span className="text-red-500">*</span>
              </label>
              <InputText
                value={formData.studentName}
                onChange={(e) =>
                  setFormData({ ...formData, studentName: e.target.value })
                }
                placeholder="Student Name"
                className="w-full"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-gray-700">
                Select From Date <span className="text-red-500">*</span>
              </label>
              <Calendar
                value={formData.fromDate}
                onChange={(e) =>
                  setFormData({ ...formData, fromDate: e.value as Date })
                }
                placeholder="dd/mm/yyyy"
                showIcon
                className="w-full"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-gray-700">
                Select To Date <span className="text-red-500">*</span>
              </label>
              <Calendar
                value={formData.toDate}
                onChange={(e) =>
                  setFormData({ ...formData, toDate: e.value as Date })
                }
                placeholder="dd/mm/yyyy"
                showIcon
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
              label="Clear"
              icon="pi pi-refresh"
              severity="danger"
              outlined
              className="px-8"
              onClick={handleClear}
            />
          </div>
        </div>

        {showList && (
          <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm animate-fadein">
            <div className="flex justify-between items-center mb-6 border-b pb-4">
              <h3 className="text-lg font-bold text-gray-800 uppercase tracking-tight">
                Pickup Drop Details List
              </h3>
              <div className="flex gap-2">
                <Button
                  icon="pi pi-file-pdf"
                  severity="warning"
                  text
                  tooltip="Export PDF"
                />
                <Button
                  icon="pi pi-print"
                  severity="secondary"
                  text
                  tooltip="Print"
                />
              </div>
            </div>

            <DataTable
              value={pickupDropList}
              paginator
              rows={10}
              className="p-datatable-sm"
            >
              <Column
                header="Sr. No."
                body={(_, { rowIndex }) => rowIndex + 1}
                style={{ width: "100px" }} sortable
              />
              <Column field="routeNo" header="Route No." sortable />
              <Column field="busStopName" header="Bus Stop Name" sortable />
              <Column field="arrivalTime" header="Arrival In Time" />
              <Column field="departureTime" header="Departure Out Time" />
            </DataTable>
          </div>
        )}
      </div>
    </PageLayout>
  );
}
