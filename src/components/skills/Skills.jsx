import { Box, Container, Typography, Button } from '@mui/material'

const Skills = () => {
  const skills = [
    'Java',
    'Spring Boot',
    'Microservices',
    'Design Patterns',
    'Architecture',
    'RESTful APIs',
    'Hibernate',
    'JPA',
    'Reactive Programming',
    'JUnit',
    'Mockito',
    'Kafka',
    'RabbitMQ',
    'Oracle',
    'SQL Server',
    'MySQL',
    'MongoDB',
    'Couchbase',
    'CI/CD',
    'Jenkins',
    'Docker',
    'Kubernetes',
    'AWS',
    'Maven',
    'Git',
    'Agile Methodologies',
    'Tech Leadership',
    'Problem Solving',
    'Team Collaboration',
    'Communication',
    'Project Management',
  ]

  return (
    <Container id='skills'>
      <Typography
        variant='h4'
        component='h2'
        gutterBottom
        align='center'
        sx={{ fontWeight: 600 }}>
        Skills
      </Typography>
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: 2,
        }}>
        {skills.map((skill, index) => (
          <Button
            key={index}
            variant='outlined'
            sx={{ borderRadius: 2 }}>
            {skill}
          </Button>
        ))}
      </Box>
    </Container>
  )
}
export default Skills
