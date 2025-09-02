import './App.css'
import { ThemeProvider, CssBaseline, Box } from '@mui/material'
import theme from './MuiTheme'
import Header from './components/header/Header'
import Hero from './components/hero/Hero'
import About from './components/about/About'
import Projects from './components/projects/Projects'
import Skills from './components/skills/Skills'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Header />
        <Hero />
        <Box sx={{ flex: 1 }}>
          <About />
          {/*<Projects />*/}
          <Skills />
          <Contact />
        </Box>
        <Footer />
      </Box>
    </ThemeProvider>
  )
}

export default App
