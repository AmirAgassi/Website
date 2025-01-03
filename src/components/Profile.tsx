import React from 'react';
import { Typography, Box, Container, Avatar, Divider, Link, Tooltip } from '@mui/material';
import { LinkedIn, GitHub } from '@mui/icons-material';
import { motion } from 'framer-motion';
import { ReactComponent as DiscordIcon } from '../assets/discord.svg';
import amirImage from '../assets/amir.jpg';

const Profile = () => {
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
    { name: 'CCubed', url: 'https://www.ccubed.dev' },
    { name: 'HawkHacks', url: 'https://hawkhacks.ca' },
    { name: 'HTB Team', url: 'https://app.hackthebox.com/users/activity/2035305' },
    { name: 'Konfer', url: 'https://konfer.ca/' },
    { name: 'LaurierCS', url: 'https://lauriercs.ca' },
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
            <Box sx={{ display: 'flex', justifyContent: 'center', gap: 3 }}>
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
                <Tooltip
                  title="@stalepointers"
                  placement="bottom"
                  arrow
                >
                  <Box 
                    sx={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      color: 'text.secondary', 
                      cursor: 'pointer' 
                    }}
                  >
                    <DiscordIcon style={{ width: 30, height: 30 }} />
                  </Box>
                </Tooltip>
              </motion.div>
            </Box>
          </motion.div>
        </Box>
      </motion.div>
    </Container>
  );
};

export default Profile;