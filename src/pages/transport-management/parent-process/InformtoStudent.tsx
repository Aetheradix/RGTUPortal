import { useState } from "react";
import { Button } from "primereact/button";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { InputText } from "primereact/inputtext";
import { Calendar } from "primereact/calendar";
import { ConfirmDialog, confirmDialog } from "primereact/confirmdialog";
import PageLayout from "@/components/PageLayout";

interface StudentInfo {
  id: number;
  studentName: string;
  fromDate: string;
  toDate: string;
  absenceReason: string;
}

export default function InformToStudent() {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    studentName: "",
    fromDate: null as Date | null,
    toDate: null as Date | null,
    reason: "",
  });

  const studentList: StudentInfo[] = [
    {
      id: 1,
      studentName: "Rahul Sharma",
      fromDate: "01-Nov-2024",
      toDate: "05-Nov-2024",
      absenceReason: "Medical Leave",
    },
    {
      id: 2,
      studentName: "Anjali Gupta",
      fromDate: "10-Nov-2024",
      toDate: "12-Nov-2024",
      absenceReason: "Family Function",
    },
  ];

  const handleSave = () => {
    confirmDialog({
      message: "Do you want to save this student information?",
      header: "Confirmation",
      icon: "pi pi-info-circle",
      acceptClassName: "p-button-primary",
      acceptLabel: "Yes, Save it",
      rejectLabel: "No",
      accept: () => {
        setShowForm(false);
        setFormData({
          studentName: "",
          fromDate: null,
          toDate: null,
          reason: "",
        });
      },
    });
  };

  const actionBodyTemplate = () => (
    <div className="flex justify-center gap-3">
      <button
        type="button"
        className="w-8 h-8 rounded bg-blue-600 text-white flex items-center justify-center hover:bg-blue-700 shadow-sm"
      >
        ✎
      </button>
      <button
        type="button"
        className="w-8 h-8 rounded bg-red-600 text-white flex items-center justify-center hover:bg-red-700 shadow-sm"
      >
        🗑
      </button>
    </div>
  );

  return (
    <PageLayout title="Inform To Student">
      <ConfirmDialog />

      <div className="space-y-6">
        {!showForm ? (
          <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
            <div className="flex justify-between items-center mb-6 border-b pb-4">
              <h2 className="text-xl font-bold text-gray-800">
                Inform To Student List
              </h2>
              <Button
                label="Add Information"
                icon="pi pi-plus"
                onClick={() => setShowForm(true)}
              />
            </div>

            <DataTable
              value={studentList}
              paginator
              rows={10}
              className="p-datatable-sm"
            >
              <Column
                header="Sr No."
                body={(_, { rowIndex }) => rowIndex + 1}
                style={{ width: "90px" }} sortable
              />
              <Column field="studentName" header="Student Name" sortable />
              <Column field="fromDate" header="From Date" />
              <Column field="toDate" header="To Date" />
              <Column field="absenceReason" header="Absence Reason" />
              <Column
                header="Actions"
                body={actionBodyTemplate}
                align="center"
                style={{ width: "120px" }}
              />
            </DataTable>
          </div>
        ) : (
          <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm animate-fadein">
            <div className="flex justify-between items-center mb-6 border-b pb-4">
              <h2 className="text-xl font-bold text-gray-800">
                Add Inform To Student
              </h2>
              <Button
                label="Go Back"
                icon="pi pi-arrow-left"
                className="p-button-text p-button-secondary"
                onClick={() => setShowForm(false)}
              />
            </div>

            <div className="p-4 bg-gray-50 rounded-lg border border-gray-100 mb-8">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-semibold text-gray-700">
                    Student Name <span className="text-red-500">*</span>
                  </label>
                  <InputText
                    placeholder="Enter Student Name"
                    className="w-full"
                    value={formData.studentName}
                    onChange={(e) =>
                      setFormData({ ...formData, studentName: e.target.value })
                    }
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-sm font-semibold text-gray-700">
                    Select From Date <span className="text-red-500">*</span>
                  </label>
                  <Calendar
                    value={formData.fromDate}
                    onChange={(e) =>
                      setFormData({ ...formData, fromDate: e.value as Date })
                    }
                    placeholder="dd/mm/yyyy"
                    showIcon
                    className="w-full"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-sm font-semibold text-gray-700">
                    Select To Date <span className="text-red-500">*</span>
                  </label>
                  <Calendar
                    value={formData.toDate}
                    onChange={(e) =>
                      setFormData({ ...formData, toDate: e.value as Date })
                    }
                    placeholder="dd/mm/yyyy"
                    showIcon
                    className="w-full"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-sm font-semibold text-gray-700">
                    Absence Reason <span className="text-red-500">*</span>
                  </label>
                  <InputText
                    placeholder="Enter Reason"
                    className="w-full"
                    value={formData.reason}
                    onChange={(e) =>
                      setFormData({ ...formData, reason: e.target.value })
                    }
                  />
                </div>
              </div>
            </div>

            <div className="flex justify-center gap-4 mt-6 border-t pt-8">
              <Button
                label="Save Information"
                icon="pi pi-save"
                className="bg-blue-700 px-10 shadow-md"
                onClick={handleSave}
              />
              <Button
                label="Clear"
                icon="pi pi-refresh"
                severity="danger"
                outlined
                className="px-10"
                onClick={() =>
                  setFormData({
                    studentName: "",
                    fromDate: null,
                    toDate: null,
                    reason: "",
                  })
                }
              />
            </div>
          </div>
        )}
      </div>
    </PageLayout>
  );
}
