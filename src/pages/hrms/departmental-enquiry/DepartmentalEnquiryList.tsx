import React, { useState } from "react";
import PageLayout from "@/components/PageLayout";
import Dropdown from "@/ui/shared/Dropdown";
import Input, { DateInput } from "@/ui/shared/Input";
import Table from "@/ui/shared/Table";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import { RadioButton } from "primereact/radiobutton";

const DepartmentEnquiryList: React.FC = () => {
  const [showList, setShowList] = useState(false);
  const [expandedRow, setExpandedRow] = useState<number | null>(null);

  const [showStatusDialog, setShowStatusDialog] = useState(false);
  const [showConfirmDialog, setShowConfirmDialog] = useState(false);
  const [showSuccessDialog, setShowSuccessDialog] = useState(false);

  const [enquiryStatus, setEnquiryStatus] = useState<"OPEN" | "CLOSE">("OPEN");

  const enquiryData = [
    {
      id: 1,
      officer: "Admin",
      presentingOfficer: "Raj Purohit",
      remark: "Approve",
      briefDate: "05/08/2024",
      argumentDate: "08/08/2024",
      defenseDate: "25/08/2024",
      firstHearing: "16/08/2024",
      imputedDate: "28/08/2024",
      noticeDate: "27/08/2024",
    },
    {
      id: 2,
      officer: "HR",
      presentingOfficer: "Ram Jain",
      remark: "Approve",
      briefDate: "05/02/2024",
      argumentDate: "08/02/2024",
      defenseDate: "25/02/2024",
      firstHearing: "16/02/2024",
      imputedDate: "18/02/2024",
      noticeDate: "17/02/2024",
    },
  ];

  const columns = [
    { field: "srNo", header: "Sr. No.", sortable:true },
    { field: "officer", header: "Name of Departmental Investigating Officer", sortable:true },
    { field: "presentingOfficer", header: "Name of Presenting Officer", sortable:true },
    { field: "remark", header: "Enquiry Remark", sortable:true },
    { field: "briefDate", header: "Brief Date of Enquiry", sortable:true },
    { field: "argumentDate", header: "Date of Argument of Emp", sortable:true },
    {
      field: "defenseDate",
      header:
        "Presentation & Cross-Examination of Defense Supporting Evidence", sortable:true
    },
  ];

  const tableData = enquiryData.map((item, index) => ({
    srNo: (
      <div className="flex items-center gap-2">
        <span className="font-medium">{index + 1}</span>
        <Button
          text
          icon={`pi ${
            expandedRow === item.id ? "pi-minus-circle" : "pi-plus-circle"
          }`}
          className="text-blue-600"
          onClick={() =>
            setExpandedRow(expandedRow === item.id ? null : item.id)
          }
        />
      </div>
    ),
    ...item,
  }));

  return (
    <PageLayout title="Department Enquiry List">
      <div className="space-y-6">
        <div className="bg-white p-6 rounded-lg border shadow-sm">
          <h2 className="text-xl font-bold mb-6 border-b pb-4">
            Department Enquiry List
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-end">
            <Dropdown
              label="Select Enquiry Status"
              options={[
                { label: "Open", value: "open" },
                { label: "Closed", value: "closed" },
              ]}
              placeholder="Select"
              required
            />

            <div className="flex gap-2">
              <Button
                label="Search"
                className="bg-green-500 px-6 h-[42px]"
                onClick={() => setShowList(true)}
              />
              <Button
                label="Clear"
                severity="danger"
                className="px-6 h-[42px]"
                onClick={() => {
                  setShowList(false);
                  setExpandedRow(null);
                }}
              />
            </div>
          </div>
        </div>

        {showList && (
          <div className="bg-white p-6 rounded-lg border shadow-sm">
            <h3 className="text-lg font-bold mb-4 border-b pb-2">Details</h3>

            <Table
              columns={columns}
              data={tableData}
              showPagination
              rowsPerPage={10}
              {...{ format: "department_enquiry_list" }}
            />

            {enquiryData.map(
              item =>
                expandedRow === item.id && (
                  <div
                    key={item.id}
                    className="mt-4 p-4 border rounded bg-gray-50 space-y-2"
                  >
                    <p>
                      <strong>
                        First Hearing of the criminal before the investigating
                        officer and reading of the charge sheet:
                      </strong>{" "}
                      {item.firstHearing}
                    </p>
                    <p>
                      <strong>Imputed Date:</strong> {item.imputedDate}
                    </p>
                    <p>
                      <strong>Notice Date:</strong> {item.noticeDate}
                    </p>

                    <Button
                      label="Action"
                      icon="pi pi-eye"
                      className="bg-red-600 mt-2"
                      onClick={() => setShowStatusDialog(true)}
                    />
                  </div>
                )
            )}
          </div>
        )}
      </div>

      <Dialog
        header="Department Enquiry Status"
        visible={showStatusDialog}
        style={{ width: "500px" }}
        onHide={() => setShowStatusDialog(false)}
        draggable={false}
      >
        <div className="space-y-4">
          <p className="font-medium">
            Do you Want to Close the Departmental Inquiry?
          </p>

          <div className="flex gap-6">
            <div className="flex align-items-center gap-2">
              <RadioButton
                value="OPEN"
                checked={enquiryStatus === "OPEN"}
                onChange={() => setEnquiryStatus("OPEN")}
              />
              <label>OPEN</label>
            </div>

            <div className="flex align-items-center gap-2">
              <RadioButton
                value="CLOSE"
                checked={enquiryStatus === "CLOSE"}
                onChange={() => setEnquiryStatus("CLOSE")}
              />
              <label>CLOSE</label>
            </div>
          </div>

          {enquiryStatus === "CLOSE" && (
            <div className="space-y-4 mt-4">
              <h4 className="font-semibold">Enquiry Details</h4>

              <div className="grid grid-cols-2 gap-4">
                <Input label="Order No*" placeholder="Enter Order Number" />
                <DateInput label="Order Date*" placeholder="mm/dd/yyyy" />
              </div>

              <Input label="Remark*" placeholder="Enter Remark" />
            </div>
          )}

          <div className="flex justify-end gap-3 mt-6">
            <Button
              label="Save"
              className="bg-green-600"
              onClick={() => {
                setShowStatusDialog(false);
                setShowConfirmDialog(true);
              }}
            />
            <Button
              label="Close"
              severity="secondary"
              onClick={() => setShowStatusDialog(false)}
            />
          </div>
        </div>
      </Dialog>

      <Dialog
        header="Confirmation"
        visible={showConfirmDialog}
        style={{ width: "400px" }}
        onHide={() => setShowConfirmDialog(false)}
        draggable={false}
      >
        <div className="text-center space-y-4">
          <p>Are you sure you want to save?</p>
          <div className="flex justify-center gap-3">
            <Button
              label="Yes"
              className="bg-blue-600"
              onClick={() => {
                setShowConfirmDialog(false);
                setShowSuccessDialog(true);
              }}
            />
            <Button
              label="Cancel"
              severity="danger"
              outlined
              onClick={() => setShowConfirmDialog(false)}
            />
          </div>
        </div>
      </Dialog>

      <Dialog
        header="Success"
        visible={showSuccessDialog}
        style={{ width: "350px" }}
        onHide={() => setShowSuccessDialog(false)}
        draggable={false}
      >
        <div className="text-center space-y-4">
          <p className="text-green-600 font-semibold">
            Record Saved Successfully!
          </p>
          <Button
            label="OK"
            className="bg-green-600"
            onClick={() => setShowSuccessDialog(false)}
          />
        </div>
      </Dialog>
    </PageLayout>
  );
};

export default DepartmentEnquiryList;
