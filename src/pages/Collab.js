import React, { useState } from 'react';
import {
  Box,
  Typography,
  Container,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
  Tabs,
  Tab,
  TextField,
  InputAdornment,
  Divider,
  Chip,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Link
} from '@mui/material';
import {
  Search as SearchIcon,
  ExpandMore as ExpandMoreIcon,
  PlayCircleOutline as PlayIcon,
  Description as ResumeIcon,
  Work as InterviewIcon,
  School as EducationIcon,
  Code as CodingIcon
} from '@mui/icons-material';

const Collab = () => {
  const [tabValue, setTabValue] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  // Sample data for different sections
  const resumeTemplates = [
    {
      title: "Technical Resume Template",
      description: "Perfect for CS/IT students with projects and skills sections",
      type: "PDF",
      link: "#"
    },
    {
      title: "Fresh Graduate Template",
      description: "Clean layout for recent graduates with education focus",
      type: "DOCX",
      link: "#"
    },
    {
      title: "Internship Resume",
      description: "Optimized for internship applications with coursework section",
      type: "PDF",
      link: "#"
    }
  ];

  const interviewPrep = [
    {
      title: "Top 50 CS Interview Questions",
      description: "Most frequently asked questions with model answers",
      type: "PDF",
      link: "#"
    },
    {
      title: "Behavioral Interview Guide",
      description: "How to answer 'Tell me about yourself' and other behavioral questions",
      type: "PDF",
      link: "#"
    },
    {
      title: "System Design Cheatsheet",
      description: "Approaching system design interviews for beginners",
      type: "PDF",
      link: "#"
    }
  ];

  const youtubeVideos = [
    {
      title: "How to Build a Winning Resume",
      channel: "Tech Careers",
      url: "https://www.youtube.com/embed/xyz123",
      thumbnail: "https://i.ytimg.com/vi/xyz123/hqdefault.jpg"
    },
    {
      title: "Cracking the Coding Interview",
      channel: "CS Dojo",
      url: "https://www.youtube.com/embed/abc456",
      thumbnail: "https://i.ytimg.com/vi/abc456/hqdefault.jpg"
    },
    {
      title: "Tech Interview Mindset",
      channel: "InterviewReady",
      url: "https://www.youtube.com/embed/def789",
      thumbnail: "https://i.ytimg.com/vi/def789/hqdefault.jpg"
    }
  ];

  const codingResources = [
    {
      title: "Leetcode Patterns",
      description: "Most common problem patterns with solutions",
      type: "Cheatsheet",
      link: "#"
    },
    {
      title: "Big-O Complexity Chart",
      description: "Visual guide to algorithm complexity",
      type: "Poster",
      link: "#"
    },
    {
      title: "DSA Roadmap",
      description: "6-month plan to master Data Structures",
      type: "PDF",
      link: "#"
    }
  ];

  const faqs = [
    {
      question: "How early should I start preparing for placements?",
      answer: "Ideally start 6-8 months before your placement season begins. Focus on DSA for first 3 months, then move to projects and interview practice."
    },
    {
      question: "What percentage is required for good placements?",
      answer: "While most companies require 60-70% aggregate, focus more on your technical skills. Many product companies prioritize skills over percentages."
    }
  ];

  // Filter function for search
  const filterResources = (resources) => {
    return resources.filter(resource =>
      resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      resource.description.toLowerCase().includes(searchQuery.toLowerCase())
    );
  };

  return (
    <Box sx={{ py: 4 }}>
      <Container maxWidth="lg">
        {/* Header Section */}
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography variant="h3" sx={{ fontWeight: 700, mb: 2 }}>
            Career Corner
          </Typography>
          <Typography variant="h6" color="text.secondary">
            Your one-stop destination for placement preparation and career growth
          </Typography>
        </Box>

        {/* Search Bar */}
        <Box sx={{ mb: 4 }}>
          <TextField
            fullWidth
            variant="outlined"
            placeholder="Search resources..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
        </Box>

        {/* Tabs Navigation */}
        <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 4 }}>
          <Tabs
            value={tabValue}
            onChange={handleTabChange}
            variant="scrollable"
            scrollButtons="auto"
            aria-label="career resources tabs"
          >
            <Tab label="Resume Templates" icon={<ResumeIcon />} iconPosition="start" />
            <Tab label="Interview Prep" icon={<InterviewIcon />} iconPosition="start" />
            <Tab label="Learning Videos" icon={<PlayIcon />} iconPosition="start" />
            <Tab label="Coding Resources" icon={<CodingIcon />} iconPosition="start" />
          </Tabs>
        </Box>

        {/* Tab Content */}
        <Box sx={{ mb: 6 }}>
          {tabValue === 0 && (
            <Grid container spacing={4}>
              {filterResources(resumeTemplates).map((item, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                  <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                    <CardContent sx={{ flexGrow: 1 }}>
                      <Chip label={item.type} size="small" sx={{ mb: 2 }} />
                      <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                        {item.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                        {item.description}
                      </Typography>
                    </CardContent>
                    <Box sx={{ p: 2 }}>
                      <Button
                        variant="outlined"
                        fullWidth
                        component="a"
                        href={item.link}
                        target="_blank"
                        rel="noopener"
                      >
                        Download
                      </Button>
                    </Box>
                  </Card>
                </Grid>
              ))}
            </Grid>
          )}

          {tabValue === 1 && (
            <Grid container spacing={4}>
              {filterResources(interviewPrep).map((item, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                  <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                    <CardContent sx={{ flexGrow: 1 }}>
                      <Chip label={item.type} size="small" sx={{ mb: 2 }} />
                      <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                        {item.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                        {item.description}
                      </Typography>
                    </CardContent>
                    <Box sx={{ p: 2 }}>
                      <Button
                        variant="outlined"
                        fullWidth
                        component="a"
                        href={item.link}
                        target="_blank"
                        rel="noopener"
                      >
                        Download
                      </Button>
                    </Box>
                  </Card>
                </Grid>
              ))}
            </Grid>
          )}

          {tabValue === 2 && (
            <Grid container spacing={4}>
              {youtubeVideos.map((video, index) => (
                <Grid item xs={12} md={6} key={index}>
                  <Card>
                    <CardMedia
                      component="iframe"
                      height="315"
                      src={video.url}
                      title={video.title}
                      allowFullScreen
                      sx={{ border: 'none' }}
                    />
                    <CardContent>
                      <Typography variant="h6" sx={{ fontWeight: 600 }}>
                        {video.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {video.channel}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          )}

          {tabValue === 3 && (
            <Grid container spacing={4}>
              {filterResources(codingResources).map((item, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                  <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                    <CardContent sx={{ flexGrow: 1 }}>
                      <Chip label={item.type} size="small" sx={{ mb: 2 }} />
                      <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                        {item.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                        {item.description}
                      </Typography>
                    </CardContent>
                    <Box sx={{ p: 2 }}>
                      <Button
                        variant="outlined"
                        fullWidth
                        component="a"
                        href={item.link}
                        target="_blank"
                        rel="noopener"
                      >
                        Download
                      </Button>
                    </Box>
                  </Card>
                </Grid>
              ))}
            </Grid>
          )}
        </Box>

        {/* Additional Features Section */}
        <Box sx={{ mb: 6 }}>
          <Typography variant="h5" sx={{ fontWeight: 600, mb: 3 }}>
            Placement Preparation Roadmap
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Card sx={{ p: 3, height: '100%' }}>
                <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
                  📅 6-Month Plan
                </Typography>
                <Box component="ul" sx={{ pl: 2 }}>
                  <li><Typography>Months 1-2: Core Data Structures</Typography></li>
                  <li><Typography>Month 3: Algorithms & Problem Solving</Typography></li>
                  <li><Typography>Month 4: System Design Basics</Typography></li>
                  <li><Typography>Month 5: Mock Interviews</Typography></li>
                  <li><Typography>Month 6: Resume Building & Applications</Typography></li>
                </Box>
              </Card>
            </Grid>
            <Grid item xs={12} md={6}>
              <Card sx={{ p: 3, height: '100%' }}>
                <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
                  🎯 Daily Targets
                </Typography>
                <Box component="ul" sx={{ pl: 2 }}>
                  <li><Typography>3-5 Coding Problems (Leetcode/Codeforces)</Typography></li>
                  <li><Typography>1 Hour CS Fundamentals Review</Typography></li>
                  <li><Typography>30 Minutes Behavioral Prep</Typography></li>
                  <li><Typography>Weekly Mock Interviews</Typography></li>
                </Box>
              </Card>
            </Grid>
          </Grid>
        </Box>

        {/* Company-wise Preparation */}
        <Box sx={{ mb: 6 }}>
          <Typography variant="h5" sx={{ fontWeight: 600, mb: 3 }}>
            Company Specific Preparation
          </Typography>
          <Grid container spacing={2}>
            {['Google', 'Microsoft', 'Amazon', 'Adobe', 'Goldman Sachs'].map((company, index) => (
              <Grid item xs={6} sm={4} md={2} key={index}>
                <Card sx={{ p: 2, textAlign: 'center' }}>
                  <Typography variant="subtitle1" sx={{ fontWeight: 500 }}>
                    {company}
                  </Typography>
                  <Button 
                    size="small" 
                    sx={{ mt: 1 }}
                    component="a"
                    href="#"
                  >
                    Resources
                  </Button>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* FAQ Section */}
        <Box sx={{ mb: 4 }}>
          <Typography variant="h5" sx={{ fontWeight: 600, mb: 3 }}>
            Frequently Asked Questions
          </Typography>
          {faqs.map((faq, index) => (
            <Accordion key={index} sx={{ mb: 1 }}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography sx={{ fontWeight: 500 }}>{faq.question}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>{faq.answer}</Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>

        {/* Call to Action */}
        <Box sx={{ textAlign: 'center', p: 4, bgcolor: 'background.paper', borderRadius: 2 }}>
          <Typography variant="h5" sx={{ fontWeight: 600, mb: 2 }}>
            Need Personalized Career Guidance?
          </Typography>
          <Typography variant="body1" sx={{ mb: 3, maxWidth: 600, mx: 'auto' }}>
            Book a 1:1 session with our placement coordinators or alumni working at top tech companies.
          </Typography>
          <Button variant="contained" size="large">
            Schedule Consultation
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Collab;