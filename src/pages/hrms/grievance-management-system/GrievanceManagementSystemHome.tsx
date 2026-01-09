/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import PageLayout from "../../../components/PageLayout";
import { Dropdown } from "primereact/dropdown";
import { Chart } from "primereact/chart";
import { Button } from "primereact/button";
import { Timeline } from "primereact/timeline";
import { useNavigate } from "react-router-dom";
import Table from "@/ui/shared/Table";
import {
  chartData,
  chartOptions,
  recentGrievances,
  timelineEvents,
} from "./data";

const GrievanceDashboard: React.FC = () => {
  const navigate = useNavigate();

  const recentColumns = [
    { field: "no", header: "Grievance No." },
    { field: "name", header: "Employee Name" },
    { field: "type", header: "Type" },
    { field: "date", header: "Date" },
    {
      field: "status",
      header: "Status",
      body: (rowData: any) => (
        <span
          className={`px-2 py-1 rounded-full text-[10px] font-bold ${
            rowData.status === "Resolved"
              ? "bg-emerald-100 text-emerald-600"
              : rowData.status === "Pending"
              ? "bg-amber-100 text-amber-600"
              : "bg-red-100 text-red-600"
          }`}
        >
          {rowData.status}
        </span>
      ),
    },
  ];

  return (
    <PageLayout title="Grievance Management Dashboard">
      <div className="flex justify-between items-center mb-6 bg-white p-4 rounded-xl shadow-sm border border-[#f3e8ff]">
        <div className="flex flex-col">
          <h2 className="text-[#4a5568] font-bold text-lg">System Overview</h2>
          <p className="text-[#a0aec0] text-xs">
            Welcome back! Here is what's happening today.
          </p>
        </div>
        <div className="flex gap-4">
          <Dropdown
            placeholder="2026"
            className="w-24 border-[#e9d5ff] text-xs"
          />
          <Dropdown
            placeholder="ALL Months"
            className="w-32 border-[#e9d5ff] text-xs"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div
          onClick={() => navigate("/grievances/registered")}
          className="group cursor-pointer bg-linear-to-br from-[#9333ea] to-[#a855f7] p-6 rounded-2xl shadow-lg transform transition-all duration-300 hover:scale-105"
        >
          <p className="text-white opacity-80 font-medium text-sm">
            Total Registered
          </p>
          <h3 className="text-white text-4xl font-black mt-2">1,248</h3>
          <p className="text-white text-[10px] mt-4 font-bold uppercase tracking-widest">
            View All Records →
          </p>
        </div>

        <div
          onClick={() =>
            navigate("/hrms/grievance-report/section-wise-pending-report")
          }
          className="group cursor-pointer bg-white p-6 rounded-2xl shadow-sm border border-[#f3e8ff] transform transition-all duration-300 hover:scale-105 hover:border-[#a855f7]"
        >
          <p className="text-[#718096] font-medium text-sm">Pending Action</p>
          <h3 className="text-[#9333ea] text-4xl font-black mt-2">452</h3>
          <p className="text-[#9333ea] text-[10px] mt-4 font-bold uppercase tracking-widest underline">
            Check Districts →
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm border border-[#f3e8ff] transform transition-all duration-300 hover:scale-105">
          <p className="text-[#718096] font-medium text-sm">Resolved Cases</p>
          <h3 className="text-emerald-500 text-4xl font-black mt-2">796</h3>
          <div className="flex items-center gap-2 mt-4 text-[10px] font-bold text-emerald-600">
            <i className="pi pi-arrow-up"></i> 12% increase this month
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-[#f3e8ff]">
          <h3 className="text-[#4a5568] font-bold text-sm mb-4 uppercase tracking-wider">
            Grievance Type Distribution
          </h3>
          <div className="h-64">
            <Chart type="doughnut" data={chartData} options={chartOptions} />
          </div>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-[#f3e8ff]">
          <h3 className="text-[#4a5568] font-bold text-sm mb-4 uppercase tracking-wider">
            Monthly Trends
          </h3>
          <div className="h-64">
            <Chart type="bar" data={chartData} options={chartOptions} />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white p-6 rounded-2xl shadow-sm border border-[#f3e8ff]">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-[#4a5568] font-bold">Recent Grievances</h3>
            <Button
              label="View All"
              className="p-button-text p-button-sm text-[#9333ea]"
            />
          </div>
          <Table
            data={recentGrievances}
            columns={recentColumns}
            className="p-datatable-sm text-xs"
          />
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm border border-[#f3e8ff]">
          <h3 className="text-[#4a5568] font-bold mb-6 text-sm uppercase tracking-wider">
            Quick Processing Flow
          </h3>
          <Timeline
            value={timelineEvents}
            content={(item) => (
              <div className="pb-4">
                <p className="text-xs font-bold text-[#4a5568]">
                  {item.status}
                </p>
                <p className="text-[10px] text-gray-400">{item.date}</p>
              </div>
            )}
            marker={(item) => (
              <span
                className="flex w-7 h-7 items-center justify-center text-white rounded-full z-1 shadow-sm"
                style={{ backgroundColor: item.color }}
              >
                <i className={`${item.icon} text-[10px]`}></i>
              </span>
            )}
          />
        </div>
      </div>
    </PageLayout>
  );
};

export default GrievanceDashboard;
