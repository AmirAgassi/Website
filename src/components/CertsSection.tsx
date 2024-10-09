import React, { useState } from 'react';
import { Box, Typography, Card, CardContent, CardMedia, Chip, IconButton, Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField } from '@mui/material';
import { motion } from 'framer-motion';
import { styled } from '@mui/system';
import { Launch, ContentCopy } from '@mui/icons-material';
import { certifications, Certification } from '../data/certifications';

const CertCard = styled(motion(Card))(({ theme }) => ({
  height: '365px',
  display: 'flex',
  flexDirection: 'column',
  transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
  '&:hover': {
    transform: 'translateY(-10px)',
    boxShadow: '0 20px 40px rgba(0, 0, 0, 0.2)',
  },
}));

const CertMedia = styled(CardMedia)({
  height: 140,
  backgroundSize: 'contain',
  backgroundPosition: 'center',
  backgroundColor: '#f5f5f5',
  flexShrink: 0,
});

const TagsContainer = styled(Box)({
  display: 'flex',
  flexWrap: 'wrap',
  gap: '0.5rem',
  marginTop: '0.5rem',
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

const CertsSection = () => {
  const [openModal, setOpenModal] = useState(false);
  const [selectedCert, setSelectedCert] = useState<Certification | null>(null);

  const handleOpenModal = (cert: Certification) => {
    if (!cert.code) {
      if (cert.link) {
        window.open(cert.link, '_blank', 'noopener,noreferrer');
      }
    } else {
      setSelectedCert(cert);
      setOpenModal(true);
    }
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setSelectedCert(null);
  };

  const handleCopyCode = () => {
    if (selectedCert?.code) {
      navigator.clipboard.writeText(selectedCert.code);
    }
  };

  const handleGoToLink = () => {
    if (selectedCert?.link) {
      window.open(selectedCert.link, '_blank', 'noopener,noreferrer');
    }
    handleCloseModal();
  };

  return (
    <Box sx={{ py: 8 }}>
      <Typography variant="h3" component="h2" gutterBottom align="center" sx={{
        fontWeight: 'bold',
        background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        mb: 2,
      }}>
        Certification Soup
      </Typography>
      <Typography variant="subtitle1" align="center" sx={{ mb: 6, fontStyle: 'italic' }}>
        Trust me. This section will look cooler in a few months.
      </Typography>
      <Box
        sx={{
          display: 'flex',
          overflowX: 'auto',
          gap: '2rem',
          pb: 2,
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
        }}
      >
        {certifications.map((cert, index) => (
          <CertCard
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            sx={{ width: 300, flexShrink: 0, display: 'flex', flexDirection: 'column' }}
          >
            <CertMedia
              image={cert.image}
              title={cert.name}
            />  
            <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
              <Typography 
                gutterBottom 
                variant="h6" 
                component="div" 
                sx={{ 
                  height: '3em', 
                  overflow: 'hidden', 
                  textOverflow: 'ellipsis', 
                  display: '-webkit-box', 
                  WebkitLineClamp: 2, 
                  WebkitBoxOrient: 'vertical',
                  flexShrink: 0,
                }}
              >
                {cert.name}
              </Typography>
              {cert.name === "CompTIA A+ IT" && (
                <Typography variant="body2" color="text.secondary" sx={{ mt: -4, mb: 1 }}>
                  220-1101 Core 1 & 220-1102 Core 2
                </Typography>
              )}
              <Box sx={{ mt: 'auto' }}>
                <TagsContainer sx={{ mb: 2, ml: -0.5 }}>
                  {cert.tags.map((tag, i) => (
                    <StyledChip 
                      key={i} 
                      label={tag} 
                      size="small" 
                      sx={{ 
                        backgroundColor: `${cert.color}20`,
                        color: cert.color,
                        m: 0.5,
                      }} 
                    />
                  ))}
                </TagsContainer>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                  {cert.date}
                </Typography>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <StyledChip 
                    label={cert.completed ? "Completed" : "In Progress"} 
                    sx={{ 
                      backgroundColor: cert.completed ? `${cert.color}80` : 'grey.500',
                      color: 'white',
                    }}
                  />
                  {cert.link && (
                    <IconButton onClick={() => handleOpenModal(cert)} sx={{ color: cert.color }}>
                      <Launch />
                    </IconButton>
                  )}
                </Box>
              </Box>
            </CardContent>
          </CertCard>
        ))}
      </Box>

      <Dialog open={openModal} onClose={handleCloseModal}>
        <DialogTitle>Certification Code</DialogTitle>
        <DialogContent>
          <Typography variant="body1" gutterBottom>
            Please copy the code below before proceeding to the certification link:
          </Typography>
          <TextField
            fullWidth
            variant="outlined"
            value={selectedCert?.code || ''}
            InputProps={{
              readOnly: true,
              endAdornment: (
                <IconButton onClick={handleCopyCode}>
                  <ContentCopy />
                </IconButton>
              ),
            }}
            sx={{ mt: 2, mb: 2 }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseModal} sx={{ color: 'white' }}>Cancel</Button>
          <Button onClick={handleGoToLink} variant="contained" color="primary">
            Go to Certification
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default CertsSection;