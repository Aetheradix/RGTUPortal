import React, { useState } from 'react';
import PageLayout from '../../../components/PageLayout';
import { Button } from 'primereact/button';
import { Table, type TableColumn } from '../../../ui/shared';
import { Dialog } from 'primereact/dialog';

interface ExperienceClaimRow {
  srNo: number;
  claimFormId: string;
  academicYear: string;
  university: string;
  statusDetails: string;
}

const PrintExperienceClaim: React.FC = () => {

  const [showPrintModal, setShowPrintModal] = useState(false);

  const [rows] = useState<ExperienceClaimRow[]>([
    {
      srNo: 1,
      claimFormId: '100489',
      academicYear: '2023-24',
      university:
        'Atal Bihari Vajpayee Indian Institute of Information Technology and Management (ABV-IIITM), Gwalior',
      statusDetails:
        'Through the portal, the claim process for the experience of guest teacher 146542-Ramesh Lal has been completed. Download the printout and submit it to the cluster principal at the cluster office for verification.',
    },
  ]);

  const columns: TableColumn[] = [
    { field: 'srNo', header: 'Sr.No.', style: { width: '70px' } },
    { field: 'claimFormId', header: 'Claim Form Id' },
    { field: 'academicYear', header: 'Academic Year' },
    { field: 'university', header: 'University' },
    { field: 'statusDetails', header: 'Status Details' },
    {
      header: 'Experience Claim Form',
      body: () => (
        <Button
          icon="pi pi-eye"
          className="p-button-rounded p-button-success p-button-sm"
          onClick={() => setShowPrintModal(true)}
        />
      ),
      field: '',
    },
  ];

  return (
    <PageLayout title="Print Experience Claim">

      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 mb-6 flex justify-center">
        <Button
          label="View All Registered Claims"
          className="p-button-outlined"
          style={{
            borderColor: '#84CC16',
            color: '#84CC16',
            fontWeight: 600,
          }}
        />
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
        <Table columns={columns} data={rows} showPagination rowsPerPage={10} />
      </div>

      <Dialog
        header="Print Experience Claim Form"
        visible={showPrintModal}
        style={{ width: '80vw' }}
        onHide={() => setShowPrintModal(false)}
      >
        <div className="border rounded-lg p-6 text-sm text-gray-700">

          <div className="text-center mb-6">
            <h2 className="text-xl font-bold">Experience Claim Form</h2>
            <p className="text-sm mt-1">
              (Attach filled experience certificates and documents to the file)
            </p>
            <p className="mt-2 font-semibold">Session: 2023-24</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <p><b>AISHE Code:</b> C-42482</p>
            <p>
              <b>College Name:</b> Atal Bihari Vajpayee Indian Institute of
              Information Technology and Management (ABV-IIITM), Gwalior
            </p>
          </div>

          <div className="mb-6">
            <b>Note:</b>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>This is not an experience certificate.</li>
              <li>This is a verification process before issuing the experience certificate.</li>
              <li>Working days are taken from the honorarium bill.</li>
              <li>Validation will be done by College Head & Department Head.</li>
            </ul>
          </div>
          <div className="mb-6 space-y-2">
            <p><b>Guest Faculty ID / Mobile No:</b> 9638527410</p>
            <p><b>Guest Faculty Name:</b> Ramesh Lal</p>
            <p><b>Name (As per Aadhaar):</b> Ramesh Lal</p>
          </div>

          <div className="overflow-x-auto mb-6">
            <table className="w-full border text-sm">
              <thead className="bg-gray-100">
                <tr>
                  <th className="border p-2">Sr No</th>
                  <th className="border p-2">Position Worked Against</th>
                  <th className="border p-2">Month</th>
                  <th className="border p-2">Total Days (Portal)</th>
                  <th className="border p-2">Department Head</th>
                  <th className="border p-2">College Head</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border p-2 text-center">1</td>
                  <td className="border p-2">Assistant Professor</td>
                  <td className="border p-2">August</td>
                  <td className="border p-2 text-center">23</td>
                  <td className="border p-2">Not Yet Verified</td>
                  <td className="border p-2">Not Yet Verified</td>
                </tr>
                <tr>
                  <td className="border p-2 text-center">2</td>
                  <td className="border p-2">Assistant Professor</td>
                  <td className="border p-2">September</td>
                  <td className="border p-2 text-center">24</td>
                  <td className="border p-2">Not Yet Verified</td>
                  <td className="border p-2">Not Yet Verified</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* FOOTER */}
          <div className="mt-6 text-sm">
            <b>Verification by Department Head</b>
            <p className="mt-2">
              It is certified that the attendance days of the guest faculty have
              been verified from the college records (attendance register).
            </p>
          </div>
          <div className="flex justify-center gap-4 mt-8">
            <Button label="Print" icon="pi pi-print" />
            <Button
              label="Close"
              className="p-button-danger"
              onClick={() => setShowPrintModal(false)}
            />
          </div>
        </div>
      </Dialog>
    </PageLayout>
  );
};

export default PrintExperienceClaim;
