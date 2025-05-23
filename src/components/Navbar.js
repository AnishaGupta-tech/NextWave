import React from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Box, Container } from '@mui/material';
import { Code, Event, People, School, MenuBook, Home } from '@mui/icons-material';

const Navbar = ({ darkMode, setDarkMode }) => {
  const navItems = [
    { name: 'Home', icon: <Home sx={{ fontSize: 20 }} /> },
    { name: 'Events', icon: <Event sx={{ fontSize: 20 }} /> },
    { name: 'Attendance', icon: <School sx={{ fontSize: 20 }} /> },
    { name: 'Collab Zone', icon: <People sx={{ fontSize: 20 }} /> },
    { name: 'Resources', icon: <MenuBook sx={{ fontSize: 20 }} /> }
  ];

  return (
    <AppBar position="sticky" elevation={0} sx={{ 
      bgcolor: 'background.paper',
      borderBottom: '1px solid',
      borderColor: 'divider',
      backdropFilter: 'blur(8px)',
      zIndex: 1200
    }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
          <Box display="flex" alignItems="center">
            <Code sx={{ 
              fontSize: 32, 
              color: 'primary.main',
              mr: 1 
            }}/>
            <Typography variant="h5" sx={{ 
              fontWeight: 800,
              background: 'linear-gradient(45deg, #7c4dff 30%, #00e5ff 90%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              letterSpacing: '-0.5px'
            }}>
              NextWave
            </Typography>
          </Box>

          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 0.5 }}>
            {navItems.map((item) => (
              <Button
                key={item.name}
                startIcon={item.icon}
                sx={{
                  color: 'text.primary',
                  fontWeight: 500,
                  textTransform: 'none',
                  fontSize: '0.9rem',
                  px: 2,
                  py: 1,
                  borderRadius: 2,
                  '&:hover': {
                    bgcolor: 'action.hover'
                  }
                }}
              >
                {item.name}
              </Button>
            ))}
          </Box>

          <Box display="flex" alignItems="center" gap={1}>
            <Button 
              variant="contained" 
              size="small"
              sx={{
                fontWeight: 600,
                textTransform: 'none',
                px: 2.5
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