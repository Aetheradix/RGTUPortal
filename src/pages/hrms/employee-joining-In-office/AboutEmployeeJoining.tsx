import React from 'react';
import PageLayout from "@/components/PageLayout";

const AboutEmployeeJoining: React.FC = () => {
  return (
    <PageLayout title="About Employee Joining">
      <div className="space-y-6">
        <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
          <h2 className="text-xl font-bold text-gray-800 mb-6 border-b pb-4">
            About Employee Joining
          </h2>

          <div className="p-6 rounded-lg bg-green-50 border border-green-200">
            <div className="flex items-center gap-2 mb-4">
              <i className="pi pi-info-circle text-orange-600 text-lg"></i>
              <span className="text-orange-600 font-bold uppercase tracking-wide">
                Employee Joining Key Points
              </span>
            </div>

            <ol className="list-decimal list-inside space-y-4 text-gray-700 leading-relaxed">
              <li className="pl-2">
                <span className="font-medium text-gray-900">Personal Documentation:</span>{" "}
                Submit verified copies of educational certificates and experience
                letters. Provide proof of identity such as Aadhaar card, passport,
                or PAN card.
              </li>

              <li className="pl-2">
                <span className="font-medium text-gray-900">Joining Formalities:</span>{" "}
                Collect and sign the offer letter and appointment letter. Submit a
                medical fitness certificate if required.
              </li>

              <li className="pl-2">
                <span className="font-medium text-gray-900">Conduct and Ethics:</span>{" "}
                Abide by institutional policies related to dress code,
                punctuality, and professional behavior. Attend orientation or
                onboarding sessions to understand systems and rules.
              </li>

              <li className="pl-2">
                <span className="font-medium text-gray-900">Compliance with Policies:</span>{" "}
                Follow guidelines for use of campus facilities and resources.
                Respect rules related to data privacy and confidentiality.
              </li>

              <li className="pl-2">
                <span className="font-medium text-gray-900">Contribution to Academics and College Life:</span>{" "}
                Actively participate in academic programs, student mentorship,
                and institutional events.
              </li>

              <li className="pl-2">
                <span className="font-medium text-gray-900">Reporting and Communication:</span>{" "}
                Respond promptly to official emails and messages from college
                administration and use authorized communication channels only.
              </li>
            </ol>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default AboutEmployeeJoining;
