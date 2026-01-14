import React, { useState } from "react";
import PageLayout from "@/components/PageLayout";
import Dropdown, { type DropdownOption } from "@/ui/shared/Dropdown";
import Input, { DateInput, NumberInput } from "@/ui/shared/Input";
import Table from "@/ui/shared/Table";
import { Button } from "primereact/button";

interface EmployeeRow {
  employeeName: string;
  currentGradeLevel: string;
  currentBasic: number;
  newGradeLevel: string;
  newBasicPay: number;
}

const AddIncrement: React.FC = () => {
  const [oisType, setOisType] = useState("");
  const [officeType, setOfficeType] = useState("");
  const [officeName, setOfficeName] = useState("");
  const [postType, setPostType] = useState("");
  const [orderNo, setOrderNo] = useState("");
  const [orderDate, setOrderDate] = useState<Date | null>(null);
  const [effectiveDate, setEffectiveDate] = useState<Date | null>(null);
  const [percentValue, setPercentValue] = useState<number>(0);

  const [employeeName, setEmployeeName] = useState("");
  const [currentGradeLevel, setCurrentGradeLevel] = useState("");
  const [currentBasic, setCurrentBasic] = useState<number>(0);
  const [newBasicPay, setNewBasicPay] = useState<number>(0);

  const [employeeList, setEmployeeList] = useState<EmployeeRow[]>([
    {
      employeeName: "EA3108 - Gajanand Suryawanshi",
      currentGradeLevel: "Level 10",
      currentBasic: 35000,
      newGradeLevel: "Level 11",
      newBasicPay: 36750,
    },
    {
      employeeName: "EA2102 - Amit Kumar",
      currentGradeLevel: "Level 9",
      currentBasic: 32000,
      newGradeLevel: "Level 10",
      newBasicPay: 33600,
    },
  ]);

  const oisOptions: DropdownOption[] = [
    { label: "Office", value: "Office" },
    { label: "School", value: "School" },
  ];

  const officeTypeOptions: DropdownOption[] = [
    { label: "DPI (06)", value: "DPI (06)" },
    { label: "DEO (01)", value: "DEO (01)" },
  ];

  const officeNameOptions: DropdownOption[] = [
    { label: "Bhopal Office (101)", value: "Bhopal Office (101)" },
    { label: "Indore Office (102)", value: "Indore Office (102)" },
  ];

  const postTypeOptions: DropdownOption[] = [
    { label: "Regular", value: "Regular" },
    { label: "Contract", value: "Contract" },
  ];

  const employeeOptions: DropdownOption[] = [
    { label: "EA3108 - Gajanand Suryawanshi", value: "EA3108 - Gajanand Suryawanshi" },
    { label: "EA2102 - Amit Kumar", value: "EA2102 - Amit Kumar" },
    { label: "EA1101 - Pooja Verma", value: "EA1101 - Pooja Verma" },
  ];

  const gradeLevelOptions: DropdownOption[] = [
    { label: "Level 7", value: "Level 7" },
    { label: "Level 8", value: "Level 8" },
    { label: "Level 9", value: "Level 9" },
    { label: "Level 10", value: "Level 10" },
    { label: "Level 11", value: "Level 11" },
  ];

  const basicPayOptions: DropdownOption[] = [
    { label: "28000", value: 28000 },
    { label: "30000", value: 30000 },
    { label: "32000", value: 32000 },
    { label: "35000", value: 35000 },
    { label: "40000", value: 40000 },
  ];

  const handleAddEmployee = () => {
    if (!employeeName) return;

    const calculatedNewBasic =
      currentBasic && percentValue
        ? Math.round(currentBasic + (currentBasic * percentValue) / 100)
        : newBasicPay;

    const newRow: EmployeeRow = {
      employeeName,
      currentGradeLevel: currentGradeLevel || "Level 9",
      currentBasic: currentBasic || 0,
      newGradeLevel: currentGradeLevel || "Level 10",
      newBasicPay: calculatedNewBasic || 0,
    };

    setEmployeeList((prev) => [newRow, ...prev]);

    setEmployeeName("");
    setCurrentGradeLevel("");
    setCurrentBasic(0);
    setNewBasicPay(0);
  };

  const handleRemoveRow = (row: EmployeeRow) => {
    setEmployeeList((prev) => prev.filter((x) => x !== row));
  };

  const columns = [
    { field: "employeeName", header: "Employee Name (Code)", sortable: true, style: { whiteSpace: "nowrap" } },
    { field: "currentGradeLevel", header: "Current Grade Level", sortable: true, style: { whiteSpace: "nowrap" } },
    { field: "currentBasic", header: "Current Basic", sortable: true, style: { whiteSpace: "nowrap" } },
    { field: "newGradeLevel", header: "New Grade Level", sortable: true, style: { whiteSpace: "nowrap" } },
    { field: "newBasicPay", header: "New Basic Pay", sortable: true, style: { whiteSpace: "nowrap" } },
    {
      field: "action",
      header: "Action",
      style: { whiteSpace: "nowrap" },
      body: (row: EmployeeRow) => (
        <Button
          icon="pi pi-trash"
          className="p-button-sm bg-red-500 border-none"
          type="button"
          onClick={() => handleRemoveRow(row)}
        />
      ),
    },
  ];

  return (
    <PageLayout title="Add Increment">
      <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm space-y-6">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-bold text-blue-700">Add Increment</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Dropdown
            label="Select OIS Type"
            required
            options={oisOptions}
            value={oisType}
            onChange={(e) => setOisType(e.value)}
            placeholder="Select"
          />
          <Dropdown
            label="Select Office Type (Code)"
            required
            options={officeTypeOptions}
            value={officeType}
            onChange={(e) => setOfficeType(e.value)}
            placeholder="Select"
          />
          <Dropdown
            label="Select Office Name (Code)"
            required
            options={officeNameOptions}
            value={officeName}
            onChange={(e) => setOfficeName(e.value)}
            placeholder="Select"
          />
          <Dropdown
            label="Select Post Type"
            required
            options={postTypeOptions}
            value={postType}
            onChange={(e) => setPostType(e.value)}
            placeholder="Select"
          />

          <Input
            label="Enter Order No."
            required
            placeholder="Enter Order No."
            value={orderNo}
            onChange={(e) => setOrderNo(e.target.value)}
          />
          <DateInput
            label="Select Order Date"
            required
            value={orderDate}
            onChange={(e) => setOrderDate(e.value as Date)}
            placeholder="dd-mm-yyyy"
          />
          <DateInput
            label="Select Effective Date"
            required
            value={effectiveDate}
            onChange={(e) => setEffectiveDate(e.value as Date)}
            placeholder="dd-mm-yyyy"
          />
          <NumberInput
            label="Enter Percent Value"
            required
            value={percentValue}
            onValueChange={(e) => setPercentValue(e.value || 0)}
            placeholder="0"
            min={0}
            max={100}
          />
        </div>

         <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm space-y-6">
          <h3 className="text-lg font-bold text-blue-700">Current Pay Scale</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Dropdown
              label="Select Employee Name (Code)"
              required
              options={employeeOptions}
              value={employeeName}
              onChange={(e) => setEmployeeName(e.value)}
              placeholder="Select"
            />
            <Dropdown
              label="Select Current Grade Level"
              required
              options={gradeLevelOptions}
              value={currentGradeLevel}
              onChange={(e) => setCurrentGradeLevel(e.value)}
              placeholder="Select"
            />
            <Dropdown
              label="Select Current Basic"
              required
              options={basicPayOptions}
              value={currentBasic}
              onChange={(e) => setCurrentBasic(e.value)}
              placeholder="Select"
            />
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm space-y-6">
          <h3 className="text-lg font-bold text-blue-700">New Pay Scale</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Dropdown
              label="Select New Basic Pay"
              required
              options={basicPayOptions}
              value={newBasicPay}
              onChange={(e) => setNewBasicPay(e.value)}
              placeholder="Select"
            />
          </div>
        </div>

        <div className="flex justify-start">
          <Button label="Add" className="bg-blue-600 px-10" type="button" onClick={handleAddEmployee} />
        </div>

        <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-4">
          <h3 className="text-lg font-bold text-blue-700 mb-4">Employee List</h3>
          <Table
            columns={columns}
            data={employeeList}
            showPagination
            rowsPerPage={10}
            {...{ format: "add_increment" }}
          />
        </div>

        <div className="flex gap-4 mt-6">
          <Button label="Save" className="bg-green-600 px-8" type="button" />
          <Button label="Clear" severity="danger" className="px-8" type="button" />
        </div>
      </div>
    </PageLayout>
  );
};

export default AddIncrement;
