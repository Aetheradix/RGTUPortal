/* eslint-disable @typescript-eslint/no-explicit-any */

import React from "react";
import PageLayout from "../../../components/PageLayout";
import { Chart } from "primereact/chart";
import { Button } from "primereact/button";
import { useNavigate } from "react-router-dom";
import Table from "@/ui/shared/Table";
import { directoryStats, registrationChartData, recentActivity } from "./data";

const EmployeeDirectoryHome: React.FC = () => {
  const navigate = useNavigate();

  const activityColumns = [
    { field: "id", header: "Employee ID" },
    { field: "name", header: "Employee Name" },
    { field: "request", header: "Request Type" },
    { field: "date", header: "Date" },
    {
      field: "status",
      header: "Status",
      body: (rowData: any) => (
        <span
          className={`px-2 py-1 rounded-full text-[10px] font-bold ${
            rowData.status === "Verified"
              ? "bg-emerald-100 text-emerald-600"
              : rowData.status === "Pending"
              ? "bg-red-100 text-red-600"
              : "bg-indigo-100 text-indigo-600"
          }`}
        >
          {rowData.status}
        </span>
      ),
    },
  ];

  return (
    <PageLayout title="Employee Directory Dashboard">
      <div className="flex justify-between items-center mb-6 bg-white p-5 rounded-2xl shadow-sm border border-[#f3e8ff]">
        <div className="flex flex-col">
          <h2 className="text-[#4a5568] font-bold text-lg">
            Workforce Command Center
          </h2>
          <p className="text-[#a0aec0] text-xs font-medium">
            Manage registrations, verifications, and employee data updates.
          </p>
        </div>
        <div className="flex gap-3">
          <Button
            label="New Registration"
            icon="pi pi-user-plus"
            className="p-button-sm bg-[#9333ea] border-none shadow-md"
            onClick={() =>
              navigate("/hrms/employee-directory/employee-registration")
            }
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        {directoryStats.map((stat, index) => {
          if (index === 0) {
            return (
              <div
                key={index}
                className="bg-linear-to-br from-[#9333ea] to-[#a855f7] p-6 rounded-2xl shadow-lg transform transition-all duration-300 hover:scale-105 cursor-pointer"
              >
                <p className="text-white opacity-80 font-medium text-sm">
                  {stat.label}
                </p>
                <h3 className="text-white text-4xl font-black mt-2">
                  {stat.count}
                </h3>
                <p className="text-white text-[10px] mt-4 font-bold uppercase tracking-widest">
                  {stat.trend}
                </p>
              </div>
            );
          }
          if (index === 2) {
            return (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl shadow-sm border border-[#f3e8ff] transform transition-all duration-300 hover:scale-105 hover:border-emerald-400 cursor-pointer"
              >
                <p className="text-[#718096] font-medium text-sm">
                  {stat.label}
                </p>
                <h3 className="text-emerald-500 text-4xl font-black mt-2">
                  {stat.count}
                </h3>
                <div className="flex items-center gap-2 mt-4 text-[10px] font-bold text-emerald-600">
                  <i className="pi pi-arrow-up"></i> {stat.trend}
                </div>
              </div>
            );
          }
          return (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-sm border border-[#f3e8ff] transform transition-all duration-300 hover:scale-105 hover:border-[#a855f7] cursor-pointer"
            >
              <p className="text-[#718096] font-medium text-sm">{stat.label}</p>
              <h3 className="text-[#9333ea] text-4xl font-black mt-2">
                {stat.count}
              </h3>
              <p className="text-[#9333ea] text-[10px] mt-4 font-bold uppercase tracking-widest underline">
                {stat.trend} →
              </p>
            </div>
          );
        })}
      </div>
      <h3 className="text-[#4a5568] font-bold text-sm mb-4 uppercase tracking-wider ml-1">
        Directory Management Links
      </h3>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-3 gap-4 mb-8">
        {[
          {
            label: "Official Details Update",
            path: "/employee-directory-management/employee-directory/official-details-update",
            icon: "pi-id-card",
          },
          {
            label: "Data Change Request",
            path: "/employee-directory-management/employee-directory/employee-data-chnage",
            icon: "pi-sync",
          },
          {
            label: "Employee Verification",
            path: "/employee-directory-management/employee-directory/employee-verification",
            icon: "pi-check-square",
          },
          {
            label: "HO Level Verification",
            path: "/employee-directory-management/employee-directory/employee-verification-ho",
            icon: "pi-shield",
          },
          {
            label: "Verification PDF",
            path: "/employee-directory-management/employee-directory/employee-verification-pdf",
            icon: "pi-file-pdf",
          },
          {
            label: "Exam Enrollment",
            path: "/employee-directory-management/employee-directory/exam-wise-employee-enrollment",
            icon: "pi-book",
          },
        ].map((link, idx) => (
          <div
            key={idx}
            onClick={() => navigate(link.path)}
            className="cursor-pointer bg-white p-4 rounded-xl border border-[#f3e8ff] hover:border-[#a855f7] hover:shadow-md transition-all text-center group"
          >
            <i
              className={`pi ${link.icon} text-[#9333ea] text-xl mb-2 group-hover:scale-110 transition-transform`}
            ></i>
            <p className="text-[#4a5568] font-bold text-[10px] leading-tight">
              {link.label}
            </p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-[#f3e8ff]">
          <h3 className="text-[#4a5568] font-bold text-sm mb-6 uppercase tracking-wider text-center">
            Registration Status
          </h3>
          <div className="h-64">
            <Chart
              type="doughnut"
              data={registrationChartData}
              options={{
                maintainAspectRatio: false,
                cutout: "75%",
                plugins: {
                  legend: {
                    position: "bottom",
                    labels: { usePointStyle: true, font: { size: 10 } },
                  },
                },
              }}
            />
          </div>
        </div>

        <div className="lg:col-span-2 bg-white p-6 rounded-2xl shadow-sm border border-[#f3e8ff]">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-[#4a5568] font-bold text-sm uppercase tracking-wider">
              Recent Processing Queue
            </h3>
            <Button
              label="View Full Log"
              className="p-button-text p-button-sm text-[#9333ea] text-[10px]"
              onClick={() => navigate("/hrms/employee-directory/reports")}
            />
          </div>
          <Table
            data={recentActivity}
            columns={activityColumns}
            className="p-datatable-sm text-xs"
          />
        </div>
      </div>
    </PageLayout>
  );
};

export default EmployeeDirectoryHome;
