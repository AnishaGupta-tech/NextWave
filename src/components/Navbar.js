import React from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Switch, Box } from '@mui/material';
import { Brightness4, Brightness7 } from '@mui/icons-material';

const Navbar = ({ darkMode, setDarkMode }) => {
  const navItems = [
    { name: 'Home', icon: <Home sx={{ fontSize: 20 }} /> },
    { name: 'Events', icon: <Event sx={{ fontSize: 20 }} /> },
    { name: 'Attendance', icon: <School sx={{ fontSize: 20 }} /> },
    { name: 'Collab Zone', icon: <People sx={{ fontSize: 20 }} /> },
    { name: 'Resources', icon: <MenuBook sx={{ fontSize: 20 }} /> }
  ];

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
              Join Now
            </Button>
            <IconButton 
              onClick={() => setDarkMode(!darkMode)} 
              sx={{ color: 'text.secondary' }}
            >
              {darkMode ? '☀️' : '🌙'}
            </IconButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;