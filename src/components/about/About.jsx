import { Container, Typography } from '@mui/material'
const About = () => (
  <Container id='about'>
    <Typography
      variant='h4'
      component='h2'
      gutterBottom
      align='center'
      sx={{ fontWeight: 600 }}>
      About Me
    </Typography>
    <Typography
      variant='body1'
      align='center'
      sx={{ maxWidth: 800, margin: '0 auto', lineHeight: 1.8 }}>
      Welcome to my portfolio. I am a passionate and dedicated Java developer
      specializing in building robust, scalable, and efficient backend systems.
      This portfolio showcases a selection of my projects, demonstrating my
      expertise in Java, Spring Boot, microservices, API development, and
      database management. Explore my work to see how I leverage modern Java
      technologies to solve complex challenges and deliver high-quality
      solutions.{' '}
    </Typography>
  </Container>
)
export default About
