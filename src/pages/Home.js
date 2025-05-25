import React from 'react';
import { 
  Box, Typography, Grid, Card, CardContent, Avatar, Chip, Container, 
  Accordion, AccordionSummary, AccordionDetails, Divider, Button 
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
    description: 'Stay informed about college events, fests, workshops, and webinars.',
    icon: <EventIcon fontSize="large" color="primary" />
  },
  {
    title: 'Smart Attendance Tracker',
    description: 'Effortlessly mark and manage attendance with QR code-based check-ins.',
    icon: <SchoolIcon fontSize="large" color="primary" />
  },
  {
    title: 'Collaboration Platform',
    description: 'Connect with peers for projects, study groups, and club activities.',
    icon: <CollabIcon fontSize="large" color="primary" />
  },
  {
    title: 'Learning Resources',
    description: 'Access curated study materials, previous year papers, and tutorials.',
    icon: <ResourcesIcon fontSize="large" color="primary" />
  },
  {
    title: 'Achievements Showcase',
    description: 'Highlight your accolades and get inspired by others’ accomplishments.',
    icon: <AchievementsIcon fontSize="large" color="primary" />
  },
  {
    title: 'Community Forum',
    description: 'Engage in discussions, seek advice, and share experiences.',
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

// Sample founders array
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
          <Box sx={{ 
            textAlign: 'center',
            maxWidth: 800,
            mx: 'auto'
          }}>
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
            <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center' }}>
              <Button 
                variant="contained" 
                size="large"
                sx={{
                  px: 4,
                  py: 1.5,
                  fontWeight: 600,
                  fontSize: '1rem'
                }}
              >
                Join Us
              </Button>
              <Button 
                variant="outlined" 
                size="large"
                sx={{
                  px: 4,
                  py: 1.5,
                  fontWeight: 600,
                  fontSize: '1rem'
                }}
              >
                Take a Tour
              </Button>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Features Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Typography variant="h4" align="center" gutterBottom>
          Your One-Stop College Companion
        </Typography>
        <Typography variant="subtitle1" align="center" paragraph>
          From tracking attendance to discovering exciting events, we’ve got everything covered.
        </Typography>

        <Grid container spacing={4} sx={{ mt: 4 }}>
          {features.map((feature, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card elevation={3} sx={{ height: '100%', p: 3, textAlign: 'center' }}>
                {feature.icon}
                <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
                  {feature.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {feature.description}
                </Typography>
              </Card>
            </Grid>
          ))}
        </Grid>
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
            <Grid item xs={6} sm={3}>
              <Box sx={{ textAlign: 'center' }}>
                <Typography variant="h3" sx={{ 
                  fontWeight: 800,
                  color: 'primary.main',
                  mb: 1
                }}>
                  5,000+
                </Typography>
                <Typography variant="body1">
                  Active Students
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={6} sm={3}>
              <Box sx={{ textAlign: 'center' }}>
                <Typography variant="h3" sx={{ 
                  fontWeight: 800,
                  color: 'primary.main',
                  mb: 1
                }}>
                  120+
                </Typography>
                <Typography variant="body1">
                  Campus Partners
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={6} sm={3}>
              <Box sx={{ textAlign: 'center' }}>
                <Typography variant="h3" sx={{ 
                  fontWeight: 800,
                  color: 'primary.main',
                  mb: 1
                }}>
                  98%
                </Typography>
                <Typography variant="body1">
                  Satisfaction Rate
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={6} sm={3}>
              <Box sx={{ textAlign: 'center' }}>
                <Typography variant="h3" sx={{ 
                  fontWeight: 800,
                  color: 'primary.main',
                  mb: 1
                }}>
                  24/7
                </Typography>
                <Typography variant="body1">
                  Support Available
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Founders Section */}
      <Container maxWidth="lg" sx={{ py: 10 }}>
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography variant="overline" sx={{ 
            color: 'primary.main',
            fontWeight: 600,
            letterSpacing: 1
          }}>
            OUR TEAM
          </Typography>
          <Typography variant="h3" sx={{ 
            fontWeight: 700, 
            mb: 2 
          }}>
            Meet The Visionaries
          </Typography>
        </Box>

        <Grid container spacing={4} justifyContent="center" alignItems="center">
          {founders.map((founder, index) => (
            <Grid item xs={12} md={5} key={index}>
              <Card sx={{ 
                display: 'flex',
                alignItems: 'center',
                p: 3,
                gap: 3,
                boxShadow: 3
              }}>
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
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls={`panel${idx}-content`}
              id={`panel${idx}-header`}
            >
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
