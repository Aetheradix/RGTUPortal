import React, { useState, useRef } from "react";
import PageLayout from "../../../components/PageLayout";
import { Button } from "primereact/button";
import { Dropdown } from "primereact/dropdown";
import { DataTable, type DataTableExpandedRows, type DataTableValueArray } from "primereact/datatable";
import { Column } from "primereact/column";
import { InputText } from "primereact/inputtext";
import { Card } from "primereact/card";
import { InputTextarea } from "primereact/inputtextarea";
import { Toast } from "primereact/toast";
import { ConfirmDialog, confirmDialog } from "primereact/confirmdialog";

interface HODPendingApp {
  id: number;
  deceasedCode: string;
  deceasedStaff: string;
  designation: string;
  dod: string;
  district: string;
  applicantName: string;
  gender: string;
  classType: string;
  dob: string;
  mobile: string;
  relationship: string;
  maritalStatus: string;
  postOption: string;
  qualification: string;
  tetStatus: string;
  address: string;
  familyCount: number;
  department: string;
  receiptDate: string;
  cadreDesignation: string;
}

const HodDecisionPendingApps: React.FC = () => {
  const [selectedDistrict, setSelectedDistrict] = useState<string | null>(null);
  const [showList, setShowList] = useState<boolean>(false);
  const [selectedApp, setSelectedApp] = useState<HODPendingApp | null>(null);
  const [expandedRows, setExpandedRows] = useState<DataTableExpandedRows | DataTableValueArray>([]);
  
  const detailRef = useRef<HTMLDivElement>(null);
  const toast = useRef<Toast>(null);

  const districts = ["Bhopal", "Shajapur", "Indore", "Ujjain", "Narmadapuram"].map(d => ({ label: d, value: d }));

  const mockData: HODPendingApp[] = [
    { 
      id: 1, deceasedCode: "10023451", deceasedStaff: "Dariyav Singh Malviya", designation: "Asstt Teacher(LDT)", 
      dod: "23/05/2020", district: "Shajapur", applicantName: "AAMIR MANSURI", gender: "M", classType: "GENERAL", 
      dob: "23/02/1994", mobile: "6261985501", relationship: "Son", maritalStatus: "वैवाहिक", 
      postOption: "शैक्षणिक संवर्ग", qualification: "12th MATHS, B.sc cs, D.El.Ed", tetStatus: "Status of Passing Primary Teacher Eligibility", 
      address: "Gram Post Pipaliya, Shajapur", familyCount: 7, department: "Education", 
      receiptDate: "15/02/2022", cadreDesignation: "प्रयोगशाला शिक्षक" 
    }
  ];

  const familyMembers = [
    { sr: 1, name: "NASREEN MANSURI", relation: "Wife Husband", business: "कोई व्यवसाय नहीं", dob: "23/04/1968" },
    { sr: 2, name: "ARSHAD MANSURI", relation: "Son", business: "कोई व्यवसाय नहीं", dob: "06/05/1993" },
    { sr: 3, name: "ASHRAF MANSURI", relation: "Son", business: "कोई व्यवसाय नहीं", dob: "21/09/1993" },
    { sr: 4, name: "AAJAM MANSURI", relation: "Son", business: "कोई व्यवसाय नहीं", dob: "03/07/1997" }
  ];

  const documents = [
    { sr: 1, name: "दिवंगत शासकीय सेवक का मृत्यु प्रमाण पत्र" },
    { sr: 2, name: "जन्मतिथि के प्रमाणीकरण हेतु हाई स्कूल की अंक सूची अथवा सक्षम अधिकारी द्वारा जारी किया गया जन्म प्रमाण पत्र" },
    { sr: 3, name: "स्थानीय / मूल निवासी होने का प्रमाण पत्र" },
    { sr: 4, name: "यदि आवेदक अनुसूचित जाति/जनजाति तथा अन्य पिछड़े वर्ग ka ho to प्रमाण पत्र." },
    { sr: 5, name: "हायर सेकेण्डरी घातक या अन्य परीक्षा उत्तीर्ण करने का प्रमाण पत्र." },
    { sr: 6, name: "परिवार के सभी सदस्यों द्वारा आवेदक को अनुकंपा नियुक्ति का लाभ लेने की सहमति का शपथ पत्र" },
    { sr: 7, name: "आवेदक का फोटो अपलोड करे." },
    { sr: 8, name: "राशन कार्ड / सेवा पुस्तिका अथवा अन्य प्रमाणित दस्तावेज जिसमे परिवार के सदस्यों की जानकारी हो" }
  ];

  const handleDisposeClick = (rowData: HODPendingApp) => {
    setSelectedApp(rowData);
    setTimeout(() => detailRef.current?.scrollIntoView({ behavior: 'smooth' }), 200);
  };

  const confirmUpdate = () => {
    confirmDialog({
      message: 'Are you sure you want to update this application?',
      header: 'Update Confirmation',
      icon: 'pi pi-info-circle',
      accept: () => toast.current?.show({ severity: 'success', summary: 'Success', detail: 'Update Completed', life: 3000 })
    });
  };

  const rowExpansionTemplate = (data: HODPendingApp) => (
    <div className="p-4 bg-blue-50 border-l-4 border-blue-400 ml-10 flex justify-between items-center">
      <div className="grid grid-cols-2 gap-x-12 text-sm">
        <p><strong>Date of Birth:</strong> {data.dob}</p>
        <p><strong>Relation with Deceased:</strong> {data.relationship}</p>
      </div>
      <Button label="Dispose" icon="pi pi-check-square" className="p-button-success p-button-sm" onClick={() => handleDisposeClick(data)} />
    </div>
  );

  return (
    <PageLayout title="HOD Anukampa Dashboard">
      <Toast ref={toast} />
      <ConfirmDialog />
      
      <div className="text-xl font-bold text-blue-900 mb-4 uppercase">Decide on Pending Applications at H.O. Level</div>

      <Card className="mb-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-end">
          <div className="flex flex-col gap-2">
            <label className="font-bold text-sm">District *</label>
            <Dropdown value={selectedDistrict} options={districts} onChange={(e) => setSelectedDistrict(e.value)} placeholder="--Select--" filter className="w-full" />
          </div>
          <div className="flex gap-2">
            <Button label="Search" icon="pi pi-search" className="bg-blue-800" onClick={() => setShowList(true)} />
            <Button label="Clear" icon="pi pi-refresh" className="p-button-outlined" onClick={() => {setShowList(false); setSelectedApp(null);}} />
          </div>
        </div>
      </Card>

      {showList && (
        <Card title="Details" className="mb-6 shadow-lg">
          <DataTable 
            value={mockData} expandedRows={expandedRows} onRowToggle={(e) => setExpandedRows(e.data)}
            rowExpansionTemplate={rowExpansionTemplate} dataKey="id"
            paginator rows={10} showGridlines stripedRows className="p-datatable-sm"
          >
            <Column expander style={{ width: '3rem' }} />
            <Column field="id" header="Sr. No." />
            <Column field="deceasedStaff" header="Deceased Employee / Officer" sortable />
            <Column field="designation" header="Designation" />
            <Column field="dod" header="Date of Death" />
            <Column field="district" header="District" />
            <Column field="applicantName" header="Applicant Name" />
            <Column field="gender" header="Gender" />
            <Column field="classType" header="Class" />
            <Column field="maritalStatus" header="Marital Status" />
          </DataTable>
        </Card>
      )}

      {selectedApp && (
        <div ref={detailRef} className="space-y-6 animate-fade-in pb-20 mt-8">
          <h2 className="text-xl font-bold border-b-2 border-blue-800 pb-2 text-blue-800">Decide on Pending Applications</h2>
          
          <Card title="PERSONAL INFORMATION">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div className="flex flex-col gap-1"><label className="font-bold uppercase text-xs">Employee Code *</label><InputText value={selectedApp.deceasedCode} readOnly /></div>
              <div className="flex flex-col gap-1"><label className="font-bold uppercase text-xs">Name of Deceased Employee *</label><InputText value={selectedApp.deceasedStaff} readOnly /></div>
              <div className="flex flex-col gap-1"><label className="font-bold uppercase text-xs">Gender *</label><InputText value={selectedApp.gender} readOnly /></div>
              <div className="flex flex-col gap-1"><label className="font-bold uppercase text-xs">Category *</label><InputText value={selectedApp.classType} readOnly /></div>
              <div className="flex flex-col gap-1"><label className="font-bold uppercase text-xs">Last Posting District *</label><InputText value={selectedApp.district} readOnly /></div>
              <div className="flex flex-col gap-1"><label className="font-bold uppercase text-xs">Deceased Staff Cadre *</label><InputText value="Regular Class-III" readOnly /></div>
              <div className="flex flex-col gap-1 md:col-span-1"><label className="font-bold uppercase text-xs">Deceased Officer/Employee Designation *</label><InputText value="Accountant" readOnly /></div>
              <div className="flex flex-col gap-1 md:col-span-2"><label className="font-bold uppercase text-xs">Last School/Office & Employee Address *</label><InputText value={selectedApp.address} readOnly /></div>
              <div className="flex flex-col gap-1"><label className="font-bold uppercase text-xs">Date of Death *</label><InputText value={selectedApp.dod} readOnly /></div>
              <div className="flex flex-col gap-1"><label className="font-bold uppercase text-xs">Family Count *</label><InputText value="7" readOnly /></div>
              <div className="flex flex-col gap-1"><label className="font-bold uppercase text-xs">Department Name *</label><InputText value="Education" readOnly /></div>
              <div className="flex flex-col gap-1"><label className="font-bold uppercase text-xs">Date of Receipt *</label><InputText value={selectedApp.receiptDate} readOnly /></div>
            </div>
          </Card>

          <Card title="Details of all the family members">
            <DataTable value={familyMembers} showGridlines className="p-datatable-sm">
              <Column field="sr" header="Sr. No." style={{width: '3rem'}} />
              <Column field="name" header="Member Name" />
              <Column field="relation" header="Relation with Deceased" />
              <Column field="business" header="Business" />
              <Column field="dob" header="Date of Birth" />
            </DataTable>
          </Card>

          <Card title="Details of Family Member who has Applied for Appointment">
            <div className="overflow-x-auto">
                <table className="w-full text-xs border border-gray-300">
                    <thead className="bg-gray-100">
                        <tr>
                            <th className="border p-2">Applicant Name</th>
                            <th className="border p-2">Gender</th>
                            <th className="border p-2">DOB</th>
                            <th className="border p-2">Mobile</th>
                            <th className="border p-2">Relation</th>
                            <th className="border p-2">Status</th>
                            <th className="border p-2">Qualification</th>
                            <th className="border p-2">Cadre</th>
                            <th className="border p-2">Designation</th>
                            <th className="border p-2">TET Pass</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="border p-2 text-center">{selectedApp.applicantName}</td>
                            <td className="border p-2 text-center">{selectedApp.gender}</td>
                            <td className="border p-2 text-center">{selectedApp.dob}</td>
                            <td className="border p-2 text-center">{selectedApp.mobile}</td>
                            <td className="border p-2 text-center">{selectedApp.relationship}</td>
                            <td className="border p-2 text-center">{selectedApp.maritalStatus}</td>
                            <td className="border p-2 text-center">12th MATHS, B.sc cs, D.El.Ed</td>
                            <td className="border p-2 text-center">{selectedApp.postOption}</td>
                            <td className="border p-2 text-center">{selectedApp.cadreDesignation}</td>
                            <td className="border p-2 text-center">Yes</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
              <div className="flex flex-col gap-2"><label className="font-bold text-sm uppercase">Application Status*</label><InputText value="Forwarded to Division" readOnly className="bg-gray-50" /></div>
              <div className="flex flex-col gap-2"><label className="font-bold text-sm uppercase">Remark :*</label><InputTextarea rows={2} placeholder="HOD Remark" /></div>
            </div>
          </Card>
          <Card title="Document Details">
            <DataTable value={documents} showGridlines className="p-datatable-sm">
              <Column field="sr" header="Sr. No" style={{width: '3rem'}} />
              <Column field="name" header="Document Name" />
              <Column header="View Document" body={() => <Button icon="pi pi-file-pdf" className="p-button-text p-button-danger" label="View" />} />
            </DataTable>
          </Card>

          <Card title="Final Action" className="bg-gray-50 border-t-4 border-blue-900 shadow-md">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col gap-2">
                <label className="font-bold text-sm uppercase text-blue-900">Take Action *</label>
                <Dropdown 
                  options={[
                    { label: "Appointment order issued", value: "issued" },
                    { label: "Paid Amount", value: "paid" },
                    { label: "NOC has been released, the case has been sent to the District Collector", value: "noc" }
                  ]} 
                  placeholder="--Select Action--" className="w-full"
                />
              </div>
              <div className="flex gap-3 justify-end items-end">
                <Button label="Clear" icon="pi pi-times" className="p-button-outlined p-button-secondary px-6" onClick={() => setSelectedApp(null)} />
                <Button label="Update" icon="pi pi-check" className="p-button-success px-8" onClick={confirmUpdate} />
              </div>
            </div>
          </Card>
        </div>
      )}
    </PageLayout>
  );
};

export default HodDecisionPendingApps;