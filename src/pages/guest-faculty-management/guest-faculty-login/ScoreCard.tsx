import React from 'react';
import PageLayout from '../../../components/PageLayout';
import { Button } from 'primereact/button';

const GuestFacultyScoreCard: React.FC = () => {
  return (
    <PageLayout title="Guest Faculty Score Card">

      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">

        <div className="flex items-center justify-between mb-6">
          <img src="/gov-logo.png" alt="Gov Logo" className="h-14" />

          <div className="text-center">
            <h2 className="text-lg font-bold">
              Directorate of Technical Education
            </h2>
            <p className="text-sm font-semibold">Madhya Pradesh Government</p>
            <p className="text-xs mt-1">
              Guest Faculty Management System (Session-2023-24)
            </p>
          </div>

          <img src="/gov-logo.png" alt="Gov Logo" className="h-14" />
        </div>

        <hr className="mb-6" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm mb-10">
          <div className="space-y-2">
            <p><b>Name:</b> Yash Varma</p>
            <p><b>Father / Guardian Name:</b> Mr. Papendra Varma</p>
            <p><b>Address:</b> Near New Girls H.S. School Bari, Dist. Raisen (M.P)</p>
            <p><b>Mobile No:</b> 8802387114</p>
            <p><b>Retired Govt. Teacher:</b> No</p>
            <p><b>Retirement Date:</b> NIL</p>
          </div>

          <div className="space-y-2">
            <p><b>Date of Birth:</b> 17/07/1998</p>
            <p><b>Mother Name:</b> Mrs. Nimesh Varma</p>
            <p><b>Pin Code:</b> 464885</p>
            <p><b>Email ID:</b> yash10ms@gmail.com</p>
            <p><b>School:</b> 0</p>
          </div>
        </div>

        <h3 className="text-sm font-bold mb-3 text-center">
          Education & Professional Qualification as Registered by the Applicant
        </h3>

        <div className="overflow-x-auto mb-10">
          <table className="w-full border text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="border p-2">S. No</th>
                <th className="border p-2">Year</th>
                <th className="border p-2">Qualification</th>
                <th className="border p-2">Subject</th>
                <th className="border p-2">Board / University</th>
                <th className="border p-2">Roll Number</th>
                <th className="border p-2">Total Marks</th>
                <th className="border p-2">Obtained Marks</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border p-2 text-center">1</td>
                <td className="border p-2">2010-11</td>
                <td className="border p-2">High School</td>
                <td className="border p-2">All</td>
                <td className="border p-2">MP Board</td>
                <td className="border p-2">11852203</td>
                <td className="border p-2 text-center">600</td>
                <td className="border p-2 text-center">428</td>
              </tr>
              <tr>
                <td className="border p-2 text-center">2</td>
                <td className="border p-2">2012-13</td>
                <td className="border p-2">HSS (11th-12th)</td>
                <td className="border p-2">PCM</td>
                <td className="border p-2">MP Board</td>
                <td className="border p-2">238519077</td>
                <td className="border p-2 text-center">500</td>
                <td className="border p-2 text-center">292</td>
              </tr>
              <tr>
                <td className="border p-2 text-center">3</td>
                <td className="border p-2">2015-18</td>
                <td className="border p-2">Post Graduate</td>
                <td className="border p-2">Computer Science</td>
                <td className="border p-2">State Govt. University</td>
                <td className="border p-2">14157421</td>
                <td className="border p-2 text-center">3700</td>
                <td className="border p-2 text-center">2362</td>
              </tr>
            </tbody>
          </table>
        </div>
        <h3 className="text-sm font-bold mb-3 text-center">
          Score Card for Various Panels generated using the Qualification and other details
        </h3>

        <div className="overflow-x-auto mb-10">
          <table className="w-full border text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="border p-2">S. No</th>
                <th className="border p-2">Panel</th>
                <th className="border p-2">Basic Qual.</th>
                <th className="border p-2">Subject</th>
                <th className="border p-2">Basic Qual. Score</th>
                <th className="border p-2">Prof. Qual (Out of 100)</th>
                <th className="border p-2">Retd. Govt Prof (Out of 100)</th>
                <th className="border p-2">2018-19 Exp. (Out of 25)</th>
                <th className="border p-2">Total Score (Out of 325)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border p-2 text-center">1</td>
                <td className="border p-2">SSS-IT</td>
                <td className="border p-2">Graduate</td>
                <td className="border p-2">Subject</td>
                <td className="border p-2 text-center">63.8</td>
                <td className="border p-2 text-center">0</td>
                <td className="border p-2 text-center">0</td>
                <td className="border p-2 text-center">0</td>
                <td className="border p-2 text-center">63.8</td>
              </tr>
              <tr>
                <td className="border p-2 text-center">2</td>
                <td className="border p-2">SSS-3</td>
                <td className="border p-2">HSS (11th-12th)</td>
                <td className="border p-2">PCM</td>
                <td className="border p-2 text-center">58.4</td>
                <td className="border p-2 text-center">0</td>
                <td className="border p-2 text-center">0</td>
                <td className="border p-2 text-center">0</td>
                <td className="border p-2 text-center">58.4</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-center text-sm mb-6">
          The above details have been verified by: <b>Devi Ahilya Vishwavidyalaya (DAVV), Indore</b>
        </p>

        <div className="flex justify-center gap-4">
          <Button label="Print" icon="pi pi-print" />
          <Button label="Download" icon="pi pi-download" className="p-button-outlined" />
        </div>

      </div>
    </PageLayout>
  );
};

export default GuestFacultyScoreCard;
