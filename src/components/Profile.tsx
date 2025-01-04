import React, { useState } from 'react';
import { Typography, Box, Container, Avatar, Divider, Link, Tooltip, Button, Dialog, DialogContent, IconButton } from '@mui/material';
import { LinkedIn, GitHub, Description, NavigateNext, NavigateBefore, ZoomIn, ZoomOut, Close as CloseIcon } from '@mui/icons-material';
import { motion } from 'framer-motion';
import { Document, Page } from 'react-pdf';
import { ReactComponent as DiscordIcon } from '../assets/discord.svg';
import amirImage from '../assets/amir.jpg';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';

const Profile = () => {
  const [openPdfModal, setOpenPdfModal] = useState(false);
  const [numPages, setNumPages] = useState<number>(0);
  const [pageNumber, setPageNumber] = useState(1);
  const [scale, setScale] = useState(1.0);

  const resumeUrl = 'https://raw.githubusercontent.com/AmirAgassi/Resume/main/AmirAgassi_Resume.pdf';

  const handleClosePdfModal = () => {
    setOpenPdfModal(false);
    setPageNumber(1);
    setScale(1.0);
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  const socialIconVariants = {
    hover: { scale: 1.2, rotate: 5 },
  };

  const projects = [
    { name: 'Konfer', url: 'https://konfer.ca/' },
    { name: 'Shopify', url: 'https://shopify.com' },
    { name: 'HawkHacks', url: 'https://hawkhacks.ca' },
    { name: 'CCubed', url: 'https://www.ccubed.dev' },
    { name: 'LaurierCS', url: 'https://lauriercs.ca' },
    { name: 'HTB Team', url: 'https://app.hackthebox.com/users/activity/2035305' },
  ];

  return (
    <Container maxWidth="sm">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <Box sx={{ textAlign: 'center' }}>
          <motion.div variants={itemVariants} transition={{ delay: 0.2 }}>
            <Avatar
              src={amirImage}
              sx={{ width: 150, height: 150, margin: 'auto', mb: 2, boxShadow: 3 }}
            />
          </motion.div>
          
          <motion.div variants={itemVariants} transition={{ delay: 0.4 }}>
            <Typography variant="h3" sx={{ fontWeight: 'bold', mb: 1, background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              Amir Agassi
            </Typography>
          </motion.div>
          
          <motion.div variants={itemVariants} transition={{ delay: 0.6 }}>
            <Typography variant="subtitle1" sx={{ mb: 2, color: 'text.secondary' }}>
            Software Engineer, Cybersecurity Enthusiast
            </Typography>
          </motion.div>
          
          <motion.div variants={itemVariants} transition={{ delay: 0.8 }}>
            <Divider sx={{ mb: 2, width: '50%', margin: 'auto' }}>
              <Typography variant="overline" sx={{  color: 'text.secondary' }}>seen at</Typography>
            </Divider>
          </motion.div>
          
          <motion.div variants={itemVariants} transition={{ delay: 1 }}>
            <Box sx={{ 
              display: 'flex', 
              flexWrap: 'wrap',
              justifyContent: 'center',
              alignItems: 'center',
              gap: 1,
              paddingBottom: '20px',
              width: '80%',
              margin: '0 auto',
            }}>
              {projects.map((project, index) => (
                <motion.div
                  key={project.name}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  style={{
                    flex: '0 0 28%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    margin: '4px',
                  }}
                >
                  <Link
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    underline="none"
                    sx={{ color: 'text.primary' }}
                  >
                    <Typography
                      variant="h6"
                      sx={{
                        position: 'relative',
                        '&::after': {
                          content: '""',
                          position: 'absolute',
                          width: '0',
                          height: '2px',
                          bottom: '-2px',
                          left: '50%',
                          background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
                          transition: 'all 0.3s ease-in-out',
                        },
                        '&:hover::after': {
                          width: '100%',
                          left: '0',
                        },
                      }}
                    >
                      {project.name}
                    </Typography>
                  </Link>
                </motion.div>
              ))}
            </Box>
          </motion.div>
          
          <motion.div variants={itemVariants} transition={{ delay: 1.2 }}>
            <Box sx={{ display: 'flex', justifyContent: 'center', gap: 3, alignItems: 'center' }}>
              <motion.div whileHover="hover" variants={socialIconVariants}>
                <Link href="https://www.linkedin.com/in/amir-agassi/" target="_blank" rel="noopener noreferrer">
                  <LinkedIn sx={{ fontSize: 30, color: 'text.secondary', cursor: 'pointer' }} />
                </Link>
              </motion.div>
              <motion.div whileHover="hover" variants={socialIconVariants}>
                <Link href="https://github.com/amiragassi" target="_blank" rel="noopener noreferrer">
                  <GitHub sx={{ fontSize: 30, color: 'text.secondary', cursor: 'pointer' }} />
                </Link>
              </motion.div>
              <motion.div whileHover="hover" variants={socialIconVariants}>
                <Tooltip title="@stalepointers" placement="bottom" arrow>
                  <Box sx={{ display: 'flex', alignItems: 'center', color: 'text.secondary', cursor: 'pointer' }}>
                    <DiscordIcon style={{ width: 30, height: 30 }} />
                  </Box>
                </Tooltip>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} style={{ width: 'fit-content' }}>
                <Button
                  variant="outlined"
                  onClick={() => setOpenPdfModal(true)}
                  startIcon={<Description />}
                  size="medium"
                  sx={{
                    borderColor: '#FE6B8B',
                    color: '#FE6B8B',
                    '&:hover': {
                      borderColor: '#FE6B8B',
                      backgroundColor: 'rgba(254, 107, 139, 0.08)',
                    },
                  }}
                >
                  Resume
                </Button>
              </motion.div>
            </Box>
          </motion.div>
        </Box>
      </motion.div>

      {/* Resume PDF Modal */}
      <Dialog
        open={openPdfModal}
        onClose={handleClosePdfModal}
        maxWidth={false}
        PaperProps={{
          sx: {
            height: 'auto',
            maxHeight: '90vh',
            width: 'auto',
            maxWidth: '90vw',
            display: 'flex',
            flexDirection: 'column',
            m: 2
          }
        }}
      >
        <DialogContent sx={{ 
          flex: 1, 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center', 
          overflow: 'hidden',
          p: 2
        }}>
          <Box sx={{ position: 'absolute', right: 8, top: 8, zIndex: 1 }}>
            <IconButton onClick={handleClosePdfModal} size="large">
              <CloseIcon />
            </IconButton>
          </Box>
          <Box sx={{ position: 'absolute', left: 8, top: 8, zIndex: 1, display: 'flex', gap: 1 }}>
            <IconButton 
              href="https://github.com/AmirAgassi/Resume/blob/main/AmirAgassi_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              component={Link}
              size="large"
              sx={{ 
                color: 'text.secondary',
                '&:hover': {
                  color: '#FE6B8B'
                }
              }}
            >
              <GitHub />
            </IconButton>
            <IconButton 
              href={resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              component={Link}
              size="large"
              sx={{ 
                color: 'text.secondary',
                '&:hover': {
                  color: '#FE6B8B'
                }
              }}
            >
              <Description />
            </IconButton>
          </Box>
          <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
            <IconButton onClick={handleZoomOut}>
              <ZoomOut />
            </IconButton>
            <IconButton onClick={handleZoomIn}>
              <ZoomIn />
            </IconButton>
            <IconButton onClick={handlePrevPage} disabled={pageNumber <= 1}>
              <NavigateBefore />
            </IconButton>
            <Typography sx={{ alignSelf: 'center' }}>
              Page {pageNumber} of {numPages}
            </Typography>
            <IconButton onClick={handleNextPage} disabled={pageNumber >= numPages}>
              <NavigateNext />
            </IconButton>
          </Box>
          <Box sx={{ 
            overflow: 'auto', 
            display: 'flex', 
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            height: '100%'
          }}>
            <Document
              file={resumeUrl}
              onLoadSuccess={onDocumentLoadSuccess}
              loading={<Typography>Loading PDF...</Typography>}
            >
              <Page
                pageNumber={pageNumber}
                scale={scale}
                loading={<Typography>Loading page...</Typography>}
              />
            </Document>
          </Box>
        </DialogContent>
      </Dialog>
    </Container>
  );
};

export default Profile;