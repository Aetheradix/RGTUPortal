import React, { useState, useRef } from "react";
import PageLayout from "../../../components/PageLayout";
import { Button } from "primereact/button";
import { Dropdown, type DropdownChangeEvent } from "primereact/dropdown";
import { DataTable, type DataTableExpandedRows, type DataTableValueArray } from "primereact/datatable";
import { Column } from "primereact/column";
import { InputText } from "primereact/inputtext";
import { Card } from "primereact/card";
import { ConfirmDialog, confirmDialog } from 'primereact/confirmdialog';
import { Toast } from 'primereact/toast';

interface NOCApplication {
  id: number;
  deceasedStaff: string;
  designation: string;
  dod: string;
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
  deceasedCode: string;
  lastPostingDistrict: string;
  address: string;
  familyCount: number;
  department: string;
  receiptDate: string;
  cadreDesignation: string;
}

const HodNOCSentToCollector: React.FC = () => {
  const [selectedDistrict, setSelectedDistrict] = useState<string | null>(null);
  const [showList, setShowList] = useState<boolean>(false);
  const [selectedApp, setSelectedApp] = useState<NOCApplication | null>(null);
  const [jobStatus, setJobStatus] = useState<string | null>(null);
  const [expandedRows, setExpandedRows] = useState<DataTableExpandedRows | DataTableValueArray>([]);
  
  const detailRef = useRef<HTMLDivElement>(null);
  const toast = useRef<Toast>(null);

  const districts = ["Agar Malwa", "Alirajpur", "Anuppur", "Bhopal", "Indore", "Ujjain"].map(d => ({ label: d, value: d }));

  const mockData: NOCApplication[] = [
    { 
      id: 1, deceasedStaff: "Puran Singh Kushawah", designation: "Asstt Teacher(LDT)", dod: "28/12/2021", 
      applicantName: "BRAJESH KUSHVAH", gender: "Male", classType: "S.C.", dob: "10/08/1997", 
      mobile: "70477701125", relationship: "Son", maritalStatus: "अविवाहित", postOption: "शैक्षणिक संवर्ग", 
      qualification: "12 PCM B SC COMPUTER SCIENCE", tetStatus: "नहीं", deceasedCode: "10023451",
      lastPostingDistrict: "Bhopal", address: "Gram Post Pipaliya, Bhopal", familyCount: 5, 
      department: "School Education", receiptDate: "15/02/2022", cadreDesignation: "प्रयोगशाला शिक्षक"
    }
  ];

  const handleActionClick = (rowData: NOCApplication) => {
    setSelectedApp(rowData);
    setTimeout(() => detailRef.current?.scrollIntoView({ behavior: 'smooth' }), 150);
  };

  const confirmSave = () => {
    confirmDialog({
      message: 'Are you sure you want to save the job status?',
      header: 'Confirmation',
      icon: 'pi pi-exclamation-triangle',
      accept: () => toast.current?.show({ severity: 'success', summary: 'Success', detail: 'Job status updated successfully', life: 3000 })
    });
  };

  const rowExpansionTemplate = (data: NOCApplication) => (
    <div className="p-4 bg-gray-50 border-l-4 border-blue-600 ml-12 shadow-inner">
      <div className="flex flex-col gap-3 text-sm">
        <div className="flex items-start"><span className="font-bold text-gray-700 w-96 uppercase">Applicant's Relation with Deceased Teacher</span><span className="text-blue-900 font-semibold">: {data.relationship}</span></div>
        <div className="flex items-start"><span className="font-bold text-gray-700 w-96 uppercase">Applicant Marital Status</span><span className="text-blue-900 font-semibold">: {data.maritalStatus}</span></div>
        <div className="flex items-start"><span className="font-bold text-gray-700 w-96 uppercase">Selected Option of Post for Appointment</span><span className="text-blue-900 font-semibold">: {data.postOption}</span></div>
        <div className="flex items-start"><span className="font-bold text-gray-700 w-96 uppercase">Applicant Educational Qualification</span><span className="text-blue-900 font-semibold">: {data.qualification}</span></div>
        <div className="flex items-start"><span className="font-bold text-gray-700 w-96 uppercase leading-tight">Status of Passing Primary Teacher Eligibility Test for Primary Teacher</span><span className="text-blue-900 font-semibold">: {data.tetStatus}</span></div>
        <div className="flex items-start mt-2">
          <span className="font-bold text-gray-700 w-96 uppercase">Action</span>
          <span className="font-semibold">: <Button label="Action" className="p-button-success p-button-sm py-1 ml-1" onClick={() => handleActionClick(data)} /></span>
        </div>
      </div>
    </div>
  );

  return (
    <PageLayout title="NOC Sent to District Collector">
      <Toast ref={toast} />
      <ConfirmDialog />
      
      <div className="flex justify-between items-start mb-4">
        <div className="text-xl font-bold text-blue-900 uppercase">NOC Sent to District Collector</div>
        <div className="text-xs text-gray-500 font-semibold uppercase tracking-wider text-right">Master &gt; HOD Anukampa Appointment &gt; NOC Sent to District Collector</div>
      </div>

      <Card title="NOC Report was sent to the District Collector at the HOD level" className="mb-6 shadow-sm border-t-4 border-blue-900">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-end">
          <div className="flex flex-col gap-2">
            <label className="text-xs font-bold uppercase">District *</label>
            <Dropdown value={selectedDistrict} options={districts} onChange={(e: DropdownChangeEvent) => setSelectedDistrict(e.value)} placeholder="--Select--" filter className="w-full" />
          </div>
          <div className="flex gap-2">
            <Button label="Search" icon="pi pi-search" onClick={() => setShowList(true)} className="bg-blue-800 border-none" />
          </div>
        </div>
      </Card>

      {showList && (
        <Card title="Details" className="mb-6">
          <DataTable value={mockData} expandedRows={expandedRows} onRowToggle={(e) => setExpandedRows(e.data)}
            rowExpansionTemplate={rowExpansionTemplate} dataKey="id" paginator rows={10} className="p-datatable-sm" showGridlines stripedRows>
            <Column expander style={{ width: '3rem' }} />
            <Column field="id" header="Sr.No." />
            <Column field="deceasedStaff" header="Deceased Employee / Officer" sortable />
            <Column field="designation" header="Designation" />
            <Column field="dod" header="Death Date" />
            <Column field="applicantName" header="Applicant Name" className="font-bold text-blue-700" />
            <Column field="gender" header="Gender" />
            <Column field="classType" header="Class" />
            <Column field="dob" header="Applicant D.O.B" />
            <Column field="mobile" header="Mobile Number" />
          </DataTable>
        </Card>
      )}

      {selectedApp && (
        <div ref={detailRef} className="space-y-6 pb-20 mt-10 animate-fade-in">
         
          <Card title="Details of Deceased Employee">
             <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div className="flex flex-col"><label className="font-bold uppercase text-xs">Employee Code*</label><InputText value={selectedApp.deceasedCode} readOnly className="bg-gray-50" /></div>
                <div className="flex flex-col"><label className="font-bold uppercase text-xs">Name of Deceased Employee*</label><InputText value={selectedApp.deceasedStaff} readOnly className="bg-gray-50" /></div>
                <div className="flex flex-col"><label className="font-bold uppercase text-xs">Gender*</label><InputText value={selectedApp.gender} readOnly className="bg-gray-50" /></div>
                <div className="flex flex-col"><label className="font-bold uppercase text-xs">Caste*</label><InputText value={selectedApp.classType} readOnly className="bg-gray-50" /></div>
                <div className="flex flex-col"><label className="font-bold uppercase text-xs">Last Posting District*</label><InputText value={selectedApp.lastPostingDistrict} readOnly className="bg-gray-50" /></div>
                <div className="flex flex-col"><label className="font-bold uppercase text-xs">Deceased Employee Cadre*</label><InputText value={selectedApp.postOption} readOnly className="bg-gray-50" /></div>
                <div className="flex flex-col"><label className="font-bold uppercase text-xs">Deceased Officer/Employee Designation*</label><InputText value={selectedApp.designation} readOnly className="bg-gray-50" /></div>
                <div className="flex flex-col md:col-span-2"><label className="font-bold uppercase text-xs">Last school/Office and Employee Address *</label><InputText value={selectedApp.address} readOnly className="bg-gray-50" /></div>
                <div className="flex flex-col"><label className="font-bold uppercase text-xs">Cause of Death*</label><InputText value="Natural" readOnly className="bg-gray-50" /></div>
                <div className="flex flex-col"><label className="font-bold uppercase text-xs">Date Of Death*</label><InputText value={selectedApp.dod} readOnly className="bg-gray-50" /></div>
                <div className="flex flex-col"><label className="font-bold uppercase text-xs">Number of Family Members*</label><InputText value={selectedApp.familyCount.toString()} readOnly className="bg-gray-50" /></div>
                <div className="flex flex-col"><label className="font-bold uppercase text-xs">Department Name*</label><InputText value={selectedApp.department} readOnly className="bg-gray-50" /></div>
                <div className="flex flex-col"><label className="font-bold uppercase text-xs">Date of Receiving of Application*</label><InputText value={selectedApp.receiptDate} readOnly className="bg-gray-50" /></div>
             </div>
          </Card>

          <Card title="Information About All the Family Members">
             <DataTable value={[
               { sr: 1, name: "KHILONI KUSHWAH", rel: "Wife/ Husband", biz: "कोई व्यवसाय नही", dob: "01/01/1973" },
               { sr: 2, name: "RAHUL KUSHWAH", rel: "Son", biz: "कोई व्यवसाय नही", dob: "17/07/1995" },
               { sr: 3, name: "BRAJESH KUSHWAH", rel: "Son", biz: "कोई व्यवसाय नही", dob: "10/08/1997" },
               { sr: 4, name: "CHHAYA KUSHWAH", rel: "Daughter", biz: "कोई व्यवसाय नही", dob: "02/08/2002" },
               { sr: 5, name: "OTU KUSHWAH", rel: "Son", biz: "कोई व्यवसाय नही", dob: "30/07/2003" }
             ]} className="p-datatable-sm" showGridlines stripedRows>
                <Column field="sr" header="Sr. No." />
                <Column field="name" header="Name of Member" />
                <Column field="rel" header="Relationship with the Deceased" />
                <Column field="biz" header="Business" />
                <Column field="dob" header="Date of Birth" />
             </DataTable>
          </Card>

         
          <Card title="Details of the Family Member who has Applied for Appointment">
             <DataTable value={[selectedApp]} className="p-datatable-sm" showGridlines stripedRows>
                <Column header="Sr. No." body={() => 1} />
                <Column field="applicantName" header="Applicant's Name" />
                <Column field="gender" header="Gender" />
                <Column field="dob" header="Date of Birth" />
                <Column field="mobile" header="Mobile No." />
                <Column field="relationship" header="Relationship" />
                <Column field="maritalStatus" header="Marital Status" />
                <Column field="qualification" header="Educational Qualification" />
                <Column field="postOption" header="Cadre for Appointment" />
                <Column field="cadreDesignation" header="Designation for Appointment" />
                <Column field="tetStatus" header="TET Status" />
             </DataTable>
          </Card>

        
          <Card title="Documents">
             <DataTable value={[
               { sr: 1, name: "दिवंगत शासकीय सेवक का मृत्यु प्रमाण पत्र" },
               { sr: 2, name: "जन्मतिथि के प्रमाणीकरण हेतु हाई स्कूल की अंक सूची अथवा सक्षम अधिकारी द्वारा जारी किया गया जन्म प्रमाण पत्र" },
               { sr: 3, name: "स्थानीय / मूल निवासी होने का प्रमाण पत्र" },
               { sr: 4, name: "यदि आवेदक अनुसूचित जाति/जनजाति तथा अन्य पिछड़े वर्ग का हो तो प्रमाण पत्र." },
               { sr: 5, name: "हायर सेकेण्डरी /स्नातक या अन्य परीक्षा उत्तीर्ण करने के प्रमाण पत्र." },
               { sr: 6, name: "परिवार के सभी सदस्यों द्वारा आवेदक को अनुकंपा नियुक्ति का लाभ लेने की सहमति का शपथ पत्र" },
               { sr: 7, name: "आवेदक का फोटो अपलोड करे." },
               { sr: 8, name: "राशन कार्ड / सेवा पुस्तिका अथवा अन्य प्रमाणित दस्तावेज जिसमे परिवार के सदस्यों की जानकारी हो" }
             ]} className="p-datatable-sm" showGridlines stripedRows>
                <Column field="sr" header="Sr. No" style={{width: '60px'}} />
                <Column field="name" header="Document" />
                <Column header="View Document" body={() => <Button icon="pi pi-file-pdf" className="p-button-text p-button-danger" label="View" />} />
             </DataTable>
          </Card>

          
          <Card title="Job Status" className="bg-gray-50 border-t-4 border-green-600">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col gap-2">
                <label className="font-bold text-sm">Enter Job Status *</label>
                <Dropdown value={jobStatus} options={[{label:"Pending by collector", value:"p1"},{label:"Pending by DEO", value:"p2"},{label:"Got a job", value:"p3"}]} 
                  onChange={(e) => setJobStatus(e.value)} placeholder="--Select--" className="w-full" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-bold text-sm">Remark</label>
                <InputText placeholder="Enter remark..." />
              </div>
            </div>
            <div className="flex justify-end gap-3 mt-6">
               <Button label="Clear" className="p-button-outlined p-button-secondary px-6" onClick={() => setJobStatus(null)} />
               <Button label="Save" className="p-button-success px-8" onClick={confirmSave} />
            </div>
          </Card>
        </div>
      )}
    </PageLayout>
  );
};

export default HodNOCSentToCollector;