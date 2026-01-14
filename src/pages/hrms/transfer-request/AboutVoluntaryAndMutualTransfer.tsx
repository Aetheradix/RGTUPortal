import React from "react";
import PageLayout from "../../../components/PageLayout";
import { Button } from "primereact/button";
import { useNavigate } from "react-router-dom";

const AboutTransfer: React.FC = () => {
  const navigate = useNavigate();

  return (
    <PageLayout title="About Voluntary and Mutual Transfer">
      <div className="space-y-6">
        {/* Info Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
            <h3 className="text-blue-800 font-bold text-lg mb-2">
              Voluntary Transfer
            </h3>
            <p className="text-sm text-blue-700 leading-relaxed">
              Allows employees to apply for a transfer based on personal reasons
              such as serious illness, disability, or spouse service status. You
              can select up to 20 preferred locations.
            </p>
            <Button
              label="Apply Now"
              className="mt-4 p-button-sm p-button-info"
              onClick={() => navigate("/hrms/transfer-request/apply-voluntary")}
            />
          </div>

          <div className="bg-purple-50 p-6 rounded-lg border border-purple-100">
            <h3 className="text-purple-800 font-bold text-lg mb-2">
              Mutual Transfer
            </h3>
            <p className="text-sm text-purple-700 leading-relaxed">
              Allows two employees of the same cadre and designation to swap
              their posting locations. You must have the Unique ID of the second
              employee to initiate this request.
            </p>
            <Button
              label="Apply Now"
              className="mt-4 p-button-sm p-button-help"
              onClick={() => navigate("/hrms/transfer-request/apply-mutual")}
            />
          </div>
        </div>

        {/* Instructions Table Style (Simple Grid) */}
        <div className="bg-white p-6 rounded shadow-sm border border-gray-100">
          <h3 className="text-gray-700 font-medium mb-6 pb-2 border-b">
            Important Instructions
          </h3>
          <ul className="space-y-4">
            <li className="flex gap-3 text-sm">
              <span className="bg-indigo-100 text-indigo-600 h-6 w-6 rounded-full flex items-center justify-center font-bold text-xs">
                1
              </span>
              <span>
                Ensure your <b>E-Service Book</b> is updated before applying.
              </span>
            </li>
            <li className="flex gap-3 text-sm">
              <span className="bg-indigo-100 text-indigo-600 h-6 w-6 rounded-full flex items-center justify-center font-bold text-xs">
                2
              </span>
              <span>
                Upload valid medical certificates if applying under the{" "}
                <b>Serious Illness</b> category.
              </span>
            </li>
            <li className="flex gap-3 text-sm">
              <span className="bg-indigo-100 text-indigo-600 h-6 w-6 rounded-full flex items-center justify-center font-bold text-xs">
                3
              </span>
              <span>
                Once an application is <b>Locked</b>, no further changes can be
                made.
              </span>
            </li>
            <li className="flex gap-3 text-sm">
              <span className="bg-indigo-100 text-indigo-600 h-6 w-6 rounded-full flex items-center justify-center font-bold text-xs">
                4
              </span>
              <span>
                Draft applications must be printed and signed for physical
                verification if required.
              </span>
            </li>
          </ul>
        </div>
      </div>
    </PageLayout>
  );
};

export default AboutTransfer;
