import React from 'react';
import PageLayout from "@/components/PageLayout";

const AboutDepartmentEnquiry: React.FC = () => {
  return (
    <PageLayout title="About Department Enquiry">
      <div className="space-y-6">
        <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
          <h2 className="text-xl font-bold text-gray-800 mb-6 border-b pb-4">
            About Department Enquiry
          </h2>

          <div className="p-6 rounded-lg bg-green-50 border border-green-200">
            <div className="flex items-center gap-2 mb-4">
              <i className="pi pi-info-circle text-orange-600 text-lg"></i>
              <span className="text-orange-600 font-bold uppercase tracking-wide">
                Department Enquiry
              </span>
            </div>

            <ol className="list-decimal list-inside space-y-4 text-gray-700 leading-relaxed">
              <li className="pl-2">
                If any complaint or fault is found against any employee, then a
                departmental enquiry is conducted against the employee by the
                higher officials of the department.
              </li>

              <li className="pl-2">
                Through the Department Enquiry page, the officer enters all the
                details of the employee in the given form and saves the details.
              </li>

              <li className="pl-2">
                The report of how many employees in the office are under
                Department Enquiry by the officer can also be viewed through
                the Department Enquiry report.
              </li>
            </ol>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default AboutDepartmentEnquiry;
