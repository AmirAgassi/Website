import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { theme } from './Theme';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import { ModernBackground } from './components/StyledComponents';
import ProjectsSection from './components/ProjectsSection';
import SitesSection from './components/SitesSection';
import PostsSection from './components/PostsSection';
import CertsSection from './components/CertsSection';
import BlogPostLayout from './components/BlogPostLayout';

// Main homepage component
const Home = () => (
  <>
    <HeroSection />
    <PostsSection />
    <SitesSection />
    <ProjectsSection />
    <CertsSection />
  </>
);

const AppContent = () => {
  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header />
      <Container 
        maxWidth={false}
        sx={{ 
          width: '100%',
          maxWidth: '1600px',
          margin: '0 auto',
          px: {
            xs: 2,
            sm: 3,
            md: 4,
            lg: 6
          }
        }}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog/*" element={<BlogPostLayout />} />
        </Routes>
      </Container>
    </Box>
  );
};

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <ModernBackground />
        <AppContent />
      </ThemeProvider>
    </Router>
  );
}

export default App;