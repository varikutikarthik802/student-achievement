import React, { useState } from 'react';

export default function Settings() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
    document.body.classList.toggle('dark-mode');
  };

  return (
    <div>
      <h2>Settings</h2>
      <p>Customize system preferences and themes.</p>
      <button onClick={toggleTheme}>
        Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
      </button>
    </div>
  );
}
