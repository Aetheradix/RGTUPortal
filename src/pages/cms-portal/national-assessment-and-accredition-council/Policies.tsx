import React, { useState } from "react";
import PageLayout from "@/components/PageLayout";
import { Card } from "primereact/card";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";

interface Policy {
  id: number;
  title: string;
  pdfUrl: string;
}

const policyData: Policy[] = [
  { id: 1, title: "Policy on Environment", pdfUrl: "/pdfs/policy_environment.pdf" },
  { id: 2, title: "Policy for Disabled Student and Staff", pdfUrl: "/pdfs/policy_disabled.pdf" },
  { id: 3, title: "Policy for Finance and Resource Mobilisation", pdfUrl: "/pdfs/policy_finance.pdf" },
  { id: 4, title: "Policy for Award of Scholarships and Freeships", pdfUrl: "/pdfs/policy_scholarship.pdf" },
  { id: 5, title: "Policy on e-governance", pdfUrl: "/pdfs/policy_egovernance.pdf" },
  { id: 6, title: "I.T. Policy", pdfUrl: "/pdfs/policy_it.pdf" },
  { id: 7, title: "Policy on Introduction to Research Ethics and Misconduct", pdfUrl: "/pdfs/policy_research_ethics.pdf" },
  { id: 8, title: "Policy Document on Promotion of Research", pdfUrl: "/pdfs/policy_research_promotion.pdf" },
  { id: 9, title: "Policy for Maintenance and Utilisation of Infrastructure and Learning Resources", pdfUrl: "/pdfs/policy_infrastructure.pdf" },
  { id: 10, title: "E-waste Policy", pdfUrl: "/pdfs/policy_ewaste.pdf" },
];

const Policies: React.FC = () => {
  const [pdfVisible, setPdfVisible] = useState(false);
  const [selectedPdf, setSelectedPdf] = useState<string | null>(null);

  const openPdf = (url: string) => {
    setSelectedPdf(url);
    setPdfVisible(true);
  };

  return (
    <PageLayout title="Policies">
      <Card title="List">
        <DataTable value={policyData} paginator rows={10}>
          <Column field="title" header="Title" sortable />
          <Column
            header="Document"
            body={(row: Policy) => (
              <Button
                icon="pi pi-eye"
                label="View"
                className="p-button-text"
                onClick={() => openPdf(row.pdfUrl)}
              />
            )}
          />
        </DataTable>
      </Card>
      <Dialog
        header="View Policy Document"
        visible={pdfVisible}
        style={{ width: "70vw" }}
        onHide={() => setPdfVisible(false)}
      >
        {selectedPdf && (
          <iframe src={selectedPdf} width="100%" height="500px" />
        )}
      </Dialog>
    </PageLayout>
  );
};

export default Policies;
