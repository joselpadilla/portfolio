import React, { useState } from 'react'
import {
  Box,
  Typography,
  AppBar,
  Toolbar,
  IconButton,
  Button,
  useTheme,
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import Navigation from '../navigation/Navigation'

const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false)
  const theme = useTheme()
  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen)
  }

  return (
    <AppBar
      position='fixed'
      sx={{
        backdropFilter: 'blur(10px)',
        backgroundColor: `${theme.palette.primary.main}`, // semi-transparent
      }}>
      <Toolbar>
        <Typography
          variant='h6'
          component='div'
          sx={{ flexGrow: 1 }}>
          My Portfolio
        </Typography>
        <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
          {['Home', 'About', 'Experience', 'Skills', 'Contact'].map((text) => (
            <Button
              key={text}
              href={`#${text.toLowerCase()}`}>
              {text}
            </Button>
          ))}
        </Box>
        <IconButton
          color='inherit'
          aria-label='open drawer'
          edge='end'
          onClick={handleDrawerToggle}
          sx={{ display: { md: 'none' } }}>
          <MenuIcon />
        </IconButton>
      </Toolbar>
      <Navigation
        open={drawerOpen}
        onClose={handleDrawerToggle}
      />
    </AppBar>
  )
}
export default Header
