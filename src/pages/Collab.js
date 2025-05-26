import React, { useState } from 'react';
import {
  Box, Typography, Grid, Card, CardContent, Avatar, Chip,
  Button, Container, TextField, Tabs, Tab, Divider, Badge
} from '@mui/material';
import { 
  GroupAdd, Code, EmojiEvents, Search, FilterList, 
  Send, CheckCircle, Pending, Cancel
} from '@mui/icons-material';
import { styled } from '@mui/material/styles';

const StatusChip = styled(Chip)(({ theme, status }) => ({
  fontWeight: 600,
  ...(status === 'open' && {
    backgroundColor: theme.palette.success.light,
    color: theme.palette.success.dark
  }),
  ...(status === 'pending' && {
    backgroundColor: theme.palette.warning.light,
    color: theme.palette.warning.dark
  }),
  ...(status === 'closed' && {
    backgroundColor: theme.palette.error.light,
    color: theme.palette.error.dark
  })
}));

const SkillTag = styled(Chip)(({ theme }) => ({
  marginRight: theme.spacing(1),
  marginBottom: theme.spacing(1),
  backgroundColor: theme.palette.primary.light,
  color: theme.palette.primary.dark,
  '&:hover': {
    transform: 'scale(1.05)'
  }
}));

const TeamCard = styled(Card)(({ theme }) => ({
  transition: 'all 0.3s ease',
  border: '2px solid transparent',
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: theme.shadows[8],
    borderColor: theme.palette.primary.main
  }
}));

const Collab = () => {
  const [tabValue, setTabValue] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');

  const teams = [
    {
      id: 1,
      name: 'Quantum Coders',
      hackathon: 'Hack the Future 2023',
      lookingFor: ['Frontend Dev', 'UI/UX Designer'],
      skills: ['React', 'Node.js', 'Figma', 'Blockchain'],
      members: [
        { name: 'Aashi', role: 'Backend Dev', avatar: '/avatars/aashi.jpg' },
        { name: 'Anisha', role: 'ML Engineer', avatar: '/avatars/anisha.jpg' }
      ],
      status: 'open',
      description: 'Building a decentralized voting system using blockchain technology. Looking for passionate developers to join our team!'
    },
    {
      id: 2,
      name: 'AI Visionaries',
      hackathon: 'AI Challenge 2023',
      lookingFor: ['Data Scientist', 'Python Dev'],
      skills: ['Python', 'TensorFlow', 'OpenCV', 'NLP'],
      members: [
        { name: 'Rahul', role: 'Team Lead', avatar: '/avatars/rahul.jpg' }
      ],
      status: 'open',
      description: 'Creating computer vision solutions for social good. Need teammates with ML experience.'
    },
    {
      id: 3,
      name: 'Eco Innovators',
      hackathon: 'Green Tech Hackathon',
      lookingFor: ['Full Stack Dev', 'Hardware Engineer'],
      skills: ['IoT', 'JavaScript', 'Arduino', 'Cloud'],
      members: [
        { name: 'Priya', role: 'Product Designer', avatar: '/avatars/priya.jpg' },
        { name: 'Vikram', role: 'Backend Dev', avatar: '/avatars/vikram.jpg' }
      ],
      status: 'pending',
      description: 'Developing smart recycling solutions. Join us to make an environmental impact!'
    }
  ];

  const filteredTeams = teams
    .filter(team =>
      team.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      team.hackathon.toLowerCase().includes(searchTerm.toLowerCase()) ||
      team.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()))
    )
    .filter(team => tabValue === 0 || team.status === (tabValue === 1 ? 'open' : 'pending'));

  const handleJoinRequest = (teamId) => {
    // Handle join request logic
    console.log(`Request to join team ${teamId}`);
  };

  return (
    <Container maxWidth="xl" sx={{ py: 6 }}>
      <Box sx={{ textAlign: 'center', mb: 6 }}>
        <Chip 
          icon={<GroupAdd />}
          label="COLLAB ZONE"
          sx={{
            px: 3,
            py: 1,
            mb: 3,
            fontWeight: 700,
            fontSize: '1rem',
            bgcolor: 'primary.main',
            color: 'white'
          }}
        />
        <Typography variant="h3" sx={{ 
          fontWeight: 800,
          mb: 2,
          background: 'linear-gradient(45deg, #7c4dff 30%, #00e5ff 90%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent'
        }}>
          Find Your Dream Hackathon Team
        </Typography>
        <Typography variant="h6" sx={{ 
          maxWidth: 700,
          mx: 'auto',
          color: 'text.secondary'
        }}>
          Connect with talented students, form teams, and build amazing projects together!
        </Typography>
      </Box>

      {/* Search and Filter Bar */}
      <Box sx={{ 
        display: 'flex', 
        alignItems: 'center', 
        mb: 4,
        gap: 2,
        flexWrap: 'wrap'
      }}>
        <TextField
          fullWidth
          variant="outlined"
          placeholder="Search teams, hackathons or skills..."
          InputProps={{
            startAdornment: <Search sx={{ color: 'action.active', mr: 1 }} />
          }}
          sx={{
            flexGrow: 1,
            maxWidth: 600,
            '& .MuiOutlinedInput-root': {
              borderRadius: 50,
              bgcolor: 'background.paper'
            }
          }}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        
        <Button 
          variant="outlined" 
          startIcon={<FilterList />}
          sx={{
            borderRadius: 50,
            px: 3,
            textTransform: 'none',
            fontWeight: 600
          }}
        >
          Filters
        </Button>
        
        <Button 
          variant="contained" 
          startIcon={<Code />}
          sx={{
            borderRadius: 50,
            px: 3,
            textTransform: 'none',
            fontWeight: 600
          }}
        >
          Create Team
        </Button>
      </Box>

      {/* Tabs */}
      <Tabs 
        value={tabValue} 
        onChange={(e, newValue) => setTabValue(newValue)}
        sx={{ 
          mb: 4,
          '& .MuiTabs-indicator': {
            height: 4,
            borderRadius: 2
          }
        }}
      >
        <Tab label="All Teams" icon={<GroupAdd />} iconPosition="start" />
        <Tab label="Open" icon={<CheckCircle />} iconPosition="start" />
        <Tab label="Pending" icon={<Pending />} iconPosition="start" />
      </Tabs>

      {/* Teams Grid */}
      <Grid container spacing={4}>
        {filteredTeams.map((team) => (
          <Grid item xs={12} sm={6} md={4} key={team.id}>
            <TeamCard>
              <CardContent sx={{ p: 0 }}>
                {/* Team Header */}
                <Box sx={{ 
                  p: 3,
                  bgcolor: 'background.default',
                  borderBottom: '1px solid',
                  borderColor: 'divider'
                }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                    <Typography variant="h6" sx={{ fontWeight: 700 }}>
                      {team.name}
                    </Typography>
                    <StatusChip 
                      size="small"
                      label={team.status.toUpperCase()}
                      status={team.status}
                    />
                  </Box>
                  <Typography variant="subtitle1" color="primary" sx={{ mb: 1 }}>
                    {team.hackathon}
                  </Typography>
                  <Typography variant="body2" sx={{ mb: 2 }}>
                    {team.description}
                  </Typography>
                </Box>

                {/* Team Members */}
                <Box sx={{ p: 3 }}>
                  <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 2 }}>
                    Team Members ({team.members.length}/4)
                  </Typography>
                  <Box sx={{ display: 'flex', mb: 3 }}>
                    {team.members.map((member, index) => (
                      <Avatar 
                        key={index}
                        src={member.avatar}
                        alt={member.name}
                        sx={{ 
                          width: 40, 
                          height: 40,
                          mr: -1,
                          border: '2px solid white',
                          '&:hover': {
                            transform: 'translateY(-5px)',
                            zIndex: 1
                          }
                        }}
                      />
                    ))}
                    {Array.from({ length: 4 - team.members.length }).map((_, index) => (
                      <Avatar 
                        key={`empty-${index}`}
                        sx={{ 
                          width: 40, 
                          height: 40,
                          mr: -1,
                          bgcolor: 'action.hover',
                          border: '2px solid white'
                        }}
                      >
                        ?
                      </Avatar>
                    ))}
                  </Box>

                  {/* Looking For */}
                  <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1 }}>
                    Looking For:
                  </Typography>
                  <Box sx={{ mb: 3 }}>
                    {team.lookingFor.map((role, index) => (
                      <Chip
                        key={index}
                        label={role}
                        size="small"
                        sx={{
                          mr: 1,
                          mb: 1,
                          bgcolor: 'secondary.light',
                          color: 'secondary.dark'
                        }}
                      />
                    ))}
                  </Box>

                  {/* Skills */}
                  <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1 }}>
                    Skills Needed:
                  </Typography>
                  <Box sx={{ mb: 3 }}>
                    {team.skills.map((skill, index) => (
                      <SkillTag
                        key={index}
                        label={skill}
                        size="small"
                      />
                    ))}
                  </Box>

                  {/* Action Button */}
                  <Button
                    fullWidth
                    variant="contained"
                    startIcon={<Send />}
                    disabled={team.status !== 'open'}
                    onClick={() => handleJoinRequest(team.id)}
                    sx={{
                      borderRadius: 2,
                      py: 1.5,
                      fontWeight: 600
                    }}
                  >
                    {team.status === 'open' ? 'Request to Join' : 'Applications Closed'}
                  </Button>
                </Box>
              </CardContent>
            </TeamCard>
          </Grid>
        ))}
      </Grid>

      {/* Empty State */}
      {filteredTeams.length === 0 && (
        <Box sx={{ 
          textAlign: 'center', 
          p: 8,
          bgcolor: 'background.paper',
          borderRadius: 3
        }}>
          <EmojiEvents sx={{ fontSize: 60, color: 'text.disabled', mb: 2 }} />
          <Typography variant="h5" sx={{ mb: 2 }}>
            No teams found matching your search
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
            Try adjusting your filters or create your own team to get started!
          </Typography>
          <Button 
            variant="contained" 
            size="large"
            startIcon={<Code />}
            sx={{
              px: 4,
              py: 1.5,
              borderRadius: 2,
              fontWeight: 600
            }}
          >
            Create New Team
          </Button>
        </Box>
      )}
    </Container>
  );
};

export default Collab;