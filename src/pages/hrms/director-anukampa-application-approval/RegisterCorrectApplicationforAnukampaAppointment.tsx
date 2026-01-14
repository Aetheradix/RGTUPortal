import React, { useState, useRef } from "react";
import PageLayout from "../../../components/PageLayout";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { Dropdown } from "primereact/dropdown";
import { Calendar } from "primereact/calendar";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Dialog } from "primereact/dialog";
import { FileUpload } from "primereact/fileupload";
import { Toast } from "primereact/toast";
import { ConfirmDialog, confirmDialog } from 'primereact/confirmdialog';

interface FamilyMember {
  id: string;
  srNo: number;
  name: string;
  relationship: string;
  business: string;
  gender: string;
  dob: Date | null;
}
const AnukampaApplicationRegister: React.FC = () => {
  const toast = useRef<Toast>(null);
  const [empCode, setEmpCode] = useState("");
  const [isSearched, setIsSearched] = useState(false);
  const [activeTab, setActiveTab] = useState<"personal" | "upload">("personal");
  const [showSuccessDialog, setShowSuccessDialog] = useState(false);
  const [deceasedData, setDeceasedData] = useState({
    name: "", gender: "", caste: "", district: "", cadre: "", designation: "", department: "",
    dod: null as Date | null, 
    cause: "", 
    survivors: ""
  });

  const [familyList, setFamilyList] = useState<FamilyMember[]>([]);
  const [newMember, setNewMember] = useState<FamilyMember>({
    id: "", srNo: 0, name: "", relationship: "", business: "", gender: "", dob: null
  });

  const handleSearch = () => {
    if (empCode.trim()) {
      setIsSearched(true);
      setDeceasedData({
        ...deceasedData,
        name: "Late Rajesh Kumar Shrivastava",
        gender: "Male",
        caste: "General",
        district: "Bhopal",
        cadre: "Academic Cadre",
        designation: "Assistant Teacher",
        department: "School Education Department",
        dod: null, cause: "", survivors: ""
      });
    }
  };

  const handleAddMember = () => {
    if (newMember.name && newMember.relationship) {
      const memberWithId = { 
        ...newMember, 
        id: Math.random().toString(36), 
        srNo: familyList.length + 1 
      };
      setFamilyList([...familyList, memberWithId]);
      setNewMember({ id: "", srNo: 0, name: "", relationship: "", business: "", gender: "", dob: null });
      toast.current?.show({ severity: 'success', summary: 'Success', detail: 'Member Added', life: 2000 });
    } else {
      toast.current?.show({ severity: 'warn', summary: 'Warning', detail: 'Fill Name and Relationship', life: 2000 });
    }
  };

  const confirmSave = () => {
    confirmDialog({
      message: 'Are you sure you want to save this application?',
      header: 'Confirmation',
      icon: 'pi pi-exclamation-triangle',
      acceptLabel: 'Yes',
      rejectLabel: 'No',
      accept: () => setShowSuccessDialog(true),
    });
  };

  const documentList = [
    "Death Certificate of Deceased Govt Servant", "Birth Certificate of the Applicant",
    "Certificate of Residency/Domicile", "Caste Certificate",
    "Passing Certificate (HS/Graduation)", "Consent Certificate from Family Head",
    "Applicant's Photo", "Ration Card", "Affidavit"
  ];

  return (
    <PageLayout title="Director Level Compassionate Appointment Application Register">
      <Toast ref={toast} />
      <ConfirmDialog />
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 mb-5">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-end">
          <div className="flex flex-col gap-2">
            <label className="text-xs font-bold text-gray-600 uppercase">Enter Employee ID*</label>
            <InputText value={empCode} onChange={(e) => setEmpCode(e.target.value)} placeholder="Enter ID" />
          </div>
          <div className="flex gap-2">
            <Button label="Search" icon="pi pi-search" onClick={handleSearch} className="bg-blue-600 border-none" />
            <Button label="Clear" icon="pi pi-refresh" className="p-button-outlined p-button-secondary" onClick={() => {setIsSearched(false); setEmpCode(""); setFamilyList([]);}} />
          </div>
        </div>
      </div>

      {isSearched && (
        <div className="bg-white rounded-lg shadow-md border border-gray-100 overflow-hidden">
          <div className="flex border-b bg-gray-50 font-bold">
            <button onClick={() => setActiveTab("personal")} className={`flex-1 p-4 ${activeTab === "personal" ? "bg-white text-blue-700 border-b-4 border-blue-600" : "text-gray-500"}`}>
              1. PERSONAL INFORMATION
            </button>
            <button onClick={() => setActiveTab("upload")} className={`flex-1 p-4 ${activeTab === "upload" ? "bg-white text-red-700 border-b-4 border-red-600" : "text-gray-500"}`}>
              2. UPLOAD DOCUMENTS
            </button>
          </div>

          <div className="p-6">
            {activeTab === "personal" && (
              <div className="space-y-8 animate-fade-in">
                <section>
                  <h4 className="text-sm font-bold text-blue-800 mb-4 bg-blue-50 p-2 border-l-4 border-blue-500 uppercase">Details of Deceased Officer-Employee</h4>
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <div className="field"><label className="text-[11px] font-bold text-gray-500 uppercase">Deceased Officer/Employee Code*</label><InputText value={empCode} readOnly className="w-full bg-gray-100" /></div>
                    <div className="field"><label className="text-[11px] font-bold text-gray-500 uppercase">Full name of Deceased Govt servant*</label><InputText value={deceasedData.name} readOnly className="w-full bg-gray-100" /></div>
                    <div className="field"><label className="text-[11px] font-bold text-gray-500 uppercase">Gender*</label><InputText value={deceasedData.gender} readOnly className="w-full bg-gray-100" /></div>
                    <div className="field"><label className="text-[11px] font-bold text-gray-500 uppercase">Caste*</label><InputText value={deceasedData.caste} readOnly className="w-full bg-gray-100" /></div>
                    <div className="field"><label className="text-[11px] font-bold text-gray-500 uppercase">Select Last Posting District*</label><InputText value={deceasedData.district} readOnly className="w-full bg-gray-100" /></div>
                    <div className="field"><label className="text-[11px] font-bold text-gray-500 uppercase">Deceased Officer/Staff Cadre*</label><InputText value={deceasedData.cadre} readOnly className="w-full bg-gray-100" /></div>
                    <div className="field"><label className="text-[11px] font-bold text-gray-500 uppercase">Deceased Officer/Employee Designation*</label><InputText value={deceasedData.designation} readOnly className="w-full bg-gray-100" /></div>
                    <div className="field"><label className="text-[11px]  uppercase">Date*</label><Calendar value={deceasedData.dod} onChange={(e) => setDeceasedData({...deceasedData, dod: e.value as Date})} showIcon className="w-full" /></div>
                    <div className="field"><label className="text-[11px]  uppercase">Cause of Death*</label><InputText value={deceasedData.cause} onChange={(e) => setDeceasedData({...deceasedData, cause: e.target.value})} className="w-full" /></div>
                    <div className="field"><label className="text-[11px]  uppercase">Number of Surviving Family Members*</label><InputText type="number" value={deceasedData.survivors} onChange={(e) => setDeceasedData({...deceasedData, survivors: e.target.value})} className="w-full" /></div>
                    <div className="field col-span-2"><label className="text-[11px] font-bold text-gray-500 uppercase">Department Name*</label><InputText value={deceasedData.department} readOnly className="w-full bg-gray-100" /></div>
                  </div>
                </section>
                <section>
                  <h4 className="text-sm font-bold text-gray-700 mb-4 bg-gray-100 p-2 rounded">Enter Information About All The Family Members of The Deceased</h4>
                  <div className="grid grid-cols-1 md:grid-cols-6 gap-2 mb-4 items-end bg-gray-50 p-3 rounded border">
                    <InputText placeholder="Name of Member*" value={newMember.name} onChange={(e) => setNewMember({...newMember, name: e.target.value})} className="p-inputtext-sm" />
                    <Dropdown placeholder="Relationship*" options={["Wife/Husband", "Son", "Daughter"]} value={newMember.relationship} onChange={(e) => setNewMember({...newMember, relationship: e.value})} className="p-inputtext-sm" />
                    <InputText placeholder="Business*" value={newMember.business} onChange={(e) => setNewMember({...newMember, business: e.target.value})} className="p-inputtext-sm" />
                    <Dropdown placeholder="Gender*" options={["Male", "Female", "Other"]} value={newMember.gender} onChange={(e) => setNewMember({...newMember, gender: e.value})} className="p-inputtext-sm" />
                    <Calendar placeholder="Date of Birth*" value={newMember.dob} onChange={(e) => setNewMember({...newMember, dob: e.value as Date})} className="p-inputtext-sm" />
                    <Button label="Add Member" icon="pi pi-plus" className="p-button-success" onClick={handleAddMember} />
                  </div>

                  <DataTable value={familyList} className="p-datatable-sm" stripedRows showGridlines emptyMessage="Please add family members.">
                    <Column field="srNo" header="Sr. No." style={{width: '70px'}} />
                    <Column field="name" header="Name of Member" />
                    <Column field="relationship" header="Relationship" />
                    <Column field="business" header="Business" />
                    <Column field="gender" header="Gender" />
                    <Column field="dob" header="Date of Birth" body={(rd) => rd.dob?.toLocaleDateString('en-GB')} />
                    <Column header="Action" body={(rowData) => <Button icon="pi pi-trash" className="p-button-danger p-button-text" onClick={() => setFamilyList(familyList.filter(f => f.id !== rowData.id))} />} />
                  </DataTable>
                </section>
                <section className="bg-indigo-50/50 p-6 rounded-lg border border-indigo-100">
                  <h4 className="text-md font-bold text-indigo-900 mb-5 border-b border-indigo-200 pb-2 uppercase">Details of the Family Member Who has Applied for Appointment</h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                    <div className="field">
                      <label className="text-[11px] font-bold block mb-1 uppercase">Name of the Applicant Family Member*</label>
                      <InputText className="w-full" />
                    </div>
                    <div className="field">
                      <label className="text-[11px] font-bold block mb-1 uppercase">Applicant's Relationship With Deceased*</label>
                      <Dropdown placeholder="Select Relationship" options={["Wife/Husband", "Son", "Daughter"]} className="w-full" />
                    </div>
                    <div className="field">
                      <label className="text-[11px] font-bold block mb-1 uppercase">Consent from Family Affidavit*</label>
                      <Dropdown placeholder="Select Consent" options={["Yes", "No"]} className="w-full" />
                    </div>
                    <div className="field">
                      <label className="text-[11px] font-bold block mb-1 uppercase">Marital Status for Appointment*</label>
                      <Dropdown placeholder="Select Status" options={["Married", "Un-Married", "Widow"]} className="w-full" />
                    </div>
                    <div className="field">
                      <label className="text-[11px] font-bold block mb-1 uppercase">Gender*</label>
                      <Dropdown placeholder="Select Gender" options={["Male", "Female", "Other"]} className="w-full" />
                    </div>
                    <div className="field">
                      <label className="text-[11px] font-bold block mb-1 uppercase">Date of Birth*</label>
                      <Calendar showIcon className="w-full" />
                    </div>
                    <div className="field">
                      <label className="text-[11px] font-bold block mb-1 uppercase">Applicant's Qualification*</label>
                      <InputText className="w-full" />
                    </div>
                    <div className="field">
                      <label className="text-[11px] font-bold block mb-1 uppercase">Mobile No.*</label>
                      <InputText className="w-full" maxLength={10} />
                    </div>
                    <div className="field">
                      <label className="text-[11px] font-bold block mb-1 uppercase text-indigo-700">To Which Post Does Applicant want Appointment*</label>
                      <Dropdown placeholder="Select Post" options={["Academic Cadre", "Clerical Cadre", "Fourth Class"]} className="w-full" />
                    </div>
                  </div>
                </section>

                <div className="mt-8 flex justify-center">
                  <Button label="Save & Next" icon="pi pi-arrow-right" iconPos="right" className="p-button-info px-10 h-12" onClick={() => setActiveTab("upload")} />
                </div>
              </div>
            )}
            {activeTab === "upload" && (
              <div className="animate-fade-in">
                <h3 className="text-xl font-bold text-red-700 italic underline mb-6 uppercase">Document Upload Section</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {documentList.map((doc, i) => (
                    <div key={i} className="flex flex-col gap-2 p-4 bg-gray-50 border-2 border-dashed rounded-lg">
                      <label className="text-[11px] font-bold text-gray-700 uppercase h-8">{i+1}. {doc}*</label>
                      <FileUpload mode="basic" auto accept="image/*,application/pdf" maxFileSize={500000} chooseLabel="Choose File" className="p-button-sm" />
                    </div>
                  ))}
                </div>
                    <section className="mt-20 bg-gray-50 p-6 rounded-lg border border-gray-200">
                    <div className="flex items-center mb-4">
                        <h4 className="text-sm font-bold text-blue-800 mb-4 bg-blue-50 p-2 border-l-4 border-blue-500 uppercase">Self Verification</h4>
                        <br /><hr /><input 
                           type="checkbox" 
                             id="declaration1" 
                             className="mr-2"
                        />
                        <label htmlFor="declaration1" className="text-[13px] font-medium text-gray-700">
                      I hereby declare that the above information given by me is true to the best of my knowledge and belief. 
                             If the information given by me is found to be false or incorrect before or after the appointment, 
                      or if any ineligibility is found after the appointment, then I am fully aware that my appointment will be cancelled, 
                             and I will be responsible for any action taken by me under the laws and rules provided in this regard.
                           </label>
                         </div>
                        <div className="flex items-center">
                           <input 
                             type="checkbox" 
                             id="declaration2" 
                         className="mr-2"
                           />
                           <label htmlFor="declaration2" className="text-[13px] font-medium text-gray-700">
                             I also undertake that I will provide proper maintenance to other members of the family of late Shri/Smt. Rajeshwarprasad Tiwari. 
                             If it is proved at any time that I am ignoring the family members or not providing them proper maintenance, 
                             my compassionate appointment can be terminated.
                           </label>
                         </div>
                </section>

                <div className="mt-12 flex justify-center gap-4 border-t pt-8">
                  <Button label="Back" icon="pi pi-arrow-left" className="p-button-outlined p-button-secondary px-8" onClick={() => setActiveTab("personal")} />
                  <Button label="Save" icon="pi pi-save" className="p-button-success px-10 shadow-lg" onClick={confirmSave} />
                </div>
              </div>
            )}
          </div>
        </div>
      )}
      <Dialog header="Success" visible={showSuccessDialog} style={{ width: '380px' }} onHide={() => setShowSuccessDialog(false)} footer={<Button label="OK" className="w-full p-button-success" onClick={() => setShowSuccessDialog(false)} />}>
        <div className="flex flex-col items-center p-4">
          <i className="pi pi-check-circle text-green-500 text-7xl mb-4"></i>
          <p className="font-bold text-xl text-center">Registration Completed!</p>
          <p className="text-gray-500 text-center text-sm mt-2">The application has been saved in the register.</p>
        </div>
      </Dialog>
    </PageLayout>
  );
};

export default AnukampaApplicationRegister;