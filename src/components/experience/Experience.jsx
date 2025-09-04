import { Container, Typography, Grid } from '@mui/material'
import ProjectCard from '../project-card/ProjectCard'

const Experience = () => {
  const jobs = [
    {
      title: 'Senior Java Software Engineer & Technical Lead.',
      description: `          
           Architected event-driven microservices using Java 17, Spring Boot Reactive, and Kafka, achieving 99.9% uptime and handling 10M+ transactions/month for a loyalty platform.

           Led cloud migration to AWS, implementing Docker and Kubernetes to reduce deployment time by 30% via CI/CD pipelines (Jenkins, SonarQube).

           Mentored 5 engineers in TDD and code quality best practices, increasing team velocity by 25%.

           Collaborated with cross-functional teams in Agile/Scrum, enhancing communication and reducing project delivery times by 20%.`,
      image: '/portfolio/assets/globant.png',
      githubLink: '#',
      liveLink: '#',
    },
    {
      title: 'Senior Java Developer.',
      description: `
          Engineered and delivered scalable microservices and RESTful APIs using Java 11, Spring Boot, and J2EE within an Agile Scrum environment.

          Architected and implemented a robust CI/CD pipeline leveraging Jenkins and Git, which reduced deployment time by 30%.

          Developed and maintained enterprise applications, integrating with relational databases like SQL Server and improving overall system efficiency.

          Provided technical leadership to a team of three developers, conducting code reviews and mentoring to ensure adherence to best practices and high code quality.`,
      image: '/portfolio/assets/softtek.png',
      githubLink: '#',
      liveLink: '#',
    },
    {
      title: 'Department Head.',
      description: `
        Directed and supervised software development teams, optimizing project delivery and team performance.

        Developed comprehensive project estimations and plans, ensuring efficient resource allocation.
        
        Led the gathering of Software Requirements Specifications (SRS), work planning, analysis, and design for custom internal applications.`,
      image: '/portfolio/assets/inegi.png',
      githubLink: '#',
      liveLink: '#',
    },
  ]

  return (
    <Container id='experience'>
      <Typography
        variant='h4'
        component='h2'
        gutterBottom
        align='center'
        sx={{ fontWeight: 600 }}>
        My Experience
      </Typography>
      <Grid
        container
        spacing={4}>
        {jobs.map((job, index) => (
          <Grid
            size={{ xs: 12, sm: 6, md: 4 }}
            key={index}>
            <ProjectCard {...job} />
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}
export default Experience
