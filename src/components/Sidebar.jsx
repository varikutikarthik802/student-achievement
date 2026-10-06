import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  FaUserGraduate, FaClipboardList, FaTrophy, FaCalendarCheck,
  FaBook, FaHome, FaMoneyBill, FaBell, FaCog
} from 'react-icons/fa';

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-profile">
        <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="User Avatar" />
        <h3>Admin</h3>
        <p>Administrator</p>
      </div>

      <nav>
        <NavLink to="/dashboard/info" className="nav-link"><FaUserGraduate /> Student Info</NavLink>
        <NavLink to="/dashboard/exam" className="nav-link"><FaClipboardList /> Exam Section</NavLink>
        <NavLink to="/dashboard/achievements" className="nav-link"><FaTrophy /> Achievements</NavLink>
        <NavLink to="/dashboard/attendance" className="nav-link"><FaCalendarCheck /> Attendance</NavLink>
        <NavLink to="/dashboard/library" className="nav-link"><FaBook /> Library</NavLink>
        <NavLink to="/dashboard/hostel" className="nav-link"><FaHome /> Hostel</NavLink>
        <NavLink to="/dashboard/fees" className="nav-link"><FaMoneyBill /> Fee Management</NavLink>
        <NavLink to="/dashboard/notifications" className="nav-link"><FaBell /> Notifications</NavLink>
        <NavLink to="/dashboard/settings" className="nav-link"><FaCog /> Settings</NavLink>
      </nav>
    </aside>
  );
}
