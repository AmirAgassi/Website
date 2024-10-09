import { styled } from '@mui/system';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import { theme } from '../Theme';

export const Logo = styled('div')({
  fontWeight: 'bold',
  fontSize: '24px',
  cursor: 'pointer',
  color: theme.palette.primary.main,
});

export const HeroSection = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '100px 0',
  position: 'relative',
  overflow: 'hidden',
  width: '100%',
  maxWidth: '100vw',
});

export const HeroContent = styled(Box)({
  maxWidth: '60%',
});

export const HeroImage = styled('img')({
  maxWidth: '35%',
  borderRadius: '50%',
  boxShadow: '0 10px 30px rgba(255, 255, 255, 0.1)',
});

export const SectionTitle = styled(Typography)({
  position: 'relative',
  marginBottom: '40px',
  '&::after': {
    content: '""',
    position: 'absolute',
    bottom: '-10px',
    left: 0,
    width: '50px',
    height: '2px',
    backgroundColor: theme.palette.primary.main,
  },
});

export const SkillCard = styled(Card)({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
  '&:hover': {
    transform: 'translateY(-10px)',
    boxShadow: '0 20px 40px rgba(255, 255, 255, 0.1)',
  },
});

export const ModernBackground = styled(Box)({
  position: 'fixed',
});