import { Route, Routes } from 'react-router-dom';
import MonthWiseSyllabusMaster from './MonthWiseSyllabusMaster';
import MonthWiseSyllabusPrint from './MonthWiseSyllabusPrint';
import EventAndCircularMaster from './EventHolidayCalendarMaster';
import CCLECalendarMaster from './CCLECalendarMaster';
export default function AcademicCalendar() {
  return (
    <Routes>
        <Route path="month-wise-syllabus-master" element={<MonthWiseSyllabusMaster />} />
        <Route path="month-wise-syllabus-print" element={<MonthWiseSyllabusPrint />} />
        <Route path="event-and-circular-event" element={<EventAndCircularMaster/>}/>
        <Route path="ccle-calendar-master" element={<CCLECalendarMaster/>}/>
    </Routes> 
  );
}
    