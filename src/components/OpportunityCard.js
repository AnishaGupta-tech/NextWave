// components/OpportunityCard.js
import React from 'react';
import { Card, CardContent, Typography, Chip, Button, Box, Divider } from '@mui/material';
import { CalendarToday, LocationOn, Link as LinkIcon } from '@mui/icons-material';

const OpportunityCard = ({ opportunity }) => {
  return (
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
        
        <Divider sx={{ my: 2, bgcolor: 'rgba(255, 255, 255, 0.12)' }} />
        
        <Box>
          <Typography variant="subtitle2" sx={{ mb: 1, fontWeight: 500 }}>
            Resources:
          </Typography>
          <Box display="flex" flexWrap="wrap" gap={1}>
            {opportunity.resources.map((resource, index) => (
              <Button
                key={index}
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
        </Box>
        
        <Box sx={{ mt: 2, display: 'flex', justifyContent: 'flex-end' }}>
          <Button
            variant="contained"
            href={opportunity.applyLink}
            target="_blank"
            rel="noopener noreferrer"
            sx={{ fontWeight: 500 }}
          >
            Apply Now
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default OpportunityCard;