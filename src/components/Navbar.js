import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, Box, Button } from '@mui/material';
import { Brightness4, Brightness7 } from '@mui/icons-material';
import { NavLink } from 'react-router-dom';

const Navbar = ({ darkMode, setDarkMode }) => {
  const tabs = ['Home', 'Events', 'Attendance Tracker', 'Collab Zone', 'Resources', 'Marketplace'];

  return (
    <AppBar position="static" elevation={0} sx={{ bgcolor: 'background.paper' }}>
      <Toolbar>
        <Typography variant="h4" sx={{ flexGrow: 1, fontWeight: 700 }}>
          Next<span style={{ color: '#7c4dff' }}>Wave</span>
        </Typography>

        <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 1 }}>
          {tabs.map((tab) => {
            const path = '/' + tab.toLowerCase().replace(/ /g, '-');
            return (
              <Button
                key={tab}
                component={NavLink}
                to={path === '/home' ? '/' : path}
                sx={{
                  color: 'text.primary',
                  fontWeight: ({ isActive }) => (isActive ? 600 : 400),
                  '&.active': {
                    color: '#7c4dff',
                    fontWeight: 600,
                  },
                }}
              >
                {tab}
              </Button>
            );
          })}
        </Box>

        <IconButton onClick={() => setDarkMode(!darkMode)} color="inherit" sx={{ ml: 2 }}>
          {darkMode ? <Brightness7 /> : <Brightness4 />}
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
