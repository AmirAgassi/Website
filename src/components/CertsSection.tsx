import React, { useState } from 'react';
import { Box, Typography, Card, CardContent, CardMedia, Chip, IconButton, Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField } from '@mui/material';
import { motion } from 'framer-motion';
import { styled } from '@mui/system';
import { Launch, ContentCopy, Visibility, ZoomIn, ZoomOut, NavigateNext, NavigateBefore, Close as CloseIcon } from '@mui/icons-material';
import { Document, Page } from 'react-pdf';
import pdfjsWorker from 'pdfjs-dist/build/pdf.worker.entry';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';
import { certifications, Certification } from '../data/certifications';

// Set worker source
if (typeof window !== 'undefined' && 'Worker' in window) {
  const { pdfjs } = require('react-pdf');
  pdfjs.GlobalWorkerOptions.workerSrc = pdfjsWorker;
}

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
  const [openPdfModal, setOpenPdfModal] = useState(false);
  const [selectedCert, setSelectedCert] = useState<Certification | null>(null);
  const [numPages, setNumPages] = useState<number>(0);
  const [pageNumber, setPageNumber] = useState(1);
  const [scale, setScale] = useState(1.0);

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

  const handleViewPdf = (cert: Certification) => {
    if (cert.pdf) {
      setSelectedCert(cert);
      setOpenPdfModal(true);
    }
  };

  const handleClosePdfModal = () => {
    setOpenPdfModal(false);
    setSelectedCert(null);
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

  const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
    setNumPages(numPages);
    setPageNumber(1);
  };

  const handlePrevPage = () => {
    setPageNumber(page => Math.max(page - 1, 1));
  };

  const handleNextPage = () => {
    setPageNumber(page => Math.min(page + 1, numPages));
  };

  const handleZoomIn = () => {
    setScale(scale => Math.min(scale + 0.2, 2.0));
  };

  const handleZoomOut = () => {
    setScale(scale => Math.max(scale - 0.2, 0.6));
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
                  <Box>
                    {cert.completed && cert.pdf && (
                      <IconButton onClick={() => handleViewPdf(cert)} sx={{ color: cert.color, mr: 1 }}>
                        <Visibility />
                      </IconButton>
                    )}
                    {cert.link && (
                      <IconButton onClick={() => handleOpenModal(cert)} sx={{ color: cert.color }}>
                        <Launch />
                      </IconButton>
                    )}
                  </Box>
                </Box>
              </Box>
            </CardContent>
          </CertCard>
        ))}
      </Box>

      {/* PDF Modal */}
      <Dialog 
        open={openPdfModal} 
        onClose={handleClosePdfModal}
        maxWidth="lg"
        fullWidth
        aria-labelledby="pdf-dialog-title"
        PaperProps={{
          sx: {
            minHeight: '90vh',
            maxHeight: '90vh'
          }
        }}
      >
        <DialogTitle id="pdf-dialog-title" sx={{ pb: 1 }}>
          {selectedCert?.name} Certificate
          <Box sx={{ position: 'absolute', right: 8, top: 8, display: 'flex', gap: 1 }}>
            <IconButton
              onClick={() => window.open(selectedCert?.pdf, '_blank')}
              color="primary"
              sx={{ color: 'white' }}
              aria-label="open in new tab"
            >
              <Launch />
            </IconButton>
            <IconButton
              onClick={handleClosePdfModal}
              color="primary"
              sx={{ color: 'white' }}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
          </Box>
        </DialogTitle>
        <DialogContent>
          <Box sx={{ 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center',
            height: '100%',
            overflow: 'hidden'
          }}>
            <Box sx={{ 
              display: 'flex', 
              gap: 2, 
              mb: 2,
              alignItems: 'center',
              width: '100%',
              justifyContent: 'center'
            }}>
              <IconButton onClick={handlePrevPage} disabled={pageNumber <= 1}>
                <NavigateBefore />
              </IconButton>
              <Typography>
                Page {pageNumber} of {numPages}
              </Typography>
              <IconButton onClick={handleNextPage} disabled={pageNumber >= numPages}>
                <NavigateNext />
              </IconButton>
              <Box sx={{ mx: 2, borderLeft: 1, height: 24, borderColor: 'divider' }} />
              <IconButton onClick={handleZoomOut} disabled={scale <= 0.6}>
                <ZoomOut />
              </IconButton>
              <Typography>
                {Math.round(scale * 100)}%
              </Typography>
              <IconButton onClick={handleZoomIn} disabled={scale >= 2.0}>
                <ZoomIn />
              </IconButton>
            </Box>
            <Box sx={{ 
              flex: 1, 
              overflow: 'auto', 
              width: '100%',
              display: 'flex',
              justifyContent: 'center',
              '& .react-pdf__Document': {
                lineHeight: 1,
                '& .react-pdf__Page': {
                  marginBottom: 2,
                  '& canvas': {
                    maxWidth: '100%',
                    height: 'auto !important'
                  }
                }
              }
            }}>
              <Document
                file={selectedCert?.pdf}
                onLoadSuccess={onDocumentLoadSuccess}
                loading={
                  <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
                    <Typography>Loading PDF...</Typography>
                  </Box>
                }
                error={
                  <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
                    <Typography color="error">Failed to load PDF. Please try again.</Typography>
                  </Box>
                }
              >
                <Page
                  pageNumber={pageNumber}
                  scale={scale}
                  renderTextLayer={true}
                  renderAnnotationLayer={true}
                />
              </Document>
            </Box>
          </Box>
        </DialogContent>
      </Dialog>

      {/* Code Modal */}
      <Dialog 
        open={openModal} 
        onClose={handleCloseModal}
        aria-labelledby="code-dialog-title"
        disableScrollLock={false}
        keepMounted={false}
      >
        <DialogTitle id="code-dialog-title">Certification Code</DialogTitle>
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
                <IconButton onClick={handleCopyCode} aria-label="copy certification code">
                  <ContentCopy />
                </IconButton>
              ),
            }}
            sx={{ mt: 2, mb: 2 }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseModal}>Cancel</Button>
          <Button onClick={handleGoToLink} variant="contained" color="primary" autoFocus>
            Go to Certification
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default CertsSection;