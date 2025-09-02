import { Box, Container, Typography, useTheme } from '@mui/material'

const Footer = () => {
  const theme = useTheme()
  return (
    <Box
      component='footer'
      sx={{
        backgroundColor: theme.palette.background.paper,
        p: 2,
        textAlign: 'center',
        marginTop: 'auto',
      }}>
      <Container>
        <Typography
          variant='body2'
          color='text.secondary'>
          © {new Date().getFullYear()} Your Name. All rights reserved.
        </Typography>
      </Container>
    </Box>
  )
}
export default Footer
