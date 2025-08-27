import React from 'react'
import { Box, Typography, Avatar, useTheme, useMediaQuery } from '@mui/material'
import { styled } from '@mui/system'
import jlpr from '../../assets/jlpr.jpg' // Adjust the path as necessary

const HomeContainer = styled(Box)(({ theme }) => ({
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: theme.palette.background.default,
}))

const NavBarPlaceholder = styled(Box)(({ theme }) => ({
  height: '64px',
  backgroundColor: theme.palette.primary.main,
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 4),
  boxShadow: theme.shadows[4],
}))

const ContentContainer = styled(Box)(({ theme }) => ({
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  padding: theme.spacing(4),
  textAlign: 'center',
  gap: theme.spacing(4),
}))

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

const HomeUpdated = () => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

  return (
    <HomeContainer>
      {/* Navigation Bar Placeholder */}
      <NavBarPlaceholder>
        <Typography
          variant='h6'
          color='primary.contrastText'>
          My Portfolio
        </Typography>
      </NavBarPlaceholder>

      {/* Main Content */}
      <ContentContainer>
        <Box
          sx={{
            display: 'flex',
            gap: '16px',
            flexDirection: 'row', // Or 'row' if you want horizontal alignment too
            justifyContent: 'center', // Vertically centers the content
            alignItems: 'center', // Horizontally centers the content (optional, but often desired)
          }}>
          <Typography
            variant={isMobile ? 'h4' : 'h2'}
            component='h1'
            color='text.primary'
            fontWeight='bold'
            gutterBottom>
            Jose Padilla
          </Typography>
          <AvatarContainer>
            <StyledAvatar
              alt='Profile Picture'
              src={jlpr} // Replace with your actual avatar URL
            />
          </AvatarContainer>
        </Box>

        <Box>
          <Typography
            variant={isMobile ? 'h6' : 'h5'}
            component='h2'
            color='text.secondary'>
            Backend Developer | Java Enthusiast
          </Typography>
        </Box>

        <Box maxWidth='md'>
          <Typography
            align='justify'
            variant='body1'
            color='text.primary'
            paragraph>
            Welcome to my UPDATED backend Java development portfolio. I am a
            passionate and dedicated Java developer specializing in building
            robust, scalable, and efficient backend systems. This portfolio
            showcases a selection of my projects, demonstrating my expertise in
            Java, Spring Boot, microservices, API development, and database
            management. Explore my work to see how I leverage modern Java
            technologies to solve complex challenges and deliver high-quality
            solutions.
          </Typography>
        </Box>
      </ContentContainer>
    </HomeContainer>
  )
}

export default HomeUpdated
