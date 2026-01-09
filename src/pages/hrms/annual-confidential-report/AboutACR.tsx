import React from 'react';
import PageLayout from "@/components/PageLayout";

const AboutACR: React.FC = () => {
  return (
    <PageLayout title="ACR">
      <div className="space-y-6">
        <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
          <h2 className="text-xl font-bold text-gray-800 mb-6 border-b pb-4">
            About Annual Confidential Report
          </h2>

          <div className="p-6 rounded-lg bg-green-50 border border-green-200">
            <div className="flex items-center gap-2 mb-4">
              <i className="pi pi-info-circle text-orange-600 text-lg"></i>
              <span className="text-orange-600 font-bold uppercase tracking-wide">
                वार्षिक गोपनीय रिपोर्ट (एसीआर) :-
              </span>
            </div>

            <ol className="list-decimal list-inside space-y-4 text-gray-700 leading-relaxed">
              <li className="pl-2">
                 Through Annual Confidential Report, the employee submits the details of the work done in the financial year to his officer through Employee Apply ACR form.
              </li>
              <li className="pl-2">
                Annual Confidential Report is sent by the employee to his officer. After seeing that report, the officer evaluates the work of the employee by marks through the ACR Report Fill By Reporting Officer form.
              </li>
              <li className="pl-2">
                The concerned officer fills the employee's report and transfers it to his higher officer.
              </li>
              <li className="pl-2">
                Through the ACR Report Reviewing Fill Accepting Authority form by the higher authority, it is seen whether the officer has properly evaluated the work of the concerned employee or not.
              </li>
              <li className="pl-2">
                The senior officer prepares his report through the form.
              </li>
            </ol>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default AboutACR;