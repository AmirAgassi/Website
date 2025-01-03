import React from 'react';
import { Box, Typography, Card, CardMedia, Chip, IconButton } from '@mui/material';
import { motion } from 'framer-motion';
import { GitHub, Launch, YouTube } from '@mui/icons-material';
import { styled } from '@mui/system';
import danghuiImage from '../assets/danghui.jpg';
import blackstarImage from '../assets/blackstar.jpg';
import dumpFunImage from '../assets/dump.png';
import spurImage from '../assets/spur.jpg';

const ProjectCard = styled(motion(Card))(({ theme }) => ({
  position: 'relative',
  overflow: 'hidden',
  borderRadius: theme.spacing(2),
  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
  transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
  '&:hover': {
    transform: 'translateY(-10px)',
    boxShadow: '0 20px 40px rgba(0, 0, 0, 0.2)',
  },
  height: '450px',
  display: 'flex',
  flexDirection: 'column',
}));

const ProjectMedia = styled(CardMedia)({
  height: 300,
});

const ContentOverlay = styled(Box)(({ theme }) => ({
  position: 'static',
  background: theme.palette.background.paper,
  padding: theme.spacing(2),
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
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

const ProjectsContainer = styled(Box)({
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

const ProjectsSection = () => {
  const projects = [
    {
      title: "SPUR",
      description: "A streamlined digital platform for SPUR to manage startup on-boarding, review, and funding processes. Features include user authentication, company profiles, projects, and funding.",
      image: spurImage,
      tags: ["TypeScript", "Go", "PostgreSQL", "React", "Echo"],
      date: "2024",
      github: "https://github.com/KonferCA/SPUR",
      live: "https://onboard.spuric.com",
      youtube: null,
      color: "#2B5BA1",
    },
    {
      title: "Danghui cLVM",
      description: "Arbitrary code execution exploit for Roblox, utilizing an innovative script execution method to execute compiled lua on Roblox's own lua_State.",
      image: danghuiImage,
      tags: ["C++", "Reverse Engineering", "Vulnerability", "Exploit"],
      date: "2015-2017",
      github: "https://github.com/AmirAgassi/Danghui-LVM",
      live: null,
      youtube: "https://www.youtube.com/watch?v=AF80kcpa2AM",
      color: "#FF0000",
    },
    {
      title: "dump.fun",
      description: "Advanced, open-source memecoin launch sniping script for Solana blockchain. Uses reverse-engineered pump.fun program IDL and RPC node support.",
      image: dumpFunImage,
      tags: ["JavaScript", "Solana", "Blockchain"],
      date: "2023",
      github: "https://github.com/AmirAgassi/dump.fun",
      live: null,
      youtube: null,
      color: "#1E90FF",
    },
    {
      title: "BlackStar",
      description: "Detailed explanations of bypasses for Roblox's security checks, including retcheck, FindWindowA, and anti log-upload crashes.",
      image: blackstarImage,
      tags: ["C++", "Reverse Engineering", "Security", "Roblox"],
      date: "2020",
      github: "https://github.com/AmirAgassi/Blackstar",
      live: null,
      youtube: null,
      color: "#000000",
    },
  ];

  return (
    <Box sx={{ py: 8, overflow: 'hidden' }}>
      <Typography variant="h3" component="h2" gutterBottom align="center" sx={{
        fontWeight: 'bold',
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        mb: 6,
      }}>
        Cool Projects
      </Typography>
      <ProjectsContainer>
        {projects.map((project, index) => (
          <ProjectCard
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
            <ProjectMedia 
              image={project.image} 
              title={project.title}
              sx={{ 
                backgroundPosition: 'center center',
                backgroundSize: 'contain',
                backgroundColor: '#ffffff'
              }}
            />
            <ContentOverlay>
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
                  {project.title}
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
                  {project.description}
                </TruncatedTypography>
              </Box>
              <Box>
                <TagsContainer>
                  {project.tags.map((tag, i) => (
                    <StyledChip 
                      key={i} 
                      label={tag} 
                      size="small" 
                      sx={{ 
                        backgroundColor: `${project.color}80`,
                        color: 'white',
                      }} 
                    />
                  ))}
                </TagsContainer>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 2 }}>
                  <Typography variant="subtitle2" sx={{ color: 'rgba(255, 255, 255, 0.8)' }}>
                    {project.date || 'No date'}
                  </Typography>
                  <Box>
                    {project.youtube && (
                      <IconButton href={project.youtube} target="_blank" rel="noopener noreferrer" sx={{ color: 'white', p: 0.5 }}>
                        <YouTube fontSize="small" />
                      </IconButton>
                    )}
                    {project.github && (
                      <IconButton href={project.github} target="_blank" rel="noopener noreferrer" sx={{ color: 'white', p: 0.5 }}>
                        <GitHub fontSize="small" />
                      </IconButton>
                    )}
                    {project.live && (
                      <IconButton href={project.live} target="_blank" rel="noopener noreferrer" sx={{ color: 'white', p: 0.5 }}>
                        <Launch fontSize="small" />
                      </IconButton>
                    )}
                  </Box>
                </Box>
              </Box>
            </ContentOverlay>
          </ProjectCard>
        ))}
      </ProjectsContainer>
    </Box>
  );
};

export default ProjectsSection;