import React, { useState, useRef } from "react";
import PageLayout from "../../../components/PageLayout";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { Calendar } from "primereact/calendar";
import { Toast } from "primereact/toast";
import Dropdown from "@/ui/shared/Dropdown";
import { officeOption, payOption, postOption } from "./data";

const DearnessAllowanceArrear: React.FC = () => {
  const [officeType, setOfficeType] = useState<string | null>(null);
  const [officeName, setOfficeName] = useState<string | null>(null);
  const [postType, setPostType] = useState<string | null>(null);
  const [payCommission, setPayCommission] = useState<string | null>(null);
  const [fromMonth, setFromMonth] = useState<Date | null>(null);
  const [toMonth, setToMonth] = useState<Date | null>(null);
  const [orderDate, setOrderDate] = useState<Date | null>(null);
  const [paymentMonth, setPaymentMonth] = useState<Date | null>(null);

  const toast = useRef<Toast>(null);

  const handleSearch = () => {
    if (!officeType) {
      toast.current?.show({
        severity: "warn",
        summary: "Validation",
        detail: "Please fill all mandatory fields (*)",
        life: 3000,
      });
      return;
    }
    toast.current?.show({
      severity: "info",
      summary: "No Results",
      detail: "No records found for the selected criteria.",
      life: 4000,
    });
  };

  const handleClear = () => {
    setOfficeType(null);
    setOfficeName(null);
    setPostType(null);
    setPayCommission(null);
    setFromMonth(null);
    setToMonth(null);
    setOrderDate(null);
    setPaymentMonth(null);
  };

  return (
    <PageLayout title="Dearness Allowance Arrear">
      <Toast ref={toast} />

      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 mt-3">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
          <div className="flex flex-col gap-2">
            <label className="text-sm font-bold text-gray-600">
              Office Type (Code)<span className="text-red-500">*</span>
            </label>
            <Dropdown
              value={officeType}
              onChange={(e) => setOfficeType(e.value)}
              placeholder="Select"
              className="w-full border-gray-300"
              options={officeOption}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-sm font-bold text-gray-600">
              Office Name (Code)<span className="text-red-500">*</span>
            </label>
            <Dropdown
              value={officeName}
              onChange={(e) => setOfficeName(e.value)}
              placeholder="Select"
              className="w-full border-gray-300"
              options={[]}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-sm font-bold text-gray-600">
              Post Type<span className="text-red-500">*</span>
            </label>
            <Dropdown
              value={postType}
              onChange={(e) => setPostType(e.value)}
              placeholder="Select"
              className="w-full border-gray-300"
              options={postOption}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-sm font-bold text-gray-600">
              Pay Commission<span className="text-red-500">*</span>
            </label>
            <Dropdown
              value={payCommission}
              onChange={(e) => setPayCommission(e.value)}
              placeholder="Select"
              className="w-full border-gray-300"
              options={payOption}
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
          <div className="flex flex-col gap-2">
            <label className="text-sm font-bold text-gray-600">
              From Month<span className="text-red-500">*</span>
            </label>
            <Calendar
              value={fromMonth}
              onChange={(e) => setFromMonth(e.value as Date)}
              view="month"
              dateFormat="mm/yy"
              placeholder="MM/YYYY"
              showIcon
              className="w-full"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-sm font-bold text-gray-600">
              To Month<span className="text-red-500">*</span>
            </label>
            <Calendar
              value={toMonth}
              onChange={(e) => setToMonth(e.value as Date)}
              view="month"
              dateFormat="mm/yy"
              placeholder="MM/YYYY"
              showIcon
              className="w-full"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-sm font-bold text-gray-600">
              Previous Dearness Allowance %
              <span className="text-red-500">*</span>
            </label>
            <InputText className="w-full p-inputtext-sm" />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-sm font-bold text-gray-600">
              Current Dearness Allowance %
              <span className="text-red-500">*</span>
            </label>
            <InputText className="w-full p-inputtext-sm" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
          <div className="flex flex-col gap-2">
            <label className="text-sm font-bold text-gray-600">
              Difference Dearness Allowance %
              <span className="text-red-500">*</span>
            </label>
            <InputText
              value={"0.00"}
              readOnly
              className="w-full bg-gray-50 p-inputtext-sm"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-sm font-bold text-gray-600">
              Order Number<span className="text-red-500">*</span>
            </label>
            <InputText className="w-full p-inputtext-sm" />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-sm font-bold text-gray-600">
              Order Date<span className="text-red-500">*</span>
            </label>
            <Calendar
              value={orderDate}
              onChange={(e) => setOrderDate(e.value as Date)}
              dateFormat="dd/mm/yy"
              placeholder="DD/MM/YYYY"
              showIcon
              className="w-full"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-sm font-bold text-gray-600">
              Payment Month<span className="text-red-500">*</span>
            </label>
            <Calendar
              value={paymentMonth}
              onChange={(e) => setPaymentMonth(e.value as Date)}
              view="month"
              dateFormat="mm/yy"
              placeholder="MM/YYYY"
              showIcon
              className="w-full"
            />
          </div>
        </div>

        <div className="flex gap-2 border-t mt-6 pt-5">
          <Button
            label="Search"
            icon="pi pi-search"
            className="p-button-primary px-8 bg-indigo-500 border-none"
            onClick={handleSearch}
          />
          <Button
            label="Clear"
            icon="pi pi-refresh"
            className="p-button-outlined p-button-danger px-8"
            onClick={handleClear}
          />
        </div>
      </div>
    </PageLayout>
  );
};

export default DearnessAllowanceArrear;
