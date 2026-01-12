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
import { Card } from "primereact/card";
import { Checkbox } from "primereact/checkbox";

interface FamilyMember {
  id: string;
  srNo: number;
  selected: boolean;
  name: string;
  relationship: string;
  business: string;
  gender: string;
  dob: Date | null;
}

const AnukampaApplicationRegisterHO: React.FC = () => {
  const toast = useRef<Toast>(null);
  const [empCode, setEmpCode] = useState("");
  const [isSearched, setIsSearched] = useState(false);
  const [activeTab, setActiveTab] = useState<"personal" | "upload">("personal");
  const [showSuccessDialog, setShowSuccessDialog] = useState(false);
  const [declOneChecked, setDeclOneChecked] = useState(false);
  const [declTwoChecked, setDeclTwoChecked] = useState(false);
  const [deceasedData, setDeceasedData] = useState({
    name: "", gender: "", caste: "", district: "", cadre: "", designation: "", department: "",
    dod: null as Date | null, cause: "", survivors: ""
  });

  const [familyList, setFamilyList] = useState<FamilyMember[]>([]);
  const [newMember, setNewMember] = useState<FamilyMember>({
    id: "", srNo: 0, selected: false, name: "", relationship: "", business: "", gender: "", dob: null
  });

  const handleSearch = () => {
    if (empCode.trim()) {
      setIsSearched(true);
      setDeceasedData({
        ...deceasedData,
        name: "Late Shri Rajeshwarprasad Tiwari",
        gender: "Male",
        caste: "General",
        district: "Bhopal",
        cadre: "Academic Cadre",
        designation: "Assistant Teacher",
        department: "School Education Department",
        dod: new Date("2021-12-28"),
        cause: "Natural",
        survivors: "5"
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
      setNewMember({ id: "", srNo: 0, selected: false, name: "", relationship: "", business: "", gender: "", dob: null });
      toast.current?.show({ severity: 'success', summary: 'Success', detail: 'Member Added', life: 2000 });
    }
  };

  const confirmSave = () => {
    confirmDialog({
      message: 'Are you sure you want to Register/Correct this application?',
      header: 'Confirmation',
      icon: 'pi pi-exclamation-triangle',
      accept: () => setShowSuccessDialog(true),
    });
  };

  return (
    <PageLayout title="Compassionate Appointment Application Register - H.O. Level">
      <Toast ref={toast} />
      <ConfirmDialog />

      <div className="flex justify-between items-start mb-4">
        <div>
            <h2 className="text-xl font-bold text-blue-900 uppercase">Head Office Anukampa Application Approval</h2>
            <p className="text-sm text-gray-600 font-semibold italic">Register And Correct Application for Anukampa Appointment</p>
        </div>
        <div className="text-xs text-gray-500 font-semibold uppercase tracking-wider text-right">
          HRMS &gt; Head Office Anukampa Application Approval &gt; Register/Correct Application
        </div>
      </div>

      <Card className="mb-5 shadow-sm border-t-4 border-blue-900">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-end">
          <div className="flex flex-col gap-2">
            <label className="text-xs font-bold text-gray-700 uppercase">Enter Employee ID*</label>
            <InputText value={empCode} onChange={(e) => setEmpCode(e.target.value)} placeholder="e.g. BD1234" className="w-full" />
          </div>
          <div className="flex gap-2">
            <Button label="Search" icon="pi pi-search" onClick={handleSearch} className="bg-blue-800 border-none" />
            <Button label="Clear" icon="pi pi-refresh" className="p-button-outlined p-button-secondary" onClick={() => setIsSearched(false)} />
          </div>
        </div>
      </Card>

      {isSearched && (
        <div className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden">
          <div className="flex border-b bg-gray-50 font-bold">
            <button onClick={() => setActiveTab("personal")} className={`flex-1 p-4 transition-all ${activeTab === "personal" ? "bg-white text-blue-800 border-b-4 border-blue-600 shadow-inner" : "text-gray-400 hover:text-gray-600"}`}>
              1. PERSONAL INFORMATION
            </button>
            <button onClick={() => setActiveTab("upload")} className={`flex-1 p-4 transition-all ${activeTab === "upload" ? "bg-white text-red-700 border-b-4 border-red-600 shadow-inner" : "text-gray-400 hover:text-gray-600"}`}>
              2. UPLOAD CERTIFICATE
            </button>
          </div>

          <div className="p-6">
            {activeTab === "personal" && (
              <div className="space-y-10 animate-fade-in">
                <section>
                  <h4 className="text-sm font-bold text-blue-900 mb-4 bg-blue-50 p-2 border-l-4 border-blue-500 uppercase">Details of Deceased Officer-Employee</h4>
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4 bg-gray-50/50 p-4 rounded-lg border">
                    <div className="field"><label className="text-[10px] font-bold text-gray-500 uppercase tracking-tighter">Deceased Officer/Employee Code*</label><InputText value={empCode} readOnly className="w-full bg-gray-100" /></div>
                    <div className="field"><label className="text-[10px] font-bold text-gray-500 uppercase tracking-tighter">Full name of Deceased Govt servant*</label><InputText value={deceasedData.name} readOnly className="w-full bg-gray-100" /></div>
                    <div className="field"><label className="text-[10px] font-bold text-gray-500 uppercase tracking-tighter">Gender*</label><InputText value={deceasedData.gender} readOnly className="w-full bg-gray-100" /></div>
                    <div className="field"><label className="text-[10px] font-bold text-gray-500 uppercase tracking-tighter">Caste*</label><InputText value={deceasedData.caste} readOnly className="w-full bg-gray-100" /></div>
                    <div className="field"><label className="text-[10px] font-bold text-gray-500 uppercase tracking-tighter">Select Last Posting District*</label><InputText value={deceasedData.district} readOnly className="w-full bg-gray-100" /></div>
                    <div className="field"><label className="text-[10px] font-bold text-gray-500 uppercase tracking-tighter">Deceased Officer/Staff Cadre*</label><InputText value={deceasedData.cadre} readOnly className="w-full bg-gray-100" /></div>
                    <div className="field"><label className="text-[10px] font-bold text-gray-500 uppercase tracking-tighter">Deceased Officer/Employee Designation*</label><InputText value={deceasedData.designation} readOnly className="w-full bg-gray-100" /></div>
                    <div className="field"><label className="text-[10px] font-bold uppercase tracking-tighter">Date*</label><Calendar value={deceasedData.dod} showIcon className="w-full" /></div>
                    <div className="field"><label className="text-[10px] font-bold uppercase tracking-tighter">Cause of Death*</label><InputText value={deceasedData.cause} className="w-full" /></div>
                    <div className="field"><label className="text-[10px] font-bold uppercase tracking-tighter">Number of Surviving Family Members*</label><InputText value={deceasedData.survivors} className="w-full" /></div>
                    <div className="field col-span-2"><label className="text-[10px] font-bold text-gray-500 uppercase tracking-tighter">Department Name*</label><InputText value={deceasedData.department} readOnly className="w-full bg-gray-100" /></div>
                  </div>
                </section>

                <section>
                  <h4 className="text-sm font-bold text-gray-700 mb-4 bg-gray-100 p-2 border-l-4 border-gray-500 uppercase">Enter Information About All The Family Members of The Deceased Public Servant/Teacher</h4>
                  <div className="grid grid-cols-1 md:grid-cols-6 gap-2 mb-4 items-end bg-blue-50/20 p-3 rounded border border-blue-50">
                    <InputText placeholder="Name of Member*" value={newMember.name} onChange={(e) => setNewMember({...newMember, name: e.target.value})} className="p-inputtext-sm" />
                    <Dropdown placeholder="Relationship*" options={["Wife/Husband", "Son", "Daughter"]} value={newMember.relationship} onChange={(e) => setNewMember({...newMember, relationship: e.value})} className="p-inputtext-sm" />
                    <InputText placeholder="Business*" value={newMember.business} onChange={(e) => setNewMember({...newMember, business: e.target.value})} className="p-inputtext-sm" />
                    <Dropdown placeholder="Gender*" options={["Male", "Female", "Other"]} value={newMember.gender} onChange={(e) => setNewMember({...newMember, gender: e.value})} className="p-inputtext-sm" />
                    <Calendar placeholder="Date of Birth*" value={newMember.dob} onChange={(e) => setNewMember({...newMember, dob: e.value as Date})} className="p-inputtext-sm" showIcon />
                    <Button label="Add Member" icon="pi pi-plus" className="p-button-success p-button-sm" onClick={handleAddMember} />
                  </div>

                  <DataTable value={familyList} className="p-datatable-sm shadow-sm" stripedRows showGridlines header="Search Results">
                    <Column field="srNo" header="Sr. No." style={{width: '60px'}} />
                    <Column header="Checkbox" body={(rowData) => (
                      <Checkbox 
                        checked={rowData.selected} 
                        onChange={(e) => {
                          const updated = familyList.map(f => f.id === rowData.id ? {...f, selected: e.checked ?? false} : f);
                          setFamilyList(updated);
                        }} 
                      />
                    )} style={{width: '60px'}} />
                    <Column field="name" header="Name of Member" />
                    <Column field="relationship" header="Relationship with The Deceased" />
                    <Column field="business" header="Business" />
                    <Column field="gender" header="Gender" />
                    <Column field="dob" header="Date of Birth" body={(rd) => rd.dob?.toLocaleDateString('en-GB')} />
                    <Column header="Action" body={(rowData) => <Button icon="pi pi-trash" className="p-button-danger p-button-text" onClick={() => setFamilyList(familyList.filter(f => f.id !== rowData.id))} />} />
                  </DataTable>
                </section>

                <section className="bg-indigo-50/50 p-6 rounded-lg border border-indigo-100">
                  <h4 className="text-md font-bold text-indigo-900 mb-5 border-b border-indigo-200 pb-2 uppercase tracking-tight">Details of the Family Member Who has Applied for Appointment</h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                    <div className="field"><label className="text-[10px] font-bold block mb-1 uppercase text-gray-700">Name of the Applicant Family Member*</label><InputText className="w-full" /></div>
                    <div className="field"><label className="text-[10px] font-bold block mb-1 uppercase text-gray-700">Relationship With Deceased Public Servant/Teacher*</label><Dropdown placeholder="Select Relationship" options={["Wife/Husband", "Son", "Daughter"]} className="w-full" /></div>
                    <div className="field"><label className="text-[10px] font-bold block mb-1 uppercase text-gray-700">Consent from Family for Appointment Affidavit*</label><Dropdown placeholder="Select Consent" options={["Yes", "No"]} className="w-full" /></div>
                    <div className="field"><label className="text-[10px] font-bold block mb-1 uppercase text-gray-700">Family Member's Marital Status*</label><Dropdown placeholder="Select Status" options={["Married", "Un-Married", "Widow"]} className="w-full" /></div>
                    <div className="field"><label className="text-[10px] font-bold block mb-1 uppercase text-gray-700">Gender*</label><Dropdown placeholder="Select Gender" options={["Male", "Female", "Other"]} className="w-full" /></div>
                    <div className="field"><label className="text-[10px] font-bold block mb-1 uppercase text-gray-700">Date of Birth*</label><Calendar showIcon className="w-full" /></div>
                    <div className="field"><label className="text-[10px] font-bold block mb-1 uppercase text-gray-700">Applicant's Qualification*</label><InputText className="w-full" /></div>
                    <div className="field"><label className="text-[10px] font-bold block mb-1 uppercase text-gray-700">Mobile No.*</label><InputText className="w-full" maxLength={10} /></div>
                    <div className="field"><label className="text-[10px] font-bold block mb-1 uppercase text-indigo-800">To Which Post Does Applicant Want Appointment*</label><Dropdown placeholder="Select Post" options={["Academic Cadre", "Clerical Cadre", "Fourth Class"]} className="w-full" /></div>
                  </div>
                </section>

                <div className="mt-8 flex justify-end">
                  <Button label="Save & Next" icon="pi pi-arrow-right" iconPos="right" className="p-button-info px-12 h-12 shadow-md" onClick={() => setActiveTab("upload")} />
                </div>
              </div>
            )}

            {activeTab === "upload" && (
              <div className="animate-fade-in">
                <h3 className="text-xl font-bold text-red-800 italic underline mb-6 uppercase tracking-tighter">Upload Certificate Section (H.O. Level)</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {[
                    "Death Certificate of Deceased Govt Servant", "Birth Certificate of the Applicant",
                    "Certificate of Residency/Domicile", "Caste Certificate",
                    "Passing Certificate (HS/Graduation)", "Consent Certificate from Family Head",
                    "Applicant's Photo", "Ration Card", "Affidavit"
                  ].map((doc, i) => (
                    <div key={i} className="flex flex-col gap-2 p-5 bg-gray-50 border-2 border-dashed rounded-xl hover:border-blue-300 transition-colors">
                      <label className="text-[10px] font-bold text-gray-600 uppercase h-8">{i+1}. {doc}*</label>
                      <FileUpload mode="basic" auto accept="application/pdf,image/*" maxFileSize={600000} chooseLabel="Choose File" className="p-button-sm p-button-outlined" />
                    </div>
                  ))}
                </div>

                <section className="mt-16 bg-blue-50/50 p-6 rounded-lg border border-blue-100">
                    <h4 className="text-sm font-bold text-blue-900 mb-4 uppercase underline flex items-center gap-2">
                        <i className="pi pi-verified"></i> Self Verification
                    </h4>
                    <div className="space-y-4">
                        <div className="flex gap-3 items-start">
                            <Checkbox 
                                inputId="decl1" 
                                checked={declOneChecked} 
                                onChange={(e) => setDeclOneChecked(e.checked ?? false)} 
                            />
                            <label htmlFor="decl1" className="text-xs font-semibold text-gray-700 leading-relaxed cursor-pointer">
                                I hereby declare that the above information given by me is true to the best of my knowledge and belief. 
                                If found false, my appointment will be cancelled, and I will be responsible for any action taken under the laws.
                            </label>
                        </div>
                        <div className="flex gap-3 items-start">
                            <Checkbox 
                                inputId="decl2" 
                                checked={declTwoChecked} 
                                onChange={(e) => setDeclTwoChecked(e.checked ?? false)} 
                            />
                            <label htmlFor="decl2" className="text-xs font-semibold text-gray-700 leading-relaxed cursor-pointer">
                                I also undertake that I will provide proper maintenance to other members of the family of late Shri Rajeshwarprasad Tiwari. 
                                My compassionate appointment can be terminated if I ignore family members.
                            </label>
                        </div>
                    </div>
                </section>

                <div className="mt-12 flex justify-center gap-6 pt-8 border-t">
                  <Button label="Back" icon="pi pi-arrow-left" className="p-button-text p-button-secondary font-bold" onClick={() => setActiveTab("personal")} />
                  <Button 
                      label="Register Application" 
                      icon="pi pi-check-circle" 
                      className="p-button-success px-12 h-14 text-lg font-bold shadow-lg" 
                      onClick={confirmSave}
                      disabled={!declOneChecked || !declTwoChecked}
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      <Dialog header="H.O. Registration Success" visible={showSuccessDialog} style={{ width: '400px' }} onHide={() => setShowSuccessDialog(false)} footer={<Button label="Close" className="w-full p-button-success font-bold" onClick={() => setShowSuccessDialog(false)} />}>
        <div className="flex flex-col items-center p-6 text-center">
          <i className="pi pi-check-circle text-green-500 text-7xl mb-4"></i>
          <p className="font-bold text-2xl text-gray-800 uppercase tracking-tighter">Registration Done!</p>
          <p className="text-gray-500 font-medium mt-2 italic">The application for {deceasedData.name} has been successfully recorded in the H.O. Level register.</p>
        </div>
      </Dialog>
    </PageLayout>
  );
};

export default AnukampaApplicationRegisterHO;