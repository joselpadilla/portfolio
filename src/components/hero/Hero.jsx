import {
  Box,
  Container,
  Typography,
  Avatar,
  Button,
  useTheme,
} from '@mui/material'
import { styled } from '@mui/system'
import jlpr from '/assets/jlpr.jpg'

const Hero = () => {
  const theme = useTheme()
  const AvatarContainer = styled(Box)(({ theme }) => ({
    position: 'relative',
    width: '150px',
    height: '150px',
  }))

  const StyledAvatar = styled(Avatar)(({ theme }) => ({
    width: '100%',
    height: '100%',
    border: `4px solid ${theme.palette.primary.main}`,
  }))

  return (
    <Box
      id='home'
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        backgroundImage: `radial-gradient(circle, ${theme.palette.secondary.main} 0%, ${theme.palette.primary.main} 70%)`,
      }}>
      <Container maxWidth='md'>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}>
          <Box
            sx={{
              width: 150,
              height: 150,
              borderRadius: '50%',
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              border: '2px solid',
              borderColor: theme.palette.primary.main,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: 2,
              boxShadow: '0 0 20px rgba(144, 202, 249, 0.4)',
            }}>
            <Typography
              variant='h6'
              color='primary'>
              <AvatarContainer>
                <StyledAvatar
                  alt='Profile Picture'
                  src={jlpr} // Replace with your actual avatar URL
                />
              </AvatarContainer>
            </Typography>
          </Box>
          <Typography
            variant='h2'
            component='h1'
            color='primary'
            gutterBottom>
            Hi, I'm Jose Padilla
          </Typography>
          <Typography
            variant='h5'
            color='primary'>
            I am Backend Developer | Java Enthusiast.
          </Typography>
          <Button
            variant='contained'
            color='primary'
            size='large'
            sx={{ marginTop: 4, borderRadius: 2 }}
            href='#about'>
            View My Work
          </Button>
        </Box>
      </Container>
    </Box>
  )
}
export default Hero
