import React, { useState } from 'react';
import PageLayout from '@/components/PageLayout';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Dialog } from 'primereact/dialog';
import { InputText } from 'primereact/inputtext';

interface SSR {
  id: number;
  title: string;
  pdfUrl: string;
}

const SelfStudyReportPage: React.FC = () => {
  const [ssrList, setSsrList] = useState<SSR[]>([
    {
      id: 1,
      title: 'Self Study Report (SSR) for 4th Cycle of Accreditation',
      pdfUrl: '/pdfs/self-study-report.pdf',
    },
  ]);

  const [showForm, setShowForm] = useState(false);
  const [title, setTitle] = useState('');
  const [file, setFile] = useState<File | null>(null);

  const [pdfVisible, setPdfVisible] = useState(false);
  const [selectedPdf, setSelectedPdf] = useState<string | null>(null);

  const openPdf = (url: string) => {
    setSelectedPdf(url);
    setPdfVisible(true);
  };

  const handleSave = () => {
    if (!title || !file) {
      alert('Please enter title and upload PDF');
      return;
    }

    const newSSR: SSR = {
      id: ssrList.length + 1,
      title,
      pdfUrl: URL.createObjectURL(file),
    };

    setSsrList([...ssrList, newSSR]);
    handleClear();
    setShowForm(false);
  };

  const handleClear = () => {
    setTitle('');
    setFile(null);
  };

  if (showForm) {
    return (
      <PageLayout title="Add Self Study Report">
        <Card>
          <div className="flex justify-between mb-4">
            <h3 className="font-semibold">Add Self Study Report</h3>
            <Button label="Go Back" className="p-button-text" onClick={() => setShowForm(false)} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="font-medium">Enter Self Study Report Title *</label>
              <InputText
                className="w-full"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Enter Self Study Report Title"
              />
            </div>

            <div>
              <label className="font-medium">Upload Self Study Report *</label>
              <input
                type="file"
                accept="application/pdf"
                className="w-full border p-2 rounded"
                onChange={(e) => setFile(e.target.files?.[0] || null)}
              />
            </div>
          </div>

          <div className="flex justify-center gap-3 mt-5">
            <Button label="Save" icon="pi pi-save" onClick={handleSave} />
            <Button label="Clear" icon="pi pi-refresh" className="p-button-secondary" onClick={handleClear} />
          </div>
        </Card>
      </PageLayout>
    );
  }

  return (
    <PageLayout title="Self Study Report">
      <Card className="mb-4 flex justify-between items-center">
        <h3 className="font-semibold">
          Self Study Report (SSR) for 4th Cycle of Accreditation
        </h3>
        <Button icon="pi pi-eye" className="p-button-text" onClick={() => openPdf(ssrList[0].pdfUrl)} />
      </Card>
      <Card>
        <div className="flex justify-between items-center mb-3">
          <h3 className="font-semibold">Self Study Report List</h3>
          <Button label="Add Self Study Report" icon="pi pi-plus" onClick={() => setShowForm(true)} />
        </div>

        <DataTable value={ssrList} paginator rows={10} showGridlines>
          <Column field="title" header="Self Study Report Title" sortable />
          <Column
            header="View"
            body={(row: SSR) => (
              <Button icon="pi pi-eye" className="p-button-text" onClick={() => openPdf(row.pdfUrl)} />
            )}
          />
        </DataTable>
      </Card>
      <Dialog header="PDF Viewer" visible={pdfVisible} style={{ width: '70vw' }} onHide={() => setPdfVisible(false)}>
        {selectedPdf && <iframe src={selectedPdf} width="100%" height="500px" title="PDF Viewer" />}
      </Dialog>
    </PageLayout>
  );
};

export default SelfStudyReportPage;
