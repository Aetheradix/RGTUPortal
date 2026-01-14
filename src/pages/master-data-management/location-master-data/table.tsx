/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "primereact/button";

export const getStateColumns = (onEdit: (data: any) => void) => [
  { field: "stateNameEn", header: "State Name (In English)", sortable: true },
  { field: "stateNameHi", header: "State Name (In Hindi)", sortable: true },
  { field: "stateCode", header: "State Code", sortable: true },
  {
    field: "status",
    header: "Status",
    sortable: true,
    body: (rowData: any) => (
      <span
        className={`px-4 py-1 rounded text-white font-bold text-xs ${
          rowData.status === "Yes" ? "bg-green-500" : "bg-red-500"
        }`}
      >
        {rowData.status}
      </span>
    ),
  },
  {
    header: "Actions",
    field: "",
    body: (rowData: any) => (
      <Button
        text
        icon="pi pi-pencil"
        className="p-button-outlined p-button-warning p-button-sm"
        onClick={() => onEdit(rowData)}
        style={{ height: "30px", width: "30px" }}
      />
    ),
  },
];

export const getDivisionColumns = (onEdit: (data: any) => void) => [
  { field: "stateName", header: "State Name", sortable: true },
  {
    field: "divisionNameEn",
    header: "Division Name (In English)",
    sortable: true,
  },
  {
    field: "divisionNameHi",
    header: "Division Name (In Hindi)",
    sortable: true,
  },
  { field: "divisionCode", header: "Division Code", sortable: true },
  { field: "lgdCode", header: "Lgd Code", sortable: true },
  {
    field: "status",
    header: "Status",
    sortable: true,
    body: (rowData: any) => (
      <span
        className={`px-4 py-1 rounded text-white font-bold text-xs ${
          rowData.status === "Yes" ? "bg-green-500" : "bg-red-500"
        }`}
      >
        {rowData.status}
      </span>
    ),
  },
  {
    header: "Actions",
    field: "",
    body: (rowData: any) => (
      <Button
        text
        icon="pi pi-pencil"
        className="p-button-outlined p-button-warning p-button-sm"
        onClick={() => onEdit(rowData)}
      />
    ),
  },
];

export const getDistrictColumns = (onEdit: (data: any) => void) => [
  { field: "stateName", header: "State Name", sortable: true },
  { field: "divisionName", header: "Division Name", sortable: true },
  {
    field: "districtNameEn",
    header: "District Name (In English)",
    sortable: true,
  },
  {
    field: "districtNameHi",
    header: "District Name (In Hindi)",
    sortable: true,
  },
  { field: "districtCode", header: "District Code", sortable: true },
  { field: "lgdCode", header: "Lgd Code", sortable: true },
  {
    field: "status",
    header: "Status",
    sortable: true,
    body: (rowData: any) => (
      <span
        className={`px-4 py-1 rounded text-white font-bold text-xs ${
          rowData.status === "Yes" ? "bg-green-500" : "bg-red-500"
        }`}
      >
        {rowData.status}
      </span>
    ),
  },
  {
    header: "Action",
    field: "",
    body: (rowData: any) => (
      <Button
        text
        icon="pi pi-pencil"
        className="p-button-outlined p-button-warning p-button-sm"
        onClick={() => onEdit(rowData)}
      />
    ),
  },
];

export const getBlockColumns = (onEdit: (data: any) => void) => [
  { field: "stateName", header: "State Name", sortable: true },
  { field: "divisionName", header: "Division Name", sortable: true },
  { field: "districtName", header: "District Name", sortable: true },
  { field: "blockNameEn", header: "Block Name (In English)", sortable: true },
  { field: "blockNameHi", header: "Block Name (In Hindi)", sortable: true },
  { field: "blockCode", header: "Block Code", sortable: true },
  { field: "lgdCode", header: "Lgd Code", sortable: true },
  {
    field: "status",
    header: "Status",
    body: (rowData: any) => (
      <span
        className={`px-4 py-1 rounded text-white font-bold text-xs ${
          rowData.status === "Yes" ? "bg-green-500" : "bg-red-500"
        }`}
      >
        {rowData.status}
      </span>
    ),
  },
  {
    header: "Action",
    field: "",
    body: (rowData: any) => (
      <Button
        text
        icon="pi pi-pencil"
        className="p-button-outlined p-button-warning p-button-sm"
        onClick={() => onEdit(rowData)}
      />
    ),
  },
];

export const getVillageColumns = (onDenied: () => void) => [
  { field: "stateName", header: "State Name", sortable: true },
  { field: "divisionName", header: "Division Name", sortable: true },
  { field: "districtName", header: "District Name", sortable: true },
  { field: "blockName", header: "Block Name", sortable: true },
  { field: "localBodyName", header: "Local Body Name", sortable: true },
  { field: "zonePanchayatName", header: "Zone Panchayat Name", sortable: true },
  {
    field: "villageNameEn",
    header: "Village Name (In English)",
    sortable: true,
  },
  { field: "villageNameHi", header: "Village Name (In Hindi)", sortable: true },
  { field: "villageCode", header: "Village Code", sortable: true },
  { field: "lgdCode", header: "Lgd Code", sortable: true },
  {
    field: "status",
    header: "Status",
    body: (rowData: any) => (
      <span
        className={`px-2 py-1 rounded text-white font-bold text-[10px] ${
          rowData.status === "Yes" ? "bg-green-500" : "bg-red-500"
        }`}
      >
        {rowData.status}
      </span>
    ),
  },
  {
    header: "Action",
    field: "",
    body: () => (
      <Button
        text
        icon="pi pi-pencil"
        className="p-button-outlined p-button-warning p-button-sm"
        onClick={onDenied}
        style={{ width: "28px", height: "28px" }}
      />
    ),
  },
];

export const getHabitationColumns = (onEdit: (data: any) => void) => [
  { field: "divisionName", header: "Division Name", sortable: true },
  { field: "districtName", header: "District Name", sortable: true },
  { field: "blockName", header: "Block Name", sortable: true },
  { field: "zonePanchayatName", header: "Zone Panchayat Name", sortable: true },
  { field: "villageName", header: "Village Name", sortable: true },
  {
    field: "habitationNameEn",
    header: "Habitation Name (In English)",
    sortable: true,
  },
  {
    field: "habitationNameHi",
    header: "Habitation Name (In Hindi)",
    sortable: true,
  },
  { field: "habitationCode", header: "Habitation Code", sortable: true },
  {
    field: "status",
    header: "Status",
    body: (rowData: any) => (
      <span
        className={`px-2 py-1 rounded text-white font-bold text-[10px] ${
          rowData.status === "Yes" ? "bg-green-500" : "bg-red-500"
        }`}
      >
        {rowData.status}
      </span>
    ),
  },
  {
    header: "Actions",
    field: "",
    body: (rowData: any) => (
      <Button
        icon="pi pi-pencil"
        text
        className="p-button-outlined p-button-warning p-button-sm"
        onClick={() => onEdit(rowData)}
        style={{ width: "28px", height: "28px" }}
      />
    ),
  },
];

export const getLocalBodyTypeColumns = (onDenied: () => void) => [
  {
    field: "localBodyTypeNameEn",
    header: "Local Body Type Name (In English)",
    sortable: true,
  },
  {
    field: "localBodyTypeNameHi",
    header: "Local Body Type Name (In Hindi)",
    sortable: true,
  },
  { field: "locationName", header: "Location Name", sortable: true },
  {
    field: "localBodyTypeCode",
    header: "Local Body Type Code",
    sortable: true,
  },
  {
    field: "status",
    header: "Status",
    body: (rowData: any) => (
      <span
        className={`px-4 py-1 rounded text-white font-bold text-xs ${
          rowData.status === "Yes" ? "bg-green-500" : "bg-red-500"
        }`}
      >
        {rowData.status}
      </span>
    ),
  },
  {
    header: "Action",
    field: "",
    body: () => (
      <Button
        icon="pi pi-pencil"
        text
        className="p-button-outlined p-button-warning p-button-sm"
        onClick={onDenied}
        style={{ width: "30px", height: "30px" }}
      />
    ),
  },
];

export const getLocalBodyColumns = (onEdit: (data: any) => void) => [
  { field: "divisionName", header: "Division Name", sortable: true },
  { field: "districtName", header: "District Name", sortable: true },
  { field: "blockName", header: "Block Name", sortable: true },
  {
    field: "localBodyEn",
    header: "Local Body Name (In English)",
    sortable: true,
  },
  {
    field: "localBodyHi",
    header: "Local Body Name (In Hindi)",
    sortable: true,
  },
  { field: "localBodyCode", header: "Local Body Code", sortable: true },
  {
    field: "status",
    header: "Status",
    body: (rowData: any) => (
      <span
        className={`px-2 py-1 rounded text-white font-bold text-xs ${
          rowData.status === "Yes" ? "bg-green-500" : "bg-red-500"
        }`}
      >
        {rowData.status}
      </span>
    ),
  },
  {
    header: "Action",
    field: "",
    body: (rowData: any) => (
      <Button
        text
        icon="pi pi-pencil"
        className="p-button-outlined p-button-warning p-button-sm"
        onClick={() => onEdit(rowData)}
      />
    ),
  },
];

export const getZonePanchayatColumns = (onEdit: (data: any) => void) => [
  { field: "divisionName", header: "Division Name", sortable: true },
  { field: "districtName", header: "District Name", sortable: true },
  { field: "blockName", header: "Block Name", sortable: true },
  { field: "localBodyName", header: "Local Body Name", sortable: true },
  {
    field: "zonePanchayatEn",
    header: "Zone Panchayat Name (In English)",
    sortable: true,
  },
  {
    field: "zonePanchayatHi",
    header: "Zone Panchayat Name (In Hindi)",
    sortable: true,
  },
  { field: "zonePanchayatCode", header: "Zone Panchayat Code", sortable: true },
  {
    field: "status",
    header: "Status",
    body: (rowData: any) => (
      <span
        className={`px-2 py-1 rounded text-white font-bold text-xs ${
          rowData.status === "Yes" ? "bg-green-500" : "bg-red-500"
        }`}
      >
        {rowData.status}
      </span>
    ),
  },
  {
    header: "Action",
    field: "",
    body: (rowData: any) => (
      <Button
        text
        icon="pi pi-pencil"
        className="p-button-outlined p-button-warning p-button-sm"
        onClick={() => onEdit(rowData)}
      />
    ),
  },
];

export const getTehsilColumns = (onEdit: (data: any) => void) => [
  { field: "tehsilNameEn", header: "Tehsil Name (In English)", sortable: true },
  { field: "tehsilNameHi", header: "Tehsil Name (In Hindi)", sortable: true },
  { field: "tehsilCode", header: "Tehsil Code", sortable: true },
  {
    field: "status",
    header: "Status",
    body: (rowData: any) => (
      <span
        className={`px-4 py-1 rounded text-white font-bold text-xs ${
          rowData.status === "Yes" ? "bg-green-500" : "bg-red-500"
        }`}
      >
        {rowData.status}
      </span>
    ),
  },
  {
    header: "Action",
    field: "",
    body: (rowData: any) => (
      <Button
        text
        icon="pi pi-pencil"
        className="p-button-outlined p-button-warning p-button-sm"
        onClick={() => onEdit(rowData)}
      />
    ),
  },
];
