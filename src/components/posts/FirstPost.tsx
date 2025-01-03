import React from 'react';
import { Typography, Box, Paper } from '@mui/material';

const FirstPost: React.FC = () => {
  return (
    <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
      <Paper 
        elevation={3} 
        sx={{ 
          width: '100%',
          p: 4, 
          borderRadius: 2,
        }}
      >
        <Typography variant="h2" gutterBottom sx={{
          fontWeight: 'bold',
          background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}>
          My First Blog Post
        </Typography>
        
        <Typography variant="subtitle1" color="text.secondary" gutterBottom>
          Published on January 3, 2024
        </Typography>

        <Box sx={{ my: 4 }}>
          <Typography variant="body1" paragraph>
            dsagsdgasdg
          </Typography>

          <Typography variant="body1" paragraph>
            asdfasdf
          </Typography>

          <Typography variant="h4" gutterBottom sx={{ mt: 4 }}>
            asdfadf
          </Typography>

          <Typography variant="body1" paragraph>
            sdafdsagsadg
          </Typography>
        </Box>
      </Paper>
    </Box>
  );
};

export default FirstPost; 