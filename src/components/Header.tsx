import React from 'react';
import { AppBar, Toolbar, Button, Box } from '@mui/material';
import { styled } from '@mui/system';

const Logo = styled('div')(({ theme }) => ({
  fontWeight: 'bold',
  fontSize: '1.5rem',
  color: theme.palette.primary.main,
}));

const Header = () => {
  return (
    <AppBar position="static" color="transparent" elevation={0}>
    </AppBar>
  );
};

export default Header;