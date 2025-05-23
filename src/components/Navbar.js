// components/Navbar.js
import React from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Switch, Box } from '@mui/material';
import { Brightness4, Brightness7 } from '@mui/icons-material';

const Navbar = ({ darkMode, setDarkMode, activeTab, setActiveTab }) => {
  return (
    <AppBar position="static" elevation={0} sx={{ bgcolor: 'background.paper' }}>
      <Toolbar>
        <Typography variant="h4" component="div" sx={{ flexGrow: 1, fontWeight: 700 }}>
          Next<span style={{ color: '#7c4dff' }}>Wave</span>
        </Typography>
        
        <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 1 }}>
          {['Home', 'Events', 'Attendance Tracker', 'Collab Zone', 'Events', 'Resources'].map((tab) => (
            <Button
              key={tab}
              onClick={() => setActiveTab(tab.toLowerCase())}
              sx={{
                color: activeTab === tab.toLowerCase() ? 'primary.main' : 'text.primary',
                fontWeight: activeTab === tab.toLowerCase() ? 600 : 400,
              }}
            >
              {tab}
            </Button>
          ))}
        </Box>
        
        <IconButton
          onClick={() => setDarkMode(!darkMode)}
          color="inherit"
          sx={{ ml: 2 }}
        >
          {darkMode ? <Brightness7 /> : <Brightness4 />}
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;