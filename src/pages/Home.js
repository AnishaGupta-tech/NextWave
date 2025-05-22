// pages/Home.js
import React, { useState } from 'react';
import { Grid, Typography, Box } from '@mui/material';
import OpportunityCard from '../components/OpportunityCard';
import FilterBar from '../components/FilterBar';

const Home = () => {
  const [filter, setFilter] = useState('all');
  
  // Sample data - in real app this would come from an API
  const opportunities = [
    {
      id: 1,
      title: 'IGDTUW HackFest 2023',
      type: 'Hackathon',
      description: 'Annual 36-hour hackathon with ₹1,00,000 in prizes. Focus areas include AI, Blockchain, and IoT.',
      date: 'Nov 15-16, 2023',
      location: 'IGDTUW Campus',
      applyLink: 'https://example.com/hackfest',
      resources: [
        { title: 'Hackathon Prep Video', link: 'https://youtube.com/hackathon-prep' },
        { title: 'Past Winners Projects', link: 'https://example.com/past-winners' }
      ]
    },
    {
      id: 2,
      title: 'Google Summer Internship',
      type: 'Internship',
      description: 'Summer internship opportunity for 2nd and 3rd year students in software development roles.',
      date: 'Application Deadline: Dec 1, 2023',
      location: 'Remote/Bangalore',
      applyLink: 'https://careers.google.com',
      resources: [
        { title: 'Resume Guide', link: 'https://youtube.com/resume-guide' },
        { title: 'Interview Tips', link: 'https://youtube.com/google-interview' }
      ]
    }
  ];

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h3" component="h1" sx={{ mb: 3, fontWeight: 700 }}>
        Welcome to <span style={{ color: '#7c4dff' }}>NextWave</span>
      </Typography>
      <Typography variant="h5" sx={{ mb: 4, color: 'text.secondary' }}>
        Discover your next tech opportunity
      </Typography>
      
      <FilterBar filter={filter} setFilter={setFilter} />
      
      <Grid container spacing={3}>
        {opportunities
          .filter(opp => 
            filter === 'all' || (opp.type && opp.type.toLowerCase() === filter.toLowerCase())
          )
          .map(opportunity => (
            <Grid item xs={12} key={opportunity.id}>
              <OpportunityCard opportunity={opportunity} />
            </Grid>
          ))}
      </Grid>
    </Box>
  );
};

export default Home;
