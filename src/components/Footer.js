import React from 'react';
import { Box, Typography, Link } from '@mui/material';
import '../assets/styles/Footer.scss';

const Footer = () => {
  return (
    <Box component="footer" className="footer">
      <Typography variant="body2" align="center">
        &copy; {new Date().getFullYear()} Riana Rahajary. All rights reserved.
      </Typography>
      <Typography variant="body2" align="center">
        <Link href="/contact" color="inherit" underline="hover">
          Contact Us
        </Link> | 
        <Link href="/privacy-policy" color="inherit" underline="hover">
          Privacy Policy
        </Link>
      </Typography>
    </Box>
  );
};

export default Footer;
