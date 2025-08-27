import './App.css'
import { ThemeProvider } from '@mui/material/styles'
import theme from './MuiTheme'
import HomeUpdated from './components/home/HomeUpdated'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <HomeUpdated />
    </ThemeProvider>
  )
}

export default App
