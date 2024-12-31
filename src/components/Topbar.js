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
    navigate('/login');
  };

  return (
    <AppBar position="sticky" sx={{ boxShadow: 'none'}}>
      <Toolbar className="header">
        <Typography variant="h6" className="header-title">
          Car Maintenance Tracker
        </Typography>

        <div className="header-actions">
          <Typography variant="h6" className="greet-user">
            Hi, Mister
          </Typography>
          <Button
            variant="contained"
            startIcon={<ExitToApp />}
            onClick={handleSignOut}
            sx={{
              backgroundColor:'#474747',
            }}
          >
            Sign Out
          </Button>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Topbar;
