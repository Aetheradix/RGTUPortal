import React from "react";
import PageLayout from "../../../components/PageLayout";

const AboutHOTransferApproval: React.FC = () => {
  return (
    <PageLayout title="About HO Level Transfer Approval">
      <div className="space-y-6">
        {/* Main Content Area - Styled with Purple Theme */}
        <div className="bg-[#fdfaff] p-10 rounded-xl border border-[#f3e8ff] shadow-sm relative overflow-hidden">
          {/* Decorative left accent */}
          <div className="absolute top-0 left-0 w-1 bg-[#a855f7] h-full opacity-50"></div>

          <h3 className="text-[#ff9800] font-extrabold text-xl mb-6 tracking-tight uppercase text-[16px]">
            Transfer Guidelines:
          </h3>

          <ul className="space-y-6 text-[#4a5568] text-[15px] font-medium leading-relaxed">
            <li className="flex gap-4 items-start group">
              <span className="bg-[#f3e8ff] text-[#9333ea] h-6 w-6 rounded-full flex items-center justify-center shrink-0 text-xs font-bold border border-[#e9d5ff]">
                1
              </span>
              <span className="pt-0.5">
                The page is used to approve voluntary and mutual transfer
                requests received from districts.
              </span>
            </li>

            <li className="flex gap-4 items-start group">
              <span className="bg-[#f3e8ff] text-[#9333ea] h-6 w-6 rounded-full flex items-center justify-center shrink-0 text-xs font-bold border border-[#e9d5ff]">
                2
              </span>
              <span className="pt-0.5">
                Verify and ensure all employee details are accurate before
                initiating the transfer process.
              </span>
            </li>

            <li className="flex gap-4 items-start group">
              <span className="bg-[#f3e8ff] text-[#9333ea] h-6 w-6 rounded-full flex items-center justify-center shrink-0 text-xs font-bold border border-[#e9d5ff]">
                3
              </span>
              <span className="pt-0.5">
                Notify the relevant employees in case of incomplete information.
              </span>
            </li>
          </ul>
        </div>
      </div>
    </PageLayout>
  );
};

export default AboutHOTransferApproval;
