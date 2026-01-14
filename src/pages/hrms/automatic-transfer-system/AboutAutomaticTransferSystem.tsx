import React from 'react';
import PageLayout from "@/components/PageLayout";

const AboutAutomaticTransferSystem: React.FC = () => {
  return (
    <PageLayout title="About Automatic Transfer System">
      <div className="space-y-6">
        <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
          <h2 className="text-xl font-bold text-gray-800 mb-6 border-b pb-4">
            About Automatic Transfer System
          </h2>

          <div className="p-6 rounded-lg bg-green-50 border border-green-200">
            <div className="flex items-center gap-2 mb-4">
              <i className="pi pi-info-circle text-orange-600 text-lg"></i>
              <span className="text-orange-600 font-bold uppercase tracking-wide">
                Automatic Transfer System Key Points
              </span>
            </div>

            <ol className="list-decimal list-inside space-y-4 text-gray-700 leading-relaxed">
              <li className="pl-2">
                <span className="font-medium text-gray-900">Online Automation:</span> In this process, the transfer is done online automatically by the
                computer using the Automatic Transfer System.
              </li>
              <li className="pl-2">
                <span className="font-medium text-gray-900">Government Compliance:</span> When an employee/official has been at the same location for more
                than 3 years, as per the government's instructions, the Automatic
                Transfer System page is used for transferring all such employees.
                This process is initiated by the main office periodically.
              </li>
              <li className="pl-2">
                <span className="font-medium text-gray-900">Smart Search:</span> The page allows searching for employees based on their designation,
                district, and block.
              </li>
              <li className="pl-2">
                <span className="font-medium text-gray-900">Auto Allocation:</span> Once searched, the computer automatically assigns transfer
                locations to all employees, and they appear in the list.
              </li>
              <li className="pl-2">
                <span className="font-medium text-gray-900">Execution Process:</span> If the main office decides to transfer someone, they can click the
                checkbox for the relevant employee. By entering the order date,
                effective date, relieving date, and remarks, the transfer process
                can be completed.
              </li>
            </ol>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default AboutAutomaticTransferSystem;