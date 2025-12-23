import { useState, useRef } from "react";
import PageLayout from "../../../components/PageLayout";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Dialog } from "primereact/dialog";
import { ConfirmDialog, confirmDialog } from "primereact/confirmdialog";
import { Toast } from "primereact/toast";

interface NewScheme {
  id: number;
  schemeName: string;
  schemeDetails: string;
  status: string;
}

const ApplyForScheme: React.FC = () => {
  const [showTable, setShowTable] = useState(false);
  const [visible, setVisible] = useState(false);
  const [selectedScheme, setSelectedScheme] = useState<NewScheme | null>(null);
  const toast = useRef<Toast>(null);

  const [formData, setFormData] = useState({
    enrollmentNumber: "",
    samagraId: "",
  });

  const studentData = {
    enrollmentNo: "9874896784",
    samagraId: "321654987",
    studentName: "Rajat Patidar",
    gender: "Male",
    dob: "20/06/2003",
    category: "OBC",
    disability: "NO",
    fatherName: "Satyam Patidar",
    bankName: "HDFC Bank",
    ifsc: "HDFC0012SBI",
    branch: "M.P Nagar Bhopal",
    accountNo: "5152879564132",
  };

  const schemes: NewScheme[] = [
    {
      id: 1,
      schemeName: "Skill Development Program",
      schemeDetails: "A program designed to enhance technical skills...",
      status: "Yes",
    },
    {
      id: 2,
      schemeName: "Scholarship for Technical Studies",
      schemeDetails: "Merit-based scholarships for students...",
      status: "Yes",
    },
    {
      id: 3,
      schemeName: "Industry Certification Support",
      schemeDetails: "Financial aid for students to obtain certifications...",
      status: "No",
    },
  ];

  const handleApplyClick = (rowData: NewScheme) => {
    setSelectedScheme(rowData);
    setVisible(true);
  };

  const confirmSubmission = () => {
    confirmDialog({
      message: "Are you sure you want to save record?",
      header: "Confirmation",
      icon: "pi pi-exclamation-triangle",
      acceptClassName: "p-button-primary",
      acceptLabel: "Yes",
      rejectLabel: "No",
      accept: () => {
        toast.current?.show({
          severity: "success",
          summary: "Success",
          detail: "Record Saved Successfully",
          life: 3000,
        });
        setVisible(false);
      },
    });
  };

  const handleSearch = () => {
    if (
      formData.enrollmentNumber.length === 0 ||
      formData.samagraId.length === 0
    ) {
      toast.current?.show({
        severity: "error",
        summary: "Error",
        detail: "Please Enter Enrollment Number & Samagra Id",
        life: 3000,
      });
      return;
    }
    setShowTable(true);
  };

  const actionTemplate = (rowData: NewScheme) => {
    return rowData.status === "Yes" ? (
      <Button
        label="Apply For Scholarship"
        className="p-button-success p-button-outlined text-xs"
        onClick={() => handleApplyClick(rowData)}
      />
    ) : (
      <Button
        label="Not Eligible"
        className="p-button-secondary p-button-outlined text-xs"
        disabled
      />
    );
  };

  return (
    <PageLayout title="Apply For Scheme">
      <Toast ref={toast} />
      <ConfirmDialog />
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-4">
          <div className="flex flex-col gap-2">
            <label className="font-medium text-sm">
              Student Enrollment No. <span className="text-red-500">*</span>
            </label>
            <InputText
              value={formData.enrollmentNumber}
              onChange={(e) =>
                setFormData({ ...formData, enrollmentNumber: e.target.value })
              }
              placeholder="Enter Enrollment Number"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-medium text-sm">
              Samagra Id <span className="text-red-500">* </span>
            </label>
            <InputText
              value={formData.samagraId}
              onChange={(e) =>
                setFormData({ ...formData, samagraId: e.target.value })
              }
              placeholder="Enter Samagra Id"
            />
          </div>
        </div>
        <div className="flex gap-2">
          <Button label="Search" icon="pi pi-search" onClick={handleSearch} />
          <Button
            label="Reset"
            icon="pi pi-refresh"
            className="p-button-outlined"
            onClick={() => {
              setShowTable(false);
              setFormData({ enrollmentNumber: "", samagraId: "" });
            }}
          />
        </div>
      </div>

      {showTable && (
        <div className="mt-8">
          <DataTable
            value={schemes}
            paginator
            rows={5}
            className="p-datatable-sm shadow-1"
          >
            <Column
              field="id"
              header="Sr.No"
              style={{ width: "80px" }}
              sortable
            />
            <Column field="schemeName" header="Scheme Name" sortable />
            <Column field="schemeDetails" header="Scheme Details" sortable />
            <Column
              header="Eligibility"
              body={(rowData) => (
                <span
                  className={`px-2 py-1 rounded text-xs ${
                    rowData.status === "Yes"
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  {rowData.status}
                </span>
              )}
              sortable
            />
            <Column header="Action" body={actionTemplate} sortable />
          </DataTable>
        </div>
      )}
      <Dialog
        header="Apply For Scheme"
        visible={visible}
        style={{ width: "90vw" }}
        onHide={() => setVisible(false)}
        modal
      >
        {/* Section 1: Apply For Scheme */}
        <h4 className="text-md font-bold mb-4 bg-gray-50 p-2">
          Apply For Scheme
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <div className="flex flex-col gap-1">
            <label className="text-xs font-semibold">
              Student Enrollment No.
            </label>
            <InputText
              value={studentData.enrollmentNo}
              readOnly
              disabled
              className="p-inputtext-sm bg-gray-100"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-xs font-semibold">Samagra Id</label>
            <InputText
              value={studentData.samagraId}
              readOnly
              disabled
              className="p-inputtext-sm bg-gray-100"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-xs font-semibold">Student Name</label>
            <InputText
              value={studentData.studentName}
              readOnly
              disabled
              className="p-inputtext-sm bg-gray-100"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-xs font-semibold">Gender</label>
            <InputText
              value={studentData.gender}
              readOnly
              disabled
              className="p-inputtext-sm bg-gray-100"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-xs font-semibold">Date of Birth</label>
            <InputText
              value={studentData.dob}
              readOnly
              disabled
              className="p-inputtext-sm bg-gray-100"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-xs font-semibold">Category</label>
            <InputText
              value={studentData.category}
              readOnly
              disabled
              className="p-inputtext-sm bg-gray-100"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-xs font-semibold">Disability</label>
            <InputText
              value={studentData.disability}
              readOnly
              disabled
              className="p-inputtext-sm bg-gray-100"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-xs font-semibold">Father Name</label>
            <InputText
              value={studentData.fatherName}
              readOnly
              disabled
              className="p-inputtext-sm bg-gray-100"
            />
          </div>
        </div>

        {/* Section 2: Scheme Details */}
        <h4 className="text-md font-bold mb-4 bg-gray-50 p-2">
          Scheme Details
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          <div className="flex flex-col gap-1">
            <label className="text-xs font-semibold">Scheme Name/Title</label>
            <InputText
              value={selectedScheme?.schemeName}
              readOnly
              disabled
              className="p-inputtext-sm bg-gray-100"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-xs font-semibold">Scheme Details</label>
            <InputText
              value={selectedScheme?.schemeDetails}
              readOnly
              disabled
              className="p-inputtext-sm bg-gray-100"
            />
          </div>
        </div>

        {/* Section 3: Student Account Details */}
        <h4 className="text-md font-bold mb-4 bg-gray-50 p-2">
          Student Account Details
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="flex flex-col gap-1">
            <label className="text-xs font-semibold">Bank Name</label>
            <InputText
              value={studentData.bankName}
              readOnly
              disabled
              className="p-inputtext-sm bg-gray-100"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-xs font-semibold">IFSC Code</label>
            <InputText
              value={studentData.ifsc}
              readOnly
              disabled
              className="p-inputtext-sm bg-gray-100"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-xs font-semibold">Branch Name</label>
            <InputText
              value={studentData.branch}
              readOnly
              disabled
              className="p-inputtext-sm bg-gray-100"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-xs font-semibold">Account No.</label>
            <InputText
              value={studentData.accountNo}
              readOnly
              disabled
              className="p-inputtext-sm bg-gray-100"
            />
          </div>
        </div>

        {/* Footer Buttons */}
        <div className="flex justify-center gap-3 mt-4 border-t pt-6">
          <Button
            label="Apply for Scheme"
            icon="pi pi-check"
            className="p-button-primary bg-blue-600 border-none px-6"
            onClick={confirmSubmission}
          />
          <Button
            label="Clear"
            icon="pi pi-times"
            className="p-button-danger bg-red-400 border-none px-6"
            onClick={() => setVisible(false)}
          />
        </div>
      </Dialog>
    </PageLayout>
  );
};

export default ApplyForScheme;
