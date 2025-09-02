import { Container, Typography, Grid } from '@mui/material'
import ProjectCard from '../project-card/ProjectCard'

const Projects = () => {
  const projects = [
    {
      title: 'Project One',
      description:
        'A description of a web application built with a focus on clean code and performance.',
      image: 'Web App Screenshot',
      githubLink: '#',
      liveLink: '#',
    },
    {
      title: 'Project Two',
      description:
        'An e-commerce prototype demonstrating state management and API integration.',
      image: 'E-commerce Site',
      githubLink: '#',
      liveLink: '#',
    },
    {
      title: 'Project Three',
      description:
        'A mobile-first design of a blog application with dynamic content.',
      image: 'Mobile Blog App',
      githubLink: '#',
      liveLink: '#',
    },
  ]

  return (
    <Container id='projects'>
      <Typography
        variant='h4'
        component='h2'
        gutterBottom
        align='center'
        sx={{ fontWeight: 600 }}>
        My Projects
      </Typography>
      <Grid
        container
        spacing={4}>
        {projects.map((project, index) => (
          <Grid
            size={{ xs: 12, sm: 6, md: 4 }}
            key={index}>
            <ProjectCard {...project} />
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}
export default Projects
