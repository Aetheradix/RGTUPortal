/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { Card } from "primereact/card";
import { InputText } from "primereact/inputtext";
import { Dropdown } from "primereact/dropdown";
import { Calendar } from "primereact/calendar";
import { Button } from "primereact/button";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { FileUpload } from "primereact/fileupload";

const genderOptions = [{ label: "Male", value: "Male" }, { label: "Female", value: "Female" }];

export default function CompassionateAppointment() {
    const [family] = useState<any[]>([]);
    const [activeTab, setActiveTab] = useState<"PERSONAL" | "UPLOAD">("PERSONAL");
    const documentsList = [
        { sr: 1, name: "Death Certificate", status: "Not Uploaded" },
        { sr: 2, name: "Educational Qualification (10th/12th/Graduation)", status: "Not Uploaded" },
        { sr: 3, name: "Caste Certificate", status: "Not Uploaded" },
        { sr: 4, name: "NOC/Consent certificate of all family members", status: "Not Uploaded" },
        { sr: 5, name: "Aadhar Card of Applicant", status: "Not Uploaded" },
    ];
    return (
        <div className="p-4" style={{ backgroundColor: '#f4f4f4', minHeight: '100vh' }}>
            <Card>
                <div className="flex gap-2 mb-3">
                    <Button 
                        label="Personal Information" 
                        className={`p-button-sm ${activeTab === "PERSONAL" ? "" : "p-button-secondary"}`} 
                        style={activeTab === "PERSONAL" ? { backgroundColor: '#673ab7' } : {}}
                        onClick={() => setActiveTab("PERSONAL")} 
                    />
                    <Button 
                        label="Upload Documents" 
                        className={`p-button-sm ${activeTab === "UPLOAD" ? "" : "p-button-secondary"}`} 
                        style={activeTab === "UPLOAD" ? { backgroundColor: '#673ab7' } : {}}
                        onClick={() => setActiveTab("UPLOAD")}
                    />
                </div>
                {activeTab === "PERSONAL" && (
                    <div className="fadein animation-duration-500">
                        <Card title="Details of Deceased Officer/Employee" className="mb-4 text-sm custom-card-header">
                            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                                <div className="flex flex-col">
                                    <label className="mb-1 text-xs">Deceased Employee Code</label>
                                    <InputText value="AE7335" disabled className="p-inputtext-sm" />
                                </div>
                                <div className="flex flex-col">
                                    <label className="mb-1 text-xs">Full Name of Deceased Employee</label>
                                    <InputText value="Nandlal Nagle" disabled className="p-inputtext-sm" />
                                </div>
                                <div className="flex flex-col">
                                    <label className="mb-1 text-xs">Gender</label>
                                    <InputText value="Male" disabled className="p-inputtext-sm" />
                                </div>
                                <div className="flex flex-col">
                                    <label className="mb-1 text-xs">Caste</label>
                                    <InputText value="SC" disabled className="p-inputtext-sm" />
                                </div>
                                <div className="flex flex-col">
                                    <label className="mb-1 text-xs">Last Posting District Name</label>
                                    <InputText value="Betul" disabled className="p-inputtext-sm" />
                                </div>
                                <div className="flex flex-col">
                                    <label className="mb-1 text-xs">Deceased Employee/Staff Cadre</label>
                                    <InputText value="Teaching" disabled className="p-inputtext-sm" />
                                </div>
                                <div className="flex flex-col">
                                    <label className="mb-1 text-xs">Deceased Employee Designation</label>
                                    <InputText value="Ucch Madhyamik Shikshak" disabled className="p-inputtext-sm" />
                                </div>
                                <div className="flex flex-col">
                                    <label className="mb-1 text-xs">Department Name</label>
                                    <InputText value="School Education Department" disabled className="p-inputtext-sm" />
                                </div>
                                <div className="flex flex-col">
                                    <label className="mb-1 text-xs font-bold">Date of Death*</label>
                                    <Calendar placeholder="DD/MM/YYYY" showIcon className="p-inputtext-sm" />
                                </div>
                                <div className="flex flex-col">
                                    <label className="mb-1 text-xs font-bold">Cause of Death*</label>
                                    <InputText placeholder="Cause of Death" className="p-inputtext-sm" />
                                </div>
                                <div className="flex flex-col">
                                    <label className="mb-1 text-xs font-bold">Surviving Family Members*</label>
                                    <Dropdown options={[{ label: '1', value: 1 }]} placeholder="Select" className="p-inputtext-sm" />
                                </div>
                            </div>
                        </Card>
                        <Card title="Details of Family Member of Deceased Public Servant Teacher" className="mb-4">
                            <h5 className="mb-2 text-sm border-b pb-1">Nominee Details</h5>
                            <DataTable value={[]} emptyMessage="No data" className="p-datatable-sm mb-4 border">
                                <Column field="sr" header="Sr.No."></Column>
                                <Column field="name" header="Nominee Name"></Column>
                                <Column field="relation" header="Relation With Employee"></Column>
                                <Column field="percentage" header="Nominee Percentage"></Column>
                            </DataTable>

                            <h5 className="mb-2 text-sm border-b pb-1">Add Family Member Details</h5>
                            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-3">
                                <div className="flex flex-col">
                                    <label className="mb-1 text-xs">Name of Family Member*</label>
                                    <InputText placeholder="Enter Name" className="p-inputtext-sm" />
                                </div>
                                <div className="flex flex-col">
                                    <label className="mb-1 text-xs">Date of Birth*</label>
                                    <Calendar placeholder="DD/MM/YYYY" showIcon className="p-inputtext-sm" />
                                </div>
                                <div className="flex flex-col">
                                    <label className="mb-1 text-xs">Age of Family Member</label>
                                    <InputText placeholder="Age" disabled className="p-inputtext-sm" />
                                </div>
                                <div className="flex flex-col">
                                    <label className="mb-1 text-xs font-bold">Gender*</label>
                                    <Dropdown options={genderOptions} placeholder="Select" className="p-inputtext-sm" />
                                </div>
                                <div className="flex flex-col">
                                    <label className="mb-1 text-xs font-bold">Relation with Deceased Employee*</label>
                                    <Dropdown placeholder="Select" className="p-inputtext-sm" />
                                </div>
                                <div className="flex flex-col">
                                    <label className="mb-1 text-xs font-bold">Occupation*</label>
                                    <Dropdown placeholder="Select" className="p-inputtext-sm" />
                                </div>
                                <div className="flex items-end">
                                    <Button label="Add" className="p-button-success p-button-sm" />
                                </div>
                            </div>

                            <DataTable value={family} emptyMessage="No data" className="p-datatable-sm border text-xs">
                                <Column field="select" header="Select Applicant"></Column>
                                <Column field="name" header="Name of Family Member"></Column>
                                <Column field="dob" header="Date of Birth"></Column>
                                <Column field="age" header="Age of Family Member"></Column>
                                <Column field="gender" header="Gender"></Column>
                                <Column field="relation" header="Relationship With Deceased Employee"></Column>
                                <Column field="occupation" header="Occupation"></Column>
                                <Column field="action" header="Action"></Column>
                            </DataTable>
                        </Card>
                        <Card title="Details of the Family Member Who has Applied for Appointment" className="mb-4">
                            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                                <div className="flex flex-col">
                                    <label className="mb-1 text-xs font-bold">Name of the Applicant*</label>
                                    <InputText placeholder="Name" className="p-inputtext-sm" />
                                </div>
                                <div className="flex flex-col">
                                    <label className="mb-1 text-xs font-bold">Relation*</label>
                                    <InputText placeholder="Relation" className="p-inputtext-sm" />
                                </div>
                                <div className="flex flex-col">
                                    <label className="mb-1 text-xs font-bold">Date of Birth*</label>
                                    <InputText placeholder="Date of Birth" className="p-inputtext-sm" />
                                </div>
                                <div className="flex flex-col">
                                    <label className="mb-1 text-xs font-bold">Gender*</label>
                                    <Dropdown options={genderOptions} placeholder="Gender" className="p-inputtext-sm" />
                                </div>
                            </div>
                        </Card>

                        <div className="flex gap-2">
                            <Button label="Save & Next" className="p-button-primary p-button-sm" onClick={() => setActiveTab("UPLOAD")} />
                            <Button label="Clear" className="p-button-secondary p-button-outlined p-button-sm" />
                        </div>
                    </div>
                )}
                {activeTab === "UPLOAD" && (
                    <div className="fadein animation-duration-500">
                        <Card title="Upload Required Documents" className="mb-4">
                            <div className="p-3 mb-3 bg-blue-50 border-round">
                                <p className="text-xs text-blue-700">
                                    <strong>Instruction:</strong> Please upload scanned documents in PDF or JPEG format. Max file size: 2MB.
                                </p>
                            </div>

                            <DataTable value={documentsList} className="p-datatable-sm border text-sm">
                                <Column field="sr" header="Sr.No." style={{ width: '10%' }}></Column>
                                <Column field="name" header="Document Name" style={{ width: '50%' }}></Column>
                                <Column 
                                    header="Upload Action" 
                                    body={() => (
                                        <FileUpload mode="basic" chooseLabel="Choose File" className="p-button-sm" auto name="docs" />
                                    )}
                                    style={{ width: '25%' }}
                                ></Column>
                                <Column 
                                    header="Status" 
                                    body={(rowData) => (
                                        <span className="text-orange-600 font-bold">{rowData.status}</span>
                                    )}
                                ></Column>
                            </DataTable>
                        </Card>

                        <div className="flex gap-2">
                            <Button label="Back" icon="pi pi-arrow-left" className="p-button-sm p-button-secondary" onClick={() => setActiveTab("PERSONAL")} />
                            <Button label="Submit Application" icon="pi pi-check" className="p-button-sm p-button-primary" />
                        </div>
                    </div>
                )}
            </Card>
        </div>
    );
}