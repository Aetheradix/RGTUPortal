/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import PageLayout from "@/components/PageLayout";
import { Card } from "primereact/card";
import { InputText } from "primereact/inputtext";
import { Dropdown } from "primereact/dropdown";
import { Button } from "primereact/button";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Tag } from "primereact/tag";

const subjectOptions = [
  { label: "Data Structures", value: "DS" },
  { label: "Operating Systems", value: "OS" },
  { label: "Artificial Intelligence", value: "AI" },
  { label: "Machine Learning", value: "ML" },
  { label: "Programming Fundamentals", value: "PF" },
  { label: "Database Management", value: "DBMS" },
];

const subjectCodeOptions = [
  { label: "0123", value: "0123" },
  { label: "0124", value: "0124" },
  { label: "0125", value: "0125" },
  { label: "0126", value: "0126" },
];

const transactionList = [
  {
    id: 1,
    rollNo: "101",
    session: "2024-2025",
    subject: "Mathematics",
    status: "Paid",
    paymentDate: "2024-11-30",
    transactionId: "TX12345",
    paymentMode: "Credit Card",
    amount: 300,
  },
];

interface RetotalingForm {
  rollNo: string;
  subjectCode: string;
  subject: string;
  reason: string;
  paySubject: string;
  feePerSubject: string;
  subjectCount: string;
  totalFee: string;
}

const ApplyForRetotaling: React.FC = () => {
  const [showPayment, setShowPayment] = useState(false);
  const [showTransaction, setShowTransaction] = useState(false);
  const [expandedRows, setExpandedRows] = useState<any>(null);

  const [form, setForm] = useState<RetotalingForm>({
    rollNo: "",
    subjectCode: "",
    subject: "",
    reason: "",
    paySubject: "",
    feePerSubject: "150",
    subjectCount: "1",
    totalFee: "150",
  });

  const calculateTotal = (count: string) => {
    const total = Number(form.feePerSubject) * Number(count || 0);
    setForm({ ...form, subjectCount: count, totalFee: total.toString() });
  };

  return (
    <PageLayout title="Apply for Retotaling">
      <Card className="mb-4">
        <h3 className="font-semibold mb-3">Apply for Retotaling</h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <div>
            <label>Enter Roll Number *</label>
            <InputText
              className="w-full"
              value={form.rollNo}
              onChange={(e) => setForm({ ...form, rollNo: e.target.value })}
            />
          </div>

          <div>
            <label>Select Subject Code *</label>
            <Dropdown
              className="w-full"
              options={subjectCodeOptions}
              value={form.subjectCode}
              onChange={(e) => setForm({ ...form, subjectCode: e.value })}
            />
          </div>

          <div>
            <label>Subject *</label>
            <Dropdown
              className="w-full"
              options={subjectOptions}
              value={form.subject}
              onChange={(e) => setForm({ ...form, subject: e.value })}
            />
          </div>

          <div className="md:col-span-3">
            <label>Enter Reason for Retotaling *</label>
            <InputText
              className="w-full"
              value={form.reason}
              onChange={(e) => setForm({ ...form, reason: e.target.value })}
            />
          </div>
        </div>

        <div className="flex gap-3">
          <Button
            label="Apply"
            icon="pi pi-check"
            onClick={() => setShowPayment(true)}
          />
          <Button
            label="Clear"
            icon="pi pi-refresh"
            className="p-button-secondary"
            onClick={() => {
              setShowPayment(false);
              setShowTransaction(false);
              setForm({
                rollNo: "",
                subjectCode: "",
                subject: "",
                reason: "",
                paySubject: "",
                feePerSubject: "150",
                subjectCount: "1",
                totalFee: "150",
              });
            }}
          />
        </div>
      </Card>

      {showPayment && (
        <Card className="mb-4">
          <h4 className="font-semibold mb-3">Payment Process</h4>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <div>
              <label>Subject</label>
              <Dropdown
                className="w-full"
                options={subjectOptions}
                value={form.paySubject}
                onChange={(e) => setForm({ ...form, paySubject: e.value })}
              />
            </div>

            <div>
              <label>Retotaling Fees (Per Subject)</label>
              <InputText
                className="w-full"
                value={form.feePerSubject}
                onChange={(e) => {
                  const fee = e.target.value;
                  const total =
                    Number(fee || 0) * Number(form.subjectCount || 0);
                  setForm({
                    ...form,
                    feePerSubject: fee,
                    totalFee: total.toString(),
                  });
                }}
              />
            </div>

            <div>
              <label>Retotaling Subject Count</label>
              <InputText
                className="w-full"
                value={form.subjectCount}
                onChange={(e) => calculateTotal(e.target.value)}
              />
            </div>

            <div>
              <label>Total Retotaling Fees</label>
              <InputText
                className="w-full"
                value={form.totalFee}
                onChange={(e) => setForm({ ...form, totalFee: e.target.value })}
              />
            </div>
          </div>

          <div className="flex gap-3">
            <Button
              label="Pay"
              icon="pi pi-credit-card"
              severity="success"
              onClick={() => setShowTransaction(true)}
            />

            <Button
              label="Clear"
              icon="pi pi-refresh"
              className="p-button-secondary"
              onClick={() => setShowTransaction(false)}
            />
          </div>
        </Card>
      )}

      {showTransaction && (
        <Card>
          <h4 className="font-semibold mb-3">Transaction Details</h4>

          <DataTable
            value={transactionList}
            paginator
            rows={10}
            showGridlines
            className="p-datatable-sm"
            expandedRows={expandedRows}
            onRowToggle={(e) => setExpandedRows(e.data)}
            rowExpansionTemplate={(row) => (
              <div className="p-3 grid grid-cols-2 gap-2 bg-gray-50 text-sm">
                <div>
                  <b>Payment Date:</b> {row.paymentDate}
                </div>
                <div>
                  <b>Transaction ID:</b> {row.transactionId}
                </div>
                <div>
                  <b>Payment Mode:</b> {row.paymentMode}
                </div>
                <div>
                  <b>Amount:</b> ₹{row.amount}
                </div>
              </div>
            )}
          >
            <Column expander style={{ width: "3rem" }} />
            <Column
              header="S.No."
              body={(_, opt) => opt.rowIndex + 1}
              sortable
            />
            <Column field="rollNo" header="Roll No." sortable />
            <Column field="session" header="Session" sortable />
            <Column field="subject" header="Subject" sortable />
            <Column
              field="status"
              header="Status"
              body={(row) => <Tag value={row.status} severity="success" />}
            />
          </DataTable>
        </Card>
      )}
    </PageLayout>
  );
};

export default ApplyForRetotaling;
