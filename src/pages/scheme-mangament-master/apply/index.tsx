import { Route, Routes } from 'react-router-dom';
import ApplyScheme from './ApplyScheme';
import ViewSchemeWiseGeneratedList from './ViewSchemeWiseGenerateList';
import SchemeWiseEligibleStudentList from './SchemeWiseEligibleStudentList';

export default function Apply() {
  return (
    <Routes>
       <Route path="apply-scheme" element={<ApplyScheme/>} />
       <Route path="view-scheme-wise-generated-list" element={<ViewSchemeWiseGeneratedList />} />
       <Route path="schemewise-eligible-student-list" element={<SchemeWiseEligibleStudentList />} />
    </Routes>
  );
}
    