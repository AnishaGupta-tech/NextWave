import React, { useState } from 'react';
import { 
  Box, Card, CardContent, Typography, Chip, Button, Divider, TextField, 
  Dialog, DialogTitle, DialogContent, DialogActions, IconButton
} from '@mui/material';
import { CalendarToday, LocationOn, Link as LinkIcon, Group, Add } from '@mui/icons-material';
import FilterBar from '../components/FilterBar';

// ---- CollabZone Dialog ----
const CollabZone = ({
  open, onClose, eventTitle,
  teams, setTeams
}) => {
  const [username, setUsername] = useState('');
  const [newTeamName, setNewTeamName] = useState('');

  const maxTeamSize = 4;

  const handleCreateTeam = () => {
    if (!username.trim() || !newTeamName.trim()) return;
    if (teams.some(team => team.name === newTeamName.trim())) {
      alert('Team name already exists!');
      return;
    }
    const newTeam = { name: newTeamName.trim(), members: [username.trim()] };
    setTeams([...teams, newTeam]);
    setNewTeamName('');
  };

  const handleJoinTeam = (teamName) => {
    if (!username.trim()) return;
    setTeams(teams.map(team =>
      team.name === teamName && !team.members.includes(username.trim())
        ? { ...team, members: [...team.members, username.trim()] }
        : team
    ));
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle>
        <Group sx={{ verticalAlign: 'middle', mr: 1 }} />
        Collab Zone – {eventTitle}
      </DialogTitle>
      <DialogContent>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
          Enter your name and join or create a team!
        </Typography>
        <TextField
          fullWidth
          margin="dense"
          label="Your Name"
          value={username}
          onChange={e => setUsername(e.target.value)}
          InputProps={{ sx: { background: '#2d2d2d', borderRadius: 1 } }}
        />
        <Divider sx={{ my: 2 }} />
        <Typography variant="subtitle1" sx={{ mt: 1, mb: 1 }}>Teams open for members:</Typography>
        {teams.length === 0 && (
          <Typography variant="body2" color="text.secondary">No teams yet.</Typography>
        )}
        {teams.map((team, idx) => {
          const isOpen = team.members.length < maxTeamSize;
          const alreadyJoined = username && team.members.includes(username);
          return (
            <Box key={idx} sx={{ mb: 2, p: 1, background: '#282828', borderRadius: 1 }}>
              <Typography sx={{ fontWeight: 600 }}>{team.name}</Typography>
              <Typography variant="body2" color="text.secondary">
                Members ({team.members.length}/{maxTeamSize}): {team.members.join(', ')}
              </Typography>
              <Button
                onClick={() => handleJoinTeam(team.name)}
                disabled={!isOpen || alreadyJoined || !username}
                size="small"
                variant="outlined"
                sx={{ mt: 1, textTransform: 'none' }}
              >
                {alreadyJoined ? "Joined" : isOpen ? "Join" : "Full"}
              </Button>
            </Box>
          );
        })}
        <Divider sx={{ my: 2 }} />
        <Box sx={{ display: 'flex', gap: 1, mt: 2 }}>
          <TextField
            size="small"
            fullWidth
            label="Create New Team"
            value={newTeamName}
            onChange={e => setNewTeamName(e.target.value)}
            InputProps={{ sx: { background: '#222', borderRadius: 1 } }}
          />
          <IconButton color="primary" onClick={handleCreateTeam} disabled={!username || !newTeamName}>
            <Add />
          </IconButton>
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Close</Button>
      </DialogActions>
    </Dialog>
  );
};

// ---- Know More Dialog ----
const KnowMoreDialog = ({ open, onClose, opportunity }) => (
  <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
    <DialogTitle>{opportunity.title} – More Details</DialogTitle>
    <DialogContent>
      <Typography sx={{ mb: 2 }}>{opportunity.description}</Typography>
      <Typography variant="subtitle2"><CalendarToday fontSize="small" sx={{ mr: 1 }} />Date:</Typography>
      <Typography sx={{ mb: 1 }}>{opportunity.date}</Typography>
      <Typography variant="subtitle2"><LocationOn fontSize="small" sx={{ mr: 1 }} />Location:</Typography>
      <Typography sx={{ mb: 1 }}>{opportunity.location}</Typography>
      <Divider sx={{ my: 2 }} />
      <Typography variant="subtitle2" sx={{ mb: 1, fontWeight: 500 }}>
        Resources:
      </Typography>
      <Box display="flex" flexWrap="wrap" gap={1} sx={{ mb: 2 }}>
        {opportunity.resources.map((resource, idx) => (
          <Button
            key={idx}
            variant="outlined"
            size="small"
            startIcon={<LinkIcon />}
            href={resource.link}
            target="_blank"
            rel="noopener noreferrer"
            sx={{ textTransform: 'none' }}
          >
            {resource.title}
          </Button>
        ))}
      </Box>
      <Button
        variant="contained"
        color="success"
        href={opportunity.applyLink}
        target="_blank"
        rel="noopener noreferrer"
        sx={{ fontWeight: 500 }}
      >
        Registration Link
      </Button>
    </DialogContent>
    <DialogActions>
      <Button onClick={onClose}>Close</Button>
    </DialogActions>
  </Dialog>
);

// ---- OpportunityCard (with modals) ----
const OpportunityCard = ({
  opportunity,
  collabTeams, setCollabTeams,
  openKnowMore, setOpenKnowMore,
  openCollab, setOpenCollab
}) => (
  <Card sx={{ mb: 3, background: 'linear-gradient(145deg, #1e1e1e, #2a2a2a)' }}>
    <CardContent>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Typography variant="h5" component="h2" sx={{ fontWeight: 600 }}>
          {opportunity.title}
        </Typography>
        <Chip 
          label={opportunity.type}
          color={opportunity.type === 'Hackathon' ? 'primary' :
                 opportunity.type === 'Internship' ? 'secondary' : 'default'}
          sx={{ fontWeight: 500 }}
        />
      </Box>
      <Typography variant="body2" color="text.secondary" sx={{ mt: 1, mb: 2 }}>
        {opportunity.description}
      </Typography>
      <Box display="flex" gap={2} sx={{ mb: 2 }}>
        <Box display="flex" alignItems="center">
          <CalendarToday fontSize="small" sx={{ mr: 1 }} />
          <Typography variant="body2">{opportunity.date}</Typography>
        </Box>
        {opportunity.location && (
          <Box display="flex" alignItems="center">
            <LocationOn fontSize="small" sx={{ mr: 1 }} />
            <Typography variant="body2">{opportunity.location}</Typography>
          </Box>
        )}
      </Box>
      <Divider sx={{ my: 2, bgcolor: 'rgba(255,255,255,0.12)' }} />
      <Box sx={{ display: 'flex', gap: 2, justifyContent: 'flex-end' }}>
        <Button variant="outlined" onClick={setOpenKnowMore} sx={{ textTransform: 'none' }}>
          Know More
        </Button>
        {(opportunity.type === 'Hackathon' || opportunity.type === 'Ideathon') && (
          <Button variant="contained" color="primary" onClick={setOpenCollab} sx={{ fontWeight: 500 }}>
            Collab
          </Button>
        )}
      </Box>
      <KnowMoreDialog
        open={openKnowMore.open}
        onClose={openKnowMore.onClose}
        opportunity={opportunity}
      />
      {(opportunity.type === 'Hackathon' || opportunity.type === 'Ideathon') && (
        <CollabZone
          open={openCollab.open}
          onClose={openCollab.onClose}
          eventTitle={opportunity.title}
          teams={collabTeams[opportunity.id] || []}
          setTeams={teams => setCollabTeams({ ...collabTeams, [opportunity.id]: teams })}
        />
      )}
    </CardContent>
  </Card>
);

// ---- Main EventsPage ----
const EventsPage = () => {
  const [filter, setFilter] = useState('all');

  // One teams object per event by id
  const [collabTeams, setCollabTeams] = useState({});

  // Control which dialogs are open per event by id
  const [knowMoreOpen, setKnowMoreOpen] = useState({});
  const [collabOpen, setCollabOpen] = useState({});

  const handleOpenKnowMore = eventId => setKnowMoreOpen({ ...knowMoreOpen, [eventId]: true });
  const handleCloseKnowMore = eventId => setKnowMoreOpen({ ...knowMoreOpen, [eventId]: false });
  const handleOpenCollab = eventId => setCollabOpen({ ...collabOpen, [eventId]: true });
  const handleCloseCollab = eventId => setCollabOpen({ ...collabOpen, [eventId]: false });

  const opportunities = [
    {
      id: 'hackathon2023',
      title: 'Tech Hackathon 2023',
      type: 'Hackathon',
      description: 'Annual technology hackathon with great prizes',
      date: 'Oct 15-17, 2023',
      location: 'Virtual',
      resources: [
        { title: 'Official Website', link: 'https://example.com' },
        { title: 'Rules PDF', link: 'https://example.com/rules' }
      ],
      applyLink: 'https://example.com/apply'
    },
    {
      id: 'internship2023',
      title: 'Summer Internship Program',
      type: 'Internship',
      description: '3-month intensive internship program for students',
      date: 'June 1 - Aug 31, 2023',
      location: 'On-site',
      resources: [
        { title: 'Application Guide', link: 'https://example.com/guide' }
      ],
      applyLink: 'https://example.com/internship-apply'
    },
    {
      id: 'ideathon2023',
      title: 'Innovation Ideathon',
      type: 'Ideathon',
      description: 'Pitch your innovative ideas to industry leaders',
      date: 'Nov 5-6, 2023',
      location: 'Hybrid',
      resources: [
        { title: 'Event Details', link: 'https://example.com/ideathon' }
      ],
      applyLink: 'https://example.com/ideathon-apply'
    }
  ];

  const filteredOpportunities = filter === 'all' 
    ? opportunities 
    : opportunities.filter(opp => opp.type.toLowerCase() === filter);

  return (
    <Box sx={{ p: 3 }}>
      <FilterBar filter={filter} setFilter={setFilter} />
      {filteredOpportunities.map(opportunity => (
        <OpportunityCard
          key={opportunity.id}
          opportunity={opportunity}
          collabTeams={collabTeams}
          setCollabTeams={setCollabTeams}
          openKnowMore={{
            open: knowMoreOpen[opportunity.id] || false,
            onClose: () => handleCloseKnowMore(opportunity.id)
          }}
          setOpenKnowMore={() => handleOpenKnowMore(opportunity.id)}
          openCollab={{
            open: collabOpen[opportunity.id] || false,
            onClose: () => handleCloseCollab(opportunity.id)
          }}
          setOpenCollab={() => handleOpenCollab(opportunity.id)}
        />
      ))}
    </Box>
  );
};

export default EventsPage;
