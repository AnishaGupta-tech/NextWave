import React from 'react';
import { 
  Box, 
  Typography, 
  Avatar, 
  Paper, 
  Button, 
  List, 
  ListItem, 
  ListItemText,
  Divider
} from '@mui/material';
import { Email, CalendarToday, Edit } from '@mui/icons-material';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const ProfilePage = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  // Format the account creation date
  const formatDate = (dateString) => {
    if (!dateString) return 'Unknown';
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const handleEditProfile = () => {
    navigate('/profile/edit'); // You can create an EditProfilePage later
  };

  return (
    <Box sx={{ maxWidth: 800, mx: 'auto', my: 4 }}>
      <Typography variant="h4" gutterBottom sx={{ fontWeight: 700 }}>
        My Profile
      </Typography>
      
      <Paper elevation={3} sx={{ p: 4, mb: 4 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
          <Avatar 
            sx={{ 
              width: 100, 
              height: 100, 
              mr: 3, 
              bgcolor: '#7c4dff',
              fontSize: '2.5rem'
            }}
          >
            {user?.email?.charAt(0).toUpperCase()}
          </Avatar>
          
          <Box>
            <Typography variant="h5" sx={{ fontWeight: 600 }}>
              {user?.email || 'User'}
            </Typography>
            <Button
              variant="outlined"
              startIcon={<Edit />}
              onClick={handleEditProfile}
              sx={{ mt: 1, color: '#7c4dff', borderColor: '#7c4dff' }}
            >
              Edit Profile
            </Button>
          </Box>
        </Box>

        <Divider sx={{ my: 2 }} />

        <List>
          <ListItem>
            <Email color="primary" sx={{ mr: 2 }} />
            <ListItemText 
              primary="Email" 
              secondary={user?.email || 'Not provided'} 
            />
          </ListItem>
          
          <ListItem>
            <CalendarToday color="primary" sx={{ mr: 2 }} />
            <ListItemText 
              primary="Member Since" 
              secondary={formatDate(user?.createdAt)} 
            />
          </ListItem>
        </List>

        <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 3 }}>
          <Button
            variant="contained"
            onClick={logout}
            sx={{
              bgcolor: '#ff4d4d',
              color: 'white',
              '&:hover': {
                bgcolor: '#ff3333',
              }
            }}
          >
            Logout
          </Button>
        </Box>
      </Paper>

      {/* Additional Sections (can be expanded later) */}
      <Typography variant="h5" gutterBottom sx={{ mt: 4, fontWeight: 600 }}>
        My Activity
      </Typography>
      <Paper elevation={3} sx={{ p: 3 }}>
        <Typography color="textSecondary">
          Your event participation, marketplace activity, and other metrics will appear here.
        </Typography>
      </Paper>
    </Box>
  );
};

export default ProfilePage;