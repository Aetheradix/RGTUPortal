import { useState } from "react";
import PageLayout from "../../../components/PageLayout";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";

interface NewScheme {
  id: number;
  enrollmentNumber: string;
  samagraId: string;
  schemeName: string;
  schemeDetails: string;
  status: string;
}

const ApplyForScheme: React.FC = () => {
  const [showTable, setShowTable] = useState(false);
  const [formData, setFormData] = useState({
    enrollmentNumber: "",
    samagraId: "",
  });

  const [schemes] = useState<NewScheme[]>([
    {
      id: 1,
      schemeName: "Skill Development Program",
      schemeDetails:
        "A program designed to enhance technical skills for engineering and diploma students through workshops, online courses, and internships.",
      status: "Yes",
      enrollmentNumber: "",
      samagraId: "",
    },
    {
      id: 2,
      schemeName: "Scholarship for Technical Studies",
      schemeDetails:
        "Merit-based scholarships for students pursuing B.Tech or polytechnic courses, offering up to ₹50,000 annually.",
      status: "Yes",
      enrollmentNumber: "",
      samagraId: "",
    },
    {
      id: 3,
      schemeName: "Industry Certification Support",
      schemeDetails:
        "Financial aid for students to obtain industry-recognized certifications like AWS, Microsoft Azure, or Google Cloud certifications.",
      status: "No",
      enrollmentNumber: "",
      samagraId: "",
    },
  ]);

  const handleSearch = () => {
    if (formData.enrollmentNumber.trim() !== "") {
      setShowTable(true);
    } else {
      alert("Please enter Enrollment Number");
    }
  };

  const handleReset = () => {
    setFormData({ enrollmentNumber: "", samagraId: "" });
    setShowTable(false);
  };

  return (
    <PageLayout title="Apply For Scheme">
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label
              htmlFor="enrollmentNumber"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Enrollment Number <span className="text-red-500">*</span>
            </label>
            <InputText
              id="enrollmentNumber"
              value={formData.enrollmentNumber}
              onChange={(e) =>
                setFormData({ ...formData, enrollmentNumber: e.target.value })
              }
              className="w-full"
              placeholder="Enter Enrollment Number"
            />
          </div>

          <div>
            <label
              htmlFor="samagraId"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              SamagraId
            </label>
            <InputText
              id="samagraId"
              value={formData.samagraId}
              onChange={(e) =>
                setFormData({ ...formData, samagraId: e.target.value })
              }
              className="w-full"
              placeholder="Enter Samagra Id"
            />
          </div>
        </div>
        <div className="flex gap-3">
          <Button
            type="button"
            label="Search"
            icon="pi pi-search"
            className="p-button-primary px-6"
            onClick={handleSearch}
          />
          <Button
            type="button"
            label="Reset"
            icon="pi pi-refresh"
            className="p-button-outlined px-6"
            onClick={handleReset}
          />
        </div>
        {showTable && (
          <div className="mt-8 animate-fade-in">
            <h2 className="text-xl font-semibold text-gray-800 mb-4 border-t pt-6">
              New Scheme List
            </h2>
            <DataTable
              value={schemes}
              paginator
              rows={10}
              className="p-datatable-sm"
              responsiveLayout="scroll"
            >
              <Column
                field="id"
                header="ID"
                sortable
                style={{ width: "80px" }}
              />
              <Column field="schemeName" header="Scheme Name" sortable />
              <Column field="schemeDetails" header="Scheme Details" />
              <Column field="status" header="Eligibility" />
              <Column
                header="Actions"
                style={{ textAlign: "center", width: "120px" }}
                body={() => (
                  <div className="flex gap-2 justify-content-center">
                    <Button
                      icon="pi pi-pencil"
                      rounded
                      className="p-button-info p-button-sm"
                      style={{ width: "2rem", height: "2rem" }}
                    />
                    <Button
                      icon="pi pi-trash"
                      rounded
                      className="p-button-danger p-button-sm"
                      style={{ width: "2rem", height: "2rem" }}
                    />
                  </div>
                )}
              />
            </DataTable>
          </div>
        )}
      </div>
    </PageLayout>
  );
};

export default ApplyForScheme;
