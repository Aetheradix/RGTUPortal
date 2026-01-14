import React, { useState } from "react";
import PageLayout from "../../../components/PageLayout";
import { DataTable, type DataTableExpandedRows, type DataTableValueArray } from "primereact/datatable";
import { Column } from "primereact/column";
import { InputText } from "primereact/inputtext";
import { Dropdown } from "primereact/dropdown";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
interface DisposeDetail {
  id: number;
  applicantName: string;
  disposeType: string;
  letterNo: string;
  letterDate: string;
  appointedPost: string;
  organization: string;
  deceasedName: string;
  rejectionReason: string;
  paymentDate: string;
  paymentAmount: number;
  orderNo: string;
  checkNo: string;
}
const BlockWiseCountingReport: React.FC = () => {
  const [selectedDistrict, setSelectedDistrict] = useState<string | null>(null);
  const [showTable, setShowTable] = useState<boolean>(false);
  const [globalFilter, setGlobalFilter] = useState<string>("");
  const [expandedRows, setExpandedRows] = useState<DataTableExpandedRows | DataTableValueArray>([]);
  const districts = [
    { label: "Bhopal भोपाल", value: "Bhopal" },
    { label: "Agar Malwa आगर मालwa", value: "Agar Malwa" },
    { label: "Raisen रायसेन", value: "Raisen" },
    { label: "Vidisha विदिशा", value: "Vidisha" },
  ];
  const mockData: DisposeDetail[] = [
    {
      id: 1,
      applicantName: "ANITA IMNE",
      disposeType: "NA",
      letterNo: "NA",
      letterDate: "NA",
      appointedPost: "NA",
      organization: "NA",
      deceasedName: "Manphool Imne",
      rejectionReason: "NA",
      paymentDate: "3/2/1900",
      paymentAmount: 0,
      orderNo: "NA",
      checkNo: "NA"
    },
    {
      id: 2,
      applicantName: "pinky vishwakarma",
      disposeType: "Appointment order issued",
      letterNo: "04",
      letterDate: "28/06/2021",
      appointedPost: "Prayogshala Shikshak",
      organization: "govt hss parwalia sadak",
      deceasedName: "Suresh Vishwakarma",
      rejectionReason: "NA",
      paymentDate: "NA",
      paymentAmount: 0,
      orderNo: "NA",
      checkNo: "NA"
    }
  ];
  const rowExpansionTemplate = (data: DisposeDetail) => {
    return (
      <div className="p-4 bg-gray-50 border-l-4 border-blue-500 ml-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
          <div className="flex flex-col"><span className="font-bold text-gray-500 uppercase text-xs">Deceased Officer / Employee Name</span><span>{data.deceasedName}</span></div>
          <div className="flex flex-col"><span className="font-bold text-gray-500 uppercase text-xs">Reasons for Rejection</span><span>{data.rejectionReason}</span></div>
          <div className="flex flex-col"><span className="font-bold text-gray-500 uppercase text-xs">Payment Date</span><span>{data.paymentDate}</span></div>
          <div className="flex flex-col"><span className="font-bold text-gray-500 uppercase text-xs">Payment</span><span>{data.paymentAmount}</span></div>
          <div className="flex flex-col"><span className="font-bold text-gray-500 uppercase text-xs">Order No.</span><span>{data.orderNo}</span></div>
          <div className="flex flex-col"><span className="font-bold text-gray-500 uppercase text-xs">Check No.</span><span>{data.checkNo}</span></div>
        </div>
      </div>
    );
  };
  const tableHeader = (
    <div className="flex justify-between items-center">
      <div className="flex items-center gap-2">
        <span className="text-sm">Show entries</span>
        <Dropdown options={[10, 25, 50]} placeholder="10" className="w-20" />
      </div>
      <span className="p-input-icon-left">
        <i className="pi pi-search" />
        <InputText 
          value={globalFilter} 
          onChange={(e) => setGlobalFilter(e.target.value)} 
          placeholder="Search..." 
          className="p-inputtext-sm" 
        />
      </span>
    </div>
  );
  return (
    <PageLayout title="HRMS - Block Wise Counting Report">
      <div className="text-xl font-bold text-blue-800 mb-4 uppercase">Block Wise Counting Report</div>
      <div className="bg-white p-6 rounded shadow-sm border mb-6">
        <div className="flex flex-wrap items-end gap-4">
          <div className="flex flex-col gap-2 w-full md:w-1/3">
            <label className="font-bold text-sm">District *</label>
            <Dropdown 
              value={selectedDistrict} 
              options={districts} 
              onChange={(e) => setSelectedDistrict(e.value)} 
              placeholder="-- Select --" 
              filter 
              className="w-full"
            />
          </div>
          <div className="flex gap-2">
            <Button label="Search" icon="pi pi-search" onClick={() => setShowTable(true)} className="bg-blue-800 border-none" />
            <Button label="Clear" icon="pi pi-refresh" className="p-button-outlined p-button-secondary" onClick={() => {setShowTable(false); setSelectedDistrict(null); setGlobalFilter("");}} />
          </div>
        </div>
      </div>

      {showTable && (
        <Card title="District-Wise Disposed Details" className="shadow-lg border-t-4 border-blue-600">
          <DataTable
            value={mockData}
            header={tableHeader}
            globalFilter={globalFilter}
            paginator
            rows={10}
            className="p-datatable-sm"
            stripedRows
            showGridlines
            dataKey="id"
            expandedRows={expandedRows}
            onRowToggle={(e) => setExpandedRows(e.data)}
            rowExpansionTemplate={rowExpansionTemplate}
          >
            <Column expander style={{ width: '3rem' }} />
            <Column field="id" header="Sr. No." />
            <Column field="applicantName" header="Applicant Name" sortable className="font-bold text-blue-700" />
            <Column field="disposeType" header="Dispose Type" />
            <Column field="letterNo" header="Appointment Letter No." />
            <Column field="letterDate" header="Letter Date" />
            <Column field="appointedPost" header="Appointed Post" />
            <Column field="organization" header="Name of Appointing Organization" />
            <Column 
              header="View PDF" 
              body={() => <Button icon="pi pi-file-pdf" className="p-button-text p-button-danger p-0" tooltip="View Order" />} 
            />
          </DataTable>
        </Card>
      )}
    </PageLayout>
  );
};
export default BlockWiseCountingReport;