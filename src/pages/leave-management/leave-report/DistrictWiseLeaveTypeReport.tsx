import React, { useState } from "react";
import PageLayout from "@/components/PageLayout";
import Table from "@/ui/shared/Table";
import Dropdown from "@/ui/shared/Dropdown";
import { Button } from "primereact/button";

interface DistrictWiseLeaveTypeRow {
  districtName: string;
  leaveType: string;
  totalApplications: number;
  approved: number;
  rejected: number;
  pending: number;
}

const DistrictWiseLeaveTypeReport: React.FC = () => {
  const [district, setDistrict] = useState<string | null>(null);
  const [leaveType, setLeaveType] = useState<string | null>(null);
  const [showList, setShowList] = useState(false);

  const districtOptions = [
    { label: "Bhopal", value: "Bhopal" },
    { label: "Indore", value: "Indore" },
    { label: "Betul", value: "Betul" },
  ];

  const leaveTypeOptions = [
    { label: "Casual Leave", value: "Casual Leave" },
    { label: "Medical Leave", value: "Medical Leave" },
    { label: "Earned Leave", value: "Earned Leave" },
    { label: "CCL Leave", value: "CCL Leave" },
  ];

  const [reportList] = useState<DistrictWiseLeaveTypeRow[]>([
    {
      districtName: "Bhopal",
      leaveType: "Casual Leave",
      totalApplications: 120,
      approved: 80,
      rejected: 10,
      pending: 30,
    },
    {
      districtName: "Indore",
      leaveType: "Medical Leave",
      totalApplications: 95,
      approved: 60,
      rejected: 5,
      pending: 30,
    },
    {
      districtName: "Betul",
      leaveType: "Earned Leave",
      totalApplications: 70,
      approved: 50,
      rejected: 7,
      pending: 13,
    },
  ]);

  const columns = [
    { field: "districtName", header: "District", sortable: true, style: { whiteSpace: "nowrap" } },
    { field: "leaveType", header: "Type of Leave", sortable: true, style: { whiteSpace: "nowrap" } },
    { field: "totalApplications", header: "Total Applications", sortable: true, style: { whiteSpace: "nowrap" } },
    { field: "approved", header: "Approved", sortable: true, style: { whiteSpace: "nowrap" } },
    { field: "rejected", header: "Rejected", sortable: true, style: { whiteSpace: "nowrap" } },
    { field: "pending", header: "Pending", sortable: true, style: { whiteSpace: "nowrap" } },
  ];

  return (
    <PageLayout title="District Wise Leave Type Report">
      <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm space-y-6">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-bold text-blue-700">District Wise Leave Type Report</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Dropdown
            label="Select District"
            required
            options={districtOptions}
            value={district}
            onChange={(e) => setDistrict(e.value)}
            placeholder="Select"
          />

          <Dropdown
            label="Select Type of Leave"
            required
            options={leaveTypeOptions}
            value={leaveType}
            onChange={(e) => setLeaveType(e.value)}
            placeholder="Select"
          />
        </div>

        <div className="flex gap-4 mt-6">
          <Button
            label="Get Details"
            className="bg-green-600 px-8"
            type="button"
            onClick={() => setShowList(true)}
          />
        </div>
      </div>

      {showList && (
        <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm mt-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold text-gray-800">District Wise Leave Type Report Details</h2>
            <Button
              label="Export To Excel"
              icon="pi pi-download"
              className="bg-blue-600 border-none"
              type="button"
              onClick={() => {}}
            />
          </div>

          <Table columns={columns} data={reportList} showPagination rowsPerPage={10} {...{ format: "district_wise_leave_type_report" }} />
        </div>
      )}
    </PageLayout>
  );
};

export default DistrictWiseLeaveTypeReport;
