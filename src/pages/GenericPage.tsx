import React from 'react';
import { useLocation } from 'react-router-dom';

const GenericPage: React.FC = () => {
  const location = useLocation();
  const path = location.pathname;
  
  // Extract page title from route
  const getPageTitle = (route: string): string => {
    const segments = route.split('/').filter(Boolean);
    if (segments.length === 0) return 'Home';
    
    // Get last segment and format it
    const lastSegment = segments[segments.length - 1];
    return lastSegment
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };
  
  const pageTitle = getPageTitle(path);
  
  return (
    <div className="p-6">
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">
          {pageTitle}
        </h1>
        <div className="text-gray-600">
          <p className="mb-4">
            <span className="font-semibold">Route:</span>{' '}
            <code className="bg-gray-100 px-2 py-1 rounded text-sm">{path}</code>
          </p>
          <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
            <p className="text-blue-800">
              This is a generic page component. You can customize this component to display specific content 
              for each module, submodule, or page based on the route.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GenericPage;
