import React from 'react';
import { 
  Box, Typography, Grid, Card, CardContent, Avatar, Chip, Container, 
  Accordion, AccordionSummary, AccordionDetails, Divider, Button 
} from '@mui/material';
import { Link } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { 
  Event as EventIcon,
  School as SchoolIcon,
  GroupWork as CollabIcon,
  LibraryBooks as ResourcesIcon,
  EmojiEvents as AchievementsIcon,
  Forum as CommunityIcon
} from '@mui/icons-material';

const founders = [
  {
    name: "Anisha Gupta",
    role: "Founder & Lead Developer",
    image: "/founders/aditya.jpg",
    linkedin: "https://linkedin.com/in/adityajain",
    bio: "Student at IGDTUW with 5+ years of development experience"
  },
  {
    name: "Aashi Jain",
    role: "Founder & Lead Developer",
    image: "/founders/priya.jpg",
    linkedin: "https://linkedin.com/in/priyasharma",
    bio: "UI/UX specialist with focus on educational platforms"
  }
];

const features = [
  {
    title: "Comprehensive Events Hub",
    description: "Discover all upcoming hackathons, workshops, guest lectures, and tech events specifically curated for IGDTUW students.",
    icon: <EventIcon sx={{ fontSize: 40 }} />,
    stats: "150+ events annually"
  },
  {
    title: "Smart Attendance Tracker",
    description: "Automated attendance tracking with predictive analytics to help you maintain required percentages and avoid shortages.",
    icon: <SchoolIcon sx={{ fontSize: 40 }} />,
    stats: "Used by 2,500+ students"
  },
  {
    title: "Collaboration Platform",
    description: "Find teammates for hackathons, connect with mentors, and join study groups based on your skills and interests.",
    icon: <CollabIcon sx={{ fontSize: 40 }} />,
    stats: "300+ projects created"
  },
  {
    title: "Learning Resources",
    description: "Curated collection of course materials, competitive programming resources, and interview preparation guides.",
    icon: <ResourcesIcon sx={{ fontSize: 40 }} />,
    stats: "1,200+ resources"
  },
  {
    title: "Achievements Showcase",
    description: "Highlight your projects and accomplishments to potential employers and collaborators.",
    icon: <AchievementsIcon sx={{ fontSize: 40 }} />,
    stats: "Featured 100+ student projects"
  },
  {
    title: "Community Forum",
    description: "Discussion boards for each department and special interest groups in technology.",
    icon: <CommunityIcon sx={{ fontSize: 40 }} />,
    stats: "Active 24/7 community"
  }
];

const faqs = [
  {
    question: "How is NextWave different from other student platforms?",
    answer: "NextWave is specifically tailored for IGDTUW students with features like department-specific resources, official event integrations, and university-approved attendance tracking."
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
    answer: "NextWave is completely free for IGDTUW students. We're supported by the university and tech community partners."
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
              NextWave integrates all essential academic tools with career-building resources in one unified platform designed specifically for IGDTUW students.
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
                Get Started
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
      <Container maxWidth="lg" sx={{ py: 10 }}>
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography variant="overline" sx={{ 
            color: 'primary.main',
            fontWeight: 600,
            letterSpacing: 1
          }}>
            WHY CHOOSE NEXTWAVE
          </Typography>
          <Typography variant="h3" sx={{ 
            fontWeight: 700, 
            mb: 2 
          }}>
            Everything You Need in One Platform
          </Typography>
          <Typography variant="body1" sx={{ 
            maxWidth: 600,
            mx: 'auto',
            color: 'text.secondary'
          }}>
            We've integrated all essential student tools with powerful features to support your academic and professional journey.
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {features.map((feature, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card sx={{ 
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                transition: 'all 0.3s ease',
                border: '1px solid',
                borderColor: 'divider',
                '&:hover': { 
                  transform: 'translateY(-8px)',
                  boxShadow: '0 15px 30px rgba(0,0,0,0.12)'
                }
              }}>
                <CardContent sx={{ 
                  flexGrow: 1,
                  p: 4,
                  '&:last-child': { pb: 4 }
                }}>
                  <Box sx={{ 
                    width: 80,
                    height: 80,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    bgcolor: 'primary.light',
                    borderRadius: 2,
                    mb: 3,
                    color: 'primary.main'
                  }}>
                    {feature.icon}
                  </Box>
                  <Typography variant="h5" sx={{ 
                    fontWeight: 700, 
                    mb: 2 
                  }}>
                    {feature.title}
                  </Typography>
                  <Typography variant="body1" sx={{ 
                    color: 'text.secondary',
                    mb: 2
                  }}>
                    {feature.description}
                  </Typography>
                  <Typography variant="caption" sx={{ 
                    display: 'block',
                    color: 'primary.main',
                    fontWeight: 600
                  }}>
                    {feature.stats}
                  </Typography>
                </CardContent>
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
          <Typography variant="body1" sx={{ 
            maxWidth: 600,
            mx: 'auto',
            color: 'text.secondary'
          }}>
            A passionate team of IGDTUW students building solutions for the community.
          </Typography>
        </Box>

        <Grid container spacing={6} justifyContent="center">
          {founders.map((founder, index) => (
            <Grid item xs={12} md={6} key={index}>
              <Card sx={{ 
                display: 'flex',
                p: 4,
                border: '1px solid',
                borderColor: 'divider',
                bgcolor: 'background.paper'
              }}>
                <Avatar
                  src={founder.image}
                  sx={{ 
                    width: 120, 
                    height: 120, 
                    mr: 4,
                    border: '3px solid',
                    borderColor: 'primary.main'
                  }}
                />
                <Box>
                  <Typography variant="h5" sx={{ fontWeight: 700 }}>
                    {founder.name}
                  </Typography>
                  <Typography variant="body2" color="primary" sx={{ mb: 1 }}>
                    {founder.role}
                  </Typography>
                  <Typography variant="body2" sx={{ mb: 2 }}>
                    {founder.bio}
                  </Typography>
                  <Button
                    component="a"
                    href={founder.linkedin}
                    target="_blank"
                    rel="noopener"
                    variant="outlined"
                    size="small"
                    startIcon={
                      <img 
                        src="https://content.linkedin.com/content/dam/me/business/en-us/amp/brand-site/v2/bg/LI-Bug.svg.original.svg" 
                        alt="LinkedIn" 
                        style={{ width: 16, height: 16 }}
                      />
                    }
                    sx={{
                      textTransform: 'none',
                      fontWeight: 500
                    }}
                  >
                    Connect on LinkedIn
                  </Button>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* FAQ Section */}
      <Box sx={{ 
        py: 10,
        bgcolor: 'background.default',
        borderTop: '1px solid',
        borderColor: 'divider'
      }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Typography variant="overline" sx={{ 
              color: 'primary.main',
              fontWeight: 600,
              letterSpacing: 1
            }}>
              HAVE QUESTIONS?
            </Typography>
            <Typography variant="h3" sx={{ 
              fontWeight: 700, 
              mb: 2 
            }}>
              Frequently Asked Questions
            </Typography>
          </Box>

          <Box sx={{ maxWidth: 800, mx: 'auto' }}>
            {faqs.map((faq, index) => (
              <Accordion 
                key={index} 
                elevation={0}
                sx={{ 
                  bgcolor: 'transparent',
                  border: '1px solid',
                  borderColor: 'divider',
                  '&:before': { display: 'none' },
                  '&:not(:last-child)': { mb: 2 }
                }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  sx={{ 
                    fontWeight: 600,
                    minHeight: 64
                  }}
                >
                  {faq.question}
                </AccordionSummary>
                <AccordionDetails>
                  <Typography color="text.secondary">
                    {faq.answer}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            ))}
          </Box>
        </Container>
      </Box>

      {/* CTA Section */}
      <Container maxWidth="lg" sx={{ py: 12, textAlign: 'center' }}>
        <Typography variant="h3" sx={{ 
          fontWeight: 800,
          mb: 3,
          lineHeight: 1.2
        }}>
          Ready to Transform Your Student Experience?
        </Typography>
        <Typography variant="h6" sx={{ 
          maxWidth: 600, 
          mx: 'auto', 
          mb: 4,
          color: 'text.secondary',
          fontWeight: 400
        }}>
          Join thousands of IGDTUW students already using NextWave to supercharge their academic journey.
        </Typography>
        <Button 
          variant="contained" 
          size="large"
          sx={{
            px: 6,
            py: 2,
            fontWeight: 700,
            fontSize: '1.1rem'
          }}
        >
          Get Started - It's Free
        </Button>
      </Container>
    </Box>
  );
}