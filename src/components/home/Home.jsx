import React from 'react'
import {
  Box,
  Typography,
  Button,
  Container,
  Grid,
  Card,
  CardContent,
  CardActions,
  Avatar,
  useTheme,
  useMediaQuery,
} from '@mui/material'
import {
  GitHub,
  LinkedIn,
  Twitter,
  Email,
  Work,
  School,
  Code,
} from '@mui/icons-material'

const Home = () => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

  const projects = [
    {
      title: 'E-commerce Platform',
      description:
        'A full-stack e-commerce solution with React, Node.js, and MongoDB.',
      tags: ['React', 'Node.js', 'MongoDB'],
    },
    {
      title: 'Task Management App',
      description:
        'A productivity app for managing tasks with drag-and-drop functionality.',
      tags: ['React', 'Redux', 'Firebase'],
    },
    {
      title: 'Weather Dashboard',
      description: 'Real-time weather information with interactive charts.',
      tags: ['JavaScript', 'API', 'Chart.js'],
    },
  ]

  const skills = [
    { name: 'React', level: 90 },
    { name: 'JavaScript', level: 85 },
    { name: 'HTML/CSS', level: 95 },
    { name: 'Node.js', level: 80 },
    { name: 'TypeScript', level: 75 },
    { name: 'UI/UX Design', level: 70 },
  ]

  return (
    <Box sx={{ bgcolor: 'background.default', minHeight: '100vh' }}>
      {/* Hero Section */}
      <Box
        sx={{
          bgcolor: 'primary.400',
          color: 'primary.light',
          py: 10,
          textAlign: 'center',
        }}>
        <Container maxWidth="md">
          <Avatar
            alt="Profile Picture"
            src="/profile.jpg"
            sx={{
              width: 150,
              height: 150,
              mx: 'auto',
              mb: 3,
              border: '4px solid white',
            }}
          />
          <Typography
            variant="h2"
            component="h1"
            gutterBottom>
            Hi, I'm Jane Doe
          </Typography>
          <Typography
            variant="h5"
            component="h2"
            gutterBottom>
            Frontend Developer & UI Designer
          </Typography>
          <Typography
            variant="body1"
            sx={{ mb: 4, maxWidth: 600, mx: 'auto' }}>
            I build exceptional digital experiences with modern web technologies
            and a focus on user-centered design.
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
            <Button
              variant="contained"
              color="secondary"
              size="large"
              startIcon={<Work />}>
              View My Work
            </Button>
            <Button
              variant="outlined"
              color="inherit"
              size="large"
              startIcon={<Email />}>
              Contact Me
            </Button>
          </Box>
        </Container>
      </Box>

      {/* About Section */}
      <Box sx={{ py: 10 }}>
        <Container maxWidth="lg">
          <Typography
            variant="h3"
            component="h2"
            align="center"
            gutterBottom>
            About Me
          </Typography>
          <Grid
            container
            spacing={4}
            alignItems="center">
            <Grid
              item
              xs={12}
              md={6}>
              <Typography
                variant="body1"
                paragraph>
                I'm a passionate frontend developer with 5 years of experience
                creating responsive and accessible web applications. I
                specialize in React and modern JavaScript frameworks.
              </Typography>
              <Typography
                variant="body1"
                paragraph>
                My approach combines technical expertise with an eye for design,
                ensuring that the applications I build are not only functional
                but also delightful to use.
              </Typography>
              <Typography
                variant="body1"
                paragraph>
                When I'm not coding, you can find me hiking, reading sci-fi
                novels, or experimenting with new cooking recipes.
              </Typography>
            </Grid>
            <Grid
              item
              xs={12}
              md={6}>
              <Box
                sx={{
                  bgcolor: 'primary.200',
                  p: 4,
                  borderRadius: 2,
                  height: '100%',
                }}>
                <Typography
                  variant="h5"
                  gutterBottom>
                  My Skills
                </Typography>
                {skills.map((skill) => (
                  <Box
                    key={skill.name}
                    sx={{ mb: 2 }}>
                    <Typography variant="body2">{skill.name}</Typography>
                    <Box
                      sx={{
                        width: '100%',
                        bgcolor: 'grey.300',
                        borderRadius: 1,
                        height: 10,
                      }}>
                      <Box
                        sx={{
                          width: `${skill.level}%`,
                          bgcolor: 'primary.main',
                          borderRadius: 1,
                          height: '100%',
                        }}
                      />
                    </Box>
                  </Box>
                ))}
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Projects Section */}
      <Box sx={{ py: 10, bgcolor: 'primary.400' }}>
        <Container maxWidth="lg">
          <Typography
            variant="h3"
            component="h2"
            align="center"
            gutterBottom>
            Featured Projects
          </Typography>
          <Grid
            container
            spacing={4}>
            {projects.map((project, index) => (
              <Grid
                item
                xs={12}
                sm={6}
                md={4}
                key={index}>
                <Card
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                  }}>
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography
                      variant="h5"
                      component="h3"
                      gutterBottom>
                      {project.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      paragraph>
                      {project.description}
                    </Typography>
                    <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                      {project.tags.map((tag, i) => (
                        <Typography
                          key={i}
                          variant="caption"
                          sx={{
                            bgcolor: 'primary.light',
                            px: 1,
                            borderRadius: 1,
                          }}>
                          {tag}
                        </Typography>
                      ))}
                    </Box>
                  </CardContent>
                  <CardActions>
                    <Button size="small">View Details</Button>
                    <Button size="small">Live Demo</Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
          <Box sx={{ textAlign: 'center', mt: 4 }}>
            <Button
              variant="outlined"
              size="large"
              startIcon={<Code />}>
              View All Projects
            </Button>
          </Box>
        </Container>
      </Box>

      {/* Contact Section */}
      <Box sx={{ py: 10 }}>
        <Container maxWidth="md">
          <Typography
            variant="h3"
            component="h2"
            align="center"
            gutterBottom>
            Get In Touch
          </Typography>
          <Typography
            variant="body1"
            align="center"
            paragraph
            sx={{ mb: 4 }}>
            Interested in working together or have questions? Feel free to reach
            out!
          </Typography>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              gap: 3,
              flexWrap: 'wrap',
            }}>
            <Button
              variant="contained"
              color="primary"
              size={isMobile ? 'medium' : 'large'}
              startIcon={<Email />}>
              Send Email
            </Button>
            <Button
              variant="outlined"
              color="primary"
              size={isMobile ? 'medium' : 'large'}
              startIcon={<LinkedIn />}>
              LinkedIn
            </Button>
            <Button
              variant="outlined"
              color="primary"
              size={isMobile ? 'medium' : 'large'}
              startIcon={<GitHub />}>
              GitHub
            </Button>
            <Button
              variant="outlined"
              color="primary"
              size={isMobile ? 'medium' : 'large'}
              startIcon={<Twitter />}>
              Twitter
            </Button>
          </Box>
        </Container>
      </Box>

      {/* Footer */}
      <Box
        sx={{
          bgcolor: 'primary.dark',
          color: 'primary.contrastText',
          py: 3,
          textAlign: 'center',
        }}>
        <Container maxWidth="md">
          <Typography variant="body2">
            © {new Date().getFullYear()} Jane Doe. All rights reserved.
          </Typography>
        </Container>
      </Box>
    </Box>
  )
}

export default Home
