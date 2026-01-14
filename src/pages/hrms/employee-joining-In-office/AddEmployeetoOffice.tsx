import React, { useState } from "react";
import PageLayout from "@/components/PageLayout";
import Table from "@/ui/shared/Table";
import Input, { DateInput } from "@/ui/shared/Input";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";

interface EmployeeRow {
  id: number;
  officeType: string;
  employeeName: string;
  designation: string;
  department: string;
  subject: string;
  currentOfficeType: string;
  postedFrom: string;
  district: string;
  block: string;
  officeCode: string;
}

const EmployeeJoiningInOfficee: React.FC = () => {
  const [expandedRowId, setExpandedRowId] = useState<number | null>(null);
  const [showDialog, setShowDialog] = useState(false);

  const data: EmployeeRow[] = [
    {
      id: 1,
      officeType: "Head Office",
      employeeName: "Ashok Kumar",
      designation: "Professor",
      department: "Higher Education Department",
      subject: "Hindi",
      currentOfficeType: "Head Office",
      postedFrom: "21-05-23",
      district: "Agar Malwa",
      block: "Agar",
      officeCode: "6564545",
    },
    {
      id: 2,
      officeType: "Head Office",
      employeeName: "Shiv Sharan",
      designation: "Lecturer",
      department: "Higher Education Department",
      subject: "English",
      currentOfficeType: "Joint Directors",
      postedFrom: "18-06-22",
      district: "Bhopal",
      block: "Bhopal",
      officeCode: "6564545",
    },
  ];

   const noWrapStyle={ whiteSpace : "nowrap"}
  const columns = [ 
    { field: "srNo", header: "Sr.No.", sortable: true,style:noWrapStyle },
    { field: "officeType", header: "Office Type", sortable: true ,style:noWrapStyle },
    { field: "employeeName", header: "Employee Name", sortable: true ,style:noWrapStyle },
    { field: "designation", header: "Employee Designation", sortable: true ,style:noWrapStyle },
    { field: "department", header: "Employee Department", sortable: true ,style:noWrapStyle },
    { field: "subject", header: "Employee Subject", sortable: true  ,style:noWrapStyle},
    { field: "currentOfficeType", header: "Office Type" , sortable: true ,style:noWrapStyle},
    { field: "postedFrom", header: "Posted From"  ,style:noWrapStyle},
    { field: "district", header: "District", sortable: true  ,style:noWrapStyle},
    { field: "block", header: "Block", sortable: true ,style:noWrapStyle},
    { field: "officeCode", header: "Office Code" ,style:noWrapStyle},
  ];

  const tableData = data.map((item, index) => ({
    srNo: (
      <div className="flex items-center gap-2">
        <button
          className="text-blue-600 font-bold"
          onClick={() =>
            setExpandedRowId(expandedRowId === item.id ? null : item.id)
          }
        >
          {expandedRowId === item.id ? "−" : "+"}
        </button>
        <span>{index + 1}</span>
      </div>
    ),
    ...item,
  }));

  return (
    <PageLayout title="Employee Joining In Office">
      <div className="bg-white p-6 rounded border">
        <h3 className="font-semibold mb-4">Pending Details</h3>

        <Table
          columns={columns}
          data={tableData}
          showPagination
          rowsPerPage={10}
        />

        {expandedRowId && (
          <div className="border-t mt-4 pt-4 text-sm space-y-2">
            <div>
              <b>Office Type:</b> Joint Directors
            </div>
            <div>
              <b>Reason For Transfer:</b> No
            </div>
            <div>
              <b>District:</b> Bhopal
            </div>
            <div>
              <b>Block:</b> Bhopal
            </div>
            <div>
              <b>Office Code:</b> 6564545
            </div>

            <div className="mt-5">
              <b>Action:</b>
              <span className="ml-4">
                <Button
                  label="Joining"
                  className="bg-green-600 text-sm px-3 py-1"
                  style={{ width: "100px",height:"20px"}}
                  onClick={() => setShowDialog(true)}
                />
              </span>
            </div>
          </div>
        )}
      </div>

      <Dialog
        header="Employee Joining Approval"
        visible={showDialog}
        style={{ width: "500px" }}
        onHide={() => setShowDialog(false)}
        draggable={false}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <DateInput label="New Joining Date" />
          <Input label="Remark" />
        </div>

        <div className="flex gap-3 mt-6">
          <Button label="Approve" className="bg-green-600" />
          <Button
            label="Close"
            severity="danger"
            onClick={() => setShowDialog(false)}
          />
        </div>
      </Dialog>
    </PageLayout>
  );
};

export default EmployeeJoiningInOfficee;
