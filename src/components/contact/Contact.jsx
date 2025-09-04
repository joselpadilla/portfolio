import { Box, Container, Typography, IconButton, Link } from '@mui/material'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'

const Contact = () => (
  <Container id='contact'>
    <Typography
      variant='h4'
      component='h2'
      gutterBottom
      align='center'
      sx={{ fontWeight: 600 }}>
      Contact Me
    </Typography>
    <Box sx={{ textAlign: 'center' }}>
      <Typography
        variant='body1'
        gutterBottom>
        Feel free to connect with me!
      </Typography>
      <Box sx={{ marginTop: 2 }}>
        <IconButton
          color='primary.contrastText'
          sx={{ margin: 1 }}
          component={Link}
          href='https://github.com/joselpadilla'
          target='_blank'
          rel='noopener'>
          <GitHubIcon sx={{ fontSize: 40 }} />
        </IconButton>
        <IconButton
          color='primary.contrastText'
          sx={{ margin: 1 }}
          component={Link}
          href='https://linkedin.com/in/jose-padilla-07645a95'
          target='_blank'
          rel='noopener'>
          <LinkedInIcon sx={{ fontSize: 40 }} />
        </IconButton>
      </Box>
    </Box>
  </Container>
)
export default Contact
