import React from "react";

import { Button } from "primereact/button";
import PageLayout from "@/components/PageLayout";

const HodCompassionateAppointmentDashboard: React.FC = () => {
  const stats = [
    { label: "Received Application Numbers", value: "1250", bgColor: "bg-green-50", textColor: "text-green-700", borderColor: "border-green-200" },
    { label: "Approved Application Numbers", value: "500", bgColor: "bg-blue-50", textColor: "text-blue-700", borderColor: "border-blue-200" },
    { label: "Pending Application Numbers", value: "750", bgColor: "bg-orange-50", textColor: "text-orange-700", borderColor: "border-orange-200" },
  ];

  const requiredDocs = [
    "Death Certificate of the Deceased Government Employee",
    "Applicant's Birth Certificate",
    "Proof of Applicant's Local residence in Madhya Pradesh",
    "Caste Certificate (Applicable: SC/ST/OBC)",
    "Certificate of passing Higher Secondary Graduation or equivalent exam from a Madhya Pradesh recognized school/college",
    "Consent Certificate from the Head of Family",
    "Applicant's Photograph",
    "Ration Card. Prepare the above document in PDF format, with a size up to 600 KB, before applying.",
  ];

  const specificPoints = [
    { text: "For the teaching cadre, as per the previous provisions, the applicant must have passed B.Ed./D.El.Ed. along with the Teacher Eligibility Test to be eligible.", color: "bg-cyan-50 border-cyan-200" },
    { text: "Through this system, all concerned offices must register the compassionate appointment applications.", color: "bg-orange-50 border-orange-200" },
    { text: "The details of all the orders issued for compassionate appointments, as well as their relevant copies, will also be uploaded to the portal.", color: "bg-yellow-50 border-yellow-200" },
    { text: "The system will ensure that all the cases related to compassionate appointment are processed within the stipulated time frame.", color: "bg-green-50 border-green-200" },
    { text: "After the launch of this system, employees/applicants will not need to submit applications manually but will do so online through this system.", color: "bg-red-50 border-red-200" },
    { text: "An online tracking facility will be available for applicants, allowing them to take a printout of their application for reference.", color: "bg-orange-50 border-orange-100" },
  ];

  return (
    <PageLayout title="Compassionate Appointment On J.D. Level Print Application">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        {stats.map((stat, index) => (
          <div key={index} className={`${stat.bgColor} ${stat.borderColor} border rounded-lg p-4 text-center shadow-sm`}>
            <p className={`text-sm font-bold ${stat.textColor} mb-2`}>{stat.label}</p>
            <h2 className={`text-3xl font-black ${stat.textColor}`}>{stat.value}</h2>
          </div>
        ))}
      </div>
      <div className="bg-blue-600 p-3 rounded-t-lg flex justify-between items-center shadow-md">
        <h3 className="text-white font-bold tracking-wide">Compassionate Appointment</h3>
        <Button 
          label="Compassionate Appointment Related Order" 
          icon="pi pi-file-pdf" 
          className="p-button-sm p-button-raised bg-blue-800 border-none hover:bg-blue-900"
          onClick={() => window.open("https://your-pdf-link-here.pdf", "_blank")} 
        />
      </div>
      <div className="bg-white border-x border-b p-6 mb-6">
        <div className="bg-teal-100 p-2 border-l-4 border-teal-500 mb-4">
          <p className="text-xs font-bold text-teal-800 uppercase italic">
            Required Documents for Compassionate Appointment Application:
          </p>
        </div>
        <ul className="space-y-2">
          {requiredDocs.map((doc, i) => (
            <li key={i} className="flex items-start gap-3 p-2 bg-gray-50 border rounded hover:bg-white transition-colors">
              <i className="pi pi-star-fill text-yellow-500 mt-1 text-[10px]" />
              <span className="text-sm font-bold text-gray-700">{doc}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="bg-blue-500 p-3 rounded-t-lg">
        <h3 className="text-white font-bold tracking-wide">About The Compassionate Appointment Monitoring System</h3>
      </div>
      <div className="bg-white border-x border-b p-6 mb-6 shadow-sm">
        <p className="text-sm text-gray-700 leading-relaxed font-semibold">
          <i className="pi pi-info-circle text-blue-500 mr-2" />
          More than 2.5 lakh employees are working under the Madhya Pradesh school education department. In the event of the untimely death of a government employee, compassionate appointment provisions are provided to their dependents according to rules. Applications for compassionate appointments are submitted by the dependents of the deceased, and these are processed at different levels by the respective offices following government norms and the applicant's eligibility. To ensure transparent and timely processing of compassionate appointment cases, and to monitor their status at the state and other levels, the department has decided to implement an online system for compassionate appointment cases on the Education Portal.
        </p>
      </div>
      <div className="bg-blue-400 p-3 rounded-t-lg">
        <h3 className="text-white font-bold tracking-wide">Compassionate Appointment Specific Points</h3>
      </div>
      <div className="bg-white border-x border-b p-6 shadow-sm">
        <div className="space-y-3">
          {specificPoints.map((point, i) => (
            <div key={i} className={`${point.color} p-3 border rounded-md flex gap-3 items-center shadow-inner`}>
              <i className="pi pi-check-circle text-gray-600" />
              <p className="text-xs font-bold text-gray-800 leading-snug">{point.text}</p>
            </div>
          ))}
        </div>
      </div>
    </PageLayout>
  );
};

export default HodCompassionateAppointmentDashboard;