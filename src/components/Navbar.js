import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, Box, Button, Avatar, Menu, MenuItem } from '@mui/material';
import { Brightness4, Brightness7 } from '@mui/icons-material';
import { NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext';

const Navbar = ({ darkMode, setDarkMode }) => {
  const tabs = ['Home', 'Events', 'Attendance Tracker', 'Career Corner', 'Resources', 'Marketplace'];
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    logout();
    handleMenuClose();
  };

  return (
    <AppBar position="static" elevation={0} sx={{ bgcolor: 'background.paper' }}>
      <Toolbar>
        <Typography variant="h4" sx={{ flexGrow: 1, fontWeight: 700 }}>
          Next<span style={{ color: '#7c4dff' }}>Wave</span>
        </Typography>

        <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 1, alignItems: 'center' }}>
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

          {user ? (
            <>
              <IconButton onClick={handleMenuOpen} sx={{ ml: 2 }}>
                <Avatar sx={{ bgcolor: '#7c4dff' }}>
                  {user.email.charAt(0).toUpperCase()}
                </Avatar>
              </IconButton>
              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleMenuClose}
              >
                <MenuItem onClick={() => { navigate('/profile'); handleMenuClose(); }}>
                  Profile
                </MenuItem>
                <MenuItem onClick={handleLogout}>Logout</MenuItem>
              </Menu>
            </>
          ) : (
            <>
              <Button
                component={NavLink}
                to="/login"
                variant="outlined"
                sx={{
                  ml: 2,
                  fontWeight: 600,
                  textTransform: 'none',
                  borderRadius: '20px',
                  color: '#7c4dff',
                  borderColor: '#7c4dff',
                  '&:hover': {
                    borderColor: '#651fff',
                  },
                }}
              >
                Login
              </Button>
              <Button
                component={NavLink}
                to="/register"
                variant="contained"
                color="secondary"
                sx={{
                  ml: 2,
                  fontWeight: 700,
                  textTransform: 'none',
                  borderRadius: '20px',
                  boxShadow: 2,
                  bgcolor: '#7c4dff',
                  color: '#fff',
                  '&:hover': {
                    bgcolor: '#651fff',
                  },
                }}
              >
                Register
              </Button>
            </>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;