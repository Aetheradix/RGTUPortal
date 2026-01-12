import  { useState } from "react";
import { Card } from "primereact/card";
import { InputText } from "primereact/inputtext";
import { Dropdown } from "primereact/dropdown";
import { Button } from "primereact/button";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Dialog } from "primereact/dialog";

export default function CompassionVerification() {
    const [showForm, setShowForm] = useState(false);
    const reportData = [
        {
            srNo: 1,
            district: "Bhopal",
            appNo: "CA/AA4880/25/01",
            deceasedName: "Hemlata Singh (AA4880)",
            designation: "Prathmik Shikshak",
            deathDate: "05/08/2025",
            applicantName: "ARJUN SINGH",
            dob: "26/07/1998",
            caste: "OBC",
            mobile: "9999999999",
            relation: "Son",
            maritalStatus: "Un-Married",
            postApplied: "Academic Cadre",
            qualification: "Graduation",
            status: "Objection on application",
            reason: "Applicant not having educational qualification",
            actionDate: "09/01/2026",
            remark: "lmkk"
        }
    ];
    const actionBodyTemplate = () => {
        return (
            <Button 
                icon="pi pi-pencil" 
                className="p-button-rounded p-button-warning p-button-sm" 
                onClick={() => setShowForm(true)} 
                tooltip="Edit/View Form"
            />
        );
    };
    return (
        <div className="p-4" style={{ backgroundColor: '#f8f9fa', minHeight: '100vh' }}>
            <Card title="Action Report on Compassionate Appointment" className="mb-4">
                <div className="flex justify-between mb-3">
          </div>
      <DataTable value={reportData} className="p-datatable-sm custom-table text-xs">
                    <Column field="district" header="District Name" sortable/>
                    <Column field="appNo" header="Application No."sortable />
                    <Column field="deceasedName" header="Name of the Deceased" sortable/>
                    <Column field="designation" header="Designation" sortable/>
                    <Column field="deathDate" header="Date of Death"sortable />
                    <Column field="applicantName" header="Name of the Applicant" sortable/>
                    <Column field="caste" header="Caste" sortable/>
                    <Column field="relation" header="Relation"sortable />
                    <Column field="status" header="Application Status" sortable/>
                    <Column header="Action" body={actionBodyTemplate} style={{ textAlign: 'center' }} />
                </DataTable>
            </Card>
            <Dialog 
                header="Compassion Verification विवरण" 
                visible={showForm} 
                style={{ width: '95vw' }} 
                onHide={() => setShowForm(false)}
                maximized
            >
                <div className="p-2">
                    <Card title="Details of Deceased Employee" className="mb-4 border-orange-200">
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-xs">
                            <div className="flex flex-col"><label>Deceased Officer/Employee Code</label><InputText value="AA4880" disabled /></div>
                            <div className="flex flex-col"><label>Name of Deceased Government Servant</label><InputText value="Hemlata Singh (AA4880)" disabled /></div>
                            <div className="flex flex-col"><label>Gender</label><InputText value="Female" disabled /></div>
                            <div className="flex flex-col"><label>Caste</label><InputText value="OBC" disabled /></div>
                            <div className="flex flex-col"><label>Last Posting District</label><InputText value="Bhopal" disabled /></div>
                            <div className="flex flex-col"><label>Deceased Officer/Staff Cadre</label><InputText value="Teaching" disabled /></div>
                            <div className="flex flex-col"><label>Deceased Officer/Employee Designation</label><InputText value="Prathmik Shikshak" disabled /></div>
                            <div className="flex flex-col"><label>Cause of Death</label><InputText value="HEART ATTACK" disabled /></div>
                        </div>
                    </Card>
                    <Card title="Information About all the Family Members" className="mb-4">
                        <DataTable value={[{sr:1, name:'ARJUN SINGH', gender:'Male', dob:'26/07/1998', relation:'Son', occupation:'There is no business'}]} className="p-datatable-sm">
                            <Column field="sr" header="Sr.No." />
                            <Column field="name" header="Name of Member" />
                            <Column field="gender" header="Gender" />
                            <Column field="dob" header="Date of Birth" />
                            <Column field="relation" header="Relationship" />
                            <Column field="occupation" header="Occupation" />
                        </DataTable>
                    </Card>
                    <Card title="Applicant's Documents" className="mb-4">
                        <DataTable value={[
                            {id: 1, name: "Death Certificate of Deceased Government Servant"},
                            {id: 2, name: "Birth Certificate of the Applicant"},
                            {id: 3, name: "Caste Certificate"},
                            {id: 4, name: "Family Samagra ID"}
                        ]} className="p-datatable-sm">
                            <Column field="id" header="Sr.No." />
                            <Column field="name" header="Document Name" />
                            <Column header="View Document" body={() => <Button icon="pi pi-eye" className="p-button-text p-button-sm" />} />
                        </DataTable>
                    </Card>
                    <Card title="Proceeding" className="mb-4 bg-orange-50">
                        <div className="flex flex-col max-w-sm">
                            <label className="font-bold mb-1">Proceeding*</label>
                            <Dropdown placeholder="--Select--" options={[{label: 'Approve', value: 'approve'}, {label: 'Reject', value: 'reject'}]} />
                        </div>
                    </Card>

                    <div className="flex gap-2">
                        <Button label="Save" className="p-button-primary" icon="pi pi-save" />
                        <Button label="Close" className="p-button-secondary" onClick={() => setShowForm(false)} />
                    </div>
                </div>
            </Dialog>
        </div>
    );
}