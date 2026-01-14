import React from "react";
import PageLayout from "../../../components/PageLayout";

const AboutPunishmentSystem: React.FC = () => {
  return (
    <PageLayout title="About Punishment System">
      <div className="space-y-6">
        <div className="bg-[#fdfaff] p-10 rounded-xl border border-[#f3e8ff] shadow-sm relative overflow-hidden">
          <div className="absolute top-0 left-0 w-1 bg-[#a855f7] h-full opacity-50"></div>

          <h3 className="text-[#ff9800] font-extrabold text-xl mb-6 tracking-tight uppercase text-[16px]">
            Important Guidelines:
          </h3>

          <ul className="space-y-6 text-[#4a5568] text-[15px] font-medium leading-relaxed">
            <li className="flex gap-4 items-start group">
              <span className="bg-[#f3e8ff] text-[#9333ea] h-6 w-6 rounded-full flex items-center justify-center shrink-0 text-xs font-bold border border-[#e9d5ff]">
                1
              </span>
              <span className="pt-0.5">
                Verify the details of the employees as per the following points.
                If any errors are detected, do not issue the ID card for that
                employee.
              </span>
            </li>

            <li className="flex gap-4 items-start group">
              <span className="bg-[#f3e8ff] text-[#9333ea] h-6 w-6 rounded-full flex items-center justify-center shrink-0 text-xs font-bold border border-[#e9d5ff]">
                2
              </span>
              <span className="pt-0.5">
                If the employee's details are incomplete, remove the checkbox
                next to the name and ensure that an ID is not generated due to
                missing information.
              </span>
            </li>

            <li className="flex gap-4 items-start group">
              <span className="bg-[#f3e8ff] text-[#9333ea] h-6 w-6 rounded-full flex items-center justify-center shrink-0 text-xs font-bold border border-[#e9d5ff]">
                3
              </span>
              <span className="pt-0.5">
                Since manual signatures will also be printed on the ID card,
                sign on a paper, scan it, and then upload it through the
                <b className="text-[#9333ea]"> 'Upload Signature' </b> option in
                JPEG or PNG format (60px*30px).
              </span>
            </li>

            <li className="flex gap-4 items-start group">
              <span className="bg-[#f3e8ff] text-[#9333ea] h-6 w-6 rounded-full flex items-center justify-center shrink-0 text-xs font-bold border border-[#e9d5ff]">
                4
              </span>
              <span className="pt-0.5">
                For employees with incomplete details, ensure that their
                information is updated fully before generating the ID.
              </span>
            </li>

            <li className="flex gap-4 items-start group">
              <span className="bg-[#f3e8ff] text-[#9333ea] h-6 w-6 rounded-full flex items-center justify-center shrink-0 text-xs font-bold border border-[#e9d5ff]">
                5
              </span>
              <span className="pt-0.5">
                After checking the box, click the
                <b className="text-[#9333ea]"> 'Approve' </b> button and use the
                utility for digital signing.
              </span>
            </li>
          </ul>
        </div>
      </div>
    </PageLayout>
  );
};

export default AboutPunishmentSystem;
