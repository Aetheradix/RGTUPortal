import React from 'react';
import PageLayout from '@/components/PageLayout';
import { Card } from 'primereact/card';

const Award: React.FC = () => {
  return (
    <PageLayout title="National Awards To Teachers (Technical Education)">
      <Card className="mb-4">
        <h3 className="font-semibold mb-2">Details</h3>
        <p>
          The purpose of the National Award to Teachers under the Department of
          Technical Educational Institutions is to recognize the distinctive
          contributions of some of the finest faculty members in the country and
          honor them for their dedication and hard work towards excellence in
          technical education.
        </p>
      </Card>
      <Card className="mb-4">
        <h3 className="font-semibold mb-2">No. of Awardees</h3>
        <p>
          Fifty Awards (25 in Category II and 25 in Category III) shall be
          conferred annually.
        </p>
      </Card>
      <Card className="mb-4">
        <h3 className="font-semibold mb-2">Selection Process</h3>
        <p>The selection procedure for NTA-2023 will follow a two-step process:</p>
        <ul className="list-disc ml-5">
          <li>
            Preliminary Search cum Screening Committee for initial shortlisting
            of candidates.
          </li>
          <li>
            Committee of ‘Jury’ for the final selection of awardees from the
            shortlisted candidates.
          </li>
        </ul>
      </Card>
      <Card className="mb-4">
        <h3 className="font-semibold mb-2">Ceremony Details</h3>
        <p>The ceremony is held on <strong>5th September</strong> every year.</p>
      </Card>
      <Card className="mb-4">
        <h3 className="font-semibold mb-2">Benefits</h3>
        <ul className="list-disc ml-5">
          <li>A medal.</li>
          <li>A certificate.</li>
          <li>Cash Prize of ₹ 50,000/-.</li>
        </ul>
      </Card>
      <Card className="mb-4">
        <h3 className="font-semibold mb-2">Eligibility</h3>
        <p>
          The award is open to all faculty members of colleges/universities/higher
          educational institutions in India, satisfying the following conditions:
        </p>
        <ul className="list-disc ml-5">
          <li>Should be a regular faculty member.</li>
          <li>
            Should have at least five years of full-time teaching experience at
            the Undergraduate and/or Post-graduate level.
          </li>
          <li>
            Should not be above 55 years of age as of the last date of receiving
            an application for the awards.
          </li>
          <li>
            Vice-Chancellor / Director / Principal (regular or officiating) are
            <strong> NOT eligible</strong> to apply.
          </li>
        </ul>
      </Card>
      <Card className="mb-4">
        <h3 className="font-semibold mb-2">Exclusions</h3>
        <ul className="list-disc ml-5">
          <li>Self-nomination is NOT allowed.</li>
          <li>
            Award Jury are NOT eligible to make a nomination for this award.
          </li>
          <li>
            Nominations received after the due date shall not be considered.
          </li>
        </ul>
      </Card>
      <Card className="mb-4">
        <h3 className="font-semibold mb-2">Application Process</h3>

        <p className="font-semibold mt-2">Online Registration:</p>
        <ul className="list-disc ml-5">
          <li>Visit the official website.</li>
          <li>Click on the Registration button.</li>
          <li>Choose type: Individual or Organization.</li>
          <li>Provide required details.</li>
          <li>Submit the form.</li>
        </ul>

        <p className="font-semibold mt-3">Apply:</p>
        <ul className="list-disc ml-5">
          <li>Visit the official website.</li>
          <li>Click on login button and login with credentials.</li>
          <li>Select scheme name and click “Nominate / Apply Now”.</li>
          <li>Fill in mandatory fields and submit the form.</li>
        </ul>
      </Card>
      <Card className="mb-4">
        <h3 className="font-semibold mb-2">Documents Required</h3>
        <ul className="list-disc ml-5">
          <li>Nomination Form.</li>
          <li>Curriculum Vitae (CV) of the nominee.</li>
          <li>Detailed description of the nominee's contribution.</li>
          <li>
            Supporting documents (research papers, patents, award certificates,
            testimonials, etc.).
          </li>
          <li>Aadhaar Card.</li>
        </ul>
      </Card>

    </PageLayout>
  );
};

export default Award;
