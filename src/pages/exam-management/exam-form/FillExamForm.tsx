import React, { useState } from 'react';
import PageLayout from '@/components/PageLayout';
import { InputText } from 'primereact/inputtext';
import { Dropdown } from 'primereact/dropdown';
import { Button } from 'primereact/button';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Card } from 'primereact/card';
import { Dialog } from 'primereact/dialog';
import { Divider } from 'primereact/divider';

const FillExamFormAndPay: React.FC = () => {
  const [step, setStep] = useState<'search' | 'student' | 'fees'>('search');
  const [showReceipt, setShowReceipt] = useState(false);

  return (
    <PageLayout title="Fill Exam Form and Pay Exam">

      {/* ================= SEARCH ================= */}
      <Card className="mb-4">
        <h1 className="mb-3">Fill Exam Form</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm mb-1">Enrollment No.*</label>
            <InputText placeholder="Enter Enrollment No" />
          </div>

          <div>
            <label className="block text-sm mb-1">Examination Session*</label>
            <Dropdown placeholder="Select Examination Session" options={[]} />
          </div>

          <div className="flex items-end">
            <Button label="Search" icon="pi pi-search" onClick={() => setStep('student')} />
          </div>
        </div>
      </Card>

      {/* ================= STUDENT DETAILS ================= */}
      {step !== 'search' && (
        <Card className="mb-4">
          <h3 className="mb-3">Student Personal Details</h3>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
            {[
              'Student Name*',
              'Father Name*',
              'Course Name*',
              'Specialization*',
              'Admission Year*',
              'Gender*',
              'Mobile No.*',
              'Email ID*'
            ].map(label => (
              <div key={label}>
                <label className="block text-sm mb-1">{label}</label>
                <InputText placeholder={`Enter ${label.replace('*', '')}`} />
              </div>
            ))}
          </div>

          <h4 className="mb-2">Student Current Status</h4>

          <DataTable value={[{}]} showGridlines>
            <Column header="Semester" body={() => '1st'} />
            <Column header="Status" body={() => 'Regular'} />
            <Column header="Exam Form Status" body={() => 'Forwarded'} />
            <Column header="Semester Fees" body={() => '500'} />
            <Column header="Marksheet Fees" body={() => '100'} />
            <Column header="No. of Paper" body={() => '5'} />
          </DataTable>

          <div className="mt-4">
            <Button
              label="Forward Exam Form"
              icon="pi pi-arrow-right"
              onClick={() => setStep('fees')}
            />
          </div>
        </Card>
      )}

      {/* ================= FEES DETAILS ================= */}
      {step === 'fees' && (
        <Card className="mb-4">
          <h3 className="mb-3">Fees Details</h3>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
            {[
              'Semester Fee*',
              'Marksheet Fee*',
              'Forward Fee (Regular)*',
              'Forward Fee (EX)*',
              'Total Forward Fee*',
              'Sports Fee*',
              'Development Fee*',
              'Culture Fee*'
            ].map(label => (
              <div key={label}>
                <label className="block text-sm mb-1">{label}</label>
                <InputText placeholder={`Enter ${label.replace('*', '')}`} />
              </div>
            ))}
          </div>

          <h4 className="mb-3">Pay Fee</h4>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <div>
              <label className="block text-sm mb-1">Total Fee*</label>
              <InputText placeholder="Enter Total Fee" />
            </div>

            <div>
              <label className="block text-sm mb-1">Payment Method*</label>
              <Dropdown placeholder="Select Payment Method" options={[]} />
            </div>
          </div>

          <Button
            label="Pay"
            icon="pi pi-credit-card"
            onClick={() => setShowReceipt(true)}
          />
        </Card>
      )}

      {/* ================= RECEIPT POPUP ================= */}
      <Dialog
        header="Payment Receipt"
        visible={showReceipt}
        style={{ width: '55vw' }}
        modal
        onHide={() => setShowReceipt(false)}
      >
        <h4 className="text-center font-semibold mb-4">Payment Details</h4>

        <div className="grid grid-cols-2 gap-6 text-sm mb-4">
          <div><strong>Enrollment No:</strong><div>24048C04028</div></div>
          <div><strong>Student Name:</strong><div>Ajay Pawar</div></div>
          <div><strong>Course Name:</strong><div>B Tech</div></div>
          <div><strong>Semester:</strong><div>1st</div></div>
        </div>

        <Divider />

        <h4 className="text-center font-semibold mb-4">Fee Details</h4>

        <div className="grid grid-cols-3 gap-6 text-sm mb-4">
          <div>Semester Fee: ₹500</div>
          <div>Marksheet Fee: ₹100</div>
          <div>Late Fee: ₹0.00</div>
          <div>Total Forward Fee: ₹50</div>
          <div className="font-semibold">Total Fee: ₹650</div>
        </div>

        <Divider />

        <div className="flex justify-end gap-3">
          <Button label="Close" onClick={() => setShowReceipt(false)} />
          <Button label="Print Receipt" icon="pi pi-print" onClick={() => window.print()} />
        </div>
      </Dialog>

    </PageLayout>
  );
};

export default FillExamFormAndPay;
