import { useState, useRef } from "react";
import PageLayout from "../../../components/PageLayout";
import { Button } from "primereact/button";
import { Toast } from "primereact/toast";
import Input from "@/ui/shared/Input";
import Dropdown from "@/ui/shared/Dropdown";

const AdministrativeTransfer: React.FC = () => {
  const toast = useRef<Toast>(null);
  const [currentStep, setCurrentStep] = useState(1);
  const [searchId, setSearchId] = useState("");

  const handleSearch = () => {
    if (!searchId.trim()) {
      toast.current?.show({
        severity: "warn",
        summary: "Validation",
        detail: "Please enter a Unique ID",
        life: 3000,
      });
      return;
    }

    setCurrentStep(2);
    toast.current?.show({
      severity: "success",
      summary: "Success",
      detail: "Employee Details Loaded",
      life: 3000,
    });
  };

  const handleSaveTransfer = () => {
    toast.current?.show({
      severity: "success",
      summary: "Saved",
      detail: "Transfer Record Saved Successfully",
      life: 3000,
    });
  };

  const handleClear = () => {
    setSearchId("");
    setCurrentStep(1);
  };

  return (
    <PageLayout title="Administrative Transfer">
      <Toast ref={toast} />

      <div className="space-y-4">
        <div className="bg-white p-6 rounded shadow-sm border border-gray-100">
          <div className="flex flex-col gap-1 max-w-sm">
            <label className="text-sm font-semibold text-gray-600">
              Enter Employee Unique ID
            </label>
            <Input
              value={searchId}
              onChange={(e) => setSearchId(e.target.value)}
              placeholder="Enter Unique ID"
              className="p-inputtext-sm"
            />
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
        </div>

        {currentStep === 2 && (
          <div className="space-y-4">
            <div className="bg-white p-6 rounded shadow-sm border border-gray-100">
              <h3 className="text-md font-bold mb-6 text-gray-700 border-b pb-2 uppercase text-sm">
                Current Office Location
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-x-6 gap-y-4">
                <div className="flex flex-col gap-1">
                  <label className="text-xs font-semibold text-gray-600 uppercase">
                    Employee Name (Unique ID)
                  </label>
                  <Input
                    value={"Raj Saxena- ER00X5"}
                    readOnly
                    disabled
                    className="p-inputtext-sm bg-gray-50"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-xs font-semibold text-gray-600 uppercase">
                    District(Code)
                  </label>
                  <Input
                    value={"(NA)"}
                    readOnly
                    disabled
                    className="p-inputtext-sm bg-gray-50"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-xs font-semibold text-gray-600 uppercase">
                    Block(Code)
                  </label>
                  <Input
                    value={"(NA)"}
                    readOnly
                    disabled
                    className="p-inputtext-sm bg-gray-50"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-xs font-semibold text-gray-600 uppercase">
                    Select Office Name(Code)
                  </label>
                  <Input
                    value={"Head Office-HR009"}
                    readOnly
                    disabled
                    className="p-inputtext-sm bg-gray-50"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-xs font-semibold text-gray-600 uppercase">
                    Designation Type
                  </label>
                  <Input
                    value={"Manager"}
                    readOnly
                    disabled
                    className="p-inputtext-sm bg-gray-50"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-xs font-semibold text-gray-600 uppercase">
                    Designation
                  </label>
                  <Input
                    value={"Professor"}
                    readOnly
                    disabled
                    className="p-inputtext-sm bg-gray-50"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-xs font-semibold text-gray-600 uppercase">
                    Posting Date
                  </label>
                  <Input
                    value={"01/01/2024"}
                    readOnly
                    disabled
                    className="p-inputtext-sm bg-gray-50"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-xs font-semibold text-gray-600 uppercase">
                    Service Duration
                  </label>
                  <Input
                    value={"14"}
                    readOnly
                    disabled
                    className="p-inputtext-sm bg-gray-50"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-xs font-semibold text-gray-600 uppercase">
                    Type Of Post
                  </label>
                  <Input
                    value={"Regular"}
                    readOnly
                    disabled
                    className="p-inputtext-sm bg-gray-50"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-xs font-semibold text-gray-600 uppercase">
                    Date Of Birth
                  </label>
                  <Input
                    value={"22/11/1987"}
                    readOnly
                    disabled
                    className="p-inputtext-sm bg-gray-50"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-xs font-semibold text-gray-600 uppercase">
                    Curent Age(In Years)
                  </label>
                  <Input
                    value={"38"}
                    readOnly
                    disabled
                    className="p-inputtext-sm bg-gray-50"
                  />
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded shadow-sm border border-gray-100">
              <h3 className="text-md font-bold mb-6 text-gray-700 border-b pb-2 uppercase text-sm">
                New Office Location
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-x-6 gap-y-4">
                <div className="flex flex-col gap-1">
                  <label className="text-xs font-semibold text-gray-600 uppercase">
                    Office/School Code
                  </label>
                  <Input placeholder="e.g PC10021" className="p-inputtext-sm" />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-xs font-semibold text-gray-600 uppercase">
                    Select Post Code
                  </label>
                  <Dropdown
                    placeholder="Select"
                    className="p-inputtext-sm w-full"
                    options={[{ label: "Sample Post", value: "P01" }]}
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-xs font-semibold text-gray-600 uppercase">
                    Panel Name
                  </label>
                  <Input
                    readOnly
                    value={"e.g Varg-1"}
                    disabled
                    placeholder="Enter Panel Name"
                    className="p-inputtext-sm bg-gray-50"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-xs font-semibold text-gray-600 uppercase">
                    Vacant Post
                  </label>
                  <Input
                    value={"5"}
                    readOnly
                    placeholder="Enter Vacant Post"
                    disabled
                    className="p-inputtext-sm bg-gray-50"
                  />
                </div>
              </div>

              <div className="flex gap-2 mt-6">
                <Button
                  label="Save"
                  icon="pi pi-save"
                  className="p-button-primary px-6"
                  onClick={handleSaveTransfer}
                />
                <Button
                  label="Clear"
                  icon="pi pi-refresh"
                  className="p-button-outlined p-button-danger px-6"
                  onClick={handleClear}
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </PageLayout>
  );
};

export default AdministrativeTransfer;
