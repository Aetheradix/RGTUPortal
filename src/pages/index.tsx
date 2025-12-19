import { Route, Routes } from 'react-router-dom';
import Dashboard from './Dashboard';
import GenericPage from './GenericPage';
import Master from './masters';
import TransportManagementSYS from './transport-management';

export default function AppFeature() {
  return (
    <Routes>
      <Route index element={<Dashboard />} />
      <Route path="masters/*" element={<Master />} />
      <Route path ="transport-management/*" element={<TransportManagementSYS/>}/>
      <Route path="*" element={<GenericPage />} />
    </Routes>
  );
}
