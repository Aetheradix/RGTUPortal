import React, { useState, useRef } from "react";
import PageLayout from "../../../components/PageLayout";
import { Button } from "primereact/button";
import { Calendar } from "primereact/calendar";
import { Toast } from "primereact/toast";
import { RadioButton } from "primereact/radiobutton";
import Dropdown from "@/ui/shared/Dropdown";
import { officeOption, payOption, postOption } from "./data";

const ArrearFinalPaymentProcess: React.FC = () => {
  const [processAction, setProcessAction] = useState<string>("generate");
  const [arrearType, setArrearType] = useState<string | null>(null);
  const [officeType, setOfficeType] = useState<string | null>(null);
  const [officeName, setOfficeName] = useState<string | null>(null);
  const [postType, setPostType] = useState<string | null>(null);
  const [payCommission, setPayCommission] = useState<string | null>(null);
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
      summary: "Processing",
      detail: `Initiating ${
        processAction === "generate" ? "Generation" : "Deletion"
      } process...`,
      life: 4000,
    });
  };

  const handleClear = () => {
    setArrearType(null);
    setOfficeType(null);
    setOfficeName(null);
    setPostType(null);
    setPayCommission(null);
    setPaymentMonth(null);
  };

  return (
    <PageLayout title="Arrear Final Payment Process">
      <Toast ref={toast} />

      <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 mt-3 animate-fade-in">
        <div className="border-b border-gray-100 pb-3 mb-6 flex items-center">
          <span className="text-indigo-600 font-bold border-l-4 border-indigo-500 pl-3">
            Arrear Final Payment Process
          </span>
        </div>
        <div className="flex justify-center gap-8 mb-10">
          <div className="flex items-center gap-2">
            <RadioButton
              inputId="delete"
              name="process"
              value="delete"
              onChange={(e) => setProcessAction(e.value)}
              checked={processAction === "delete"}
            />
            <label
              htmlFor="delete"
              className="text-sm font-bold text-gray-700 cursor-pointer"
            >
              Delete
            </label>
          </div>
          <div className="flex items-center gap-2">
            <RadioButton
              inputId="generate"
              name="process"
              value="generate"
              onChange={(e) => setProcessAction(e.value)}
              checked={processAction === "generate"}
              color="#10b981"
            />
            <label
              htmlFor="generate"
              className={`text-sm font-bold cursor-pointer ${
                processAction === "generate"
                  ? "text-emerald-600"
                  : "text-gray-700"
              }`}
            >
              Generate Arrear
            </label>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="flex flex-col gap-2">
            <label className="text-sm font-bold text-gray-600">
              Arrear Type<span className="text-red-500">*</span>
            </label>
            <Dropdown
              value={arrearType}
              onChange={(e) => setArrearType(e.value)}
              placeholder="Select"
              className="w-full border-gray-300 "
              options={[]}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-sm font-bold text-gray-600">
              Office Type (Code)<span className="text-red-500">*</span>
            </label>
            <Dropdown
              value={officeType}
              onChange={(e) => setOfficeType(e.value)}
              placeholder="Select"
              className="w-full border-gray-300 "
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
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
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
              className="w-full "
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

export default ArrearFinalPaymentProcess;
