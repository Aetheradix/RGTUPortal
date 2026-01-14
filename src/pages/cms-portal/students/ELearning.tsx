import React from "react";
import PageLayout from "@/components/PageLayout";
import { Card } from "primereact/card";

const ELearning: React.FC = () => {
  return (
    <PageLayout title="E-Learning">
      <Card title="E-Learning Facilities">
        <p className="text-justify leading-relaxed">
          The institution has a library equipped with computer facilities where
          students and teachers can access e-books, e-journals, and e-magazines.
          Learning facilities are also available through various online platforms
          such as <b>e-Shiksha, SWAYAM, NPTEL, NDL, Amrita Virtual Lab, Shodhganga,
          ShodhSindhu</b> and <b>ShodhGangotri</b>. The Higher Education Department
          of the Government of Madhya Pradesh also provides subject-specific
          lectures for e-learning.
        </p>

        <h4 className="mt-4 font-semibold">Useful E-Learning Links</h4>

        <ul className="list-disc ml-6 mt-2 space-y-2">
          <li>
            <a
              href="https://www.eshiksha.mp.gov.in/course/search/Z1cwQVVEeE5ZSEg1T3ZrTnV6S0FsZz09"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline"
            >
              e-Shiksha MP – E-Learning Portal
            </a>
          </li>
          <li>
            <a
              href="https://highereducation.mp.gov.in/?page=xhzIQmpZwkylQo2b%2Fy5G7w%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline"
            >
              Higher Education Department, Government of Madhya Pradesh
            </a>
          </li>
        </ul>
      </Card>
    </PageLayout>
  );
};

export default ELearning;
