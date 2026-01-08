import React, { useState } from "react";
import PageLayout from "../../../components/PageLayout";
import { Button } from "primereact/button";
import { Dropdown, Input, Table, type TableColumn } from "../../../ui/shared";
import { Calendar } from "primereact/calendar";

interface HostelRow {
  hostelType: string;
  hostelSubType: string;
  districtName: string;
  blockName: string;
  sankulName: string;
  schoolName: string;
  hostelName: string;
  hostelUDISE: string;
  studentType: string;
  capacity: number;
  registeredStudents: number;
  mgmtGroup: string;
  uniqueId: string;
  wardenName: string;
  mobileNo: string;
  joiningDuration: string;
  status: boolean;
}

const HostelRegistration: React.FC = () => {
  const [view, setView] = useState<"form" | "list">("form");
  const [showResults, setShowResults] = useState(false);

  const [formData, setFormData] = useState({
    hostelType: "",
    hostelSubType: "",
    district: "",
    block: "",
    schoolName: "",
    hostelNameEng: "",
    hostelNameHindi: "",
    studentType: "",
    udiseCode: "",
    capacity: null,
    mgmtGroup: "",
    wardenName: "",
    mobile: "",
    designation: "",
    oisCode: "",
    joiningDate: null as Date | null,
    status: true,
  });

  const tableData: HostelRow[] = [
    {
      hostelType: "Hostel - SED",
      hostelSubType: "KGBV-III",
      districtName: "Jabalpur",
      blockName: "Shahpura",
      sankulName: "Shahpura, Principal, GHSS BIJORI(1 to 12) (5022506176)",
      schoolName: "CMRISE GHSS CHARGAWA(1 to 12) (23390612410)",
      hostelName: "KASTURBA GANDHI BALIKA VIDYALAYA CHARGAWA",
      hostelUDISE: "233906SGH10",
      studentType: "Girl",
      capacity: 150,
      registeredStudents: 0,
      mgmtGroup: "NA",
      uniqueId: "AB3847",
      wardenName: "Bindu Gupta",
      mobileNo: "9425860972",
      joiningDuration: "1Y--7M--20D",
      status: true,
    },
  ];

  const columns: TableColumn[] = [
    { field: "hostelType", header: "Hostel Type" },
    { field: "hostelSubType", header: "Hostel Sub Type" },
    { field: "districtName", header: "District Name" },
    { field: "blockName", header: "Block Name" },
    { field: "sankulName", header: "Sankul Name (Code)" },
    { field: "schoolName", header: "School Name (Code)" },
    { field: "hostelName", header: "Hostel Name" },
    { field: "hostelUDISE", header: "Hostel UDISE Code" },
    { field: "studentType", header: "Student Type" },
    { field: "capacity", header: "Capicity" },
    { field: "registeredStudents", header: "No. Of Registered Students" },
  ];

  const handleSearch = () => setShowResults(true);
  const handleClear = () => {
    setShowResults(false);
    setFormData((prev) => ({ ...prev, hostelType: "", hostelSubType: "" }));
  };

  return (
    <PageLayout title="Hostel Registration">
      <div className="flex flex-col gap-4">
        <div className="flex justify-between items-center bg-white  relative">
          <div className="absolute right-2">
            <Button
              label={view === "form" ? "View List" : "Back to Entry Page"}
              icon={view === "form" ? "pi pi-eye" : "pi pi-undo"}
              className="p-button-sm p-2 text-[10px] bg-orange-400 border-none h-6 scale-90"
              onClick={() => {
                setView(view === "form" ? "list" : "form");
                setShowResults(false);
              }}
            />
          </div>
        </div>

        {view === "form" ? (
          <div className="flex flex-col gap-6">
            <div className="border border-orange-200 rounded-xl p-6 relative bg-white mt-4">
              <div className="absolute -top-4 left-6 bg-white px-4 py-1 rounded-lg ">
                <span className="text-blue-600 font-bold text-sm">
                  New Hostel Registration
                </span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-4">
                <div className="flex flex-col gap-1">
                  <label className="text-sm font-medium">
                    Hostel Type<span className="text-red-500">*</span>
                  </label>
                  <Dropdown
                    value={formData.hostelType}
                    options={[{ label: "Hostel - SED", value: "SED" }]}
                    onChange={(e) =>
                      setFormData({ ...formData, hostelType: e.value })
                    }
                    placeholder="Select"
                    className="w-full text-sm"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="  text-sm font-medium">
                    Hostel Sub Type<span className="text-red-500">*</span>
                  </label>
                  <Dropdown
                    placeholder="Select"
                    className="w-full text-sm"
                    options={[]}
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="  text-sm font-medium">
                    District Name<span className="text-red-500">*</span>
                  </label>
                  <Dropdown
                    placeholder="Select"
                    className="w-full text-sm"
                    options={[]}
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="  text-sm font-medium">
                    Block Name<span className="text-red-500">*</span>
                  </label>
                  <Dropdown
                    placeholder="Select"
                    className="w-full text-sm"
                    options={[]}
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="  text-sm font-medium">
                    School Name (Code)<span className="text-red-500">*</span>
                  </label>
                  <Dropdown
                    placeholder="Select"
                    className="w-full text-sm"
                    options={[]}
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="  text-sm font-medium">
                    Hostel Name (In English)
                    <span className="text-red-500">*</span>
                  </label>
                  <Input
                    placeholder="Enter Hostel Name (In English)"
                    className="w-full text-sm"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="  text-sm font-medium">
                    Hostel Name (In हिन्दी)
                    <span className="text-red-500">*</span>
                  </label>
                  <Input
                    placeholder="Enter Hostel Name (In Hindi)"
                    className="w-full text-sm"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="  text-sm font-medium">
                    Student Type<span className="text-red-500">*</span>
                  </label>
                  <Dropdown
                    placeholder="Select"
                    className="w-full text-sm"
                    options={[]}
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="  text-sm font-medium">
                    Hostel UDISE Code<span className="text-red-500">*</span>
                  </label>
                  <Input
                    placeholder="Enter Hostel UDISE Code"
                    className="w-full text-sm bg-gray-100"
                    readOnly
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="  text-sm font-medium">
                    Hostel Capicity (No. Of Students)
                    <span className="text-red-500">*</span>
                  </label>
                  <Dropdown
                    placeholder="Select"
                    className="w-full text-sm"
                    options={[]}
                  />
                </div>
              </div>
            </div>

            <div className="border border-orange-200 rounded-xl p-6 relative bg-white">
              <div className="absolute -top-4 left-6 bg-white px-4 py-1 rounded-lg">
                <span className="text-blue-600 font-bold text-sm">
                  Warden Information
                </span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-4">
                <div className="flex flex-col gap-1">
                  <label className="  text-sm font-medium">
                    School Management Group Details
                    <span className="text-red-500">*</span>
                  </label>
                  <Dropdown
                    placeholder="Select"
                    className="w-full text-sm"
                    options={[]}
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="  text-sm font-medium">
                    Warden Name<span className="text-red-500">*</span>
                  </label>
                  <Input placeholder="Warden Name" className="w-full text-sm" />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="  text-sm font-medium">
                    Mobile No.<span className="text-red-500">*</span>
                  </label>
                  <Input placeholder="Mobile No." className="w-full text-sm" />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="  text-sm font-medium">
                    Designation<span className="text-red-500">*</span>
                  </label>
                  <Dropdown
                    placeholder="Select"
                    className="w-full text-sm"
                    options={[]}
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="  text-sm font-medium">
                    OIS Code<span className="text-red-500">*</span>
                  </label>
                  <Input placeholder="OIS Code" className="w-full text-sm" />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="  text-sm font-medium">
                    Current Posting OIS
                  </label>
                  <Input
                    placeholder="Posting OIS"
                    className="w-full text-sm bg-gray-100"
                    readOnly
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="  text-sm font-medium">
                    Date of Hostel Joining
                  </label>
                  <Calendar
                    placeholder="DD/MM/YYYY"
                    showIcon
                    className="w-full text-sm"
                  />
                </div>
                <div className="flex items-center gap-2 mt-4">
                  <input
                    type="checkbox"
                    checked={formData.status}
                    onChange={(e) =>
                      setFormData({ ...formData, status: e.target.checked })
                    }
                  />
                  <label className="  text-sm font-medium">
                    Status (Active/InActive)
                  </label>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <Button
                label="Save"
                className="px-10 bg-[#00bfa5] border-none text-sm"
              />
              <Button
                label="Clear"
                className="p-button-danger p-button-outlined px-10 text-sm border-pink-200 text-pink-500"
              />
            </div>
            <p className="text-[#ff0000] font-bold text-xs">
              Note: All Asterisk (*) Marked Fields Are Mandatory
            </p>
          </div>
        ) : (
          <div className="flex flex-col gap-4">
            <div className="border border-orange-200 rounded-xl p-6 relative bg-white mt-4">
              <div className="absolute -top-4 left-6 bg-white px-4 py-1 rounded-lg ">
                <span className="text-blue-600 font-bold text-sm">
                  Hostel Information
                </span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-4">
                <div className="flex flex-col gap-1">
                  <label className="  text-sm font-medium">
                    Hostel Type<span className="text-red-500">*</span>
                  </label>
                  <Dropdown
                    value={formData.hostelType}
                    options={[{ label: "Hostel - SED", value: "Hostel - SED" }]}
                    onChange={(e) =>
                      setFormData({ ...formData, hostelType: e.value })
                    }
                    placeholder="Select"
                    className="w-full text-sm"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="  text-sm font-medium">
                    Hostel Sub Type<span className="text-red-500">*</span>
                  </label>
                  <Dropdown
                    value={formData.hostelSubType}
                    options={[
                      { label: "KGBV-III (State Budget)", value: "KGBV-III" },
                    ]}
                    onChange={(e) =>
                      setFormData({ ...formData, hostelSubType: e.value })
                    }
                    placeholder="Select"
                    className="w-full text-sm"
                  />
                </div>
              </div>
              <div className="flex gap-4 mt-8 pt-4 ">
                <Button
                  label="Search"
                  onClick={handleSearch}
                  className="px-10 bg-[#00bfa5] border-none text-sm"
                />
                <Button
                  label="Clear"
                  onClick={handleClear}
                  className="p-button-danger p-button-outlined px-10 text-sm border-pink-200 text-pink-500"
                />
              </div>
              <div className="mt-4">
                <p className="text-[#ff0000] font-bold text-xs ">
                  Note: All Asterisk (*) Marked Fields Are Mandatory
                </p>
              </div>
            </div>

            {showResults && (
              <div className="bg-white p-4 rounded-xl border border-orange-200 shadow-sm overflow-x-auto">
                <div className="flex justify-between items-center mb-4">
                  <div className="flex items-center gap-2 text-xs"></div>
                  <div className="flex gap-2">
                    <Button
                      label="Export To Excel"
                      icon="pi pi-file-excel"
                      className="p-button-outlined p-button-secondary p-button-sm text-xs"
                    />
                    <span className="p-input-icon-left">
                      <Input
                        placeholder="Search..."
                        className="p-inputtext-sm text-xs"
                      />
                    </span>
                  </div>
                </div>

                <Table
                  columns={columns}
                  data={tableData}
                  className="custom-hostel-table"
                />

                <div className="flex justify-between items-center mt-4 text-[10px] text-gray-500">
                  <span>Page 1 of 1 (1 items)</span>
                  <div className="flex items-center gap-1">
                    <Button
                      icon="pi pi-chevron-left"
                      className="p-button-text p-button-sm p-0"
                    />
                    <span className="px-2 py-1 border rounded bg-white">1</span>
                    <span>of 1</span>
                    <Button
                      icon="pi pi-chevron-right"
                      className="p-button-text p-button-sm p-0"
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      <div className="fixed bottom-6 right-6">
        <Button
          icon="pi pi-arrow-up"
          className="rounded-md shadow-lg p-2"
          style={{ backgroundColor: "#f97316", border: "none" }}
        />
      </div>

      <style>{`
                .custom-hostel-table .p-datatable-thead > tr > th {
              
                    font-size: 15px;
                    padding: 15px;
                    white-space: nowrap;
                }
                .custom-hostel-table .p-datatable-tbody > tr > td {
                    font-size: 13px;
                    padding: 12px;
                    color: #4b5563;
                }
            `}</style>
    </PageLayout>
  );
};

export default HostelRegistration;
