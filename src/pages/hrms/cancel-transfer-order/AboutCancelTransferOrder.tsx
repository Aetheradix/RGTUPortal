import React from 'react';

const AboutCancelTransferOrder: React.FC = () => {
  return (
    <div className="p-4">
      <h2 className="text-lg font-semibold mb-4">
        About Cancel Transfer Order / Cancellation Of Transfer Order
      </h2>

      <div className="bg-white border rounded p-4">
        <div className="bg-orange-100 text-orange-700 px-3 py-2 rounded mb-3 font-medium">
          Key Points for Canceling the Transfer Order:
        </div>

        <div className="bg-green-50 border border-green-200 rounded p-4 text-sm space-y-2">
          <p>
            <strong>1)</strong> If a teacher has been transferred based on
            seniority, and the information provided is incorrect, the transfer
            will be canceled at the state level after the cluster principal
            places a hold. No separate application is required.
          </p>

          <p>
            <strong>2)</strong> If the transfer was not based on seniority and
            the teacher has not been relieved, they can apply directly on the
            portal using their login ID and password.
          </p>

          <p>
            <strong>3)</strong> If the teacher has been relieved but has not yet
            joined the new assigned location, they can apply directly on the
            portal using their login ID and password.
          </p>

          <p>
            <strong>4)</strong> If the teacher has been relieved and a hold has
            been placed on joining at the new assigned location, they can apply
            directly on the portal using their login ID and password.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutCancelTransferOrder;
