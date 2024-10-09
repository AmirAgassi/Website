import React from 'react';
import { Box, Typography, Card, CardMedia, Chip, IconButton } from '@mui/material';
import { motion } from 'framer-motion';
import { GitHub, Launch } from '@mui/icons-material';
import { styled } from '@mui/system';
import trialcardsImage from '../assets/trialcards.png';
import quickreportsImage from '../assets/quickreports.png';
import identifycardsImage from '../assets/identifycards.png';
import phoneScoutNAImage from '../assets/phoneScoutNA.png';
import tempinboxesImage from '../assets/rust.png';

const SiteCard = styled(motion(Card))(({ theme }) => ({
  position: 'relative',
  overflow: 'hidden',
  borderRadius: theme.spacing(2),
  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
  transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
  '&:hover': {
    transform: 'translateY(-10px)',
    boxShadow: '0 20px 40px rgba(0, 0, 0, 0.2)',
  },
  height: '400px',
  display: 'flex',
  flexDirection: 'column',
}));

const SiteMedia = styled(CardMedia)({
  height: 150,
});

const ContentOverlay = styled(Box)(({ theme }) => ({
  position: 'static',
  background: theme.palette.background.paper,
  padding: theme.spacing(2),
  display: 'flex',
  flexDirection: 'column',
  height: 'auto',
  overflowY: 'auto',
}));

const TagsContainer = styled(Box)({
  display: 'flex',
  flexWrap: 'wrap',
  gap: '0.5rem',
  marginBottom: '0.5rem',
});

const StyledChip = styled(Chip)(({ theme }) => ({
  borderRadius: '4px',
  fontWeight: 'bold',
  textTransform: 'uppercase',
  letterSpacing: '0.5px',
  boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
  '&:hover': {
    transform: 'translateY(-2px)',
    boxShadow: '0 4px 8px rgba(0,0,0,0.3)',
  },
  transition: 'transform 0.2s ease, box-shadow 0.2s ease',
}));

const TruncatedTypography = styled(Typography)({
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  display: '-webkit-box',
  WebkitBoxOrient: 'vertical',
});

const SitesContainer = styled(Box)({
  display: 'flex',
  overflowX: 'auto',
  overflowY: 'hidden',
  gap: '2rem',
  padding: '1rem 0',
  '&::-webkit-scrollbar': {
    height: '8px',
  },
  '&::-webkit-scrollbar-track': {
    background: 'transparent',
  },
  '&::-webkit-scrollbar-thumb': {
    background: '#888',
    borderRadius: '4px',
  },
  '&::-webkit-scrollbar-thumb:hover': {
    background: '#555',
  },
});

const SitesSection = () => {
  const sites = [
    {
      title: "QuickReports",
      description: "React-based web app used by 2 marketing agencies for comprehensive report generation. Processes data for 178+ active businesses monthly.",
      image: quickreportsImage,
      tags: ["React", "Marketing", "Dashboard"],
      date: "June 2023",
      live: "https://quickreports.me",
      github: null,
      color: "#4A90E2",
    },
    {
      title: "trial.cards",
      description: "Web app writen in Elm that creates on-demand temporary VCCs with no registration or KYC, designed to prevent unintended charges from free trials.",
      image: trialcardsImage,
      tags: ["Elm", "CSS", "JavaScript"],
      date: "July 2024",
      live: "https://trial.cards",
      github: "https://github.com/AmirAgassi/trial.cards",
      color: "#1E90FF",
    },
    {
      title: "tempinbox.es",
      description: "Full-stack Rust web app providing instant, free Outlook & Hotmail accounts for trusted, privacy-focused burner emails.",
      image: tempinboxesImage,
      tags: ["Rust", "Yew", "Privacy", "Email"],
      date: "March 2024",
      live: "https://tempinbox.es",
      github: "https://github.com/AmirAgassi/tempinbox.es",
      color: "#B7410E",
    },
    {
      title: "identify.cards",
      description: "Web app providing free & instant detailed credit card details worldwide, providing data for loss prevention purposes.",
      image: identifycardsImage,
      tags: ["Svelte", "loss prevention", "data"],
      date: "June 2024",
      live: "https://identify.cards",
      github: null,
      color: "#2980b9",
    },
    {
      title: "PhoneScoutNA",
      description: "Advanced Phone Lookup tool providing instant, detailed loss prevention information for any North American (+1) phone number with data sourced directly from the CNAC and NANPA.",
      image: phoneScoutNAImage,
      tags: ["React", "Loss Prevention", "Data"],
      date: "July 2023",
      live: "https://amiragassi.github.io/Advanced-Phone-Lookup/",
      github: "https://github.com/AmirAgassi/Advanced-Phone-Lookup",
      color: "#3498db",
    },
  ];

  return (
    <Box sx={{ py: 8, overflow: 'hidden' }}>
      <Typography variant="h3" component="h2" gutterBottom align="center" sx={{
        fontWeight: 'bold',
        background: 'linear-gradient(45deg, #3498db 30%, #2ecc71 90%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        mb: 6,
      }}>
        My Websites
      </Typography>
      <SitesContainer>
        {sites.map((site, index) => (
          <SiteCard
            key={index}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            sx={{ 
              minWidth: '350px', 
              maxWidth: '350px', 
              flexShrink: 0,
            }}
          >
            <Box 
              component="a" 
              href={site.live} 
              target="_blank" 
              rel="noopener noreferrer"
              sx={{ 
                display: 'block',
                '&:hover': {
                  cursor: 'pointer',
                },
              }}
            >
              <SiteMedia image={site.image} title={site.title} />
            </Box>
            <ContentOverlay sx={{ 
              flexGrow: 1, 
              display: 'flex', 
              flexDirection: 'column',
              justifyContent: 'flex-start',
              pb: 1,
            }}>
              <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                <TruncatedTypography 
                  variant="h5" 
                  sx={{ 
                    color: 'white', 
                    mb: 1,
                    WebkitLineClamp: 1,
                    height: '1.5em',
                  }}
                >
                  {site.title}
                </TruncatedTypography>
                <TruncatedTypography 
                  variant="body2" 
                  sx={{ 
                    color: 'rgba(255, 255, 255, 0.8)', 
                    mb: 2, 
                    WebkitLineClamp: 4,
                    flexGrow: 1,
                    height: '5.4em',
                    overflow: 'hidden',
                  }}
                >
                  {site.description}
                </TruncatedTypography>
              </Box>
              <Box>
                <TagsContainer>
                  {site.tags.map((tag, i) => (
                    <StyledChip 
                      key={i} 
                      label={tag} 
                      size="small" 
                      sx={{ 
                        backgroundColor: `${site.color}80`,
                        color: 'white',
                      }} 
                    />
                  ))}
                </TagsContainer>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 2 }}>
                  <Typography variant="subtitle2" sx={{ color: 'rgba(255, 255, 255, 0.8)' }}>
                    {site.date || 'No date'}
                  </Typography>
                  <Box>
                    {site.github && (
                      <IconButton href={site.github} target="_blank" rel="noopener noreferrer" sx={{ color: 'white', p: 0.5 }}>
                        <GitHub fontSize="small" />
                      </IconButton>
                    )}
                    {site.live && (
                      <IconButton href={site.live} target="_blank" rel="noopener noreferrer" sx={{ color: 'white', p: 0.5 }}>
                        <Launch fontSize="small" />
                      </IconButton>
                    )}
                  </Box>
                </Box>
              </Box>
            </ContentOverlay>
          </SiteCard>
        ))}
      </SitesContainer>
    </Box>
  );
};

export default SitesSection;