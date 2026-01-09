/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import PageLayout from "../../../components/PageLayout";
import { Dropdown } from "primereact/dropdown";
import { Chart } from "primereact/chart";
import { Button } from "primereact/button";
import { useNavigate } from "react-router-dom";
import Table from "@/ui/shared/Table";
import { recentFilings } from "./data";

const APRMSHome: React.FC = () => {
  const navigate = useNavigate();

  const aprSummaryData = {
    labels: ["Filed (Applicable)", "Filed (Nil)", "Pending"],
    datasets: [
      {
        data: [650, 420, 178],
        backgroundColor: ["#7e22ce", "#a855f7", "#e9d5ff"],
        hoverBackgroundColor: ["#6b21a8", "#9333ea", "#d8b4fe"],
        borderWidth: 0,
      },
    ],
  };

  const chartOptions = {
    plugins: {
      legend: {
        position: "bottom",
        labels: {
          usePointStyle: true,
          font: { size: 11, weight: "bold" },
        },
      },
    },
    maintainAspectRatio: false,
    cutout: "70%",
  };

  const filingColumns = [
    { field: "id", header: "Filing ID" },
    { field: "name", header: "Employee Name" },
    { field: "type", header: "Filing Type" },
    { field: "date", header: "Date" },
    {
      field: "status",
      header: "Status",
      body: (rowData: any) => (
        <span
          className={`px-2 py-1 rounded-full text-[10px] font-bold ${
            rowData.status === "Verified"
              ? "bg-emerald-100 text-emerald-600"
              : rowData.status === "Submitted"
              ? "bg-indigo-100 text-indigo-600"
              : "bg-red-100 text-red-600"
          }`}
        >
          {rowData.status}
        </span>
      ),
    },
  ];

  return (
    <PageLayout title="APRMS Dashboard">
      <div className="flex justify-between items-center mb-6 bg-white p-5 rounded-2xl shadow-sm border border-[#f3e8ff]">
        <div className="flex flex-col">
          <h2 className="text-[#4a5568] font-bold text-lg">
            APRM System Command Center
          </h2>
          <p className="text-[#a0aec0] text-xs font-medium">
            Manage and track property declarations for the Academic Year
            2025-26.
          </p>
        </div>
        <div className="flex gap-3">
          <Dropdown
            placeholder="2025-26"
            className="w-32 border-[#e9d5ff] text-xs"
          />
          <Button
            label="File New APR"
            icon="pi pi-plus-circle"
            className="p-button-sm bg-[#9333ea] border-none shadow-lg"
            onClick={() => navigate("/hrms/apr-management/apr-form")}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-linear-to-br from-[#9333ea] to-[#a855f7] p-6 rounded-2xl shadow-lg transform transition-all hover:scale-105">
          <p className="text-white opacity-80 font-medium text-sm">
            Total Compliance
          </p>
          <h3 className="text-white text-4xl font-black mt-2">84%</h3>
          <p className="text-white text-[10px] mt-4 font-bold uppercase tracking-widest">
            Across All Districts
          </p>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-[#f3e8ff] transform transition-all hover:scale-105">
          <p className="text-[#718096] font-medium text-sm">
            Pending Submissions
          </p>
          <h3 className="text-[#9333ea] text-4xl font-black mt-2">1,142</h3>
          <p className="text-[#9333ea] text-[10px] mt-4 font-bold uppercase tracking-widest underline cursor-pointer">
            Send Reminders →
          </p>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-[#f3e8ff] transform transition-all hover:scale-105">
          <p className="text-[#718096] font-medium text-sm">Verified Returns</p>
          <h3 className="text-emerald-500 text-4xl font-black mt-2">2,890</h3>
          <div className="flex items-center gap-2 mt-4 text-[10px] font-bold text-emerald-600">
            <i className="pi pi-arrow-up"></i> 8% growth vs last year
          </div>
        </div>
      </div>
      {/* Navigation Matrix - 5 Main Actions */}
      <h3 className="text-[#4a5568] font-bold text-sm mb-4 uppercase tracking-wider ml-1">
        Quick Access & Navigation
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-8">
        <div
          onClick={() => navigate("/hrms/apr-management/apr-form")}
          className="cursor-pointer bg-white p-4 rounded-xl border border-[#f3e8ff] hover:border-[#a855f7] transition-all text-center group"
        >
          <i className="pi pi-file-edit text-[#9333ea] text-xl mb-2 group-hover:scale-110 transition-transform"></i>
          <p className="text-[#4a5568] font-bold text-[11px]">
            Employee APR Form
          </p>
        </div>
        <div
          onClick={() => navigate("/hrms/apr-management/apr-form-print")}
          className="cursor-pointer bg-white p-4 rounded-xl border border-[#f3e8ff] hover:border-[#a855f7] transition-all text-center group"
        >
          <i className="pi pi-print text-[#9333ea] text-xl mb-2 group-hover:scale-110 transition-transform"></i>
          <p className="text-[#4a5568] font-bold text-[11px]">
            Employee APR Form Print
          </p>
        </div>
        <div
          onClick={() => navigate("/hrms/apr-management/apr-dcoument-upload")}
          className="cursor-pointer bg-white p-4 rounded-xl border border-[#f3e8ff] hover:border-[#a855f7] transition-all text-center group"
        >
          <i className="pi pi-cloud-upload text-[#9333ea] text-xl mb-2 group-hover:scale-110 transition-transform"></i>
          <p className="text-[#4a5568] font-bold text-[11px]">
            Upload APR Document
          </p>
        </div>
        <div
          onClick={() => navigate("/hrms/apr-management/apr-form-report")}
          className="cursor-pointer bg-white p-4 rounded-xl border border-[#f3e8ff] hover:border-[#a855f7] transition-all text-center group"
        >
          <i className="pi pi-file-pdf text-[#9333ea] text-xl mb-2 group-hover:scale-110 transition-transform"></i>
          <p className="text-[#4a5568] font-bold text-[11px]">
            Employee APR Report
          </p>
        </div>
        <div
          onClick={() => navigate("/hrms/apr-management/apr-district-report")}
          className="cursor-pointer bg-white p-4 rounded-xl border border-[#f3e8ff] hover:border-[#a855f7] transition-all text-center group"
        >
          <i className="pi pi-map-marker text-[#9333ea] text-xl mb-2 group-hover:scale-110 transition-transform"></i>
          <p className="text-[#4a5568] font-bold text-[11px]">
            District Wise Report
          </p>
        </div>
      </div>

      {/* Analytics and Recent Filings */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-[#f3e8ff]">
          <h3 className="text-[#4a5568] font-bold text-sm mb-6 uppercase tracking-wider">
            Filing Distribution
          </h3>
          <div className="h-64">
            <Chart
              type="doughnut"
              data={aprSummaryData}
              options={chartOptions}
            />
          </div>
        </div>
        <div className="lg:col-span-2 bg-white p-6 rounded-2xl shadow-sm border border-[#f3e8ff]">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-[#4a5568] font-bold text-sm uppercase tracking-wider">
              Recent Property Filings
            </h3>
            <Button
              label="View Full Registry"
              className="p-button-text p-button-sm text-[#9333ea]"
              onClick={() => navigate("/aprms/employee-apr-report")}
            />
          </div>
          <Table
            data={recentFilings}
            columns={filingColumns}
            className="p-datatable-sm text-xs custom-table"
          />
        </div>
      </div>
    </PageLayout>
  );
};

export default APRMSHome;
