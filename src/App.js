import React, { useState } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { Box } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import { darkTheme } from './styles/themes/darkTheme';
import { lightTheme } from './styles/themes/lightTheme';

import Navbar from './components/Navbar';
import Home from './pages/Home';
import EventsPage from './pages/EventsPage';
import AttendanceTracker from './pages/AttendanceTracker';
import Collab from './pages/Collab';

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [activeTab, setActiveTab] = useState('home');

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Navbar 
          darkMode={darkMode} 
          setDarkMode={setDarkMode}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          {activeTab === 'home' && <Home />}
          {activeTab === 'events' && <EventsPage />}
          {activeTab === 'attendance-tracker' && <AttendanceTracker />}
          {activeTab === 'collab-zone' && <Collab />}
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;