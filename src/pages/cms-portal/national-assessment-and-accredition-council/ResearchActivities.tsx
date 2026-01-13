import React, { useState } from "react";
import PageLayout from "@/components/PageLayout";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";

const ResearchActivities: React.FC = () => {
  const [pdfVisible, setPdfVisible] = useState(false);

  const pdfUrl =
    "/pdfs/Guidelines_for_Establishment_of_R&D_Cell_in_Technical_Education_Institutions.pdf";

  return (
    <PageLayout title="Research Activities">
      <Card className="mb-4">
        <div className="flex justify-content-between align-items-center">
          <div>
            <h3 className="font-semibold text-lg">Institutional Distinctiveness</h3>
            <p className="mt-1 text-sm">
              Guidelines for Establishment of Research & Development Cell In
              Technical Education Institutions
            </p>
          </div>
          <Button
            icon="pi pi-eye"
            className="p-button-rounded p-button-text p-button-lg"
            onClick={() => setPdfVisible(true)}
            tooltip="View PDF"
          />
        </div>
      </Card>
      <Dialog
        header="Research Activities PDF"
        visible={pdfVisible}
        style={{ width: "70vw" }}
        onHide={() => setPdfVisible(false)}
      >
        <iframe
          src={pdfUrl}
          width="100%"
          height="500px"
          title="Research Activities PDF"
        />
      </Dialog>
    </PageLayout>
  );
};

export default ResearchActivities;
