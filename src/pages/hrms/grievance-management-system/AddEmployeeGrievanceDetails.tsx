import React, { useState, useRef } from "react";
import PageLayout from "../../../components/PageLayout";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";
import { Toast } from "primereact/toast";
import { FileUpload } from "primereact/fileupload";
import Dropdown from "@/ui/shared/Dropdown";

const AddEmployeeGrievance: React.FC = () => {
  const toast = useRef<Toast>(null);
  const [empCode, setEmpCode] = useState("");
  const [type, setType] = useState(null);
  const [topic, setTopic] = useState(null);
  const [office, setOffice] = useState(null);
  const [subject, setSubject] = useState("");
  const [description, setDescription] = useState("");

  const handleSave = () => {
    if (!empCode) {
      toast.current?.show({
        severity: "warn",
        summary: "Missing Fields",
        detail: "Please fill in all mandatory fields.",
      });
      return;
    }
    setLoadingState();
  };

  const setLoadingState = () => {
    toast.current?.show({
      severity: "success",
      summary: "Grievance Registered",
      detail: "Application ID: GMS-2026-001",
    });
  };

  return (
    <PageLayout title="Add Employee Grievance Details">
      <Toast ref={toast} />

      <div className="bg-white p-6 rounded-xl shadow-sm border border-[#f3e8ff] mb-6">
        <h3 className="text-[#9333ea] font-bold text-sm mb-4 flex items-center gap-2">
          <i className="pi pi-user"></i> Employee Identification
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-end">
          <div className="flex flex-col gap-2">
            <label className="text-xs font-bold text-gray-600 uppercase">
              Employee Code *
            </label>
            <div className="flex gap-2">
              <InputText
                value={empCode}
                onChange={(e) => setEmpCode(e.target.value)}
                placeholder="Ex: CD4981"
                className="p-inputtext-sm w-full border-gray-300"
              />
              <Button
                icon="pi pi-search"
                className="bg-[#9333ea] border-none"
              />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-xs font-bold text-gray-600 uppercase">
              Employee Name
            </label>
            <InputText
              value={"Varun Gaur"}
              disabled
              className="p-inputtext-sm bg-gray-50 border-gray-200 text-gray-500"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-xs font-bold text-gray-600 uppercase">
              Designation
            </label>
            <InputText
              value="Teacher"
              disabled
              className="p-inputtext-sm bg-gray-50 border-gray-200 text-gray-500"
            />
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-sm border border-[#f3e8ff] mb-6">
        <h3 className="text-[#9333ea] font-bold text-sm mb-4 flex items-center gap-2">
          <i className="pi pi-map-marker"></i> Grievance Routing
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex flex-col gap-2">
            <label className="text-xs font-bold text-gray-600 uppercase">
              Grievance Type *
            </label>
            <Dropdown
              value={type}
              onChange={(e) => setType(e.value)}
              placeholder="Select Type"
              className="border-gray-300"
              options={[]}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-xs font-bold text-gray-600 uppercase">
              Grievance Topic *
            </label>
            <Dropdown
              value={topic}
              onChange={(e) => setTopic(e.value)}
              placeholder="Select Topic"
              className="border-gray-300"
              options={[]}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-xs font-bold text-gray-600 uppercase">
              Forwarding Office *
            </label>
            <Dropdown
              value={office}
              onChange={(e) => setOffice(e.value)}
              placeholder="Select Office"
              className="border-gray-300"
              options={[]}
            />
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-sm border border-[#f3e8ff]">
        <h3 className="text-[#9333ea] font-bold text-sm mb-4 flex items-center gap-2">
          <i className="pi pi-file-edit"></i> Grievance Content
        </h3>
        <div className="space-y-6">
          <div className="flex flex-col gap-2">
            <label className="text-xs font-bold text-gray-600 uppercase">
              Subject Line *
            </label>
            <InputText
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              placeholder="Briefly describe the issue"
              className="p-inputtext-sm w-full border-gray-300"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-xs font-bold text-gray-600 uppercase">
              Detailed Description *
            </label>
            <InputTextarea
              rows={4}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full border-gray-300 text-sm"
              placeholder="Explain your grievance in detail..."
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-xs font-bold text-gray-600 uppercase">
              Upload Supporting Document
            </label>
            <FileUpload
              mode="basic"
              chooseLabel="Choose File"
              className="p-button-outlined p-button-sm text-[#9333ea]"
            />
            <p className="text-[10px] text-gray-400 italic">
              Max file size: 2MB (PDF, JPEG, PNG)
            </p>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-[#f3e8ff] flex gap-3">
          <Button
            label="Submit Grievance"
            icon="pi pi-check"
            className="bg-[#9333ea] border-none px-8 py-2 transform transition-all hover:scale-105"
            onClick={handleSave}
          />
          <Button
            label="Reset Form"
            className="p-button-outlined p-button-danger px-8 py-2"
          />
        </div>
      </div>
    </PageLayout>
  );
};

export default AddEmployeeGrievance;
