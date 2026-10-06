import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../index.css';

export default function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Fetch user list from JSON server
      const response = await fetch('http://localhost:5000/users');
      const users = await response.json();

      // Find matching user
      const user = users.find(
        (u) => u.username === username && u.password === password
      );

      if (user) {
        localStorage.setItem('loggedIn', 'true');
        localStorage.setItem('username', user.username);
        localStorage.setItem('role', user.role);

        toast.success(`✅ Welcome ${user.role} (${user.username})!`);
        setTimeout(() => navigate('/dashboard/info'), 1500);
      } else {
        toast.error('❌ Invalid username or password');
      }
    } catch (error) {
      toast.error('⚠️ Error connecting to server. Please start JSON Server.');
      console.error('Login error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-page">
      <div className="login-box">
        <h2>Student Achievements Portal</h2>
        <form onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit" disabled={loading}>
            {loading ? 'Logging in...' : 'Login'}
          </button>
        </form>
        <ToastContainer position="top-center" />
      </div>
    </div>
  );
}
