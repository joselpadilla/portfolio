import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    primary: {
      main: '#1b4993', // background-base
      light: '#2a62bd', // background-40
      dark: '#1b4993', // background-50 (same as base)
      contrastText: '#75fdff', // foreground-base
    },
    secondary: {
      main: '#75fdff', // foreground-base
      light: '#a4f9fb', // foreground-40
      dark: '#75fdff', // foreground-50 (same as base)
      contrastText: '#1b4993', // background-base
    },
    text: {
      primary: '#f5ffff', // foreground-10
      secondary: '#e0ffff', // foreground-20
      disabled: '#c6ffff', // foreground-30
    },
    background: {
      default: '#1b4993', // background-base
      paper: '#2a62bd', // background-40
    },
    action: {
      active: '#f5ffff', // foreground-10
      hover: 'rgba(224, 255, 255, 0.08)', // foreground-20 with opacity
      selected: 'rgba(198, 255, 255, 0.16)', // foreground-30 with opacity
      disabled: 'rgba(198, 255, 255, 0.3)', // foreground-30 with opacity
      disabledBackground: 'rgba(91, 137, 210, 0.12)', // background-30 with opacity
    },
    divider: 'rgba(224, 255, 255, 0.12)', // foreground-20 with opacity
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      color: '#f5ffff', // foreground-10
    },
    h2: {
      color: '#f5ffff', // foreground-10
    },
    h3: {
      color: '#e0ffff', // foreground-20
    },
    h4: {
      color: '#e0ffff', // foreground-20
    },
    body1: {
      color: '#e0ffff', // foreground-20
    },
    body2: {
      color: '#c6ffff', // foreground-30
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
        },
        contained: {
          backgroundColor: '#75fdff', // foreground-base
          color: '#1b4993', // background-base
          '&:hover': {
            backgroundColor: '#a4f9fb', // foreground-40
          },
        },
        outlined: {
          borderColor: '#75fdff', // foreground-base
          color: '#75fdff', // foreground-base
          '&:hover': {
            backgroundColor: 'rgba(117, 253, 255, 0.08)', // foreground-base with opacity
            borderColor: '#a4f9fb', // foreground-40
          },
        },
        text: {
          color: '#75fdff', // foreground-base
          '&:hover': {
            backgroundColor: 'rgba(117, 253, 255, 0.08)', // foreground-base with opacity
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#2a62bd', // background-40
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: '#2a62bd', // background-40
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: '#5a89d2', // background-30
        },
      },
    },
  },
})

export default theme
