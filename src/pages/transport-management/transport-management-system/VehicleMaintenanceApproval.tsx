import { useState } from "react";
import { Button } from "primereact/button";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Dropdown } from "primereact/dropdown";
import { InputTextarea } from "primereact/inputtextarea";
import { Dialog } from "primereact/dialog";
import { ConfirmDialog, confirmDialog } from "primereact/confirmdialog";
import PageLayout from "@/components/PageLayout";

interface MaintenanceApprovalItem {
  id: number;
  maintenanceType: string;
  vehicleNo: string;
  allotmentDate: string;
  reason: string;
  status: string;
}

export default function VehicleMaintenanceApproval() {
  const [showList, setShowList] = useState(false);
  const [showCreateList, setShowCreateList] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [filters, setFilters] = useState({ year: null, maintType: null });

  const years = [{ label: "2024-25", value: "2024" }];
  const maintTypes = [
    { label: "Tyre Tube", value: "TYRE_TUBE" },
    { label: "Servicing", value: "SERVICING" },
  ];

  const listData: MaintenanceApprovalItem[] = [
    {
      id: 1,
      maintenanceType: "Tyre Tube",
      vehicleNo: "MP04AP1123",
      allotmentDate: "12/04/2024",
      reason: "Tyre Tube Replacement",
      status: "Pending",
    },
    {
      id: 2,
      maintenanceType: "Servicing",
      vehicleNo: "MP04BZ8290",
      allotmentDate: "15/05/2024",
      reason: "Engine Oil Change",
      status: "Pending",
    },
    {
      id: 3,
      maintenanceType: "Tyre Tube",
      vehicleNo: "MP04CX2255",
      allotmentDate: "20/06/2024",
      reason: "Front Tyre Replacement",
      status: "Pending",
    },
  ];

  const handleActionComplete = () => {
    setOpenModal(false);
    setShowCreateList(true);
    setShowList(false);
  };

  const confirmApprove = () => {
    confirmDialog({
      message: "Do you want to Approve this?",
      header: "Are you sure?",
      icon: "pi pi-exclamation-circle",
      acceptLabel: "Yes, Approve it!",
      rejectLabel: "Cancel",
      acceptClassName: "p-button-primary",
      accept: handleActionComplete,
    });
  };

  const confirmReject = () => {
    confirmDialog({
      message: "Do you want to Reject this?",
      header: "Are you sure?",
      icon: "pi pi-exclamation-circle",
      acceptLabel: "Yes, Reject it!",
      rejectLabel: "Cancel",
      acceptClassName: "p-button-danger",
      accept: handleActionComplete,
    });
  };

  return (
    <PageLayout title="Vehicle Maintenance Approval">     
      <ConfirmDialog />

      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold">Vehicle Maintenance Approval</h3>
        {!showCreateList ? (
          <Button
            label="Add Vehicle Maintenance Approval"
            onClick={() => {
              setShowCreateList(true);
              setShowList(false);
            }}
          />
        ) : (
          <Button
            label="Go Back"
            onClick={() => {
              setShowCreateList(false);
              setShowList(false);
            }}
          />
        )}
      </div>

      {!showCreateList && (
        <div className="border rounded p-6 mb-6 bg-white shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
            <div>
              <label className="block mb-2 font-medium text-sm">
                Select Year <span className="text-red-500">*</span>
              </label>
              <Dropdown
                value={filters.year}
                options={years}
                placeholder="Select"
                className="w-full"
                onChange={(e) => setFilters({ ...filters, year: e.value })}
              />
            </div>
            <div>
              <label className="block mb-2 font-medium text-sm">
                Select Maintenance Type <span className="text-red-500">*</span>
              </label>
              <Dropdown
                value={filters.maintType}
                options={maintTypes}
                placeholder="Select"
                className="w-full"
                onChange={(e) => setFilters({ ...filters, maintType: e.value })}
              />
            </div>
          </div>
          <div className="flex justify-center gap-3">
            <Button
              label="Search"
              className="px-6"
              onClick={() => setShowList(true)}
            />
            <Button
              type="button"
              label="Cancel"
              icon="pi pi-times"
              className="p-button-secondary"
              onClick={() => {
                setShowList(false);
                setFilters({ year: null, maintType: null });
              }}
            />
          </div>
        </div>
      )}

      {showList && !showCreateList && (
        <div className="mt-6">
          <h4 className="font-semibold mb-3 text-blue-800">
            Vehicle Maintenance Approval Details
          </h4>
          <DataTable
            value={listData.slice(0, 1)}
            paginator
            rows={10}
            size="small"
            className="p-datatable-gridlines"
          >
            <Column field="id" header="Sr.No." style={{width:"10px"}} sortable/>
            <Column field="maintenanceType" header="Maintenance Type" sortable/>
            <Column field="vehicleNo" header="Vehicle Number" sortable/>
            <Column field="allotmentDate" header="Allotment Date" sortable/>
            <Column field="reason" header="Reason for Maintenance" sortable/>
            <Column
              header="Document"
              body={() => (
                <Button icon="pi pi-eye" text className="p-0 text-blue-600" />
              )}
            />
            <Column field="status" header="Status" />
          </DataTable>
        </div>
      )}

      {showCreateList && (
        <div className="mt-6">
          <DataTable
            value={listData}
            paginator
            rows={10}
            size="small"
            className="p-datatable-gridlines"
          >
            <Column field="id" header="Sr.No." style={{width:"10px"}} sortable/>
            <Column field="vehicleNo" header="Vehicle Number" sortable/>
            <Column header="Office Name" body={() => "DDO"} sortable/>
            <Column header="Office Code" body={() => "Bhopal"} sortable/>
            <Column header="Employee Name" body={() => "E0561-Raj"} sortable/>
            <Column field="maintenanceType" header="Maintenance Type"sortable />
            <Column
              header="Document View"
              body={() => (
                <Button
                  icon="pi pi-eye"
                  severity="info"
                  outlined
                  size="small"
                  className="p-1"
                />
              )}
            />
            <Column field="status" header="Status" />
            <Column
              header="Action"
              body={() => (
                <Button
                  label="Proceed"
                  size="small"
                  className="py-1 px-3"
                  onClick={() => setOpenModal(true)}
                />
              )}
            />
          </DataTable>
        </div>
      )}

      <Dialog
        header="Vehicle Maintenance Request Details"
        visible={openModal}
        style={{ width: "450px" }}
        onHide={() => setOpenModal(false)}
      >
        <div className="grid grid-cols-2 gap-4 mt-2">
          <div className="col-span-1">
            <label className="block mb-1 text-xs font-bold">
              Vehicle Approval Details <span className="text-red-500">*</span>
            </label>
            <InputTextarea
              rows={2}
              placeholder="Enter Details"
              className="w-full text-sm"
            />
          </div>
          <div className="col-span-1">
            <label className="block mb-1 text-xs font-bold">
              Approval Document <span className="text-red-500">*</span>
            </label>
            <input type="file" className="text-xs mt-1" />
          </div>
        </div>
        <div className="flex justify-center gap-3 mt-6">
          <Button
            label="Approve"
            size="small"
            className="bg-blue-600 px-4"
            onClick={confirmApprove}
          />
          <Button
            label="Reject"
            size="small"
            severity="danger"
            outlined
            className="px-4"
            onClick={confirmReject}
          />
        </div>
      </Dialog>
    </PageLayout>
  ); 
}
