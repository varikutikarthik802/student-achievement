import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import DashboardLayout from './components/DashboardLayout';
import StudentInfo from './pages/StudentInfo';
import ExamSection from './pages/ExamSection';
import Achievements from './pages/Achievements';
import Attendance from './pages/Attendance';
import Library from './pages/Library';
import Hostel from './pages/Hostel';
import Fees from './pages/Fees';
import Notifications from './pages/Notifications';
import Settings from './pages/Settings';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route path="info" element={<StudentInfo />} />
          <Route path="exam" element={<ExamSection />} />
          <Route path="achievements" element={<Achievements />} />
          <Route path="attendance" element={<Attendance />} />
          <Route path="library" element={<Library />} />
          <Route path="hostel" element={<Hostel />} />
          <Route path="fees" element={<Fees />} />
          <Route path="notifications" element={<Notifications />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
