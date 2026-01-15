import { Route, Routes } from 'react-router-dom';
import SchoolEventReport from './EventHolidayCalendarMasterReport';
import CCLECalendarReport from './CCLECalendarMasterReport';
export default function AcademicsCalendarReport() {
  return (
    <Routes>
      <Route path="school-event-report" element={<SchoolEventReport/>}/>
      <Route path="ccle-calendar-report" element={<CCLECalendarReport/>}/>
    </Routes>
  );
}
    