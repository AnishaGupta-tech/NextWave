import React, { useState } from 'react';
import { Box } from '@mui/material';
import FilterBar from '../components/FilterBar';
import OpportunityCard from '../components/OpportunityCard';

const EventsPage = () => {
  const [filter, setFilter] = useState('all');
  
  const opportunities = [
    {
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
      {filteredOpportunities.map((opportunity, index) => (
        <OpportunityCard key={index} opportunity={opportunity} />
      ))}
    </Box>
  );
};

export default EventsPage;