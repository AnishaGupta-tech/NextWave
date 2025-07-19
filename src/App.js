import React, { useState } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { Box } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { darkTheme } from './styles/themes/darkTheme';
import { lightTheme } from './styles/themes/lightTheme';

import Navbar from './components/Navbar';
import Home from './pages/Home';
import EventsPage from './pages/EventsPage';
import AttendanceTracker from './pages/AttendanceTracker';
import Collab from './pages/Collab';
import Marketplace from './pages/MarketPlace';
import Notes from './pages/Notes';
import LoginPage from './pages/auth/LoginPage';
import RegisterPage from './pages/auth/RegisterPage';
import ProfilePage from './pages/ProfilePage';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      <AuthProvider>
        <Router>
          <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/events" element={<EventsPage />} />
                <Route path="/attendance-tracker" element={<AttendanceTracker />} />
                <Route path="/career-corner" element={<Collab />} />
                <Route path="/marketplace" element={<Marketplace />} />
                <Route path="/resources" element={<Notes />} />
                
                {/* Auth Routes */}
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route 
                  path="/profile" 
                  element={
                    <ProtectedRoute>
                      <ProfilePage />
                    </ProtectedRoute>
                  } 
                />

                {/* Protected Example (if you want to protect existing routes) */}
                {/* <Route 
                  path="/notes" 
                  element={
                    <ProtectedRoute>
                      <Notes />
                    </ProtectedRoute>
                  } 
                /> */}
              </Routes>
            </Box>
          </Box>
        </Router>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;