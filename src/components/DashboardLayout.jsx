import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import Sidebar from './Sidebar';
import '../index.css';

export default function DashboardLayout() {
  const navigate = useNavigate();

  React.useEffect(() => {
    if (!localStorage.getItem('loggedIn')) {
      navigate('/');
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('loggedIn');
    navigate('/');
  };

  return (
    <div className="dashboard">
      <Sidebar />
      <div className="content">
        <div className="topbar">
          <h2>Student Achievements ERP</h2>
          <button onClick={handleLogout}>Logout</button>
        </div>
        <div className="main-content">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
