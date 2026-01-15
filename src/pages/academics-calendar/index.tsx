
import { Route, Routes } from 'react-router-dom';
import AcademicsCalendarReport from './academics-calendar-report';
import AcademicCalendar from './calendar';
export default function AcademicsCalendar() {
  return (
    <Routes>
        <Route path="calendar/*" element={<AcademicCalendar />} />
        <Route path="academics-calendar-report/*" element={<AcademicsCalendarReport />} />
    </Routes>
  );
}
    