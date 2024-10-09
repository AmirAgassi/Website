import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import { SectionTitle } from './StyledComponents';

const ContactSection = () => (
  <Box sx={{ my: 8 }}>
    <SectionTitle variant="h4">
      Get in Touch
    </SectionTitle>
    <Typography variant="body1" paragraph>
      Interested in collaborating or have a security concern? Let's connect and make the digital world more secure together.
    </Typography>
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6}>
        <TextField fullWidth label="Name" variant="outlined" margin="normal" />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField fullWidth label="Email" variant="outlined" margin="normal" />
      </Grid>
      <Grid item xs={12}>
        <TextField fullWidth label="Message" variant="outlined" margin="normal" multiline rows={4} />
      </Grid>
      <Grid item xs={12}>
        <Button variant="contained" color="primary" size="large" fullWidth>
          Send Message
        </Button>
      </Grid>
    </Grid>
  </Box>
);

export default ContactSection;