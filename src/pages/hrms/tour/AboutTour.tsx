import React from 'react';
import PageLayout from "@/components/PageLayout";

const AboutTour: React.FC = () => {
  return (
    <PageLayout title="About Tour">
      <div className="space-y-6">
        <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
          <h2 className="text-xl font-bold text-gray-800 mb-6 border-b pb-4">
            About Tour
          </h2>

          <div className="p-6 rounded-lg bg-green-50 border border-green-200">
            <div className="flex items-center gap-2 mb-4">
              <i className="pi pi-info-circle text-orange-600 text-lg"></i>
              <span className="text-orange-600 font-bold uppercase tracking-wide">
                Tour Information for Eligible Employees
              </span>
            </div>

            <ol className="list-decimal list-inside space-y-4 text-gray-700 leading-relaxed">
              <li className="pl-2">
                Employees may be eligible for business-related travel to attend
                conferences, meetings, site visits, training programs, or other
                official engagements.
              </li>

              <li className="pl-2">
                The tour is undertaken to enhance professional skills, meet
                clients, explore new business opportunities, or gather important
                industry insights.
              </li>

              <li className="pl-2">
                Employees must have completed the minimum required service
                duration as per organizational norms and must maintain a
                satisfactory performance record to qualify for tour approval.
              </li>

              <li className="pl-2">
                The organization shall bear the cost of transportation such as
                flights, taxis, or car rentals, along with accommodation and meal
                expenses, strictly as per the approved travel policy.
              </li>

              <li className="pl-2">
                Any additional benefits including daily allowances, insurance
                coverage, or other admissible entitlements will be clearly
                mentioned in the tour approval order.
              </li>
            </ol>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default AboutTour;
