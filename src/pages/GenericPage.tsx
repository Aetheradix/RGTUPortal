import React from 'react';
import { useLocation } from 'react-router-dom';
import { MdConstruction } from 'react-icons/md';

const GenericPage: React.FC = () => {
  const location = useLocation();
  const path = location.pathname;

  const getPageTitle = (route: string): string => {
    const segments = route.split('/').filter(Boolean);
    if (segments.length === 0) return 'Home';

    const lastSegment = segments[segments.length - 1];
    return lastSegment
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  const pageTitle = getPageTitle(path);

  return (
    <div className="flex items-center justify-center h-full p-6 shadow-2xs">
      <div className="max-w-xl w-full rounded-3xl p-8 text-center shadow-xl backdrop-blur">
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-amber-500/10 text-amber-400">
          <MdConstruction className="h-9 w-9" />
        </div>
        <h1 className="text-2xl font-bold text-slate-700 mb-2">
          {pageTitle} – Under Construction
        </h1>
        <p className="text-sm text-slate-800 mb-4">
          This section is currently being designed. You&apos;ll soon see the full interface here.
        </p>
        <div className="inline-flex items-center gap-2 rounded-full bg-slate-800 px-4 py-2 text-xs text-slate-800 border border-slate-700">
          <span className="font-semibold text-slate-100">Route</span>
          <code className="text-indigo-300">{path}</code>
        </div>
        <p className="mt-4 text-[11px] text-slate-800">
          Use this generic page as a placeholder for any route where the final UI is not ready yet.
        </p>
      </div>
    </div>
  );
};

export default GenericPage;
