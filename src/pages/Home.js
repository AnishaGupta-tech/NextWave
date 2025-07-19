import React from 'react';
import {
  Box, Typography, Grid, Card, Avatar, Chip, Container,
  Accordion, AccordionSummary, AccordionDetails, Button,
  Stack, Paper
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {
  Event as EventIcon,
  School as SchoolIcon,
  GroupWork as CollabIcon,
  LibraryBooks as ResourcesIcon,
  EmojiEvents as AchievementsIcon,
  Forum as CommunityIcon
} from '@mui/icons-material';
import AashiImage from './founders-imgs/Aashi.jpeg';
import AnishaImage from './founders-imgs/anisha.jpeg';

const features = [
  {
    title: 'Comprehensive Events Hub',
    description: 'Discover and register for college events, workshops, and hackathons in one place.',
    icon: <EventIcon fontSize="large" color="primary" />
  },
  {
    title: 'Smart Attendance Tracker',
    description: 'Track and analyze your class attendance in real-time with clean, smart visual stats.',
    icon: <SchoolIcon fontSize="large" color="primary" />
  },
  {
    title: 'Collaboration Platform',
    description: 'Build teams, find peers, and collaborate on college projects and hackathons easily.',
    icon: <CollabIcon fontSize="large" color="primary" />
  },
  {
    title: 'Learning Resources',
    description: 'Access curated notes, guides, and materials tailored to your syllabus and semester.',
    icon: <ResourcesIcon fontSize="large" color="primary" />
  },
  {
    title: 'Career Corner',
    description: 'Showcase skills, track growth, and explore inspiring journeys from your peer circle.',
    icon: <AchievementsIcon fontSize="large" color="primary" />
  },
  {
    title: 'Marketplace',
    description: 'Buy or list campus essentials like books, devices, and more within your community.',
    icon: <CommunityIcon fontSize="large" color="primary" />
  }
];

const faqs = [
  {
    question: "How is NextWave different from other student platforms?",
    answer: "NextWave is specifically tailored for B.Tech students with features like department-specific resources, official event integrations, and university-approved attendance tracking."
  },
  {
    question: "Is there a mobile app available?",
    answer: "Currently we offer a progressive web app (PWA) that works on all devices. Native iOS and Android apps are in development."
  },
  {
    question: "How do I join as a contributor?",
    answer: "We welcome student contributors! Join our GitHub organization or contact us through the Collab Zone to get involved."
  },
  {
    question: "Are there any costs involved?",
    answer: "NextWave is completely free for students. We're supported by the university and tech community partners."
  }
];

const founders = [
  {
    name: 'Aashi Jain',
    role: 'Founder',
    bio: 'Passionate about student success and tech innovation.',
    image: AashiImage,
    linkedin: 'https://www.linkedin.com/in/aashi-jain-671a3b321'
  },
  {
    name: 'Anisha Gupta',
    role: 'Founder',
    bio: 'Expert in software development and AI solutions.',
    image: AnishaImage,
    linkedin: 'https://www.linkedin.com/in/anisha-gupta-33582b311/'
  }
];

export default function Home() {
  return (
    <Box sx={{ pt: 1 }}>
      {/* Hero Section */}
      <Box sx={{
        py: 12,
        position: 'relative',
        overflow: 'hidden',
        '&:before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(135deg, rgba(124,77,255,0.08) 0%, rgba(0,229,255,0.08) 100%)',
          zIndex: -1
        }
      }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', maxWidth: 800, mx: 'auto' }}>
            <Chip
              label="STUDENT Official Partner"
              sx={{
                mb: 3,
                px: 2,
                py: 1,
                fontWeight: 600,
                bgcolor: 'primary.main',
                color: 'white'
              }}
            />
            <Typography variant="h2" sx={{
              fontWeight: 800,
              mb: 3,
              lineHeight: 1.2,
              background: 'linear-gradient(45deg, #7c4dff 30%, #00e5ff 90%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>
              The Complete Student Success Platform
            </Typography>
            <Typography variant="h5" sx={{
              maxWidth: 700,
              mx: 'auto',
              mb: 4,
              color: 'text.secondary',
              fontWeight: 400
            }}>
              NextWave integrates all essential academic tools with career-building resources in one unified platform designed specifically for college students.
            </Typography>
            <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Button variant="contained" size="large" sx={{ px: 4, py: 1.5, fontWeight: 600 }}>
                Join Us
              </Button>
              <Button variant="outlined" size="large" sx={{ px: 4, py: 1.5, fontWeight: 600 }}>
                Take a Tour
              </Button>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Features Section - New Design */}
      <Container maxWidth="lg" sx={{ py: { xs: 5, md: 8 } }}>
        <Typography variant="h4" align="center" gutterBottom fontWeight={700}>
          Your One-Stop College Companion
        </Typography>
        <Typography variant="subtitle1" align="center" paragraph sx={{ mb: 6 }}>
          From tracking attendance to discovering exciting events, we've got everything covered.
        </Typography>
        
        <Box sx={{
          display: 'grid',
          gridTemplateColumns: {
            xs: '1fr',
            sm: 'repeat(2, 1fr)',
            md: 'repeat(3, 1fr)'
          },
          gap: 3,
          alignItems: 'stretch'
        }}>
          {features.map((feature, index) => (
            <Paper
              key={index}
              elevation={3}
              sx={{
                p: 3,
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-5px)',
                  boxShadow: 6
                }
              }}
            >
              <Box sx={{
                width: 80,
                height: 80,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                mb: 2,
                borderRadius: '50%',
                bgcolor: 'primary.light',
                color: 'primary.main'
              }}>
                {feature.icon}
              </Box>
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                {feature.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {feature.description}
              </Typography>
            </Paper>
          ))}
        </Box>
      </Container>

      {/* Stats Section */}
      <Box sx={{
        py: 8,
        bgcolor: 'background.paper',
        borderTop: '1px solid',
        borderBottom: '1px solid',
        borderColor: 'divider'
      }}>
        <Container maxWidth="lg">
          <Grid container spacing={4} justifyContent="center">
            {[
              { stat: '100%', label: 'Satisfaction Rate' },
              { stat: '24/7', label: 'Support Availability' },
              { stat: 'All Devices', label: 'Platform Access' },
              { stat: 'Unlimited', label: 'Resources' },
            ].map((item, idx) => (
              <Grid item xs={6} sm={3} key={idx}>
                <Box sx={{ textAlign: 'center' }}>
                  <Typography variant="h4" sx={{ fontWeight: 800, color: 'primary.main', mb: 1 }}>
                    {item.stat}
                  </Typography>
                  <Typography variant="body1">
                    {item.label}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Founders Section */}
      <Container maxWidth="lg" sx={{ py: 10 }}>
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography variant="overline" sx={{ color: 'primary.main', fontWeight: 600, letterSpacing: 1 }}>
            OUR TEAM
          </Typography>
          <Typography variant="h3" sx={{ fontWeight: 700, mb: 2 }}>
            Meet The Visionaries
          </Typography>
        </Box>

        <Grid container spacing={4} justifyContent="center">
          {founders.map((founder, index) => (
            <Grid item xs={12} md={5} key={index}>
              <Card sx={{ display: 'flex', alignItems: 'center', p: 3, gap: 3, height: '100%' }}>
                <Avatar
                  src={founder.image}
                  alt={founder.name}
                  sx={{ width: 120, height: 120, borderRadius: 2 }}
                />
                <Box>
                  <Typography variant="h5" sx={{ fontWeight: 700 }}>
                    {founder.name}
                  </Typography>
                  <Typography variant="subtitle1" color="primary" sx={{ mb: 1 }}>
                    {founder.role}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                    {founder.bio}
                  </Typography>
                  <Button
                    href={founder.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="outlined"
                    size="small"
                  >
                    LinkedIn Profile
                  </Button>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* FAQ Section */}
      <Container maxWidth="md" sx={{ py: 8 }}>
        <Typography variant="h4" align="center" gutterBottom>
          Frequently Asked Questions
        </Typography>
        {faqs.map((faq, idx) => (
          <Accordion key={idx} sx={{ mb: 2 }}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography sx={{ fontWeight: 600 }}>{faq.question}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography color="text.secondary">
                {faq.answer}
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Container>
    </Box>
  );
}