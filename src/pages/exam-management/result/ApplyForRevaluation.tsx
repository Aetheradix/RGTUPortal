import React, { useState } from "react";
import PageLayout from "@/components/PageLayout";
import { Card } from "primereact/card";
import { InputText } from "primereact/inputtext";
import { Dropdown } from "primereact/dropdown";
import { Button } from "primereact/button";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";

interface Option {
  label: string;
  value: string;
}

interface Transaction {
  id: number;
  rollNo: string;
  session: string;
  subject: string;
}

const subjectOptions: Option[] = [
  { label: "Data Structures", value: "Data Structures" },
  { label: "Operating Systems", value: "Operating Systems" },
  { label: "Artificial Intelligence", value: "Artificial Intelligence" },
];

const subjectCodeOptions: Option[] = [
  { label: "0123", value: "0123" },
  { label: "0124", value: "0124" },
  { label: "0125", value: "0125" },
];

const transactionData: Transaction[] = [
  { id: 1, rollNo: "101", session: "2024-2025", subject: "Data Structures" },
];

const ApplyForRevaluation: React.FC = () => {
  const [showPayment, setShowPayment] = useState(false);
  const [showTransaction, setShowTransaction] = useState(false);

  const [rollNo, setRollNo] = useState("");
  const [subject, setSubject] = useState<Option | null>(null);
  const [subjectCode, setSubjectCode] = useState<Option | null>(null);

  const [feePerSubject, setFeePerSubject] = useState("500");
  const [subjectCount, setSubjectCount] = useState("");
  const [totalFee, setTotalFee] = useState("");

  const calculateTotal = (value: string) => {
    setSubjectCount(value);
    const total = Number(value || 0) * Number(feePerSubject || 0);
    setTotalFee(total.toString());
  };

  return (
    <PageLayout title="Apply for Revaluation">
      {/* Apply Form */}
      <Card className="mb-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label>Enter Roll Number *</label>
            <InputText
              className="w-full"
              value={rollNo}
              onChange={(e) => setRollNo(e.target.value)}
            />
          </div>

          <div>
            <label>Select Subject Code *</label>
            <Dropdown
              className="w-full"
              options={subjectCodeOptions}
              optionLabel="label"
              value={subjectCode}
              onChange={(e) => setSubjectCode(e.value)}
              placeholder="Select"
            />
          </div>

          <div>
            <label>Subject *</label>
            <Dropdown
              className="w-full"
              options={subjectOptions}
              optionLabel="label"
              value={subject}
              onChange={(e) => setSubject(e.value)}
              placeholder="Select Subject"
            />
          </div>
        </div>

        <div className="flex gap-3 mt-3">
          <Button label="Apply" onClick={() => setShowPayment(true)} />
          <Button
            label="Clear"
            severity="secondary"
            onClick={() => {
              setShowPayment(false);
              setShowTransaction(false);
            }}
          />
        </div>
      </Card>

      {/* Payment Section */}
      {showPayment && (
        <Card className="mb-4">
          <h4 className="font-semibold mb-3">Payment Process</h4>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label>Subject</label>
              <Dropdown
                className="w-full"
                options={subjectOptions}
                optionLabel="label"
                value={subject}
                onChange={(e) => setSubject(e.value)}
                placeholder="Select Subject"
              />
            </div>

            <div>
              <label>Fee Per Subject</label>
              <InputText
                className="w-full"
                value={feePerSubject}
                onChange={(e) => setFeePerSubject(e.target.value)}
              />
            </div>

            <div>
              <label>Revaluation Subject Count</label>
              <InputText
                className="w-full"
                value={subjectCount}
                onChange={(e) => calculateTotal(e.target.value)}
              />
            </div>

            <div>
              <label>Total Revaluation Fees</label>
              <InputText
                className="w-full"
                value={totalFee}
                onChange={(e) => setTotalFee(e.target.value)}
              />
            </div>
          </div>

          <div className="mt-3">
            <Button
              label="Pay"
              icon="pi pi-credit-card"
              severity="success"
              onClick={() => setShowTransaction(true)}
            />
          </div>
        </Card>
      )}

      {/* Transaction Table */}
      {showTransaction && (
        <Card>
          <h4 className="font-semibold mb-3">Transaction Details</h4>
          <DataTable value={transactionData} paginator rows={10} showGridlines>
            <Column
              header="S.No."
              body={(_, opt) => opt.rowIndex + 1}
              sortable
            />
            <Column field="rollNo" header="Roll No." sortable />
            <Column field="session" header="Session" sortable />
            <Column field="subject" header="Subject" sortable />
          </DataTable>
        </Card>
      )}
    </PageLayout>
  );
};

export default ApplyForRevaluation;
