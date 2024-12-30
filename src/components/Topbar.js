import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { ExitToApp } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import '../assets/styles/Topbar.css';

const Topbar = () => {
  const navigate = useNavigate();

  const handleSignOut = () => {
    // Sign out logic (clear user session, cookies, etc.)
    console.log('User signed out');
    
    // Redirect to login or home page after sign out
    navigate('/login');
  };

  return (
    <AppBar position="sticky">
      <Toolbar className="header">
        <Typography variant="h6" className="header-title">
          Car Maintenance Tracker
        </Typography>
        
        <div className="header-actions">
          <Button
            variant="contained"
            color="secondary"
            startIcon={<ExitToApp />}
            onClick={handleSignOut}
          >
            Sign Out
          </Button>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Topbar;
