import React from 'react';
import { useLocation } from 'react-router-dom';
import { MdConstruction } from 'react-icons/md';
import PageLayout from '@/components/PageLayout';

type MasterPlaceholderPageProps = {
  title: string;
};

const MasterPlaceholderPage: React.FC<MasterPlaceholderPageProps> = ({ title }) => {
  const { pathname } = useLocation();

  return (
    <PageLayout title={title}>
      <div className="flex items-center justify-center">
        <div className="max-w-xl w-full bg-slate-900/70 border border-slate-800 rounded-3xl p-8 text-center shadow-xl backdrop-blur">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-amber-500/10 text-amber-400">
            <MdConstruction className="h-9 w-9" />
          </div>
          <h2 className="text-xl font-bold text-white mb-2">Under Construction</h2>
          <p className="text-sm text-slate-300 mb-4">
            This master screen is scaffolded. You can plug the final UI + API here.
          </p>
          <div className="inline-flex items-center gap-2 rounded-full bg-slate-800/80 px-4 py-2 text-xs text-slate-300 border border-slate-700">
            <span className="font-semibold text-slate-100">Route</span>
            <code className="text-indigo-300">{pathname}</code>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default MasterPlaceholderPage;












