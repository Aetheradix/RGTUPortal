import { useState, useRef } from "react";
import PageLayout from "../../../components/PageLayout";
import { Button } from "primereact/button";
import { Toast } from "primereact/toast";
import Input from "@/ui/shared/Input";

const ApplyMutualTransfer: React.FC = () => {
  const toast = useRef<Toast>(null);

  const [formData, setFormData] = useState({
    employeeName: "",
    uniqueId: "",
    designation: "",
    districtName: "",
    blockName: "",
    aisheCode: "",
    universityName: "",
    area: "",
    panelName: "",
    dob: "",
    age: "",
    professionalQualification: "",
    postingDate: "",
    serviceDuration: "",
    typeOfPost: "",
    secondEmployeeId: "",
  });

  const handleSearch = () => {
    toast.current?.show({
      severity: "info",
      summary: "Searching",
      detail: "Searching for employee details...",
      life: 3000,
    });
  };

  const handleClear = () => {
    setFormData({
      employeeName: "",
      uniqueId: "",
      designation: "",
      districtName: "",
      blockName: "",
      aisheCode: "",
      universityName: "",
      area: "",
      panelName: "",
      dob: "",
      age: "",
      professionalQualification: "",
      postingDate: "",
      serviceDuration: "",
      typeOfPost: "",
      secondEmployeeId: "",
    });
  };

  return (
    <PageLayout title="Apply Mutual Transfer">
      <Toast ref={toast} />
      <div className="bg-white p-6 rounded shadow-sm border border-gray-100">
        {/* Section 1: Employee Personal Information */}
        <h3 className="text-md font-bold mb-6 text-gray-600 uppercase border-b pb-2">
          Employee Personal Information
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-x-6 gap-y-4 mb-8">
          <div className="flex flex-col gap-1">
            <label className="text-xs font-semibold text-gray-600">
              Employee Name (Unique ID)
            </label>
            <Input
              placeholder="Enter Employee Name (Unique ID)"
              className="p-inputtext-sm"
              value={formData.employeeName}
              onChange={(e) =>
                setFormData({ ...formData, employeeName: e.target.value })
              }
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-xs font-semibold text-gray-600">
              Unique Id
            </label>
            <Input
              placeholder="Enter Unique Id"
              className="p-inputtext-sm"
              value={formData.uniqueId}
              onChange={(e) =>
                setFormData({ ...formData, uniqueId: e.target.value })
              }
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-xs font-semibold text-gray-600">
              Designation
            </label>
            <Input
              placeholder="Enter Designation"
              className="p-inputtext-sm"
              value={formData.designation}
              onChange={(e) =>
                setFormData({ ...formData, designation: e.target.value })
              }
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-xs font-semibold text-gray-600">
              District Name (Code)
            </label>
            <Input
              placeholder="Enter District Name (Code)"
              className="p-inputtext-sm"
              value={formData.districtName}
              onChange={(e) =>
                setFormData({ ...formData, districtName: e.target.value })
              }
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-xs font-semibold text-gray-600">
              Block Name (Code)
            </label>
            <Input
              placeholder="Enter Block Name (Code)"
              className="p-inputtext-sm"
              value={formData.blockName}
              onChange={(e) =>
                setFormData({ ...formData, blockName: e.target.value })
              }
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-xs font-semibold text-gray-600">
              AISHE Code
            </label>
            <Input
              placeholder="Enter AISHE Code"
              className="p-inputtext-sm"
              value={formData.aisheCode}
              onChange={(e) =>
                setFormData({ ...formData, aisheCode: e.target.value })
              }
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-xs font-semibold text-gray-600">
              University Name (Code)
            </label>
            <Input
              placeholder="Enter University Name (Code)"
              className="p-inputtext-sm"
              value={formData.universityName}
              onChange={(e) =>
                setFormData({ ...formData, universityName: e.target.value })
              }
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-xs font-semibold text-gray-600">
              Area (Urban/Rural)
            </label>
            <Input
              placeholder="Enter Area (Urban/Rural)"
              className="p-inputtext-sm"
              value={formData.area}
              onChange={(e) =>
                setFormData({ ...formData, area: e.target.value })
              }
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-xs font-semibold text-gray-600">
              Panel Name
            </label>
            <Input
              placeholder="Enter Panel Name"
              className="p-inputtext-sm"
              value={formData.panelName}
              onChange={(e) =>
                setFormData({ ...formData, panelName: e.target.value })
              }
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-xs font-semibold text-gray-600">
              Date Of Birth
            </label>
            <Input
              placeholder="Enter Date Of Birth"
              className="p-inputtext-sm"
              value={formData.dob}
              onChange={(e) =>
                setFormData({ ...formData, dob: e.target.value })
              }
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-xs font-semibold text-gray-600">
              Age (Current Age In Years)
            </label>
            <Input
              placeholder="Enter Age (Current Age In Years)"
              className="p-inputtext-sm"
              value={formData.age}
              onChange={(e) =>
                setFormData({ ...formData, age: e.target.value })
              }
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-xs font-semibold text-gray-600">
              Professional Qualification
            </label>
            <Input
              placeholder="Enter Professional Qualification"
              className="p-inputtext-sm"
              value={formData.professionalQualification}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  professionalQualification: e.target.value,
                })
              }
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-xs font-semibold text-gray-600">
              Posting Date in Current Institutions
            </label>
            <Input
              placeholder="Enter Posting Date in Current Institutions"
              className="p-inputtext-sm"
              value={formData.postingDate}
              onChange={(e) =>
                setFormData({ ...formData, postingDate: e.target.value })
              }
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-xs font-semibold text-gray-600">
              Total Service Duration in Current Organization(In Years)
            </label>
            <Input
              placeholder="Enter Total Service Duration in Current Organization(In Years)"
              className="p-inputtext-sm"
              value={formData.serviceDuration}
              onChange={(e) =>
                setFormData({ ...formData, serviceDuration: e.target.value })
              }
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-xs font-semibold text-gray-600">
              Type of Post
            </label>
            <Input
              placeholder="Enter Type of Post"
              className="p-inputtext-sm"
              value={formData.typeOfPost}
              onChange={(e) =>
                setFormData({ ...formData, typeOfPost: e.target.value })
              }
            />
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded shadow-sm border border-gray-100 mt-4">
        <h3 className="text-md font-bold mb-6 text-gray-600 uppercase border-b pb-2">
          Unique ID Of The Second Employee Is Required For Mutual Transfer
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="flex flex-col gap-1">
            <label className="text-xs font-semibold text-gray-600">
              Enter Unique Id With Whom Mutual Transfer is Desired
            </label>
            <Input
              placeholder="Enter Unique Id With Whom Mutual Transfer is Desired"
              className="p-inputtext-sm"
              value={formData.secondEmployeeId}
              onChange={(e) =>
                setFormData({ ...formData, secondEmployeeId: e.target.value })
              }
            />
          </div>
        </div>
      </div>
      <div className="flex gap-2 mt-6">
        <Button
          label="Search"
          icon="pi pi-search"
          className="p-button-primary px-6"
          onClick={handleSearch}
        />
        <Button
          label="Clear"
          icon="pi pi-refresh"
          className="p-button-outlined p-button-danger px-6"
          onClick={handleClear}
        />
      </div>
    </PageLayout>
  );
};

export default ApplyMutualTransfer;
