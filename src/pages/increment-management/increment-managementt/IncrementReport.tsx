import React, { useMemo, useState } from "react";
import PageLayout from "@/components/PageLayout";
import Dropdown, { type DropdownOption } from "@/ui/shared/Dropdown";
import { DateInput } from "@/ui/shared/Input";
import Table from "@/ui/shared/Table";
import { Button } from "primereact/button";

interface IncrementReportRow {
  employeeName: string;
  employeeCode: string;
  officeType: string;
  officeName: string;
  postType: string;
  orderNo: string;
  orderDate: string;
  effectiveDate: string;
  percentValue: number;
  currentBasic: number;
  newBasic: number;
}

const IncrementReport: React.FC = () => {
  const [oisType, setOisType] = useState<string | number | boolean | null>(null);
  const [officeType, setOfficeType] = useState<string | number | boolean | null>(null);
  const [officeName, setOfficeName] = useState<string | number | boolean | null>(null);
  const [fromDate, setFromDate] = useState<Date | null>(null);
  const [toDate, setToDate] = useState<Date | null>(null);

  const [showList, setShowList] = useState(false);

  const oisOptions: DropdownOption[] = useMemo(
    () => [
      { label: "Office", value: "Office" },
      { label: "School", value: "School" },
    ],
    []
  );

  const officeTypeOptions: DropdownOption[] = useMemo(
    () => [
      { label: "DPI (06)", value: "DPI (06)" },
      { label: "DEO (01)", value: "DEO (01)" },
    ],
    []
  );

  const officeNameOptions: DropdownOption[] = useMemo(
    () => [
      { label: "Bhopal Office (101)", value: "Bhopal Office (101)" },
      { label: "Indore Office (102)", value: "Indore Office (102)" },
      { label: "Gwalior Office (103)", value: "Gwalior Office (103)" },
    ],
    []
  );

  const allData: IncrementReportRow[] = useMemo(
    () => [
      {
        employeeName: "Gajanand Suryawanshi",
        employeeCode: "EA3108",
        officeType: "DPI (06)",
        officeName: "Bhopal Office (101)",
        postType: "Regular",
        orderNo: "INC-2026-001",
        orderDate: "01-01-2026",
        effectiveDate: "01-01-2026",
        percentValue: 5,
        currentBasic: 35000,
        newBasic: 36750,
      },
      {
        employeeName: "Amit Kumar",
        employeeCode: "EA2102",
        officeType: "DEO (01)",
        officeName: "Indore Office (102)",
        postType: "Regular",
        orderNo: "INC-2026-002",
        orderDate: "10-01-2026",
        effectiveDate: "12-01-2026",
        percentValue: 4,
        currentBasic: 32000,
        newBasic: 33280,
      },
      {
        employeeName: "Pooja Verma",
        employeeCode: "EA1101",
        officeType: "DPI (06)",
        officeName: "Gwalior Office (103)",
        postType: "Contract",
        orderNo: "INC-2026-003",
        orderDate: "15-01-2026",
        effectiveDate: "20-01-2026",
        percentValue: 3,
        currentBasic: 28000,
        newBasic: 28840,
      },
    ],
    []
  );

  const filteredData = useMemo(() => {
    const ft = (oisType || "").toString().trim();
    const ot = (officeType || "").toString().trim();
    const on = (officeName || "").toString().trim();

    return allData.filter((x) => {
      const matchOfficeType = ot ? x.officeType === ot : true;
      const matchOfficeName = on ? x.officeName === on : true;
      const matchOisType = ft ? true : true;

      return matchOfficeType && matchOfficeName && matchOisType;
    });
  }, [allData, oisType, officeType, officeName]);

  const columns = useMemo(
    () => [
      { field: "employeeCode", header: "Employee Code", sortable: true, style: { whiteSpace: "nowrap" } },
      { field: "employeeName", header: "Employee Name", sortable: true, style: { whiteSpace: "nowrap" } },
      { field: "officeType", header: "Office Type", sortable: true, style: { whiteSpace: "nowrap" } },
      { field: "officeName", header: "Office Name", sortable: true, style: { whiteSpace: "nowrap" } },
      { field: "postType", header: "Post Type", sortable: true, style: { whiteSpace: "nowrap" } },
      { field: "orderNo", header: "Order No.", sortable: true, style: { whiteSpace: "nowrap" } },
      { field: "orderDate", header: "Order Date", sortable: true, style: { whiteSpace: "nowrap" } },
      { field: "effectiveDate", header: "Effective Date", sortable: true, style: { whiteSpace: "nowrap" } },
      { field: "percentValue", header: "Percent", sortable: true, style: { whiteSpace: "nowrap" } },
      { field: "currentBasic", header: "Current Basic", sortable: true, style: { whiteSpace: "nowrap" } },
      { field: "newBasic", header: "New Basic", sortable: true, style: { whiteSpace: "nowrap" } },
    ],
    []
  );

  const handleSearch = () => {
    setShowList(true);
  };

  const handleClear = () => {
    setOisType(null);
    setOfficeType(null);
    setOfficeName(null);
    setFromDate(null);
    setToDate(null);
    setShowList(false);
  };

  return (
    <PageLayout title="Increment Report">
      <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm space-y-6">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-bold text-blue-700">
            Employee Increment Report
          </h2>
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
          <DateInput
            label="From Date"
            required
            value={fromDate}
            onChange={(e) => setFromDate(e.value as Date)}
            placeholder="dd-mm-yyyy"
          />

          <DateInput
            label="To Date"
            required
            value={toDate}
            onChange={(e) => setToDate(e.value as Date)}
            placeholder="dd-mm-yyyy"
            className="md:col-span-1"
          />
        </div>

        <div className="flex gap-4">
          <Button label="Search" className="bg-blue-600 px-10" type="button" onClick={handleSearch} />
          <Button label="Clear" severity="danger" className="px-10" type="button" onClick={handleClear} />
        </div>

        <p className="text-red-600 text-sm font-semibold">
          Note: All Asterisk (*) Marked Fields Are Mandatory
        </p>

        {showList && (
          <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-4">
            <Table
              columns={columns}
              data={filteredData}
              showPagination
              rowsPerPage={10}
              {...{ format: "increment_report" }}
            />
          </div>
        )}
      </div>
    </PageLayout>
  );
};

export default IncrementReport;
