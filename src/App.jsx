import './App.css'
import { ThemeProvider, CssBaseline, Box } from '@mui/material'
//import theme from './MuiTheme'
import themeTest from './MuiThemeTest'
import Header from './components/header/Header'
import Hero from './components/hero/Hero'
import About from './components/about/About'
import Skills from './components/skills/Skills'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import Experience from './components/experience/Experience'

const App = () => {
  return (
    <ThemeProvider theme={themeTest}>
      <CssBaseline />
      <Box
        sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Header />
        <Hero />
        <Box sx={{ flex: 1 }}>
          <About />
          <Experience />
          <Skills />
          <Contact />
        </Box>
        <Footer />
      </Box>
    </ThemeProvider>
  )
}

export default App
