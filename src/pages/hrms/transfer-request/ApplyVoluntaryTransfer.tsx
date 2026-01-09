import { useState, useRef } from "react";
import PageLayout from "../../../components/PageLayout";
import { Button } from "primereact/button";
import { Toast } from "primereact/toast";
import { RadioButton } from "primereact/radiobutton";
import Input from "@/ui/shared/Input";
import Dropdown from "@/ui/shared/Dropdown";

const ApplyVoluntaryTransfer: React.FC = () => {
  const toast = useRef<Toast>(null);
  const [illnesType, setIllnesType] = useState<string | null>(null);
  const [disability, setDisability] = useState<string | null>(null);
  const [disabilityPercentage, setDisabilityPercentage] = useState<
    string | null
  >(null);

  // Form State
  const [formData, setFormData] = useState({
    // Section 1: Employee Info
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

    // Section 2: Reasons (Conditional)
    seriousIllness: "No",
    criticalIllnessType: null,
    statusOfDisability: "No",
    disabilityType: null,
    disabilityPercentage: null,
    spouseInService: "No",
    spouseName: "",
    spousePost: "",
    spouseDepartment: "",
    spouseOfficeAddress: "",
    reasonSeekingTransfer: "",

    // Section 3: Locations
    officeCode: "",
    postCode: null,
  });

  const handleSave = () => {
    toast.current?.show({
      severity: "success",
      summary: "Success",
      detail: "Transfer Application Saved",
      life: 3000,
    });
  };

  const handleClear = () => {
    // Reset Logic here
    setDisability(null);
    setDisabilityPercentage(null);
    setIllnesType(null);
  };

  const illnessOptions = [
    { label: "Critical Illness", value: "CI" },
    { label: "Stroke", value: "STK" },
    { label: "CA", value: "CA" },
    { label: "JH", value: "JH" },
    { label: "Illness", value: "Illness" },
  ];
  const disabilityOptions = [
    { label: "Hearing Impairment", value: "HI" },
    { label: "HandiCapped", value: "HC" },
    { label: "Vision Impairment", value: "VI" },
  ];
  const disabilityPercentOptions = [
    { label: "40-50", value: "low" },
    { label: "51-60", value: "high" },
  ];

  return (
    <PageLayout title="Apply Voluntary Transfer">
      <Toast ref={toast} />
      <div className="space-y-6">
        {/* SECTION 1: Apply Voluntary Transfer (Employee Info) */}
        <div className="bg-white p-6 rounded shadow-sm border border-gray-100">
          <h3 className="text-md font-bold mb-6 text-gray-600 uppercase border-b pb-2">
            Apply Voluntary Transfer
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-x-6 gap-y-4">
            <div className="flex flex-col gap-1">
              <label className="text-xs font-semibold text-gray-600 uppercase">
                Enter Employee Name (Unique ID)
              </label>
              <Input
                placeholder="Enter Employee Name (Unique ID)"
                className="p-inputtext-sm"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-xs font-semibold text-gray-600 uppercase">
                Enter Unique Id
              </label>
              <Input placeholder="Enter Unique Id" className="p-inputtext-sm" />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-xs font-semibold text-gray-600 uppercase">
                Enter Designation
              </label>
              <Input
                placeholder="Enter Designation"
                className="p-inputtext-sm"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-xs font-semibold text-gray-600 uppercase">
                Enter District Name (Code)
              </label>
              <Input
                placeholder="Enter District Name (Code)"
                className="p-inputtext-sm"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-xs font-semibold text-gray-600 uppercase">
                Enter Block Name (Code)
              </label>
              <Input
                placeholder="Enter Block Name (Code)"
                className="p-inputtext-sm"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-xs font-semibold text-gray-600 uppercase">
                Enter AISHE Code
              </label>
              <Input
                placeholder="Enter AISHE Code"
                className="p-inputtext-sm"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-xs font-semibold text-gray-600 uppercase">
                Enter University Name (Code)
              </label>
              <Input
                placeholder="Enter University Name (Code)"
                className="p-inputtext-sm"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-xs font-semibold text-gray-600 uppercase">
                Enter Area (Urban/Rural)
              </label>
              <Input
                placeholder="Enter Area (Urban/Rural)"
                className="p-inputtext-sm"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-xs font-semibold text-gray-600 uppercase">
                Enter Panel Name
              </label>
              <Input
                placeholder="Enter Panel Name"
                className="p-inputtext-sm"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-xs font-semibold text-gray-600 uppercase">
                Enter Date Of Birth
              </label>
              <Input
                placeholder="Enter Date Of Birth"
                className="p-inputtext-sm"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-xs font-semibold text-gray-600 uppercase">
                Enter Current Age (In Years)
              </label>
              <Input
                placeholder="Enter Current Age (In Years)"
                className="p-inputtext-sm"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-xs font-semibold text-gray-600 uppercase">
                Enter Professional Qualification
              </label>
              <Input
                placeholder="Enter Professional Qualification"
                className="p-inputtext-sm"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-xs font-semibold text-gray-600 uppercase">
                Enter Posting Date in Current Institutions
              </label>
              <Input
                placeholder="Enter Posting Date in Current Institutions"
                className="p-inputtext-sm"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-xs font-semibold text-gray-600 uppercase">
                Enter Service Duration in Current Organization (In Years)
              </label>
              <Input
                placeholder="Enter Service Duration"
                className="p-inputtext-sm"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-xs font-semibold text-gray-600 uppercase">
                Enter Type of Post
              </label>
              <Input
                placeholder="Enter Type of Post"
                className="p-inputtext-sm"
              />
            </div>
          </div>
        </div>

        {/* SECTION 2: Reason For Voluntary Transfer (Dynamic) */}
        <div className="bg-white p-6 rounded shadow-sm border border-gray-100">
          <h3 className="text-md font-bold mb-6 text-gray-600 uppercase border-b pb-2">
            Reason For Voluntary Transfer
          </h3>

          <div className="space-y-6">
            {/* Serious Illness Section */}
            <div>
              <label className="text-xs font-semibold text-gray-600 block mb-2">
                Are you suffering from serious illness (if yes give description)
              </label>
              <div className="flex gap-4 items-center mb-2">
                <div className="flex align-items-center gap-1">
                  <RadioButton
                    inputId="illness1"
                    value="Yes"
                    onChange={(e) =>
                      setFormData({ ...formData, seriousIllness: e.value })
                    }
                    checked={formData.seriousIllness === "Yes"}
                  />
                  <label htmlFor="illness1" className="text-sm">
                    Yes
                  </label>
                </div>
                <div className="flex align-items-center gap-1">
                  <RadioButton
                    inputId="illness2"
                    value="No"
                    onChange={(e) =>
                      setFormData({ ...formData, seriousIllness: e.value })
                    }
                    checked={formData.seriousIllness === "No"}
                  />
                  <label htmlFor="illness2" className="text-sm">
                    No
                  </label>
                </div>
              </div>
              {formData.seriousIllness === "Yes" && (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-2">
                  <div className="flex flex-col gap-1">
                    <label className="text-xs font-semibold">
                      Select Type of Critical Illness
                    </label>
                    <Dropdown
                      placeholder="Select"
                      className="p-inputtext-sm"
                      options={illnessOptions}
                      value={illnesType}
                      onChange={(e) => setIllnesType(e.value)}
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <label className="text-xs font-semibold">
                      Illness Certificate from the Medical Board
                    </label>
                    <div className="flex border rounded p-1">
                      <input type="file" className="text-xs" />
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Disability Section */}
            <div>
              <label className="text-xs font-semibold text-gray-600 block mb-2">
                Status of Disability (Yes Or No) If Yes, Type and Percentage of
                Disability (Attach Certificate)
              </label>
              <div className="flex gap-4 items-center mb-2">
                <div className="flex align-items-center gap-1">
                  <RadioButton
                    inputId="dis1"
                    value="Yes"
                    onChange={(e) =>
                      setFormData({ ...formData, statusOfDisability: e.value })
                    }
                    checked={formData.statusOfDisability === "Yes"}
                  />
                  <label htmlFor="dis1" className="text-sm">
                    Yes
                  </label>
                </div>
                <div className="flex align-items-center gap-1">
                  <RadioButton
                    inputId="dis2"
                    value="No"
                    onChange={(e) =>
                      setFormData({ ...formData, statusOfDisability: e.value })
                    }
                    checked={formData.statusOfDisability === "No"}
                  />
                  <label htmlFor="dis2" className="text-sm">
                    No
                  </label>
                </div>
              </div>
              {formData.statusOfDisability === "Yes" && (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-2">
                  <div className="flex flex-col gap-1">
                    <label className="text-xs font-semibold">
                      Select Type of Disability
                    </label>
                    <Dropdown
                      placeholder="Select"
                      className="p-inputtext-sm"
                      options={disabilityOptions}
                      value={disability}
                      onChange={(e) => setDisability(e.value)}
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <label className="text-xs font-semibold">
                      Select Disability Percentage
                    </label>
                    <Dropdown
                      placeholder="Select"
                      className="p-inputtext-sm"
                      options={disabilityPercentOptions}
                      value={disabilityPercentage}
                      onChange={(e) => setDisabilityPercentage(e.value)}
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <label className="text-xs font-semibold">
                      Disability Certificate from the Medical Board
                    </label>
                    <div className="flex border rounded p-1">
                      <input type="file" className="text-xs" />
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Spouse Section */}
            <div>
              <label className="text-xs font-semibold text-gray-600 block mb-2">
                Whether Spouse is in Service? (If yes, give details)
              </label>
              <div className="flex gap-4 items-center mb-2">
                <div className="flex align-items-center gap-1">
                  <RadioButton
                    inputId="sp1"
                    value="Yes"
                    onChange={(e) =>
                      setFormData({ ...formData, spouseInService: e.value })
                    }
                    checked={formData.spouseInService === "Yes"}
                  />
                  <label htmlFor="sp1" className="text-sm">
                    Yes
                  </label>
                </div>
                <div className="flex align-items-center gap-1">
                  <RadioButton
                    inputId="sp2"
                    value="No"
                    onChange={(e) =>
                      setFormData({ ...formData, spouseInService: e.value })
                    }
                    checked={formData.spouseInService === "No"}
                  />
                  <label htmlFor="sp2" className="text-sm">
                    No
                  </label>
                </div>
              </div>
              {formData.spouseInService === "Yes" && (
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-2">
                  <Input
                    placeholder="Enter Spouse Name"
                    className="p-inputtext-sm"
                    label="Enter Spouse Name"
                  />
                  <Input
                    placeholder="Enter Spouse Post"
                    className="p-inputtext-sm"
                    label="Enter Spouse Post"
                  />
                  <Input
                    placeholder="Enter Spouse Department"
                    className="p-inputtext-sm"
                    label="Enter Spouse Department"
                  />
                  <Input
                    placeholder="Enter Spouse Office Address"
                    className="p-inputtext-sm"
                    label="Enter Spouse Office Address"
                  />
                </div>
              )}
            </div>

            {/* Seeking Transfer Reason */}
            <div className="flex flex-col gap-1">
              <label className="text-xs font-semibold text-gray-600">
                Enter Reason for Seeking Transfer
              </label>
              <Input
                placeholder="Enter Reason for Seeking Transfer"
                className="w-full p-inputtext-sm"
              />
            </div>
          </div>
        </div>

        {/* SECTION 3: Select Locations */}
        <div className="bg-white p-6 rounded shadow-sm border border-gray-100">
          <h3 className="text-md font-bold mb-6 text-gray-600 uppercase border-b pb-2">
            Select Locations (Minimum 1, Maximum 20)
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-end">
            <div className="flex flex-col gap-1">
              <label className="text-xs font-semibold text-gray-600">
                Enter Office/Institute/College Code
              </label>
              <Input
                placeholder="Enter Office/Institute/College Code"
                className="p-inputtext-sm"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-xs font-semibold text-gray-600">
                Select Post (Code)
              </label>
              <Dropdown
                placeholder="Select"
                className="w-full p-inputtext-sm"
                options={[]}
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-xs font-semibold text-gray-600">
                Panel Name
              </label>
              <Input
                placeholder="Panel Name"
                disabled
                className="bg-gray-100 p-inputtext-sm"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-xs font-semibold text-gray-600">
                Vacant Post
              </label>
              <Input
                placeholder="Vacant Post"
                disabled
                className="bg-gray-100 p-inputtext-sm"
              />
            </div>
          </div>

          <div className="flex gap-2 mt-6">
            <Button
              label="Save"
              icon="pi pi-save"
              className="p-button-primary px-6"
              onClick={handleSave}
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
    </PageLayout>
  );
};

export default ApplyVoluntaryTransfer;
