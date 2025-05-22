import React from 'react';
import { ToggleButton, ToggleButtonGroup, Typography, Box } from '@mui/material';

const FilterBar = ({ filter, setFilter }) => {
  return (
    <Box sx={{ mb: 3 }}>
      <Typography variant="subtitle1" sx={{ mb: 1 }}>
        Filter by:
      </Typography>
      <ToggleButtonGroup
        value={filter}
        exclusive
        onChange={(e, newFilter) => setFilter(newFilter)}
        aria-label="opportunity filter"
        sx={{ mb: 3 }}
      >
        <ToggleButton value="all" aria-label="all">
          All
        </ToggleButton>
        <ToggleButton value="hackathon" aria-label="hackathon">
          Hackathons
        </ToggleButton>
        <ToggleButton value="internship" aria-label="internship">
          Internships
        </ToggleButton>
        <ToggleButton value="ideathon" aria-label="ideathon">
          Ideathons
        </ToggleButton>
      </ToggleButtonGroup>
    </Box>
  );
};

export default FilterBar;