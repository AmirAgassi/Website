import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

import { theme } from './Theme';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import { ModernBackground } from './components/StyledComponents';
import ProjectsSection from './components/ProjectsSection';
import SitesSection from './components/SitesSection';
import PostsSection from './components/PostsSection';
import CertsSection from './components/CertsSection';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ModernBackground />
      <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <Header />
        <Container maxWidth="lg">
          <HeroSection />
          <PostsSection />
          <SitesSection />
          <ProjectsSection />
          <CertsSection />
        </Container>
      </Box>
    </ThemeProvider>
  );
}

export default App;