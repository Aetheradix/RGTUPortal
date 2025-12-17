import { Route, Routes } from 'react-router-dom';
import Master from './masters';
import Dashboard from './Dashboard';
import GenericPage from './GenericPage';

export default function AppFeature() {
  return (
    <Routes>
      <Route index element={<Dashboard />} />
      <Route path="/" element={<Dashboard />} />
      <Route path="masters/*" element={<Master />} />
      {/* Fallback for any route where dedicated UI is not implemented yet */}
      <Route path="*" element={<GenericPage />} />
    </Routes>
  );
}
