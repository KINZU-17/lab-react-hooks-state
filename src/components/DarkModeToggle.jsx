import React from 'react';

const DarkModeToggle = ({ isDarkMode, setIsDarkMode }) => {
  return (
    <button onClick={() => setIsDarkMode(!isDarkMode)}>
      {isDarkMode ? 'Toggle Light Mode' : 'Toggle Dark Mode'}
    </button>
  );
};

export default DarkModeToggle;