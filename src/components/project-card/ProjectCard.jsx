import {
  Box,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Button,
  Link,
} from '@mui/material'

const ProjectCard = ({ title, description, image, githubLink, liveLink }) => (
  <Card sx={{ maxWidth: 345, margin: 'auto', borderRadius: 2 }}>
    <CardMedia
      component='div'
      sx={{
        height: 200,
        backgroundColor: 'rgba(255, 255, 255, 0.05)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        p: 2,
      }}>
      <Typography
        variant='subtitle1'
        color='text.secondary'>
        {image}
      </Typography>
    </CardMedia>
    <CardContent>
      <Typography
        gutterBottom
        variant='h5'
        component='div'>
        {title}
      </Typography>
      <Typography
        variant='body2'
        color='text.secondary'>
        {description}
      </Typography>
      <Box
        sx={{ display: 'flex', justifyContent: 'space-between', marginTop: 2 }}>
        <Button
          size='small'
          component={Link}
          href={githubLink}
          target='_blank'
          rel='noopener'>
          GitHub
        </Button>
        <Button
          size='small'
          component={Link}
          href={liveLink}
          target='_blank'
          rel='noopener'>
          Live Demo
        </Button>
      </Box>
    </CardContent>
  </Card>
)
export default ProjectCard
