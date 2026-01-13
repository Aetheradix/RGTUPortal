import React, { useState } from "react";
import PageLayout from "../../../components/PageLayout";
import { DataTable, type DataTableExpandedRows } from "primereact/datatable";
import { Column } from "primereact/column";
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";
import { Button } from "primereact/button";
import { Dropdown } from "primereact/dropdown";
import { Checkbox } from "primereact/checkbox";
import { ConfirmDialog, confirmDialog } from "primereact/confirmdialog";

interface AdmissionFee {
  id: string;
  srNo: number;
  course: string;
  academicYear: string;
  category: string;
  feeType: string;
  paymentMode: string;
  admissionFee: number;
  otherCharges: number;
  totalFee: number;
  notes: string;
  status: string;
}

const SetAdmissionFee: React.FC = () => {
  const [view, setView] = useState<"LIST" | "FORM">("LIST");
  const [isEdit, setIsEdit] = useState(false);
  const [expandedRows, setExpandedRows] = useState<DataTableExpandedRows>();
  const [globalFilter, setGlobalFilter] = useState("");
  const [formData, setFormData] = useState<Partial<AdmissionFee>>({
    status: "Active",
    admissionFee: 0,
    otherCharges: 0,
    totalFee: 0,
  });

  const courses = [
    "B.Tech",
    "M.Tech",
    "BCA",
    "MCA",
    "B.Sc (IT)",
    "M.Sc (IT)",
    "MBA (Tech Management)",
  ];
  const years = ["2024-2025", "2025-2026"];
  const categories = ["General", "OBC", "SC", "ST", "EWS", "PWD"];
  const feeTypes = ["One-time Fee", "Semester Fee", "Annual Fee"];
  const paymentModes = ["Cash", "Cheque", "Bank Transfer", "Online Payment"];

  const [data] = useState<AdmissionFee[]>([
    {
      id: "1",
      srNo: 1,
      course: "B.Tech",
      academicYear: "2024-2025",
      category: "General",
      feeType: "One-time Fee",
      paymentMode: "Online Payment",
      admissionFee: 50000,
      otherCharges: 5000,
      totalFee: 55000,
      notes: "First semester fee, includes tuition and lab charges",
      status: "Active",
    },
    {
      id: "2",
      srNo: 2,
      course: "B.Tech",
      academicYear: "2024-2025",
      category: "General",
      feeType: "One-time Fee",
      paymentMode: "Online Payment",
      admissionFee: 50000,
      otherCharges: 5000,
      totalFee: 55000,
      notes: "First semester fee, includes tuition and lab charges",
      status: "Active",
    },
  ]);

  const calculateTotal = (fee: number, charges: number) => {
    setFormData((prev) => ({
      ...prev,
      admissionFee: fee,
      otherCharges: charges,
      totalFee: fee + charges,
    }));
  };

  const confirmEdit = (rowData: AdmissionFee) => {
    confirmDialog({
      message: "Kya aap is fee structure ko edit karna chahte hain?",
      header: "Edit Confirmation",
      icon: "pi pi-info-circle",
      accept: () => {
        setFormData(rowData);
        setIsEdit(true);
        setView("FORM");
      },
    });
  };

  const rowExpansionTemplate = (data: AdmissionFee) => (
    <div className="p-3 bg-gray-50 border-round border-1 border-gray-200">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
        <div>
          <span className="text-xs font-bold block text-gray-500 uppercase">
            Fee Structure Notes
          </span>
          <p className="text-sm m-0">{data.notes}</p>
        </div>
        <div>
          <span className="text-xs font-bold block text-gray-500 uppercase">
            Status
          </span>
          <span
            className={`text-sm font-bold ${
              data.status === "Active" ? "text-green-600" : "text-red-500"
            }`}
          >
            {data.status}
          </span>
        </div>
        <div>
          <span className="text-xs font-bold block text-gray-500 uppercase mb-2">
            Actions
          </span>
          <div className="flex gap-2">
            <Button
              label="Edit"
              icon="pi pi-pencil"
              className="p-button-sm p-button-success px-3"
              onClick={() => confirmEdit(data)}
            />
            <Button
              label="Delete"
              icon="pi pi-trash"
              className="p-button-sm p-button-danger px-3"
              onClick={() => {
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <PageLayout title="Set Admission Fee">
      <ConfirmDialog />
      <div className="bg-white p-4 rounded shadow-sm border border-gray-200">
        {view === "LIST" && (
          <>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold text-gray-800">
                Set Admission Fee List
              </h2>
              <Button
                label="Add Set Admission Fee"
                icon="pi pi-plus"
                className="p-button-sm"
                onClick={() => {
                  setFormData({
                    status: "Active",
                    admissionFee: 0,
                    otherCharges: 0,
                    totalFee: 0,
                  });
                  setIsEdit(false);
                  setView("FORM");
                }}
              />
            </div>

            <div className="flex justify-end mb-3">
              <span className="p-input-icon-left">
                <i className="pi pi-search" />
                <InputText
                  placeholder="Search..."
                  className="p-inputtext-sm"
                  onInput={(e) =>
                    setGlobalFilter((e.target as HTMLInputElement).value)
                  }
                />
              </span>
            </div>

            <DataTable
              value={data}
              paginator
              rows={10}
              globalFilter={globalFilter}
              className="p-datatable-sm"
              showGridlines
              stripedRows
              expandedRows={expandedRows}
              onRowToggle={(e) =>
                setExpandedRows(e.data as DataTableExpandedRows)
              }
              rowExpansionTemplate={rowExpansionTemplate}
              dataKey="id"
            >
              <Column expander style={{ width: "3rem" }} />
              <Column field="srNo" header="Sr No." style={{ width: "4rem" }} />
              <Column field="course" header="Course" sortable />
              <Column field="academicYear" header="Academic Year" sortable />
              <Column field="category" header="Category" sortable />
              <Column field="feeType" header="Fee Type" />
              <Column field="paymentMode" header="Payment Mode" />
              <Column
                field="admissionFee"
                header="Admission Fee (₹)"
                body={(r) => `₹${r.admissionFee.toLocaleString()}`}
              />
              <Column
                field="otherCharges"
                header="Other Charges (₹)"
                body={(r) => `₹${r.otherCharges.toLocaleString()}`}
              />
              <Column
                field="totalFee"
                header="Total Fee (₹)"
                className="font-bold text-blue-700"
                body={(r) => `₹${r.totalFee.toLocaleString()}`}
              />
            </DataTable>
          </>
        )}

        {view === "FORM" && (
          <div className="animate-fade-in">
            <div className="flex justify-between items-center mb-4 border-b pb-2">
              <h2 className="text-xl font-bold text-blue-600">
                {isEdit ? "Update Set Admission Fee" : "Add Set Admission Fee"}
              </h2>
              <Button
                label="Go Back"
                icon="pi pi-arrow-left"
                className="p-button-secondary p-button-text p-button-sm"
                onClick={() => setView("LIST")}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="field">
                <label className="text-xs font-bold block mb-1">
                  Select Course*
                </label>
                <Dropdown
                  value={formData.course}
                  options={courses}
                  onChange={(e) =>
                    setFormData({ ...formData, course: e.value })
                  }
                  placeholder="Select"
                  className="w-full p-inputtext-sm"
                />
              </div>
              <div className="field">
                <label className="text-xs font-bold block mb-1">
                  Select Academic Year*
                </label>
                <Dropdown
                  value={formData.academicYear}
                  options={years}
                  onChange={(e) =>
                    setFormData({ ...formData, academicYear: e.value })
                  }
                  placeholder="Select"
                  className="w-full p-inputtext-sm"
                />
              </div>
              <div className="field">
                <label className="text-xs font-bold block mb-1">
                  Select Category*
                </label>
                <Dropdown
                  value={formData.category}
                  options={categories}
                  onChange={(e) =>
                    setFormData({ ...formData, category: e.value })
                  }
                  placeholder="Select"
                  className="w-full p-inputtext-sm"
                />
              </div>
              <div className="field">
                <label className="text-xs font-bold block mb-1">
                  Select Fee Type*
                </label>
                <Dropdown
                  value={formData.feeType}
                  options={feeTypes}
                  onChange={(e) =>
                    setFormData({ ...formData, feeType: e.value })
                  }
                  placeholder="Select"
                  className="w-full p-inputtext-sm"
                />
              </div>
              <div className="field">
                <label className="text-xs font-bold block mb-1">
                  Select Payment Mode*
                </label>
                <Dropdown
                  value={formData.paymentMode}
                  options={paymentModes}
                  onChange={(e) =>
                    setFormData({ ...formData, paymentMode: e.value })
                  }
                  placeholder="Select"
                  className="w-full p-inputtext-sm"
                />
              </div>
              <div className="field">
                <label className="text-xs font-bold block mb-1">
                  Enter Admission Fee (₹)*
                </label>
                <InputText
                  type="number"
                  value={formData.admissionFee?.toString()}
                  onChange={(e) =>
                    calculateTotal(
                      Number(e.target.value),
                      formData.otherCharges || 0
                    )
                  }
                  className="w-full p-inputtext-sm"
                />
              </div>
              <div className="field">
                <label className="text-xs font-bold block mb-1">
                  Enter Other Charges (₹)*
                </label>
                <InputText
                  type="number"
                  value={formData.otherCharges?.toString()}
                  onChange={(e) =>
                    calculateTotal(
                      formData.admissionFee || 0,
                      Number(e.target.value)
                    )
                  }
                  className="w-full p-inputtext-sm"
                />
              </div>
              <div className="field">
                <label className="text-xs font-bold block mb-1">
                  Total Fee (₹)
                </label>
                <InputText
                  value={formData.totalFee?.toString()}
                  disabled
                  className="w-full p-inputtext-sm bg-gray-50 font-bold text-blue-700"
                />
              </div>
              <div className="field md:col-span-3">
                <label className="text-xs font-bold block mb-1">
                  Enter Fee Structure Notes*
                </label>
                <InputTextarea
                  value={formData.notes}
                  onChange={(e) =>
                    setFormData({ ...formData, notes: e.target.value })
                  }
                  rows={3}
                  className="w-full p-inputtext-sm"
                />
              </div>
              <div className="field">
                <label className="text-xs font-bold block mb-2">Status*</label>
                <div className="flex items-center gap-2">
                  <Checkbox
                    checked={formData.status === "Active"}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        status: e.checked ? "Active" : "Inactive",
                      })
                    }
                  />
                  <span className="text-sm">Active</span>
                </div>
              </div>
            </div>

            <div className="mt-6 flex gap-3 border-t pt-4">
              <Button
                label={isEdit ? "Update" : "Save"}
                icon="pi pi-save"
                className="p-button-primary px-6"
                onClick={() => setView("LIST")}
              />
              <Button
                label="Clear"
                icon="pi pi-refresh"
                className="p-button-secondary p-button-outlined px-6"
                onClick={() =>
                  setFormData({
                    status: "Active",
                    admissionFee: 0,
                    otherCharges: 0,
                    totalFee: 0,
                  })
                }
              />
            </div>
          </div>
        )}
      </div>
    </PageLayout>
  );
};

export default SetAdmissionFee;
